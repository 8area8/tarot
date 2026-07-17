import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Déployé sur GitHub Pages sous le sous-chemin du dépôt (8area8.github.io/tarot).
  // Tous les liens internes passent par `import.meta.env.BASE_URL` pour rester corrects.
  site: 'https://8area8.github.io',
  base: '/tarot/',
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
