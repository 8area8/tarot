import type { Locale } from './i18n';
import type { Draw } from './deck';
import type { Card, Suit } from './types';
import type { SpreadPosition } from '../data/spread';
import type { ReadingLine } from './reading';

/**
 * Dignités élémentaires (tradition Golden Dawn) : une carte ne se lit jamais
 * seule, ses voisines la renforcent ou l'affaiblissent selon leurs éléments.
 * On lit ici le *flux* d'un spread (paires adjacentes) plutôt que des cartes
 * isolées — c'est la couche relationnelle qui complète les « signaux ».
 */

export type Element = 'fire' | 'water' | 'air' | 'earth';

/** Élément de chaque enseigne (arcanes mineurs). */
export const SUIT_ELEMENT: Record<Suit, Element> = {
  wands: 'fire',
  cups: 'water',
  swords: 'air',
  pentacles: 'earth',
};

/**
 * Élément de chaque arcane majeur (attribution Golden Dawn) : élément du signe
 * pour les trumps zodiacaux, de la lettre-mère pour le Fou (Air), le Pendu
 * (Eau) et le Jugement (Feu), et une affinité classique pour les planétaires.
 */
export const MAJOR_ELEMENT: Record<number, Element> = {
  0: 'air', 1: 'air', 2: 'water', 3: 'earth', 4: 'fire', 5: 'earth', 6: 'air',
  7: 'water', 8: 'fire', 9: 'earth', 10: 'fire', 11: 'air', 12: 'water', 13: 'water',
  14: 'fire', 15: 'earth', 16: 'fire', 17: 'air', 18: 'water', 19: 'fire', 20: 'fire', 21: 'earth',
};

export function cardElement(card: Card): Element {
  return card.suit ? SUIT_ELEMENT[card.suit] : MAJOR_ELEMENT[card.number];
}

export type Dignity = 'same' | 'friend' | 'enemy' | 'neutral';

// Amis : actif + actif (Feu/Air) ou passif + passif (Eau/Terre).
const FRIEND: Record<Element, Element> = { fire: 'air', air: 'fire', water: 'earth', earth: 'water' };
// Contraires : les deux axes élémentaires opposés.
const ENEMY: Record<Element, Element> = { fire: 'water', water: 'fire', air: 'earth', earth: 'air' };

export function dignity(a: Element, b: Element): Dignity {
  if (a === b) return 'same';
  if (FRIEND[a] === b) return 'friend';
  if (ENEMY[a] === b) return 'enemy';
  return 'neutral';
}

type Bi = Record<Locale, string>;
/** Ligne interne : texte bilingue + positions (indices) à résoudre en fin de course. */
interface Raw {
  text: Bi;
  refs: number[];
  join: 'dot' | 'arrow';
}

const ELEMENT_LABEL: Record<Element, Bi> = {
  fire: { fr: 'Feu', en: 'Fire' },
  water: { fr: 'Eau', en: 'Water' },
  air: { fr: 'Air', en: 'Air' },
  earth: { fr: 'Terre', en: 'Earth' },
};

/** Dignité d'une paire adjacente, lue dans le sens du flux (a → b). */
function pairLine(a: number, b: number, els: Element[]): Raw {
  const eA = ELEMENT_LABEL[els[a]];
  const eB = ELEMENT_LABEL[els[b]];
  const refs = [a, b];
  switch (dignity(els[a], els[b])) {
    case 'same':
      return {
        text: { fr: `même élément (${eA.fr}) — l'énergie se prolonge, amplifiée`, en: `same element (${eA.en}) — the energy carries on, amplified` },
        refs, join: 'arrow',
      };
    case 'friend':
      return {
        text: { fr: `${eA.fr} et ${eB.fr} s'accordent — le passage est fluide`, en: `${eA.en} and ${eB.en} agree — the passage flows` },
        refs, join: 'arrow',
      };
    case 'enemy':
      return {
        text: { fr: `${eA.fr} et ${eB.fr} se contrarient — l'élan se dilue`, en: `${eA.en} and ${eB.en} clash — momentum thins` },
        refs, join: 'arrow',
      };
    default:
      return {
        text: { fr: `${eA.fr} et ${eB.fr} coexistent sans se mêler`, en: `${eA.en} and ${eB.en} coexist without mixing` },
        refs, join: 'arrow',
      };
  }
}

/** La carte centrale (l'Action), modifiée par ses deux flancs — cœur du système. */
function centerLine(els: Element[]): Raw | null {
  if (els.length !== 3) return null;
  const supportive = (d: Dignity) => d === 'same' || d === 'friend';
  const left = dignity(els[1], els[0]);
  const right = dignity(els[1], els[2]);
  if (supportive(left) && supportive(right)) {
    return {
      text: { fr: 'soutenue des deux côtés — le geste épouse la scène', en: 'supported on both sides — the move fits the scene' },
      refs: [1], join: 'dot',
    };
  }
  if (left === 'enemy' && right === 'enemy') {
    return {
      text: { fr: 'contrariée des deux côtés — le geste va contre le courant', en: 'opposed on both sides — the move runs against the current' },
      refs: [1], join: 'dot',
    };
  }
  return null;
}

/** Lignes de dignité d'un tirage (paires adjacentes + carte centrale) en `ReadingLine`. */
export function buildDignities(draws: Draw[], positions: SpreadPosition[], locale: Locale): ReadingLine[] {
  if (draws.length < 2) return [];
  const els = draws.map((d) => cardElement(d.card));
  const raw: Raw[] = [];
  for (let i = 0; i < draws.length - 1; i++) raw.push(pairLine(i, i + 1, els));
  const center = centerLine(els);
  if (center) raw.push(center);
  return raw.map((r) => ({
    text: r.text[locale],
    refs: r.refs.map((i) => positions[i].label[locale]),
    keys: r.refs,
    join: r.join,
  }));
}
