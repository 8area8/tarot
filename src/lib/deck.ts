import { cards } from '../data/cards';
import type { Card, Orientation } from './types';

export type DeckMode = 'full' | 'major' | 'minor';

/** Sous-ensemble de cartes selon le mode de jeu choisi. */
export function getDeck(mode: DeckMode): Card[] {
  switch (mode) {
    case 'major':
      return cards.filter((c) => c.arcana === 'major');
    case 'minor':
      return cards.filter((c) => c.arcana === 'minor');
    case 'full':
    default:
      return cards;
  }
}

export interface Draw {
  card: Card;
  orientation: Orientation;
}

/**
 * Tire une carte au hasard dans le jeu choisi.
 * `rng` est injectable pour les tests (défaut : Math.random).
 */
export function drawCard(
  mode: DeckMode,
  allowReversed: boolean,
  rng: () => number = Math.random,
): Draw {
  const deck = getDeck(mode);
  const card = deck[Math.floor(rng() * deck.length)];
  const orientation: Orientation = allowReversed && rng() < 0.5 ? 'reversed' : 'upright';
  return { card, orientation };
}

export function hasContent(card: Card): boolean {
  return card.content !== null;
}

export const DECK_MODES: DeckMode[] = ['full', 'major', 'minor'];
