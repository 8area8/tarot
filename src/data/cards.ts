import type { Card, Suit } from '../lib/types';
import { MINOR_CONTENT } from './minor-content';
import { MAJOR_CONTENT } from './major-content';

/**
 * Source de vérité des 78 cartes (cadre JDR solo, FR+EN).
 * Le contenu (mots-clés + « meaning ») vit dans MAJOR_CONTENT / MINOR_CONTENT, keyé
 * par id ; ce fichier n'assemble que la structure (id, arcane, enseigne, image, nom).
 * Chaque « meaning » est une lecture SYMBOLIQUE concise (ce que la carte signifie,
 * pas ce que l'image montre) ; le détail par élément vit dans symbols.ts.
 * Registre : nominal + tutoiement léger ; l'inversé = forme assombrie/bloquée/dévoyée.
 *
 * Enseignes : Bâtons (Feu) / Coupes (Eau) / Épées (Air) / Deniers (Terre).
 * Figures : Valet (11), Cavalier (12), Reine (13), Roi (14).
 */

interface MajorDef {
  number: number;
  name: { fr: string; en: string };
}

const MAJORS: MajorDef[] = [
  { number: 0, name: { fr: "Le Fou", en: "The Fool" } },
  { number: 1, name: { fr: "Le Magicien", en: "The Magician" } },
  { number: 2, name: { fr: "La Grande Prêtresse", en: "The High Priestess" } },
  { number: 3, name: { fr: "L'Impératrice", en: "The Empress" } },
  { number: 4, name: { fr: "L'Empereur", en: "The Emperor" } },
  { number: 5, name: { fr: "Le Hiérophante", en: "The Hierophant" } },
  { number: 6, name: { fr: "Les Amoureux", en: "The Lovers" } },
  { number: 7, name: { fr: "Le Chariot", en: "The Chariot" } },
  { number: 8, name: { fr: "La Force", en: "Strength" } },
  { number: 9, name: { fr: "L'Ermite", en: "The Hermit" } },
  { number: 10, name: { fr: "La Roue de la Fortune", en: "Wheel of Fortune" } },
  { number: 11, name: { fr: "La Justice", en: "Justice" } },
  { number: 12, name: { fr: "Le Pendu", en: "The Hanged Man" } },
  { number: 13, name: { fr: "La Mort", en: "Death" } },
  { number: 14, name: { fr: "La Tempérance", en: "Temperance" } },
  { number: 15, name: { fr: "Le Diable", en: "The Devil" } },
  { number: 16, name: { fr: "La Tour", en: "The Tower" } },
  { number: 17, name: { fr: "L'Étoile", en: "The Star" } },
  { number: 18, name: { fr: "La Lune", en: "The Moon" } },
  { number: 19, name: { fr: "Le Soleil", en: "The Sun" } },
  { number: 20, name: { fr: "Le Jugement", en: "Judgement" } },
  { number: 21, name: { fr: "Le Monde", en: "The World" } },
]

// --- Enseignes mineures : noms FR/EN ---
const SUIT_NAMES: Record<Suit, { fr: string; en: string }> = {
  wands: { fr: 'Bâtons', en: 'Wands' },
  cups: { fr: 'Coupes', en: 'Cups' },
  swords: { fr: 'Épées', en: 'Swords' },
  pentacles: { fr: 'Deniers', en: 'Pentacles' },
};

// --- Élément de chaque enseigne (couche ésotérique affichée dans la ligne meta) ---
const SUIT_ELEMENTS: Record<Suit, { fr: string; en: string }> = {
  wands: { fr: 'Feu', en: 'Fire' },
  cups: { fr: 'Eau', en: 'Water' },
  swords: { fr: 'Air', en: 'Air' },
  pentacles: { fr: 'Terre', en: 'Earth' },
};

