import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * Sauvegarde des épingles depuis l'outil `/annotate` — middleware Vite actif en
 * DÉVELOPPEMENT uniquement (`apply: 'serve'`), donc zéro impact sur le build. Un
 * POST vers `…/__save-pins` réécrit `src/data/card-pins.ts` à partir du JSON reçu.
 */
function annotateSavePlugin() {
  const target = fileURLToPath(new URL('./src/data/card-regions.ts', import.meta.url));
  const r = (n) => Math.round(n * 1e4) / 1e4; // 4 décimales
  const pt = ([x, y]) => `[${r(x)}, ${r(y)}]`;
  const poly = (shape) => `[${shape.map(pt).join(', ')}]`;
  const serialize = (regions) =>
    Object.keys(regions)
      .filter((id) => Array.isArray(regions[id]) && regions[id].length > 0)
      .sort()
      .map((id) => {
        const rows = regions[id]
          .map((rg) => `    { shapes: [${rg.shapes.map(poly).join(', ')}], ref: ${Number(rg.ref)} },`)
          .join('\n');
        return `  ${JSON.stringify(id)}: [\n${rows}\n  ],`;
      })
      .join('\n');
  return {
    name: 'annotate-save',
    apply: 'serve',
    // L'auto-enregistrement réécrit card-regions.ts ; comme ce fichier est importé
    // ailleurs (la home), Vite déclencherait un rechargement complet. On neutralise
    // le hot-update pour CE fichier (l'outil garde son état en mémoire ; la home le
    // relira à son prochain chargement).
    handleHotUpdate(ctx) {
      if (ctx.file === target) return [];
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method !== 'POST' || !req.url.split('?')[0].endsWith('/__save-pins')) return next();
        let body = '';
        req.on('data', (c) => (body += c));
        req.on('end', () => {
          try {
            const regions = JSON.parse(body);
            const src = fs.readFileSync(target, 'utf8');
            const anchor = 'export const CARD_REGIONS: Record<string, Region[]> = {';
            const braceStart = src.indexOf('{', src.indexOf(anchor));
            const braceEnd = src.indexOf('\n};', braceStart);
            const next = `${src.slice(0, braceStart + 1)}\n${serialize(regions)}${src.slice(braceEnd)}`;
            fs.writeFileSync(target, next, 'utf8');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: true }));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: false, error: String(err) }));
          }
        });
      });
    },
  };
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Déployé sur GitHub Pages sous le sous-chemin du dépôt (8area8.github.io/tarot).
  // Tous les liens internes passent par `import.meta.env.BASE_URL` pour rester corrects.
  site: 'https://8area8.github.io',
  base: '/tarot/',
  vite: {
    plugins: [annotateSavePlugin()],
  },
  // Génère sitemap-index.xml + les alternates hreflang FR/EN pour chaque page.
  integrations: [
    sitemap({
      // Exclut la racine `/tarot/` (simple redirection vers /fr/) : le sitemap ne
      // liste que les pages réelles /fr/ et /en/, alignées sur leur canonical.
      filter: (page) => page !== 'https://8area8.github.io/tarot/',
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr', en: 'en' },
      },
    }),
  ],
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      // Les deux langues ont un préfixe explicite : /fr et /en.
      prefixDefaultLocale: true,
      // La racine `/` est redirigée vers /fr par src/pages/index.astro.
      redirectToDefaultLocale: false,
    },
  },
});
