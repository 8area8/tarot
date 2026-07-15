import type { Locale } from './i18n';
import type { Draw, DeckMode } from './deck';
import { ELEMENTS, JOURNEY } from '../data/grammar';
import { SPREAD_POSITIONS } from '../data/spread';
import type { Suit } from './types';

/**
 * « Signaux » d'un tirage multi-cartes : des observations honnêtes, calculées à
 * partir des cartes réellement tombées — jamais de fausse prose. Elles aident à
 * lire le spread comme un tout : dominante d'élément, poids des arcanes majeurs,
 * cartes d'un même temps du Voyage, figures présentes, balance endroit/inversé.
 * Même esprit que le « décodage » d'une carte, appliqué à l'ensemble.
 */

type Bi = Record<Locale, string>;

const COUNT: Record<Locale, Record<number, string>> = {
  fr: { 2: 'Deux', 3: 'Trois' },
  en: { 2: 'Two', 3: 'Three' },
};

/** Dominante élémentaire : une enseigne (élément) qui revient au moins deux fois. */
function elementSignal(draws: Draw[]): Bi | null {
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
    fr: `${COUNT.fr[max]} cartes — ${el.label.fr} domine : ${el.gloss.fr}.`,
    en: `${COUNT.en[max]} cards — ${el.label.en} dominates: ${el.gloss.en}.`,
  };
}

/** Poids des arcanes majeurs (ignoré en mode « majeurs », où c'est trivial). */
function majorSignal(draws: Draw[], mode: DeckMode): Bi | null {
  if (mode === 'major') return null;
  const majorIdx = draws.map((d, i) => (d.card.arcana === 'major' ? i : -1)).filter((i) => i >= 0);
  if (majorIdx.length === 0) return null;
  if (majorIdx.length === 1) {
    const pos = SPREAD_POSITIONS[majorIdx[0]];
    return {
      fr: `Un arcane majeur en « ${pos.label.fr} » : le destin s'en mêle sur ce point.`,
      en: `A major arcanum at “${pos.label.en}”: fate has a hand here.`,
    };
  }
  if (majorIdx.length === 2) {
    return {
      fr: 'Deux arcanes majeurs : de grandes forces traversent la scène.',
      en: 'Two major arcana: great forces cross the scene.',
    };
  }
  return {
    fr: 'Trois arcanes majeurs : la scène vous dépasse — le destin mène.',
    en: 'Three major arcana: the scene is beyond you — fate leads.',
  };
}

/** Plusieurs majeurs relevant du même temps du « Voyage du Fou ». */
function journeySignal(draws: Draw[]): Bi | null {
  const majors = draws.filter((d) => d.card.arcana === 'major');
  if (majors.length < 2) return null;
  const stages = majors.map((d) => JOURNEY.find((s) => s.cards.includes(d.card.number)));
  const first = stages[0];
  if (!first || !stages.every((s) => s && s.range === first.range)) return null;
  return {
    fr: `${COUNT.fr[majors.length]} arcanes du même temps du Voyage — ${first.label.fr}.`,
    en: `${COUNT.en[majors.length]} arcana from the same movement of the Journey — ${first.label.en}.`,
  };
}

/** Figures de la cour (Valet → Roi) : d'autres personnages pèsent sur la scène. */
function courtSignal(draws: Draw[]): Bi | null {
  const court = draws.filter((d) => d.card.arcana === 'minor' && d.card.number >= 11);
  if (court.length === 0) return null;
  if (court.length === 1) {
    const card = court[0].card;
    return {
      fr: `Une figure entre en scène — ${card.name.fr} : un autre que vous agit.`,
      en: `A figure steps in — ${card.name.en}: someone other than you is at work.`,
    };
  }
  return {
    fr: "Plusieurs figures : d'autres mains tirent les fils.",
    en: 'Several figures: other hands pull the strings.',
  };
}

/** Balance des orientations sur l'ensemble du spread. */
function orientationSignal(draws: Draw[]): Bi | null {
  const reversedIdx = draws.map((d, i) => (d.orientation === 'reversed' ? i : -1)).filter((i) => i >= 0);
  if (reversedIdx.length === 0) {
    return {
      fr: "Tout à l'endroit : le courant va dans votre sens.",
      en: 'All upright: the current runs your way.',
    };
  }
  if (reversedIdx.length === draws.length) {
    return {
      fr: 'Tout inversé : rien ne se présente franchement.',
      en: 'All reversed: nothing shows its face plainly.',
    };
  }
  const names = reversedIdx.map((i) => SPREAD_POSITIONS[i].label);
  const fr = names.map((n) => `« ${n.fr} »`).join(' et ');
  const en = names.map((n) => `“${n.en}”`).join(' and ');
  const plural = names.length > 1;
  return {
    fr: `${fr} ${plural ? 'inversées' : 'inversée'} : la voie directe s'y dérobe.`,
    en: `${en} reversed: the direct path slips away.`,
  };
}

/** Assemble les signaux pertinents d'un tirage, dans la langue demandée. */
export function buildSignals(draws: Draw[], mode: DeckMode, locale: Locale): string[] {
  const signals = [
    elementSignal(draws),
    majorSignal(draws, mode),
    journeySignal(draws),
    courtSignal(draws),
    orientationSignal(draws),
  ];
  return signals.filter((s): s is Bi => s !== null).map((s) => s[locale]);
}
