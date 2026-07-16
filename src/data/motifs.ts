import type { Locale } from '../lib/i18n';

/**
 * « Motifs visuels » : les éléments de l'image tagués de façon *comparable*, pour
 * faire dialoguer les cartes d'un tirage (couleurs qui reviennent, objets qui se
 * répondent, regards croisés ou fuis). Là où `symbols.ts` est de la prose, ceci est
 * un vocabulaire fermé (enums) : c'est ce qui rend l'écho calculable — même règle que
 * `signals.ts`/`dignities.ts`, jamais de fausse prose, tout se déduit du tirage.
 *
 * Les tags des 78 cartes proviennent d'une observation directe des illustrations RWS
 * (public/cards/*.webp), pas de mémoire : `MOTIFS` pour les 22 majeurs (keyé par
 * numéro d'arcane), `MINOR_MOTIFS` pour les 56 mineurs (keyé par id). Les mineurs ne
 * portent PAS leur objet d'enseigne (présent partout → aucun écho), seulement les
 * motifs de scène (eau, château, montagne…).
 */

type Bi = Record<Locale, string>;

/** Couleurs dominantes retenues (charge symbolique forte dans le RWS). */
export type Color = 'red' | 'white' | 'yellow' | 'blue' | 'grey' | 'black' | 'purple' | 'green';

/** Objets / archétypes visuels qui reviennent d'une carte à l'autre. */
export type Motif =
  | 'sun' | 'moon' | 'star' | 'water' | 'mountain' | 'pillars' | 'crown' | 'wings'
  | 'serpent' | 'rose' | 'wreath' | 'lemniscate' | 'tree' | 'fire' | 'cross'
  | 'tetramorph' | 'lion' | 'bird' | 'castle' | 'boat'
  | 'wand' | 'cup' | 'sword' | 'coin';

/** Direction VERTICALE du regard de la figure (null = pas de figure unique). */
export type Gaze = 'up' | 'down' | 'out' | null;

/** Orientation HORIZONTALE (corps/regard) — sert aux regards croisés/fuis. */
export type Facing = 'left' | 'right' | null;

export interface CardMotifs {
  gaze: Gaze;
  facing: Facing;
  colors: Color[];
  motifs: Motif[];
}

/** Motifs des 22 majeurs, keyés par numéro d'arcane (0–21). Observés à l'image. */
export const MOTIFS: Record<number, CardMotifs> = {
  0:  { gaze: 'up',   facing: 'right', colors: ['yellow', 'green', 'red', 'white', 'blue'], motifs: ['sun', 'mountain', 'rose', 'wand'] },
  1:  { gaze: 'out',  facing: null,    colors: ['yellow', 'red', 'white'], motifs: ['lemniscate', 'wand', 'cup', 'sword', 'coin', 'rose'] },
  2:  { gaze: 'out',  facing: null,    colors: ['blue', 'white', 'black', 'grey', 'yellow'], motifs: ['moon', 'pillars', 'cross', 'water'] },
  3:  { gaze: 'out',  facing: null,    colors: ['white', 'red', 'yellow', 'green'], motifs: ['crown', 'wand', 'tree', 'water', 'wreath'] },
  4:  { gaze: 'out',  facing: null,    colors: ['red', 'grey', 'yellow', 'white', 'blue'], motifs: ['crown', 'wand', 'mountain'] },
  5:  { gaze: 'out',  facing: null,    colors: ['red', 'grey', 'white', 'yellow', 'blue'], motifs: ['crown', 'pillars', 'cross'] },
  6:  { gaze: 'up',   facing: null,    colors: ['red', 'yellow', 'blue', 'green', 'purple'], motifs: ['sun', 'mountain', 'wings', 'tree', 'serpent', 'fire'] },
  7:  { gaze: 'out',  facing: null,    colors: ['yellow', 'blue', 'grey', 'white', 'red'], motifs: ['crown', 'star', 'wings'] },
  8:  { gaze: 'down', facing: 'right', colors: ['yellow', 'white', 'red', 'green', 'blue'], motifs: ['lion', 'lemniscate', 'wreath', 'mountain'] },
  9:  { gaze: 'down', facing: 'left',  colors: ['grey', 'yellow', 'blue', 'white'], motifs: ['star', 'mountain', 'wand'] },
  10: { gaze: null,   facing: null,    colors: ['blue', 'yellow', 'red', 'grey', 'white'], motifs: ['serpent', 'tetramorph', 'sword'] },
  11: { gaze: 'out',  facing: null,    colors: ['red', 'yellow', 'grey', 'white', 'purple', 'green'], motifs: ['crown', 'pillars', 'sword'] },
  12: { gaze: 'out',  facing: null,    colors: ['red', 'blue', 'grey', 'yellow', 'green'], motifs: ['tree', 'wreath'] },
  13: { gaze: null,   facing: 'right', colors: ['grey', 'white', 'black', 'yellow', 'blue', 'red'], motifs: ['sun', 'water', 'rose', 'crown'] },
  14: { gaze: 'out',  facing: null,    colors: ['white', 'red', 'yellow', 'green', 'blue'], motifs: ['sun', 'mountain', 'water', 'wings', 'cup'] },
  15: { gaze: 'out',  facing: null,    colors: ['black', 'red', 'grey', 'yellow', 'green'], motifs: ['fire', 'wings'] },
  16: { gaze: null,   facing: null,    colors: ['black', 'grey', 'yellow', 'red', 'blue'], motifs: ['crown', 'fire'] },
  17: { gaze: 'down', facing: null,    colors: ['yellow', 'white', 'blue', 'green', 'red'], motifs: ['star', 'water', 'tree', 'bird'] },
  18: { gaze: null,   facing: null,    colors: ['yellow', 'blue', 'grey', 'green', 'red'], motifs: ['moon', 'water'] },
  19: { gaze: 'out',  facing: null,    colors: ['yellow', 'white', 'red', 'blue', 'green'], motifs: ['sun'] },
  20: { gaze: null,   facing: null,    colors: ['blue', 'white', 'red', 'grey', 'yellow'], motifs: ['wings', 'cross', 'mountain'] },
  21: { gaze: 'out',  facing: null,    colors: ['green', 'purple', 'red', 'blue', 'yellow', 'white', 'grey'], motifs: ['wreath', 'wand', 'tetramorph'] },
};

