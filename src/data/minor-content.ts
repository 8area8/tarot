import type { CardContent } from '../lib/types';

/**
 * Contenu des 56 arcanes mineurs (FR+EN). Chaque « meaning » est une lecture
 * SYMBOLIQUE concise (ce que la carte signifie, pas ce que l'image montre) ;
 * le détail par élément vit dans symbols.ts. Clé = id de la carte (« wands-01 »).
 * Socle : numérologie du rang × élément de l'enseigne (Bâtons=Feu, Coupes=Eau,
 * Épées=Air, Deniers=Terre). Registre : nominal + tutoiement léger ; inversé = assombri.
 */
export const MINOR_CONTENT: Record<string, CardContent> = {
  "wands-01": {
    keywords: {
      upright: { fr: ["étincelle", "occasion", "élan", "énergie neuve"], en: ["spark", "opportunity", "drive", "fresh energy"] },
      reversed: { fr: ["faux départ", "énergie dispersée", "retard", "projet avorté"], en: ["false start", "scattered energy", "delay", "stalled venture"] },
    },
    meaning: {
      upright: { fr: "La racine du Feu : le désir avant qu’il n’ait un nom. Une pure impulsion créatrice t’est offerte, brute, sans forme encore — l’instant où la volonté prend feu. Rien n’est acquis, tout est potentiel ardent : saisis l’élan pendant qu’il flambe.", en: "The root of Fire: desire before it has a name. A raw creative impulse is offered to you, brute and unshaped — the instant will catches fire. Nothing is earned, everything is burning potential: seize the surge while it blazes." },
      reversed: { fr: "Le même feu, mais qui ne prend pas. L’élan te traverse sans t’embraser : envie sans direction, ardeur qui retombe, projet allumé puis abandonné. La force est là, dévoyée en agitation ou étouffée par le doute — tu tiens la mèche, il manque la flamme.", en: "The same fire, failing to catch. The impulse passes through you without kindling: appetite without aim, ardour that sinks back, a venture lit then dropped. The force is present, misspent in restlessness or smothered by doubt — you hold the wick, the flame is missing." },
    },
  },
  "wands-02": {
    keywords: {
      upright: { fr: ["plan", "horizon", "décision", "ambition"], en: ["planning", "horizon", "decision", "ambition"] },
      reversed: { fr: ["hésitation", "peur du saut", "statu quo", "indécision"], en: ["hesitation", "fear of the leap", "status quo", "indecision"] },
    },
    meaning: {
      upright: { fr: "Le vertige du seuil : tu as déjà bâti, et cela ne suffit plus. Le pouvoir de choisir sa direction, de miser sur l’inconnu plutôt que de jouir de l’acquis. L’ambition demande un premier renoncement pour devenir voyage.", en: "The vertigo of the threshold: you have already built, and it no longer suffices. The power to choose your bearing, to wager on the unknown rather than savor what is won. Ambition asks a first renunciation before it can become a journey." },
      reversed: { fr: "L’élan retenu : tu contemples ton empire sans oser l’étendre. La décision se dilue en projets qui restent des vues de l’esprit, le confort du déjà-tenu étouffe le feu. Rêver le monde te dispense de le rejoindre.", en: "Momentum held back: you survey your domain without daring to widen it. Decision dissolves into schemes that stay mere prospects; the comfort of the held smothers the fire. Dreaming the world spares you from reaching it." },
    },
  },
  "wands-03": {
    keywords: {
      upright: { fr: ["progrès", "renforts", "expansion", "premiers fruits"], en: ["progress", "reinforcements", "expansion", "first fruits"] },
      reversed: { fr: ["retard", "obstacle", "attente vaine", "vue courte"], en: ["delay", "obstacle", "fruitless wait", "short sight"] },
    },
    meaning: {
      upright: { fr: "L’instant où l’effort semé revient élargi. Tu as engagé quelque chose et cela a pris le vent : la vision porte plus loin que tes mains, l’expansion est déjà en route. Ce feu, c’est la confiance qui attend son retour, non plus dans l’effort mais dans l’horizon.", en: "The moment when effort sown comes back enlarged. You committed to something and it caught the wind: your vision reaches farther than your hands, expansion already under way. This fire is the confidence that awaits its return no longer in the toil, but on the horizon." },
      reversed: { fr: "La vision se rétrécit à la longueur du quai. L’expansion promise se heurte à un retard, un renfort qui manque, un calcul trop court. Tu guettes un retour qui ne vient pas — le feu n’est pas éteint, mais il brûle en pure attente, sans le large pour le nourrir.", en: "The vision shrinks to the length of the pier. The promised expansion snags on delay, on missing support, on too short a reckoning. You watch for a return that does not come — the fire is not out, but it burns in mere waiting, with no open water to feed it." },
    },
  },
  "wands-04": {
    keywords: {
      upright: { fr: ["fête", "foyer", "célébration", "étape"], en: ["celebration", "home", "milestone", "stability"] },
      reversed: { fr: ["harmonie fragile", "transition", "soutien absent", "instabilité"], en: ["fragile harmony", "transition", "missing support", "instability"] },
    },
    meaning: {
      upright: { fr: "Le premier accomplissement stable : le Feu de la volonté, après l’élan et la lutte, trouve enfin un seuil où reposer. Tu franchis une étape, tu es accueilli, ta place est reconnue par les tiens. Joie communautaire, foyer fondé, promesse tenue.", en: "The first stable accomplishment: the Fire of will, after its surge and struggle, finds a threshold to rest upon. You cross a milestone, you are welcomed, your place is acknowledged by your own. Communal joy, a home founded, a promise kept." },
      reversed: { fr: "La même joie, mais désancrée : la célébration précède les fondations, ou l’appartenance sonne creux. Un seuil qu’on veut franchir avant qu’il tienne, un foyer dont le soutien se dérobe. Fête forcée, transition qui grince, harmonie qui demande encore ses appuis.", en: "The same joy, but unmoored: celebration outrunning its foundations, or belonging that rings hollow. A threshold you rush before it holds, a home whose support slips away. A forced feast, a grinding transition, harmony still asking for its footing." },
    },
  },
  "wands-05": {
    keywords: {
      upright: { fr: ["querelle", "rivalité", "mêlée", "chaos"], en: ["quarrel", "rivalry", "skirmish", "chaos"] },
      reversed: { fr: ["trêve", "compromis", "conflit évité", "apaisement"], en: ["truce", "compromise", "conflict avoided", "de-escalation"] },
    },
    meaning: {
      upright: { fr: "Le Feu qui se resserre sur lui-même : cinq ardeurs qui veulent la même arène et refusent de s’accorder. Épreuve, pas guerre — la friction créatrice où tu affûtes ta volonté au contact d’autres volontés. Rien n’est encore perdu ; rien n’est tranché.", en: "Fire crowded against itself: five ardours claiming the same arena, none willing to yield. A trial, not a war — the creative friction where you sharpen your will against other wills. Nothing is lost yet; nothing is settled." },
      reversed: { fr: "La friction retombe, mais deux voies s’écartent. Soit l’accord mûri, la rivalité muée en effort commun ; soit l’esquive — tu quittes la mêlée sans avoir mesuré ta force, et la question reste ouverte, remise à plus tard.", en: "The friction subsides, but two roads part. Either accord ripens, rivalry turning into shared effort; or evasion — you leave the fray without testing your strength, the question left open, merely postponed." },
    },
  },
  "wands-06": {
    keywords: {
      upright: { fr: ["victoire", "triomphe", "honneurs", "reconnaissance"], en: ["victory", "triumph", "honours", "recognition"] },
      reversed: { fr: ["gloire volée", "doute", "revers public", "orgueil"], en: ["stolen glory", "doubt", "public setback", "pride"] },
    },
    meaning: {
      upright: { fr: "La victoire reconnue, et le rare moment où elle se dit tout haut. Ton effort a porté, le monde le nomme, et cette parole extérieure te sacre autant que l’acte lui-même. Tu avances porté par une confiance légitime : ose recevoir l’hommage sans t’en excuser.", en: "Victory acknowledged, and the rare moment when it is said aloud. Your effort bore fruit, the world names it, and that outward word crowns you as much as the deed. You move carried by earned confidence: dare to receive the honour without apology." },
      reversed: { fr: "Le même triomphe, mais faussé. La reconnaissance manque, tarde, ou revient à un autre ; ou bien elle t’a grisé et l’orgueil précède la chute. Tu confonds l’applaudissement avec ta valeur : le sacre extérieur t’échappe, ou te tient captif.", en: "The same triumph, gone awry. Recognition is withheld, delayed, or claimed by another; or it has intoxicated you and pride outruns the fall. You mistake applause for worth: the outward crowning slips away, or holds you captive." },
    },
  },
  "wands-07": {
    keywords: {
      upright: { fr: ["défi", "tenir tête", "défense", "avantage"], en: ["challenge", "standing firm", "defence", "high ground"] },
      reversed: { fr: ["débordé", "épuisement", "recul", "abandon"], en: ["overwhelmed", "exhaustion", "retreat", "giving up"] },
    },
    meaning: {
      upright: { fr: "Le courage de la position tenue. Tu défends seul ce que tu as conquis, et la hauteur — conviction, légitimité, preuves déjà faites — te donne l’avantage sur le nombre. C’est ta constance sous pression, pas ta force brute, qui garde le terrain.", en: "The courage of a position held. You defend alone what you have won, and the high ground — conviction, legitimacy, proof already given — gives you the edge over sheer numbers. It is your steadiness under pressure, not raw force, that keeps the ground." },
      reversed: { fr: "La même vaillance, mais vidée. À force de tout parer, tu t’épuises et doutes de mériter la place que tu défends. La pression finit par payer : tu cèdes un pas, puis un autre, ou tu te bats désormais contre des menaces que tu inventes. Tenir tête devient s’accrocher.", en: "The same valour, but drained. From parrying everything you wear thin and doubt you deserve the place you defend. The pressure tells: you give a step, then another, or you now fight threats you invent. Standing firm curdles into merely clinging on." },
    },
  },
  "wands-08": {
    keywords: {
      upright: { fr: ["rapidité", "nouvelles", "mouvement", "action"], en: ["speed", "news", "movement", "action"] },
      reversed: { fr: ["retard", "message perdu", "précipitation", "blocage"], en: ["delay", "lost message", "haste", "blockage"] },
    },
    meaning: {
      upright: { fr: "La décision est déjà prise, la flèche a quitté l’arc : plus rien à retenir, seulement à accompagner. Le Feu s’est fait pure vitesse — nouvelle qui arrive, désir qui converge droit vers son but. Le temps de l’action éclair, pas de la délibération.", en: "The choice is already made, the arrow has left the bow: nothing left to hold, only to ride. Fire has become pure velocity — news arriving, desire converging straight on its aim. This is the hour of the swift strike, not of deliberation." },
      reversed: { fr: "L’élan s’emballe et se dévore : trop vite, trop tôt, avant que rien ne soit mûr. La force part dans tous les sens, se contrarie, se perd en route. Le message n’arrive pas, ou frappe à côté ; freine avant que la hâte ne te dépasse.", en: "The rush overheats and devours itself: too fast, too soon, before anything has ripened. The force scatters, works against itself, goes astray. The message fails to land, or strikes wide; slow down before haste outruns you." },
    },
  },
  "wands-09": {
    keywords: {
      upright: { fr: ["vigilance", "dernier rempart", "ténacité", "sur ses gardes"], en: ["vigilance", "last stand", "resilience", "on guard"] },
      reversed: { fr: ["épuisement", "paranoïa", "à bout", "reddition"], en: ["exhaustion", "paranoia", "at the end", "surrender"] },
    },
    meaning: {
      upright: { fr: "La résilience du survivant : tu as déjà encaissé, et cette mémoire du combat est devenue ta force autant que ta méfiance. Un dernier effort te sépare du repos, et tu le tiendras — non par élan, mais par une ténacité qui refuse de céder si près du but.", en: "The survivor's resilience: you have taken hits before, and that memory has become your strength as much as your wariness. One last effort stands between you and rest, and you will hold — not from momentum, but from a tenacity that refuses to yield so close to the end." },
      reversed: { fr: "La vigilance se dévoie en paranoïa : à force de tout traiter en menace, tu épuises la force qui te gardait debout. La garde ne protège plus rien, elle emmure ; le corps réclame la reddition et la blessure, mal soignée, dicte ta loi.", en: "Vigilance curdles into paranoia: by treating everything as a threat, you drain the very strength that kept you upright. The guard no longer protects, it walls you in; the body begs to surrender and the wound, left untended, rules you." },
    },
  },
  "wands-10": {
    keywords: {
      upright: { fr: ["fardeau", "surcharge", "épuisement", "devoir"], en: ["burden", "overload", "exhaustion", "duty"] },
      reversed: { fr: ["délestage", "effondrement", "abandon", "trop-plein"], en: ["offloading", "collapse", "giving up", "overwhelm"] },
    },
    meaning: {
      upright: { fr: "L’aboutissement qui se retourne en fardeau : tu as gagné, et le prix, c’est de tout porter seul. Le Feu conquérant des Bâtons s’est mué en devoir écrasant. Tu tiens jusqu’au bout, mais tu ne sais plus déléguer ni distinguer ce qui t’incombe vraiment.", en: "Achievement curdling into burden: you have won, and the price is to carry it all alone. The conquering Fire of Wands has hardened into crushing duty. You hold on to the end, but no longer know how to delegate, nor to tell what is truly yours to bear." },
      reversed: { fr: "Le trop-plein cède. Soit tu déposes enfin ce que tu portais par habitude ou par orgueil, soit tu t’effondres, submergé. La charge trouve son terme — libération salutaire ou renoncement amer. Reste à savoir ce que tu tenais vraiment, et ce qui n’était que poids emprunté.", en: "The overload gives way. Either you finally set down what you carried out of habit or pride, or you collapse, overwhelmed. The load ends — welcome release or bitter surrender. What remains is to know what was truly yours, and what was only borrowed weight." },
    },
  },
  "wands-11": {
    keywords: {
      upright: { fr: ["jeune fougueux", "messager", "enthousiasme", "idée neuve"], en: ["eager youth", "messenger", "enthusiasm", "fresh idea"] },
      reversed: { fr: ["dispersion", "vantardise", "projet sans suite", "fausse nouvelle"], en: ["scattered", "bragging", "no follow-through", "false news"] },
    },
    meaning: {
      upright: { fr: "L’étincelle avant la flamme : une intuition ardente qui te choisit pour messager. Tu n’as pas encore de plan, mais un feu neuf te presse d’annoncer, d’explorer, de t’élancer. Enthousiasme brut, curiosité sans peur — tout reste possible parce que rien n’est encore engagé.", en: "The spark before the fire: an ardent intuition that names you its messenger. You have no plan yet, only a fresh flame urging you to announce, to explore, to set out. Raw enthusiasm, fearless curiosity — everything stays possible because nothing is yet committed." },
      reversed: { fr: "Le même feu, mais qui brûle en paroles : tu annonces plus que tu n’accomplis. L’élan s’éparpille, l’idée reste verte et retombe, la nouvelle enfle sans fond. Vantardise, projet sans suite, ardeur qui t’agite au lieu de te porter quelque part.", en: "The same fire, but burning in words: you announce more than you achieve. The drive scatters, the idea stays green and falls flat, the news swells without substance. Bragging, projects left unfinished, an ardour that agitates you instead of carrying you anywhere." },
    },
  },
  "wands-12": {
    keywords: {
      upright: { fr: ["aventurier", "fougue", "passion", "départ"], en: ["adventurer", "dash", "passion", "departure"] },
      reversed: { fr: ["imprudence", "colère", "précipitation", "sans suite"], en: ["recklessness", "anger", "haste", "no follow-through"] },
    },
    meaning: {
      upright: { fr: "Tu es l’élan pur du Feu fait personnage : le désir qui décide avant que la raison n’ait voté. Cette carte dit le départ, la conviction brûlante, l’aventure qu’on épouse corps et âme. Charisme conquérant, mais volatil — tu enflammes tout ce que tu traverses.", en: "You are Fire’s pure momentum given a face: the desire that decides before reason has cast its vote. This card speaks of departure, burning conviction, the adventure embraced body and soul. Conquering charisma, but volatile — you set alight all you pass through." },
      reversed: { fr: "La même flamme, mais sans cap : l’ardeur dégénère en colère, l’audace en imprudence. Tu t’enflammes vite et t’éteins de même, laissant derrière toi des chantiers abandonnés. Énergie réelle qui brûle à vide, se querelle ou fuit dès que l’aventure exige de la constance.", en: "The same flame, but rudderless: ardour degrades into anger, boldness into recklessness. You ignite fast and burn out just as fast, leaving abandoned projects behind. Real energy spent on nothing, quarrelling or fleeing the moment the venture demands constancy." },
    },
  },
  "wands-13": {
    keywords: {
      upright: { fr: ["meneuse", "assurance", "charisme", "chaleur"], en: ["leader", "confidence", "charisma", "warmth"] },
      reversed: { fr: ["jalousie", "exigence", "susceptibilité", "domination"], en: ["jealousy", "demanding", "touchiness", "domineering"] },
    },
    meaning: {
      upright: { fr: "Le charisme comme force de feu maîtrisée : tu régnes par la chaleur, non par la contrainte. Confiance qui n’a plus à s’imposer, désir qui crée au lieu de consumer. On te suit d’instinct parce que ta flamme donne vie sans dévorer.", en: "Charisma as fire made steady: you rule by warmth, not by force. A confidence that no longer needs to assert itself, a desire that creates instead of consuming. Others follow you on instinct because your flame gives life without devouring." },
      reversed: { fr: "La même flamme retournée contre l’autre : la chaleur devient emprise. Ton assurance vire à l’exigence, ton rayonnement réclame qu’on t’entoure. Jalousie, susceptibilité, besoin de dominer — un feu qui étouffe ceux qu’il prétendait réchauffer.", en: "The same flame turned against others: warmth curdles into control. Your confidence hardens into demand, your radiance insists on being served. Jealousy, touchiness, the need to dominate — a fire that smothers those it claimed to warm." },
    },
  },
  "wands-14": {
    keywords: {
      upright: { fr: ["chef visionnaire", "audace", "leadership", "inspiration"], en: ["visionary leader", "boldness", "leadership", "inspiration"] },
      reversed: { fr: ["despote", "impulsivité", "intolérance", "tyrannie"], en: ["despot", "impulsiveness", "intolerance", "tyranny"] },
    },
    meaning: {
      upright: { fr: "La maîtrise du feu tourné vers le monde : ta vision devient royaume. Tu commandes non par la force mais par l’élan que tu communiques — meneur né, tu allumes chez les autres l’ardeur qui te consume. Ose, décide, entraîne.", en: "Mastery of fire turned outward: your vision becomes a kingdom. You command not by force but by the drive you transmit — a born leader, you kindle in others the ardour that burns in you. Dare, decide, carry them along." },
      reversed: { fr: "Le même feu, mais dressé contre quiconque résiste. La vision se fige en décret, l’audace en impatience, l’autorité en tyrannie. Tu n’écoutes plus, tu consumes ; le meneur devient despote qui n’éclaire que lui-même.", en: "The same fire, now turned against whoever resists. Vision hardens into decree, boldness into impatience, authority into tyranny. You no longer listen, you consume; the leader becomes a despot who lights none but himself." },
    },
  },
  "cups-01": {
    keywords: {
      upright: { fr: ["amour naissant", "émotion", "tendresse", "grâce"], en: ["new love", "emotion", "tenderness", "grace"] },
      reversed: { fr: ["cœur fermé", "vide", "amour refoulé", "froideur"], en: ["closed heart", "emptiness", "repressed love", "coldness"] },
    },
    meaning: {
      upright: { fr: "La grâce affective à l’état pur : un cœur qui s’ouvre avant tout calcul, comblé d’une émotion qu’il n’a pas produite mais reçue. Amour, compassion, foi renaissent d’une source neuve. Laisse-toi remplir, puis déborde vers l’autre.", en: "Emotional grace in its purest form: a heart opening before any calculation, filled with a feeling it did not make but received. Love, compassion, faith rise from an untouched source. Let yourself be filled, then overflow toward another." },
      reversed: { fr: "La même source, mais scellée. La tendresse existe et se retourne vers le dedans : cœur verrouillé, amour refoulé, émotion qui stagne faute d’exutoire. Le trop-plein devient poids. Ce qui ne se donne plus finit par croupir ou tarir.", en: "The same source, but sealed. Tenderness exists yet turns inward: heart locked, love repressed, emotion stagnating for want of an outlet. Fullness becomes weight. What is no longer given eventually stagnates or runs dry." },
    },
  },
  "cups-02": {
    keywords: {
      upright: { fr: ["rencontre", "attirance", "pacte", "réciprocité"], en: ["meeting", "attraction", "pact", "reciprocity"] },
      reversed: { fr: ["rupture", "déséquilibre", "malentendu", "tension"], en: ["breakup", "imbalance", "misunderstanding", "tension"] },
    },
    meaning: {
      upright: { fr: "L’union par consentement mutuel. Deux volontés distinctes se reconnaissent et scellent un pacte d’égal à égal : attirance, réciprocité, alliance qui guérit. Ni fusion ni possession, mais l’accord vivant où chacun reste soi tout en s’offrant à l’autre.", en: "Union by mutual consent. Two distinct wills recognize each other and seal an equal pact: attraction, reciprocity, an alliance that heals. Neither fusion nor possession, but the living accord where each stays whole while offering itself to the other." },
      reversed: { fr: "Le pacte se fêle. La réciprocité se rompt : l’un donne trop, l’autre se retient, et l’accord dégénère en malentendu ou dépendance. L’attirance persiste mais s’empoisonne, tirant chacun vers sa rive au lieu de les relier.", en: "The pact cracks. Reciprocity breaks: one gives too much, the other withholds, and the accord curdles into misunderstanding or dependency. Attraction lingers but sours, pulling each toward their own shore instead of joining them." },
    },
  },
  "cups-03": {
    keywords: {
      upright: { fr: ["célébration", "amitié", "retrouvailles", "joie"], en: ["celebration", "friendship", "reunion", "joy"] },
      reversed: { fr: ["excès", "ragots", "isolement", "lassitude"], en: ["excess", "gossip", "isolation", "weariness"] },
    },
    meaning: {
      upright: { fr: "La joie qui déborde et cherche à se partager. Trois, c’est l’émotion qui fructifie : ce qu’on a nourri à deux se fête à plusieurs. Amitié, gratitude, retrouvailles ; tu lèves ta coupe parce qu’une abondance vécue seule ne serait qu’à moitié vraie.", en: "Joy that overflows and seeks to be shared. Three is emotion come to fruit: what two nurtured is now celebrated among many. Friendship, gratitude, reunion; you raise your cup because plenty felt alone would be only half true." },
      reversed: { fr: "La même joie, mais trop tirée sur elle-même. La fête devient fuite, la coupe se remplit pour ne plus sentir ; le lien se corrompt en ragots, en excès, en tiers qu’on écarte. Ou l’inverse : tu restes au bord, exclu du cercle, à regarder la joie des autres.", en: "The same joy, but stretched too thin. Celebration becomes escape, the cup refilled to stop feeling; the bond sours into gossip, excess, a third one left out. Or the reverse: you linger at the edge, shut out of the ring, watching others' joy." },
    },
  },
  "cups-04": {
    keywords: {
      upright: { fr: ["morosité", "ennui", "lassitude", "offre ignorée"], en: ["gloom", "boredom", "apathy", "offer ignored"] },
      reversed: { fr: ["réveil", "nouvelle envie", "ouverture", "regain"], en: ["awakening", "new desire", "opening", "renewal"] },
    },
    meaning: {
      upright: { fr: "La satiété qui tourne au vide. Tu possèdes déjà, et c’est justement le trop-plein qui étouffe le désir : l’émotion s’étale, stagnante, et le cœur se replie dans une bouderie contemplative. Une grâce t’est tendue, mais l’ennui t’a rendu aveugle à ce qui pourrait te rouvrir.", en: "Fullness curdled into emptiness. You already have, and it is the surfeit itself that smothers desire: feeling pools and stagnates, and the heart folds inward in sullen reverie. A grace is held out to you, yet boredom has blinded you to what might reopen the well." },
      reversed: { fr: "Le charme apathique se rompt. La soif remonte de l’eau dormante, le repli cède, et tu te surprends à convoiter de nouveau. Attention pourtant : parfois l’inversion n’est que fuite, un désir neuf inventé pour ne pas accueillir la coupe déjà offerte.", en: "The apathetic spell breaks. Thirst rises again from the sleeping water, the withdrawal loosens, and you catch yourself wanting once more. Beware, though: sometimes the reversal is only flight, a fresh craving invented to avoid receiving the cup already offered." },
    },
  },
  "cups-05": {
    keywords: {
      upright: { fr: ["perte", "chagrin", "regret", "deuil"], en: ["loss", "grief", "regret", "mourning"] },
      reversed: { fr: ["acceptation", "ce qui reste", "pardon", "on avance"], en: ["acceptance", "what remains", "forgiveness", "moving on"] },
    },
    meaning: {
      upright: { fr: "Le deuil qui absorbe. Tu t’identifies à la perte au point d’en faire ton visage : le chagrin est réel, mais il t’aveugle sur ce qui subsiste. Trois coupes versées comptent plus que les deux restées pleines. Regret, remords, tarissement affectif.", en: "Grief that swallows you whole. You bind yourself to loss until it becomes your face: the sorrow is real, yet it blinds you to what endures. Three spilled cups outweigh the two still full. Regret, remorse, an emotional ebb." },
      reversed: { fr: "La même perte, mais le regard se décolle enfin de ce qui gît. Acceptation, pardon offert ou reçu, retour vers les liens intacts. Le chagrin ne disparaît pas : il cesse d’être tout ce que tu es, et le courant reprend.", en: "The same loss, but the gaze finally lifts from what lies fallen. Acceptance, forgiveness given or received, a turning back toward bonds still whole. The grief does not vanish: it stops being all you are, and the current resumes." },
    },
  },
  "cups-06": {
    keywords: {
      upright: { fr: ["nostalgie", "souvenir", "retrouvailles", "innocence"], en: ["nostalgia", "memory", "reunion", "innocence"] },
      reversed: { fr: ["nostalgie pesante", "idéalisation", "stagnation", "regret"], en: ["heavy nostalgia", "idealising", "stagnation", "regret"] },
    },
    meaning: {
      upright: { fr: "Le retour de l’enfance en toi : une tendresse qu’on te lègue sans condition, la mémoire adoucie qui répare. Tu renoues avec une innocence intacte, un don gratuit, un visage d’autrefois. Reçois — quelque chose de bon revient à ta rencontre.", en: "Childhood returning within you: a tenderness handed over freely, softened memory that mends. You reconnect with an untouched innocence, a gift asking nothing, a face from before. Receive it — something good is coming back to meet you." },
      reversed: { fr: "La même douceur qui se fait piège : hier embelli te retient et tu refuses de grandir. Tu idéalises un passé qui n’a jamais existé ainsi, et le présent se fane, inhabité. La nostalgie n’est plus refuge mais cage dorée.", en: "The same sweetness turned trap: a prettied past holds you and you refuse to grow. You idealise a yesterday that never quite was, and the present withers, unlived. Nostalgia is no longer shelter but a gilded cage." },
    },
  },
  "cups-07": {
    keywords: {
      upright: { fr: ["choix multiples", "mirage", "rêverie", "tentation"], en: ["many choices", "mirage", "daydream", "temptation"] },
      reversed: { fr: ["clarté", "décision", "priorités", "retour au réel"], en: ["clarity", "decision", "priorities", "back to reality"] },
    },
    meaning: {
      upright: { fr: "L’imagination souveraine, l’instant où le désir fabrique plus de mondes que tu n’en pourras jamais habiter. Sept envies s’égalent en éclat et s’annulent : tant qu’aucune ne pèse plus que l’autre, tu jouis de tout et ne possèdes rien. La tentation ici, c’est de confondre rêver et vouloir.", en: "Imagination made sovereign, the moment desire spins more worlds than you could ever inhabit. Seven longings shine as equals and cancel out: while none outweighs the rest, you savour everything and hold nothing. The temptation here is to mistake dreaming for willing." },
      reversed: { fr: "Le charme se rompt : la volonté tranche et la plupart des désirs s’avèrent creux. Soit tu retrouves la clarté qui hiérarchise et engage, soit tu t’enlises, hébété par tes propres mirages, incapable d’en laisser mourir un seul. La rêverie devient fuite plutôt que promesse.", en: "The spell breaks: will chooses, and most of the longings prove hollow. Either clarity returns to rank and commit, or you sink, dazed by your own mirages, unable to let a single one die. Reverie curdles into escape rather than promise." },
    },
  },
  "cups-08": {
    keywords: {
      upright: { fr: ["départ", "quête", "renoncement", "tourner la page"], en: ["departure", "quest", "letting go", "turning the page"] },
      reversed: { fr: ["peur de partir", "stagnation", "allers-retours", "indécision"], en: ["fear of leaving", "stagnation", "back and forth", "indecision"] },
    },
    meaning: {
      upright: { fr: "Le renoncement lucide. Tu quittes un bonheur qui a cessé de nourrir, non par dépit mais parce que l’âme réclame plus vrai. Départ vers l’inconnu, guidé par l’intuition contre le confort acquis : partir alors que tout semble encore debout.", en: "Lucid renunciation. You leave behind a contentment that no longer feeds you — not from spite, but because the soul demands something truer. A departure into the unknown, led by intuition against earned comfort: walking away while everything still looks intact." },
      reversed: { fr: "La quête avortée. Tu pressens qu’il faut partir mais tu restes, retenu par la peur ou l’habitude ; ou tu fuis sans fin, incapable de te poser. L’eau qu’on n’ose quitter croupit : stagnation déguisée en fidélité.", en: "The aborted quest. You sense you must go, yet you stay — held by fear or habit; or you flee endlessly, never able to settle. The water you dare not leave turns stagnant: stagnation dressed up as loyalty." },
    },
  },
  "cups-09": {
    keywords: {
      upright: { fr: ["contentement", "vœu exaucé", "plaisir", "satisfaction"], en: ["contentment", "wish granted", "pleasure", "satisfaction"] },
      reversed: { fr: ["suffisance", "plaisir vide", "insatiable", "vanité"], en: ["smugness", "hollow pleasure", "never enough", "vanity"] },
    },
    meaning: {
      upright: { fr: "La « carte du vœu » : ce que ton cœur réclamait est accordé, la plénitude émotionnelle atteinte. Contentement gagné, sensuel, mérité — tu jouis d’un désir comblé. Savoure sans honte, mais sache que l’abondance amassée pour soi reste encore à partager.", en: "The 'wish card': what your heart asked for is granted, emotional fullness reached. A contentment earned, sensual, deserved — you taste a desire fulfilled. Savour it without shame, yet know that plenty hoarded for oneself has still to be shared." },
      reversed: { fr: "Le désir comblé se retourne en avidité : le plaisir cesse de nourrir, la jouissance devient façade. Suffisance, satiété qui n’apaise rien, vœu exaucé mais creux. Tu confonds l’avoir et l’être ; aucune coupe de plus ne remplira ce qui manque au-dedans.", en: "Fulfilled desire curdles into greed: pleasure stops nourishing, enjoyment turns to display. Smugness, a satiety that soothes nothing, a wish granted yet hollow. You mistake having for being; no further cup will fill what is missing within." },
    },
  },
  "cups-10": {
    keywords: {
      upright: { fr: ["plénitude", "foyer", "harmonie", "bonheur"], en: ["fulfilment", "home", "harmony", "happiness"] },
      reversed: { fr: ["façade", "discorde", "tensions cachées", "désunion"], en: ["facade", "discord", "hidden tension", "disunity"] },
    },
    meaning: {
      upright: { fr: "L’accomplissement du cœur : non plus l’émotion vécue seul, mais la joie qui se partage et fait alliance. Le lien affectif atteint sa plénitude et se scelle dans la durée. Tu es comblé parce que ton bonheur rejaillit sur les tiens.", en: "The heart brought to fullness: no longer emotion lived alone but joy that is shared and makes a covenant. The bond of affection reaches its completion and seals itself for the long term. You are fulfilled because your happiness spills over onto your own." },
      reversed: { fr: "L’harmonie n’est plus qu’une image que l’on entretient. La forme du bonheur subsiste, mais la vie affective s’en est retirée : ce que tu montres et ce que tu ressens ont cessé de coïncider. Sous l’accord affiché couve la désunion.", en: "Harmony survives only as an image one keeps up. The shape of happiness remains, but the feeling has drained from it: what you show and what you feel no longer coincide. Beneath the displayed accord, disunity smoulders." },
    },
  },
  "cups-11": {
    keywords: {
      upright: { fr: ["âme sensible", "messager tendre", "rêverie", "invitation"], en: ["sensitive soul", "tender messenger", "reverie", "invitation"] },
      reversed: { fr: ["caprice", "humeur", "susceptibilité", "immaturité"], en: ["whim", "moodiness", "touchiness", "immaturity"] },
    },
    meaning: {
      upright: { fr: "Le seuil de l’âme sensible : une émotion neuve affleure, une intuition qui prend forme sans que tu la commandes. Messager du cœur, une invitation tendre te traverse, un rêve qui demande à être accueilli plutôt que jugé. La sensibilité est ici un don, non une faiblesse.", en: "The threshold of the sensitive soul: a fresh feeling surfaces, an intuition taking shape without your bidding. Messenger of the heart, a tender invitation crosses you, a dream asking to be welcomed rather than judged. Here sensitivity is a gift, not a weakness." },
      reversed: { fr: "La même douceur tourne à l’aigre : la sensibilité se referme en susceptibilité, l’élan créateur se noie dans l’humeur et le caprice. Tu confonds ton ressenti avec la vérité du monde, tu caresses une petite blessure au lieu d’écouter le message. L’émotion, non mûrie, boude.", en: "The same softness curdles: sensitivity closes into touchiness, the creative impulse drowns in mood and whim. You mistake your feeling for the world’s truth, stroking a small wound instead of hearing the message. Emotion, left unripe, sulks." },
    },
  },
  "cups-12": {
    keywords: {
      upright: { fr: ["romantique", "charmeur", "proposition", "idéal"], en: ["romantic", "charmer", "proposal", "ideal"] },
      reversed: { fr: ["belles paroles", "humeur", "déception", "mirage"], en: ["empty words", "moodiness", "disappointment", "mirage"] },
    },
    meaning: {
      upright: { fr: "Le désir enfin mis en marche, mais au rythme du cœur, pas de l’épée. Tu portes une offre sincère vers l’autre : proposition amoureuse, quête d’idéal, imagination qui se fait geste. L’émotion prend forme et vient à toi — accueille, réponds.", en: "Desire finally set moving, yet paced by the heart, not the sword. You carry a sincere offer toward another: a romantic proposal, a quest for the ideal, imagination becoming gesture. Feeling takes shape and comes to meet you — receive it, answer." },
      reversed: { fr: "Le même élan, mais vidé de sa substance. Le charme tourne à la belle parole, l’idéal au mirage ; l’humeur monte et retombe sans rien accomplir. Méfie-toi de l’offre qui séduit sans se tenir : au bout, la déception d’un cœur promis mais jamais livré.", en: "The same impulse, hollowed out. Charm slides into empty words, the ideal into mirage; moods rise and fall without accomplishing anything. Beware the offer that seduces without holding: at road’s end, the letdown of a heart promised yet never delivered." },
    },
  },
  "cups-13": {
    keywords: {
      upright: { fr: ["bienveillance", "compassion", "écoute", "soutien"], en: ["kindness", "compassion", "listening", "support"] },
      reversed: { fr: ["trop-plein", "dépendance", "oubli de soi", "susceptibilité"], en: ["overwhelm", "dependence", "self-neglect", "over-sensitivity"] },
    },
    meaning: {
      upright: { fr: "La maîtrise du sentiment. Tu reçois l’émotion d’autrui sans t’y dissoudre : l’eau de l’âme tenue par la souveraineté du cœur. Intuition qui guérit, compassion qui devine avant les mots. Tu comprends ce que tu portes, et de cette lueur tendre tu prends soin des autres.", en: "Mastery of feeling. You take in another’s emotion without dissolving into it: the water of the soul held by a sovereign heart. Healing intuition, compassion that senses before words are spoken. You understand what you carry, and from that tender clarity you tend to others." },
      reversed: { fr: "La même eau, mais sans digue. À force d’épouser les peines d’autrui, tu te perds : l’écoute vire à la dépendance, la tendresse au trop-plein qui noie. Émotions confuses, susceptibilité, dévouement qui s’oublie lui-même. Le cœur qui apaisait tout ne trouve plus son propre rivage.", en: "The same water, but without a bank. Wedded to everyone’s sorrows, you lose yourself: listening turns to dependence, tenderness to a flood that drowns. Muddled emotions, over-sensitivity, devotion that forgets itself. The heart that soothed everything can no longer find its own shore." },
    },
  },
  "cups-14": {
    keywords: {
      upright: { fr: ["maîtrise", "calme", "diplomatie", "sagesse du cœur"], en: ["composure", "calm", "diplomacy", "wise heart"] },
      reversed: { fr: ["instabilité", "manipulation", "froideur", "houle cachée"], en: ["volatility", "manipulation", "coldness", "hidden storm"] },
    },
    meaning: {
      upright: { fr: "La maîtrise du cœur qui gouverne sans réprimer. Tu ressens tout, la houle affective des autres comme la tienne, et pourtant tu ne débordes pas : sentiment tempéré par la raison, autorité qui console. Diplomate, tu tiens ce que d’autres laisseraient se répandre.", en: "The mastery of a heart that governs without repressing. You feel everything, others' emotional swell and your own, yet you do not spill over: feeling tempered by reason, an authority that consoles. Diplomatic, you hold what others would let run wild." },
      reversed: { fr: "La même eau, mais retournée : le calme n’est plus maîtrise, c’est un couvercle. Les humeurs macèrent sous la surface lisse et ressortent en froideur, en mots calculés, en chantage affectif. Tu manies le sentiment comme une arme, ou tu te noies dans ce que tu refuses de dire.", en: "The same water, turned: calm is no longer mastery but a lid. Moods ferment beneath the smooth surface and leak out as coldness, measured words, emotional blackmail. You wield feeling as a weapon, or drown in what you refuse to voice." },
    },
  },
  "swords-01": {
    keywords: {
      upright: { fr: ["clarté", "vérité", "idée décisive", "percée"], en: ["clarity", "truth", "decisive idea", "breakthrough"] },
      reversed: { fr: ["confusion", "désinformation", "brouillard", "idée faussée"], en: ["confusion", "misinformation", "fog", "muddled idea"] },
    },
    meaning: {
      upright: { fr: "La racine de l’Air : la faculté de trancher. Une vérité te traverse d’un coup, nette, impersonnelle, et tu vois enfin le nœud à couper. Nommer, décider, séparer le vrai du confus — une force double, qui éclaire et qui blesse.", en: "The root of Air: the power to cut. A truth runs through you in one stroke, sharp and impersonal, and at last you see the knot to sever. To name, to decide, to part the true from the muddled — a double edge that lights and wounds." },
      reversed: { fr: "La lame retournée contre l’esprit qui la porte. La clarté vire en sophisme, la vérité en arme, la décision en violence froide ou en paralysie. Tu affûtes un jugement sur du brouillard : plus tu insistes, plus tu te blesses à ta propre logique.", en: "The blade turned against the mind that wields it. Clarity curdles into sophistry, truth into a weapon, decision into cold violence or into stall. You hone a judgment on fog: the harder you press, the more your own logic cuts you." },
    },
  },
  "swords-02": {
    keywords: {
      upright: { fr: ["impasse", "choix évité", "statu quo", "tension"], en: ["stalemate", "avoided choice", "standoff", "tension"] },
      reversed: { fr: ["déblocage", "vérité révélée", "décision", "tension qui lâche"], en: ["breakthrough", "truth revealed", "decision", "release"] },
    },
    meaning: {
      upright: { fr: "L’art de ne pas trancher. Deux vérités s’équilibrent si parfaitement que choisir semble impossible — alors tu t’aveugles pour ne pas décider. Trêve fragile, achetée au prix du refus de voir : la paix d’une porte qu’on tient close.", en: "The art of not deciding. Two truths balance so evenly that choosing feels impossible — so you blind yourself rather than commit. A fragile truce bought by refusing to see: the peace of a door held shut." },
      reversed: { fr: "Le déni cède. Ce que tu tenais à distance force l’entrée : une vérité tombe, l’émotion refoulée déborde, ou tu tranches enfin — parfois trop vite, à l’aveugle. L’équilibre était un couvercle ; il saute.", en: "Denial gives way. What you kept at bay forces its way in: a truth drops, held-back feeling overflows, or you finally cut — sometimes too fast, still half-blind. The balance was a lid; it blows off." },
    },
  },
  "swords-03": {
    keywords: {
      upright: { fr: ["blessure", "trahison", "parole qui blesse", "chagrin"], en: ["heartbreak", "betrayal", "wounding words", "grief"] },
      reversed: { fr: ["guérison", "pardon", "douleur relâchée", "reconstruction"], en: ["healing", "forgiveness", "pain released", "rebuilding"] },
    },
    meaning: {
      upright: { fr: "La lucidité qui tranche : l’Air (l’esprit) porté à son point douloureux, où comprendre et souffrir ne font qu’un. Une vérité te traverse, nette, inévitable — trahison, rupture, parole qui blesse. Le chagrin ici n’est pas trouble ; il est clair, et cette clarté même est la lame.", en: "Lucidity that cuts: Air — the mind — brought to its aching point, where to understand and to suffer become one. A truth passes through you, clean and inescapable: betrayal, rupture, a wounding word. This grief is not murky; it is clear, and that very clarity is the blade." },
      reversed: { fr: "La même blessure, mais retenue : douleur qu’on refuse de nommer, rumination qui rejoue la coupure sans jamais la laisser cicatriser. Ou, au tournant, le pardon qui desserre enfin l’étreinte — non pour effacer, mais pour cesser de saigner par volonté. Choisis lequel te tient.", en: "The same wound, but withheld: pain refused a name, rumination replaying the cut yet never letting it heal. Or, at the turning, forgiveness that loosens the grip at last — not to erase, but to stop bleeding by will. Ask which one holds you." },
    },
  },
  "swords-04": {
    keywords: {
      upright: { fr: ["repos", "trêve", "récupération", "pause"], en: ["rest", "truce", "recovery", "pause"] },
      reversed: { fr: ["agitation", "épuisement", "repos refusé", "reprise forcée"], en: ["restlessness", "exhaustion", "rest refused", "forced return"] },
    },
    meaning: {
      upright: { fr: "La trêve nécessaire du mental. Tu retires ta pensée du champ de bataille pour qu’elle guérisse : ce n’est pas une défaite, c’est une convalescence choisie. L’esprit épuisé exige le silence avant de pouvoir trancher de nouveau.", en: "The mind's necessary truce. You withdraw thought from the battlefield so it may heal: not defeat, but a chosen convalescence. The exhausted spirit demands silence before it can cut clean again." },
      reversed: { fr: "Le repos refusé ou imposé. Tu te relèves avant l’heure, ou l’immobilité s’éternise en stagnation. La trêve tourne à l’engourdissement, la récupération à la fuite : l’esprit qu’on prive de silence finit par se rompre.", en: "Rest refused or imposed. You rise before your time, or stillness curdles into stagnation. Truce becomes numbness, recovery becomes flight: a mind denied its silence will finally break." },
    },
  },
  "swords-05": {
    keywords: {
      upright: { fr: ["querelle", "humiliation", "victoire amère", "rancune"], en: ["quarrel", "humiliation", "hollow victory", "resentment"] },
      reversed: { fr: ["réconciliation", "on lâche", "retrait", "pardon"], en: ["reconciliation", "letting go", "walking away", "forgiveness"] },
    },
    meaning: {
      upright: { fr: "La victoire qui coûte plus qu’elle ne rapporte. Tu as gagné en piétinant, et le triomphe a le goût de cendre : orgueil de l’Air dévoyé en mépris. Une querelle dont nul ne sort grandi — même le vainqueur repart appauvri, entouré de ponts brûlés.", en: "Victory that costs more than it yields. You won by trampling, and the triumph tastes of ash: Air’s pride soured into contempt. A quarrel no one leaves greater — even the victor walks off poorer, ringed by burned bridges." },
      reversed: { fr: "La rancune desserre enfin son étreinte. Tu poses les armes, non par faiblesse mais parce que gagner ne valait pas ce prix : retrait, pardon, réconciliation. Ou bien l’humiliation s’enkyste, honte ravalée qui empoisonne en silence.", en: "Resentment loosens its grip at last. You lay down the blades, not from weakness but because winning wasn’t worth the cost: withdrawal, forgiveness, reconciliation. Or the humiliation festers, swallowed shame that poisons in silence." },
    },
  },
  "swords-06": {
    keywords: {
      upright: { fr: ["passage", "traversée", "apaisement", "départ"], en: ["passage", "crossing", "relief", "departure"] },
      reversed: { fr: ["bagage", "retour en arrière", "enlisement", "départ manqué"], en: ["baggage", "backsliding", "stuck", "failed departure"] },
    },
    meaning: {
      upright: { fr: "La transition mélancolique mais nécessaire : tu quittes des eaux troublées pour un ailleurs plus doux. Nul triomphe, seulement le soulagement grave de qui s’éloigne enfin. Air de l’intellect refroidi, on part sans brûler ses ponts — les blessures voyagent avec toi, apaisées, pas effacées.", en: "The melancholy yet necessary transition: you leave troubled waters for something gentler. No triumph, only the grave relief of one who finally moves away. Air of a cooled intellect, you go without burning bridges — the wounds travel with you, eased, not erased." },
      reversed: { fr: "Le passage qui refuse de s’accomplir : tu voudrais fuir mais quelque chose t’amarre à la rive amère. Le mental ressasse au lieu d’avancer, le bagage émotionnel plombe chaque geste. Départ ajourné, retour du même remous — on tourne au lieu de traverser.", en: "The crossing that refuses to complete: you long to flee but something moors you to the bitter shore. The mind broods instead of advancing, emotional baggage weighs each move down. Departure deferred, the same turmoil returning — you circle instead of crossing." },
    },
  },
  "swords-07": {
    keywords: {
      upright: { fr: ["ruse", "larcin", "stratégie", "discrétion"], en: ["stealth", "theft", "strategy", "discretion"] },
      reversed: { fr: ["pris sur le fait", "aveu", "conscience", "plan éventé"], en: ["caught", "confession", "conscience", "plan exposed"] },
    },
    meaning: {
      upright: { fr: "L’intelligence qui contourne plutôt que d’affronter. Tu obtiens par la ruse, l’esquive et le secret ce que la force te refuse — stratégie solitaire, victoire partielle et jamais tranquille. L’Air ici pense trop, et se sépare des autres pour agir seul.", en: "The mind that goes around rather than through. You take by cunning, evasion and secrecy what force denies you — a lone strategy, a partial win that never sits easy. Air here thinks too much, and cuts itself off to act alone." },
      reversed: { fr: "La ruse se retourne : conscience qui parle, plan éventé, désir d’avouer et de poser le fardeau. Ou l’inverse — l’esquive devient fuite chronique, tu te dérobes même à toi. Le retour au grand jour, choisi ou subi.", en: "The cunning rebounds: conscience speaks, the plan is exposed, the urge to confess and set the burden down. Or the reverse — evasion hardens into chronic flight, dodging even yourself. A return to daylight, chosen or forced." },
    },
  },
  "swords-08": {
    keywords: {
      upright: { fr: ["piège", "entrave", "impuissance", "aveuglement"], en: ["trap", "restriction", "powerlessness", "blindfold"] },
      reversed: { fr: ["libération", "issue", "nouveau regard", "délivrance"], en: ["release", "way out", "new perspective", "freeing"] },
    },
    meaning: {
      upright: { fr: "L’enfermement mental : tu te crois piégé par des forces extérieures, alors que la geôle est bâtie de tes propres pensées. Victimisation, paralysie, refus de voir l’issue pourtant à portée. L’impuissance ici est un consentement, non une fatalité.", en: "Mental imprisonment: you believe outer forces have trapped you, yet the jail is built of your own thoughts. Victimhood, paralysis, refusal to see the exit that lies within reach. This powerlessness is consent, not fate." },
      reversed: { fr: "La même geôle, mais dont tu commences à percer l’illusion : le regard se déprend, la peur perd son autorité, une issue se nomme enfin. Délivrance qui vient de l’intérieur — ou, si elle achoppe, l’entêtement à rester ligoté par confort.", en: "The same jail, but its illusion starts to crack: perception loosens, fear loses its authority, a way out is finally named. Release that comes from within — or, if it stalls, the stubborn comfort of staying bound." },
    },
  },
  "swords-09": {
    keywords: {
      upright: { fr: ["angoisse", "cauchemar", "peur", "culpabilité"], en: ["anguish", "nightmare", "fear", "guilt"] },
      reversed: { fr: ["apaisement", "peur qui reflue", "aide", "sortie du tunnel"], en: ["relief", "fear receding", "help", "coming through"] },
    },
    meaning: {
      upright: { fr: "L’angoisse qui se dévore elle-même dans le noir. L’Air — le mental — a tourné contre toi : remords, culpabilité, catastrophe anticipée. Aucune lame ne t’a touché ; la souffrance est entièrement forgée par la pensée qui rumine et grossit ce qu’elle nomme.", en: "Anguish devouring itself in the dark. Air — the mind — has turned against you: remorse, guilt, dread rehearsed in advance. No blade has struck; the suffering is entirely forged by thought, ruminating and swelling whatever it names." },
      reversed: { fr: "L’étau nocturne se desserre. La peur, une fois dite tout haut ou traversée, perd sa masse : le cauchemar était plus vaste que le danger réel. Attention pourtant au déni — refouler l’angoisse au lieu de la nommer ne fait que la reporter à demain.", en: "The night's grip loosens. Fear, once spoken aloud or walked through, loses its bulk: the nightmare was always larger than the real danger. Beware denial, though — burying the dread instead of naming it merely postpones it to tomorrow." },
    },
  },
  "swords-10": {
    keywords: {
      upright: { fr: ["ruine", "trahison", "point bas", "fin brutale"], en: ["ruin", "betrayal", "rock bottom", "brutal ending"] },
      reversed: { fr: ["relèvement", "pire passé", "aube", "survie"], en: ["recovery", "worst is over", "dawn", "survival"] },
    },
    meaning: {
      upright: { fr: "Le fond du gouffre : une défaite si complète qu’elle libère. Le mental (l’Air) a tourné ses lames contre toi jusqu’au dernier coup, mais l’excès même clôt le cycle. Tu ne crains plus la chute, tu l’as touchée. Fin sans appel, donc paix froide.", en: "Rock bottom: a defeat so total it sets you free. The mind (Air) has turned its blades on you down to the last stroke, yet the very excess seals the cycle. You no longer dread the fall — you have hit it. An ending past appeal, and so a cold peace." },
      reversed: { fr: "Le pire refuse de mourir : tu rejoues la trahison, tu presses les lames pour vérifier qu’elles blessent encore. La convalescence stagne, dramatisée, ou l’aube pointe enfin et tu te relèves. Choisir de respirer, ou s’attarder dans les ruines.", en: "The worst refuses to die: you replay the betrayal, press the blades to check they still hurt. Recovery stalls, made a drama — or dawn finally breaks and you rise. To choose breath, or to linger in the ruin." },
    },
  },
  "swords-11": {
    keywords: {
      upright: { fr: ["esprit vif", "guetteur", "curiosité", "vigilance"], en: ["sharp mind", "watcher", "curiosity", "vigilance"] },
      reversed: { fr: ["espionnage", "ragots", "précipitation", "médisance"], en: ["snooping", "gossip", "haste", "slander"] },
    },
    meaning: {
      upright: { fr: "Le mental à l’état naissant : curiosité qui dégaine avant de savoir, vigilance qui prend tout pour signal. Tu es l’éclaireur de l’Air, avide d’idées neuves, prompt à défier ce qui bouge. Une vérité se lève au loin ; à toi de la guetter sans encore la trancher.", en: "The mind at its dawning: curiosity that draws before it knows, vigilance that reads every stir as a sign. You are Air’s scout, hungry for fresh ideas, quick to challenge whatever moves. A truth is rising far off; yours to watch, not yet to cut." },
      reversed: { fr: "La vigilance vire à l’espionnage, la curiosité au ragot. La lame juvénile tranche à vide : on colporte, on épie, on parle avant de comprendre. L’esprit vif se disperse en médisance et précipitation, et la langue devance la vérité.", en: "Watchfulness curdles into snooping, curiosity into gossip. The youthful blade cuts at nothing: prying, tattling, speaking before understanding. The keen mind scatters into slander and haste, and the tongue runs ahead of the truth." },
    },
  },
  "swords-12": {
    keywords: {
      upright: { fr: ["assaut", "franchise", "rapidité", "détermination"], en: ["charge", "bluntness", "speed", "determination"] },
      reversed: { fr: ["agressivité", "imprudence", "brusquerie", "sans suite"], en: ["aggression", "recklessness", "harshness", "no follow-through"] },
    },
    meaning: {
      upright: { fr: "L’intellect (Air) devenu pure impulsion : une idée si tranchante qu’elle se change en action avant le doute. Tu incarnes la conviction qui fonce, la franchise qui ne ménage rien. Vertu du cavalier, le courage ; son vice, croire que vouloir vite suffit à voir juste.", en: "Intellect (Air) turned to sheer impulse: an idea so sharp it becomes action before doubt can catch it. You embody conviction that charges, candor that spares nothing. The knight's virtue is courage; his vice, mistaking speed of will for clarity of sight." },
      reversed: { fr: "La même lame, mais dégainée à vide. L’élan devient agression sans cap : on tranche pour trancher, la parole coupe plus qu’elle ne défend, et rien ne tient au-delà de l’assaut. Panache qui saisit un terrain, puis le déserte.", en: "The same blade, now drawn on nothing. Drive becomes aimless aggression: cutting for the sake of cutting, words that wound more than they defend, nothing outlasting the charge. Bravado that seizes ground, then deserts it." },
    },
  },
  "swords-13": {
    keywords: {
      upright: { fr: ["lucidité", "perspicacité", "franchise", "indépendance"], en: ["clarity", "perceptiveness", "frankness", "independence"] },
      reversed: { fr: ["froideur", "jugement dur", "amertume", "sarcasme"], en: ["coldness", "harsh judgement", "bitterness", "sarcasm"] },
    },
    meaning: {
      upright: { fr: "La maturité de l’Air : une intelligence qui a payé la clarté au prix de la douleur. Tu perçois sans te raconter d’histoires, tu nommes le vrai même quand il coûte, sans quémander d’approbation. Une lucidité veuve d’illusions, tranchante mais juste.", en: "The maturity of Air: a mind that paid for its clarity in grief. You perceive without lying to yourself, you name the truth even when it costs, begging no one’s approval. A lucidity widowed of illusions, keen yet fair." },
      reversed: { fr: "La même lame retournée contre la vie. La lucidité se fige en froideur, le discernement en verdict sans appel ; l’intelligence sert désormais à isoler et à punir. Le deuil non digéré tourne en amertume, et le sarcasme remplace la vérité qu’il singe.", en: "The same blade turned against life. Clarity hardens into coldness, discernment into a verdict beyond appeal; the mind now serves to isolate and to punish. Undigested grief curdles into bitterness, and sarcasm stands in for the truth it mimics." },
    },
  },
  "swords-14": {
    keywords: {
      upright: { fr: ["intelligence", "autorité", "rigueur", "vérité"], en: ["intellect", "authority", "rigour", "truth"] },
      reversed: { fr: ["manipulation", "froideur", "abus", "rigidité"], en: ["manipulation", "coldness", "abuse", "rigidity"] },
    },
    meaning: {
      upright: { fr: "La maturité de l’Air : l’intellect devenu souverain, qui juge selon la vérité, non selon l’humeur. Tu incarnes l’autorité de la pensée claire — celle qui tranche parce qu’elle a compris, tient parole et gouverne par principe. La lame de l’esprit au service de la justice.", en: "The maturity of Air: intellect become sovereign, judging by truth rather than mood. You embody the authority of clear thought — the mind that cuts because it has understood, keeps its word, and rules by principle. The blade of the spirit in the service of justice." },
      reversed: { fr: "L’esprit tranchant qui a perdu son cœur : la logique devient arme, la règle devient cage. Tu juges sans écouter, tu manipules au nom de la raison, tu confonds froideur et lucidité. Un pouvoir qui n’argumente plus, il intimide — la vérité pliée en outil de domination.", en: "The keen mind that has lost its heart: logic turned weapon, rule turned cage. You judge without listening, manipulate in reason’s name, mistake coldness for clarity. A power that no longer argues but intimidates — truth bent into a tool of domination." },
    },
  },
  "pentacles-01": {
    keywords: {
      upright: { fr: ["aubaine", "occasion", "richesse", "prospérité"], en: ["windfall", "opportunity", "wealth", "prosperity"] },
      reversed: { fr: ["occasion manquée", "piège", "promesse creuse", "perte"], en: ["missed chance", "trap", "hollow promise", "loss"] },
    },
    meaning: {
      upright: { fr: "La semence de la Terre : un potentiel matériel offert à l’état pur, avant tout effort. Racine du monde tangible — corps, argent, métier, santé — cet As te dit qu’une fondation neuve est possible, réelle, à condition de t’incarner et de planter. La grâce précède le labeur.", en: "The seed of Earth: raw material potential offered before any toil. Root of the tangible world — body, money, craft, health — this Ace tells you a new foundation is possible, real, if you consent to embody it and plant. Grace comes before labour." },
      reversed: { fr: "La même semence, mais coupée du sol. Le potentiel se fige en avidité ou se dissipe en promesse creuse : tu confonds la valeur avec sa possession, tu serres au lieu de faire fructifier. Fondation bâtie sur du vide, ou aubaine que ta peur laisse filer.", en: "The same seed, but severed from the soil. Potential hardens into greed or scatters into hollow promise: you mistake worth for its mere possession, gripping instead of growing. A foundation built on emptiness, or a windfall your fear lets slip away." },
    },
  },
  "pentacles-02": {
    keywords: {
      upright: { fr: ["jonglage", "adaptation", "équilibre", "souplesse"], en: ["juggling", "adaptability", "balance", "flexibility"] },
      reversed: { fr: ["surcharge", "désordre", "déséquilibre", "trop de fronts"], en: ["overload", "disorder", "imbalance", "too many fronts"] },
    },
    meaning: {
      upright: { fr: "L’art de tenir deux charges à la fois sans en sacrifier aucune. Tu composes avec le flux, tu ajustes en continu ; ta stabilité n’est pas un socle mais un rythme. Souplesse joyeuse : garde les choses en mouvement et rien ne tombe.", en: "The art of holding two burdens at once without dropping either. You work with the flux, adjusting endlessly; your stability is not a foundation but a rhythm. A playful nimbleness: keep things moving and nothing falls." },
      reversed: { fr: "Le jonglage vire à la dispersion. Trop de fronts ouverts, le rythme se rompt et tu ne fais plus qu’éteindre des feux. La souplesse devient épuisement, priorités confuses ; ce que tu croyais tenir t’échappe faute de choisir.", en: "The juggling scatters into chaos. Too many fronts open, the rhythm breaks, and you do nothing but douse fires. Nimbleness turns to exhaustion, priorities blur; what you thought you held slips away for lack of choosing." },
    },
  },
  "pentacles-03": {
    keywords: {
      upright: { fr: ["savoir-faire", "collaboration", "chantier", "reconnaissance"], en: ["craft", "collaboration", "project", "recognition"] },
      reversed: { fr: ["cafouillage", "rôles flous", "travail bâclé", "egos"], en: ["muddle", "unclear roles", "sloppy work", "egos"] },
    },
    meaning: {
      upright: { fr: "Le seuil où le talent solitaire devient œuvre commune. Ta maîtrise cesse d’être promesse : elle s’éprouve au contact d’autres exigences, se laisse corriger, et gagne enfin une valeur reconnue. Terre patiente qui bâtit dans la durée, pierre après pierre, chacun à sa place.", en: "The threshold where solitary talent becomes shared work. Your mastery stops being mere promise: it is tested against others’ demands, lets itself be corrected, and finally earns recognized worth. Patient earth that builds to last, stone by stone, each one in place." },
      reversed: { fr: "Le même chantier, mais l’accord se défait. Les rôles se brouillent, l’ego réclame la gloire avant l’ouvrage, le soin cède à la hâte. Tu bâtis sans plan partagé : chaque main tire à soi et la matière ne prend plus.", en: "The same worksite, but the accord unravels. Roles blur, ego claims glory before the labor is done, care gives way to haste. You build without a shared plan: every hand pulls its own way and the material no longer holds." },
    },
  },
  "pentacles-04": {
    keywords: {
      upright: { fr: ["sécurité", "épargne", "contrôle", "possession"], en: ["security", "saving", "control", "possession"] },
      reversed: { fr: ["avarice", "possessivité", "isolement", "perte"], en: ["greed", "possessiveness", "isolation", "loss"] },
    },
    meaning: {
      upright: { fr: "La sécurité érigée en refuge, puis en prison. Tu tiens, tu épargnes, tu maîtrises — et cette stabilité de Terre devient identité : tu es ce que tu possèdes. Vrai repos du bâtisseur, mais qui commence à confondre garder et vivre.", en: "Security raised into a refuge, then into a jail. You hold, you save, you control — and this earthy stability becomes identity: you are what you own. A builder's true rest, yet one starting to confuse keeping with living." },
      reversed: { fr: "La même poigne, mais crispée : l'avarice qui fait le vide, la possessivité qui étouffe l'aimé. Fermé sur ton trésor, tu t'isoles — ou la peur de perdre provoque enfin la perte, la prise qui lâche.", en: "The same grip, now clenched: greed that hollows everything out, possessiveness that smothers the loved one. Sealed around your hoard, you cut yourself off — or the fear of loss finally causes the loss, the hold that slips." },
    },
  },
  "pentacles-05": {
    keywords: {
      upright: { fr: ["disette", "manque", "exclusion", "froid"], en: ["hardship", "want", "exclusion", "cold"] },
      reversed: { fr: ["secours", "refuge", "reprise", "espoir"], en: ["aid", "shelter", "recovery", "hope"] },
    },
    meaning: {
      upright: { fr: "Le froid du manque, mais surtout celui de l’exclusion : privation matérielle, santé, amour ou foi qui s’effondrent ensemble. Tu te vis dehors, indigne du seuil chaud — et cette honte t’aveugle sur l’aide toute proche. L’épreuve du dénuement partagé.", en: "The cold of lack, but above all of exclusion: material want, health, love or faith caving in together. You feel cast outside, unworthy of the warm threshold — and that shame blinds you to the help close at hand. The ordeal of shared destitution." },
      reversed: { fr: "L’étreinte se desserre : convalescence, recours enfin accepté, retour vers le refuge. Tu relèves les yeux et vois la porte qui existait déjà. Ou l’ombre s’installe — misère chronique, orgueil qui refuse le secours, errance sans fin dans le froid.", en: "The grip loosens: recovery, aid finally accepted, a turn back toward shelter. You lift your eyes and see the door that was always there. Or the shadow settles in — chronic misery, pride refusing all rescue, endless wandering in the cold." },
    },
  },
  "pentacles-06": {
    keywords: {
      upright: { fr: ["générosité", "partage", "mécène", "échange juste"], en: ["generosity", "sharing", "patron", "fair exchange"] },
      reversed: { fr: ["don intéressé", "dette", "déséquilibre", "dépendance"], en: ["strings attached", "debt", "imbalance", "dependence"] },
    },
    meaning: {
      upright: { fr: "L’abondance qui accepte de circuler. Tu tiens la juste mesure entre ce que tu possèdes et ce que tu partages, et le monde te répond en flux : recevoir et donner cessent d’être opposés. Grâce accordée, dette réglée, équilibre choisi.", en: "Abundance that agrees to circulate. You hold the fair measure between what you own and what you share, and the world answers in flow: receiving and giving stop being opposites. A grace granted, a debt settled, a balance chosen." },
      reversed: { fr: "Le don qui asservit. La générosité tourne au levier : on donne pour tenir, on reçoit et l’on reste à genoux. La mesure ment, les plateaux truqués. Charité d’apparat, dépendance, dette qui enchaîne au lieu de délier.", en: "The gift that binds. Generosity turns into leverage: one gives to keep a grip, one takes and stays on their knees. The measure lies, the pans are rigged. Charity as display, dependence, debt that chains instead of freeing." },
    },
  },
  "pentacles-07": {
    keywords: {
      upright: { fr: ["patience", "récolte à venir", "évaluation", "investissement"], en: ["patience", "coming harvest", "assessment", "investment"] },
      reversed: { fr: ["maigre récolte", "effort vain", "impatience", "doute"], en: ["poor harvest", "wasted effort", "impatience", "doubt"] },
    },
    meaning: {
      upright: { fr: "Le seuil où l’action cède à la maturation. Tu as investi ; maintenant tu évalues, tu laisses le temps faire son œuvre sans l’arracher. Patience active de qui mesure la valeur du semé et discerne ce qui mérite qu’on persévère.", en: "The threshold where action yields to ripening. You have invested; now you assess, letting time do its work rather than forcing it. The active patience of one who weighs what was sown and discerns what deserves persevering." },
      reversed: { fr: "L’attente devient rongement. Le doute chiffre la récolte trop tôt et la juge maigre, l’impatience veut cueillir le vert. Effort mal placé, ou refus de voir qu’un chantier ne rend rien : lâcher, ou tenir aveuglément.", en: "Waiting turns to gnawing. Doubt tallies the harvest too soon and calls it meagre; impatience wants to pick it green. Effort misplaced, or refusal to see a venture yielding nothing: to let go, or to hold on blindly." },
    },
  },
  "pentacles-08": {
    keywords: {
      upright: { fr: ["application", "métier", "constance", "apprentissage"], en: ["diligence", "craft", "consistency", "apprenticeship"] },
      reversed: { fr: ["routine vide", "perfectionnisme", "sans cœur", "bâclage"], en: ["empty routine", "perfectionism", "heartless", "sloppiness"] },
    },
    meaning: {
      upright: { fr: "La discipline patiente qui transforme le talent en maîtrise. Tu ne cherches ni éclat ni raccourci : tu répètes le geste jusqu’à ce qu’il devienne toi. Chaque effort accompli est une preuve gravée, un pas de l’apprenti vers l’artisan. Le vrai savoir se paie en constance.", en: "The patient discipline that turns talent into mastery. You seek neither dazzle nor shortcut: you repeat the gesture until it becomes you. Each finished effort is a proof engraved, one step from apprentice toward craftsman. True skill is paid for in constancy." },
      reversed: { fr: "La même constance, mais vidée de son âme. Le geste tourne à vide : perfectionnisme stérile qui lime sans jamais livrer, ou routine machinale sans cœur ni progrès. Tu confonds l’effort avec la peur d’avancer, ou tu bâcles ce qui méritait ton soin.", en: "The same constancy, hollowed of its soul. The gesture turns empty: sterile perfectionism that files forever and never delivers, or a heartless, mechanical routine without progress. You mistake effort for the fear of moving on, or you botch what deserved your care." },
    },
  },
  "pentacles-09": {
    keywords: {
      upright: { fr: ["aisance", "autonomie", "confort", "récompense"], en: ["ease", "self-reliance", "comfort", "reward"] },
      reversed: { fr: ["surmenage", "vide", "dépendance", "luxe creux"], en: ["overwork", "emptiness", "dependence", "hollow luxury"] },
    },
    meaning: {
      upright: { fr: "L’autonomie enfin conquise. Tu jouis de ce que ta discipline a bâti : une aisance qui ne doit rien à personne, un raffinement mérité. La solitude ici n’est pas manque mais souveraineté — tu te suffis, et cela a le goût du fruit mûr.", en: "Hard-won autonomy. You enjoy what your own discipline has built: an ease that owes nothing to anyone, a well-earned refinement. Solitude here is not lack but sovereignty — you are enough unto yourself, and it tastes of ripe fruit." },
      reversed: { fr: "L’aisance devenue façade. Tu tiens le décor à bout de bras, ou tu t’appuies sur ce que tu croyais avoir dépassé : l’or est là mais ne nourrit plus. Indépendance surjouée qui cache une dépendance, luxe qui sonne creux.", en: "Ease turned facade. You prop up the setting at arm's length, or lean on what you thought you had outgrown: the gold is there but no longer feeds you. Overplayed independence masking dependence, luxury that rings hollow." },
    },
  },
  "pentacles-10": {
    keywords: {
      upright: { fr: ["richesse durable", "héritage", "maisonnée", "stabilité"], en: ["lasting wealth", "legacy", "household", "stability"] },
      reversed: { fr: ["héritage disputé", "argent qui divise", "instabilité", "sursis"], en: ["disputed legacy", "money that divides", "instability", "borrowed time"] },
    },
    meaning: {
      upright: { fr: "L’aboutissement de la Terre : la richesse cesse d’être la tienne pour devenir celle d’une lignée. Tu n’es plus celui qui possède, mais le maillon qui transmet — sécurité, nom, appartenance. La réussite se mesure ici à ce qui survit à son bâtisseur.", en: "Earth's culmination: wealth stops being yours to become a bloodline's. You are no longer the one who owns but the link who hands down — security, name, belonging. Success is measured here by what outlasts the one who built it." },
      reversed: { fr: "Le même héritage, mais qui pèse au lieu de porter. L’or cesse de lier et se met à diviser : on compte les parts, on se dispute le nom, la tradition devient prison. Stabilité de façade sur des fondations que plus personne ne consolide.", en: "The same legacy, now a burden instead of a shelter. Gold stops binding and starts dividing: shares are counted, the name is fought over, tradition hardens into a cage. Surface stability atop foundations no one shores up anymore." },
    },
  },
  "pentacles-11": {
    keywords: {
      upright: { fr: ["jeune studieux", "apprenti", "occasion", "projet concret"], en: ["studious youth", "apprentice", "opportunity", "concrete plan"] },
      reversed: { fr: ["procrastination", "occasion gâchée", "stagnation", "rêverie"], en: ["procrastination", "missed chance", "stagnation", "daydreaming"] },
    },
    meaning: {
      upright: { fr: "L’élève de la Terre : tu prends au sérieux une chose concrète — un savoir, un métier, une occasion tangible. Curiosité patiente, appétit d’apprendre par la main autant que par l’esprit. La promesse n’est pas encore réalisée, mais tu la portes avec gravité, prêt à la faire fructifier pas à pas.", en: "The pupil of Earth: you take something concrete seriously — a craft, a skill, a tangible chance. Patient curiosity, a hunger to learn by hand as much as by mind. The promise is not yet fulfilled, but you hold it gravely, ready to make it grow step by step." },
      reversed: { fr: "L’étude reste rêverie. Tu contemples la promesse sans jamais y mettre les mains : projet remis, occasion qui sèche, ambition confondue avec fantasme. L’appétit d’apprendre se dévoie en dispersion, ou la peur d’essayer fige la graine dans la paume au lieu de la confier à la terre.", en: "Study curdles into daydream. You contemplate the promise without ever setting hands to it: a plan deferred, a chance left to wither, ambition mistaken for fantasy. The hunger to learn scatters, or fear of trying freezes the seed in the palm instead of trusting it to the soil." },
    },
  },
  "pentacles-12": {
    keywords: {
      upright: { fr: ["fiabilité", "constance", "sérieux", "labeur"], en: ["reliability", "consistency", "diligence", "toil"] },
      reversed: { fr: ["routine", "ennui", "stagnation", "paresse"], en: ["dull routine", "boredom", "stagnation", "laziness"] },
    },
    meaning: {
      upright: { fr: "Le seul chevalier qui n’avance pas : la vertu de rester. Tu incarnes la fiabilité faite chair — le labeur patient, la parole tenue, le sillon mené jusqu’au bout. Nulle vision fulgurante, mais une constance qui, à force, déplace la terre.", en: "The one knight who does not charge: the virtue of staying put. You embody reliability made flesh — patient toil, the kept word, the furrow seen through to its end. No dazzling vision, only a steadiness that, in time, moves earth itself." },
      reversed: { fr: "La constance privée d’horizon : elle tourne à l’ornière. Le sérieux devient inertie, la méthode se fait routine morte, et tenir bon n’est plus que s’enliser. Tu confonds fidélité et immobilité — la terre te retient au lieu de te nourrir.", en: "Constancy robbed of a horizon curdles into a rut. Diligence hardens to inertia, method decays into dead routine, and holding fast becomes merely bogging down. You mistake loyalty for paralysis — the earth clings to you instead of feeding you." },
    },
  },
  "pentacles-13": {
    keywords: {
      upright: { fr: ["sens pratique", "générosité", "ancrage", "débrouille"], en: ["practicality", "generosity", "groundedness", "resourcefulness"] },
      reversed: { fr: ["oubli de soi", "surprotection", "déséquilibre", "dispersion"], en: ["self-neglect", "smothering", "imbalance", "overstretch"] },
    },
    meaning: {
      upright: { fr: "La maturité de la Terre : nourrir sans s’épuiser, faire fructifier ce qu’on touche. Tu prends soin du concret — corps, argent, proches — avec une intelligence sensuelle et généreuse. Ta force est d’ancrer l’abondance dans le réel et de la partager.", en: "Earth come to full maturity: to nourish without draining yourself, to make whatever you touch bear fruit. You tend the concrete — body, money, kin — with a sensual, generous intelligence. Your strength is to root abundance in the real and share it." },
      reversed: { fr: "Le soin retourné contre soi. À force de porter les autres, tu te vides ; la générosité vire à la possession ou à l’oubli de ton propre sol. Trop donner devient contrôler, ou disparaître. Reprends ta part avant qu’il n’en reste rien.", en: "Care turned against itself. From carrying everyone you run dry; generosity curdles into possession, or into neglect of your own ground. Giving too much becomes controlling, or vanishing. Reclaim your share before nothing is left." },
    },
  },
  "pentacles-14": {
    keywords: {
      upright: { fr: ["prospérité", "discipline", "pourvoyeur", "réussite solide"], en: ["prosperity", "discipline", "provider", "solid success"] },
      reversed: { fr: ["avidité", "matérialisme", "entêtement", "contrôle"], en: ["greed", "materialism", "stubbornness", "control"] },
    },
    meaning: {
      upright: { fr: "La maîtrise achevée de la Terre : l’argent, le corps, le métier devenus serviteurs et non maîtres. Tu incarnes le pourvoyeur qui a bâti lentement et sait faire fructifier ; ta puissance est celle d’une racine, tranquille, généreuse, sans rien à prouver.", en: "Earth brought to full mastery: money, body, craft made into servants, never masters. You embody the provider who built slowly and knows how to grow what he holds; your power is that of a root — calm, generous, with nothing left to prove." },
      reversed: { fr: "La même solidité, mais refermée sur elle-même. La possession te possède : tu comptes au lieu de donner, tu confonds sécurité et contrôle. La réussite se fige en avidité, l’ancrage en entêtement, et le domaine devient une forteresse où tu t’enfermes.", en: "The same solidity, now curled around itself. Possession possesses you: you hoard instead of giving, you mistake control for safety. Success hardens into greed, rootedness into stubbornness, and the domain becomes a fortress you lock yourself inside." },
    },
  },
};
