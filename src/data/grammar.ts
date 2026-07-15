import type { Suit } from '../lib/types';

/**
 * « Grammaire du tarot » : la couche pédagogique explicitée.
 * Rend nommable le socle symbolique tissé en filigrane dans cards.ts /
 * minor-content.ts — sans jamais le contredire. Chaque mineure se lit comme
 * une formule : élément (enseigne) × nombre (rang), ou élément × figure (cour).
 * Textes FR+EN, ton cohérent avec le cadre JDR solo du reste du jeu.
 */

type Bi = { fr: string; en: string };

export interface GrammarEntry {
  /** Nom court (ex. « Feu », « Cinq », « Reine »). */
  label: Bi;
  /** Glose d'une ligne : le domaine + quelques mots-clés. */
  gloss: Bi;
  /** Une ou deux phrases d'explication. */
  text: Bi;
}

/** Élément de chaque enseigne — la « matière » de la carte. */
export const ELEMENTS: Record<Suit, GrammarEntry & { glyph: string }> = {
  wands: {
    glyph: '🔥',
    label: { fr: 'Feu', en: 'Fire' },
    gloss: { fr: 'énergie · action · désir', en: 'energy · action · desire' },
    text: {
      fr: 'Les Bâtons portent le feu : l’élan qui pousse à agir, la passion, la volonté, le projet qu’on lance. Ce qui brûle, entreprend et parfois se consume.',
      en: 'Wands carry fire: the drive to act, passion, will, the venture set going. What burns, undertakes, and sometimes burns itself out.',
    },
  },
  cups: {
    glyph: '💧',
    label: { fr: 'Eau', en: 'Water' },
    gloss: { fr: 'émotion · lien · intuition', en: 'emotion · bond · intuition' },
    text: {
      fr: 'Les Coupes portent l’eau : les sentiments, les relations, l’imaginaire et la vie intérieure. Ce qui coule entre les êtres, se donne ou se retient.',
      en: 'Cups carry water: feelings, relationships, imagination and the inner life. What flows between people, given or withheld.',
    },
  },
  swords: {
    glyph: '🌬️',
    label: { fr: 'Air', en: 'Air' },
    gloss: { fr: 'pensée · parole · vérité', en: 'thought · word · truth' },
    text: {
      fr: 'Les Épées portent l’air : l’esprit, les idées, le langage, mais aussi le conflit et les tranchants de la lucidité. Ce qui coupe, clarifie et parfois blesse.',
      en: 'Swords carry air: mind, ideas, language — but also conflict and the sharp edge of clarity. What cuts, clears, and sometimes wounds.',
    },
  },
  pentacles: {
    glyph: '⛰️',
    label: { fr: 'Terre', en: 'Earth' },
    gloss: { fr: 'matière · corps · travail', en: 'matter · body · work' },
    text: {
      fr: 'Les Deniers portent la terre : le concret, l’argent, le corps, le métier, ce qui pousse lentement. Ce qui se bâtit, se possède et prend racine.',
      en: 'Pentacles carry earth: the concrete, money, the body, craft, what grows slowly. What is built, owned, and takes root.',
    },
  },
};

/** Sens du nombre 1→10 — la « phase » de la carte, valable pour les quatre éléments. */
export const NUMBERS: Record<number, GrammarEntry> = {
  1: {
    label: { fr: 'As', en: 'Ace' },
    gloss: { fr: 'la graine', en: 'the seed' },
    text: {
      fr: 'Le commencement pur : l’élément à l’état de promesse, un don brut qu’on tend à qui saura le saisir. Rien n’est bâti, tout est possible.',
      en: 'The pure beginning: the element as promise, a raw gift held out to whoever will seize it. Nothing is built, everything is possible.',
    },
  },
  2: {
    label: { fr: 'Deux', en: 'Two' },
    gloss: { fr: 'la dualité', en: 'duality' },
    text: {
      fr: 'La rencontre et le choix : deux forces se font face, il faut décider, s’accorder ou tenir l’équilibre entre elles.',
      en: 'Meeting and choice: two forces face each other; one must decide, agree, or hold the balance between them.',
    },
  },
  3: {
    label: { fr: 'Trois', en: 'Three' },
    gloss: { fr: 'la croissance', en: 'growth' },
    text: {
      fr: 'Les premiers fruits : ce qui a été lancé prend de l’ampleur, se met en commun, s’ouvre aux autres. Un premier élargissement.',
      en: 'The first fruits: what was set going gathers scale, is shared, opens to others. A first widening.',
    },
  },
  4: {
    label: { fr: 'Quatre', en: 'Four' },
    gloss: { fr: 'la stabilité', en: 'stability' },
    text: {
      fr: 'Le palier : on consolide, on structure, on tient ce qui est acquis. Assise solide — mais qui peut virer à l’immobilité ou au repli.',
      en: 'The plateau: consolidating, structuring, holding what is gained. A solid footing — one that can tip into stillness or holding on.',
    },
  },
  5: {
    label: { fr: 'Cinq', en: 'Five' },
    gloss: { fr: 'l’épreuve', en: 'the trial' },
    text: {
      fr: 'La rupture de l’équilibre : conflit, perte, manque ou revers. La phase difficile qui remet tout en mouvement.',
      en: 'The break in balance: conflict, loss, lack or setback. The hard phase that sets everything moving again.',
    },
  },
  6: {
    label: { fr: 'Six', en: 'Six' },
    gloss: { fr: 'l’harmonie', en: 'harmony' },
    text: {
      fr: 'Le retour à l’accord : réciprocité, réussite partagée, apaisement après l’épreuve. L’élément retrouve sa juste circulation.',
      en: 'The return to accord: reciprocity, shared success, calm after the trial. The element finds its right flow again.',
    },
  },
  7: {
    label: { fr: 'Sept', en: 'Seven' },
    gloss: { fr: 'le défi intérieur', en: 'the inner test' },
    text: {
      fr: 'L’épreuve de la volonté : tenir seul, résister à l’illusion, choisir sous tension. Le doute, l’attente ou la ruse s’invitent.',
      en: 'The test of will: standing alone, resisting illusion, choosing under strain. Doubt, waiting or cunning creep in.',
    },
  },
  8: {
    label: { fr: 'Huit', en: 'Eight' },
    gloss: { fr: 'le mouvement', en: 'movement' },
    text: {
      fr: 'La mise en marche : accélération, effort soutenu, maîtrise en acte. Les choses avancent vite, ou l’on s’y absorbe entièrement.',
      en: 'The setting in motion: acceleration, sustained effort, mastery in the doing. Things move fast, or one is wholly absorbed in them.',
    },
  },
  9: {
    label: { fr: 'Neuf', en: 'Nine' },
    gloss: { fr: 'l’aboutissement proche', en: 'near fulfilment' },
    text: {
      fr: 'Presque au bout : la récolte est là, mais seul face à elle — satisfaction, vigilance, fatigue ou solitude selon l’élément.',
      en: 'Almost there: the harvest is at hand, yet one faces it alone — contentment, watchfulness, weariness or solitude, by element.',
    },
  },
  10: {
    label: { fr: 'Dix', en: 'Ten' },
    gloss: { fr: 'l’achèvement', en: 'completion' },
    text: {
      fr: 'Le cycle complet : le comble de l’élément — plénitude ou fardeau, foyer ou surcharge. La fin d’un mouvement, et le seuil du suivant.',
      en: 'The full cycle: the element at its peak — plenty or burden, home or overload. The end of one movement, and the threshold of the next.',
    },
  },
};

