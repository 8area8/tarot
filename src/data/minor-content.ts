import type { CardContent } from '../lib/types';

/**
 * Contenu des 56 arcanes mineurs (cadre JDR solo, FR+EN).
 * Chaque mineure = un événement immédiat / une ambiance de scène.
 * Registre : nominal + tutoiement ; le négatif est assumé (inversé = tournure défavorable).
 * Clé = id de la carte (ex. "wands-01"). Fusionné dans cards.ts.
 */
export const MINOR_CONTENT: Record<string, CardContent> = {
  // ─────────────── BÂTONS / WANDS (feu : énergie, action, conflit) ───────────────
  'wands-01': {
    keywords: {
      upright: { fr: ['étincelle', 'occasion', 'élan', 'énergie neuve'], en: ['spark', 'opportunity', 'drive', 'fresh energy'] },
      reversed: { fr: ['faux départ', 'énergie dispersée', 'retard', 'projet avorté'], en: ['false start', 'scattered energy', 'delay', 'stalled venture'] },
    },
    meaning: {
      upright: { fr: "Une étincelle jaillit : une occasion d'agir, un projet qui s'allume, une énergie neuve dans l'air.", en: "A spark leaps up: a chance to act, a venture catching fire, fresh energy in the air." },
      reversed: { fr: "L'élan retombe : faux départ, énergie qui s'éparpille, une occasion qui fait long feu.", en: "The drive fizzles: a false start, scattered energy, an opportunity that comes to nothing." },
    },
  },
  'wands-02': {
    keywords: {
      upright: { fr: ['plan', 'horizon', 'décision', 'ambition'], en: ['planning', 'horizon', 'decision', 'ambition'] },
      reversed: { fr: ['hésitation', 'peur du saut', 'statu quo', 'indécision'], en: ['hesitation', 'fear of the leap', 'status quo', 'indecision'] },
    },
    meaning: {
      upright: { fr: "Un temps de plan : on contemple l'horizon avant de se lancer, une décision d'expansion se prépare.", en: "A moment of planning: gazing at the horizon before the leap, a decision to expand takes shape." },
      reversed: { fr: "L'hésitation gèle l'action : peur de l'inconnu, plan resté lettre morte, on reste au bord.", en: "Hesitation freezes the action: fear of the unknown, a plan left on paper, you stay at the edge." },
    },
  },
  'wands-03': {
    keywords: {
      upright: { fr: ['progrès', 'renforts', 'expansion', 'premiers fruits'], en: ['progress', 'reinforcements', 'expansion', 'first fruits'] },
      reversed: { fr: ['retard', 'obstacle', 'attente vaine', 'vue courte'], en: ['delay', 'obstacle', 'fruitless wait', 'short sight'] },
    },
    meaning: {
      upright: { fr: "Les efforts portent : un premier succès, des renforts en vue, l'entreprise s'étend.", en: "Effort pays off: a first success, reinforcements on the way, the venture spreads out." },
      reversed: { fr: "Les renforts tardent : retards, obstacles, une attente qui décourage.", en: "The reinforcements are late: delays, obstacles, a wait that wears you down." },
    },
  },
  'wands-04': {
    keywords: {
      upright: { fr: ['fête', 'foyer', 'célébration', 'étape'], en: ['celebration', 'home', 'milestone', 'stability'] },
      reversed: { fr: ['harmonie fragile', 'transition', 'soutien absent', 'instabilité'], en: ['fragile harmony', 'transition', 'missing support', 'instability'] },
    },
    meaning: {
      upright: { fr: "Une fête et un foyer : célébration, retour au bercail, une étape heureuse franchie ensemble.", en: "A feast and a home: celebration, homecoming, a happy milestone crossed together." },
      reversed: { fr: "L'harmonie se fissure : fête gâchée, foyer instable, un soutien qui manque.", en: "The harmony cracks: a spoiled feast, an unsteady home, support that fails." },
    },
  },
  'wands-05': {
    keywords: {
      upright: { fr: ['querelle', 'rivalité', 'mêlée', 'chaos'], en: ['quarrel', 'rivalry', 'skirmish', 'chaos'] },
      reversed: { fr: ['trêve', 'compromis', 'conflit évité', 'apaisement'], en: ['truce', 'compromise', 'conflict avoided', 'de-escalation'] },
    },
    meaning: {
      upright: { fr: "Une empoignade éclate : rivalités, disputes, chacun pour soi dans la confusion.", en: "A brawl breaks out: rivalries, squabbles, every one for themselves in the confusion." },
      reversed: { fr: "La bagarre s'apaise ou s'évite : trêve, compromis, ou l'on fuit le conflit.", en: "The fight eases or is dodged: a truce, a compromise, or the conflict is avoided." },
    },
  },
  'wands-06': {
    keywords: {
      upright: { fr: ['victoire', 'triomphe', 'honneurs', 'reconnaissance'], en: ['victory', 'triumph', 'honours', 'recognition'] },
      reversed: { fr: ['gloire volée', 'doute', 'revers public', 'orgueil'], en: ['stolen glory', 'doubt', 'public setback', 'pride'] },
    },
    meaning: {
      upright: { fr: "Un triomphe s'affiche : retour victorieux, honneurs, une réussite reconnue de tous.", en: "A triumph on display: a victorious return, honours, a success everyone acknowledges." },
      reversed: { fr: "La gloire se dérobe : victoire volée, reconnaissance qui manque, orgueil avant la chute.", en: "Glory slips away: a stolen victory, recognition withheld, pride before the fall." },
    },
  },
  'wands-07': {
    keywords: {
      upright: { fr: ['défi', 'tenir tête', 'défense', 'avantage'], en: ['challenge', 'standing firm', 'defence', 'high ground'] },
      reversed: { fr: ['débordé', 'épuisement', 'recul', 'abandon'], en: ['overwhelmed', 'exhaustion', 'retreat', 'giving up'] },
    },
    meaning: {
      upright: { fr: "Une position à défendre : on te met au défi, tu tiens tête, seul contre plusieurs.", en: "A position to defend: you're challenged, you hold your ground, one against many." },
      reversed: { fr: "La défense cède : débordé, épuisé, on lâche du terrain.", en: "The defence gives way: overwhelmed, worn out, ground is lost." },
    },
  },
  'wands-08': {
    keywords: {
      upright: { fr: ['rapidité', 'nouvelles', 'mouvement', 'action'], en: ['speed', 'news', 'movement', 'action'] },
      reversed: { fr: ['retard', 'message perdu', 'précipitation', 'blocage'], en: ['delay', 'lost message', 'haste', 'blockage'] },
    },
    meaning: {
      upright: { fr: "Tout s'accélère : nouvelles rapides, messages, événements qui s'enchaînent sans répit.", en: "Everything speeds up: swift news, messages, events tumbling one after another." },
      reversed: { fr: "Ça s'enraye : retards, messages perdus, précipitation qui gâche tout.", en: "It jams: delays, lost messages, a haste that ruins everything." },
    },
  },
  'wands-09': {
    keywords: {
      upright: { fr: ['vigilance', 'dernier rempart', 'ténacité', 'sur ses gardes'], en: ['vigilance', 'last stand', 'resilience', 'on guard'] },
      reversed: { fr: ['épuisement', 'paranoïa', 'à bout', 'reddition'], en: ['exhaustion', 'paranoia', 'at the end', 'surrender'] },
    },
    meaning: {
      upright: { fr: "L'ultime garde : blessé mais debout, on guette la prochaine attaque, prêt à tenir encore.", en: "The last watch: wounded but standing, bracing for the next assault, ready to hold on." },
      reversed: { fr: "La garde s'effondre : épuisement, méfiance de tout, on n'en peut plus.", en: "The guard collapses: exhaustion, distrust of everything, you can't go on." },
    },
  },
  'wands-10': {
    keywords: {
      upright: { fr: ['fardeau', 'surcharge', 'épuisement', 'devoir'], en: ['burden', 'overload', 'exhaustion', 'duty'] },
      reversed: { fr: ['délestage', 'effondrement', 'abandon', 'trop-plein'], en: ['offloading', 'collapse', 'giving up', 'overwhelm'] },
    },
    meaning: {
      upright: { fr: "Un fardeau écrasant : trop de charges sur les épaules, une tâche qui épuise, on ploie sous le poids.", en: "A crushing burden: too much on your shoulders, a draining task, you buckle under the weight." },
      reversed: { fr: "Le fardeau se pose — ou t'écrase : on délègue et on lâche, ou l'on s'effondre.", en: "The burden is set down — or crushes you: you delegate and let go, or you collapse." },
    },
  },
  'wands-11': {
    keywords: {
      upright: { fr: ['jeune fougueux', 'messager', 'enthousiasme', 'idée neuve'], en: ['eager youth', 'messenger', 'enthusiasm', 'fresh idea'] },
      reversed: { fr: ['dispersion', 'vantardise', 'projet sans suite', 'fausse nouvelle'], en: ['scattered', 'bragging', 'no follow-through', 'false news'] },
    },
    meaning: {
      upright: { fr: "Un jeune fougueux paraît : messager enthousiaste, apprenti audacieux, une nouvelle qui donne envie d'agir.", en: "An eager youth appears: an enthusiastic messenger, a bold apprentice, news that makes you want to act." },
      reversed: { fr: "Le fougueux déçoit : promesses en l'air, dispersion, une nouvelle qui fait pschitt.", en: "The eager one disappoints: empty promises, scattered focus, news that fizzles out." },
    },
  },
  'wands-12': {
    keywords: {
      upright: { fr: ['aventurier', 'fougue', 'passion', 'départ'], en: ['adventurer', 'dash', 'passion', 'departure'] },
      reversed: { fr: ['imprudence', 'colère', 'précipitation', 'sans suite'], en: ['recklessness', 'anger', 'haste', 'no follow-through'] },
    },
    meaning: {
      upright: { fr: "Un aventurier fonce dans la scène : cavalier impétueux, passion, départ précipité vers l'action.", en: "An adventurer charges onto the scene: an impetuous rider, passion, a headlong rush into action." },
      reversed: { fr: "L'impétueux devient danger : imprudence, colère, une charge qui tourne au désastre.", en: "The impetuous one turns dangerous: recklessness, anger, a charge that ends in disaster." },
    },
  },
  'wands-13': {
    keywords: {
      upright: { fr: ['meneuse', 'assurance', 'charisme', 'chaleur'], en: ['leader', 'confidence', 'charisma', 'warmth'] },
      reversed: { fr: ['jalousie', 'exigence', 'susceptibilité', 'domination'], en: ['jealousy', 'demanding', 'touchiness', 'domineering'] },
    },
    meaning: {
      upright: { fr: "Une femme rayonnante mène la scène : assurance chaleureuse, charisme, une meneuse qu'on suit volontiers.", en: "A radiant woman leads the scene: warm confidence, charisma, a leader people gladly follow." },
      reversed: { fr: "L'assurance vire à l'excès : jalousie, exigence, une meneuse qui étouffe ou s'égare.", en: "Confidence tips into excess: jealousy, demands, a leader who smothers or loses her way." },
    },
  },
  'wands-14': {
    keywords: {
      upright: { fr: ['chef visionnaire', 'audace', 'leadership', 'inspiration'], en: ['visionary leader', 'boldness', 'leadership', 'inspiration'] },
      reversed: { fr: ['despote', 'impulsivité', 'intolérance', 'tyrannie'], en: ['despot', 'impulsiveness', 'intolerance', 'tyranny'] },
    },
    meaning: {
      upright: { fr: "Un chef visionnaire s'impose : meneur audacieux, bâtisseur, une autorité naturelle qui inspire.", en: "A visionary leader takes charge: a bold chief, a builder, a natural authority that inspires." },
      reversed: { fr: "Le chef vire au despote : impulsif, intolérant, il brûle ce qu'il touche.", en: "The leader turns despot: impulsive, intolerant, he scorches all he touches." },
    },
  },

  // ─────────────── COUPES / CUPS (eau : émotions, liens, ambiance) ───────────────
  'cups-01': {
    keywords: {
      upright: { fr: ['amour naissant', 'émotion', 'tendresse', 'grâce'], en: ['new love', 'emotion', 'tenderness', 'grace'] },
      reversed: { fr: ['cœur fermé', 'vide', 'amour refoulé', 'froideur'], en: ['closed heart', 'emptiness', 'repressed love', 'coldness'] },
    },
    meaning: {
      upright: { fr: "Le cœur s'ouvre : un amour naissant, une émotion neuve, un moment de grâce et de tendresse.", en: "The heart opens: a budding love, a new feeling, a moment of grace and tenderness." },
      reversed: { fr: "L'émotion se bloque : cœur fermé, amour refoulé, un vide affectif.", en: "Feeling shuts down: a closed heart, repressed love, an emotional void." },
    },
  },
  'cups-02': {
    keywords: {
      upright: { fr: ['rencontre', 'attirance', 'pacte', 'réciprocité'], en: ['meeting', 'attraction', 'pact', 'reciprocity'] },
      reversed: { fr: ['rupture', 'déséquilibre', 'malentendu', 'tension'], en: ['breakup', 'imbalance', 'misunderstanding', 'tension'] },
    },
    meaning: {
      upright: { fr: "Deux êtres s'accordent : rencontre, attirance, pacte scellé, une belle réciprocité.", en: "Two hearts align: a meeting, attraction, a pact sealed, a fine reciprocity." },
      reversed: { fr: "Le lien se déséquilibre : dispute, rupture, malentendu qui éloigne.", en: "The bond tips off balance: a quarrel, a breakup, a misunderstanding that drives apart." },
    },
  },
  'cups-03': {
    keywords: {
      upright: { fr: ['célébration', 'amitié', 'retrouvailles', 'joie'], en: ['celebration', 'friendship', 'reunion', 'joy'] },
      reversed: { fr: ['excès', 'ragots', 'isolement', 'lassitude'], en: ['excess', 'gossip', 'isolation', 'weariness'] },
    },
    meaning: {
      upright: { fr: "Une célébration joyeuse : retrouvailles, amitiés, on lève son verre ensemble.", en: "A joyful celebration: reunions, friendships, glasses raised together." },
      reversed: { fr: "La fête tourne mal : excès, ragots, une amitié se fissure dans l'ivresse.", en: "The party sours: excess, gossip, a friendship cracking amid the drink." },
    },
  },
  'cups-04': {
    keywords: {
      upright: { fr: ['morosité', 'ennui', 'lassitude', 'offre ignorée'], en: ['gloom', 'boredom', 'apathy', 'offer ignored'] },
      reversed: { fr: ['réveil', 'nouvelle envie', 'ouverture', 'regain'], en: ['awakening', 'new desire', 'opening', 'renewal'] },
    },
    meaning: {
      upright: { fr: "Une ambiance morne s'installe : lassitude, ennui, une offre qu'on regarde sans envie.", en: "A dull mood sets in: weariness, boredom, an offer looked at without appetite." },
      reversed: { fr: "L'ennui se rompt : un réveil, une nouvelle envie, on saisit enfin ce qu'on ignorait.", en: "The boredom breaks: an awakening, a new desire, you finally take what you'd ignored." },
    },
  },
  'cups-05': {
    keywords: {
      upright: { fr: ['perte', 'chagrin', 'regret', 'deuil'], en: ['loss', 'grief', 'regret', 'mourning'] },
      reversed: { fr: ['acceptation', 'ce qui reste', 'pardon', 'on avance'], en: ['acceptance', 'what remains', 'forgiveness', 'moving on'] },
    },
    meaning: {
      upright: { fr: "Un chagrin pèse : une perte, un regret, on fixe ce qui s'est renversé.", en: "Grief weighs down: a loss, a regret, eyes fixed on what has spilled." },
      reversed: { fr: "Le deuil s'allège : on relève la tête, on voit ce qui reste, on avance.", en: "The mourning eases: you lift your head, see what remains, and move on." },
    },
  },
  'cups-06': {
    keywords: {
      upright: { fr: ['nostalgie', 'souvenir', 'retrouvailles', 'innocence'], en: ['nostalgia', 'memory', 'reunion', 'innocence'] },
      reversed: { fr: ['nostalgie pesante', 'idéalisation', 'stagnation', 'regret'], en: ['heavy nostalgia', 'idealising', 'stagnation', 'regret'] },
    },
    meaning: {
      upright: { fr: "Une douceur du passé : souvenir tendre, retrouvailles, un cadeau ou une main innocente.", en: "A sweetness from the past: a tender memory, a reunion, a gift or an innocent hand." },
      reversed: { fr: "Le passé retient : nostalgie qui enferme, souvenir idéalisé, on refuse d'avancer.", en: "The past holds you: nostalgia that cages, an idealised memory, a refusal to move on." },
    },
  },
  'cups-07': {
    keywords: {
      upright: { fr: ['choix multiples', 'mirage', 'rêverie', 'tentation'], en: ['many choices', 'mirage', 'daydream', 'temptation'] },
      reversed: { fr: ['clarté', 'décision', 'priorités', 'retour au réel'], en: ['clarity', 'decision', 'priorities', 'back to reality'] },
    },
    meaning: {
      upright: { fr: "Un éventail de mirages : choix multiples, rêves séduisants, on ne sait où donner de la tête.", en: "A spread of mirages: many choices, alluring dreams, and no idea where to turn." },
      reversed: { fr: "Le brouillard se lève : on tranche, on voit clair, la fantaisie cède au réel.", en: "The fog lifts: you decide, you see clearly, fantasy gives way to reality." },
    },
  },
  'cups-08': {
    keywords: {
      upright: { fr: ['départ', 'quête', 'renoncement', 'tourner la page'], en: ['departure', 'quest', 'letting go', 'turning the page'] },
      reversed: { fr: ['peur de partir', 'stagnation', 'allers-retours', 'indécision'], en: ['fear of leaving', 'stagnation', 'back and forth', 'indecision'] },
    },
    meaning: {
      upright: { fr: "Un départ silencieux : on quitte ce qui ne nourrit plus, en quête d'un ailleurs plus vrai.", en: "A quiet departure: leaving what no longer nourishes, seeking somewhere truer." },
      reversed: { fr: "Le départ hésite : on reste par peur, allers-retours, on tourne en rond.", en: "The departure falters: staying out of fear, back and forth, going in circles." },
    },
  },
  'cups-09': {
    keywords: {
      upright: { fr: ['contentement', 'vœu exaucé', 'plaisir', 'satisfaction'], en: ['contentment', 'wish granted', 'pleasure', 'satisfaction'] },
      reversed: { fr: ['suffisance', 'plaisir vide', 'insatiable', 'vanité'], en: ['smugness', 'hollow pleasure', 'never enough', 'vanity'] },
    },
    meaning: {
      upright: { fr: "Un moment de contentement : un vœu exaucé, du plaisir, la satisfaction tranquille de l'instant.", en: "A moment of contentment: a wish granted, pleasure, the quiet satisfaction of the moment." },
      reversed: { fr: "La satisfaction sonne creux : suffisance, plaisir vide, on veut toujours plus.", en: "The satisfaction rings hollow: smugness, empty pleasure, always wanting more." },
    },
  },
  'cups-10': {
    keywords: {
      upright: { fr: ['plénitude', 'foyer', 'harmonie', 'bonheur'], en: ['fulfilment', 'home', 'harmony', 'happiness'] },
      reversed: { fr: ['façade', 'discorde', 'tensions cachées', 'désunion'], en: ['facade', 'discord', 'hidden tension', 'disunity'] },
    },
    meaning: {
      upright: { fr: "Une plénitude partagée : foyer heureux, harmonie, un bonheur simple qui rayonne.", en: "A shared fulfilment: a happy home, harmony, a simple joy that radiates." },
      reversed: { fr: "L'harmonie se fissure : façade heureuse, tensions cachées, un foyer qui sonne faux.", en: "The harmony cracks: a happy facade, hidden tensions, a home that rings false." },
    },
  },
  'cups-11': {
    keywords: {
      upright: { fr: ['âme sensible', 'messager tendre', 'rêverie', 'invitation'], en: ['sensitive soul', 'tender messenger', 'reverie', 'invitation'] },
      reversed: { fr: ['caprice', 'humeur', 'susceptibilité', 'immaturité'], en: ['whim', 'moodiness', 'touchiness', 'immaturity'] },
    },
    meaning: {
      upright: { fr: "Un être sensible paraît : messager tendre, âme rêveuse, une invitation du cœur ou de l'imaginaire.", en: "A sensitive figure appears: a tender messenger, a dreamy soul, an invitation of the heart or the imagination." },
      reversed: { fr: "La sensibilité déborde : caprice, humeur changeante, une émotion qu'on ne maîtrise pas.", en: "Sensitivity spills over: a whim, shifting moods, an emotion out of control." },
    },
  },
  'cups-12': {
    keywords: {
      upright: { fr: ['romantique', 'charmeur', 'proposition', 'idéal'], en: ['romantic', 'charmer', 'proposal', 'ideal'] },
      reversed: { fr: ['belles paroles', 'humeur', 'déception', 'mirage'], en: ['empty words', 'moodiness', 'disappointment', 'mirage'] },
    },
    meaning: {
      upright: { fr: "Un romantique s'avance : charmeur, cœur sur la main, une proposition sincère et idéaliste.", en: "A romantic steps forward: a charmer, heart on the sleeve, a sincere and idealistic offer." },
      reversed: { fr: "Le charme cache le vide : belles paroles sans actes, humeur, une déception en vue.", en: "The charm hides emptiness: fine words with no deeds, moods, disappointment ahead." },
    },
  },
  'cups-13': {
    keywords: {
      upright: { fr: ['bienveillance', 'compassion', 'écoute', 'soutien'], en: ['kindness', 'compassion', 'listening', 'support'] },
      reversed: { fr: ['trop-plein', 'dépendance', 'oubli de soi', 'susceptibilité'], en: ['overwhelm', 'dependence', 'self-neglect', 'over-sensitivity'] },
    },
    meaning: {
      upright: { fr: "Une présence bienveillante veille : écoute, compassion, un cœur qui apaise et soutient.", en: "A caring presence watches over: listening, compassion, a heart that soothes and supports." },
      reversed: { fr: "La bienveillance s'épuise : trop-plein d'émotions, dépendance, on s'oublie pour les autres.", en: "The kindness burns out: emotional overflow, dependence, losing yourself for others." },
    },
  },
  'cups-14': {
    keywords: {
      upright: { fr: ['maîtrise', 'calme', 'diplomatie', 'sagesse du cœur'], en: ['composure', 'calm', 'diplomacy', 'wise heart'] },
      reversed: { fr: ['instabilité', 'manipulation', 'froideur', 'houle cachée'], en: ['volatility', 'manipulation', 'coldness', 'hidden storm'] },
    },
    meaning: {
      upright: { fr: "Un être maître de ses émotions : calme, diplomate, une main sûre dans la tempête affective.", en: "Someone in command of their feelings: calm, diplomatic, a steady hand in an emotional storm." },
      reversed: { fr: "Le calme cache la houle : humeurs sous la surface, manipulation, froideur qui blesse.", en: "The calm hides a swell: moods beneath the surface, manipulation, a coldness that wounds." },
    },
  },

  // ─────────────── ÉPÉES / SWORDS (air : esprit, conflit, vérité) ───────────────
  'swords-01': {
    keywords: {
      upright: { fr: ['clarté', 'vérité', 'idée décisive', 'percée'], en: ['clarity', 'truth', 'decisive idea', 'breakthrough'] },
      reversed: { fr: ['confusion', 'désinformation', 'brouillard', 'idée faussée'], en: ['confusion', 'misinformation', 'fog', 'muddled idea'] },
    },
    meaning: {
      upright: { fr: "Une clarté tranchante : une vérité éclate, une idée décisive coupe le brouillard. L'esprit y voit net.", en: "A cutting clarity: a truth breaks open, a decisive idea slices through the fog. The mind sees sharp." },
      reversed: { fr: "L'esprit s'embrouille : confusion, information faussée, une idée qui tourne mal.", en: "The mind tangles: confusion, twisted information, an idea gone wrong." },
    },
  },
  'swords-02': {
    keywords: {
      upright: { fr: ['impasse', 'choix évité', 'statu quo', 'tension'], en: ['stalemate', 'avoided choice', 'standoff', 'tension'] },
      reversed: { fr: ['déblocage', 'vérité révélée', 'décision', 'tension qui lâche'], en: ['breakthrough', 'truth revealed', 'decision', 'release'] },
    },
    meaning: {
      upright: { fr: "Une impasse tendue : un choix qu'on refuse de voir, un statu quo bancal, deux forces qui se neutralisent.", en: "A tense stalemate: a choice refused, a wobbly standoff, two forces cancelling out." },
      reversed: { fr: "L'impasse se dénoue — ou explose : une vérité tombe, on tranche enfin, la tension lâche.", en: "The stalemate breaks — or bursts: a truth drops, a choice is finally made, the tension releases." },
    },
  },
  'swords-03': {
    keywords: {
      upright: { fr: ['blessure', 'trahison', 'parole qui blesse', 'chagrin'], en: ['heartbreak', 'betrayal', 'wounding words', 'grief'] },
      reversed: { fr: ['guérison', 'pardon', 'douleur relâchée', 'reconstruction'], en: ['healing', 'forgiveness', 'pain released', 'rebuilding'] },
    },
    meaning: {
      upright: { fr: "Une blessure au cœur : trahison, parole qui transperce, un chagrin net et douloureux.", en: "A wound to the heart: betrayal, words that pierce, a sharp and painful sorrow." },
      reversed: { fr: "La plaie commence à guérir : on relâche la douleur, le pardon s'amorce.", en: "The wound starts to close: the pain is released, forgiveness begins." },
    },
  },
  'swords-04': {
    keywords: {
      upright: { fr: ['repos', 'trêve', 'récupération', 'pause'], en: ['rest', 'truce', 'recovery', 'pause'] },
      reversed: { fr: ['agitation', 'épuisement', 'repos refusé', 'reprise forcée'], en: ['restlessness', 'exhaustion', 'rest refused', 'forced return'] },
    },
    meaning: {
      upright: { fr: "Une trêve nécessaire : repos, retraite, un temps de calme pour panser ses forces.", en: "A needed truce: rest, retreat, a spell of quiet to mend your strength." },
      reversed: { fr: "Le repos manque : agitation, épuisement qu'on ignore, une trêve refusée.", en: "Rest is missing: restlessness, exhaustion ignored, a truce refused." },
    },
  },
  'swords-05': {
    keywords: {
      upright: { fr: ['querelle', 'humiliation', 'victoire amère', 'rancune'], en: ['quarrel', 'humiliation', 'hollow victory', 'resentment'] },
      reversed: { fr: ['réconciliation', 'on lâche', 'retrait', 'pardon'], en: ['reconciliation', 'letting go', 'walking away', 'forgiveness'] },
    },
    meaning: {
      upright: { fr: "Une querelle laisse un goût amer : quelqu'un l'emporte par la ruse ou l'humiliation. L'air est lourd de rancune.", en: "A quarrel leaves a bitter taste: someone wins by cunning or humiliation. The air is heavy with spite." },
      reversed: { fr: "Les armes s'abaissent : la défaite se digère, on quitte le champ de bataille, ou l'on tend la main.", en: "The weapons lower: the defeat is swallowed, the field abandoned, or a hand is offered." },
    },
  },
  'swords-06': {
    keywords: {
      upright: { fr: ['passage', 'traversée', 'apaisement', 'départ'], en: ['passage', 'crossing', 'relief', 'departure'] },
      reversed: { fr: ['bagage', 'retour en arrière', 'enlisement', 'départ manqué'], en: ['baggage', 'backsliding', 'stuck', 'failed departure'] },
    },
    meaning: {
      upright: { fr: "Un passage vers le calme : on quitte des eaux agitées, une traversée vers un lieu plus sûr.", en: "A passage to calmer waters: leaving rough seas, a crossing toward safer ground." },
      reversed: { fr: "La traversée s'enlise : un bagage qu'on traîne, un retour en arrière, on n'arrive pas à partir.", en: "The crossing bogs down: baggage dragged along, a slide backwards, unable to leave." },
    },
  },
  'swords-07': {
    keywords: {
      upright: { fr: ['ruse', 'larcin', 'stratégie', 'discrétion'], en: ['stealth', 'theft', 'strategy', 'discretion'] },
      reversed: { fr: ['pris sur le fait', 'aveu', 'conscience', 'plan éventé'], en: ['caught', 'confession', 'conscience', 'plan exposed'] },
    },
    meaning: {
      upright: { fr: "Une manœuvre en douce : ruse, larcin, quelqu'un agit dans ton dos avec un plan bien à lui.", en: "A quiet manoeuvre: cunning, a theft, someone acting behind your back with a plan of their own." },
      reversed: { fr: "La ruse se retourne : on se fait prendre, la conscience parle, un aveu tombe.", en: "The trickery backfires: caught in the act, conscience speaks, a confession drops." },
    },
  },
  'swords-08': {
    keywords: {
      upright: { fr: ['piège', 'entrave', 'impuissance', 'aveuglement'], en: ['trap', 'restriction', 'powerlessness', 'blindfold'] },
      reversed: { fr: ['libération', 'issue', 'nouveau regard', 'délivrance'], en: ['release', 'way out', 'new perspective', 'freeing'] },
    },
    meaning: {
      upright: { fr: "Un piège se referme : entravé, aveuglé, coincé — pourtant les liens sont plus lâches qu'ils n'en ont l'air.", en: "A trap closes in: bound, blindfolded, stuck — yet the ropes are looser than they look." },
      reversed: { fr: "Les liens se défont : on ôte le bandeau, on trouve l'issue, on se libère.", en: "The bonds come undone: the blindfold lifts, a way out appears, you break free." },
    },
  },
  'swords-09': {
    keywords: {
      upright: { fr: ['angoisse', 'cauchemar', 'peur', 'culpabilité'], en: ['anguish', 'nightmare', 'fear', 'guilt'] },
      reversed: { fr: ['apaisement', 'peur qui reflue', 'aide', 'sortie du tunnel'], en: ['relief', 'fear receding', 'help', 'coming through'] },
    },
    meaning: {
      upright: { fr: "Une angoisse dévorante : nuit blanche, cauchemars, une peur qui gonfle tout dans le noir.", en: "A devouring dread: a sleepless night, nightmares, a fear that swells everything in the dark." },
      reversed: { fr: "L'étau se desserre : la peur reflue, on en parle, l'aube approche.", en: "The grip loosens: the fear recedes, it's spoken aloud, dawn draws near." },
    },
  },
  'swords-10': {
    keywords: {
      upright: { fr: ['ruine', 'trahison', 'point bas', 'fin brutale'], en: ['ruin', 'betrayal', 'rock bottom', 'brutal ending'] },
      reversed: { fr: ['relèvement', 'pire passé', 'aube', 'survie'], en: ['recovery', 'worst is over', 'dawn', 'survival'] },
    },
    meaning: {
      upright: { fr: "Le point le plus bas : trahison consommée, effondrement, une fin brutale. Rien de pire ne peut arriver.", en: "The lowest point: a betrayal complete, collapse, a brutal ending. Nothing worse can happen." },
      reversed: { fr: "On se relève du désastre : le pire est passé, une aube pâle après la nuit.", en: "You rise from the disaster: the worst is over, a pale dawn after the night." },
    },
  },
  'swords-11': {
    keywords: {
      upright: { fr: ['esprit vif', 'guetteur', 'curiosité', 'vigilance'], en: ['sharp mind', 'watcher', 'curiosity', 'vigilance'] },
      reversed: { fr: ['espionnage', 'ragots', 'précipitation', 'médisance'], en: ['snooping', 'gossip', 'haste', 'slander'] },
    },
    meaning: {
      upright: { fr: "Un esprit vif et curieux rôde : guetteur, espion, une soif de savoir, une nouvelle qui pique.", en: "A sharp, curious mind is about: a watcher, a spy, a thirst to know, news that stings." },
      reversed: { fr: "La curiosité vire à l'espionnage : ragots, précipitation, une langue trop bien pendue.", en: "Curiosity turns to snooping: gossip, haste, a tongue too sharp." },
    },
  },
  'swords-12': {
    keywords: {
      upright: { fr: ['assaut', 'franchise', 'rapidité', 'détermination'], en: ['charge', 'bluntness', 'speed', 'determination'] },
      reversed: { fr: ['agressivité', 'imprudence', 'brusquerie', 'sans suite'], en: ['aggression', 'recklessness', 'harshness', 'no follow-through'] },
    },
    meaning: {
      upright: { fr: "Un assaut direct : cavalier fougueux, franc-parler, une charge rapide et sans détour.", en: "A direct assault: a fiery rider, blunt speech, a fast charge with no detour." },
      reversed: { fr: "La fougue blesse : agressivité, imprudence, une charge qui s'effondre sans suite.", en: "The drive wounds: aggression, recklessness, a charge that collapses with nothing behind it." },
    },
  },
  'swords-13': {
    keywords: {
      upright: { fr: ['lucidité', 'perspicacité', 'franchise', 'indépendance'], en: ['clarity', 'perceptiveness', 'frankness', 'independence'] },
      reversed: { fr: ['froideur', 'jugement dur', 'amertume', 'sarcasme'], en: ['coldness', 'harsh judgement', 'bitterness', 'sarcasm'] },
    },
    meaning: {
      upright: { fr: "Une femme lucide et directe : perspicace, indépendante, elle voit clair et dit vrai.", en: "A clear-eyed, direct woman: perceptive, independent, she sees clearly and speaks true." },
      reversed: { fr: "La lucidité se fait tranchante : froideur, jugement sans pitié, amertume qui blesse.", en: "The clarity turns cutting: coldness, merciless judgement, a bitterness that wounds." },
    },
  },
  'swords-14': {
    keywords: {
      upright: { fr: ['intelligence', 'autorité', 'rigueur', 'vérité'], en: ['intellect', 'authority', 'rigour', 'truth'] },
      reversed: { fr: ['manipulation', 'froideur', 'abus', 'rigidité'], en: ['manipulation', 'coldness', 'abuse', 'rigidity'] },
    },
    meaning: {
      upright: { fr: "Une autorité de l'esprit : juge, stratège, une intelligence qui tranche avec rigueur et vérité.", en: "An authority of the mind: a judge, a strategist, an intellect that decides with rigour and truth." },
      reversed: { fr: "L'intelligence sert le pouvoir : manipulation, froideur, une loi qui écrase sans cœur.", en: "Intellect serves power: manipulation, coldness, a law that crushes without heart." },
    },
  },

  // ─────────────── DENIERS / PENTACLES (terre : matériel, travail, corps) ───────────────
  'pentacles-01': {
    keywords: {
      upright: { fr: ['aubaine', 'occasion', 'richesse', 'prospérité'], en: ['windfall', 'opportunity', 'wealth', 'prosperity'] },
      reversed: { fr: ['occasion manquée', 'piège', 'promesse creuse', 'perte'], en: ['missed chance', 'trap', 'hollow promise', 'loss'] },
    },
    meaning: {
      upright: { fr: "Une aubaine concrète : une bourse, un objet précieux, une porte qui s'ouvre sur la prospérité.", en: "A concrete windfall: a purse, a precious object, a door opening onto prosperity." },
      reversed: { fr: "L'occasion s'évapore ou cache un piège : promesse creuse, affaire pourrie, argent qui file.", en: "The opportunity evaporates or hides a trap: a hollow promise, a rotten deal, money slipping away." },
    },
  },
  'pentacles-02': {
    keywords: {
      upright: { fr: ['jonglage', 'adaptation', 'équilibre', 'souplesse'], en: ['juggling', 'adaptability', 'balance', 'flexibility'] },
      reversed: { fr: ['surcharge', 'désordre', 'déséquilibre', 'trop de fronts'], en: ['overload', 'disorder', 'imbalance', 'too many fronts'] },
    },
    meaning: {
      upright: { fr: "Un numéro d'équilibre : on jongle avec les moyens, on s'adapte, deux affaires menées de front.", en: "A balancing act: juggling resources, adapting, two matters handled at once." },
      reversed: { fr: "Trop de balles en l'air : surcharge, désordre, quelque chose va tomber.", en: "Too many balls in the air: overload, disorder, something's about to drop." },
    },
  },
  'pentacles-03': {
    keywords: {
      upright: { fr: ['savoir-faire', 'collaboration', 'chantier', 'reconnaissance'], en: ['craft', 'collaboration', 'project', 'recognition'] },
      reversed: { fr: ['cafouillage', 'rôles flous', 'travail bâclé', 'egos'], en: ['muddle', 'unclear roles', 'sloppy work', 'egos'] },
    },
    meaning: {
      upright: { fr: "Un chantier prend forme : savoir-faire, collaboration, un travail d'équipe reconnu.", en: "A project takes shape: craft, collaboration, teamwork that gets recognised." },
      reversed: { fr: "Le chantier grippe : cafouillage, rôles flous, travail bâclé et egos.", en: "The project jams: muddle, unclear roles, sloppy work and egos." },
    },
  },
  'pentacles-04': {
    keywords: {
      upright: { fr: ['sécurité', 'épargne', 'contrôle', 'possession'], en: ['security', 'saving', 'control', 'possession'] },
      reversed: { fr: ['avarice', 'possessivité', 'isolement', 'perte'], en: ['greed', 'possessiveness', 'isolation', 'loss'] },
    },
    meaning: {
      upright: { fr: "On serre ce qu'on a : sécurité, épargne, une main fermée sur ses biens.", en: "Holding tight to what you have: security, saving, a closed fist around your goods." },
      reversed: { fr: "La prise se crispe : avarice, possessivité qui isole — ou tout part en fumée.", en: "The grip tightens: greed, possessiveness that isolates — or it all goes up in smoke." },
    },
  },
  'pentacles-05': {
    keywords: {
      upright: { fr: ['disette', 'manque', 'exclusion', 'froid'], en: ['hardship', 'want', 'exclusion', 'cold'] },
      reversed: { fr: ['secours', 'refuge', 'reprise', 'espoir'], en: ['aid', 'shelter', 'recovery', 'hope'] },
    },
    meaning: {
      upright: { fr: "La disette et le froid : manque, exclusion, on erre dehors pendant que la lumière brille ailleurs.", en: "Hardship and cold: want, exclusion, wandering outside while the light shines elsewhere." },
      reversed: { fr: "La misère desserre son étau : un secours arrive, un refuge s'ouvre, le pire s'éloigne.", en: "The hardship loosens its grip: aid arrives, a shelter opens, the worst recedes." },
    },
  },
  'pentacles-06': {
    keywords: {
      upright: { fr: ['générosité', 'partage', 'mécène', 'échange juste'], en: ['generosity', 'sharing', 'patron', 'fair exchange'] },
      reversed: { fr: ['don intéressé', 'dette', 'déséquilibre', 'dépendance'], en: ['strings attached', 'debt', 'imbalance', 'dependence'] },
    },
    meaning: {
      upright: { fr: "Un geste de générosité : un mécène, une aumône, un échange juste entre qui donne et qui reçoit.", en: "An act of generosity: a patron, an alms, a fair exchange between giver and receiver." },
      reversed: { fr: "Le don cache un calcul : générosité intéressée, dette, une balance qui penche.", en: "The gift hides a calculation: generosity with strings, debt, a scale that tips." },
    },
  },
  'pentacles-07': {
    keywords: {
      upright: { fr: ['patience', 'récolte à venir', 'évaluation', 'investissement'], en: ['patience', 'coming harvest', 'assessment', 'investment'] },
      reversed: { fr: ['maigre récolte', 'effort vain', 'impatience', 'doute'], en: ['poor harvest', 'wasted effort', 'impatience', 'doubt'] },
    },
    meaning: {
      upright: { fr: "Un temps de patience : on évalue la récolte à venir, un investissement qui mûrit lentement.", en: "A time of patience: sizing up the coming harvest, an investment ripening slowly." },
      reversed: { fr: "L'attente déçoit : maigre récolte, effort mal placé, impatience qui ronge.", en: "The wait disappoints: a poor harvest, misplaced effort, gnawing impatience." },
    },
  },
  'pentacles-08': {
    keywords: {
      upright: { fr: ['application', 'métier', 'constance', 'apprentissage'], en: ['diligence', 'craft', 'consistency', 'apprenticeship'] },
      reversed: { fr: ['routine vide', 'perfectionnisme', 'sans cœur', 'bâclage'], en: ['empty routine', 'perfectionism', 'heartless', 'sloppiness'] },
    },
    meaning: {
      upright: { fr: "Un travail appliqué : on affûte son métier, ouvrage après ouvrage, avec constance.", en: "Dedicated work: honing the craft, piece after piece, with steady consistency." },
      reversed: { fr: "Le travail se vide de sens : routine mécanique, perfectionnisme stérile, cœur qui n'y est plus.", en: "The work drains of meaning: mechanical routine, sterile perfectionism, the heart no longer in it." },
    },
  },
  'pentacles-09': {
    keywords: {
      upright: { fr: ['aisance', 'autonomie', 'confort', 'récompense'], en: ['ease', 'self-reliance', 'comfort', 'reward'] },
      reversed: { fr: ['surmenage', 'vide', 'dépendance', 'luxe creux'], en: ['overwork', 'emptiness', 'dependence', 'hollow luxury'] },
    },
    meaning: {
      upright: { fr: "Une aisance méritée : autonomie, confort raffiné, on savoure le fruit de son travail.", en: "An earned ease: self-reliance, refined comfort, savouring the fruit of your work." },
      reversed: { fr: "Le confort masque un vide : surmenage pour tenir le train de vie, ou luxe qui sonne creux.", en: "The comfort masks a void: overwork to keep up the lifestyle, or a luxury that rings hollow." },
    },
  },
  'pentacles-10': {
    keywords: {
      upright: { fr: ['richesse durable', 'héritage', 'maisonnée', 'stabilité'], en: ['lasting wealth', 'legacy', 'household', 'stability'] },
      reversed: { fr: ['héritage disputé', 'argent qui divise', 'instabilité', 'sursis'], en: ['disputed legacy', 'money that divides', 'instability', 'borrowed time'] },
    },
    meaning: {
      upright: { fr: "Une richesse qui dure : héritage, maisonnée prospère, une lignée établie et à l'abri.", en: "A wealth that lasts: legacy, a prosperous household, an established line, sheltered." },
      reversed: { fr: "L'édifice se lézarde : querelle d'héritage, argent qui divise, une prospérité en sursis.", en: "The edifice cracks: a quarrel over inheritance, money that divides, a prosperity on borrowed time." },
    },
  },
  'pentacles-11': {
    keywords: {
      upright: { fr: ['jeune studieux', 'apprenti', 'occasion', 'projet concret'], en: ['studious youth', 'apprentice', 'opportunity', 'concrete plan'] },
      reversed: { fr: ['procrastination', 'occasion gâchée', 'stagnation', 'rêverie'], en: ['procrastination', 'missed chance', 'stagnation', 'daydreaming'] },
    },
    meaning: {
      upright: { fr: "Un jeune studieux paraît : apprenti sérieux, une occasion d'apprendre ou d'entreprendre du concret.", en: "A studious youth appears: an earnest apprentice, a chance to learn or to build something concrete." },
      reversed: { fr: "L'élan reste lettre morte : procrastination, occasion gâchée, on rêve sans agir.", en: "The impulse stays on paper: procrastination, a wasted chance, dreaming without doing." },
    },
  },
  'pentacles-12': {
    keywords: {
      upright: { fr: ['fiabilité', 'constance', 'sérieux', 'labeur'], en: ['reliability', 'consistency', 'diligence', 'toil'] },
      reversed: { fr: ['routine', 'ennui', 'stagnation', 'paresse'], en: ['dull routine', 'boredom', 'stagnation', 'laziness'] },
    },
    meaning: {
      upright: { fr: "Un travailleur fiable avance : constance, sérieux, un pas régulier qui finit par payer.", en: "A reliable worker plods on: consistency, seriousness, a steady pace that pays off in the end." },
      reversed: { fr: "La régularité s'enlise : routine qui endort, ennui, stagnation.", en: "The steadiness bogs down: a dulling routine, boredom, stagnation." },
    },
  },
  'pentacles-13': {
    keywords: {
      upright: { fr: ['sens pratique', 'générosité', 'ancrage', 'débrouille'], en: ['practicality', 'generosity', 'groundedness', 'resourcefulness'] },
      reversed: { fr: ['oubli de soi', 'surprotection', 'déséquilibre', 'dispersion'], en: ['self-neglect', 'smothering', 'imbalance', 'overstretch'] },
    },
    meaning: {
      upright: { fr: "Une femme pratique et généreuse : ancrée, débrouillarde, elle prend soin des siens sans se perdre.", en: "A practical, generous woman: grounded, resourceful, she cares for her own without losing herself." },
      reversed: { fr: "Elle se néglige à force de gérer : déséquilibre, surprotection, tout pour les autres, rien pour soi.", en: "She neglects herself from managing everything: imbalance, smothering, all for others and nothing for herself." },
    },
  },
  'pentacles-14': {
    keywords: {
      upright: { fr: ['prospérité', 'discipline', 'pourvoyeur', 'réussite solide'], en: ['prosperity', 'discipline', 'provider', 'solid success'] },
      reversed: { fr: ['avidité', 'matérialisme', 'entêtement', 'contrôle'], en: ['greed', 'materialism', 'stubbornness', 'control'] },
    },
    meaning: {
      upright: { fr: "Un maître prospère règne : bâtisseur, pourvoyeur, une réussite solide qu'il sait faire fructifier.", en: "A prosperous master presides: a builder, a provider, a solid success he knows how to grow." },
      reversed: { fr: "La réussite vire à l'avidité : cupidité, matérialisme, contrôle obstiné de tout.", en: "Success curdles into greed: avarice, materialism, a stubborn control over everything." },
    },
  },
};
