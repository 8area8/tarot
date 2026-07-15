import type { Draw } from './deck';
import { POLARITY } from '../data/polarity';

/** Cran d'inclinaison : 0 = non franc … 2 = incertain … 4 = oui franc. */
export type Level = 0 | 1 | 2 | 3 | 4;

/**
 * Traduit un tirage en inclinaison oui/non sur 5 crans.
 * La polarité intrinsèque de la carte (-2..+2) donne la charge ; l'inversion la
 * *tempère* — elle rapproche la réponse de l'incertain, jamais un verdict binaire.
 * `rng` n'intervient pas ici : l'inclinaison est déterministe pour une carte donnée.
 */
export function inclination(draw: Draw): { level: Level; score: number } {
  const base = POLARITY[draw.card.id] ?? 0;
  const score =
    draw.orientation === 'reversed'
      ? base > 0
        ? base - 1
        : base < 0
          ? base + 1
          : 0
      : base;
  return { level: (score + 2) as Level, score };
}
