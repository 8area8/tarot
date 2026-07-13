export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

export function isLocale(value: string | undefined): value is Locale {
  return value === 'fr' || value === 'en';
}

/** Libellés de l'interface (hors contenu des cartes, qui vit dans les données). */
export const ui = {
  fr: {
    'site.title': 'Tarot Rider-Waite-Smith',
    'site.tagline': 'Tirage de tarot en ligne',
    'home.heading': 'Tirez une carte',
    'home.intro': 'Choisissez un jeu, puis tirez une carte pour découvrir sa signification.',
    'nav.credits': 'Crédits',
    'lang.switch': 'English',
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
    'card.placeholder': 'Votre carte apparaîtra ici.',
  },
  en: {
    'site.title': 'Rider-Waite-Smith Tarot',
    'site.tagline': 'Online tarot reading',
    'home.heading': 'Draw a card',
    'home.intro': 'Pick a deck, then draw a card to reveal its meaning.',
    'nav.credits': 'Credits',
    'lang.switch': 'Français',
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
    'card.placeholder': 'Your card will appear here.',
  },
} satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['fr'];

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}
