# Les Terres Libres

Hub statique bilingue **FR / EN**, organisé en deux parties :

- **Personnage** → **Profil** : un nom et 5 prismes (instinct, concentration,
  éloquence, créativité, persévérance), chacun réglé sur un équilibre
  (confiant / équilibré / risqué). Sauvegarde automatique en localStorage,
  avec un visuel de prisme réfractant qui réagit à la configuration.
- **Agir** → **Action** : tente une action incertaine portée par un prisme.
  L'équilibre du prisme fixe le nombre de lancers de pièce (risqué 1, équilibré 2,
  confiant 3) ; on s'arrête à la première Face (réussite), sinon échec.
- **Oracles** :
  - **Tarot** — tirage d'une carte Rider-Waite-Smith (jeu complet, majeurs ou
    mineurs), option inversée. Illustrations et textes **domaine public**.
  - **Pièce** — pile ou face (Soleil / Lune), lancer 3D.

Stack : [Astro](https://astro.build) (sortie statique) · i18n par routes `/fr` `/en`.

Routes : `/{lang}` (hub) · `/{lang}/personnage` · `/{lang}/agir` · `/{lang}/oracles`
· `/{lang}/oracles/tarot` · `/{lang}/oracles/coin` · `/{lang}/credits`.

## Développement

```bash
npm install
npm run dev        # http://localhost:4321
```

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualise le build |
| `npx astro check` | Vérification de types |
| `npx astro dev stop` | Arrête le serveur de dev détaché |

## Structure

```
src/
  data/
    cards.ts           # 78 cartes : structure + contenu des majeurs
    minor-content.ts   # significations des 56 mineurs
  lib/
    types.ts           # types Card / CardContent
    deck.ts            # filtres de jeu + tirage (drawCard)
    coin.ts            # lancer de pièce (flipCoin)
    profile.ts         # personnage : prismes + load/save localStorage
    i18n.ts            # libellés d'UI FR/EN
  layouts/Base.astro   # layout, header (nav), hreflang
  components/           # LangToggle, …
  pages/[lang]/
    index.astro        # hub (Personnage / Agir / Oracles)
    personnage.astro   # profil (nom + prismes)
    agir.astro         # action (prisme + lancers de pièce)
    credits.astro
    oracles/           # index (Tarot / Pièce) + tarot + coin
public/cards/           # 78 illustrations WebP + back.svg + manifest.json
scripts/fetch-cards.mjs # (re)télécharge et convertit les illustrations
```

## Illustrations

Les 78 scans proviennent de l'édition RWS de 1909 (domaine public) via
Wikimedia Commons. Pour les régénérer (nécessite `cwebp` — paquet `webp`) :

```bash
node scripts/fetch-cards.mjs
```

Le script est reprenable (retry/backoff, saute les fichiers déjà présents) et
écrit `public/cards/manifest.json` (provenance et licence par carte).

## Déploiement — Cloudflare Pages

Site 100 % statique déployé à la racine du domaine (pas de `base` à configurer).

- **Build command** : `npm run build`
- **Build output directory** : `dist`
- **Node version** : 20+

Netlify / GitHub Pages fonctionnent aussi (pour GitHub Pages en sous-chemin,
définir `base` dans `astro.config.mjs`).

## Licence & crédits

Illustrations : domaine public (Pamela Colman Smith, 1909). Significations :
textes originaux contemporains inspirés de *The Pictorial Key to the Tarot*
(A. E. Waite, 1911, domaine public). Voir la page **Crédits** du site.
