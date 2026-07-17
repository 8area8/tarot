import type { Locale } from '../lib/i18n';

/**
 * « D'où ça vient » : le catalogue des règles qui produisent chaque ligne de la
 * lecture d'un tirage. Chaque moteur (echoes / dignities / signals /
 * quintessence) étiquette ses lignes d'une `RuleKey` ; ici on donne, pour
 * chaque règle, son NOM (la famille), son MÉCANISME en clair (ce que le calcul
 * fait, distinct de l'observation ponctuelle affichée dans la ligne) et une
 * ancre « apprendre » vers la page qui l'enseigne.
 *
 * La ligne reste l'observation concrète (« Feu et Eau se contrarient… ») ;
 * cette table lui adosse la règle générale — la promesse d'un moteur explicable.
 */

type Bi = Record<Locale, string>;

export type RuleKey =
  | 'dialogue.facing'
  | 'dialogue.motif'
  | 'dialogue.color'
  | 'dialogue.gaze'
  | 'dignity.pair'
  | 'dignity.center'
  | 'signal.element'
  | 'signal.major'
  | 'signal.journey'
  | 'signal.court'
  | 'signal.orientation'
  | 'theme.quintessence';

export interface RuleInfo {
  /** La famille de règle, courte (ex. « Dignité élémentaire »). */
  label: Bi;
  /** Le mécanisme en clair : ce que le calcul observe, pas le cas particulier. */
  explain: Bi;
  /**
   * Où l'apprendre : chemin relatif à `/{lang}/` (ex. `grammaire#dignites`),
   * résolu en lien à l'affichage. `null` quand aucune page ne la détaille encore.
   */
  learn: string | null;
}