/** Motifs des 56 mineurs, keyés par id. Observés à l'image ; motifs de SCÈNE
 *  seulement (jamais l'objet de l'enseigne). */
export const MINOR_MOTIFS: Record<string, CardMotifs> = {
  "wands-01": { gaze: null,  facing: null,  colors: ['red', 'green', 'white', 'grey', 'yellow'], motifs: ['mountain', 'castle', 'water', 'tree'] },
  "wands-02": { gaze: 'out', facing: 'right', colors: ['red', 'grey', 'green', 'blue', 'yellow'], motifs: ['water', 'mountain', 'castle'] },
  "wands-03": { gaze: 'out', facing: 'right', colors: ['red', 'green', 'yellow', 'black'], motifs: ['water', 'mountain', 'boat'] },
  "wands-04": { gaze: null,  facing: null,  colors: ['yellow', 'red', 'green', 'grey', 'white'], motifs: ['castle', 'wreath', 'tree'] },
  "wands-05": { gaze: null,  facing: null,  colors: ['blue', 'red', 'yellow', 'green'], motifs: [] },
  "wands-06": { gaze: 'out', facing: 'right', colors: ['red', 'green', 'white', 'blue', 'yellow'], motifs: ['wreath'] },
  "wands-07": { gaze: 'out', facing: 'right', colors: ['green', 'yellow', 'blue', 'red'], motifs: [] },
  "wands-08": { gaze: null,  facing: null,  colors: ['blue', 'red', 'green', 'yellow'], motifs: ['water', 'mountain'] },
  "wands-09": { gaze: 'out', facing: 'right', colors: ['red', 'yellow', 'blue', 'white', 'green'], motifs: ['mountain'] },
  "wands-10": { gaze: 'down', facing: 'right', colors: ['red', 'yellow', 'blue', 'green'], motifs: ['castle', 'tree'] },
  "wands-11": { gaze: 'out', facing: 'right', colors: ['yellow', 'red', 'blue', 'grey'], motifs: ['mountain'] },
  "wands-12": { gaze: 'out', facing: 'right', colors: ['yellow', 'red', 'blue', 'grey'], motifs: ['mountain'] },
  "wands-13": { gaze: 'out', facing: null,  colors: ['yellow', 'red', 'blue', 'black', 'green'], motifs: ['sun', 'mountain'] },
  "wands-14": { gaze: 'out', facing: 'left', colors: ['red', 'green', 'yellow', 'blue', 'grey'], motifs: [] },

  "cups-01": { gaze: null,  facing: null,  colors: ['grey', 'yellow', 'white', 'blue'], motifs: ['bird', 'water'] },
  "cups-02": { gaze: 'out', facing: null,  colors: ['blue', 'white', 'yellow', 'red'], motifs: ['wreath'] },
  "cups-03": { gaze: 'up',  facing: null,  colors: ['red', 'white', 'yellow', 'blue'], motifs: ['wreath'] },
  "cups-04": { gaze: 'down', facing: null,  colors: ['blue', 'green', 'red', 'yellow'], motifs: ['tree'] },
  "cups-05": { gaze: 'down', facing: null,  colors: ['black', 'grey', 'yellow', 'green'], motifs: ['water', 'castle', 'bird'] },
  "cups-06": { gaze: 'down', facing: null,  colors: ['yellow', 'red', 'blue', 'white'], motifs: ['castle', 'tree'] },
  "cups-07": { gaze: 'out', facing: null,  colors: ['black', 'yellow', 'blue', 'grey', 'red'], motifs: ['castle', 'wreath'] },
  "cups-08": { gaze: null,  facing: 'right', colors: ['blue', 'red', 'yellow', 'green'], motifs: ['moon', 'water', 'mountain'] },
  "cups-09": { gaze: 'out', facing: null,  colors: ['yellow', 'white', 'blue', 'red'], motifs: [] },
  "cups-10": { gaze: 'up',  facing: null,  colors: ['blue', 'red', 'green', 'yellow'], motifs: ['water', 'tree', 'castle'] },
  "cups-11": { gaze: 'out', facing: null,  colors: ['blue', 'red', 'white', 'yellow'], motifs: ['water', 'bird'] },
  "cups-12": { gaze: 'out', facing: 'right', colors: ['grey', 'blue', 'yellow', 'red'], motifs: ['water', 'mountain'] },
  "cups-13": { gaze: 'down', facing: 'left', colors: ['white', 'blue', 'yellow', 'grey'], motifs: ['water'] },
  "cups-14": { gaze: 'out', facing: null,  colors: ['yellow', 'blue', 'red', 'grey'], motifs: ['water', 'boat', 'castle'] },

  "swords-01": { gaze: null,  facing: null,  colors: ['grey', 'white', 'yellow', 'blue', 'green'], motifs: ['crown', 'mountain', 'wreath'] },
  "swords-02": { gaze: 'out', facing: null,  colors: ['white', 'blue', 'grey', 'yellow'], motifs: ['moon', 'water', 'mountain'] },
  "swords-03": { gaze: null,  facing: null,  colors: ['red', 'grey', 'blue', 'white'], motifs: [] },
  "swords-04": { gaze: 'up',  facing: 'right', colors: ['yellow', 'grey', 'red', 'blue'], motifs: [] },
  "swords-05": { gaze: 'out', facing: 'left', colors: ['green', 'red', 'blue', 'yellow', 'grey'], motifs: ['water'] },
  "swords-06": { gaze: null,  facing: null,  colors: ['yellow', 'blue', 'grey', 'green'], motifs: ['water', 'boat', 'tree'] },
  "swords-07": { gaze: 'out', facing: 'left', colors: ['yellow', 'red', 'blue', 'grey'], motifs: ['castle'] },
  "swords-08": { gaze: 'down', facing: null,  colors: ['red', 'grey', 'white', 'yellow'], motifs: ['castle', 'water'] },
  "swords-09": { gaze: null,  facing: null,  colors: ['black', 'white', 'blue', 'red'], motifs: [] },
  "swords-10": { gaze: 'down', facing: 'left', colors: ['black', 'yellow', 'blue', 'red', 'grey'], motifs: ['water', 'mountain'] },
  "swords-11": { gaze: 'up',  facing: 'right', colors: ['red', 'yellow', 'blue', 'grey', 'green'], motifs: ['bird', 'mountain'] },
  "swords-12": { gaze: 'out', facing: 'right', colors: ['red', 'grey', 'blue', 'white', 'yellow'], motifs: ['bird', 'tree'] },
  "swords-13": { gaze: 'out', facing: 'right', colors: ['grey', 'blue', 'red', 'yellow', 'white'], motifs: ['bird', 'crown'] },
  "swords-14": { gaze: 'out', facing: null,  colors: ['blue', 'purple', 'grey', 'red', 'yellow'], motifs: ['bird', 'tree', 'crown'] },

  "pentacles-01": { gaze: null,  facing: null,  colors: ['yellow', 'white', 'grey', 'green', 'red'], motifs: ['mountain', 'rose', 'wreath'] },
  "pentacles-02": { gaze: 'out', facing: null,  colors: ['red', 'yellow', 'blue', 'green'], motifs: ['water', 'boat'] },
  "pentacles-03": { gaze: 'up',  facing: null,  colors: ['black', 'yellow', 'grey', 'blue'], motifs: ['star'] },
  "pentacles-04": { gaze: 'out', facing: null,  colors: ['red', 'yellow', 'blue', 'grey'], motifs: ['castle', 'crown'] },
  "pentacles-05": { gaze: null,  facing: 'right', colors: ['black', 'white', 'red', 'blue', 'yellow'], motifs: ['star'] },
  "pentacles-06": { gaze: 'down', facing: null,  colors: ['red', 'yellow', 'blue', 'grey'], motifs: [] },
  "pentacles-07": { gaze: 'down', facing: null,  colors: ['yellow', 'green', 'blue', 'grey'], motifs: ['tree'] },
  "pentacles-08": { gaze: 'down', facing: 'left', colors: ['blue', 'red', 'yellow', 'grey'], motifs: ['castle'] },
  "pentacles-09": { gaze: 'out', facing: null,  colors: ['yellow', 'red', 'white', 'green'], motifs: ['bird', 'tree', 'castle'] },
  "pentacles-10": { gaze: null,  facing: null,  colors: ['yellow', 'red', 'blue', 'grey', 'white'], motifs: ['castle'] },
  "pentacles-11": { gaze: 'up',  facing: null,  colors: ['yellow', 'green', 'red'], motifs: ['mountain', 'tree'] },
  "pentacles-12": { gaze: 'down', facing: 'right', colors: ['black', 'yellow', 'grey', 'red', 'green'], motifs: ['mountain'] },
  "pentacles-13": { gaze: 'down', facing: 'left', colors: ['red', 'green', 'yellow', 'blue', 'grey'], motifs: ['mountain', 'rose', 'water'] },
  "pentacles-14": { gaze: 'out', facing: null,  colors: ['yellow', 'green', 'red', 'grey', 'black'], motifs: ['castle', 'crown'] },
};

