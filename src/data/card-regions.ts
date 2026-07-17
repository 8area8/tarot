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
    { shapes: [[[0.0546, 0.7083], [0.073, 0.702], [0.0941, 0.7052], [0.1652, 0.67], [0.1572, 0.655], [0.1888, 0.6659], [0.2151, 0.6675], [0.2519, 0.6581], [0.2652, 0.6415], [0.313, 0.6597], [0.3782, 0.6752], [0.4388, 0.6691], [0.5309, 0.6503], [0.5565, 0.626], [0.5782, 0.6389], [0.6608, 0.6027], [0.6862, 0.5906], [0.6941, 0.5577], [0.7217, 0.569], [0.7309, 0.5452], [0.7521, 0.5638], [0.7572, 0.5452], [0.7782, 0.5482], [0.7862, 0.5169], [0.8173, 0.543], [0.8478, 0.5068], [0.8608, 0.5275], [0.8888, 0.4746], [0.9087, 0.4964], [0.9304, 0.5016], [0.9304, 0.5482], [0.8608, 0.5741], [0.8478, 0.5975], [0.8652, 0.613], [0.8608, 0.6597], [0.8043, 0.6752], [0.6217, 0.7011], [0.5739, 0.7063], [0.5391, 0.7219], [0.5043, 0.7193], [0.426, 0.7193], [0.3695, 0.7245], [0.3217, 0.7193], [0.2956, 0.696], [0.2565, 0.6856], [0.2043, 0.6882], [0.1652, 0.7167], [0.1826, 0.7374], [0.2304, 0.7763], [0.2043, 0.7893], [0.2652, 0.8048], [0.2826, 0.8204], [0.3087, 0.8359], [0.3493, 0.8354], [0.3826, 0.8463], [0.3869, 0.8774], [0.0521, 0.8748]]], ref: 6 },
    { shapes: [[[0.302, 0.5201], [0.3809, 0.5404], [0.4099, 0.5373], [0.4257, 0.5389], [0.4441, 0.5467], [0.5467, 0.5404], [0.6467, 0.5012], [0.4888, 0.4055], [0.3362, 0.4055]]], ref: 8 },
  ],
};
