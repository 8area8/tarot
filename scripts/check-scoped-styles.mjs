#!/usr/bin/env node
/**
 * Garde-fou anti-piège « styles scopés vs DOM créé en JS » (Astro).
 *
 * Dans un composant Astro, un `<style>` scopé compile ses sélecteurs avec un
 * attribut `[data-astro-cid-…]` que seuls les éléments du TEMPLATE portent. Les
 * éléments créés en JS (document.createElement + className / classList) ne l'ont
 * pas → la règle scopée ne les atteint jamais. Il faut alors `:global(.classe)`.
 *
 * Ce script signale toute classe qui est À LA FOIS :
 *   - assignée en JS (`.className = …`, `classList.add/toggle/remove(…)`),
 *   - ciblée par un sélecteur SCOPÉ non-`:global` dans un `<style>` (sans is:global),
 *   - et jamais présente dans un `:global(…)` du même fichier.
 *
 * Usage : node scripts/check-scoped-styles.mjs [fichier.astro ...]
 * Sans argument : scanne src/**/ /*.astro. Sortie ≠ 0 si un piège est détecté.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith('.astro')) out.push(p);
  }
  return out;
}

function blocks(src, tag) {
  const re = new RegExp(`<${tag}([^>]*)>([\\s\\S]*?)</${tag}>`, 'g');
  const found = [];
  let m;
  while ((m = re.exec(src))) found.push({ attrs: m[1], body: m[2] });
  return found;
}

// Classes posées sur des éléments CRÉÉS EN JS (le seul cas qui casse : ces éléments
// n'ont pas l'attribut de scope). On suit les variables issues de
// `document.createElement`, puis les classes qu'on leur assigne. Les `classList`
// sur des éléments du TEMPLATE (refs querySelector) sont volontairement ignorés :
// ceux-là portent le scope, leurs règles scopées marchent.
function jsClasses(scriptBody) {
  const set = new Set();
  const created = new Set();
  for (const m of scriptBody.matchAll(/(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*document\.createElement/g)) {
    created.add(m[1]);
  }
  if (created.size === 0) return set;
  const esc = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const alt = [...created].map(esc).join('|');
  const add = (str) => {
    for (const c of str.split(/\s+/)) if (c) set.add(c);
  };
  // V.className = '...'  (littéral, ou premier littéral d'une concaténation)
  for (const m of scriptBody.matchAll(new RegExp(`\\b(?:${alt})\\.className\\s*=\\s*(['"\`])([^'"\`$]*)`, 'g'))) {
    add(m[2]);
  }
  // V.classList.add/toggle/remove('a', 'b', ...) sur un élément créé en JS
  for (const m of scriptBody.matchAll(new RegExp(`\\b(?:${alt})\\.classList\\.(?:add|toggle|remove)\\(([^)]*)\\)`, 'g'))) {
    for (const lit of m[1].matchAll(/(['"`])([^'"`]+)\1/g)) set.add(lit[2]);
  }
  return set;
}

// Classes ciblées par un sélecteur scopé (hors :global(...)) d'un <style> non-global.
function scopedClasses(styleBody) {
  // retire le contenu des :global(...) pour ne garder que le scopé
  const withoutGlobal = styleBody.replace(/:global\([^)]*\)/g, ' ');
  const set = new Set();
  for (const m of withoutGlobal.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)) set.add(m[1]);
  return set;
}

function globalClasses(styleBody) {
  const set = new Set();
  for (const g of styleBody.matchAll(/:global\(([^)]*)\)/g)) {
    for (const m of g[1].matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)) set.add(m[1]);
  }
  return set;
}

const targets = process.argv.slice(2).length
  ? process.argv.slice(2)
  : walk(join(ROOT, 'src'));

let problems = 0;
for (const file of targets) {
  if (!file.endsWith('.astro')) continue;
  // On retire les commentaires HTML : un `<style>`/`<script>` cité dans un
  // commentaire ne doit pas être pris pour un vrai bloc (faux positifs).
  const src = readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '');

  const js = new Set();
  for (const s of blocks(src, 'script')) for (const c of jsClasses(s.body)) js.add(c);
  if (js.size === 0) continue;

  const scoped = new Set();
  const global = new Set();
  for (const s of blocks(src, 'style')) {
    if (/\bis:global\b/.test(s.attrs)) continue; // <style is:global> → tout est global
    for (const c of scopedClasses(s.body)) scoped.add(c);
    for (const c of globalClasses(s.body)) global.add(c);
  }

  const offenders = [...js].filter((c) => scoped.has(c) && !global.has(c)).sort();
  if (offenders.length) {
    problems += offenders.length;
    console.error(`\n✖ ${relative(ROOT, file)}`);
    for (const c of offenders) {
      console.error(`   .${c} — créée en JS mais stylée en scopé (non :global) → invisible.`);
    }
  }
}

if (problems) {
  console.error(
    `\n${problems} classe(s) piégée(s). Enveloppe leurs règles dans :global(…) ` +
      `(ou mets le <style> en is:global). Voir mémoire « astro-scoped-styles-js-dom ».\n`,
  );
  process.exit(1);
}
console.log('✓ Styles scopés vs DOM JS : aucun piège détecté.');
