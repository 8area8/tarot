import type { Locale } from '../lib/i18n';

/**
 * Tirages multi-cartes, pensés pour le JDR solo.
 * - « deux cartes » (Situation · Conseil) : un rapport question → réponse, le cas
 *   idéal des dignités élémentaires (une seule paire).
 * - « trois temps » (Situation · Action · Conséquence) : une chaîne cause → effet
 *   pour cadrer et résoudre une scène.
 * Chaque position porte son angle de lecture (le gabarit sous lequel lire la carte
 * qui l'occupe). Textes FR+EN, ton cohérent avec le reste du jeu.
 */

type Bi = Record<Locale, string>;

export interface SpreadPosition {
  /** Clé stable, neutre en langue (sert au permalien et au copier-coller). */
  key: string;
  /** Nom court affiché au-dessus de la carte (ex. « La Situation »). */
  label: Bi;
  /** Glose d'une ligne : l'angle de lecture. */
  gloss: Bi;
  /** Une phrase : comment lire la carte à cette place. */
  text: Bi;
}

const SITUATION: SpreadPosition = {
  key: 'situation',
  label: { fr: 'La Situation', en: 'The Situation' },
  gloss: { fr: "l'état des lieux", en: 'the lay of the land' },
  text: {
    fr: "Ce qui est déjà là : le décor, l'humeur du moment et les forces en présence avant que tu n'agisses.",
    en: 'What is already there: the setting, the mood of the moment, and the forces at play before you act.',
  },
};

const CONSEIL: SpreadPosition = {
  key: 'advice',
  label: { fr: 'Le Conseil', en: 'The Advice' },
  gloss: { fr: 'la voie à suivre', en: 'the way forward' },
  text: {
    fr: 'Ce que la scène te souffle : l’attitude juste, le pas à tenter, la clé pour dénouer la situation.',
    en: 'What the scene whispers: the fitting stance, the step to try, the key to untangle the situation.',
  },
};

const ACTION: SpreadPosition = {
  key: 'action',
  label: { fr: "L'Action", en: 'The Action' },
  gloss: { fr: 'le geste à poser', en: 'the move to make' },
  text: {
    fr: "Le geste que la scène appelle : la voie à tenter, l'attitude juste, ce sur quoi porter ton effort.",
    en: 'The move the scene calls for: the path to attempt, the fitting stance, where to put your effort.',
  },
};

const CONSEQUENCE: SpreadPosition = {
  key: 'consequence',
  label: { fr: 'La Conséquence', en: 'The Consequence' },
  gloss: { fr: 'ce qui en découle', en: 'what follows' },
  text: {
    fr: 'Vers quoi tout cela penche : le fruit probable du geste, la trace qu’il laisse — pour le meilleur ou pour le pire.',
    en: 'Where it all leans: the likely fruit of the move, the mark it leaves — for better or worse.',
  },
};

export type SpreadType = 'two' | 'three';

export const SPREADS: Record<SpreadType, SpreadPosition[]> = {
  two: [SITUATION, CONSEIL],
  three: [SITUATION, ACTION, CONSEQUENCE],
};

/** Nombre maximal de colonnes à pré-rendre (le plus grand tirage). */
export const MAX_SPREAD_COLS = 3;
