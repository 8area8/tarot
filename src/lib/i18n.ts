export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

export function isLocale(value: string | undefined): value is Locale {
  return value === 'fr' || value === 'en';
}

/** Libellés de l'interface (hors contenu des cartes, qui vit dans les données). */
export const ui = {
  fr: {
    'site.title': 'Tirage Tarot',
    'site.tagline': 'Laissez le hasard vous répondre',
    'lang.switch': 'English',
    'home.heading': 'Tirez une carte',
    'home.intro': 'Choisissez un jeu, gardez votre question en tête, puis retournez une carte.',
    'deck.label': 'Jeu',
    'deck.major': 'Arcanes majeurs',
    'deck.minor': 'Arcanes mineurs',
    'deck.full': 'Jeu complet',
    'option.reversed': 'Autoriser les cartes inversées',
    'action.draw': 'Tirer une carte',
    'action.again': 'Nouveau tirage',
    'action.hint': 'Astuce : appuyez sur Entrée pour retirer une carte.',
    'gallery.heading': 'Toutes les cartes',
    'gallery.majors': 'Arcanes majeurs',
    'gallery.show': 'Voir toutes les cartes',
    'gallery.hide': 'Masquer les cartes',
    'card.upright': 'À l’endroit',
    'card.reversed': 'Inversée',
    'card.noContent': 'Signification à venir pour cette carte.',
    'card.placeholder': 'Concentrez-vous, puis retournez la carte.',
    'card.seeUpright': 'Voir à l’endroit',
    'card.seeReversed': 'Voir inversée',
    'card.copy': 'Copier la lecture',
    'card.copied': 'Copié !',
    'meta.major': 'Arcane majeur',
    'meta.minor': 'Arcane mineur',
    'footer.credit':
      'Illustrations du jeu Rider-Waite-Smith (1909, Pamela Colman Smith), domaine public.',
    'footer.source': 'Scans : Wikimedia Commons',
  },
  en: {
    'site.title': 'Tarot Draw',
    'site.tagline': 'Let chance answer you',
    'lang.switch': 'Français',
    'home.heading': 'Draw a card',
    'home.intro': 'Pick a deck, hold your question in mind, then turn a card over.',
    'deck.label': 'Deck',
    'deck.major': 'Major Arcana',
    'deck.minor': 'Minor Arcana',
    'deck.full': 'Full deck',
    'option.reversed': 'Allow reversed cards',
    'action.draw': 'Draw a card',
    'action.again': 'Draw again',
    'action.hint': 'Tip: press Enter to draw again.',
    'gallery.heading': 'All cards',
    'gallery.majors': 'Major Arcana',
    'gallery.show': 'Browse all cards',
    'gallery.hide': 'Hide cards',
    'card.upright': 'Upright',
    'card.reversed': 'Reversed',
    'card.noContent': 'Meaning coming soon for this card.',
    'card.placeholder': 'Focus, then turn the card over.',
    'card.seeUpright': 'See upright',
    'card.seeReversed': 'See reversed',
    'card.copy': 'Copy reading',
    'card.copied': 'Copied!',
    'meta.major': 'Major Arcana',
    'meta.minor': 'Minor Arcana',
    'footer.credit':
      'Illustrations from the Rider-Waite-Smith deck (1909, Pamela Colman Smith), public domain.',
    'footer.source': 'Scans: Wikimedia Commons',
  },
} satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['fr'];

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}
