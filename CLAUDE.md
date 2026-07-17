# CLAUDE.md — Tirage Tarot

Site statique **Astro**, **multi-pages** (tirage + cartes + grammaire + comment lire),
bilingue **FR/EN**, sans backend. Thème « nuit mystique » (sombre indigo-aubergine + or).
La home tire une carte de tarot (Rider-Waite-Smith) : arcanes majeurs, mineurs, ou jeu
complet ; cartes inversées optionnelles ; tirage « trois temps » optionnel.
Voir `README.md` pour la structure des fichiers.

Pages (sous `/{lang}/`) : `/` (tirage), `/cartes` (galerie), `/grammaire`,
`/comment-lire`. Nav dans l'en-tête (`Base.astro`).

## Commandes

```bash
npm run dev            # serveur de dev (http://localhost:4321/tarot/, souvent déjà lancé en tâche de fond)
npm run build          # build statique → dist/
npx astro check        # vérification de types (viser 0 erreur / 0 warning / 0 hint avant commit)
npx astro dev stop     # arrête le serveur de dev détaché
node scripts/fetch-cards.mjs   # (re)télécharge/convertit les 78 cartes (nécessite `cwebp`)
```

Toujours faire `npx astro check` **et** `npm run build` avant de commiter.

## Langue & style

- **Tout en français** : UI, commentaires de code, messages de commit, réponses.
  Accents obligatoires (jamais d'ASCII pour « à/é/ç… »).
- Les identifiants de code (clés i18n, noms de variables, slugs) restent en anglais
  technique (`major`, `minor`, `reversed`…).
- Commits : impératif court + corps explicatif ; finir par la ligne
  `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
  Ne commiter que quand l'utilisateur le demande (il le fait à chaque étape ici).

## Architecture

- **Astro statique** (`output: 'static'`), i18n intégré : `defaultLocale: 'fr'`,
  `prefixDefaultLocale: true` → `/fr` et `/en` explicites. `redirectToDefaultLocale`
  est **désactivé** ; la racine `/` redirige vers `/fr` via `src/pages/index.astro`.
- Chaque page vit dans `src/pages/[lang]/*.astro` avec
  `getStaticPaths() { return LOCALES.map(lang => ({ params: { lang } })) }`
  et `const locale = Astro.params.lang as Locale`. Profondeur d'import : 2 niveaux
  (`../../lib/…`, `../../data/…`, `../../components/…`).
- Layout unique `src/layouts/Base.astro` : `<head>`, header (marque + **nav** +
  `LangToggle`), pied de page avec les **crédits** (illustrations RWS domaine public +
  Wikimedia), tokens CSS `:root` + styles partagés (`.page-title`, `.nav-link`)
  en `is:global`, polices. Chaque composant de page (`Grammar`, `Method`,
  `Gallery`) porte désormais ses propres styles **scopés**. Prend `locale`,
  `title?`, `description?` (SEO) et `active?` (entrée de nav en cours).

### Fichiers clés

| Fichier | Rôle |
|---|---|
| `src/pages/[lang]/index.astro` | home : tirage tarot (contrôles + carte + lecture + spread) |
| `src/pages/[lang]/cartes.astro` | galerie des 78 cartes (`Gallery.astro`) |
| `src/pages/[lang]/grammaire.astro` | grammaire du tarot (`Grammar.astro`) |
| `src/pages/[lang]/comment-lire.astro` | méthode de lecture (`Method.astro`) |
| `src/pages/index.astro` | redirection racine `/` → `/fr/` |
| `src/components/Gallery.astro` | grille des 78 cartes ; chaque carte → `/{lang}/#id` |
| `src/components/Grammar.astro`, `Method.astro` | sections d'apprentissage (contenu de `data/`) |
| `src/lib/i18n.ts` | libellés d'UI ; `t()`, `ui`, `LOCALES`, types `Locale`/`UIKey` |
| `src/lib/types.ts` | types des cartes (`Card`, `CardContent`, `Orientation`) |
| `src/lib/deck.ts` | `getDeck`, `drawCard`, `drawSpread` ; `DeckMode = 'major' \| 'minor' \| 'full'` |
| `src/lib/dignities.ts`, `quintessence.ts`, `signals.ts` | synthèse du spread |
| `src/components/LangToggle.astro` | bascule FR/EN (conserve la page courante) |
| `src/data/cards.ts` | 78 cartes (22 majeurs rédigés + 56 mineurs), `SUIT_NAMES` |
| `src/data/grammar.ts`, `spread.ts`, `method.ts`, `symbols.ts` | contenus pédagogiques / spread / « lire l'image » |
| `src/data/minor-content.ts` | significations des 56 mineurs |
| `public/cards/` | 78 cartes × 2 rendus WebP (`<id>.webp` 800px « full » + `<id>-thumb.webp` 280px) + `back.svg` + `manifest.json` (provenance) |

## Conventions & pièges (IMPORTANT)

- **i18n symétrique** : `t()` et `UIKey` dérivent de `ui.fr`. Toute clé ajoutée
  doit exister **dans `fr` ET `en`**, sinon erreur de type.
- **Polices** : chargées via `@font-face` maison en `font-display: optional` +
  `<link rel=preload>` dans `Base.astro` (imports `@fontsource-variable/*/files/*.woff2`).
  **Ne pas** revenir à `import '@fontsource-variable/…'` (met `font-display: swap`
  → flash/glitch du titre au chargement). `src/env.d.ts` déclare les modules woff2.
- **Site statique, pas de backend** : aucun état persistant côté serveur.
- **Images** : deux rendus par carte (voir `fetch-cards.mjs`). La carte tirée
  (home) charge le « full » (`card.image`), la galerie / l'historique / la
  grammaire chargent la vignette (`<id>-thumb.webp`). Ne pas servir le full dans
  une liste de vignettes (poids ×10 inutile).
- **Animations** : toujours prévoir `@media (prefers-reduced-motion: reduce)`.
- **Relancer une animation** au clic : `el.classList.remove(x); void el.offsetWidth; el.classList.add(x)`.

## Mécaniques (règles métier)

- **Tarot** : `drawCard(mode, allowReversed)` ; modes `major`/`minor`/`full`
  (arcanes majeurs, mineurs, ou jeu complet des 78 cartes) ; inversé = rotation
  180° + texte `reversed`. Défaut : arcanes majeurs, inversées autorisées. Un
  bouton permet d'explorer l'autre orientation sans re-tirer.

## Déploiement

**GitHub Pages** — déploiement automatique via GitHub Actions
(`.github/workflows/deploy.yml`, action `withastro/action@v3`, Node 22) à chaque
push sur `main`. Publié sous le **sous-chemin du dépôt** (`8area8.github.io/tarot/`) :
`astro.config.mjs` définit `site` + `base: '/tarot/'`, et **tous les liens internes
doivent passer par `import.meta.env.BASE_URL`**. Pour un déploiement à la racine
d'un domaine (Cloudflare Pages, Netlify…), retirer `base`.
