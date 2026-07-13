import type { Card, CardContent, Suit } from '../lib/types';
import { MINOR_CONTENT } from './minor-content';

/**
 * Source de vérité des 78 cartes (cadre JDR solo, FR+EN).
 * - Majeures : un acteur marquant (personne, lieu, événement) entre en scène.
 * - Mineures : un événement immédiat / une ambiance de scène (voir minor-content.ts).
 * Registre : nominal + tutoiement ; le négatif est assumé (inversé = forme sombre).
 *
 * Enseignes : Bâtons / Coupes / Épées / Deniers.
 * Figures : Valet (11), Cavalier (12), Reine (13), Roi (14).
 */

interface MajorDef {
  number: number;
  name: { fr: string; en: string };
  content: CardContent;
}

const MAJORS: MajorDef[] = [
  {
    number: 0,
    name: { fr: 'Le Fou', en: 'The Fool' },
    content: {
      keywords: {
        upright: { fr: ['nouveau venu', 'vagabond', 'esprit libre', 'commencement'], en: ['newcomer', 'wanderer', 'free spirit', 'beginning'] },
        reversed: { fr: ['imprudent', 'inconscient', 'fauteur de troubles', 'pari fou'], en: ['reckless one', 'fool', 'troublemaker', 'wild gamble'] },
      },
      meaning: {
        upright: { fr: "Un nouveau venu insouciant fait irruption : vagabond, naïf ou esprit libre qui ignore le danger. Un commencement s'ouvre devant toi.", en: "A carefree newcomer bursts in: a wanderer, an innocent, a free spirit blind to danger. A beginning opens before you." },
        reversed: { fr: "L'insouciant devient un danger : il t'entraîne dans une folie, un pari inconsidéré. La chute n'est pas loin.", en: "The carefree one turns dangerous: they drag you into folly, a reckless gamble. The fall is not far off." },
      },
    },
  },
  {
    number: 1,
    name: { fr: 'Le Magicien', en: 'The Magician' },
    content: {
      keywords: {
        upright: { fr: ['artisan habile', 'meneur charismatique', 'volonté', 'talent'], en: ['skilled operator', 'charismatic maker', 'will', 'talent'] },
        reversed: { fr: ['manipulateur', 'charlatan', 'illusionniste', 'beau parleur'], en: ['manipulator', 'charlatan', 'trickster', 'smooth talker'] },
      },
      meaning: {
        upright: { fr: "Un être habile et sûr de lui entre en jeu : artisan, meneur, faiseur capable de transformer une idée en acte. Tout semble à sa portée.", en: "A deft, self-assured figure steps in: a craftsman, a leader, a maker who turns ideas into acts. Everything seems within their reach." },
        reversed: { fr: "Un manipulateur tire les ficelles : belles paroles, tours de passe-passe, promesses creuses. On te berne.", en: "A manipulator pulls the strings: fine words, sleight of hand, hollow promises. You're being fooled." },
      },
    },
  },
  {
    number: 2,
    name: { fr: 'La Grande Prêtresse', en: 'The High Priestess' },
    content: {
      keywords: {
        upright: { fr: ['gardienne de secrets', 'oracle', 'mystère', 'savoir caché'], en: ['keeper of secrets', 'oracle', 'mystery', 'hidden lore'] },
        reversed: { fr: ['secret trouble', 'silence lourd', 'savoir dissimulé', 'faux mystère'], en: ['murky secret', 'heavy silence', 'withheld knowledge', 'false mystery'] },
      },
      meaning: {
        upright: { fr: "Une gardienne du mystère paraît : femme silencieuse, oracle, détentrice d'un savoir caché. Un secret entoure la scène.", en: "A keeper of mystery appears: a silent woman, an oracle, holder of hidden knowledge. A secret surrounds the scene." },
        reversed: { fr: "Un secret pourrit dans l'ombre : on te cache quelque chose, ou un faux mystère t'égare. Le silence devient poison.", en: "A secret festers in the shadows: something is hidden from you, or a false mystery leads you astray. The silence turns to poison." },
      },
    },
  },
  {
    number: 3,
    name: { fr: "L'Impératrice", en: 'The Empress' },
    content: {
      keywords: {
        upright: { fr: ['figure maternelle', 'terre fertile', 'abondance', 'protectrice'], en: ['mother figure', 'fertile land', 'abundance', 'protector'] },
        reversed: { fr: ['mère étouffante', 'terre stérile', 'excès', 'dépendance'], en: ['smothering mother', 'barren land', 'excess', 'dependence'] },
      },
      meaning: {
        upright: { fr: "Une présence nourricière rayonne : une mère, une hôtesse généreuse, une terre féconde. Ici, les choses poussent et prospèrent.", en: "A nurturing presence radiates: a mother, a generous host, a fertile land. Here, things grow and thrive." },
        reversed: { fr: "La générosité vire à l'étouffement : une figure possessive, un luxe qui amollit, une terre qui ne donne plus.", en: "Generosity curdles into smothering: a possessive figure, a comfort that softens, a land that no longer yields." },
      },
    },
  },
  {
    number: 4,
    name: { fr: "L'Empereur", en: 'The Emperor' },
    content: {
      keywords: {
        upright: { fr: ['autorité', 'chef', 'loi', 'pouvoir établi'], en: ['authority', 'chief', 'law', 'established power'] },
        reversed: { fr: ['tyran', 'rigidité', 'domination', 'abus de pouvoir'], en: ['tyrant', 'rigidity', 'domination', 'abuse of power'] },
      },
      meaning: {
        upright: { fr: "Une figure d'autorité s'impose : un chef, un père, une institution qui fait loi. Le pouvoir a un visage, et il gouverne.", en: "A figure of authority asserts itself: a chief, a father, an institution that lays down the law. Power has a face, and it rules." },
        reversed: { fr: "Le tyran montre son vrai jour : autorité rigide, domination, ordre qui écrase. On abuse du pouvoir.", en: "The tyrant shows his true colours: rigid authority, domination, an order that crushes. Power is being abused." },
      },
    },
  },
  {
    number: 5,
    name: { fr: 'Le Hiérophante', en: 'The Hierophant' },
    content: {
      keywords: {
        upright: { fr: ['mentor', 'maître', 'tradition', 'institution'], en: ['mentor', 'teacher', 'tradition', 'institution'] },
        reversed: { fr: ['dogmatique', 'gourou', 'endoctrinement', 'hypocrite'], en: ['dogmatist', 'guru', 'indoctrination', 'hypocrite'] },
      },
      meaning: {
        upright: { fr: "Un maître ou une institution fait figure d'autorité morale : mentor, prêtre, gardien d'une tradition. On enseigne, on transmet, on juge selon les règles.", en: "A teacher or institution stands as moral authority: a mentor, a priest, a keeper of tradition. Here, lore is taught, passed on, and judged by the rules." },
        reversed: { fr: "Le maître se fait dogmatique : un gourou, un hypocrite, une doctrine qui enferme. On t'impose une vérité.", en: "The teacher turns dogmatic: a guru, a hypocrite, a doctrine that cages. A single truth is forced on you." },
      },
    },
  },
  {
    number: 6,
    name: { fr: 'Les Amoureux', en: 'The Lovers' },
    content: {
      keywords: {
        upright: { fr: ['alliance', 'être aimé', 'lien fort', 'choix du cœur'], en: ['alliance', 'loved one', 'strong bond', 'choice of the heart'] },
        reversed: { fr: ['tentation', 'trahison', 'lien brisé', 'loyautés opposées'], en: ['temptation', 'betrayal', 'broken bond', 'divided loyalties'] },
      },
      meaning: {
        upright: { fr: "Un lien puissant se noue : un être aimé, un allié, une union sincère. Un choix du cœur s'offre à toi, sous le signe de l'accord.", en: "A powerful bond forms: a loved one, an ally, a true union. A choice of the heart opens up, under the sign of harmony." },
        reversed: { fr: "Le lien se fissure : tentation, trahison, loyautés qui s'opposent. Quelqu'un devra être déçu.", en: "The bond cracks: temptation, betrayal, loyalties at odds. Someone is going to be let down." },
      },
    },
  },
  {
    number: 7,
    name: { fr: 'Le Chariot', en: 'The Chariot' },
    content: {
      keywords: {
        upright: { fr: ['conquérant', 'volonté de fer', 'avancée', 'triomphe'], en: ['conqueror', 'iron will', 'advance', 'triumph'] },
        reversed: { fr: ['course folle', 'perte de contrôle', 'ambition aveugle', 'déroute'], en: ['reckless charge', 'loss of control', 'blind ambition', 'rout'] },
      },
      meaning: {
        upright: { fr: "Une force lancée traverse la scène : un conquérant, un voyageur déterminé, une campagne qui avance. La volonté trace sa route.", en: "A force in motion crosses the scene: a conqueror, a driven traveller, a campaign on the move. Will carves its road." },
        reversed: { fr: "L'élan devient fuite en avant : ambition aveugle, char qui verse, meneur qui perd les rênes. Ça fonce droit dans le mur.", en: "Momentum turns to a headlong rush: blind ambition, a chariot overturning, a leader losing the reins. It charges straight into the wall." },
      },
    },
  },
  {
    number: 8,
    name: { fr: 'La Force', en: 'Strength' },
    content: {
      keywords: {
        upright: { fr: ['force tranquille', 'dompteur', 'courage', 'maîtrise'], en: ['quiet strength', 'tamer', 'courage', 'mastery'] },
        reversed: { fr: ['brutalité', 'bête indomptée', 'peur', 'faiblesse cachée'], en: ['brutality', 'untamed beast', 'fear', 'hidden weakness'] },
      },
      meaning: {
        upright: { fr: "Une force paisible s'impose sans violence : un être qui dompte sa peur et calme les fauves. La douceur maîtrise la bête.", en: "A calm strength prevails without violence: someone who tames their fear and soothes the beasts. Gentleness masters the beast." },
        reversed: { fr: "La bête l'emporte : brutalité, colère non maîtrisée, ou une force qui n'est que façade. Quelque chose échappe à tout contrôle.", en: "The beast wins out: brutality, unchecked rage, or a strength that's only a mask. Something slips beyond all control." },
      },
    },
  },
  {
    number: 9,
    name: { fr: "L'Ermite", en: 'The Hermit' },
    content: {
      keywords: {
        upright: { fr: ['ermite', 'sage', 'guide solitaire', 'quête'], en: ['hermit', 'sage', 'solitary guide', 'quest'] },
        reversed: { fr: ['reclus aigri', 'isolement', 'égaré', 'aide refusée'], en: ['bitter recluse', 'isolation', 'lost soul', 'refusal of help'] },
      },
      meaning: {
        upright: { fr: "Un solitaire éclaire le chemin : un ermite, un sage retiré, un guide qui parle peu mais sait. Un lieu à l'écart appelle à la réflexion.", en: "A solitary figure lights the way: a hermit, a withdrawn sage, a guide who speaks little but knows much. A place apart calls for reflection." },
        reversed: { fr: "La solitude devient prison : un reclus aigri, un égaré qui refuse la main tendue. Le retrait a viré à la fuite.", en: "Solitude becomes a prison: a bitter recluse, a lost soul who refuses the outstretched hand. Withdrawal has turned to flight." },
      },
    },
  },
  {
    number: 10,
    name: { fr: 'La Roue de la Fortune', en: 'Wheel of Fortune' },
    content: {
      keywords: {
        upright: { fr: ['coup du sort', 'tournant', 'chance', 'destin'], en: ['twist of fate', 'turning point', 'luck', 'destiny'] },
        reversed: { fr: ['revers de fortune', 'malchance', 'cycle brisé', 'mauvais moment'], en: ['reversal of fortune', 'bad luck', 'broken cycle', 'bad timing'] },
      },
      meaning: {
        upright: { fr: "Le destin fait tourner sa roue : un coup du sort, une rencontre fortuite, un tournant qui rebat les cartes. La chance passe — à toi de la saisir.", en: "Fate turns its wheel: a stroke of luck, a chance encounter, a turning point that reshuffles everything. Fortune passes by — seize it." },
        reversed: { fr: "La roue se retourne contre toi : malchance, revers soudain, mauvais moment. Ce qui montait redescend.", en: "The wheel turns against you: misfortune, a sudden reversal, bad timing. What was rising now falls." },
      },
    },
  },
  {
    number: 11,
    name: { fr: 'La Justice', en: 'Justice' },
    content: {
      keywords: {
        upright: { fr: ['juge', 'verdict', 'loi', 'vérité'], en: ['judge', 'verdict', 'law', 'truth'] },
        reversed: { fr: ['injustice', 'jugement corrompu', 'mensonge', 'impunité'], en: ['injustice', 'corrupt judgement', 'lie', 'impunity'] },
      },
      meaning: {
        upright: { fr: "La loi paraît en personne : un juge, un arbitre, un verdict qui tombe. Les actes sont pesés, la vérité tranche.", en: "The law appears in person: a judge, an arbiter, a verdict handed down. Deeds are weighed, and truth decides." },
        reversed: { fr: "La justice est dévoyée : verdict truqué, mensonge couvert, coupable impuni. La balance est faussée.", en: "Justice is perverted: a rigged verdict, a covered lie, the guilty left unpunished. The scales are false." },
      },
    },
  },
  {
    number: 12,
    name: { fr: 'Le Pendu', en: 'The Hanged Man' },
    content: {
      keywords: {
        upright: { fr: ['sacrifice', 'suspens', 'renversement', 'attente'], en: ['sacrifice', 'suspension', 'reversal', 'waiting'] },
        reversed: { fr: ['sacrifice vain', 'impasse', 'martyr inutile', 'blocage'], en: ['vain sacrifice', 'deadlock', 'pointless martyr', 'stalling'] },
      },
      meaning: {
        upright: { fr: "Tout se fige dans l'attente : un être se sacrifie ou se suspend, un otage, un temps mort forcé. On voit la scène à l'envers.", en: "Everything freezes in waiting: someone sacrifices or suspends themselves, a hostage, a forced pause. The scene is seen upside down." },
        reversed: { fr: "Le sacrifice ne sert à rien : un martyr inutile, une impasse qui s'éternise, un abandon qui coûte cher.", en: "The sacrifice is for nothing: a pointless martyr, a deadlock that drags on, a surrender that costs dearly." },
      },
    },
  },
  {
    number: 13,
    name: { fr: 'La Mort', en: 'Death' },
    content: {
      keywords: {
        upright: { fr: ['fin', 'mort', 'transformation', 'passage'], en: ['ending', 'death', 'transformation', 'passage'] },
        reversed: { fr: ['agonie', 'refus de la fin', 'pourrissement', 'stagnation'], en: ['agony', 'refusal to end', 'rot', 'stagnation'] },
      },
      meaning: {
        upright: { fr: "Une fin s'abat sur la scène : une mort, une rupture nette, la fin d'une ère. Quelque chose disparaît pour de bon — et autre chose pourra naître.", en: "An ending falls upon the scene: a death, a clean break, the end of an era. Something is gone for good — and something else may rise." },
        reversed: { fr: "La fin s'éternise dans l'agonie : on refuse de laisser mourir ce qui est mort, et cela pourrit sur place.", en: "The ending drags on in agony: what is dead is refused its death, and it rots where it lies." },
      },
    },
  },
  {
    number: 14,
    name: { fr: 'La Tempérance', en: 'Temperance' },
    content: {
      keywords: {
        upright: { fr: ['guérisseur', 'médiateur', 'équilibre', 'alliage'], en: ['healer', 'mediator', 'balance', 'blend'] },
        reversed: { fr: ['déséquilibre', 'excès', 'discorde', 'mélange raté'], en: ['imbalance', 'excess', 'discord', 'bad mix'] },
      },
      meaning: {
        upright: { fr: "Une présence apaisante rétablit l'équilibre : un guérisseur, un médiateur, quelqu'un qui réconcilie les contraires. Le juste dosage opère.", en: "A calming presence restores balance: a healer, a mediator, someone who reconciles opposites. The right measure takes hold." },
        reversed: { fr: "L'équilibre se rompt : excès, discorde, un mélange qui tourne mal. Rien ne s'accorde plus.", en: "The balance breaks: excess, discord, a mix gone wrong. Nothing holds together anymore." },
      },
    },
  },
  {
    number: 15,
    name: { fr: 'Le Diable', en: 'The Devil' },
    content: {
      keywords: {
        upright: { fr: ['tentateur', 'emprise', 'vice', 'chaînes'], en: ['tempter', 'hold', 'vice', 'chains'] },
        reversed: { fr: ['libération', 'chaînes brisées', 'emprise démasquée', 'fuite'], en: ['release', 'broken chains', 'hold exposed', 'escape'] },
      },
      meaning: {
        upright: { fr: "Une figure d'emprise domine la scène : un tentateur, un maître de vices, une addiction qui enchaîne. On promet le plaisir et on prend la liberté.", en: "A figure of bondage dominates the scene: a tempter, a master of vices, an addiction that chains. Pleasure is promised, and freedom is taken." },
        reversed: { fr: "Les chaînes se brisent : on démasque l'emprise, on fuit le tentateur, on brise l'habitude. La liberté se reprend.", en: "The chains break: the hold is exposed, the tempter fled, the habit shattered. Freedom is reclaimed." },
      },
    },
  },
  {
    number: 16,
    name: { fr: 'La Tour', en: 'The Tower' },
    content: {
      keywords: {
        upright: { fr: ['catastrophe', 'effondrement', 'révélation', 'choc'], en: ['catastrophe', 'collapse', 'revelation', 'shock'] },
        reversed: { fr: ['désastre latent', 'crise qui pourrit', 'chute retardée', 'déni'], en: ['looming disaster', 'festering crisis', 'delayed fall', 'denial'] },
      },
      meaning: {
        upright: { fr: "Un événement brutal fait tout basculer : catastrophe, révélation, effondrement soudain. Rien ne restera en place.", en: "A brutal event topples everything: catastrophe, revelation, sudden collapse. Nothing will stay standing." },
        reversed: { fr: "Le désastre couve et pourrit sur place : on retarde l'inévitable, on nie les fissures, et la crise empire.", en: "Disaster smoulders and festers: the inevitable is delayed, the cracks denied, and the crisis worsens." },
      },
    },
  },
  {
    number: 17,
    name: { fr: "L'Étoile", en: 'The Star' },
    content: {
      keywords: {
        upright: { fr: ['espoir', 'lumière guide', 'bienfaiteur', 'répit'], en: ['hope', 'guiding light', 'benefactor', 'respite'] },
        reversed: { fr: ['espoir déçu', 'mirage', 'découragement', 'lumière éteinte'], en: ['dashed hope', 'mirage', 'discouragement', 'dimmed light'] },
      },
      meaning: {
        upright: { fr: "Une lueur d'espoir se lève : un havre paisible, un bienfaiteur, une étoile qui guide après la tempête. On peut souffler et se soigner.", en: "A glimmer of hope rises: a peaceful haven, a benefactor, a star that guides after the storm. You can breathe and heal." },
        reversed: { fr: "L'espoir se révèle mirage : promesse déçue, lumière qui s'éteint, foi qui s'effrite. On s'est accroché à du vide.", en: "Hope proves a mirage: a promise dashed, a light going out, faith crumbling. You clung to nothing." },
      },
    },
  },
  {
    number: 18,
    name: { fr: 'La Lune', en: 'The Moon' },
    content: {
      keywords: {
        upright: { fr: ['illusion', 'peur', 'nuit', 'inconnu'], en: ['illusion', 'fear', 'night', 'the unknown'] },
        reversed: { fr: ['tromperie dévoilée', 'peur qui submerge', 'égarement', 'folie'], en: ['deception unveiled', 'overwhelming fear', 'losing the way', 'madness'] },
      },
      meaning: {
        upright: { fr: "La scène baigne dans le trouble : nuit, brume, peurs et faux-semblants. Rien n'est ce qu'il paraît, et l'inconnu rôde.", en: "The scene is steeped in murk: night, mist, fears and false appearances. Nothing is what it seems, and the unknown prowls." },
        reversed: { fr: "Le trouble vire au pire : tromperie qui éclate, peur qui submerge, esprit qui s'égare. On perd pied dans l'obscurité.", en: "The murk turns to worse: deception erupting, fear overwhelming, a mind losing its way. You lose your footing in the dark." },
      },
    },
  },
  {
    number: 19,
    name: { fr: 'Le Soleil', en: 'The Sun' },
    content: {
      keywords: {
        upright: { fr: ['joie', 'triomphe', 'clarté', 'plein jour'], en: ['joy', 'triumph', 'clarity', 'broad daylight'] },
        reversed: { fr: ['éclat terni', 'succès en toc', 'vanité', 'retard'], en: ['tarnished glow', 'hollow success', 'vanity', 'delay'] },
      },
      meaning: {
        upright: { fr: "La lumière triomphe : une réussite éclatante, une joie franche, une vérité en plein jour. Tout s'illumine et se dévoile clairement.", en: "Light triumphs: a radiant success, open joy, a truth in broad daylight. Everything brightens and shows itself clearly." },
        reversed: { fr: "L'éclat sonne faux : succès en toc, joie forcée, vanité qui aveugle. La lumière cache une ombre.", en: "The glow rings false: a hollow success, forced joy, blinding vanity. The light hides a shadow." },
      },
    },
  },
  {
    number: 20,
    name: { fr: 'Le Jugement', en: 'Judgement' },
    content: {
      keywords: {
        upright: { fr: ['appel', 'renaissance', 'révélation', 'réveil'], en: ['a calling', 'rebirth', 'revelation', 'awakening'] },
        reversed: { fr: ['jugement sévère', 'passé qui ressurgit', 'appel ignoré', 'condamnation'], en: ['harsh judgement', 'the past resurfacing', 'call ignored', 'condemnation'] },
      },
      meaning: {
        upright: { fr: "Un appel retentit : le passé ressurgit, une vérité éclate, une seconde chance s'offre. L'heure du bilan a sonné, et l'on renaît.", en: "A call rings out: the past resurfaces, a truth breaks open, a second chance appears. The hour of reckoning has come, and one is reborn." },
        reversed: { fr: "Le verdict est sans appel : un passé qui condamne, une faute qui rattrape, un appel resté sans réponse. Pas de seconde chance.", en: "The verdict is final: a past that condemns, a fault that catches up, a call left unanswered. No second chance." },
      },
    },
  },
  {
    number: 21,
    name: { fr: 'Le Monde', en: 'The World' },
    content: {
      keywords: {
        upright: { fr: ['accomplissement', 'monde ouvert', 'aboutissement', 'plénitude'], en: ['fulfilment', 'open world', 'completion', 'wholeness'] },
        reversed: { fr: ['inachevé', 'quête sans fin', 'promesse creuse', 'porte close'], en: ['unfinished', 'endless quest', 'hollow promise', 'closed door'] },
      },
      meaning: {
        upright: { fr: "Une œuvre s'accomplit : un voyage touche à sa fin, un monde s'ouvre, une plénitude se révèle. La boucle est bouclée.", en: "A work reaches completion: a journey nears its end, a world opens, a wholeness reveals itself. The circle closes." },
        reversed: { fr: "L'aboutissement se dérobe : une quête sans fin, une porte qui reste close, un accomplissement qui sonne creux. Il manque toujours une pièce.", en: "Completion slips away: an endless quest, a door that stays shut, an achievement that rings hollow. A piece is always missing." },
      },
    },
  },
];

