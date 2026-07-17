import type { Locale } from '../lib/i18n';

/**
 * « Comment lire » : la méthode de lecture, distincte de la grammaire (qui donne
 * le vocabulaire). Ici on enseigne le geste — poser la question, tisser le récit,
 * peser les forces, dégager la quintessence, consigner. Ton JDR solo, FR+EN.
 */

type Bi = Record<Locale, string>;

export interface MethodStep {
  title: Bi;
  text: Bi;
  /** Liens contextuels : href relatif à /{lang}/ (ex. 'grammaire#dignites') ou ancre same-page ('#…'). */
  see?: { label: Bi; href: string }[];
}

export const METHOD_INTRO: Bi = {
  fr: 'Le tarot n’annonce pas l’avenir : il éclaire une situation pour t’aider à décider. Lire, c’est moins réciter des sens que tisser un récit. Voici la marche à suivre.',
  en: 'Tarot doesn’t foretell the future: it lights up a situation to help you decide. Reading is less reciting meanings than weaving a story. Here is how to go about it.',
};

export const METHOD: MethodStep[] = [
  {
    title: { fr: 'Poser la question', en: 'Ask the question' },
    text: {
      fr: 'Formule une question ouverte — « qu’est-ce qui m’aiderait à… », « que se passe-t-il si… » — plutôt qu’un oui/non. Le tarot ouvre des pistes, il ne coche pas des cases. En JDR solo, sers-t’en pour cadrer une scène ou relancer l’intrigue.',
      en: 'Ask an open question — “what would help me to…”, “what happens if…” — rather than a yes/no. Tarot opens paths, it doesn’t tick boxes. In solo RPG, use it to frame a scene or push the plot forward.',
    },
  },
  {
    title: { fr: 'Choisir le tirage', en: 'Choose the spread' },
    text: {
      fr: 'Une carte pour une impulsion, un éclairage rapide. Trois cartes (Situation → Action → Conséquence) pour un déroulé. Résiste à l’envie d’en tirer dix : plus de cartes ne veut pas dire plus de clarté.',
      en: 'One card for an impulse, a quick light. Three cards (Situation → Action → Consequence) for a sequence. Resist drawing ten: more cards doesn’t mean more clarity.',
    },
  },
  {
    title: { fr: 'Regarder avant de lire', en: 'Look before you read' },
    text: {
      fr: 'Avant les mots-clés, regarde l’image : qui est là, où, quel geste, dans quelle direction ? La carte est d’abord une scène. Ce que tu ressens en la voyant fait partie de la lecture.',
      en: 'Before the keywords, look at the image: who is there, where, what gesture, facing which way? A card is first a scene. What you feel on seeing it is part of the reading.',
    },
    see: [{ label: { fr: 'Parcourir les cartes', en: 'Browse the cards' }, href: 'cartes' }],
  },
  {
    title: { fr: 'Lire les positions ensemble', en: 'Read the positions together' },
    text: {
      fr: 'Chaque carte parle à sa place et par rapport aux autres. Les regards comptent : un personnage tourné vers une autre carte la prend en compte ; tourné vers le vide, il l’ignore. Le sens naît des liens, pas des cartes isolées.',
      en: 'Each card speaks in its place and in relation to the others. Gazes matter: a figure facing another card takes it into account; facing empty space, it ignores it. Meaning comes from the links, not from cards in isolation.',
    },
  },
  {
    title: { fr: 'Peser les forces', en: 'Weigh the forces' },
    text: {
      fr: 'Mesure les poids : les éléments s’accordent ou se contrarient (les dignités), un arcane majeur pèse plus qu’un mineur — « le destin s’en mêle » —, une carte inversée freine ou retourne son énergie.',
      en: 'Weigh the forces: elements agree or clash (the dignities), a major arcanum weighs more than a minor — “fate steps in” —, a reversed card slows or turns its energy.',
    },
    see: [
      { label: { fr: 'Les dignités', en: 'Elemental dignities' }, href: 'grammaire#dignites' },
      { label: { fr: 'Le Voyage du Fou', en: "The Fool's journey" }, href: 'grammaire#voyage' },
    ],
  },
  {
    title: { fr: 'Dégager la quintessence', en: 'Draw out the quintessence' },
    text: {
      fr: 'Additionne les numéros des cartes et réduis le total (16 → 1+6 = 7) : l’arcane majeur obtenu est la quintessence — le thème caché qui relie tout le tirage.',
      en: 'Add up the card numbers and reduce the total (16 → 1+6 = 7): the major arcanum you get is the quintessence — the hidden theme tying the whole draw together.',
    },
  },
  {
    title: { fr: 'Conclure et consigner', en: 'Close and record' },
    text: {
      fr: 'Ferme la lecture par une phrase : que retiens-tu, que vas-tu faire ? Puis note-la. En JDR solo, ton journal fait de chaque tirage une pierre du récit — d’où le bouton « Copier ».',
      en: 'Close the reading with one sentence: what do you take away, what will you do? Then write it down. In solo RPG, your journal turns each draw into a stone of the story — hence the “Copy” button.',
    },
  },
];

