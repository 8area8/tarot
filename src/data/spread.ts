import type { Locale } from '../lib/i18n';

/**
 * Tirage « trois temps » : un spread narratif pensé pour le JDR solo.
 * Les trois positions forment une chaîne cause → effet (Situation → Action →
 * Conséquence) : de quoi cadrer et résoudre une scène en une pioche. Chaque
 * position porte son propre angle de lecture (le gabarit sous lequel lire la
 * carte qui l'occupe). Textes FR+EN, ton cohérent avec le reste du jeu.
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

export const SPREAD_POSITIONS: SpreadPosition[] = [
  {
    key: 'situation',
    label: { fr: 'La Situation', en: 'The Situation' },
    gloss: { fr: "l'état des lieux", en: 'the lay of the land' },
    text: {
      fr: "Ce qui est déjà là : le décor, l'humeur du moment et les forces en présence avant que vous n'agissiez.",
      en: 'What is already there: the setting, the mood of the moment, and the forces at play before you act.',
    },
  },
  {
    key: 'action',
    label: { fr: "L'Action", en: 'The Action' },
    gloss: { fr: 'le geste à poser', en: 'the move to make' },
    text: {
      fr: "Le geste que la scène appelle : la voie à tenter, l'attitude juste, ce sur quoi porter votre effort.",
      en: 'The move the scene calls for: the path to attempt, the fitting stance, where to put your effort.',
    },
  },
  {
    key: 'consequence',
    label: { fr: 'La Conséquence', en: 'The Consequence' },
    gloss: { fr: 'ce qui en découle', en: 'what follows' },
    text: {
      fr: 'Vers quoi tout cela penche : le fruit probable du geste, la trace qu’il laisse — pour le meilleur ou pour le pire.',
      en: 'Where it all leans: the likely fruit of the move, the mark it leaves — for better or worse.',
    },
  },
];
