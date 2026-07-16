import type { Locale } from './i18n';
import type { Draw } from './deck';
import type { SpreadPosition } from '../data/spread';
import type { Card } from './types';
import type { ReadingLine } from './reading';
import {
  MOTIFS, SUIT_MOTIF, COLOR_GLOSS, MOTIF_GLOSS,
  type Color, type Motif, type Gaze, type Facing,
} from '../data/motifs';

/**
 * « Le dialogue des images » : les échos visuels entre les cartes d'un tirage.
 * Une couleur qui court d'une carte à l'autre, un motif qui se répond, des regards
 * qui se croisent ou se fuient — lus dans les tags de `motifs.ts`. Tout est calculé
 * sur les cartes réellement tombées (même règle que signaux/dignités).
 *
 * Chaque écho renvoie une `ReadingLine` : la substance (la glose) d'un côté, les
 * positions concernées de l'autre (repères), jamais mêlées dans la phrase.
 */

type Bi = Record<Locale, string>;
/** Ligne interne : texte bilingue + positions (indices) à résoudre en fin de course. */
interface Raw {
  text: Bi;
  refs: number[];
  join: 'dot' | 'arrow';
}

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

/** Jusqu'à deux couleurs partagées entre majeurs (≥ 2 cartes), la plus rare d'abord. */
function colorLines(draws: Draw[]): Raw[] {
  return [...tally(draws, cardColors).entries()]
    .filter(([, idx]) => idx.length >= 2)
    .sort((a, b) => (COLOR_FREQ.get(a[0]) ?? 0) - (COLOR_FREQ.get(b[0]) ?? 0) || b[1].length - a[1].length)
    .slice(0, 2)
    .map(([color, idx]) => ({ text: COLOR_GLOSS[color], refs: idx, join: 'dot' as const }));
}

/** Jusqu'à deux motifs partagés (≥ 2 cartes, dont un majeur), le plus rare d'abord. */
function motifLines(draws: Draw[]): Raw[] {
  const hasMajor = (idx: number[]) => idx.some((i) => draws[i].card.arcana === 'major');
  return [...tally(draws, cardMotifs).entries()]
    .filter(([, idx]) => idx.length >= 2 && hasMajor(idx))
    .sort((a, b) => (MOTIF_FREQ.get(a[0]) ?? 0) - (MOTIF_FREQ.get(b[0]) ?? 0) || b[1].length - a[1].length)
    .slice(0, 2)
    .map(([motif, idx]) => ({ text: MOTIF_GLOSS[motif], refs: idx, join: 'dot' as const }));
}

/** Regards accordés entre majeurs : levés ensemble, ou baissés ensemble. */
function gazeLine(draws: Draw[]): Raw | null {
  const idxWith = (g: Gaze) =>
    draws.map((d, i) => (cardGaze(d.card) === g ? i : -1)).filter((i) => i >= 0);
  const up = idxWith('up');
  if (up.length >= 2) {
    return {
      text: { fr: "les regards se lèvent ensemble, tournés vers l'invisible", en: 'the gazes lift together, toward the unseen' },
      refs: up,
      join: 'dot',
    };
  }
  const down = idxWith('down');
  if (down.length >= 2) {
    return {
      text: { fr: 'les regards se baissent, tournés vers le dedans', en: 'the gazes lower, turned inward' },
      refs: down,
      join: 'dot',
    };
  }
  return null;
}

/**
 * Regards croisés ou fuis entre cartes ADJACENTES (l'ordre du tirage vaut
 * gauche → droite) : la figure de gauche tournée à droite + celle de droite
 * tournée à gauche se font face ; l'inverse leur fait tourner le dos.
 */
function facingLine(draws: Draw[]): Raw | null {
  for (let i = 0; i < draws.length - 1; i++) {
    const a = cardFacing(draws[i].card);
    const b = cardFacing(draws[i + 1].card);
    if (a === 'right' && b === 'left') {
      return {
        text: { fr: 'les deux figures se font face, leurs regards se croisent', en: 'the two figures face each other, their gazes meet' },
        refs: [i, i + 1],
        join: 'dot',
      };
    }
    if (a === 'left' && b === 'right') {
      return {
        text: { fr: 'les deux figures se tournent le dos, chacune vers son ailleurs', en: 'the two figures turn their backs, each toward its own elsewhere' },
        refs: [i, i + 1],
        join: 'dot',
      };
    }
  }
  return null;
}

/** Assemble les échos visuels d'un tirage en `ReadingLine`, dans la langue demandée. */
export function buildEchoes(draws: Draw[], positions: SpreadPosition[], locale: Locale): ReadingLine[] {
  if (draws.length < 2) return [];
  const raw: (Raw | null)[] = [
    facingLine(draws),
    ...motifLines(draws),
    ...colorLines(draws),
    gazeLine(draws),
  ];
  return raw
    .filter((r): r is Raw => r !== null)
    .map((r) => ({
      text: r.text[locale],
      refs: r.refs.map((i) => positions[i].label[locale]),
      join: r.join,
    }));
}
