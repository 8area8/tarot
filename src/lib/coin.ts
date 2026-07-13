export type CoinSide = 'heads' | 'tails';

/**
 * Lance la pièce. `rng` est injectable pour les tests (défaut : Math.random).
 * heads = Face (Soleil) · tails = Pile (Lune).
 */
export function flipCoin(rng: () => number = Math.random): CoinSide {
  return rng() < 0.5 ? 'heads' : 'tails';
}