/**
 * Un exemple déroulé pas à pas : un tirage « trois temps » lu selon la méthode.
 * Les cartes et le calcul (Air amplifié, poids du majeur, quintessence 3+17+1=21)
 * sont cohérents avec la logique de `lib/dignities.ts` et `lib/quintessence.ts`.
 * `entries` suit l'ordre des positions de `SPREADS.three` (Situation/Action/Conséquence).
 */
export interface ExampleEntry {
  /** Identifiant de carte (voir data/cards). */
  id: string;
  /** Comment lire cette carte à cette place. */
  read: Bi;
}

export const METHOD_EXAMPLE: {
  intro: Bi;
  entries: ExampleEntry[];
  forces: Bi;
  quintId: string;
  quintText: Bi;
} = {
  intro: {
    fr: 'Prenons un tirage « trois temps » — Situation, Action, Conséquence — et déroulons la méthode dessus.',
    en: 'Take a three-beat spread — Situation, Action, Consequence — and walk the method through it.',
  },
  entries: [
    {
      id: 'swords-03',
      read: {
        fr: 'Trois d’Épées à la Situation : une peine nette, nommée. L’Air tranche — on regarde la blessure en face plutôt que de la fuir.',
        en: 'Three of Swords at the Situation: a clean, named grief. Air cuts — you look the wound in the face instead of fleeing it.',
      },
    },
    {
      id: 'major-17',
      read: {
        fr: 'L’Étoile à l’Action : après l’orage, verser l’eau et se découvrir au ciel. Le geste juste est d’espérer et de panser, pas de forcer.',
        en: 'The Star at the Action: after the storm, pour the water and bare yourself to the sky. The fitting move is to hope and to tend, not to force.',
      },
    },
    {
      id: 'cups-01',
      read: {
        fr: 'As de Coupes à la Conséquence : une source neuve s’ouvre. Du cœur blessé peut renaître un sentiment offert.',
        en: 'Ace of Cups at the Consequence: a fresh source opens. From the wounded heart a given feeling can be reborn.',
      },
    },
  ],
  forces: {
    fr: 'On pèse : Trois d’Épées et L’Étoile partagent l’Air — l’énergie se prolonge, la lucidité de la peine nourrit l’espoir. Et L’Étoile est un arcane majeur : le destin s’en mêle, elle pèse plus que ses voisines mineures et donne le ton du tirage.',
    en: 'Weigh it: Three of Swords and The Star share Air — the energy carries on, the clarity of the grief feeds the hope. And The Star is a major arcanum: fate steps in, it weighs more than its minor neighbours and sets the tone of the draw.',
  },
  quintId: 'major-21',
  quintText: {
    fr: 'Puis la quintessence : 3 + 17 + 1 = 21. Inutile de réduire, 21 est déjà un majeur — Le Monde. Le thème caché est l’accomplissement : une boucle qui se ferme, la plénitude retrouvée après la traversée.',
    en: 'Then the quintessence: 3 + 17 + 1 = 21. No need to reduce, 21 is already a major — The World. The hidden theme is fulfilment: a loop closing, wholeness regained after the crossing.',
  },
};
