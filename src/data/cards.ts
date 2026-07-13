import type { Card, CardContent, Suit } from '../lib/types';

/**
 * Source de vérité des 78 cartes.
 * - Arcanes majeurs : structure + contenu rédigé (ton contemporain, FR+EN).
 * - Arcanes mineurs : structure générée ci-dessous ; contenu rédigé ultérieurement.
 *
 * Noms d'enseignes retenus (révisable) : Bâtons / Coupes / Épées / Deniers.
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
        upright: { fr: ['nouveau départ', 'spontanéité', 'liberté', 'confiance'], en: ['new beginnings', 'spontaneity', 'freedom', 'trust'] },
        reversed: { fr: ['imprudence', 'naïveté', 'hésitation', 'prise de risque'], en: ['recklessness', 'naivety', 'hesitation', 'risk-taking'] },
      },
      meaning: {
        upright: { fr: "Un élan neuf vous pousse à vous lancer sans tout maîtriser. C'est le moment d'oser, de suivre votre curiosité et de faire confiance au chemin, même s'il n'est pas encore tracé.", en: "A fresh impulse invites you to leap before you have every answer. It's a moment to be bold, follow your curiosity, and trust the path even if it isn't mapped out yet." },
        reversed: { fr: "L'envie de partir est là, mais quelque chose vous retient — la peur, ou au contraire une légèreté qui frôle l'imprudence. Prenez le temps de regarder où vous mettez les pieds avant de sauter.", en: "The urge to go is there, but something is off — either fear holding you back, or a carelessness that borders on reckless. Look where you're stepping before you jump." },
      },
    },
  },
  {
    number: 1,
    name: { fr: 'Le Magicien', en: 'The Magician' },
    content: {
      keywords: {
        upright: { fr: ['pouvoir personnel', 'volonté', 'talent', 'passage à l\'action'], en: ['personal power', 'willpower', 'skill', 'manifestation'] },
        reversed: { fr: ['manipulation', 'potentiel gâché', 'doute', 'illusion'], en: ['manipulation', 'wasted potential', 'self-doubt', 'illusion'] },
      },
      meaning: {
        upright: { fr: "Vous avez tout ce qu'il faut pour concrétiser votre projet : les compétences, l'énergie et la volonté. Alignez votre intention et vos actes, et transformez l'idée en réalité.", en: "You already hold what you need to make your project real: the skills, the energy and the will. Line up your intention with your actions and turn the idea into something concrete." },
        reversed: { fr: "Votre potentiel tourne à vide ou sert de mauvaises fins. Méfiez-vous des belles promesses — les vôtres comme celles des autres — et remettez vos actes au service de vos vraies intentions.", en: "Your potential is spinning in place or being misused. Be wary of slick promises — yours or others' — and put your actions back in service of your real intentions." },
      },
    },
  },
  {
    number: 2,
    name: { fr: 'La Grande Prêtresse', en: 'The High Priestess' },
    content: {
      keywords: {
        upright: { fr: ['intuition', 'mystère', 'savoir intérieur', 'patience'], en: ['intuition', 'mystery', 'inner knowing', 'patience'] },
        reversed: { fr: ['secrets', 'intuition ignorée', 'confusion', 'repli'], en: ['secrets', 'ignored intuition', 'confusion', 'withdrawal'] },
      },
      meaning: {
        upright: { fr: "Les réponses ne viendront pas du bruit extérieur mais de votre voix intérieure. Faites silence, observez vos ressentis et laissez le savoir remonter à son rythme.", en: "The answers won't come from outside noise but from your inner voice. Grow quiet, notice what you feel, and let the knowing surface in its own time." },
        reversed: { fr: "Vous étouffez une petite voix qui sait pourtant. Un non-dit, une intuition mise de côté brouillent les cartes : reconnectez-vous à ce que vous savez déjà au fond.", en: "You're muffling a quiet voice that already knows. Something unspoken, or an instinct set aside, is clouding things — reconnect with what you sense deep down." },
      },
    },
  },
  {
    number: 3,
    name: { fr: "L'Impératrice", en: 'The Empress' },
    content: {
      keywords: {
        upright: { fr: ['abondance', 'créativité', 'douceur', 'fertilité'], en: ['abundance', 'creativity', 'nurturing', 'fertility'] },
        reversed: { fr: ['blocage créatif', 'dépendance', 'négligence de soi', 'étouffement'], en: ['creative block', 'dependence', 'self-neglect', 'smothering'] },
      },
      meaning: {
        upright: { fr: "Une énergie généreuse vous entoure : vos projets, vos liens et votre créativité peuvent s'épanouir. Prenez soin de ce que vous faites grandir, avec plaisir et sans forcer.", en: "A generous energy surrounds you: your projects, bonds and creativity are ready to flourish. Nurture what you're growing, with pleasure and without forcing it." },
        reversed: { fr: "Vous donnez tant à l'extérieur qu'il ne reste rien pour vous, ou la création reste coincée. Ramenez de la douceur vers vous-même avant de nourrir le reste.", en: "You're pouring so much outward that nothing's left for you, or your creativity feels stuck. Turn some of that care back toward yourself before feeding everything else." },
      },
    },
  },
  {
    number: 4,
    name: { fr: "L'Empereur", en: 'The Emperor' },
    content: {
      keywords: {
        upright: { fr: ['structure', 'autorité', 'stabilité', 'cadre'], en: ['structure', 'authority', 'stability', 'boundaries'] },
        reversed: { fr: ['rigidité', 'contrôle excessif', 'autoritarisme', 'perte de repères'], en: ['rigidity', 'over-control', 'domination', 'lost footing'] },
      },
      meaning: {
        upright: { fr: "C'est le moment de poser un cadre solide : des règles claires, un plan, des limites saines. La stabilité que vous construisez maintenant soutiendra tout le reste.", en: "It's time to set a solid framework: clear rules, a plan, healthy limits. The stability you build now will support everything else." },
        reversed: { fr: "Le besoin de tout contrôler devient une cage — pour vous ou pour les autres. Assouplissez votre prise : l'autorité juste écoute autant qu'elle décide.", en: "The need to control everything has become a cage — for you or those around you. Loosen your grip: real authority listens as much as it decides." },
      },
    },
  },
  {
    number: 5,
    name: { fr: 'Le Hiérophante', en: 'The Hierophant' },
    content: {
      keywords: {
        upright: { fr: ['tradition', 'transmission', 'valeurs', 'appartenance'], en: ['tradition', 'guidance', 'values', 'belonging'] },
        reversed: { fr: ['dogmatisme', 'rébellion', 'conformisme', 'voie personnelle'], en: ['dogma', 'rebellion', 'conformity', 'own path'] },
      },
      meaning: {
        upright: { fr: "Un cadre éprouvé, un mentor ou une tradition peuvent vous guider. S'appuyer sur ce qui a fait ses preuves, ou sur ceux qui savent, vous fera gagner en assise.", en: "A proven framework, a mentor or a tradition can guide you. Leaning on what has stood the test of time, or on those who know, will steady you." },
        reversed: { fr: "Les règles héritées ne vous vont plus. Il est temps de questionner ce qu'on vous a transmis et de tracer votre propre voie, sans rejeter par pur esprit de contradiction.", en: "The inherited rules no longer fit. It's time to question what you were handed and forge your own path — without rejecting things purely out of defiance." },
      },
    },
  },
  {
    number: 6,
    name: { fr: 'Les Amoureux', en: 'The Lovers' },
    content: {
      keywords: {
        upright: { fr: ['lien', 'choix du cœur', 'harmonie', 'valeurs partagées'], en: ['connection', 'heartfelt choice', 'harmony', 'shared values'] },
        reversed: { fr: ['désaccord', 'tentation', 'déséquilibre', 'choix évité'], en: ['discord', 'temptation', 'imbalance', 'avoided choice'] },
      },
      meaning: {
        upright: { fr: "Un lien fort ou un choix important se présente, et il engage le cœur autant que les valeurs. Choisissez ce qui vous ressemble vraiment, en accord avec ce qui compte pour vous.", en: "A strong bond or an important choice appears, and it involves the heart as much as your values. Choose what truly reflects you, in tune with what matters most." },
        reversed: { fr: "Un déséquilibre s'est installé dans une relation, ou un choix vous met face à vos contradictions. Clarifiez ce que vous voulez vraiment avant que la tension ne décide à votre place.", en: "An imbalance has crept into a relationship, or a choice is forcing your contradictions into the open. Get clear on what you truly want before the tension decides for you." },
      },
    },
  },
  {
    number: 7,
    name: { fr: 'Le Chariot', en: 'The Chariot' },
    content: {
      keywords: {
        upright: { fr: ['détermination', 'victoire', 'maîtrise', 'avancée'], en: ['determination', 'victory', 'self-mastery', 'momentum'] },
        reversed: { fr: ['dispersion', 'perte de contrôle', 'obstacle', 'doute'], en: ['scattered energy', 'loss of control', 'obstacle', 'doubt'] },
      },
      meaning: {
        upright: { fr: "En tenant fermement votre cap et en canalisant vos forces contraires, vous avancez vers la victoire. La volonté et la discipline font ici toute la différence.", en: "By holding your course firmly and channelling opposing forces, you drive toward success. Willpower and discipline make all the difference here." },
        reversed: { fr: "Vous tirez dans plusieurs directions à la fois et l'élan se perd. Reprenez les rênes : choisissez une direction claire avant de repartir.", en: "You're pulling in several directions at once and the momentum is slipping. Take the reins back: pick one clear direction before pushing on." },
      },
    },
  },
  {
    number: 8,
    name: { fr: 'La Force', en: 'Strength' },
    content: {
      keywords: {
        upright: { fr: ['courage tranquille', 'douceur', 'maîtrise de soi', 'patience'], en: ['quiet courage', 'gentleness', 'self-control', 'patience'] },
        reversed: { fr: ['doute', 'impulsivité', 'découragement', 'dureté'], en: ['self-doubt', 'impulsiveness', 'discouragement', 'harshness'] },
      },
      meaning: {
        upright: { fr: "La vraie force n'est pas dans la contrainte mais dans la douceur maîtrisée. Avec patience et bienveillance, vous apprivoisez ce qui vous effraie plutôt que de le combattre.", en: "Real strength isn't force but composed gentleness. With patience and warmth, you tame what frightens you rather than fighting it head-on." },
        reversed: { fr: "Vous doutez de vos forces, ou vous vous menez à la dure. Adoucissez le dialogue intérieur : c'est la compassion envers vous-même qui vous rendra solide.", en: "You doubt your own strength, or you're being hard on yourself. Soften the inner dialogue — it's self-compassion that will make you steady." },
      },
    },
  },
  {
    number: 9,
    name: { fr: "L'Ermite", en: 'The Hermit' },
    content: {
      keywords: {
        upright: { fr: ['introspection', 'recul', 'sagesse', 'quête de sens'], en: ['introspection', 'stepping back', 'wisdom', 'search for meaning'] },
        reversed: { fr: ['isolement', 'solitude subie', 'fuite', 'repli excessif'], en: ['isolation', 'loneliness', 'avoidance', 'over-withdrawal'] },
      },
      meaning: {
        upright: { fr: "Prendre du recul et vous retrouver seul avec vos pensées éclaire votre chemin. Le calme et la réflexion valent ici bien plus que l'agitation.", en: "Stepping back and spending time alone with your thoughts lights the way. Stillness and reflection are worth far more here than busyness." },
        reversed: { fr: "Le retrait est devenu un enfermement : à trop vous isoler, vous vous coupez de ce qui pourrait vous aider. Il est temps de rouvrir la porte, doucement.", en: "Solitude has turned into isolation: withdrawing too far cuts you off from what could help. It's time to open the door again, gently." },
      },
    },
  },
  {
    number: 10,
    name: { fr: 'La Roue de la Fortune', en: 'Wheel of Fortune' },
    content: {
      keywords: {
        upright: { fr: ['tournant', 'cycle', 'chance', 'changement'], en: ['turning point', 'cycles', 'luck', 'change'] },
        reversed: { fr: ['revers', 'résistance au changement', 'mauvais timing', 'stagnation'], en: ['setback', 'resisting change', 'bad timing', 'stagnation'] },
      },
      meaning: {
        upright: { fr: "Les choses tournent et un nouveau cycle s'ouvre. Ce qui semblait figé se remet en mouvement : accueillez le changement plutôt que de lui résister.", en: "Things are turning and a new cycle opens. What felt stuck is moving again: welcome the change rather than bracing against it." },
        reversed: { fr: "Un contretemps ou une roue qui semble tourner à l'envers vous freine. Rien n'est figé pour autant — lâchez ce que vous ne pouvez pas contrôler et attendez le prochain tour.", en: "A setback, or a wheel that seems to turn against you, is slowing things down. Nothing is fixed, though — release what you can't control and wait for the next turn." },
      },
    },
  },
  {
    number: 11,
    name: { fr: 'La Justice', en: 'Justice' },
    content: {
      keywords: {
        upright: { fr: ['équité', 'vérité', 'responsabilité', 'décision juste'], en: ['fairness', 'truth', 'accountability', 'sound decision'] },
        reversed: { fr: ['injustice', 'déni', 'malhonnêteté', 'déséquilibre'], en: ['injustice', 'denial', 'dishonesty', 'imbalance'] },
      },
      meaning: {
        upright: { fr: "L'heure est à la clarté et à l'équité : chaque acte a ses conséquences. Assumez vos choix, dites la vérité et tranchez avec justesse.", en: "This is a time for clarity and fairness: every action has its consequence. Own your choices, tell the truth, and decide with balance." },
        reversed: { fr: "Quelque chose sonne faux — un déséquilibre, un déni, une responsabilité esquivée. Regardez les faits en face et rétablissez l'honnêteté, d'abord envers vous-même.", en: "Something rings false — an imbalance, a denial, a responsibility dodged. Face the facts and restore honesty, starting with yourself." },
      },
    },
  },
  {
    number: 12,
    name: { fr: 'Le Pendu', en: 'The Hanged Man' },
    content: {
      keywords: {
        upright: { fr: ['lâcher-prise', 'nouveau regard', 'pause', 'acceptation'], en: ['surrender', 'new perspective', 'pause', 'acceptance'] },
        reversed: { fr: ['blocage', 'résistance', 'sacrifice inutile', 'attente stérile'], en: ['stalling', 'resistance', 'pointless sacrifice', 'stuck waiting'] },
      },
      meaning: {
        upright: { fr: "En acceptant de suspendre l'action et de changer de point de vue, vous voyez la situation autrement. Ce temps d'arrêt n'est pas une perte : c'est là que se dénoue le nœud.", en: "By agreeing to pause and shift your point of view, you see the situation differently. This standstill isn't wasted time — it's where the knot loosens." },
        reversed: { fr: "Vous vous accrochez à une position qui vous immobilise, ou vous vous sacrifiez sans que cela serve à rien. Lâchez la prise qui vous retient la tête en bas.", en: "You're clinging to a stance that keeps you frozen, or sacrificing yourself for nothing. Let go of the grip that's holding you upside down." },
      },
    },
  },
  {
    number: 13,
    name: { fr: 'La Mort', en: 'Death' },
    content: {
      keywords: {
        upright: { fr: ['fin nécessaire', 'transformation', 'renouveau', 'transition'], en: ['necessary ending', 'transformation', 'renewal', 'transition'] },
        reversed: { fr: ['résistance à la fin', 'stagnation', 'peur du changement', 'transition qui traîne'], en: ['resisting the ending', 'stagnation', 'fear of change', 'stalled transition'] },
      },
      meaning: {
        upright: { fr: "Quelque chose se termine pour laisser place au neuf. Cette fin, même inconfortable, est un passage : en la laissant advenir, vous ouvrez la voie à une transformation profonde.", en: "Something is ending to make room for the new. This ending, uncomfortable as it may be, is a passage: by letting it happen, you clear the way for real transformation." },
        reversed: { fr: "Vous vous accrochez à ce qui devrait se terminer, et la transition s'éternise. Le changement finira par passer — mieux vaut l'accompagner que le retenir.", en: "You're holding on to what should be ending, and the transition drags on. Change will pass through anyway — better to move with it than to hold it back." },
      },
    },
  },
  {
    number: 14,
    name: { fr: 'La Tempérance', en: 'Temperance' },
    content: {
      keywords: {
        upright: { fr: ['équilibre', 'modération', 'patience', 'juste dosage'], en: ['balance', 'moderation', 'patience', 'right measure'] },
        reversed: { fr: ['excès', 'impatience', 'déséquilibre', 'précipitation'], en: ['excess', 'impatience', 'imbalance', 'rushing'] },
      },
      meaning: {
        upright: { fr: "En mélangeant les bons ingrédients dans les bonnes proportions, vous trouvez un équilibre apaisant. La patience et la mesure vous mènent plus loin que la force.", en: "By blending the right ingredients in the right proportions, you find a calming balance. Patience and measure carry you further than force." },
        reversed: { fr: "Le dosage est faussé : trop, trop vite, ou tout et son contraire. Ralentissez et rééquilibrez avant que l'excès ne vous coûte cher.", en: "The balance is off: too much, too fast, or pulling in opposite directions. Slow down and recalibrate before the excess costs you." },
      },
    },
  },
  {
    number: 15,
    name: { fr: 'Le Diable', en: 'The Devil' },
    content: {
      keywords: {
        upright: { fr: ['dépendance', 'attachement', 'tentation', 'emprise'], en: ['dependency', 'attachment', 'temptation', 'entrapment'] },
        reversed: { fr: ['libération', 'prise de conscience', 'rupture d\'un lien toxique', 'reprise de pouvoir'], en: ['release', 'awareness', 'breaking free', 'reclaiming power'] },
      },
      meaning: {
        upright: { fr: "Un attachement, une habitude ou une relation vous tient plus que vous ne l'admettez. Les chaînes sont souvent plus lâches qu'elles n'en ont l'air : nommez ce qui vous retient.", en: "An attachment, a habit or a relationship holds you more than you'd admit. The chains are often looser than they look: name what's keeping you bound." },
        reversed: { fr: "Vous prenez conscience de ce qui vous enchaînait et commencez à vous en défaire. C'est le moment de reprendre votre pouvoir et de couper le lien qui vous épuise.", en: "You're waking up to what had you chained and starting to break loose. This is the moment to reclaim your power and cut the tie that drains you." },
      },
    },
  },
  {
    number: 16,
    name: { fr: 'La Tour', en: 'The Tower' },
    content: {
      keywords: {
        upright: { fr: ['bouleversement', 'révélation', 'effondrement', 'vérité brutale'], en: ['upheaval', 'revelation', 'collapse', 'sudden truth'] },
        reversed: { fr: ['crise évitée', 'peur du changement', 'effondrement retardé', 'reconstruction'], en: ['averted crisis', 'fear of change', 'delayed collapse', 'rebuilding'] },
      },
      meaning: {
        upright: { fr: "Un événement soudain fait tomber ce qui reposait sur de mauvaises bases. C'est brutal, mais ce qui s'effondre devait l'être : la vérité ouvre la voie à du plus solide.", en: "A sudden event topples what was built on shaky ground. It's jarring, but what collapses needed to — the truth clears space for something sturdier." },
        reversed: { fr: "Vous sentez la secousse venir et tentez de retenir ce qui craque. Retarder l'inévitable ne fait que prolonger la tension : mieux vaut désamorcer avant l'explosion.", en: "You feel the tremor coming and try to hold up what's cracking. Delaying the inevitable only prolongs the strain — better to defuse it before it blows." },
      },
    },
  },
  {
    number: 17,
    name: { fr: "L'Étoile", en: 'The Star' },
    content: {
      keywords: {
        upright: { fr: ['espoir', 'apaisement', 'inspiration', 'foi retrouvée'], en: ['hope', 'healing', 'inspiration', 'renewed faith'] },
        reversed: { fr: ['découragement', 'doute', 'perte de foi', 'épuisement'], en: ['discouragement', 'doubt', 'lost faith', 'burnout'] },
      },
      meaning: {
        upright: { fr: "Après la tempête vient une lumière douce : l'espoir revient et les blessures s'apaisent. Laissez-vous guider par ce qui vous inspire et vous fait du bien.", en: "After the storm comes a soft light: hope returns and wounds begin to heal. Let yourself be guided by what inspires you and does you good." },
        reversed: { fr: "La foi vacille et le découragement s'installe. La lumière n'a pas disparu, elle est seulement voilée : reposez-vous et laissez l'espoir revenir à son rythme.", en: "Faith is wavering and discouragement settles in. The light hasn't gone, only dimmed: rest, and let hope return at its own pace." },
      },
    },
  },
  {
    number: 18,
    name: { fr: 'La Lune', en: 'The Moon' },
    content: {
      keywords: {
        upright: { fr: ['incertitude', 'illusions', 'peurs', 'intuition'], en: ['uncertainty', 'illusion', 'fears', 'intuition'] },
        reversed: { fr: ['clarté retrouvée', 'vérité qui émerge', 'peurs dissipées', 'confusion levée'], en: ['returning clarity', 'truth emerging', 'fears fading', 'confusion lifting'] },
      },
      meaning: {
        upright: { fr: "Tout n'est pas clair, et vos peurs risquent de déformer ce que vous voyez. Avancez prudemment, fiez-vous à votre intuition et ne prenez pas vos angoisses pour la réalité.", en: "Not everything is clear, and your fears may be distorting what you see. Move carefully, trust your intuition, and don't mistake your anxieties for reality." },
        reversed: { fr: "Le brouillard se dissipe : ce qui vous troublait s'éclaire enfin et les illusions tombent. Vous retrouvez pied et voyez la situation telle qu'elle est.", en: "The fog is lifting: what troubled you finally becomes clear and the illusions fall away. You find your footing and see the situation as it truly is." },
      },
    },
  },
  {
    number: 19,
    name: { fr: 'Le Soleil', en: 'The Sun' },
    content: {
      keywords: {
        upright: { fr: ['joie', 'réussite', 'vitalité', 'clarté'], en: ['joy', 'success', 'vitality', 'clarity'] },
        reversed: { fr: ['joie voilée', 'optimisme forcé', 'retard', 'doute passager'], en: ['dimmed joy', 'forced optimism', 'delay', 'passing doubt'] },
      },
      meaning: {
        upright: { fr: "La lumière est de votre côté : joie, réussite et énergie sont au rendez-vous. Savourez ce moment de clarté et partagez-le sans retenue.", en: "The light is on your side: joy, success and energy are here. Savour this moment of clarity and share it freely." },
        reversed: { fr: "Le soleil brille encore, mais un nuage passager le voile — une joie forcée, un petit retard, un doute. Rien de grave : la lumière ne demande qu'à revenir.", en: "The sun still shines, but a passing cloud dims it — forced cheer, a small delay, a doubt. Nothing serious: the light is only waiting to return." },
      },
    },
  },
  {
    number: 20,
    name: { fr: 'Le Jugement', en: 'Judgement' },
    content: {
      keywords: {
        upright: { fr: ['renaissance', 'bilan', 'appel intérieur', 'pardon'], en: ['rebirth', 'reckoning', 'inner calling', 'forgiveness'] },
        reversed: { fr: ['autocritique', 'appel ignoré', 'regret', 'jugement sévère'], en: ['self-criticism', 'ignored calling', 'regret', 'harsh judgement'] },
      },
      meaning: {
        upright: { fr: "Un appel intérieur vous invite à faire le bilan et à repartir sur de nouvelles bases. Pardonnez-vous le passé et répondez à ce qui vous appelle vraiment.", en: "An inner call invites you to take stock and begin again on new footing. Forgive yourself for the past and answer what's genuinely calling you." },
        reversed: { fr: "Vous vous jugez durement ou vous restez sourd à un appel que vous entendez pourtant. Allégez la sévérité envers vous-même : le passé n'a pas à dicter la suite.", en: "You're judging yourself harshly, or staying deaf to a call you can clearly hear. Ease up on the self-severity — the past doesn't get to dictate what comes next." },
      },
    },
  },
  {
    number: 21,
    name: { fr: 'Le Monde', en: 'The World' },
    content: {
      keywords: {
        upright: { fr: ['accomplissement', 'plénitude', 'aboutissement', 'intégration'], en: ['completion', 'fulfilment', 'achievement', 'wholeness'] },
        reversed: { fr: ['inachèvement', 'objectif proche', 'boucle non bouclée', 'sentiment de vide'], en: ['incompletion', 'almost there', 'unfinished cycle', 'sense of emptiness'] },
      },
      meaning: {
        upright: { fr: "Un cycle s'achève avec un vrai sentiment de plénitude : vous avez bouclé la boucle. Célébrez le chemin parcouru avant d'ouvrir la page suivante.", en: "A cycle completes with a real sense of wholeness: you've come full circle. Celebrate how far you've come before turning to the next chapter." },
        reversed: { fr: "Vous touchez presque au but, mais quelque chose reste inachevé. Identifiez le dernier pas manquant plutôt que de tout arrêter si près de l'arrivée.", en: "You're almost there, but something remains unfinished. Spot the last missing step rather than stopping so close to the finish line." },
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
      content: null, // contenu rédigé ultérieurement
    };
  }),
);

export const cards: Card[] = [...majorCards, ...minorCards];

export { SUIT_NAMES };
