import type { Draw } from './deck';
import type { Localized } from './types';
import { cards } from '../data/cards';

/**
 * Quintessence : la somme des numéros des cartes, réduite en un seul arcane
 * majeur (16 → 1+6 = 7). Cet arcane est le « thème caché » qui relie le tirage.
 * Les figures comptent pour leur rang (Valet 11 → Roi 14).
 */
export interface Quintessence {
  number: number;
  name: Localized;
}

export function quintessence(draws: Draw[]): Quintessence | null {
  if (draws.length < 2) return null;
  let total = draws.reduce((sum, d) => sum + d.card.number, 0);
  // Réduit jusqu'à tomber dans la plage des majeurs (0–21).
  while (total > 21) {
    total = String(total)
      .split('')
      .reduce((sum, c) => sum + Number(c), 0);
  }
  const card = cards.find((c) => c.arcana === 'major' && c.number === total);
  return card ? { number: total, name: card.name } : null;
}
