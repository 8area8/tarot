import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Déployé sur GitHub Pages sous le sous-chemin du dépôt (8area8.github.io/tarot).
  // Tous les liens internes passent par `import.meta.env.BASE_URL` pour rester corrects.
  site: 'https://8area8.github.io',
  base: '/tarot/',
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
