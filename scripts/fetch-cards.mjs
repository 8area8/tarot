#!/usr/bin/env node
// Télécharge les 78 scans RWS (domaine public) depuis Wikimedia Commons,
// les convertit en WebP et écrit un manifeste de provenance.
//
// Prérequis : `cwebp` (paquet webp). Usage : node scripts/fetch-cards.mjs
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'public', 'cards');
const TMP = join(ROOT, '.cache-cards');
const UA = 'tarot-app/0.1 (educational; mikael@popsink.com)';
const QUALITY = 82;

const MAJORS = [
  '00_Fool', '01_Magician', '02_High_Priestess', '03_Empress', '04_Emperor',
  '05_Hierophant', '06_Lovers', '07_Chariot', '08_Strength', '09_Hermit',
  '10_Wheel_of_Fortune', '11_Justice', '12_Hanged_Man', '13_Death',
  '14_Temperance', '15_Devil', '16_Tower', '17_Star', '18_Moon', '19_Sun',
  '20_Judgement', '21_World',
];
const SUITS = { wands: 'Wands', cups: 'Cups', swords: 'Swords', pentacles: 'Pents' };

// id -> titre du fichier Commons
const targets = {};
MAJORS.forEach((name, i) => {
  targets[`major-${String(i).padStart(2, '0')}`] = `File:RWS_Tarot_${name}.jpg`;
});
for (const [suit, prefix] of Object.entries(SUITS)) {
  for (let n = 1; n <= 14; n++) {
    targets[`${suit}-${String(n).padStart(2, '0')}`] = `File:${prefix}${String(n).padStart(2, '0')}.jpg`;
  }
}

const API = 'https://commons.wikimedia.org/w/api.php';

async function resolveImageInfo(titles) {
  const info = {};
  for (let i = 0; i < titles.length; i += 50) {
    const batch = titles.slice(i, i + 50);
    const params = new URLSearchParams({
      action: 'query', titles: batch.join('|'), prop: 'imageinfo',
      iiprop: 'url|size|mime|extmetadata', iiextmetadatafilter: 'LicenseShortName',
      format: 'json', formatversion: '2',
    });
    const res = await fetch(`${API}?${params}`, { headers: { 'User-Agent': UA } });
    const data = await res.json();
    for (const page of data.query.pages) info[page.title.replace(/ /g, '_')] = page;
  }
  return info;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function download(url, dest, attempt = 1) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (res.status === 429 || res.status >= 500) {
    if (attempt > 5) throw new Error(`${res.status} for ${url} (abandon après ${attempt} essais)`);
    const wait = 1000 * 2 ** attempt; // backoff exponentiel
    process.stdout.write(`\n  ${res.status} — nouvel essai dans ${wait / 1000}s…`);
    await sleep(wait);
    return download(url, dest, attempt + 1);
  }
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  mkdirSync(TMP, { recursive: true });

  console.log('Résolution des URLs sur Commons…');
  const info = await resolveImageInfo(Object.values(targets));

  const manifest = [];
  let ok = 0;
  for (const [id, title] of Object.entries(targets)) {
    const page = info[title.replace(/ /g, '_')];
    const ii = page?.imageinfo?.[0];
    if (!ii) { console.error(`  MANQUANT: ${id} (${title})`); continue; }

    const jpg = join(TMP, `${id}.jpg`);
    const webp = join(OUT, `${id}.webp`);
    let bytes = 0;
    if (existsSync(webp)) {
      process.stdout.write(`\r  ${ok + 1}/78  (${id}, déjà présent)     `);
    } else {
      bytes = await download(ii.url, jpg);
      execFileSync('cwebp', ['-quiet', '-q', String(QUALITY), jpg, '-o', webp]);
      await sleep(250); // politesse envers Commons
    }

    manifest.push({
      id,
      file: `${id}.webp`,
      source: ii.descriptionurl || `https://commons.wikimedia.org/wiki/${title}`,
      original: ii.url,
      width: ii.width,
      height: ii.height,
      license: ii.extmetadata?.LicenseShortName?.value ?? 'Public domain',
    });
    ok++;
    if (bytes) process.stdout.write(`\r  ${ok}/78  (${id}, ${(bytes / 1024).toFixed(0)} KB JPEG → WebP)     `);
  }
  console.log();

  manifest.sort((a, b) => a.id.localeCompare(b.id));
  writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Terminé : ${ok}/78 cartes en WebP dans public/cards/`);
  console.log('Manifeste de provenance : public/cards/manifest.json');

  if (existsSync(TMP)) rmSync(TMP, { recursive: true, force: true });
}

main().catch((e) => { console.error(e); process.exit(1); });
