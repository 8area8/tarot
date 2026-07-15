# Tirage Tarot — Document de stratégie

> Site statique bilingue **FR/EN**, bâti sur **Astro**, sans backend.
> Ce document retrace la stratégie du projet et son état livré. Pour les détails
> opérationnels, voir `CLAUDE.md` (conventions, pièges, commandes) et `README.md`
> (structure des fichiers, déploiement).

---

## 0. État actuel (livré)

**Tirage Tarot** — site **multi-pages**, thème « nuit mystique »
(sombre indigo-aubergine + or, serifs Cormorant/EB Garamond), i18n par routes
`/fr` et `/en`, nav en en-tête.

```
/                          Redirection → /fr/
/{lang}                    Tirage : contrôles + carte + lecture + spread
/{lang}/cartes             Galerie des 78 cartes (→ /{lang}/#id)
/{lang}/grammaire          Grammaire du tarot
/{lang}/comment-lire       Comment lire (méthode)
```

**Ce que fait le site** :
- Choix du **jeu** : arcanes majeurs (défaut), mineurs, ou jeu complet (78 cartes).
- Interrupteur **cartes inversées** (activé par défaut).
- **Tirage** d'une carte : dos → révélation (flip) → illustration (éventuellement
  pivotée à 180°) + nom.
- Tirage **« trois temps »** (Situation · Action · Conséquence) : dignités
  élémentaires, signaux, quintessence.
- **Lecture** : mots-clés + signification correspondant à l'orientation, rédigés
  dans un cadre **JDR solo** (ambiance / piste narrative, le négatif assumé).
- **« Étudier la carte »** : l'image (symboles RWS) + la formule (élément × nombre).
- **Explorer l'autre orientation** sans re-tirer.
- **Permalien** vers un tirage précis + **copie** de la lecture.
- **Galerie** des 78 cartes, groupées par arcane / couleur (page dédiée).
- **Grammaire** et **Comment lire** : pages d'apprentissage.

Détails techniques : voir `CLAUDE.md` et `README.md`.

---

## 1. Objectif & périmètre

Un site statique (déployable sur n'importe quel hébergeur de fichiers : GitHub
Pages, Netlify, Cloudflare Pages…) qui permet :

- **Tirage d'une seule carte** sur l'un des trois decks :
  - deck **complet** (78 cartes) ;
  - **arcanes majeurs** uniquement (22 cartes) ;
  - **arcanes mineurs** uniquement (56 cartes).
