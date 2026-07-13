import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Site statique déployé à la racine du domaine (Cloudflare Pages) → pas de `base`.
  output: 'static',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      // Les deux langues ont un préfixe explicite : /fr et /en.
      prefixDefaultLocale: true,
      // `/` redirige vers /fr.
      redirectToDefaultLocale: true,
    },
  },
});
