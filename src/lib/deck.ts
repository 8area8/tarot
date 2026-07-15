import { cards } from '../data/cards';
import type { Card, Orientation } from './types';

export type DeckMode = 'major' | 'minor' | 'full';

/** Sous-ensemble de cartes selon le mode de jeu choisi. */
export function getDeck(mode: DeckMode): Card[] {
  if (mode === 'major') return cards.filter((c) => c.arcana === 'major');
  if (mode === 'minor') return cards.filter((c) => c.arcana === 'minor');
  return cards; // 'full' : les 78 cartes
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

/**
 * Tire plusieurs cartes distinctes (sans remise) dans le jeu choisi.
 * Chaque carte reçoit sa propre orientation. Sert au tirage « trois temps ».
 * Le nombre est plafonné à la taille du jeu (garde-fou).
 */
export function drawSpread(
  mode: DeckMode,
  allowReversed: boolean,
  count: number,
  rng: () => number = Math.random,
): Draw[] {
  const pool = [...getDeck(mode)];
  const n = Math.min(count, pool.length);
  const draws: Draw[] = [];
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(rng() * pool.length);
    const [card] = pool.splice(idx, 1);
    const orientation: Orientation = allowReversed && rng() < 0.5 ? 'reversed' : 'upright';
    draws.push({ card, orientation });
  }
  return draws;
}

export function hasContent(card: Card): boolean {
  return card.content !== null;
}

export const DECK_MODES: DeckMode[] = ['major', 'minor', 'full'];
