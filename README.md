# Tirage Tarot

Site statique **Astro**, **une seule page**, bilingue **FR / EN**, sans backend.
On tire une carte de tarot **Rider-Waite-Smith** : arcanes majeurs, mineurs, ou
jeu complet, cartes inversées optionnelles. Thème « nuit mystique »
(indigo-aubergine + or).

Les textes de lecture sont rédigés dans un cadre **JDR solo** : chaque carte
propose une ambiance / une piste narrative plutôt qu'une prédiction. Le négatif
est assumé.

Stack : [Astro](https://astro.build) (sortie statique) · i18n par routes
`/fr` et `/en`.

## Fonctionnalités

- Choix du **jeu** : arcanes majeurs (défaut), mineurs, ou jeu complet (78 cartes).
- **Inversées** activables : rotation 180° + texte de lecture dédié.
- **Révélation** de la carte au clic, avec animation (respecte
  `prefers-reduced-motion`).
- Bouton pour **explorer l'autre orientation** sans re-tirer.
- **Permalien** vers un tirage précis et **copie** de la lecture.
- **Galerie** des 78 cartes, groupées par arcane / couleur.

## Développement

```bash
npm install
npm run dev        # http://localhost:4321/tarot/
```

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement (souvent déjà lancé en tâche de fond) |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualise le build |
| `npx astro check` | Vérification de types (viser 0 erreur / warning / hint) |
| `npx astro dev stop` | Arrête le serveur de dev détaché |

Toujours faire `npx astro check` **et** `npm run build` avant de commiter.

## Structure

```
src/
  data/
    cards.ts           # 78 cartes : structure + contenu des majeurs
    minor-content.ts   # significations des 56 mineurs
  lib/
    types.ts           # types Card / CardContent / Orientation
    deck.ts            # getDeck(mode) + tirage drawCard(mode, allowReversed)
    i18n.ts            # libellés d'UI FR/EN ; t(), ui, LOCALES, types Locale/UIKey
  layouts/
    Base.astro         # layout : <head>, header (marque + LangToggle), crédits, tokens CSS
  components/
    LangToggle.astro   # bascule FR/EN (lien vers /${autre}/)
  pages/
    index.astro        # redirection racine / → /fr/
    [lang]/index.astro # la page : contrôles + carte + lecture + galerie
public/
  cards/               # 78 illustrations WebP + back.svg + manifest.json (provenance)
  favicon.svg
scripts/
  fetch-cards.mjs      # (re)télécharge et convertit les 78 illustrations
docs/
  STRATEGIE.md
```

## Illustrations

Les 78 scans proviennent de l'édition RWS de 1909 (domaine public) via
Wikimedia Commons. Pour les régénérer (nécessite `cwebp` — paquet `webp`) :

```bash
node scripts/fetch-cards.mjs
```

Le script est reprenable (retry/backoff, saute les fichiers déjà présents) et
écrit `public/cards/manifest.json` (provenance et licence par carte).

## Déploiement — GitHub Pages

Site 100 % statique, déployé automatiquement via GitHub Actions
(`.github/workflows/deploy.yml`) à chaque push sur `main`.

Le site est publié sous le **sous-chemin du dépôt** (`8area8.github.io/tarot/`) :
`astro.config.mjs` définit `site` et `base: '/tarot/'`, et tous les liens
internes passent par `import.meta.env.BASE_URL`.

Pour un déploiement à la racine d'un domaine (Cloudflare Pages, Netlify…),
retirer `base` de `astro.config.mjs`.

## Licence & crédits

Illustrations : domaine public (Pamela Colman Smith, 1909). Significations :
textes originaux contemporains inspirés de *The Pictorial Key to the Tarot*
(A. E. Waite, 1911, domaine public). Voir le pied de page du site.
</content>
</invoke>
