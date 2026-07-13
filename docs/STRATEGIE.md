# Les Terres Libres — Document de stratégie

> Hub frontend statique bilingue **FR/EN**, bâti sur **Astro**.
> Le projet a démarré comme un tirage de tarot (RWS, domaine public) puis est
> devenu un hub à plusieurs univers. Ce document conserve la stratégie tarot
> d'origine (sections 1+) ; la section 0 ci-dessous décrit **l'état actuel**.

---

## 0. État actuel (V4)

**Les Terres Libres** — un hub organisé en trois parties, thème « nuit mystique »
(sombre indigo-aubergine + or, serifs Cormorant/EB Garamond), i18n par routes
`/fr` et `/en`.

```
/{lang}                    Hub — portails Personnage · Agir · Oracles
├─ /{lang}/personnage      Profil : nom + 5 prismes (équilibre chacun),
│                          auto-save localStorage, visuel de prisme réfractant
├─ /{lang}/agir            Landing — Action · Confrontation
│  ├─ /{lang}/agir/action        Tenter une action portée par un prisme
│  │                             (lancers de pièce selon l'équilibre, issues critiques)
│  └─ /{lang}/agir/confrontation Duel à deux jauges (Victoire / Échec, premier à 5)
├─ /{lang}/oracles         Landing — Tarot · Pièce
│  ├─ /{lang}/oracles/tarot  Tirage RWS (jeu complet / majeurs / mineurs, inversé)
│  └─ /{lang}/oracles/coin   Pile ou Face (Soleil / Lune), lancer 3D
└─ /{lang}/credits         Provenance & domaine public
```

**Concepts transverses**
- **Prismes** (5) : instinct, concentration, éloquence, créativité, persévérance.
  Ordre d'affichage = spectre (rouge→jaune→vert→bleu→violet). Chacun a une
  **phrase** (sens JDR) et un **équilibre** : confiant / équilibré / risqué.
- **Pièce** : Face = Soleil (réussite), Pile = Lune. Réutilisée dans Agir.
- **Agir** : l'équilibre fixe le nombre de lancers (risqué 1 · équilibré 2 ·
  confiant 3) ; on s'arrête à la 1ʳᵉ Face (réussite), sinon échec. Issues
  critiques : réussite en risqué = *Retournement* ; échec en confiant =
  *Excès de confiance*.
- **Confrontation** : on enchaîne des actions sur deux jauges (Victoire / Échec,
  segments face à face, premier à **5**). Réussite normale +1 côté Victoire,
  échec normal +1 côté Échec ; réussite en risqué ou échec en confiant valent **+2**.

**Détails techniques importants** : voir `CLAUDE.md` (conventions, pièges,
commandes) et `README.md` (structure des fichiers, déploiement).

---

## 1. Objectif & périmètre <span>(stratégie tarot d'origine — historique)</span>

