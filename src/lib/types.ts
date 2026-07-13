import type { Locale } from './i18n';

export type Arcana = 'major' | 'minor';
export type Suit = 'wands' | 'cups' | 'swords' | 'pentacles';
export type Orientation = 'upright' | 'reversed';

/** Chaîne traduite dans chaque langue. */
export type Localized = Record<Locale, string>;
/** Liste de chaînes (ex. mots-clés) dans chaque langue. */
export type LocalizedList = Record<Locale, string[]>;

export interface CardContent {
  keywords: Record<Orientation, LocalizedList>;
  meaning: Record<Orientation, Localized>;
}

export interface Card {
  /** Identifiant stable, neutre en langue (ex. "major-00", "wands-01"). */
  id: string;
  arcana: Arcana;
  /** null pour les arcanes majeurs. */
  suit: Suit | null;
  /** 0-21 pour les majeurs ; 1-14 pour les mineurs (11=Valet…14=Roi). */
  number: number;
  /** Nom de fichier de l'illustration dans /cards. */
  image: string;
  name: Localized;
  /** Mots-clés + significations. null tant que le contenu n'est pas rédigé. */
  content: CardContent | null;
}
