/**
 * « Épingles » : la couche spatiale posée sur l'illustration d'une carte. Chaque
 * épingle situe (coordonnées normalisées) un point de l'image et pointe un
 * SYMBOLE de la carte (`symbols.ts`) — rien d'autre : les couleurs/motifs de
 * `motifs.ts` restent réservés au « dialogue des images » des tirages.
 *
 * Alimenté par l'outil d'annotation servi sur `/fr/annotate` en développement : on
 * y place les épingles à la souris et « Enregistrer » réécrit ce fichier (middleware
 * Vite, dev uniquement — aucun impact sur le build statique).
 */

/** Coordonnées normalisées (0–1) relatives à l'image : [x, y], (0,0) = haut-gauche. */
export type Point = [number, number];

export interface Pin {
  /** Où, sur l'illustration. */
  at: Point;
  /** Index du symbole visé dans `SYMBOLS[cardId]`. */
  ref: number;
}

/** Épingles par carte (id de carte → liste d'épingles). */
export const CARD_PINS: Record<string, Pin[]> = {
  "major-00": [
    { at: [0.1565, 0.81], ref: 0 },
    { at: [0.8347, 0.0791], ref: 4 },
    { at: [0.8391, 0.2579], ref: 2 },
    { at: [0.7565, 0.6933], ref: 1 },
    { at: [0.5913, 0.1568], ref: 5 },
    { at: [0.8174, 0.5689], ref: 6 },
    { at: [0.2565, 0.302], ref: 7 },
  ],
};
