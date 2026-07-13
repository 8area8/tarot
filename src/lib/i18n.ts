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
  },
  en: {
    'site.title': 'Rider-Waite-Smith Tarot',
    'site.tagline': 'Online tarot reading',
    'home.heading': 'Draw a card',
    'home.intro': 'Pick a deck, then draw a card to reveal its meaning.',
    'nav.credits': 'Credits',
    'lang.switch': 'Français',
  },
} satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['fr'];

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}