// --- Correspondance ésotérique des majeurs (Golden Dawn : élément / planète / signe) ---
const MAJOR_CORRESPONDENCE: Record<number, { fr: string; en: string }> = {
  0: { fr: 'Air', en: 'Air' }, // Le Fou
  1: { fr: 'Mercure', en: 'Mercury' }, // Le Magicien
  2: { fr: 'Lune', en: 'Moon' }, // La Grande Prêtresse
  3: { fr: 'Vénus', en: 'Venus' }, // L'Impératrice
  4: { fr: 'Bélier', en: 'Aries' }, // L'Empereur
  5: { fr: 'Taureau', en: 'Taurus' }, // Le Hiérophante
  6: { fr: 'Gémeaux', en: 'Gemini' }, // Les Amoureux
  7: { fr: 'Cancer', en: 'Cancer' }, // Le Chariot
  8: { fr: 'Lion', en: 'Leo' }, // La Force
  9: { fr: 'Vierge', en: 'Virgo' }, // L'Ermite
  10: { fr: 'Jupiter', en: 'Jupiter' }, // La Roue de Fortune
  11: { fr: 'Balance', en: 'Libra' }, // La Justice
  12: { fr: 'Eau', en: 'Water' }, // Le Pendu
  13: { fr: 'Scorpion', en: 'Scorpio' }, // La Mort
  14: { fr: 'Sagittaire', en: 'Sagittarius' }, // Tempérance
  15: { fr: 'Capricorne', en: 'Capricorn' }, // Le Diable
  16: { fr: 'Mars', en: 'Mars' }, // La Tour
  17: { fr: 'Verseau', en: 'Aquarius' }, // L'Étoile
  18: { fr: 'Poissons', en: 'Pisces' }, // La Lune
  19: { fr: 'Soleil', en: 'Sun' }, // Le Soleil
  20: { fr: 'Feu', en: 'Fire' }, // Le Jugement
  21: { fr: 'Saturne', en: 'Saturn' }, // Le Monde
};

// rang 1-14 -> nom (1=As, 11=Valet, 12=Cavalier, 13=Reine, 14=Roi)
const RANK_NAMES: Record<number, { fr: string; en: string }> = {
  1: { fr: 'As', en: 'Ace' },
  2: { fr: 'Deux', en: 'Two' },
  3: { fr: 'Trois', en: 'Three' },
  4: { fr: 'Quatre', en: 'Four' },
  5: { fr: 'Cinq', en: 'Five' },
  6: { fr: 'Six', en: 'Six' },
  7: { fr: 'Sept', en: 'Seven' },
  8: { fr: 'Huit', en: 'Eight' },
  9: { fr: 'Neuf', en: 'Nine' },
  10: { fr: 'Dix', en: 'Ten' },
  11: { fr: 'Valet', en: 'Page' },
  12: { fr: 'Cavalier', en: 'Knight' },
  13: { fr: 'Reine', en: 'Queen' },
  14: { fr: 'Roi', en: 'King' },
};

const SUIT_ORDER: Suit[] = ['wands', 'cups', 'swords', 'pentacles'];

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

const majorCards: Card[] = MAJORS.map((m) => ({
  id: `major-${pad2(m.number)}`,
  arcana: 'major',
  suit: null,
  number: m.number,
  image: `major-${pad2(m.number)}.webp`,
  name: m.name,
  content: MAJOR_CONTENT[`major-${pad2(m.number)}`] ?? null,
}));

const minorCards: Card[] = SUIT_ORDER.flatMap((suit) =>
  Array.from({ length: 14 }, (_, i) => {
    const rank = i + 1;
    const r = RANK_NAMES[rank];
    const s = SUIT_NAMES[suit];
    // Élision devant voyelle : « Roi d’Épées », mais « As de Bâtons ».
    const de = /^[aeiouyàâäéèêëîïôöûü]/i.test(s.fr) ? 'd’' : 'de ';
    return {
      id: `${suit}-${pad2(rank)}`,
      arcana: 'minor' as const,
      suit,
      number: rank,
      image: `${suit}-${pad2(rank)}.webp`,
      name: { fr: `${r.fr} ${de}${s.fr}`, en: `${r.en} of ${s.en}` },
      content: MINOR_CONTENT[`${suit}-${pad2(rank)}`] ?? null,
    };
  }),
);

export const cards: Card[] = [...majorCards, ...minorCards];

export { SUIT_NAMES, SUIT_ELEMENTS, MAJOR_CORRESPONDENCE };
