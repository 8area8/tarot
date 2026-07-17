import type { Locale } from './i18n';
import type { Draw, DeckMode } from './deck';
import { ELEMENTS, JOURNEY } from '../data/grammar';
import type { SpreadPosition } from '../data/spread';
import type { Suit } from './types';
import type { ReadingLine } from './reading';
import type { RuleKey } from '../data/rules';

/**
 * « Signaux » d'un tirage multi-cartes : des observations honnêtes, calculées à
 * partir des cartes réellement tombées — jamais de fausse prose. Elles aident à
 * lire le spread comme un tout : dominante d'élément, poids des arcanes majeurs,
 * cartes d'un même temps du Voyage, figures présentes, balance endroit/inversé.
 * Renvoyées en `ReadingLine` : substance d'un côté, positions en repères.
 */

type Bi = Record<Locale, string>;
/** Ligne interne : texte bilingue + positions (indices) à résoudre en fin de course. */
interface Raw {
  text: Bi;
  refs: number[];
  join: 'dot' | 'arrow';
  rule: RuleKey;
}

const COUNT: Record<Locale, Record<number, string>> = {
  fr: { 2: 'Deux', 3: 'Trois' },
  en: { 2: 'Two', 3: 'Three' },
};

/** Dominante élémentaire : une enseigne (élément) qui revient au moins deux fois. */
function elementSignal(draws: Draw[]): Raw | null {
  const tally = new Map<Suit, number>();
  for (const d of draws) {
    if (d.card.suit) tally.set(d.card.suit, (tally.get(d.card.suit) ?? 0) + 1);
  }
  let top: Suit | null = null;
  let max = 1;
  for (const [suit, n] of tally) {
    if (n > max) {
      max = n;
      top = suit;
    }
  }
  if (!top) return null;
  const el = ELEMENTS[top];
  return {
    text: {
      fr: `${COUNT.fr[max]} cartes — ${el.label.fr} domine : ${el.gloss.fr}`,
      en: `${COUNT.en[max]} cards — ${el.label.en} dominates: ${el.gloss.en}`,
    },
    refs: [],
    join: 'dot',
    rule: 'signal.element',
  };
}

/** Poids des arcanes majeurs (ignoré en mode « majeurs », où c'est trivial). */
function majorSignal(draws: Draw[], mode: DeckMode): Raw | null {
  if (mode === 'major') return null;
  const majorIdx = draws.map((d, i) => (d.card.arcana === 'major' ? i : -1)).filter((i) => i >= 0);
  if (majorIdx.length === 0) return null;
  if (majorIdx.length === 1) {
    return {
      text: { fr: "un arcane majeur — le destin s'en mêle ici", en: 'a major arcanum — fate has a hand here' },
      refs: [majorIdx[0]],
      join: 'dot',
      rule: 'signal.major',
    };
  }
  if (majorIdx.length === 2) {
    return {
      text: { fr: 'deux arcanes majeurs — de grandes forces traversent la scène', en: 'two major arcana — great forces cross the scene' },
      refs: [],
      join: 'dot',
      rule: 'signal.major',
    };
  }
  return {
    text: { fr: 'trois arcanes majeurs — la scène vous dépasse, le destin mène', en: 'three major arcana — the scene is beyond you, fate leads' },
    refs: [],
    join: 'dot',
    rule: 'signal.major',
  };
}

/** Plusieurs majeurs relevant du même temps du « Voyage du Fou ». */
function journeySignal(draws: Draw[]): Raw | null {
  const majors = draws.filter((d) => d.card.arcana === 'major');
  if (majors.length < 2) return null;
  const stages = majors.map((d) => JOURNEY.find((s) => s.cards.includes(d.card.number)));
  const first = stages[0];
  if (!first || !stages.every((s) => s && s.range === first.range)) return null;
  return {
    text: {
      fr: `${COUNT.fr[majors.length]} arcanes du même temps du Voyage — ${first.label.fr}`,
      en: `${COUNT.en[majors.length]} arcana from the same movement of the Journey — ${first.label.en}`,
    },
    refs: [],
    join: 'dot',
    rule: 'signal.journey',
  };
}

/** Figures de la cour (Valet → Roi) : d'autres personnages pèsent sur la scène. */
function courtSignal(draws: Draw[]): Raw | null {
  const court = draws.filter((d) => d.card.arcana === 'minor' && d.card.number >= 11);
  if (court.length === 0) return null;
  if (court.length === 1) {
    const card = court[0].card;
    return {
      text: {
        fr: `une figure entre en scène, ${card.name.fr} : un autre que vous agit`,
        en: `a figure steps in, ${card.name.en}: someone other than you is at work`,
      },
      refs: [],
      join: 'dot',
      rule: 'signal.court',
    };
  }
  return {
    text: { fr: "plusieurs figures — d'autres mains tirent les fils", en: 'several figures — other hands pull the strings' },
    refs: [],
    join: 'dot',
    rule: 'signal.court',
  };
}

/** Balance des orientations sur l'ensemble du spread. */
function orientationSignal(draws: Draw[]): Raw | null {
  const reversedIdx = draws.map((d, i) => (d.orientation === 'reversed' ? i : -1)).filter((i) => i >= 0);
  if (reversedIdx.length === 0) {
    return {
      text: { fr: "tout à l'endroit — le courant va dans votre sens", en: 'all upright — the current runs your way' },
      refs: [],
      join: 'dot',
      rule: 'signal.orientation',
    };
  }
  if (reversedIdx.length === draws.length) {
    return {
      text: { fr: 'tout inversé — rien ne se présente franchement', en: 'all reversed — nothing shows its face plainly' },
      refs: [],
      join: 'dot',
      rule: 'signal.orientation',
    };
  }
  const plural = reversedIdx.length > 1;
  return {
    text: {
      fr: `${plural ? 'inversées' : 'inversée'} — la voie directe s'y dérobe`,
      en: 'reversed — the direct path slips away',
    },
    refs: reversedIdx,
    join: 'dot',
    rule: 'signal.orientation',
  };
}

/** Assemble les signaux pertinents d'un tirage en `ReadingLine`, dans la langue demandée. */
export function buildSignals(
  draws: Draw[],
  mode: DeckMode,
  positions: SpreadPosition[],
  locale: Locale,
): ReadingLine[] {
  const raw = [
    elementSignal(draws),
    majorSignal(draws, mode),
    journeySignal(draws),
    courtSignal(draws),
    orientationSignal(draws),
  ];
  return raw
    .filter((r): r is Raw => r !== null)
    .map((r) => ({
      text: r.text[locale],
      refs: r.refs.map((i) => positions[i].label[locale]),
      keys: r.refs,
      join: r.join,
      rule: r.rule,
    }));
}