/** Figures de la cour (rangs 11→14) — l’élément incarné par une personne. */
export const COURT: Record<number, GrammarEntry> = {
  11: {
    label: { fr: 'Valet', en: 'Page' },
    gloss: { fr: 'l’apprenti', en: 'the apprentice' },
    text: {
      fr: 'La découverte : jeune, curieux, messager. Il prend l’élément en main pour la première fois — enthousiasme et maladresse mêlés.',
      en: 'The discovery: young, curious, a messenger. He takes the element in hand for the first time — eagerness and clumsiness mixed.',
    },
  },
  12: {
    label: { fr: 'Cavalier', en: 'Knight' },
    gloss: { fr: 'l’élan', en: 'the charge' },
    text: {
      fr: 'L’élément lancé au galop : action, quête, engagement. Le mouvement porté à son sommet — jusqu’à l’excès parfois.',
      en: 'The element at full gallop: action, quest, commitment. Movement carried to its peak — to excess at times.',
    },
  },
  13: {
    label: { fr: 'Reine', en: 'Queen' },
    gloss: { fr: 'la maîtrise intérieure', en: 'inner mastery' },
    text: {
      fr: 'L’élément habité du dedans : elle le comprend, le ressent, le fait rayonner autour d’elle plutôt que de l’imposer.',
      en: 'The element inhabited from within: she understands it, feels it, lets it radiate around her rather than imposing it.',
    },
  },
  14: {
    label: { fr: 'Roi', en: 'King' },
    gloss: { fr: 'la maîtrise extérieure', en: 'outer mastery' },
    text: {
      fr: 'L’élément gouverné : autorité, direction, responsabilité assumée. Il en fixe le cap pour les autres.',
      en: 'The element governed: authority, direction, responsibility owned. He sets its course for others.',
    },
  },
};

/** Les trois temps du « Voyage du Fou » à travers les 22 arcanes majeurs. */
export interface JourneyStage {
  label: Bi;
  range: string; // ex. « 0–7 »
  cards: number[];
  text: Bi;
}

export const JOURNEY_INTRO: Bi = {
  fr: 'Les 22 arcanes majeurs racontent un récit : le voyage du Fou (0), l’âme qui traverse le monde en trois grands temps.',
  en: 'The 22 major arcana tell a story: the journey of the Fool (0), the soul crossing the world in three great movements.',
};

export const JOURNEY: JourneyStage[] = [
  {
    label: { fr: 'Le monde et ses rôles', en: 'The world and its roles' },
    range: '1–7',
    cards: [1, 2, 3, 4, 5, 6, 7],
    text: {
      fr: 'Du Magicien au Chariot : l’âme apprend les grandes figures et les forces du dehors — volonté, mystère, amour, pouvoir, foi, choix, maîtrise de soi.',
      en: 'From the Magician to the Chariot: the soul learns the great figures and outer forces — will, mystery, love, power, faith, choice, self-command.',
    },
  },
  {
    label: { fr: 'L’épreuve intérieure', en: 'The inner trial' },
    range: '8–14',
    cards: [8, 9, 10, 11, 12, 13, 14],
    text: {
      fr: 'De la Force à Tempérance : l’âme se tourne vers le dedans — courage tranquille, solitude, retournements du sort, justice, renoncement, mort et renaissance.',
      en: 'From Strength to Temperance: the soul turns inward — quiet courage, solitude, the turns of fate, justice, surrender, death and rebirth.',
    },
  },
  {
    label: { fr: 'Les grandes forces', en: 'The great forces' },
    range: '15–21',
    cards: [15, 16, 17, 18, 19, 20, 21],
    text: {
      fr: 'Du Diable au Monde : l’âme affronte ce qui la dépasse — attachements, effondrement, espérance, doute, joie, appel, accomplissement.',
      en: 'From the Devil to the World: the soul faces what is greater than itself — attachments, collapse, hope, doubt, joy, calling, fulfilment.',
    },
  },
];
