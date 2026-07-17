import type { Color, Motif } from './motifs';

/**
 * « Épingles » : la couche spatiale posée sur l'illustration d'une carte. Chaque
 * épingle situe (coordonnées normalisées) un point de l'image et le rattache à une
 * donnée DÉJÀ EXISTANTE — un symbole propre à la carte (`symbols.ts`), une couleur
 * ou un motif du vocabulaire (`motifs.ts`). Aucune prose nouvelle : l'épingle ne
 * fait que POINTER un sens déjà écrit.
 *
 * Alimenté par l'outil d'annotation servi sur `/annotate` en développement : on y
 * place les épingles à la souris et « Enregistrer » réécrit ce fichier (middleware
 * Vite, dev uniquement — aucun impact sur le build statique).
 */

/** Coordonnées normalisées (0–1) relatives à l'image : [x, y], (0,0) = haut-gauche. */
export type Point = [number, number];

export type PinKind = 'symbol' | 'color' | 'motif';

export interface Pin {
  /** Où, sur l'illustration. */
  at: Point;
  /** À quelle famille de donnée l'épingle renvoie. */
  kind: PinKind;
  /**
   * La référence, selon `kind` :
   * - `symbol` → l'index (en chaîne) dans `SYMBOLS[cardId]` ;
   * - `color`  → une clé de `Color` ;
   * - `motif`  → une clé de `Motif`.
   */
  ref: string;
}

/** Épingles par carte (id de carte → liste d'épingles). */
export const CARD_PINS: Record<string, Pin[]> = {
  "major-00": [
    { at: [0.1565, 0.81], kind: 'symbol', ref: '0' },
    { at: [0.8347, 0.0791], kind: 'symbol', ref: '4' },
  ],
};

/** Garde de type : n'accepte que les clés connues (sécurise les données saisies). */
export type ColorKey = Color;
export type MotifKey = Motif;
