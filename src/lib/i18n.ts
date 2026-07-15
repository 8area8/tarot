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
    'deck.label': 'Jeu',
    'deck.major': 'Arcanes majeurs',
    'deck.minor': 'Arcanes mineurs',
    'deck.full': 'Jeu complet',
    'option.reversed': 'Autoriser les cartes inversées',
    'action.draw': 'Tirer une carte',
    'action.again': 'Nouveau tirage',
    'action.decode': 'Décoder',
    'action.decodeHide': 'Masquer',
    'gallery.heading': 'Toutes les cartes',
    'gallery.majors': 'Arcanes majeurs',
    'gallery.show': 'Voir toutes les cartes',
    'gallery.hide': 'Masquer les cartes',
    'grammar.show': 'Grammaire du tarot',
    'grammar.hide': 'Masquer la grammaire',
    'grammar.heading': 'Grammaire du tarot',
    'grammar.elements': 'Les quatre éléments',
    'grammar.numbers': 'Les nombres (1–10)',
    'grammar.court': 'La cour (Valet → Roi)',
    'grammar.journey': 'Le voyage du Fou',
    'card.upright': 'À l’endroit',
    'card.reversed': 'Inversée',
    'card.noContent': 'Signification à venir pour cette carte.',
    'card.placeholder': 'Concentrez-vous, puis retournez la carte.',
    'card.seeUpright': 'À l’endroit',
    'card.seeReversed': 'Inversée',
    'card.copy': 'Copier',
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
    'deck.label': 'Deck',
    'deck.major': 'Major Arcana',
    'deck.minor': 'Minor Arcana',
    'deck.full': 'Full deck',
    'option.reversed': 'Allow reversed cards',
    'action.draw': 'Draw a card',
    'action.again': 'Draw again',
    'action.decode': 'Decode',
    'action.decodeHide': 'Hide',
    'gallery.heading': 'All cards',
    'gallery.majors': 'Major Arcana',
    'gallery.show': 'Browse all cards',
    'gallery.hide': 'Hide cards',
    'grammar.show': 'The grammar of tarot',
    'grammar.hide': 'Hide the grammar',
    'grammar.heading': 'The grammar of tarot',
    'grammar.elements': 'The four elements',
    'grammar.numbers': 'The numbers (1–10)',
    'grammar.court': 'The court (Page → King)',
    'grammar.journey': "The Fool's journey",
    'card.upright': 'Upright',
    'card.reversed': 'Reversed',
    'card.noContent': 'Meaning coming soon for this card.',
    'card.placeholder': 'Focus, then turn the card over.',
    'card.seeUpright': 'Upright',
    'card.seeReversed': 'Reversed',
    'card.copy': 'Copy',
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
