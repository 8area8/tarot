import type { Locale } from './i18n';
import type { Draw } from './deck';
import type { SpreadPosition } from '../data/spread';
import type { Card } from './types';
import {
  MOTIFS, SUIT_MOTIF, COLOR_GLOSS, MOTIF_GLOSS,
  type Color, type Motif, type Gaze, type Facing,
} from '../data/motifs';

/**
 * Rareté globale d'une couleur / d'un motif dans les 22 majeurs : plus une clé est
 * rare, plus l'écho qu'elle crée est frappant. On s'en sert pour faire remonter un
 * pourpre partagé (rare) avant un jaune partagé (fond banal). Calculé une fois.
 */
const COLOR_FREQ = new Map<Color, number>();
const MOTIF_FREQ = new Map<Motif, number>();
for (const m of Object.values(MOTIFS)) {
  for (const c of m.colors) COLOR_FREQ.set(c, (COLOR_FREQ.get(c) ?? 0) + 1);
  for (const k of m.motifs) MOTIF_FREQ.set(k, (MOTIF_FREQ.get(k) ?? 0) + 1);
}

/**
 * « Le dialogue des images » : les échos visuels entre les cartes d'un tirage.
 * Une couleur qui court d'une carte à l'autre, un motif qui se répond, des regards
 * qui se croisent ou se fuient — lus non pas dans la prose mais dans les tags de
 * `motifs.ts`. Tout est calculé sur les cartes réellement tombées (même règle que
 * signaux/dignités : jamais de fausse prose).
 *
 * Portée : couleurs, regards et orientation ne concernent que les majeurs (seuls
 * tagués) ; les motifs incluent les mineurs *à condition* qu'un majeur porte le
 * même objet — sinon ce serait une répétition d'enseigne, déjà dite par les « signaux ».
 */

type Bi = Record<Locale, string>;

/** Nombre maximal d'échos affichés (garde la synthèse resserrée). */
const MAX_ECHOES = 5;

function cardColors(card: Card): Color[] {
  return card.arcana === 'major' ? MOTIFS[card.number]?.colors ?? [] : [];
}
function cardMotifs(card: Card): Motif[] {
  if (card.arcana === 'major') return MOTIFS[card.number]?.motifs ?? [];
  return card.suit ? [SUIT_MOTIF[card.suit]] : [];
}
function cardGaze(card: Card): Gaze {
  return card.arcana === 'major' ? MOTIFS[card.number]?.gaze ?? null : null;
}
function cardFacing(card: Card): Facing {
  return card.arcana === 'major' ? MOTIFS[card.number]?.facing ?? null : null;
}

/** « A » et « B » / « A », « B » et « C » — les positions concernées, citées. */
function joinLabels(idx: number[], positions: SpreadPosition[], locale: Locale): string {
  const quoted = idx.map((i) =>
    locale === 'fr' ? `« ${positions[i].label.fr} »` : `“${positions[i].label.en}”`,
  );
  if (quoted.length <= 1) return quoted[0] ?? '';
  const conj = locale === 'fr' ? ' et ' : ' and ';
  return quoted.slice(0, -1).join(', ') + conj + quoted[quoted.length - 1];
}

/** Indices des cartes portant chaque clé (couleur ou motif). */
function tally<K extends string>(draws: Draw[], keysOf: (c: Card) => K[]): Map<K, number[]> {
  const map = new Map<K, number[]>();
  draws.forEach((d, i) => {
    for (const k of keysOf(d.card)) {
      const list = map.get(k) ?? [];
      list.push(i);
      map.set(k, list);
    }
  });
  return map;
}

/**
 * Ligne d'écho : les positions (toujours ≥ 2, donc sujet pluriel) « partagent » la
 * glose. Cette tournure évite tout accord fautif avec des gloses au pluriel.
 */
function linkLine(gloss: Bi, idx: number[], positions: SpreadPosition[]): Bi {
  return {
    fr: `${joinLabels(idx, positions, 'fr')} partagent ${gloss.fr}.`,
    en: `${joinLabels(idx, positions, 'en')} share ${gloss.en}.`,
  };
}

