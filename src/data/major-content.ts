import type { CardContent } from '../lib/types';

/**
 * Contenu des 22 arcanes majeurs (FR+EN). Chaque « meaning » est une lecture
 * SYMBOLIQUE concise (ce que la carte signifie, pas ce que l'image montre) ;
 * le détail par élément vit dans symbols.ts. Clé = id de la carte (« major-00 »).
 * Registre : nominal + tutoiement léger ; l'inversé = charge assombrie/bloquée/dévoyée.
 */
export const MAJOR_CONTENT: Record<string, CardContent> = {
  "major-00": {
    keywords: {
      upright: { fr: ["nouveau venu", "vagabond", "esprit libre", "commencement"], en: ["newcomer", "wanderer", "free spirit", "beginning"] },
      reversed: { fr: ["imprudent", "inconscient", "fauteur de troubles", "pari fou"], en: ["reckless one", "fool", "troublemaker", "wild gamble"] },
    },
    meaning: {
      upright: { fr: "Le zéro : l’âme avant l’incarnation, pur potentiel que rien ne fixe encore. Tu es libre parce que non déterminé — l’élan de foi qui ose l’inconnu, la confiance folle que le vide te portera. Commencer vaut mieux que savoir.", en: "The zero: the soul before incarnation, pure potential nothing has yet fixed. You are free because unbound — the leap of faith that dares the unknown, the wild trust that the void will hold you. To begin matters more than to know." },
      reversed: { fr: "Le même élan se dévoie : la spontanéité vire à l’irresponsabilité, la foi à l’aveuglement. Tu refuses de regarder les conséquences et prends ce refus pour de la liberté. L’ouverture se fige en fuite ; le potentiel se dilapide au lieu de s’incarner.", en: "The same impulse goes astray: spontaneity curdles into recklessness, faith into blindness. You refuse to face consequences and mistake that refusal for freedom. Openness hardens into flight; potential is squandered instead of made flesh." },
    },
  },
  "major-01": {
    keywords: {
      upright: { fr: ["artisan habile", "meneur charismatique", "volonté", "talent"], en: ["skilled operator", "charismatic maker", "will", "talent"] },
      reversed: { fr: ["manipulateur", "charlatan", "illusionniste", "beau parleur"], en: ["manipulator", "charlatan", "trickster", "smooth talker"] },
    },
    meaning: {
      upright: { fr: "Le vouloir qui devient faire. Sous Mercure, tu deviens le conduit par où l’intention se concentre en acte : la volonté focalisée, le talent qui sait exactement quel outil saisir. Rien ne te manque ; il te reste à oser diriger la force.", en: "Will made deed. Under Mercury you become the conduit through which intention narrows into act: focused will, the talent that knows precisely which tool to seize. Nothing is lacking; what remains is the daring to direct the force." },
      reversed: { fr: "La même puissance retournée vers le paraître. Le verbe séduit mais ne crée plus rien ; le talent se dévoie en tour d’adresse, la volonté en emprise. Tu manipules, ou l’on te manipule — l’adresse sert à masquer le vide, non à féconder le réel.", en: "The same power turned toward appearance. The word seduces but births nothing; talent decays into sleight, will into control. You manipulate, or are manipulated — skill now veils an emptiness instead of quickening the real." },
    },
  },
  "major-02": {
    keywords: {
      upright: { fr: ["gardienne de secrets", "oracle", "mystère", "savoir caché"], en: ["keeper of secrets", "oracle", "mystery", "hidden lore"] },
      reversed: { fr: ["secret trouble", "silence lourd", "savoir dissimulé", "faux mystère"], en: ["murky secret", "heavy silence", "withheld knowledge", "false mystery"] },
    },
    meaning: {
      upright: { fr: "Le savoir qui ne se force pas. Tu sièges au seuil de l’inconscient, entre les contraires, gardienne d’une vérité qui ne se prend qu’en se taisant. L’intuition prime sur la parole : écoute la marée intérieure, laisse venir plutôt que d’exiger.", en: "Knowledge that cannot be forced. You sit at the threshold of the unconscious, between the opposites, keeper of a truth that yields only through silence. Intuition outranks speech: heed the inner tide, let it rise rather than demand it." },
      reversed: { fr: "Le voile devenu mur. Le silence ne protège plus, il étouffe : secret retenu qui pourrit, intuition qu’on ne s’autorise plus à entendre. Un faux mystère te séduit et te noie — ce qui semblait sacré n’est qu’une porte close sur du vide.", en: "The veil turned to wall. Silence no longer shelters, it smothers: a secret held until it festers, an intuition you no longer let yourself hear. A false mystery lures and drowns you — what seemed sacred is only a door shut on emptiness." },
    },
  },
  "major-03": {
    keywords: {
      upright: { fr: ["figure maternelle", "terre fertile", "abondance", "protectrice"], en: ["mother figure", "fertile land", "abundance", "protector"] },
      reversed: { fr: ["mère étouffante", "terre stérile", "excès", "dépendance"], en: ["smothering mother", "barren land", "excess", "dependence"] },
    },
    meaning: {
      upright: { fr: "Le pouvoir de faire naître et de faire croître. Tu es traversé par Vénus : désir, sensualité, création qui se donne sans compter. Ce qui est semé lève, ce qui est aimé s’épanouit. Fais confiance à ce qui mûrit lentement en toi.", en: "The power to conceive and to make things grow. Venus moves through you: desire, sensuality, creation that gives without counting the cost. What is sown rises, what is loved unfolds. Trust the thing ripening slowly within you." },
      reversed: { fr: "La même fécondité qui se retourne contre la vie. L’amour qui devient possession, le soin qui enchaîne, l’abondance qui gave au lieu de nourrir. Tu couves au point d’étouffer, ou tu attends d’être comblé sans jamais créer toi-même.", en: "The same fertility turned against life. Love curdled into possession, care that shackles, plenty that gluts instead of feeding. You smother by clinging, or you wait to be filled without ever creating anything yourself." },
    },
  },
  "major-04": {
    keywords: {
      upright: { fr: ["autorité", "chef", "loi", "pouvoir établi"], en: ["authority", "chief", "law", "established power"] },
      reversed: { fr: ["tyran", "rigidité", "domination", "abus de pouvoir"], en: ["tyrant", "rigidity", "domination", "abuse of power"] },
    },
    meaning: {
      upright: { fr: "Le principe paternel et la loi faite chair : structure, souveraineté, la volonté qui ordonne le chaos et le maintient. Tu poses un cadre, tu prends la responsabilité, tu réponds de ce que tu bâtis. Fermeté, protection, autorité qui se mérite par ce qu’elle tient debout.", en: "The paternal principle and law made flesh: structure, sovereignty, the will that orders chaos and holds it. You set a frame, you shoulder responsibility, you answer for what you build. Firmness, protection, authority earned by whatever it keeps standing." },
      reversed: { fr: "L’ordre dévoyé en tyrannie : rigidité qui ne protège plus mais écrase, domination, contrôle stérile. Ou l’autorité qui te manque — cadre absent, faiblesse, obéissance servile à un pouvoir qui ne mérite plus le tien. La structure devient prison.", en: "Order gone tyrannical: rigidity that no longer shelters but crushes, domination, sterile control. Or the authority you lack — no frame, weakness, servile obedience to a power that no longer deserves yours. Structure turned prison." },
    },
  },
  "major-05": {
    keywords: {
      upright: { fr: ["mentor", "maître", "tradition", "institution"], en: ["mentor", "teacher", "tradition", "institution"] },
      reversed: { fr: ["dogmatique", "gourou", "endoctrinement", "hypocrite"], en: ["dogmatist", "guru", "indoctrination", "hypocrite"] },
    },
    meaning: {
      upright: { fr: "Le pont entre le ciel et toi, incarné. Tu cherches un cadre, un maître, une parole déjà éprouvée qui te dise comment. Ici on n’invente pas seul : on s’inscrit dans une lignée, on reçoit une clé transmise. La foi patiente du Taureau, ancrée, lente, fidèle.", en: "The bridge between heaven and you, made flesh. You seek a frame, a teacher, a tested word to tell you how. Here you do not invent alone: you enter a lineage, you receive a handed-down key. The patient faith of Taurus, rooted, slow, loyal." },
      reversed: { fr: "La tradition tourne en cage. On te vend une seule vérité, l’obéissance déguisée en sagesse, la lettre qui étouffe l’esprit. Ou c’est toi qui te caches derrière les formes, docile plutôt que libre. Le maître ment, ou tu refuses de penser par toi-même.", en: "Tradition curdles into a cage. A single truth is sold to you, obedience dressed as wisdom, the letter smothering the spirit. Or it is you hiding behind the forms, dutiful rather than free. The teacher lies, or you refuse to think for yourself." },
    },
  },
  "major-06": {
    keywords: {
      upright: { fr: ["alliance", "être aimé", "lien fort", "choix du cœur"], en: ["alliance", "loved one", "strong bond", "choice of the heart"] },
      reversed: { fr: ["tentation", "trahison", "lien brisé", "loyautés opposées"], en: ["temptation", "betrayal", "broken bond", "divided loyalties"] },
    },
    meaning: {
      upright: { fr: "L’instant où le désir devient choix. Une part de toi reconnaît l’autre et s’engage sans contrainte, corps et âme accordés. Aimer n’est plus subir un penchant mais l’élire ; ton alliance se noue en pleine conscience, et quelque chose de plus haut la bénit.", en: "The moment desire becomes a choice. Something in you recognizes another and commits freely, body and soul in accord. To love is no longer to suffer an urge but to elect it; your bond ties in full awareness, and something higher blesses it." },
      reversed: { fr: "Le choix qui te fuit. Le désir se disperse, tire à deux feux, cherche ailleurs ce qu’il a promis ici. La parole donnée se lézarde, la tentation prend le visage d’une échappatoire. Tu veux tout garder et n’élis rien — l’alliance se défait faute d’être vraiment voulue.", en: "The choice that eludes you. Desire scatters, pulled two ways, seeking elsewhere what it pledged here. The given word cracks, temptation wears the face of escape. You want to keep everything and elect nothing — the bond unravels for want of being truly willed." },
    },
  },
  "major-07": {
    keywords: {
      upright: { fr: ["conquérant", "volonté de fer", "avancée", "triomphe"], en: ["conqueror", "iron will", "advance", "triumph"] },
      reversed: { fr: ["course folle", "perte de contrôle", "ambition aveugle", "déroute"], en: ["reckless charge", "loss of control", "blind ambition", "rout"] },
    },
    meaning: {
      upright: { fr: "La victoire par la volonté qui tient ensemble ce qui s’oppose. Tu avances parce que tu as choisi une direction et t’y tiens, maître de forces contraires sans les briser. Affirmation de soi, élan qui triomphe des tiraillements intérieurs.", en: "Victory through a will that holds opposites together. You advance because you chose a direction and hold to it, mastering contrary forces without breaking them. Self-assertion, momentum that triumphs over inner conflict." },
      reversed: { fr: "La même volonté, mais devenue emballement. Tu fonces sans plus savoir vers quoi, tiraillé de l’intérieur, l’armure protégeant un orgueil au lieu d’une cause. La maîtrise cède : ambition aveugle, dispersion, ou avancée qui n’est plus qu’une fuite.", en: "The same will, now runaway. You charge on without knowing toward what, pulled apart from within, the armour guarding pride instead of a cause. Mastery gives way: blind ambition, scattering, or an advance that is only flight." },
    },
  },
  "major-08": {
    keywords: {
      upright: { fr: ["force tranquille", "dompteur", "courage", "maîtrise"], en: ["quiet strength", "tamer", "courage", "mastery"] },
      reversed: { fr: ["brutalité", "bête indomptée", "peur", "faiblesse cachée"], en: ["brutality", "untamed beast", "fear", "hidden weakness"] },
    },
    meaning: {
      upright: { fr: "La force qui ne combat pas : tu apprivoises en toi le fauve — désir, colère, terreur — sans le briser. Le courage ici est patience, chaleur, consentement arraché à la bête plutôt que victoire. Tu tiens ta puissance parce que tu n’en as plus peur.", en: "The strength that does not fight: within you, you gentle the beast — desire, rage, terror — without breaking it. Courage here is patience, warmth, a consent coaxed from the animal rather than a conquest. You hold your power because you no longer fear it." },
      reversed: { fr: "La même bête, mais lâchée ou muselée de travers. Soit la peur gouverne sous un calme de façade, soit tu forces là où il fallait apaiser — poigne, brutalité, épuisement. L’instinct nié se venge : ce que tu refuses de sentir finit par te mener.", en: "The same beast, but loosed or muzzled wrong. Either fear rules behind a mask of calm, or you force where you should have soothed — grip, brutality, burnout. The denied instinct takes revenge: what you refuse to feel ends up ruling you." },
    },
  },
  "major-09": {
    keywords: {
      upright: { fr: ["ermite", "sage", "guide solitaire", "quête"], en: ["hermit", "sage", "solitary guide", "quest"] },
      reversed: { fr: ["reclus aigri", "isolement", "égaré", "aide refusée"], en: ["bitter recluse", "isolation", "lost soul", "refusal of help"] },
    },
    meaning: {
      upright: { fr: "Le retrait volontaire pour chercher la vérité en soi. Tu quittes le bruit pour écouter la voix intérieure : sagesse gagnée dans la solitude, patience, discernement. La lumière que tu portes n’éclaire qu’un pas — mais c’est le tien.", en: "A deliberate withdrawal to seek truth within. You leave the noise to hear the inner voice: wisdom earned in solitude, patience, discernment. The light you carry reveals only one step — but it is yours." },
      reversed: { fr: "La retraite qui devait nourrir se referme en fuite. Isolement stérile, rumination, orgueil du reclus qui refuse la main tendue. Tu confonds fuir le monde et te chercher, et la lampe reste éteinte.", en: "The retreat meant to nourish curdles into flight. Sterile isolation, brooding, the recluse’s pride that refuses the offered hand. You mistake fleeing the world for finding yourself, and the lamp stays dark." },
    },
  },
  "major-10": {
    keywords: {
      upright: { fr: ["coup du sort", "tournant", "chance", "destin"], en: ["twist of fate", "turning point", "luck", "destiny"] },
      reversed: { fr: ["revers de fortune", "malchance", "cycle brisé", "mauvais moment"], en: ["reversal of fortune", "bad luck", "broken cycle", "bad timing"] },
    },
    meaning: {
      upright: { fr: "Le destin reprend la main : une force plus vaste que ta volonté te soulève. Un cycle s’achève, un autre bascule, et l’occasion passe une seule fois. Ta liberté n’est pas d’arrêter la roue mais de saisir l’instant où elle t’élève.", en: "Fate takes the wheel: a force larger than your will lifts you. One cycle closes, another tips over, and opportunity passes only once. Your freedom is not to stop the turning but to seize the moment it raises you." },
      reversed: { fr: "La roue tourne encore, mais contre toi : l’élan se retire, le timing se dérobe, le cycle se grippe. Tu t’accroches au sommet d’hier au lieu de suivre le mouvement. La leçon n’est pas la malchance mais le refus de lâcher ce qui doit déjà redescendre.", en: "The wheel still turns, but against you: momentum withdraws, timing slips, the cycle jams. You cling to yesterday's summit instead of riding the movement. The lesson is not misfortune but the refusal to release what is already due to fall." },
    },
  },
  "major-11": {
    keywords: {
      upright: { fr: ["juge", "verdict", "loi", "vérité"], en: ["judge", "verdict", "law", "truth"] },
      reversed: { fr: ["injustice", "jugement corrompu", "mensonge", "impunité"], en: ["injustice", "corrupt judgement", "lie", "impunity"] },
    },
    meaning: {
      upright: { fr: "La loi de cause à effet, impersonnelle : tu récoltes exactement ce que tu as semé, sans grâce ni rancune. Vérité, responsabilité, décision lucide qui tranche entre l’essentiel et le superflu. Ce que tu as posé revient à toi, ajusté au grain près.", en: "The impersonal law of cause and effect: you reap exactly what you sowed, without mercy or grudge. Truth, accountability, the lucid decision that cuts the essential from the excess. What you set in motion returns to you, weighed to the last grain." },
      reversed: { fr: "L’équilibre faussé : tu fuis ta part, tu maquilles les faits, ou tu te juges avec une rigueur qui n’est plus justice mais châtiment. Verdict biaisé, déni, dette qu’on refuse de solder — la balance ment tant que tu appuies dessus.", en: "Balance rigged: you dodge your share, dress up the facts, or judge yourself with a harshness that is no longer justice but punishment. Skewed verdict, denial, a debt refused — the scales lie as long as your thumb rests on them." },
    },
  },
  "major-12": {
    keywords: {
      upright: { fr: ["sacrifice", "suspens", "renversement", "attente"], en: ["sacrifice", "suspension", "reversal", "waiting"] },
      reversed: { fr: ["sacrifice vain", "impasse", "martyr inutile", "blocage"], en: ["vain sacrifice", "deadlock", "pointless martyr", "stalling"] },
    },
    meaning: {
      upright: { fr: "L’arcane du renoncement fécond. Tu suspends l’action pour renverser ta perspective : ce que tu lâches volontairement devient clairvoyance. Le sacrifice n’est pas perte mais pacte — tu payes d’avance une compréhension qui ne s’obtient qu’immobile, tête à l’envers du monde.", en: "The arcanum of fertile surrender. You suspend action to overturn your perspective: what you willingly release becomes insight. The sacrifice is not loss but a pact — you pay upfront for an understanding gained only in stillness, seeing the world upside down." },
      reversed: { fr: "La même suspension, mais stérile. Tu t’accroches à l’attente comme à un rôle : martyr qui ne rachète rien, immobilité qui n’éclaire plus, seulement engourdit. Le renoncement se dévoie en résistance ; tu paies le prix sans recueillir la vision qu’il devait ouvrir.", en: "The same suspension, but barren. You cling to waiting as to a role: a martyr redeeming nothing, a stillness that no longer enlightens but numbs. Surrender curdles into resistance; you pay the price yet never gather the vision it was meant to unlock." },
    },
  },
  "major-13": {
    keywords: {
      upright: { fr: ["fin", "mort", "transformation", "passage"], en: ["ending", "death", "transformation", "passage"] },
      reversed: { fr: ["agonie", "refus de la fin", "pourrissement", "stagnation"], en: ["agony", "refusal to end", "rot", "stagnation"] },
    },
    meaning: {
      upright: { fr: "La fin qui n’attend pas ta permission. Une porte se referme pour toujours ; tu n’y peux rien, sinon la traverser. Sous Scorpion, c’est la mue impitoyable : mourir à ce que tu fus pour qu’advienne autre chose. Le deuil est le prix du passage.", en: "An ending that does not wait for your consent. A door shuts for good; nothing remains but to walk through it. Under Scorpio, this is the merciless molt: dying to who you were so something else can come. Grief is the toll of passage." },
      reversed: { fr: "La fin refusée. Tu t’accroches à ce qui a cessé de vivre, et l’attachement tourne à la putréfaction : rien ne meurt vraiment, rien ne renaît. La mue reste coincée sous la vieille peau. Ce qui devait libérer stagne et empoisonne.", en: "The ending denied. You cling to what has stopped living, and attachment curdles into rot: nothing truly dies, nothing is reborn. The molt stays trapped beneath the old skin. What should free you stagnates and poisons." },
    },
  },
  "major-14": {
    keywords: {
      upright: { fr: ["guérisseur", "médiateur", "équilibre", "alliage"], en: ["healer", "mediator", "balance", "blend"] },
      reversed: { fr: ["déséquilibre", "excès", "discorde", "mélange raté"], en: ["imbalance", "excess", "discord", "bad mix"] },
    },
    meaning: {
      upright: { fr: "L’art de mêler sans dénaturer. Tu tempères les contraires jusqu’à l’alliage juste, cette troisième chose qui n’est ni l’un ni l’autre mais leur guérison. Vertu de l’alchimiste : rien de brusque, rien de perdu ; la patience qui transmute lentement le brut en or.", en: "The art of blending without spoiling. You temper opposites until the right alloy forms — a third thing, neither one nor the other but the healing of both. The alchemist's virtue: nothing forced, nothing wasted; the patience that slowly transmutes the raw into gold." },
      reversed: { fr: "Le dosage se dérègle. Trop d’un côté, trop peu de l’autre : l’excès, l’impatience ou le mélange contre nature dénaturent ce qui devait s’accorder. La médiation vire à la discorde, l’alliage tourne au poison — tu forces au lieu de laisser mûrir.", en: "The measure goes wrong. Too much on one side, too little on the other: excess, impatience, or an unnatural mix spoils what should have harmonised. Mediation curdles into discord, the alloy turns to poison — you force where you should let things ripen." },
    },
  },
  "major-15": {
    keywords: {
      upright: { fr: ["tentateur", "emprise", "vice", "chaînes"], en: ["tempter", "hold", "vice", "chains"] },
      reversed: { fr: ["libération", "chaînes brisées", "emprise démasquée", "fuite"], en: ["release", "broken chains", "hold exposed", "escape"] },
    },
    meaning: {
      upright: { fr: "L’attachement qui se déguise en destin. Ce que tu appelles besoin est un pacte que tu renouvelles : dépendance, obsession, peur qui te tient parce que tu la nourris. La chaîne matérielle n’enferme que si tu crois n’avoir pas la clé.", en: "Attachment dressed up as fate. What you call need is a pact you keep renewing: dependency, obsession, the fear that grips you because you feed it. The material chain binds only while you believe you hold no key." },
      reversed: { fr: "L’emprise se démasque. Tu vois enfin le mécanisme du désir qui te possédait et le nom du maître, c’est toi. Libération possible mais crue : sevrage, rupture, ou la tentation de troquer une servitude contre une autre plus douce.", en: "The hold unmasks itself. You finally see the mechanism of the craving that owned you, and the master’s name is your own. Release is at hand but raw: withdrawal, rupture, or the temptation to trade one bondage for a softer one." },
    },
  },
  "major-16": {
    keywords: {
      upright: { fr: ["catastrophe", "effondrement", "révélation", "choc"], en: ["catastrophe", "collapse", "revelation", "shock"] },
      reversed: { fr: ["désastre latent", "crise qui pourrit", "chute retardée", "déni"], en: ["looming disaster", "festering crisis", "delayed fall", "denial"] },
    },
    meaning: {
      upright: { fr: "La rupture nécessaire, sous Mars : l’édifice dressé sur l’orgueil ou l’illusion s’écroule d’un coup, et le choc t’arrache une vérité que nulle prudence n’aurait délogée. Violent, oui — mais libérateur : seul l’effondrement rend à l’air ce que les murs étouffaient.", en: "The necessary rupture, under Mars: the structure raised on pride or illusion collapses at a stroke, and the shock tears loose a truth no caution could have dislodged. Violent, yes — yet freeing: only the fall gives back to the air what the walls were smothering." },
      reversed: { fr: "La même foudre, mais retenue et rongeuse. Tu pressens la faille et tu la maquilles, tu survis dans un édifice condamné plutôt que d’en sortir. Le déni ne désamorce rien : il change le fracas en lente pourriture, et fait payer plus cher la chute différée.", en: "The same lightning, but held back and gnawing. You sense the flaw and paper over it, surviving inside a doomed structure rather than leaving it. Denial defuses nothing: it turns the crash into slow rot, and makes the postponed fall cost far more." },
    },
  },
  "major-17": {
    keywords: {
      upright: { fr: ["espoir", "lumière guide", "bienfaiteur", "répit"], en: ["hope", "guiding light", "benefactor", "respite"] },
      reversed: { fr: ["espoir déçu", "mirage", "découragement", "lumière éteinte"], en: ["dashed hope", "mirage", "discouragement", "dimmed light"] },
    },
    meaning: {
      upright: { fr: "Après l’effondrement de la Tour, la grâce qui reste : une espérance calme, sans preuve, qui te suffit pour continuer. Tu te régénères en te donnant, tu guéris en t’exposant. Un fil de lumière relie ton désir intime à un dessein plus vaste ; tu as foi qu’il te guide.", en: "After the Tower’s collapse, the grace that remains: a calm hope, needing no proof, enough to carry you on. You renew yourself by giving, you heal by laying yourself bare. A thread of light ties your longing to a wider design; you trust it to guide you." },
      reversed: { fr: "La lumière est toujours là, mais tu ne t’y accordes plus : découragement, foi qui s’effrite, sentiment d’être tari. Ce que tu prends pour un phare n’est qu’un mirage flatteur, ou tu te vides sans jamais te laisser remplir. L’espoir devient fuite hors du réel.", en: "The light still shines, but you no longer tune to it: discouragement, faith crumbling, a sense of being drained dry. What you take for a beacon is only a flattering mirage, or you empty yourself and never let anything refill you. Hope curdles into flight from the real." },
    },
  },
  "major-18": {
    keywords: {
      upright: { fr: ["illusion", "peur", "nuit", "inconnu"], en: ["illusion", "fear", "night", "the unknown"] },
      reversed: { fr: ["tromperie dévoilée", "peur qui submerge", "égarement", "folie"], en: ["deception unveiled", "overwhelming fear", "losing the way", "madness"] },
    },
    meaning: {
      upright: { fr: "Le seuil de l’inconscient, là où la raison n’éclaire plus. Tu avances au clair de lune : tout est vrai à moitié, déformé par la peur et le désir. Les vieilles angoisses remontent pour être traversées, non fuies. Fie-toi à l’instinct, pas aux contours.", en: "The threshold of the unconscious, where reason no longer lights the way. You walk by moonlight: everything is half-true, warped by fear and longing. Old dread rises to be crossed, not fled. Trust instinct, not the shapes you think you see." },
      reversed: { fr: "L’illusion cède ou te submerge. Soit le voile se déchire et la tromperie apparaît, soit la peur cesse d’avertir pour te noyer : confusion, égarement, l’esprit qui prend l’ombre pour la bête. Ne décide rien tant que la brume n’a pas trouvé son issue.", en: "The illusion breaks — or drowns you. Either the veil tears and the deception shows, or fear stops warning and starts to engulf: confusion, losing the way, the mind mistaking shadow for beast. Decide nothing until the mist has found its exit." },
    },
  },
  "major-19": {
    keywords: {
      upright: { fr: ["joie", "triomphe", "clarté", "plein jour"], en: ["joy", "triumph", "clarity", "broad daylight"] },
      reversed: { fr: ["éclat terni", "succès en toc", "vanité", "retard"], en: ["tarnished glow", "hollow success", "vanity", "delay"] },
    },
    meaning: {
      upright: { fr: "La conscience revenue à sa source, après l’épreuve nocturne de La Lune. Tu ne devines plus : tu sais, tu vois, et cette clarté-là guérit. Réussite qui n’a rien à cacher, vitalité simple, l’élan neuf d’une âme qui ose enfin être vue.", en: "Consciousness returned to its source, after the Moon’s night-crossing. You no longer guess: you know, you see, and that clarity heals. Success with nothing to conceal, plain vitality, the fresh surge of a self that finally dares to be seen." },
      reversed: { fr: "La lumière ne réchauffe plus, changée en projecteur. Tu joues la joie au lieu de la vivre ; le triomphe n’est que façade, l’ego usurpe la place du soi. Rien de dramatique — un retard, un voile de vanité — mais la vérité attend d’être reçue, non exhibée.", en: "Light no longer warms, turned into a spotlight. You perform joy instead of living it; triumph is mere façade, ego usurping the place of self. Nothing tragic — a delay, a film of vanity — but truth waits to be received, not displayed." },
    },
  },
  "major-20": {
    keywords: {
      upright: { fr: ["appel", "renaissance", "révélation", "réveil"], en: ["a calling", "rebirth", "revelation", "awakening"] },
      reversed: { fr: ["jugement sévère", "passé qui ressurgit", "appel ignoré", "condamnation"], en: ["harsh judgement", "the past resurfacing", "call ignored", "condemnation"] },
    },
    meaning: {
      upright: { fr: "L’appel qui te tire d’un sommeil que tu croyais être ta vie. Une vérité te somme, et tu te reconnais enfin : le passé est soldé, tu réponds de tout et tu renais, non refait à neuf mais lavé. Nul retour en arrière possible.", en: "The call that hauls you out of a sleep you mistook for your life. A truth summons you, and at last you know yourself: the past is settled, you answer for all of it and rise again — not made new, but washed clean. No going back." },
      reversed: { fr: "L’appel résonne et rien en toi ne se lève. Tu bouches tes oreilles, tu diffères le verdict, et le feu qui devait absoudre se retourne en tribunal intime : tu te condamnes plus durement qu’aucun juge. Le passé revient accuser, jamais délivrer.", en: "The call sounds and nothing in you rises. You stop your ears, defer the verdict, and the fire meant to absolve turns inward into a private court: you condemn yourself more harshly than any judge would. The past returns to accuse, never to release." },
    },
  },
  "major-21": {
    keywords: {
      upright: { fr: ["accomplissement", "monde ouvert", "aboutissement", "plénitude"], en: ["fulfilment", "open world", "completion", "wholeness"] },
      reversed: { fr: ["inachevé", "quête sans fin", "promesse creuse", "porte close"], en: ["unfinished", "endless quest", "hollow promise", "closed door"] },
    },
    meaning: {
      upright: { fr: "L’intégration : tout ce que le voyage a dispersé revient tenu ensemble, réconcilié. Tu as payé le prix de Saturne — la maturité, la limite acceptée — et il t’ouvre la liberté véritable. Non un repos, mais une danse : agir enfin sans te trahir.", en: "Integration: all the journey scattered returns held together, reconciled. You have paid Saturn's price — maturity, the accepted limit — and it opens true freedom to you. Not rest, but a dance: to act at last without betraying yourself." },
      reversed: { fr: "L’accomplissement pressenti mais jamais habité. Tu confonds la fin avec le seuil, tu répètes le tour sans jamais l’intégrer. Une pièce manque toujours — souvent celle que tu refuses de regarder ; la clôture reste extérieure, un décor sans dedans.", en: "Fulfilment sensed but never inhabited. You mistake the finish for the threshold, repeating the round without ever integrating it. A piece is always missing — often the one you refuse to face; the closure stays external, a set with no inside." },
    },
  },
};
