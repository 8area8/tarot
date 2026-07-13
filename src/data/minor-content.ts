import type { CardContent } from '../lib/types';

/**
 * Contenu rédigé des 56 arcanes mineurs (ton contemporain, FR+EN).
 * Clé = id de la carte (ex. "wands-01"). Fusionné dans cards.ts.
 */
export const MINOR_CONTENT: Record<string, CardContent> = {
  // ─────────────── BÂTONS / WANDS (feu : énergie, action, passion) ───────────────
  'wands-01': {
    keywords: {
      upright: { fr: ['inspiration', 'nouvelle énergie', 'élan', 'potentiel'], en: ['inspiration', 'new energy', 'spark', 'potential'] },
      reversed: { fr: ['blocage', 'manque de direction', 'hésitation', 'faux départ'], en: ['blockage', 'lack of direction', 'hesitation', 'false start'] },
    },
    meaning: {
      upright: { fr: "Une étincelle créative surgit : envie, idée, projet à faire naître. Saisissez cet élan tant qu'il est vif.", en: "A creative spark ignites: a desire, an idea, a project waiting to be born. Grab the momentum while it's hot." },
      reversed: { fr: "L'énergie est là mais tourne à vide, faute de cap clair. Précisez ce que vous voulez vraiment avant de foncer.", en: "The energy is there but spinning in place for lack of a clear aim. Get specific about what you want before charging ahead." },
    },
  },
  'wands-02': {
    keywords: {
      upright: { fr: ['planification', 'décision', 'vision', 'premiers pas'], en: ['planning', 'decision', 'vision', 'first steps'] },
      reversed: { fr: ['peur de l\'inconnu', 'zone de confort', 'plan flou', 'immobilisme'], en: ['fear of the unknown', 'comfort zone', 'vague plan', 'standing still'] },
    },
    meaning: {
      upright: { fr: "Vous regardez au loin et posez les bases d'un projet. Un choix de direction s'ouvre : osez viser plus grand.", en: "You're looking ahead and laying the groundwork for a plan. A choice of direction opens up: dare to aim bigger." },
      reversed: { fr: "La peur de quitter le connu vous fige, ou le plan reste trop vague. Tranchez et faites le premier pas.", en: "Fear of leaving the familiar freezes you, or the plan stays too vague. Decide, and take the first step." },
    },
  },
  'wands-03': {
    keywords: {
      upright: { fr: ['expansion', 'progrès', 'anticipation', 'opportunités'], en: ['expansion', 'progress', 'foresight', 'opportunities'] },
      reversed: { fr: ['retards', 'obstacles', 'frustration', 'court-termisme'], en: ['delays', 'obstacles', 'frustration', 'short-sightedness'] },
    },
    meaning: {
      upright: { fr: "Vos efforts commencent à porter et l'horizon s'élargit. Restez ouvert aux opportunités qui arrivent de loin.", en: "Your efforts are starting to pay off and the horizon widens. Stay open to opportunities coming from afar." },
      reversed: { fr: "Des contretemps ralentissent l'élan et la patience s'use. Regardez plus loin que la contrariété du moment.", en: "Setbacks are slowing the momentum and patience wears thin. Look beyond the immediate annoyance." },
    },
  },
  'wands-04': {
    keywords: {
      upright: { fr: ['célébration', 'harmonie', 'étape franchie', 'foyer'], en: ['celebration', 'harmony', 'milestone', 'home'] },
      reversed: { fr: ['transition', 'harmonie fragile', 'manque de soutien', 'instabilité'], en: ['transition', 'fragile harmony', 'lack of support', 'instability'] },
    },
    meaning: {
      upright: { fr: "Un palier heureux est atteint : c'est le moment de fêter et de savourer avec vos proches. Le terrain est stable sous vos pieds.", en: "A happy milestone is reached: time to celebrate and savour it with those close to you. The ground feels solid underfoot." },
      reversed: { fr: "La stabilité est encore fragile ou une transition brouille les repères. Ancrez-vous à ce qui vous soutient vraiment.", en: "Stability is still fragile, or a transition blurs your bearings. Anchor into what truly supports you." },
    },
  },
  'wands-05': {
    keywords: {
      upright: { fr: ['tensions', 'rivalité', 'désaccords', 'confrontation'], en: ['tension', 'rivalry', 'disagreement', 'competition'] },
      reversed: { fr: ['apaisement', 'compromis', 'fin du conflit', 'évitement'], en: ['de-escalation', 'compromise', 'end of conflict', 'avoidance'] },
    },
    meaning: {
      upright: { fr: "Les egos s'entrechoquent et rien n'avance dans la cohue. Canalisez cette énergie plutôt que de la disperser en querelles.", en: "Egos clash and nothing moves forward in the scramble. Channel this energy rather than scattering it in squabbles." },
      reversed: { fr: "Les tensions retombent et un terrain d'entente se dessine. Ou vous fuyez un désaccord qui gagnerait à être posé.", en: "Tensions ease and common ground appears. Or you're dodging a disagreement that would be better faced." },
    },
  },
  'wands-06': {
    keywords: {
      upright: { fr: ['victoire', 'reconnaissance', 'confiance', 'succès'], en: ['victory', 'recognition', 'confidence', 'success'] },
      reversed: { fr: ['manque de reconnaissance', 'doute', 'succès retardé', 'orgueil'], en: ['lack of recognition', 'self-doubt', 'delayed success', 'pride'] },
    },
    meaning: {
      upright: { fr: "Vos efforts sont reconnus et vous avancez en tête, porté par la confiance. Assumez ce succès sans fausse modestie.", en: "Your efforts are recognised and you lead the way, buoyed by confidence. Own this success without false modesty." },
      reversed: { fr: "La reconnaissance tarde ou le doute grignote votre assurance. Votre valeur ne dépend pas des applaudissements.", en: "Recognition is slow to come, or doubt nibbles at your confidence. Your worth doesn't hinge on applause." },
    },
  },
  'wands-07': {
    keywords: {
      upright: { fr: ['défense', 'persévérance', 'tenir bon', 'conviction'], en: ['defensiveness', 'perseverance', 'standing firm', 'conviction'] },
      reversed: { fr: ['épuisement', 'abandon', 'submergé', 'concession'], en: ['exhaustion', 'giving up', 'overwhelmed', 'backing down'] },
    },
    meaning: {
      upright: { fr: "Vous devez défendre votre position face à la pression. Tenez bon : votre conviction vaut la peine d'être défendue.", en: "You have to defend your ground under pressure. Hold firm: your conviction is worth standing up for." },
      reversed: { fr: "La lutte vous épuise et vous songez à tout lâcher. Distinguez les combats qui en valent la peine de ceux à laisser filer.", en: "The fight is draining you and you're tempted to give up. Tell apart the battles worth fighting from those to let go." },
    },
  },
  'wands-08': {
    keywords: {
      upright: { fr: ['rapidité', 'mouvement', 'nouvelles', 'action'], en: ['speed', 'movement', 'news', 'action'] },
      reversed: { fr: ['retards', 'précipitation', 'ralentissement', 'frustration'], en: ['delays', 'haste', 'slowing down', 'frustration'] },
    },
    meaning: {
      upright: { fr: "Les choses s'accélèrent : nouvelles, messages, événements s'enchaînent. Suivez le rythme, l'élan est de votre côté.", en: "Things speed up: news, messages and events come in quick succession. Keep pace — the momentum is on your side." },
      reversed: { fr: "Ça piétine, ou au contraire tout va trop vite et vous précipite. Reprenez la main sur le tempo.", en: "It stalls, or everything moves too fast and rushes you. Take back control of the tempo." },
    },
  },
  'wands-09': {
    keywords: {
      upright: { fr: ['résilience', 'ténacité', 'dernière ligne', 'vigilance'], en: ['resilience', 'persistence', 'last stand', 'vigilance'] },
      reversed: { fr: ['épuisement', 'méfiance excessive', 'sur la défensive', 'entêtement'], en: ['burnout', 'excessive wariness', 'defensiveness', 'stubbornness'] },
    },
    meaning: {
      upright: { fr: "Vous êtes fatigué mais toujours debout : le but est proche, tenez encore un peu. Votre endurance est votre force.", en: "You're weary but still standing: the goal is close, hold on a little longer. Your endurance is your strength." },
      reversed: { fr: "À force de vous protéger, vous vous épuisez et vous méfiez de tout. Baissez un peu la garde, tout n'est pas une menace.", en: "From constant self-protection, you're exhausted and wary of everything. Lower your guard a little — not everything is a threat." },
    },
  },
  'wands-10': {
    keywords: {
      upright: { fr: ['fardeau', 'responsabilités', 'surcharge', 'devoir'], en: ['burden', 'responsibility', 'overload', 'duty'] },
      reversed: { fr: ['lâcher du lest', 'déléguer', 'libération', 'refus de charge'], en: ['offloading', 'delegating', 'release', 'refusing the load'] },
    },
    meaning: {
      upright: { fr: "Vous portez trop, souvent seul, et le poids devient écrasant. Ce que vous avez bâti est réel, mais pas au prix de vous briser.", en: "You're carrying too much, often alone, and the weight becomes crushing. What you've built is real — but not worth breaking yourself over." },
      reversed: { fr: "Il est temps de poser une partie du fardeau : déléguez, dites non, allégez. Vous n'avez pas à tout porter.", en: "It's time to set down part of the load: delegate, say no, lighten up. You don't have to carry it all." },
    },
  },
  'wands-11': {
    keywords: {
      upright: { fr: ['curiosité', 'enthousiasme', 'idées neuves', 'esprit libre'], en: ['curiosity', 'enthusiasm', 'fresh ideas', 'free spirit'] },
      reversed: { fr: ['dispersion', 'procrastination', 'projet sans suite', 'immaturité'], en: ['scattered focus', 'procrastination', 'unfinished ideas', 'immaturity'] },
    },
    meaning: {
      upright: { fr: "Une curiosité pétillante vous pousse à explorer et à tenter. Laissez cet enthousiasme neuf ouvrir des portes.", en: "A fizzing curiosity pushes you to explore and try things. Let this fresh enthusiasm open doors." },
      reversed: { fr: "Les idées fusent mais peu aboutissent, faute de suite. Choisissez-en une et menez-la au bout.", en: "Ideas fly but few land, for lack of follow-through. Pick one and see it through." },
    },
  },
  'wands-12': {
    keywords: {
      upright: { fr: ['action', 'aventure', 'audace', 'passion'], en: ['action', 'adventure', 'boldness', 'passion'] },
      reversed: { fr: ['imprudence', 'précipitation', 'impatience', 'énergie mal placée'], en: ['recklessness', 'haste', 'impatience', 'misdirected energy'] },
    },
    meaning: {
      upright: { fr: "Vous foncez avec fougue vers ce qui vous passionne. Cette audace fait avancer, tant qu'elle garde un cap.", en: "You charge boldly toward what fires you up. That daring moves things forward — as long as it keeps a direction." },
      reversed: { fr: "L'empressement vire à l'imprudence : vous partez sans regarder devant. Canalisez la fougue avant qu'elle ne coûte cher.", en: "Eagerness tips into recklessness: you set off without looking ahead. Channel the drive before it costs you." },
    },
  },
  'wands-13': {
    keywords: {
      upright: { fr: ['assurance', 'chaleur', 'détermination', 'charisme'], en: ['confidence', 'warmth', 'determination', 'charisma'] },
      reversed: { fr: ['insécurité', 'jalousie', 'exigence', 'susceptibilité'], en: ['insecurity', 'jealousy', 'demanding', 'touchiness'] },
    },
    meaning: {
      upright: { fr: "Vous rayonnez d'une assurance chaleureuse qui entraîne les autres. Avancez avec cette détermination joyeuse.", en: "You radiate a warm confidence that draws others in. Move forward with this joyful determination." },
      reversed: { fr: "Le doute intérieur se cache derrière l'exigence ou la jalousie. Reconnectez-vous à votre valeur, sans la mesurer aux autres.", en: "Inner doubt hides behind demandingness or jealousy. Reconnect with your worth without measuring it against others." },
    },
  },
  'wands-14': {
    keywords: {
      upright: { fr: ['vision', 'leadership', 'audace', 'entreprendre'], en: ['vision', 'leadership', 'boldness', 'enterprise'] },
      reversed: { fr: ['autoritarisme', 'impulsivité', 'précipitation', 'intolérance'], en: ['domineering', 'impulsiveness', 'haste', 'intolerance'] },
    },
    meaning: {
      upright: { fr: "Vous avez la vision et le souffle pour entraîner un projet et les gens autour. Menez avec audace et générosité.", en: "You have the vision and the drive to lead a project and the people around it. Lead with boldness and generosity." },
      reversed: { fr: "Le meneur vire au tyran impatient qui n'écoute plus. Ralentissez et laissez de la place aux autres.", en: "The leader slides into an impatient tyrant who's stopped listening. Slow down and make room for others." },
    },
  },

  // ─────────────── COUPES / CUPS (eau : émotions, liens, intuition) ───────────────
  'cups-01': {
    keywords: {
      upright: { fr: ['nouvel amour', 'ouverture du cœur', 'compassion', 'émotion neuve'], en: ['new love', 'open heart', 'compassion', 'new feeling'] },
      reversed: { fr: ['émotions bloquées', 'cœur fermé', 'vide', 'amour refoulé'], en: ['blocked emotions', 'closed heart', 'emptiness', 'repressed love'] },
    },
    meaning: {
      upright: { fr: "Le cœur s'ouvre : un amour, une tendresse, une émotion neuve afflue. Laissez-vous toucher sans vous protéger.", en: "The heart opens: love, tenderness or a new feeling flows in. Let yourself be moved without shielding up." },
      reversed: { fr: "Vous retenez vos émotions ou fermez la porte du cœur. Ce trop-plein contenu demande à être laissé couler.", en: "You're holding your emotions back or closing the heart's door. That contained overflow needs to be let out." },
    },
  },
  'cups-02': {
    keywords: {
      upright: { fr: ['lien', 'attirance mutuelle', 'partenariat', 'harmonie'], en: ['connection', 'mutual attraction', 'partnership', 'harmony'] },
      reversed: { fr: ['rupture', 'déséquilibre', 'tension', 'malentendu'], en: ['breakup', 'imbalance', 'tension', 'misunderstanding'] },
    },
    meaning: {
      upright: { fr: "Une belle réciprocité se noue entre vous et l'autre. Ce lien fondé sur le respect mutuel peut s'épanouir.", en: "A lovely reciprocity forms between you and another. This bond, built on mutual respect, is ready to flourish." },
      reversed: { fr: "L'équilibre d'une relation s'est rompu, ou un malentendu s'installe. Rétablissez le dialogue avant que la distance ne grandisse.", en: "The balance of a relationship has broken, or a misunderstanding sets in. Reopen the dialogue before the distance grows." },
    },
  },
  'cups-03': {
    keywords: {
      upright: { fr: ['amitié', 'célébration', 'communauté', 'joie partagée'], en: ['friendship', 'celebration', 'community', 'shared joy'] },
      reversed: { fr: ['excès', 'commérages', 'isolement', 'lassitude'], en: ['overindulgence', 'gossip', 'isolation', 'weariness'] },
    },
    meaning: {
      upright: { fr: "Entouré des vôtres, vous célébrez et la joie se partage. Nourrissez ces liens qui vous font du bien.", en: "Surrounded by your people, you celebrate and joy is shared. Nurture these bonds that lift you up." },
      reversed: { fr: "La fête tourne à l'excès, ou les liens se délitent dans les non-dits. Recentrez-vous sur les relations sincères.", en: "The party tips into excess, or bonds fray amid unspoken things. Refocus on the relationships that are genuine." },
    },
  },
  'cups-04': {
    keywords: {
      upright: { fr: ['lassitude', 'introspection', 'insatisfaction', 'ennui'], en: ['apathy', 'introspection', 'discontent', 'boredom'] },
      reversed: { fr: ['éveil', 'nouvelle envie', 'acceptation', 'ré-engagement'], en: ['awakening', 'new desire', 'acceptance', 're-engagement'] },
    },
    meaning: {
      upright: { fr: "Une morosité s'installe : ce qu'on vous offre ne vous fait plus envie. Demandez-vous ce qui vous nourrirait vraiment.", en: "A flatness sets in: what's on offer no longer appeals. Ask yourself what would truly nourish you." },
      reversed: { fr: "Vous sortez de la torpeur et une nouvelle envie pointe. Saisissez la main tendue que vous ignoriez.", en: "You're shaking off the torpor and a new desire appears. Take the outstretched hand you'd been ignoring." },
    },
  },
  'cups-05': {
    keywords: {
      upright: { fr: ['perte', 'chagrin', 'regret', 'deuil'], en: ['loss', 'grief', 'regret', 'mourning'] },
      reversed: { fr: ['acceptation', 'aller de l\'avant', 'pardon', 'ce qui reste'], en: ['acceptance', 'moving on', 'forgiveness', 'what remains'] },
    },
    meaning: {
      upright: { fr: "Une déception pèse et vous fixez ce qui s'est renversé. Le chagrin est légitime, mais tout n'est pas perdu derrière vous.", en: "A disappointment weighs on you and you stare at what's spilled. The grief is valid, but not everything behind you is lost." },
      reversed: { fr: "Vous relevez la tête et voyez enfin ce qui vous reste. Le deuil s'apaise, l'avenir se rouvre.", en: "You lift your head and finally see what remains. The mourning eases and the future opens again." },
    },
  },
  'cups-06': {
    keywords: {
      upright: { fr: ['nostalgie', 'souvenirs', 'douceur', 'retrouvailles'], en: ['nostalgia', 'memories', 'tenderness', 'reunion'] },
      reversed: { fr: ['passé encombrant', 'idéalisation', 'lâcher le passé', 'avancer'], en: ['clinging to the past', 'idealising', 'letting go', 'moving forward'] },
    },
    meaning: {
      upright: { fr: "Un parfum d'enfance ou de retrouvailles vous réchauffe le cœur. Puisez dans ces racines douces sans vous y enfermer.", en: "A whiff of childhood or reunion warms your heart. Draw on these gentle roots without getting stuck in them." },
      reversed: { fr: "Le passé idéalisé vous retient loin du présent. Gardez la tendresse, mais tournez-vous vers ce qui vient.", en: "An idealised past keeps you from the present. Keep the tenderness, but turn toward what's ahead." },
    },
  },
  'cups-07': {
    keywords: {
      upright: { fr: ['choix multiples', 'illusions', 'rêverie', 'imagination'], en: ['many choices', 'illusion', 'daydreaming', 'imagination'] },
      reversed: { fr: ['clarté', 'décision', 'priorités', 'retour au réel'], en: ['clarity', 'decision', 'priorities', 'back to reality'] },
    },
    meaning: {
      upright: { fr: "Les options se multiplient, séduisantes mais floues comme des mirages. Distinguez le rêve réel de la simple fantaisie.", en: "Options multiply, alluring but hazy like mirages. Tell the achievable dream from mere fantasy." },
      reversed: { fr: "Le brouillard se lève : vous voyez enfin ce qui compte vraiment. Choisissez et engagez-vous.", en: "The fog lifts: you finally see what truly matters. Choose, and commit." },
    },
  },
  'cups-08': {
    keywords: {
      upright: { fr: ['départ', 'quête de sens', 'désillusion', 'tourner la page'], en: ['walking away', 'search for meaning', 'disillusion', 'turning the page'] },
      reversed: { fr: ['peur de partir', 'rester coincé', 'aller-retour', 'indécision'], en: ['fear of leaving', 'staying stuck', 'back and forth', 'indecision'] },
    },
    meaning: {
      upright: { fr: "Vous quittez une situation qui a cessé de vous nourrir, en quête de plus juste. Ce départ demande du courage, mais il libère.", en: "You leave a situation that's stopped feeding you, in search of something truer. This departure takes courage, but it frees you." },
      reversed: { fr: "Vous savez qu'il faut partir mais restez, tiraillé. Écoutez ce qui vous dit que ce n'est plus votre place.", en: "You know you should leave but stay, torn. Listen to what tells you this is no longer your place." },
    },
  },
  'cups-09': {
    keywords: {
      upright: { fr: ['contentement', 'satisfaction', 'vœu exaucé', 'gratitude'], en: ['contentment', 'satisfaction', 'wish fulfilled', 'gratitude'] },
      reversed: { fr: ['insatisfaction', 'toujours plus', 'suffisance', 'plaisir vide'], en: ['dissatisfaction', 'always more', 'smugness', 'hollow pleasure'] },
    },
    meaning: {
      upright: { fr: "Un souhait se réalise et vous goûtez un vrai contentement. Savourez ce moment sans culpabilité.", en: "A wish comes true and you taste real contentment. Savour this moment without guilt." },
      reversed: { fr: "La satisfaction sonne creux : à courir après plus, vous manquez ce que vous avez. Cherchez ce qui comble en profondeur.", en: "The satisfaction rings hollow: chasing more, you miss what you have. Look for what fulfils you deeply." },
    },
  },
  'cups-10': {
    keywords: {
      upright: { fr: ['plénitude', 'harmonie', 'famille', 'bonheur partagé'], en: ['fulfilment', 'harmony', 'family', 'shared happiness'] },
      reversed: { fr: ['harmonie rompue', 'discorde', 'façade', 'désalignement'], en: ['broken harmony', 'discord', 'facade', 'misalignment'] },
    },
    meaning: {
      upright: { fr: "Une harmonie profonde règne dans vos liens les plus chers. C'est le bonheur simple d'être en accord avec les vôtres.", en: "A deep harmony fills your dearest bonds. It's the simple happiness of being in tune with your people." },
      reversed: { fr: "L'image du bonheur cache des tensions non réglées. Rapprochez la façade de ce que vous ressentez vraiment.", en: "The picture of happiness hides unresolved tensions. Bring the facade closer to what you actually feel." },
    },
  },
  'cups-11': {
    keywords: {
      upright: { fr: ['sensibilité', 'intuition', 'créativité', 'curiosité du cœur'], en: ['sensitivity', 'intuition', 'creativity', 'curiosity of the heart'] },
      reversed: { fr: ['immaturité émotionnelle', 'humeur changeante', 'créativité bloquée', 'susceptibilité'], en: ['emotional immaturity', 'moodiness', 'blocked creativity', 'touchiness'] },
    },
    meaning: {
      upright: { fr: "Une sensibilité neuve et curieuse vous inspire. Accueillez ces messages du cœur et de l'imaginaire.", en: "A fresh, curious sensitivity inspires you. Welcome these messages from the heart and the imagination." },
      reversed: { fr: "Les émotions débordent ou se braquent au moindre heurt. Apprivoisez cette sensibilité plutôt que de la subir.", en: "Emotions overflow or bristle at the slightest bump. Tame this sensitivity rather than being ruled by it." },
    },
  },
  'cups-12': {
    keywords: {
      upright: { fr: ['romantisme', 'charme', 'suivre son cœur', 'idéalisme'], en: ['romance', 'charm', 'following the heart', 'idealism'] },
      reversed: { fr: ['idéalisation', 'promesses en l\'air', 'humeur', 'déception'], en: ['idealising', 'empty promises', 'moodiness', 'disappointment'] },
    },
    meaning: {
      upright: { fr: "Une proposition venue du cœur se présente, romantique et sincère. Suivez cet élan tout en gardant les pieds sur terre.", en: "A heartfelt, romantic and sincere offer appears. Follow the impulse while keeping your feet on the ground." },
      reversed: { fr: "Les belles paroles ne suivent pas d'actes, et la déception guette. Vérifiez que les promesses tiennent la route.", en: "Fine words aren't matched by action, and disappointment looms. Check whether the promises hold up." },
    },
  },
  'cups-13': {
    keywords: {
      upright: { fr: ['compassion', 'empathie', 'écoute', 'sécurité affective'], en: ['compassion', 'empathy', 'listening', 'emotional security'] },
      reversed: { fr: ['trop-plein émotionnel', 'dépendance', 'oubli de soi', 'susceptibilité'], en: ['emotional overwhelm', 'dependence', 'self-neglect', 'over-sensitivity'] },
    },
    meaning: {
      upright: { fr: "Vous offrez une écoute chaleureuse et un vrai soutien émotionnel. Cette douceur apaise autour de vous.", en: "You offer warm listening and real emotional support. This gentleness soothes those around you." },
      reversed: { fr: "À trop absorber les émotions des autres, vous vous oubliez. Reposez vos propres limites avant de vous noyer.", en: "Absorbing everyone's emotions, you lose yourself. Restore your own limits before you drown." },
    },
  },
  'cups-14': {
    keywords: {
      upright: { fr: ['équilibre émotionnel', 'diplomatie', 'calme', 'bienveillance'], en: ['emotional balance', 'diplomacy', 'calm', 'kindness'] },
      reversed: { fr: ['instabilité', 'humeurs', 'froideur', 'manipulation'], en: ['volatility', 'moodiness', 'coldness', 'manipulation'] },
    },
    meaning: {
      upright: { fr: "Vous maîtrisez vos émotions sans les nier et gardez le cap avec calme. Cette maturité inspire confiance.", en: "You master your emotions without denying them and stay steady, calm. This maturity inspires trust." },
      reversed: { fr: "Les émotions tanguent sous une surface lisse, ou servent à influencer. Renouez avec une sincérité tranquille.", en: "Emotions lurch beneath a smooth surface, or get used to influence. Return to a quiet sincerity." },
    },
  },

  // ─────────────── ÉPÉES / SWORDS (air : pensée, vérité, conflit) ───────────────
  'swords-01': {
    keywords: {
      upright: { fr: ['clarté', 'idée neuve', 'vérité', 'percée'], en: ['clarity', 'new idea', 'truth', 'breakthrough'] },
      reversed: { fr: ['confusion', 'brouillard mental', 'désinformation', 'idée mal posée'], en: ['confusion', 'mental fog', 'misinformation', 'muddled idea'] },
    },
    meaning: {
      upright: { fr: "Une idée tranchante coupe le brouillard : vous voyez clair d'un coup. Saisissez cette lucidité pour trancher.", en: "A sharp idea cuts through the fog: suddenly you see clearly. Seize this lucidity to make the cut." },
      reversed: { fr: "Les pensées s'embrouillent et la vérité vous échappe. Prenez du recul avant de conclure à chaud.", en: "Thoughts tangle and the truth slips away. Step back before drawing hasty conclusions." },
    },
  },
  'swords-02': {
    keywords: {
      upright: { fr: ['choix difficile', 'impasse', 'indécision', 'évitement'], en: ['difficult choice', 'stalemate', 'indecision', 'avoidance'] },
      reversed: { fr: ['décision prise', 'clarté', 'vérité révélée', 'déblocage'], en: ['decision made', 'clarity', 'truth revealed', 'unblocking'] },
    },
    meaning: {
      upright: { fr: "Vous refusez de choisir, les yeux bandés face à une décision. Ôtez le bandeau : fuir le choix est déjà un choix.", en: "You refuse to choose, blindfolded before a decision. Take off the blindfold: avoiding the choice is already a choice." },
      reversed: { fr: "L'impasse se dénoue et vous tranchez enfin. Une information qui manquait éclaire la voie.", en: "The stalemate breaks and you finally decide. A missing piece of information lights the way." },
    },
  },
  'swords-03': {
    keywords: {
      upright: { fr: ['chagrin', 'vérité douloureuse', 'peine de cœur', 'rupture'], en: ['heartache', 'painful truth', 'heartbreak', 'rupture'] },
      reversed: { fr: ['guérison', 'pardon', 'libérer la douleur', 'reconstruction'], en: ['healing', 'forgiveness', 'releasing pain', 'rebuilding'] },
    },
    meaning: {
      upright: { fr: "Une vérité fait mal et le cœur se serre. La peine est réelle : laissez-la traverser plutôt que de la nier.", en: "A truth hurts and the heart tightens. The pain is real: let it pass through rather than deny it." },
      reversed: { fr: "La blessure commence à cicatriser et vous relâchez la douleur. Le pardon, même envers vous-même, ouvre la guérison.", en: "The wound begins to heal and you release the pain. Forgiveness, even toward yourself, opens the way to healing." },
    },
  },
  'swords-04': {
    keywords: {
      upright: { fr: ['repos', 'récupération', 'pause', 'réflexion'], en: ['rest', 'recovery', 'pause', 'reflection'] },
      reversed: { fr: ['agitation', 'épuisement', 'repos négligé', 'reprise'], en: ['restlessness', 'burnout', 'rest ignored', 'resuming'] },
    },
    meaning: {
      upright: { fr: "Il est temps de vous arrêter et de recharger vraiment. Ce repos n'est pas une pause perdue mais une nécessité.", en: "It's time to stop and truly recharge. This rest isn't wasted downtime but a necessity." },
      reversed: { fr: "Vous repoussez le repos alors que l'épuisement guette. Écoutez le signal avant qu'il ne vous force à l'arrêt.", en: "You keep putting off rest while burnout looms. Heed the signal before it forces you to stop." },
    },
  },
  'swords-05': {
    keywords: {
      upright: { fr: ['conflit', 'victoire amère', 'tension', 'ego'], en: ['conflict', 'hollow victory', 'tension', 'ego'] },
      reversed: { fr: ['réconciliation', 'lâcher prise', 'se retirer', 'pardon'], en: ['reconciliation', 'letting go', 'walking away', 'forgiveness'] },
    },
    meaning: {
      upright: { fr: "Gagner à tout prix laisse un goût amer et des liens abîmés. Demandez-vous si cette victoire en valait le coût.", en: "Winning at all costs leaves a bitter taste and damaged bonds. Ask whether this victory was worth the cost." },
      reversed: { fr: "Vous êtes prêt à déposer les armes et à réparer. Le pardon, ou simplement partir, vaut mieux qu'avoir raison.", en: "You're ready to lay down arms and mend things. Forgiveness — or simply walking away — beats being right." },
    },
  },
  'swords-06': {
    keywords: {
      upright: { fr: ['transition', 'passage', 'aller vers mieux', 'apaisement'], en: ['transition', 'passage', 'moving to calmer waters', 'relief'] },
      reversed: { fr: ['résistance au changement', 'bagage non réglé', 'coincé', 'retour en arrière'], en: ['resisting change', 'unfinished baggage', 'stuck', 'backsliding'] },
    },
    meaning: {
      upright: { fr: "Vous quittez des eaux agitées vers un lieu plus calme. La transition est en cours : le pire est derrière.", en: "You're leaving choppy waters for somewhere calmer. The transition is underway: the worst is behind you." },
      reversed: { fr: "Vous traînez un bagage qui vous empêche de tourner la page. Réglez ce qui doit l'être pour avancer léger.", en: "You're dragging baggage that keeps you from turning the page. Settle what needs settling to move on lighter." },
    },
  },
  'swords-07': {
    keywords: {
      upright: { fr: ['stratégie', 'ruse', 'agir seul', 'discrétion'], en: ['strategy', 'cunning', 'acting alone', 'discretion'] },
      reversed: { fr: ['aveu', 'conscience', 'se faire prendre', 'honnêteté'], en: ['confession', 'conscience', 'getting caught', 'honesty'] },
    },
    meaning: {
      upright: { fr: "Vous avancez masqué, par stratégie ou par esquive. La ruse peut servir, mais gare à ce qu'elle ne se retourne contre vous.", en: "You move under cover, by strategy or evasion. Cunning can help, but beware it turning against you." },
      reversed: { fr: "La vérité refait surface et le poids du secret s'allège. Jouer franc-jeu vous soulagera plus que de continuer à cacher.", en: "The truth resurfaces and the weight of the secret lifts. Coming clean will relieve you more than hiding on." },
    },
  },
  'swords-08': {
    keywords: {
      upright: { fr: ['sentiment de piège', 'blocage mental', 'impuissance', 'limites auto-imposées'], en: ['feeling trapped', 'mental block', 'powerlessness', 'self-imposed limits'] },
      reversed: { fr: ['libération', 'nouveau regard', 'se dégager', 'reprise de pouvoir'], en: ['release', 'new perspective', 'breaking free', 'reclaiming power'] },
    },
    meaning: {
      upright: { fr: "Vous vous sentez pris au piège, mais les liens sont surtout dans la tête. Regardez : une issue existe déjà.", en: "You feel trapped, but the ropes are mostly in your head. Look again: a way out already exists." },
      reversed: { fr: "Vous ôtez le bandeau et voyez que rien ne vous retient vraiment. Un pas suffit pour vous libérer.", en: "You lift the blindfold and see nothing truly holds you. One step is enough to free yourself." },
    },
  },
  'swords-09': {
    keywords: {
      upright: { fr: ['angoisse', 'ruminations', 'peur', 'nuits blanches'], en: ['anxiety', 'rumination', 'fear', 'sleepless nights'] },
      reversed: { fr: ['apaisement', 'lâcher les peurs', 'demander de l\'aide', 'sortie du tunnel'], en: ['relief', 'releasing fears', 'asking for help', 'coming out of it'] },
    },
    meaning: {
      upright: { fr: "Les pensées tournent la nuit et l'angoisse gonfle tout. La peur exagère souvent : nommez-la pour la dégonfler.", en: "Thoughts spin at night and anxiety magnifies everything. Fear usually exaggerates: name it to deflate it." },
      reversed: { fr: "L'angoisse desserre son étreinte et vous respirez mieux. En parler, à quelqu'un, allège le fardeau.", en: "The anxiety loosens its grip and you breathe easier. Talking it out with someone lightens the load." },
    },
  },
  'swords-10': {
    keywords: {
      upright: { fr: ['fin douloureuse', 'point bas', 'trahison', 'épuisement'], en: ['painful ending', 'rock bottom', 'betrayal', 'exhaustion'] },
      reversed: { fr: ['relèvement', 'le pire est passé', 'renaissance', 'guérison'], en: ['recovery', 'the worst is over', 'rebirth', 'healing'] },
    },
    meaning: {
      upright: { fr: "Quelque chose touche le fond, de façon brutale. Mais ce point bas est aussi un terminus : après, ça ne peut que remonter.", en: "Something hits bottom, harshly. Yet this low point is also an end of the line: from here, it can only rise." },
      reversed: { fr: "Vous vous relevez d'une épreuve : le plus dur est derrière. Accueillez cette renaissance pas à pas.", en: "You're getting up after an ordeal: the hardest part is behind you. Welcome this rebirth step by step." },
    },
  },
  'swords-11': {
    keywords: {
      upright: { fr: ['curiosité', 'vigilance', 'soif d\'apprendre', 'idées'], en: ['curiosity', 'vigilance', 'thirst for learning', 'ideas'] },
      reversed: { fr: ['précipitation', 'commérages', 'pensées éparpillées', 'espionnage'], en: ['haste', 'gossip', 'scattered thoughts', 'snooping'] },
    },
    meaning: {
      upright: { fr: "Un esprit vif et curieux cherche à comprendre et à apprendre. Cultivez cette soif, elle ouvre des portes.", en: "A sharp, curious mind seeks to understand and learn. Cultivate this thirst — it opens doors." },
      reversed: { fr: "La curiosité vire à la précipitation ou au commérage. Vérifiez vos informations avant de les relayer.", en: "Curiosity tips into haste or gossip. Check your facts before passing them on." },
    },
  },
  'swords-12': {
    keywords: {
      upright: { fr: ['ambition', 'franchise', 'action rapide', 'détermination'], en: ['ambition', 'directness', 'fast action', 'determination'] },
      reversed: { fr: ['agressivité', 'imprudence', 'sans suite', 'brusquerie'], en: ['aggression', 'recklessness', 'no follow-through', 'bluntness'] },
    },
    meaning: {
      upright: { fr: "Vous foncez vers votre but avec franchise et rapidité. Cette énergie directe fait bouger les lignes.", en: "You charge toward your goal with directness and speed. This straightforward energy shifts things." },
      reversed: { fr: "La fougue vire à la brusquerie et vous partez tête baissée. Pesez vos mots et vos actes avant de heurter.", en: "The drive turns brusque and you rush in headlong. Weigh your words and moves before you bruise someone." },
    },
  },
  'swords-13': {
    keywords: {
      upright: { fr: ['lucidité', 'franchise', 'indépendance d\'esprit', 'perspicacité'], en: ['clarity', 'honesty', 'independent thinking', 'perceptiveness'] },
      reversed: { fr: ['froideur', 'jugement dur', 'amertume', 'sarcasme'], en: ['coldness', 'harsh judgement', 'bitterness', 'sarcasm'] },
    },
    meaning: {
      upright: { fr: "Vous pensez avec clarté et dites les choses sans détour. Cette honnêteté lucide inspire le respect.", en: "You think clearly and say things straight. This clear-eyed honesty earns respect." },
      reversed: { fr: "La franchise se fait tranchante et le jugement, sans pitié. Ajoutez un peu de chaleur à votre lucidité.", en: "Frankness turns cutting and judgement becomes merciless. Add a little warmth to your clarity." },
    },
  },
  'swords-14': {
    keywords: {
      upright: { fr: ['intelligence', 'autorité', 'vérité', 'jugement juste'], en: ['intellect', 'authority', 'truth', 'sound judgement'] },
      reversed: { fr: ['abus de pouvoir', 'manipulation', 'froideur', 'rigidité'], en: ['abuse of power', 'manipulation', 'coldness', 'rigidity'] },
    },
    meaning: {
      upright: { fr: "Vous tranchez avec raison et intégrité, guidé par la vérité. Cette clarté fait autorité sans écraser.", en: "You decide with reason and integrity, guided by truth. This clarity carries authority without crushing." },
      reversed: { fr: "L'intelligence sert le contrôle ou la manipulation. Remettez la raison au service du juste, pas du pouvoir.", en: "Intellect gets used for control or manipulation. Put reason back in service of what's fair, not power." },
    },
  },

  // ─────────────── DENIERS / PENTACLES (terre : matériel, travail, corps) ───────────────
  'pentacles-01': {
    keywords: {
      upright: { fr: ['opportunité', 'nouveau projet', 'prospérité', 'concret'], en: ['opportunity', 'new venture', 'prosperity', 'the tangible'] },
      reversed: { fr: ['occasion manquée', 'insécurité', 'mauvais timing', 'plan bancal'], en: ['missed opportunity', 'insecurity', 'bad timing', 'shaky plan'] },
    },
    meaning: {
      upright: { fr: "Une opportunité concrète se présente : emploi, argent, projet solide. Saisissez cette graine et faites-la fructifier.", en: "A concrete opportunity appears: a job, money, a solid project. Take this seed and grow it." },
      reversed: { fr: "Une occasion file ou repose sur des bases fragiles. Consolidez le terrain avant de vous engager.", en: "An opportunity slips by or rests on shaky ground. Firm up the footing before you commit." },
    },
  },
  'pentacles-02': {
    keywords: {
      upright: { fr: ['équilibre', 'adaptabilité', 'jongler', 'souplesse'], en: ['balance', 'adaptability', 'juggling', 'flexibility'] },
      reversed: { fr: ['surcharge', 'désorganisation', 'déséquilibre', 'trop de fronts'], en: ['overload', 'disorganisation', 'imbalance', 'too many fronts'] },
    },
    meaning: {
      upright: { fr: "Vous jonglez avec plusieurs priorités et gardez l'équilibre. Restez souple, ce n'est qu'une question de rythme.", en: "You're juggling several priorities and keeping your balance. Stay flexible — it's just a matter of rhythm." },
      reversed: { fr: "Trop de balles en l'air : quelque chose va tomber. Allégez la charge et hiérarchisez.", en: "Too many balls in the air: something's about to drop. Lighten the load and set priorities." },
    },
  },
  'pentacles-03': {
    keywords: {
      upright: { fr: ['collaboration', 'savoir-faire', 'construire', 'reconnaissance'], en: ['collaboration', 'craft', 'building', 'recognition'] },
      reversed: { fr: ['manque de coopération', 'désorganisation', 'travail bâclé', 'egos'], en: ['lack of cooperation', 'disorganisation', 'sloppy work', 'egos'] },
    },
    meaning: {
      upright: { fr: "En unissant vos compétences à celles des autres, vous bâtissez du solide. Votre savoir-faire est reconnu.", en: "By joining your skills to others', you build something solid. Your craft is being recognised." },
      reversed: { fr: "La coopération grippe : rôles flous, egos, travail négligé. Reclarifiez qui fait quoi.", en: "Cooperation is jamming: unclear roles, egos, careless work. Re-clarify who does what." },
    },
  },
  'pentacles-04': {
    keywords: {
      upright: { fr: ['sécurité', 'épargne', 'stabilité', 'contrôle'], en: ['security', 'saving', 'stability', 'control'] },
      reversed: { fr: ['possessivité', 'avarice', 'lâcher prise', 'peur de manquer'], en: ['possessiveness', 'clinging', 'letting go', 'fear of scarcity'] },
    },
    meaning: {
      upright: { fr: "Vous sécurisez vos acquis et bâtissez une base stable. Utile, tant que la prudence ne devient pas une prison.", en: "You secure what you have and build a stable base. Useful — as long as caution doesn't become a cage." },
      reversed: { fr: "Le besoin de tout garder vous crispe et vous isole. Desserrez la prise : retenir n'est pas posséder.", en: "The need to hold on to everything tightens and isolates you. Loosen your grip: holding on isn't the same as having." },
    },
  },
  'pentacles-05': {
    keywords: {
      upright: { fr: ['difficulté', 'insécurité', 'manque', 'isolement'], en: ['hardship', 'insecurity', 'lack', 'isolation'] },
      reversed: { fr: ['sortie de crise', 'aide qui arrive', 'reprise', 'espoir'], en: ['recovery', 'help arriving', 'turning the corner', 'hope'] },
    },
    meaning: {
      upright: { fr: "Une période de manque ou de solitude pèse lourd. L'aide existe pourtant, à condition d'oser la demander.", en: "A stretch of lack or loneliness weighs heavily. Help is there, though — if you dare to ask for it." },
      reversed: { fr: "Vous sortez de la traversée du désert : le soutien revient. Le plus dur s'éloigne, accueillez ce répit.", en: "You're emerging from the hard stretch: support returns. The worst recedes — welcome this reprieve." },
    },
  },
  'pentacles-06': {
    keywords: {
      upright: { fr: ['générosité', 'partage', 'entraide', 'donner et recevoir'], en: ['generosity', 'sharing', 'mutual aid', 'giving and receiving'] },
      reversed: { fr: ['dons intéressés', 'déséquilibre', 'dette', 'dépendance'], en: ['strings attached', 'imbalance', 'debt', 'dependence'] },
    },
    meaning: {
      upright: { fr: "L'échange circule justement : vous donnez ou recevez au bon moment. La générosité, dans les deux sens, fait du bien.", en: "Exchange flows fairly: you give or receive at the right time. Generosity, both ways, does good." },
      reversed: { fr: "Un don cache un intérêt, ou le rapport donneur/receveur est déséquilibré. Clarifiez ce qui est vraiment gratuit.", en: "A gift hides a motive, or the giver/receiver balance is off. Get clear on what's truly freely given." },
    },
  },
  'pentacles-07': {
    keywords: {
      upright: { fr: ['patience', 'vision long terme', 'bilan', 'investissement'], en: ['patience', 'long-term view', 'assessment', 'investment'] },
      reversed: { fr: ['impatience', 'faible rendement', 'doute', 'effort mal placé'], en: ['impatience', 'poor return', 'doubt', 'misplaced effort'] },
    },
    meaning: {
      upright: { fr: "Vous faites une pause pour évaluer ce que vos efforts ont fait pousser. La récolte se prépare : laissez le temps agir.", en: "You pause to assess what your efforts have grown. The harvest is coming: let time do its work." },
      reversed: { fr: "L'impatience monte face à un rendement décevant. Demandez-vous si ce champ mérite encore vos efforts.", en: "Impatience rises at a disappointing return. Ask whether this field still deserves your effort." },
    },
  },
  'pentacles-08': {
    keywords: {
      upright: { fr: ['application', 'apprentissage', 'maîtrise', 'rigueur'], en: ['diligence', 'skill-building', 'mastery', 'rigour'] },
      reversed: { fr: ['perfectionnisme', 'lassitude', 'manque de sens', 'travail mécanique'], en: ['perfectionism', 'weariness', 'lack of meaning', 'mechanical work'] },
    },
    meaning: {
      upright: { fr: "Vous affinez votre savoir-faire avec application et constance. Ce travail patient bâtit une vraie maîtrise.", en: "You refine your craft with diligence and consistency. This patient work builds real mastery." },
      reversed: { fr: "Le travail tourne à la routine vide ou au perfectionnisme stérile. Reconnectez-vous au sens de ce que vous faites.", en: "Work turns into empty routine or sterile perfectionism. Reconnect with the meaning of what you do." },
    },
  },
  'pentacles-09': {
    keywords: {
      upright: { fr: ['autonomie', 'abondance', 'réussite personnelle', 'plaisir mérité'], en: ['self-sufficiency', 'abundance', 'personal success', 'earned pleasure'] },
      reversed: { fr: ['surmenage', 'dépendance', 'superficialité', 'réussite creuse'], en: ['overwork', 'dependence', 'superficiality', 'hollow success'] },
    },
    meaning: {
      upright: { fr: "Vous savourez le fruit de votre travail, autonome et à l'aise. Cette réussite est méritée : profitez-en.", en: "You savour the fruit of your work, self-reliant and at ease. This success is earned — enjoy it." },
      reversed: { fr: "Le confort masque un vide, ou vous vous épuisez à le maintenir. Cherchez ce qui comble au-delà du matériel.", en: "Comfort masks an emptiness, or you exhaust yourself maintaining it. Look for what fulfils beyond the material." },
    },
  },
  'pentacles-10': {
    keywords: {
      upright: { fr: ['prospérité durable', 'famille', 'héritage', 'stabilité'], en: ['lasting prosperity', 'family', 'legacy', 'stability'] },
      reversed: { fr: ['instabilité', 'tensions familiales', 'succès éphémère', 'conflit d\'argent'], en: ['instability', 'family tension', 'fleeting success', 'money conflict'] },
    },
    meaning: {
      upright: { fr: "Une abondance solide et durable soutient vous et les vôtres. C'est la sécurité qui se transmet et dure.", en: "A solid, lasting abundance supports you and yours. It's the kind of security that endures and passes on." },
      reversed: { fr: "Des tensions, souvent autour de l'argent ou de la famille, fragilisent l'édifice. Traitez la racine avant la façade.", en: "Tensions, often over money or family, weaken the structure. Address the root before the facade." },
    },
  },
  'pentacles-11': {
    keywords: {
      upright: { fr: ['apprentissage', 'ambition', 'nouveau projet', 'sérieux'], en: ['learning', 'ambition', 'new venture', 'seriousness'] },
      reversed: { fr: ['procrastination', 'manque de progrès', 'occasion manquée', 'dispersion'], en: ['procrastination', 'lack of progress', 'missed chance', 'distraction'] },
    },
    meaning: {
      upright: { fr: "Une envie d'apprendre et de bâtir du concret vous anime. Posez le premier jalon d'un projet sérieux.", en: "A drive to learn and build something concrete moves you. Lay the first stone of a serious project." },
      reversed: { fr: "L'ambition reste au stade de l'intention, faute d'action. Transformez le rêve en une première étape réelle.", en: "Ambition stays at the intention stage, for lack of action. Turn the dream into a first real step." },
    },
  },
  'pentacles-12': {
    keywords: {
      upright: { fr: ['fiabilité', 'travail régulier', 'persévérance', 'sérieux'], en: ['reliability', 'steady work', 'persistence', 'dependability'] },
      reversed: { fr: ['routine pesante', 'stagnation', 'ennui', 'paresse'], en: ['dull routine', 'stagnation', 'boredom', 'laziness'] },
    },
    meaning: {
      upright: { fr: "Vous avancez avec constance et fiabilité, un pas après l'autre. Cette persévérance tranquille mène loin.", en: "You move with steadiness and reliability, one step at a time. This quiet persistence goes far." },
      reversed: { fr: "La régularité vire à la routine qui endort. Introduisez un peu de nouveauté avant de vous enliser.", en: "Steadiness slides into a routine that dulls you. Bring in a little novelty before you get bogged down." },
    },
  },
  'pentacles-13': {
    keywords: {
      upright: { fr: ['sens pratique', 'générosité', 'ancrage', 'ressources'], en: ['practicality', 'nurturing', 'groundedness', 'resourcefulness'] },
      reversed: { fr: ['oubli de soi', 'déséquilibre vie/travail', 'surprotection', 'dispersion'], en: ['self-neglect', 'work-life imbalance', 'smothering', 'overstretch'] },
    },
    meaning: {
      upright: { fr: "Vous alliez sens pratique et chaleur, capable de prendre soin sans vous perdre. Cet équilibre nourrit tout autour de vous.", en: "You blend practicality and warmth, able to care without losing yourself. This balance nourishes everything around you." },
      reversed: { fr: "À tout gérer pour les autres, vous vous négligez. Remettez un peu de soin de votre côté de la balance.", en: "Managing everything for others, you neglect yourself. Put some care back on your side of the scale." },
    },
  },
  'pentacles-14': {
    keywords: {
      upright: { fr: ['réussite', 'sécurité', 'leadership', 'discipline'], en: ['success', 'security', 'leadership', 'discipline'] },
      reversed: { fr: ['matérialisme', 'avidité', 'entêtement', 'contrôle rigide'], en: ['materialism', 'greed', 'stubbornness', 'rigid control'] },
    },
    meaning: {
      upright: { fr: "Vous avez bâti une réussite solide et savez la faire prospérer avec discipline. Cette abondance peut aussi profiter aux autres.", en: "You've built solid success and know how to grow it with discipline. This abundance can benefit others too." },
      reversed: { fr: "La réussite se change en avidité ou en obsession du contrôle. Rappelez-vous ce que l'argent est censé servir.", en: "Success curdles into greed or an obsession with control. Remember what the money is meant to serve." },
    },
  },
};