/** Jusqu'à deux couleurs partagées entre majeurs (≥ 2 cartes), la plus rare d'abord. */
function colorLines(draws: Draw[], positions: SpreadPosition[]): Bi[] {
  return [...tally(draws, cardColors).entries()]
    .filter(([, idx]) => idx.length >= 2)
    .sort((a, b) => (COLOR_FREQ.get(a[0]) ?? 0) - (COLOR_FREQ.get(b[0]) ?? 0) || b[1].length - a[1].length)
    .slice(0, 2)
    .map(([color, idx]) => linkLine(COLOR_GLOSS[color], idx, positions));
}

/** Jusqu'à deux motifs partagés (≥ 2 cartes, dont un majeur), le plus rare d'abord. */
function motifLines(draws: Draw[], positions: SpreadPosition[]): Bi[] {
  const hasMajor = (idx: number[]) => idx.some((i) => draws[i].card.arcana === 'major');
  return [...tally(draws, cardMotifs).entries()]
    .filter(([, idx]) => idx.length >= 2 && hasMajor(idx))
    .sort((a, b) => (MOTIF_FREQ.get(a[0]) ?? 0) - (MOTIF_FREQ.get(b[0]) ?? 0) || b[1].length - a[1].length)
    .slice(0, 2)
    .map(([motif, idx]) => linkLine(MOTIF_GLOSS[motif], idx, positions));
}

/** Regards accordés entre majeurs : levés ensemble, ou baissés ensemble. */
function gazeLine(draws: Draw[], positions: SpreadPosition[]): Bi | null {
  const idxWith = (g: Gaze) =>
    draws.map((d, i) => (cardGaze(d.card) === g ? i : -1)).filter((i) => i >= 0);
  const up = idxWith('up');
  if (up.length >= 2) {
    return {
      fr: `${joinLabels(up, positions, 'fr')} — les regards se lèvent de concert, tournés vers l'invisible.`,
      en: `${joinLabels(up, positions, 'en')} — the gazes lift together, turned toward the unseen.`,
    };
  }
  const down = idxWith('down');
  if (down.length >= 2) {
    return {
      fr: `${joinLabels(down, positions, 'fr')} — les regards se baissent, tournés vers le dedans.`,
      en: `${joinLabels(down, positions, 'en')} — the gazes lower, turned inward.`,
    };
  }
  return null;
}

/**
 * Regards croisés ou fuis entre cartes ADJACENTES (l'ordre du tirage vaut
 * gauche → droite) : la figure de gauche tournée à droite + celle de droite
 * tournée à gauche se font face ; l'inverse leur fait tourner le dos.
 */
function facingLine(draws: Draw[], positions: SpreadPosition[]): Bi | null {
  for (let i = 0; i < draws.length - 1; i++) {
    const a = cardFacing(draws[i].card);
    const b = cardFacing(draws[i + 1].card);
    const pair = [i, i + 1];
    if (a === 'right' && b === 'left') {
      return {
        fr: `${joinLabels(pair, positions, 'fr')} — les deux figures se font face : leurs regards se croisent.`,
        en: `${joinLabels(pair, positions, 'en')} — the two figures face each other: their gazes meet.`,
      };
    }
    if (a === 'left' && b === 'right') {
      return {
        fr: `${joinLabels(pair, positions, 'fr')} — les deux figures se tournent le dos, chacune vers son ailleurs.`,
        en: `${joinLabels(pair, positions, 'en')} — the two figures turn their backs, each toward its own elsewhere.`,
      };
    }
  }
  return null;
}

/** Assemble les échos visuels d'un tirage, dans la langue demandée. */
export function buildEchoes(draws: Draw[], positions: SpreadPosition[], locale: Locale): string[] {
  if (draws.length < 2) return [];
  const lines: (Bi | null)[] = [
    facingLine(draws, positions),
    ...motifLines(draws, positions),
    ...colorLines(draws, positions),
    gazeLine(draws, positions),
  ];
  return lines
    .filter((l): l is Bi => l !== null)
    .slice(0, MAX_ECHOES)
    .map((l) => l[locale]);
}