// --- Enseignes mineures : noms FR/EN ---
const SUIT_NAMES: Record<Suit, { fr: string; en: string }> = {
  wands: { fr: 'Bâtons', en: 'Wands' },
  cups: { fr: 'Coupes', en: 'Cups' },
  swords: { fr: 'Épées', en: 'Swords' },
  pentacles: { fr: 'Deniers', en: 'Pentacles' },
};

// rang 1-14 -> nom (1=As, 11=Valet, 12=Cavalier, 13=Reine, 14=Roi)
const RANK_NAMES: Record<number, { fr: string; en: string }> = {
  1: { fr: 'As', en: 'Ace' },
  2: { fr: 'Deux', en: 'Two' },
  3: { fr: 'Trois', en: 'Three' },
  4: { fr: 'Quatre', en: 'Four' },
  5: { fr: 'Cinq', en: 'Five' },
  6: { fr: 'Six', en: 'Six' },
  7: { fr: 'Sept', en: 'Seven' },
  8: { fr: 'Huit', en: 'Eight' },
  9: { fr: 'Neuf', en: 'Nine' },
  10: { fr: 'Dix', en: 'Ten' },
  11: { fr: 'Valet', en: 'Page' },
  12: { fr: 'Cavalier', en: 'Knight' },
  13: { fr: 'Reine', en: 'Queen' },
  14: { fr: 'Roi', en: 'King' },
};

const SUIT_ORDER: Suit[] = ['wands', 'cups', 'swords', 'pentacles'];

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

const majorCards: Card[] = MAJORS.map((m) => ({
  id: `major-${pad2(m.number)}`,
  arcana: 'major',
  suit: null,
  number: m.number,
  image: `major-${pad2(m.number)}.webp`,
  name: m.name,
  content: m.content,
}));

const minorCards: Card[] = SUIT_ORDER.flatMap((suit) =>
  Array.from({ length: 14 }, (_, i) => {
    const rank = i + 1;
    const r = RANK_NAMES[rank];
    const s = SUIT_NAMES[suit];
    return {
      id: `${suit}-${pad2(rank)}`,
      arcana: 'minor' as const,
      suit,
      number: rank,
      image: `${suit}-${pad2(rank)}.webp`,
      name: { fr: `${r.fr} de ${s.fr}`, en: `${r.en} of ${s.en}` },
      content: MINOR_CONTENT[`${suit}-${pad2(rank)}`] ?? null,
    };
  }),
);

export const cards: Card[] = [...majorCards, ...minorCards];

export { SUIT_NAMES };
