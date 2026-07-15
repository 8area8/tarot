import type { Draw } from './deck';
import { ORACLE, type Answer, type OracleEntry } from '../data/oracle';

export type { Answer, OracleEntry };

/**
 * Réponse de l'oracle « question fermée » pour un tirage donné (carte + orientation).
 * Déterministe : la même carte dans la même orientation donne toujours la même
 * réponse — l'aléatoire vient de la pioche. Renvoie null si la carte n'est pas
 * dans la table (ne devrait pas arriver : les 78 × 2 sont renseignées).
 */
export function answerFor(draw: Draw): OracleEntry | null {
  return ORACLE[draw.card.id]?.[draw.orientation] ?? null;
}
