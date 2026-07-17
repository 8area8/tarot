/**
 * « Régions » : la couche spatiale posée sur l'illustration d'une carte. Chaque
 * région est un POLYGONE (coordonnées normalisées) qui détoure un objet de l'image
 * et pointe un SYMBOLE de la carte (`symbols.ts`). Au clic, l'objet reste éclairé et
 * le reste de l'illustration s'assombrit. Les couleurs/motifs de `motifs.ts` restent
 * réservés au « dialogue des images » des tirages.
 *
 * Alimenté par l'outil d'annotation servi sur `/fr/annotate` en développement : on
 * y trace les polygones à la souris et « Enregistrer » réécrit ce fichier (middleware
 * Vite, dev uniquement — aucun impact sur le build statique).
 */

/** Point normalisé (0–1) relatif à l'image : [x, y], (0,0) = haut-gauche. */
export type Point = [number, number];

export interface Region {
  /**
   * Une ou plusieurs boucles polygonales (fermées implicitement) : un objet peut
   * être détouré en plusieurs morceaux disjoints (ex. plusieurs montagnes).
   */
  shapes: Point[][];
  /** Index du symbole visé dans `SYMBOLS[cardId]`. */
  ref: number;
}

/** Régions par carte (id de carte → liste de régions). */
export const CARD_REGIONS: Record<string, Region[]> = {
  "major-00": [
    { shapes: [[[0.7782, 0.0273], [0.9347, 0.0298], [0.9391, 0.0869], [0.9391, 0.2242], [0.7782, 0.2294], [0.5478, 0.118], [0.5478, 0.0635], [0.5521, 0.0273]]], ref: 4 },
    { shapes: [[[0.302, 0.5201], [0.3809, 0.5404], [0.4099, 0.5373], [0.4257, 0.5389], [0.4441, 0.5467], [0.5467, 0.5404], [0.6467, 0.5012], [0.4888, 0.4055], [0.3362, 0.4055]]], ref: 8 },
    { shapes: [[[0.0599, 0.764], [0.1572, 0.7248], [0.1599, 0.7154], [0.1757, 0.7138], [0.1914, 0.6934], [0.2414, 0.6856], [0.2678, 0.6887], [0.2862, 0.695], [0.3178, 0.7012], [0.3704, 0.7091], [0.4283, 0.7044], [0.4336, 0.6918], [0.4257, 0.6714], [0.3704, 0.6714], [0.3204, 0.6605], [0.302, 0.6463], [0.2625, 0.6354], [0.2572, 0.6542], [0.2125, 0.6636], [0.202, 0.6652], [0.1678, 0.6573], [0.1572, 0.6605], [0.1625, 0.6699], [0.0914, 0.706], [0.073, 0.6981], [0.0546, 0.7028]], [[0.4862, 0.6605], [0.4888, 0.6965], [0.5757, 0.6761], [0.6099, 0.6605], [0.6336, 0.6526], [0.6125, 0.6463], [0.5888, 0.6369], [0.5704, 0.6322], [0.5572, 0.6212], [0.5283, 0.6463], [0.4914, 0.6526]], [[0.6572, 0.6103], [0.6914, 0.6385], [0.7362, 0.6228], [0.7546, 0.6103], [0.8178, 0.5914], [0.8467, 0.5773], [0.8967, 0.5569], [0.9204, 0.5491], [0.9283, 0.502], [0.8862, 0.4785], [0.8651, 0.524], [0.852, 0.5208], [0.8546, 0.5099], [0.8283, 0.5177], [0.8309, 0.5287], [0.8099, 0.5381], [0.7914, 0.5161], [0.7757, 0.5459], [0.7572, 0.5444], [0.7414, 0.5601], [0.7441, 0.5397], [0.723, 0.5632], [0.6967, 0.5554], [0.6862, 0.5914]]], ref: 6 },
  ],
};
