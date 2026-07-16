import type { Locale } from './i18n';
import type { Draw, DeckMode } from './deck';
import type { SpreadType } from '../data/spread';
import { SPREADS } from '../data/spread';
import { buildEchoes } from './echoes';
import { buildDignities } from './dignities';
import { buildSignals } from './signals';
import { quintessence } from './quintessence';

/**
 * « La lecture » : une synthèse UNIFIÉE du tirage. Plutôt que quatre sections
 * étiquetées (dialogue / dignités / signaux / quintessence), on fond tout en une
 * seule liste de liens courts — la substance d'abord, les positions reléguées en
 * repères. Chaque source (echoes / dignities / signals) renvoie des `ReadingLine`
 * homogènes ; ici on les assemble, on les ordonne (du plus imaginal au plus
 * additif) et on plafonne pour garder l'ensemble léger.
 */

export interface ReadingLine {
  /** La substance, courte : ce que le lien dit. */
  text: string;
  /** Les positions concernées (libellés localisés), rendues en petits repères. */
  refs: string[];
  /** Les mêmes positions en indices — sert au survol croisé carte ↔ lecture. */
  keys: number[];
  /** Comment relier les repères : simple lien (·) ou flux dirigé (→). */
  join: 'dot' | 'arrow';
}

export interface Reading {
  /** Le « fil » du tirage : l'arcane-quintessence qui le relie en sourdine. */
  theme: { name: string; number: number } | null;
  lines: ReadingLine[];
}

export function buildReading(
  draws: Draw[],
  mode: DeckMode,
  type: SpreadType,
  locale: Locale,
): Reading {
  const positions = SPREADS[type];
  const echoes = buildEchoes(draws, positions, locale).slice(0, 3);
  const dignities = buildDignities(draws, positions, locale).slice(0, 2);
  const relational = [...echoes, ...dignities].slice(0, 4);
  const signals = buildSignals(draws, mode, positions, locale).slice(0, 1);
  const q = quintessence(draws);
  return {
    theme: q ? { name: q.name[locale], number: q.number } : null,
    lines: [...relational, ...signals],
  };
}