- Révélation de la carte : **illustration + nom**.
- **Texte explicatif** avec **mots-clés** et signification.
- Option **carte inversée** (tirage à l'envers) avec un texte de signification
  *inversée* distinct.
- **Bilingue FR / EN**, bascule de langue.

**Hors périmètre** (backlog éventuel) : tirages multi-cartes (croix celtique,
3 cartes…), historique de tirages, comptes utilisateur, PWA/offline.

---

## 2. Statut légal — droit d'auteur ✅

Point vérifié car il conditionne tout le projet.

- Le deck original RWS a été **publié en 1909** (William Rider & Son), illustré par **Pamela Colman Smith** (décédée en 1951) sur les instructions d'**A. E. Waite**.
- **Domaine public aux USA** depuis 1966 (publication + 28 + 28 ans).
- **Domaine public au Royaume-Uni et dans l'UE** : la règle « vie de l'autrice + 70 ans » place l'œuvre dans le domaine public **depuis le 1ᵉʳ janvier 2022** (Colman Smith † 1951).
- ⚠️ **Attention** : les **versions colorisées / « enhanced » modernes** (ex. l'édition U.S. Games 1971, ou les retouches récentes vendues en ligne) portent un **copyright sur le nouveau matériel ajouté**. Un litige récent (Siren Imports vs VHNS, 2022+) confirme que seule **l'œuvre originale de 1909** est libre.

**Conclusion** : on n'utilise **que les scans de l'édition originale 1909** (ou des re-numérisations explicitement CC0/PD), jamais une édition colorisée moderne. Les **crédits** (provenance et statut PD) figurent dans le pied de page du site.

---

## 3. Sources d'assets

### 3.1 Images (illustrations des cartes)

| Source | Contenu | Licence | Remarque |
|---|---|---|---|
| **metabismuth/tarot-json** (GitHub) | 78 scans RWS `350×600px`, ~7 Mo total + JSON structurel | MIT (code) / images PD-US | Nommage propre `m00.jpg`, `w01.jpg`… idéal pour automatiser |
| **luciellaes — RWS Cards CC0** (itch.io) | Re-numérisation propre, déclarée **CC0** | CC0 | Zéro contrainte d'attribution |
| **Wikimedia Commons** — *Category:Rider-Waite tarot deck* | Scans haute résolution | PD | **Source retenue** (haute déf) |
| **sacred-texts.com /tarot** | Scans + textes de Waite | PD | Source historique de référence |

**Décision (priorité = meilleure résolution)** : source primaire **Wikimedia Commons** (*Category:Rider-Waite tarot deck*), qui offre les scans **haute résolution** de l'édition 1909. Fallback **CC0 (luciellaes)** puis **metabismuth** (350×600) si une carte manque en haute déf. Vérifier que chaque scan est bien **l'édition originale 1909** (et non une colorisation moderne sous copyright).

Traitement : **héberger localement** (`public/cards/`), **pas** de hotlink externe ; **renommer** selon `id` (`major-00.webp`…) ; **optimiser en WebP** ; prévoir un **dos de carte** (card back).

**✅ Fait** — Les 78 cartes ont été récupérées depuis Wikimedia Commons via `scripts/fetch-cards.mjs` (résolvable/reprenable, retry+backoff, User-Agent poli) :
- Source : scans **édition 1909**, tous marqués **« Public domain »**.
- Sortie : `public/cards/<id>.webp` + **`public/cards/manifest.json`** (provenance : source Commons, URL originale, dimensions, licence — alimente les crédits).
- Dos de carte : **`public/cards/back.svg`** (dessin original, aucun problème de droits).

### 3.2 Textes (mots-clés + significations droit / inversé)

La source **canonique et intégralement domaine public** est :

> **A. E. Waite — *The Pictorial Key to the Tarot* (1911)**

Ce livre contient, pour **chacune des 78 cartes**, une section *« Divinatory Meanings »* **et** *« Reversed »*. C'est littéralement le texte de référence du deck.

- Disponible sur **Project Gutenberg** et **sacred-texts.com** (texte brut réutilisable).
- **Ton retenu** : rédaction **originale contemporaine** en cadre **JDR solo** (ambiance / piste narrative), pas la reprise littérale du texte de Waite. Waite 1911 sert de **socle de référence** (structure droit/inversé, mots-clés, esprit de chaque carte).

**Français & anglais** écrits en parallèle pour un ton naturel dans chaque langue (pas une traduction mot-à-mot).

**Décision** : construire notre **propre dataset TS bilingue** (voir §4), rédigé en interne (contenu original) en s'appuyant sur Waite 1911 comme référence — un site statique embarque ses données, pas d'API externe.

---

## 4. Modèle de données

Source de vérité versionnée dans le repo, en **TypeScript typé** (et non JSON) pour
bénéficier de la vérification de types (`astro check`) :

- `src/data/cards.ts` — les 78 cartes : structure (`id`, `arcana`, `suit`,
  `number`, image) + contenu rédigé des **22 majeurs** ; `SUIT_NAMES`.
- `src/data/minor-content.ts` — significations bilingues des **56 mineurs**.
- `src/lib/types.ts` — types `Card`, `CardContent`, `Orientation`.

Structure logique d'une carte :

```ts
{
  id: 'major-00',            // identifiant stable, indépendant de la langue
  arcana: 'major',           // 'major' | 'minor'
  suit: null,                // null | 'wands' | 'cups' | 'swords' | 'pentacles'
  number: 0,                 // 0–21 (majeurs) ou 1–14 (mineurs, 11–14 = figures)
  image: 'major-00.webp',    // fichier dans public/cards/
  name: { fr: 'Le Mat', en: 'The Fool' },
  content: {                 // null si non rédigé
    keywords: { upright: { fr: [...], en: [...] }, reversed: { fr: [...], en: [...] } },
    meaning:  { upright: { fr: '…', en: '…' },     reversed: { fr: '…', en: '…' } },
  },
}
```

**Principes** :
- **`id` stable et neutre en langue** → sert de clé pour les images et le permalien.
- Toutes les chaînes visibles sont des **objets `{ fr, en }`** → i18n dans la donnée.
- Les 3 modes de deck sont de **simples filtres** sur `arcana` (`getDeck` dans
  `src/lib/deck.ts`) : complet = tout ; majeurs = `arcana === 'major'` ;
  mineurs = `arcana === 'minor'`.

---

## 5. Architecture Astro & i18n

- **Astro** en mode statique (`output: 'static'`), build → `dist/` déployable tel quel.
- **i18n** : **routes localisées** via le routing intégré d'Astro — `/fr/…` et
  `/en/…`, défaut **FR** (`prefixDefaultLocale: true`), + un toggle dans le header.
  La racine `/` redirige vers `/fr/` (`src/pages/index.astro`).
- **Logique de tirage** = `src/lib/deck.ts` : `getDeck(mode)` filtre le sous-ensemble,
  `drawCard(mode, allowReversed)` tire un index aléatoire + un booléen d'inversion.
  Aucune donnée serveur.
- **Rendu** : tout est **inline** dans `src/pages/[lang]/index.astro` (contrôles,
  carte, lecture, galerie) — pas de composants `Card`/`DeckSelector` séparés.
  L'inversion visuelle = rotation CSS `transform: rotate(180deg)`.
- **Animations** : flip de carte au tirage (CSS `transform`), avec repli
  `@media (prefers-reduced-motion: reduce)`.
- **Polices** : `@font-face` maison en `font-display: optional` + `preload` dans
  `Base.astro` (voir `CLAUDE.md`).

---

## 6. Fonctionnalités & UX

**Écran principal** :
1. Choix du **deck** (majeurs / mineurs / complet) — segmented control.
2. Interrupteur **« autoriser les cartes inversées »** (activé par défaut).
3. Bouton **« Tirer une carte »**.
4. Zone de révélation : dos de carte → flip → illustration (éventuellement
   pivotée) + nom.
5. Sous la carte : **mots-clés** (badges) + **texte** de signification selon
   l'orientation ; bouton **explorer l'autre orientation** ; **permalien** + **copie**.
6. **Galerie** des 78 cartes, groupées par arcane / couleur.
7. **Toggle FR/EN** en header ; **crédits** en pied de page.

**Accessibilité** : contraste, `alt` descriptif, orientation annoncée textuellement
(« inversée »), focus clavier ; validation par `Entrée`.

---

## 7. Arborescence projet (livrée)

```
tarot/
├─ docs/
│  └─ STRATEGIE.md            ← ce document
├─ public/
│  ├─ cards/                  ← 78 WebP + back.svg + manifest.json (provenance PD)
│  └─ favicon.svg
├─ src/
│  ├─ data/
│  │  ├─ cards.ts             ← 78 cartes (structure + contenu des majeurs)
│  │  ├─ minor-content.ts     ← significations des 56 mineurs
│  │  ├─ grammar.ts           ← grammaire (éléments, nombres, cour, voyage, dignités)
│  │  ├─ spread.ts            ← positions du tirage « trois temps »
│  │  ├─ method.ts            ← étapes « comment lire »
│  │  └─ symbols.ts           ← « lire l'image » : symboles RWS des 78 cartes
│  ├─ lib/
│  │  ├─ deck.ts              ← filtres deck + tirage (getDeck, drawCard, drawSpread)
│  │  ├─ dignities.ts         ← dignités élémentaires (synthèse du spread)
│  │  ├─ signals.ts           ← signaux du spread
│  │  ├─ quintessence.ts      ← thème caché (somme réduite en arcane majeur)
│  │  ├─ i18n.ts              ← libellés d'UI FR/EN
│  │  └─ types.ts             ← types Card / CardContent / Orientation
│  ├─ components/
│  │  ├─ LangToggle.astro     ← bascule FR/EN (conserve la page)
│  │  ├─ Gallery.astro        ← grille des 78 cartes
│  │  ├─ Grammar.astro        ← sections de grammaire
│  │  └─ Method.astro         ← étapes « comment lire »
│  ├─ pages/
│  │  ├─ index.astro          ← redirection / → /fr/
│  │  └─ [lang]/
│  │     ├─ index.astro       ← home : tirage (fr/en)
│  │     ├─ cartes.astro      ← galerie
│  │     ├─ grammaire.astro   ← grammaire
│  │     └─ comment-lire.astro← méthode
│  ├─ layouts/Base.astro      ← <head>, header (nav), crédits, styles partagés
│  └─ env.d.ts
├─ scripts/
│  └─ fetch-cards.mjs         ← récupère/convertit les 78 illustrations
├─ .github/workflows/deploy.yml
├─ astro.config.mjs
└─ package.json
```

---

## 8. Plan de mise en œuvre (historique — livré)

1. ✅ **Init Astro** + config i18n + layout de base + déploiement.
2. ✅ **Assets images** : récupération PD (Wikimedia), renommage `id`, WebP, dos de carte.
3. ✅ **Dataset** : `cards.ts` — structure + les **22 majeurs**.
4. ✅ **Moteur de tirage** (`lib/deck.ts`) : filtres deck, aléatoire, inversion (`rng` injectable).
5. ✅ **UI** : sélecteur de deck, bouton tirer, carte, mots-clés + texte, toggle langue.
6. ✅ **Contenu** : les **56 mineurs** (EN + FR).
7. ✅ **Finitions** : flip, accessibilité, crédits PD (pied de page), révélation,
   permalien, copie, galerie, responsive.
8. **Backlog** : tirages multi-cartes, historique, PWA offline, partage.

---

## 9. Décisions actées

- [x] **i18n** : routes localisées `/fr` `/en` (défaut FR + toggle).
- [x] **Ton du contenu** : rédaction originale contemporaine, cadre JDR solo, socle Waite 1911.
- [x] **Images** : Wikimedia Commons haute résolution (priorité qualité), fallback CC0/metabismuth.
- [x] **Hébergement** : **GitHub Pages** — déploiement automatique via GitHub Actions
  (`.github/workflows/deploy.yml`) à chaque push sur `main`. Le site est publié sous
  le **sous-chemin du dépôt** (`8area8.github.io/tarot/`) : `astro.config.mjs` définit
  `site` + `base: '/tarot/'`, et tous les liens internes passent par
  `import.meta.env.BASE_URL`. Pour un déploiement à la racine (Cloudflare Pages,
  Netlify), retirer `base`.

---

## Sources

- [Rider–Waite Tarot — Wikipedia](https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot)
- [The Rider-Waite-Smith Tarot Card Copyright FAQ — sacred-texts.com](https://sacred-texts.com/tarot/faq.htm)
- [The Copyright Battle Over a Tarot Card Deck — Plagiarism Today](https://www.plagiarismtoday.com/2024/02/28/the-copyright-battle-over-a-tarot-card-deck/)
- [metabismuth/tarot-json (GitHub)](https://github.com/metabismuth/tarot-json)
- [Rider-Waite Smith Tarot Cards (CC0) — luciellaes / itch.io](https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0)
- [Category:Rider-Waite tarot deck — Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck)
- [A. E. Waite — The Pictorial Key to the Tarot (sacred-texts.com)](https://sacred-texts.com/tarot/pkt/index.htm)
</content>
