export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

export function isLocale(value: string | undefined): value is Locale {
  return value === 'fr' || value === 'en';
}

/** Libellés de l'interface (hors contenu des cartes, qui vit dans les données). */
export const ui = {
  fr: {
    'site.title': 'Les Terres Libres',
    'site.tagline': 'Laissez le hasard vous répondre',
    'nav.tarot': 'Tarot',
    'nav.coin': 'Pièce',
    'nav.credits': 'Crédits',
    'lang.switch': 'English',
    'hub.tarot.desc': 'Tirez une carte et lisez son message.',
    'hub.coin.desc': 'Pile ou face : laissez la pièce trancher.',
    'hub.enter': 'Entrer',
    'home.heading': 'Tirez une carte',
    'home.intro': 'Choisissez un jeu, gardez votre question en tête, puis retournez une carte.',
    'coin.heading': 'Pile ou Face',
    'coin.intro': 'Posez une question, puis lancez la pièce.',
    'coin.placeholder': 'Lancez la pièce pour laisser le hasard trancher.',
    'coin.heads': 'Face',
    'coin.tails': 'Pile',
    'action.flip': 'Lancer',
    'action.flipAgain': 'Relancer',
    'deck.label': 'Jeu',
    'deck.full': 'Jeu complet',
    'deck.major': 'Arcanes majeurs',
    'deck.minor': 'Arcanes mineurs',
    'option.reversed': 'Autoriser les cartes inversées',
    'action.draw': 'Tirer une carte',
    'action.again': 'Nouveau tirage',
    'card.upright': 'À l’endroit',
    'card.reversed': 'Inversée',
    'card.keywords': 'Mots-clés',
    'card.noContent': 'Signification à venir pour cette carte.',
    'card.placeholder': 'Concentrez-vous, puis retournez la carte.',
    'card.seeUpright': 'Voir à l’endroit',
    'card.seeReversed': 'Voir inversée',
    'meta.major': 'Arcane majeur',
    'meta.minor': 'Arcane mineur',
  },
  en: {
    'site.title': 'Les Terres Libres',
    'site.tagline': 'Let chance answer you',
    'nav.tarot': 'Tarot',
    'nav.coin': 'Coin',
    'nav.credits': 'Credits',
    'lang.switch': 'Français',
    'hub.tarot.desc': 'Draw a card and read its message.',
    'hub.coin.desc': 'Heads or tails: let the coin decide.',
    'hub.enter': 'Enter',
    'home.heading': 'Draw a card',
    'home.intro': 'Pick a deck, hold your question in mind, then turn a card over.',
    'coin.heading': 'Heads or Tails',
    'coin.intro': 'Ask a question, then flip the coin.',
    'coin.placeholder': 'Flip the coin and let chance decide.',
    'coin.heads': 'Heads',
    'coin.tails': 'Tails',
    'action.flip': 'Flip',
    'action.flipAgain': 'Flip again',
    'deck.label': 'Deck',
    'deck.full': 'Full deck',
    'deck.major': 'Major Arcana',
    'deck.minor': 'Minor Arcana',
    'option.reversed': 'Allow reversed cards',
    'action.draw': 'Draw a card',
    'action.again': 'Draw again',
    'card.upright': 'Upright',
    'card.reversed': 'Reversed',
    'card.keywords': 'Keywords',
    'card.noContent': 'Meaning coming soon for this card.',
    'card.placeholder': 'Focus, then turn the card over.',
    'card.seeUpright': 'See upright',
    'card.seeReversed': 'See reversed',
    'meta.major': 'Major Arcana',
    'meta.minor': 'Minor Arcana',
  },
} satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['fr'];

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}
