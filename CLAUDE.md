# CLAUDE.md — Les Terres Libres

Hub statique **Astro**, bilingue **FR/EN**, sans backend. Thème « nuit mystique »
(sombre indigo-aubergine + or). Trois parties : **Personnage**, **Agir**, **Oracles**
(Tarot + Pièce). Voir `docs/STRATEGIE.md` §0 pour la vue d'ensemble, `README.md`
pour la structure des fichiers.

## Commandes

```bash
npm run dev            # serveur de dev (http://localhost:4321, souvent déjà lancé en tâche de fond)
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
  technique (`instinct`, `confident`, `heads`…).
- Commits : impératif court + corps explicatif ; finir par la ligne
  `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
  Ne commiter que quand l'utilisateur le demande (il le fait à chaque étape ici).

## Architecture

- **Astro statique** (`output: 'static'`), i18n intégré : `defaultLocale: 'fr'`,
  `prefixDefaultLocale: true` → `/fr` et `/en` explicites, `/` redirige vers `/fr`
  (via `src/pages/index.astro`).
- Chaque page vit dans `src/pages/[lang]/…` avec
  `getStaticPaths() { return LOCALES.map(lang => ({ params: { lang } })) }`
  et `const locale = Astro.params.lang as Locale`.
- **Profondeur d'import** : une page sous `oracles/` est à 3 niveaux
  (`../../../lib/…`) ; une page directe sous `[lang]/` est à 2 niveaux (`../../lib/…`).
- Layout unique `src/layouts/Base.astro` : `<head>`, header (nav + LangToggle),
  footer, tokens CSS `:root` (`is:global`), polices. Prend `locale` et `title?`.

### Fichiers clés

| Fichier | Rôle |
|---|---|
| `src/lib/i18n.ts` | libellés d'UI ; `t()`, `ui`, `LOCALES`, types `Locale`/`UIKey` |
| `src/lib/types.ts` | types des cartes (`Card`, `CardContent`, `Orientation`) |
| `src/lib/deck.ts` | `getDeck()`, `drawCard()` (tarot) |
| `src/lib/coin.ts` | `flipCoin()` → `'heads'` (Face/Soleil) \| `'tails'` (Pile/Lune) |
| `src/lib/profile.ts` | `PRISMS`, `BALANCES`, `Profile`, `load/saveProfile` (localStorage) |
| `src/data/cards.ts` | 78 cartes (22 majeurs rédigés + 56 mineurs) |
| `src/data/minor-content.ts` | significations des 56 mineurs |
| `public/cards/` | 78 WebP + `back.svg` + `manifest.json` (provenance) |

## Conventions & pièges (IMPORTANT)

- **i18n symétrique** : `t()` et `UIKey` dérivent de `ui.fr`. Toute clé ajoutée
  doit exister **dans `fr` ET `en`**, sinon erreur de type. Pour une clé dynamique :
  `t(locale, \`prism.${p}\` as UIKey)`.
- **Polices** : chargées via `@font-face` maison en `font-display: optional` +
  `<link rel=preload>` dans `Base.astro` (imports `@fontsource-variable/*/files/*.woff2`).
  **Ne pas** revenir à `import '@fontsource-variable/…'` (met `font-display: swap`
  → flash/glitch du titre au chargement). `src/env.d.ts` déclare les modules woff2.
- **Site statique, pas de backend** : tout état persistant = **localStorage**
  (voir `profile.ts`, clé `ltl.profile.v1`, lecture tolérante avec fusion des défauts).
- **Animations** : toujours prévoir `@media (prefers-reduced-motion: reduce)`.
- **Spécificité CSS** : une règle `.x[data-attr='v']` bat `.x` seul — pour la
  surpasser (ex. en reduced-motion) utiliser un sélecteur d'attribut de spécificité
  égale (`.x[data-attr]`) placé après.
- **SVG `<use>` + `<symbol>`** : mettre les couleurs en **attributs inline**
  (`fill="#…"`) dans le symbole ; les classes CSS ne traversent pas toujours l'instance.
- **Relancer une animation** au clic : `el.classList.remove(x); void el.offsetWidth; el.classList.add(x)`.
- **Test de logique (`lib/*.ts`) hors navigateur** : Node ne résout pas les imports
  TS sans extension. Bundler d'abord avec esbuild (présent via Vite) :
  ```bash
  ./node_modules/.bin/esbuild test.mjs --bundle --platform=node --format=esm --outfile=out.mjs && node out.mjs
  ```
  (importer les modules par chemin absolu `/Users/.../src/lib/x.ts`).

## Mécaniques (règles métier)

- **Prismes** (`profile.ts`) : 5, affichés en **ordre spectral**
  (`instinct`🔴, `perseverance`🟡, `eloquence`🟢, `concentration`🔵, `creativity`🟣).
  Couleurs : `#e0564c #e8cf55 #5fb573 #5b8fd6 #a578d6`.
  Chaque prisme a une **phrase** (`prism.<p>.desc`) et un **équilibre**
  (`confident` / `balanced` / `risky`).
- **Pièce** : `heads` = Face = Soleil ; `tails` = Pile = Lune.
- **Agir** — landing (`agir/index.astro`) avec deux pages :
  - **Action** (`agir/action.astro`) : tentatives = { risky: 1, balanced: 2,
    confident: 3 } ; on lance jusqu'à la 1ʳᵉ Face → **réussite**, sinon **échec**.
    Issues critiques : réussite + `risky` → **Retournement** ; échec + `confident`
    → **Excès de confiance**.
  - **Confrontation** (`agir/confrontation.astro`) : deux jauges **asymétriques**
    (`WIN_TARGET = 5`, `LOSE_TARGET = 3`). Chaque round = une action ; réussite +1
    (ou +2 si `risky`) côté Victoire, échec +1 (ou +2 si `confident`) côté Échec.
    L'asymétrie 5/3 est **volontaire** : les actions favorisant la réussite
    (50–87,5 %), un seuil Échec plus bas rend la défaite crédible (~50–83 % de victoire).
  - Le composant « pièce par emplacement » (slots + `flipSlot`) est **dupliqué**
    entre Action et Confrontation (scripts de page isolés) — garder les deux en phase.
- **Tarot** : `drawCard(mode, allowReversed)` ; modes `full`/`major`/`minor` ;
  inversé = rotation 180° + texte `reversed`.

## Ajouter une page / section

1. Créer `src/pages/[lang]/<slug>.astro` (ou sous `oracles/`) avec le
   `getStaticPaths`/`locale` standard et `<Base locale={locale} title={…}>`.
2. Ajouter les libellés dans `ui.fr` **et** `ui.en` de `i18n.ts`.
3. Lier depuis le hub (`index.astro`) et/ou le header (`Base.astro`).
4. `npx astro check` + `npm run build`, vérifier les routes.

## Déploiement

**Cloudflare Pages** — build `npm run build`, output `dist`, déployé à la racine
du domaine (pas de `base` à configurer). Alternative : Netlify.