Un site statique (déployable sur n'importe quel hébergeur de fichiers : GitHub Pages, Netlify, Cloudflare Pages…) qui permet :

- **Tirage d'une seule carte** (v1) sur l'un des trois decks :
  - deck **complet** (78 cartes) ;
  - **arcanes majeurs** uniquement (22 cartes) ;
  - **arcanes mineurs** uniquement (56 cartes).
- Révélation de la carte : **illustration + nom**.
- **Texte explicatif** avec **mots-clés** et signification.
- Option **carte inversée** (tirage à l'envers) avec un texte de signification *inversée* distinct.
- **Bilingue FR / EN**, bascule de langue.

**Hors périmètre v1** (candidats v2, voir §9) : tirages multi-cartes (croix celtique, 3 cartes…), historique de tirages, partage, comptes utilisateur, PWA/offline.

---

## 2. Statut légal — droit d'auteur ✅

Point vérifié car il conditionne tout le projet.

- Le deck original RWS a été **publié en 1909** (William Rider & Son), illustré par **Pamela Colman Smith** (décédée en 1951) sur les instructions d'**A. E. Waite**.
- **Domaine public aux USA** depuis 1966 (publication + 28 + 28 ans).
- **Domaine public au Royaume-Uni et dans l'UE** : la règle « vie de l'autrice + 70 ans » place l'œuvre dans le domaine public **depuis le 1ᵉʳ janvier 2022** (Colman Smith † 1951).
- ⚠️ **Attention** : les **versions colorisées / « enhanced » modernes** (ex. l'édition U.S. Games 1971, ou les retouches récentes vendues en ligne) portent un **copyright sur le nouveau matériel ajouté**. Un litige récent (Siren Imports vs VHNS, 2022+) confirme que seule **l'œuvre originale de 1909** est libre.

**Conclusion** : on n'utilise **que les scans de l'édition originale 1909** (ou des re-numérisations explicitement CC0/PD), jamais une édition colorisée moderne. On ajoute une page **crédits / mentions** documentant la provenance et le statut PD.

---

## 3. Sources d'assets

### 3.1 Images (illustrations des cartes)

| Source | Contenu | Licence | Remarque |
|---|---|---|---|
| **metabismuth/tarot-json** (GitHub) | 78 scans RWS `350×600px`, ~7 Mo total + JSON structurel | MIT (code) / images PD-US | Nommage propre `m00.jpg`, `w01.jpg`… idéal pour automatiser |
| **luciellaes — RWS Cards CC0** (itch.io) | Re-numérisation propre, déclarée **CC0** | CC0 | Zéro contrainte d'attribution — **candidat privilégié** |
| **Wikimedia Commons** — *Category:Rider-Waite tarot deck* | Scans haute résolution | PD | Fallback / haute déf |
| **sacred-texts.com /tarot** | Scans + textes de Waite | PD | Source historique de référence |

**Décision (priorité = meilleure résolution)** : source primaire **Wikimedia Commons** (*Category:Rider-Waite tarot deck*), qui offre les scans **haute résolution** de l'édition 1909. Fallback **CC0 (luciellaes)** puis **metabismuth** (350×600) si une carte manque en haute déf. Vérifier que chaque scan est bien **l'édition originale 1909** (et non une colorisation moderne sous copyright).

Traitement : **héberger localement** (`public/cards/`), **pas** de hotlink externe ; **renommer** selon `id` (`major-00.webp`…) ; **optimiser en WebP** (garder l'original haute déf pour d'éventuels zooms). Prévoir un **dos de carte** (card back).

**✅ Fait (étape 2)** — Les 78 cartes ont été récupérées depuis Wikimedia Commons via `scripts/fetch-cards.mjs` (résolvable/reprenable, retry+backoff, User-Agent poli) :
- Source : scans **édition 1909**, tous marqués **« Public domain »**, résolution ~1100×1920.
- Sortie : `public/cards/<id>.webp` (qualité 82, ~37 Mo au total) + **`public/cards/manifest.json`** (provenance : source Commons, URL originale, dimensions, licence — alimentera la page crédits).
- Dos de carte : **`public/cards/back.svg`** (dessin original, aucun problème de droits).
- ⚠️ *Optimisation d'affichage à prévoir (étape UI)* : ces WebP sont la **source haute déf**. Pour l'affichage courant, générer des variantes plus petites (srcset responsive) — soit en déplaçant les images vers `src/assets/` + composant `<Image>` d'Astro, soit via une seconde passe `cwebp` à largeur réduite.

### 3.2 Textes (mots-clés + significations droit / inversé)

La source **canonique et intégralement domaine public** est :

> **A. E. Waite — *The Pictorial Key to the Tarot* (1911)**

Ce livre contient, pour **chacune des 78 cartes**, une section *« Divinatory Meanings »* **et** *« Reversed »*. C'est littéralement le texte de référence du deck.

- Disponible sur **Project Gutenberg** et **sacred-texts.com** (texte brut réutilisable).
- **Anglais** : extraction directe → mots-clés + sens droit + sens inversé.
- **Ton retenu (décidé)** : **version contemporaine et accessible**, pas la reprise littérale du texte de Waite (souvent ésotérique et daté). Waite 1911 sert de **socle de référence** (structure droit/inversé, mots-clés, esprit de chaque carte), mais les significations sont **reformulées dans un langage moderne** — clair, concret, applicable à la vie quotidienne (relations, travail, état d'esprit).

**Français** : rédaction moderne originale FR, cohérente avec la version EN (pas une traduction mot-à-mot). Les deux langues sont écrites en parallèle pour un ton naturel dans chacune.

**Décision** : construire notre **propre dataset JSON bilingue** (voir §4), rédigé en interne (contenu original, ton contemporain) en s'appuyant sur Waite 1911 (domaine public) comme référence — plutôt que dépendre d'une API externe. Un site statique doit embarquer ses données.

---

## 4. Modèle de données

Un **fichier de données unique et versionné** dans le repo, source de vérité. Format proposé : un JSON (ou TS typé) par carte, structure bilingue.

```jsonc
// src/data/cards.json  (extrait pour une carte)
{
  "id": "major-00",           // identifiant stable, indépendant de la langue
  "arcana": "major",          // "major" | "minor"
  "suit": null,               // null | "wands" | "cups" | "swords" | "pentacles"
  "number": 0,                // rang : 0-21 (majeurs) ou 1-14 (mineurs, 11-14 = figures)
  "image": "major-00.webp",   // fichier dans public/cards/
  "name": { "fr": "Le Mat", "en": "The Fool" },
  "keywords": {
    "upright":  { "fr": ["spontanéité", "renouveau", "liberté"], "en": ["spontaneity", "new beginnings", "freedom"] },
    "reversed": { "fr": ["imprudence", "naïveté", "risque"],      "en": ["recklessness", "naivety", "risk"] }
  },
  "meaning": {
    "upright":  { "fr": "…", "en": "…" },   // texte long, adapté de Waite 1911
    "reversed": { "fr": "…", "en": "…" }
  }
}
```

**Principes** :
- **`id` stable et neutre en langue** → sert de clé pour les images et les URLs.
- Toutes les chaînes visibles sont des **objets `{ fr, en }`** → i18n centralisé dans la donnée.
- Les 3 modes de deck sont de **simples filtres** sur `arcana` : complet = tout ; majeurs = `arcana === "major"` ; mineurs = `arcana === "minor"`.
- Génération/validation possible via un **schéma** (Zod, ou `astro:content` collections + schéma) pour garantir que les 78 cartes sont complètes et bien formées.

---

## 5. Architecture Astro & i18n

- **Astro** en mode statique (`output: 'static'`), build → dossier `dist/` déployable tel quel.
- **i18n (décidé)** : **routes localisées** via le routing intégré d'Astro — `/fr/…` et `/en/…`, langue par défaut **FR**, + un toggle de bascule dans le header. Meilleur SEO et URLs partageables par langue.
- **Logique de tirage** = un petit **script client** (îlot / `<script>`) : tirer une carte = choisir un index aléatoire dans le sous-ensemble filtré, + un booléen aléatoire pour l'inversion (si l'option est activée). Aucune donnée serveur, tout est en statique.
- **Rendu de la carte** : composant `Card.astro` recevant `id + orientation + lang`. L'inversion visuelle = rotation CSS `transform: rotate(180deg)`.
- **Animations** (optionnel v1.1) : flip de carte au tirage (CSS `transform`), léger et sans dépendance.

---

## 6. Fonctionnalités & UX

**Écran principal** :
1. Choix du **deck** (complet / majeurs / mineurs) — segmented control.
2. Interrupteur **« autoriser les cartes inversées »**.
3. Bouton **« Tirer une carte »**.
4. Zone de révélation : dos de carte → flip → illustration (éventuellement pivotée) + nom.
5. Sous la carte : **mots-clés** (badges) + **texte** de signification correspondant à l'orientation.
6. Bouton **« Nouveau tirage »**.
7. **Toggle FR/EN** en header ; **lien crédits/mentions**.

**Accessibilité** : contraste, `alt` descriptif sur l'illustration, orientation annoncée textuellement (« inversée »), focus clavier sur le bouton de tirage.

---

## 7. Arborescence projet (cible)

```
tarot/
├─ docs/
│  └─ STRATEGIE.md            ← ce document
├─ public/
│  └─ cards/                  ← 78 images + dos de carte (local, PD/CC0)
├─ src/
│  ├─ data/
│  │  └─ cards.json           ← source de vérité bilingue (78 cartes)
│  ├─ lib/
│  │  ├─ deck.ts              ← filtres deck + tirage aléatoire
│  │  └─ i18n.ts              ← libellés d'UI (boutons, titres)
│  ├─ components/
│  │  ├─ Card.astro
│  │  ├─ DeckSelector.astro
│  │  └─ LangToggle.astro
│  ├─ pages/
│  │  ├─ [lang]/index.astro   ← page de tirage (fr/en)
│  │  └─ [lang]/credits.astro
│  └─ layouts/Base.astro
├─ scripts/
│  └─ build-cards.mjs         ← (optionnel) génère cards.json depuis Waite 1911
├─ astro.config.mjs
└─ package.json
```

---

## 8. Plan de mise en œuvre (étapes)

1. **Init Astro** + config i18n + layout de base + déploiement à blanc (CI facultative).
2. **Assets images** : récupérer le jeu PD/CC0, renommer selon `id`, optimiser en WebP, poser le dos de carte dans `public/cards/`.
3. **Dataset** : construire `cards.json` — structure + les **22 majeurs** d'abord (EN depuis Waite, FR adapté), valider par schéma.
4. **Moteur de tirage** (`lib/deck.ts`) : filtres deck, aléatoire, inversion. Tests unitaires légers.
5. **UI** : sélecteur de deck, bouton tirer, composant carte, affichage mots-clés + texte, toggle langue.
6. **Compléter le contenu** : les **56 mineurs** (EN + FR).
7. **Finitions** : animation flip, accessibilité, page crédits/mentions PD, responsive mobile.
8. **v2** (backlog) : tirages multi-cartes, historique, PWA offline, partage.

---

## 9. Décisions ouvertes / à confirmer

- [x] **i18n** : ✅ routes localisées `/fr` `/en` (défaut FR + toggle).
- [x] **Ton du contenu** : ✅ version contemporaine/accessible, socle Waite 1911 reformulé.
- [x] **Images** : ✅ Wikimedia Commons haute résolution (priorité qualité), fallback CC0/metabismuth.
- [x] **Hébergement** : ✅ **Cloudflare Pages** — gratuit, très fiable, déploiement Git en 1 clic, CDN mondial, HTTPS auto, **pas de contrainte de `base` URL** (déploie à la racine du domaine, contrairement à GitHub Pages en sous-chemin). Alternative équivalente : Netlify.

---

## Sources

- [Rider–Waite Tarot — Wikipedia](https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot)
- [The Rider-Waite-Smith Tarot Card Copyright FAQ — sacred-texts.com](https://sacred-texts.com/tarot/faq.htm)
- [The Copyright Battle Over a Tarot Card Deck — Plagiarism Today](https://www.plagiarismtoday.com/2024/02/28/the-copyright-battle-over-a-tarot-card-deck/)
- [metabismuth/tarot-json (GitHub)](https://github.com/metabismuth/tarot-json)
- [Rider-Waite Smith Tarot Cards (CC0) — luciellaes / itch.io](https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0)
- [Category:Rider-Waite tarot deck — Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck)
- [A. E. Waite — The Pictorial Key to the Tarot (sacred-texts.com)](https://sacred-texts.com/tarot/pkt/index.htm)