/** Glose poétique d'une couleur (charge symbolique), pour nommer l'écho. */
export const COLOR_GLOSS: Record<Color, Bi> = {
  red:    { fr: 'le rouge du désir et de la vie', en: 'the red of desire and life' },
  white:  { fr: "le blanc de l'innocence et de l'intention pure", en: 'the white of innocence and pure intent' },
  yellow: { fr: "l'or de l'esprit et de la conscience", en: 'the gold of spirit and awareness' },
  blue:   { fr: "le bleu de l'âme et de l'intuition", en: 'the blue of soul and intuition' },
  grey:   { fr: 'le gris du retrait et de la neutralité', en: 'the grey of withdrawal and neutrality' },
  black:  { fr: "le noir du seuil et de l'inconnu", en: 'the black of the threshold and the unknown' },
  purple: { fr: 'la pourpre du sacré et de la souveraineté', en: 'the purple of the sacred and the sovereign' },
  green:  { fr: 'le vert de la sève et du vivant', en: 'the green of sap and living things' },
};

/** Glose poétique d'un motif, pour nommer l'écho. */
export const MOTIF_GLOSS: Record<Motif, Bi> = {
  sun:        { fr: 'le soleil, source et conscience', en: 'the sun, source and awareness' },
  moon:       { fr: "la lune, marée de l'invisible", en: 'the moon, tide of the unseen' },
  star:       { fr: "l'étoile, promesse et guidance", en: 'the star, promise and guidance' },
  water:      { fr: "l'eau des émotions", en: 'the water of emotion' },
  mountain:   { fr: "la montagne, l'épreuve à gravir", en: 'the mountain, the height to climb' },
  pillars:    { fr: 'les colonnes, seuil du mystère', en: 'the pillars, threshold of mystery' },
  crown:      { fr: "la couronne, l'autorité et sa chute", en: 'the crown, authority and its fall' },
  wings:      { fr: "les ailes, un ordre venu d'en haut", en: 'wings, an order from above' },
  serpent:    { fr: 'le serpent, savoir et dissolution', en: 'the serpent, knowledge and dissolution' },
  rose:       { fr: 'la rose, désir tenu avec clarté', en: 'the rose, desire held with clarity' },
  wreath:     { fr: "la couronne végétale, l'accomplissement", en: 'the garland, fulfillment' },
  lemniscate: { fr: "le huit couché, l'énergie sans fin", en: 'the lemniscate, endless energy' },
  tree:       { fr: "l'arbre, l'axe entre ciel et terre", en: 'the tree, axis of sky and earth' },
  fire:       { fr: 'le feu, rupture et purification', en: 'fire, rupture and purification' },
  cross:      { fr: "la croix, l'esprit au centre des éléments", en: 'the cross, spirit at the center of the elements' },
  tetramorph: { fr: 'les quatre Vivants, les lois qui ne tournent pas', en: 'the four Living Creatures, the laws that do not turn' },
  lion:       { fr: 'le lion, la force instinctive', en: 'the lion, instinctive force' },
  bird:       { fr: "l'oiseau, l'âme messagère", en: 'the bird, the messenger soul' },
  castle:     { fr: "le château, le but à l'horizon", en: 'the castle, the goal on the horizon' },
  boat:       { fr: 'la barque, la traversée', en: 'the boat, the crossing' },
  wand:       { fr: 'le bâton, la volonté qui agit', en: 'the wand, will in action' },
  cup:        { fr: 'la coupe, le cœur qui reçoit', en: 'the cup, the receiving heart' },
  sword:      { fr: "l'épée, le discernement qui tranche", en: 'the sword, discernment that cuts' },
  coin:       { fr: 'le denier, le fruit matériel', en: 'the coin, the material fruit' },
};