export const RULES: Record<RuleKey, RuleInfo> = {
  'dialogue.color': {
    label: { fr: 'Le dialogue des images', en: 'The dialogue of images' },
    explain: {
      fr: 'Une même couleur qui court d’une carte à l’autre tisse un lien visuel : les scènes partagent une tonalité, donc un thème commun. Plus la couleur est rare, plus l’écho est parlant.',
      en: 'A single colour running from one card to the next weaves a visual link: the scenes share a tone, hence a common theme. The rarer the colour, the louder the echo.',
    },
    learn: 'comment-lire',
  },
  'dialogue.motif': {
    label: { fr: 'Le dialogue des images', en: 'The dialogue of images' },
    explain: {
      fr: 'Un motif qui se répète d’une carte à l’autre (l’eau, une montagne, des astres…) fait rimer les images entre elles et prolonge un même décor à travers le tirage.',
      en: 'A motif repeating from card to card (water, a mountain, stars…) makes the images rhyme and carries one setting across the whole spread.',
    },
    learn: 'comment-lire',
  },
  'dialogue.gaze': {
    label: { fr: 'Le dialogue des images', en: 'The dialogue of images' },
    explain: {
      fr: 'Le sens du regard des personnages, lu sur l’illustration : des yeux levés ensemble regardent vers l’invisible ; baissés ensemble, ils se tournent vers le dedans.',
      en: 'The direction of the figures’ gaze, read from the illustration: eyes lifted together look toward the unseen; lowered together, they turn inward.',
    },
    learn: 'comment-lire',
  },
  'dialogue.facing': {
    label: { fr: 'Le dialogue des images', en: 'The dialogue of images' },
    explain: {
      fr: 'L’orientation de deux figures voisines : tournées l’une vers l’autre, elles dialoguent ; se tournant le dos, chacune regarde vers son propre ailleurs.',
      en: 'The facing of two neighbouring figures: turned toward each other, they converse; back to back, each looks toward its own elsewhere.',
    },
    learn: 'comment-lire',
  },
  'dignity.pair': {
    label: { fr: 'Dignité élémentaire', en: 'Elemental dignity' },
    explain: {
      fr: 'Deux cartes voisines s’influencent selon leurs éléments : même élément amplifie, amis (Feu·Air, Eau·Terre) renforcent, contraires (Feu·Eau, Air·Terre) affaiblissent, les autres coexistent. Tradition de la Golden Dawn.',
      en: 'Two neighbouring cards influence each other by their elements: same element amplifies, friends (Fire·Air, Water·Earth) reinforce, contraries (Fire·Water, Air·Earth) weaken, the rest coexist. Golden Dawn tradition.',
    },
    learn: 'grammaire#dignites',
  },
  'dignity.center': {
    label: { fr: 'Dignité élémentaire', en: 'Elemental dignity' },
    explain: {
      fr: 'Dans un tirage à trois, la carte du milieu est jugée par ses deux flancs : soutenue des deux côtés, le geste épouse la scène ; contrariée des deux côtés, il va contre le courant.',
      en: 'In a three-card spread, the middle card is judged by its two flanks: supported on both sides, the move fits the scene; opposed on both sides, it runs against the current.',
    },
    learn: 'grammaire#dignites',
  },
  'signal.element': {
    label: { fr: 'Dominante élémentaire', en: 'Elemental dominant' },
    explain: {
      fr: 'Quand une même enseigne — donc un même élément — revient dans le tirage, elle en colore l’ensemble de son domaine : action, émotion, pensée ou matière.',
      en: 'When one suit — and so one element — recurs in the draw, it colours the whole with its domain: action, emotion, thought or matter.',
    },
    learn: 'grammaire#elements',
  },
  'signal.major': {
    label: { fr: 'Poids des arcanes majeurs', en: 'Weight of the major arcana' },
    explain: {
      fr: 'Les arcanes majeurs figurent les grandes forces du destin. Plus ils sont nombreux dans un tirage, moins la scène dépend de vous seul.',
      en: 'The major arcana stand for the great forces of fate. The more of them in a draw, the less the scene rests on you alone.',
    },
    learn: 'grammaire#voyage',
  },
  'signal.journey': {
    label: { fr: 'Le Voyage du Fou', en: 'The Fool’s Journey' },
    explain: {
      fr: 'Les 22 majeurs se répartissent en trois temps du Voyage (le monde et ses rôles, l’épreuve intérieure, les grandes forces). Plusieurs majeurs d’un même temps accentuent ce mouvement.',
      en: 'The 22 majors split into three movements of the Journey (the world and its roles, the inner trial, the great forces). Several majors from one movement heighten it.',
    },
    learn: 'grammaire#voyage',
  },
  'signal.court': {
    label: { fr: 'Figures de la cour', en: 'Court figures' },
    explain: {
      fr: 'Les cartes de cour (Valet, Cavalier, Reine, Roi) désignent des personnes plutôt que des situations : d’autres que vous agissent dans la scène.',
      en: 'Court cards (Page, Knight, Queen, King) point to people rather than situations: someone other than you is at work in the scene.',
    },
    learn: 'grammaire#cour',
  },
  'signal.orientation': {
    label: { fr: 'Endroit & inversé', en: 'Upright & reversed' },
    explain: {
      fr: 'La balance des cartes à l’endroit et inversées sur l’ensemble du tirage dit si le courant va franchement dans votre sens, ou s’il s’y dérobe.',
      en: 'The balance of upright and reversed cards across the draw tells whether the current runs plainly your way, or slips away from it.',
    },
    learn: null,
  },
  'theme.quintessence': {
    label: { fr: 'Quintessence', en: 'Quintessence' },
    explain: {
      fr: 'La somme des numéros des cartes, réduite à un seul arcane majeur (16 → 1+6 = 7) : le thème caché qui relie le tirage en sourdine. Les figures comptent pour leur rang.',
      en: 'The sum of the cards’ numbers, reduced to a single major arcanum (16 → 1+6 = 7): the hidden theme quietly binding the draw. Court figures count for their rank.',
    },
    learn: 'comment-lire#exemple',
  },
};
