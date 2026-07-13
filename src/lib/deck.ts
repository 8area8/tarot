import { cards } from '../data/cards';
import type { Card, Orientation } from './types';

export type DeckMode = 'major' | 'minor';

/** Sous-ensemble de cartes selon le mode de jeu choisi. */
export function getDeck(mode: DeckMode): Card[] {
  return mode === 'minor'
    ? cards.filter((c) => c.arcana === 'minor')
    : cards.filter((c) => c.arcana === 'major');
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

export const DECK_MODES: DeckMode[] = ['major', 'minor'];
