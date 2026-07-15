import type { Card, CardContent, Suit } from '../lib/types';
import { MINOR_CONTENT } from './minor-content';

/**
 * Source de vérité des 78 cartes (cadre JDR solo, FR+EN).
 * Chaque « meaning » est une ambiance : on évoque la scène RWS réelle de la carte
 * pour ouvrir l'imaginaire, sans verdict ni question — le joueur y projette sa fiction.
 * Le sens s'appuie sur un socle symbolique tissé en filigrane (jamais nommé) :
 * numérologie du rang, élément de l'enseigne (voir SUIT_ELEMENTS), archétype et
 * correspondance des majeurs (voir MAJOR_CORRESPONDENCE, affichée dans la ligne meta).
 * Registre : nominal + tutoiement léger ; l'inversé = forme assombrie/bloquée/dévoyée.
 *
 * Enseignes : Bâtons (Feu) / Coupes (Eau) / Épées (Air) / Deniers (Terre).
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
        upright: { fr: "Rien n'est encore écrit. Une silhouette légère s'avance vers le vide en riant — vagabond, rêveur, âme que nul lien ne retient. L'air du matin sent le départ ; tout peut commencer, précisément parce que rien n'est décidé.", en: "Nothing is written yet. A light figure steps toward the edge, laughing — a wanderer, a dreamer, a soul no tie can hold. The morning air smells of departure; everything can begin, precisely because nothing is decided." },
        reversed: { fr: "L'élan tourne à vide : le pas léger devient fuite, le rire sonne faux. À force d'ignorer le précipice, on finit par y tomber — ou par y entraîner quelqu'un. La liberté sans amarre n'est plus qu'une dérive.", en: "The impulse spins in the void: the light step turns to flight, the laughter rings false. Ignore the cliff long enough and you fall — or drag someone over with you. Freedom with no mooring is just drift." },
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
        upright: { fr: "Une main pointe le ciel, l'autre la terre, et sur la table les quatre outils du monde attendent. Devant toi un être sûr de son geste, vif et disert — l'idée descend jusque dans l'acte sans une hésitation. Tout ce qu'il faut est déjà posé, à portée de doigts.", en: "One hand lifts to the sky, the other points to the earth, and on the table the four tools of the world lie waiting. Before you stands a figure sure of every gesture, quick and silver-tongued — the idea flows straight into the act without a falter. All that is needed already rests within reach." },
        reversed: { fr: "Le même geste, mais rien ne passe des mains aux choses. La parole file trop vite, brillante et creuse ; les outils ne servent qu'au tour de passe-passe. Derrière l'aisance, une bourse qu'on vide sans que la main se laisse voir.", en: "The same gesture, yet nothing passes from the hands into the world. The words run too fast, dazzling and hollow; the tools serve only the sleight of hand. Behind the ease, a purse being emptied while the hand stays out of sight." },
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
        upright: { fr: "Entre deux colonnes, l'une claire, l'une sombre, une femme immobile garde un rouleau à demi caché sous sa robe. Derrière elle un voile tendu ne laisse deviner que l'eau et la nuit. Elle ne dit rien — et son silence contient plus que toutes les paroles de la salle.", en: "Between two pillars, one pale, one dark, a still woman keeps a scroll half-hidden in the folds of her robe. Behind her a stretched veil lets nothing through but water and night. She says nothing — and her silence holds more than every word in the room." },
        reversed: { fr: "Le voile a viré au rideau : ce qui se tait ne protège plus, il dissimule. Un savoir gardé trop près pourrit dans l'ombre, un faux mystère t'entraîne au large. Le silence qui semblait sacré n'est plus qu'une porte close sur du vide.", en: "The veil has become a curtain: what stays unspoken no longer shelters, it conceals. Knowledge held too close festers in the dark, a false mystery draws you out of your depth. The silence that seemed sacred is now just a door shut on nothing." },
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
        upright: { fr: "Sur des coussins, au milieu d'un champ de blé mûr, une femme couronnée d'étoiles règne sans effort. Le grain ploie, la forêt bruit, un ruisseau court — tout autour d'elle pousse et déborde. Ici l'on est nourri, accueilli, tenu au chaud contre le monde.", en: "On soft cushions, amid a field of ripe wheat, a woman crowned with stars reigns without effort. The grain bows, the forest murmurs, a stream runs — all around her the world grows and spills over. Here one is fed, welcomed, held warm against the world." },
        reversed: { fr: "L'abondance se fait poigne : les bras qui nourrissent ne lâchent plus, le confort amollit jusqu'à l'engourdissement. Le champ ne donne rien qu'on n'ait déjà pris, et la douceur pèse comme une dette. Trop de soins étouffent ce qu'ils prétendent faire croître.", en: "Plenty tightens into a grip: the arms that feed refuse to let go, comfort softens into numbness. The field yields nothing that hasn't already been claimed, and the sweetness weighs like a debt. Too much tending smothers what it means to grow." },
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
        upright: { fr: "Sur un trône de pierre nue, aux accoudoirs sculptés de béliers, un homme casqué siège droit, sceptre en main. Derrière lui, des montagnes arides sous un ciel sans nuage. Rien ici ne vacille : l'ordre a un visage, une main ferme, et il tient.", en: "On a throne of bare stone, its arms carved with rams' heads, a helmed man sits upright, sceptre in hand. Behind him, arid mountains under a cloudless sky. Nothing here wavers: order has a face, a firm hand, and it holds." },
        reversed: { fr: "Le trône de pierre est devenu un mur. L'ordre ne protège plus, il écrase ; la loi ne pèse le juste que si elle le range à son avantage. La main qui devait tenir ne fait plus que serrer, et rien autour d'elle ne peut plus respirer.", en: "The stone throne has become a wall. Order no longer shelters, it crushes; the law weighs what is right only when it serves its own hand. The grip that should have held now only clenches, and nothing around it is left to breathe." },
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
        upright: { fr: "Entre deux colonnes, un prêtre couronné lève la main pour bénir, et deux disciples s'agenouillent à ses pieds. Deux clés croisées reposent devant lui — ce qu'on ouvre et ce qu'on garde. La parole descend d'en haut, patiente, ancrée, sûre de la tradition qui la porte.", en: "Between two columns, a crowned priest raises his hand in blessing, and two disciples kneel at his feet. Two crossed keys rest before him — what is opened and what is kept. The teaching comes down from above, patient, rooted, sure of the tradition that carries it." },
        reversed: { fr: "La bénédiction s'est faite chaîne. Le maître ne transmet plus, il enferme : une seule vérité, répétée jusqu'à l'obéissance, et les clés ne servent plus qu'à verrouiller. Sous la robe et les gestes appris, une bouche qui dit une chose et un cœur qui en fait une autre.", en: "The blessing has become a chain. The teacher no longer passes on, he confines: a single truth, repeated into obedience, and the keys now serve only to lock. Beneath the robe and the practised gestures, a mouth that says one thing and a heart that does another." },
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
        upright: { fr: "Sous un ange aux ailes ouvertes, un homme et une femme se tiennent nus dans la lumière, un jardin de part et d'autre. Rien ne les force, rien ne les sépare — l'entente se noue d'elle-même, bénie d'en haut. Un lien s'offre, et c'est le cœur qui choisit.", en: "Beneath an angel with open wings, a man and a woman stand bare in the light, a garden on either side. Nothing forces them, nothing divides them — the bond ties of its own accord, blessed from above. A union is offered, and it is the heart that chooses." },
        reversed: { fr: "L'ange veille encore, mais entre les deux jardins le regard s'égare. La tentation glisse un troisième visage dans la scène, la parole donnée se lézarde, deux fidélités tirent en sens contraires. Sous la lumière offerte, le lien tremble à l'endroit exact où il fut noué.", en: "The angel watches still, but between the two gardens the gaze wanders. Temptation slips a third face into the scene, the given word cracks, two loyalties pull opposite ways. Beneath the offered light, the bond trembles at the very knot that tied it." },
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
        upright: { fr: "Sur un char sculpté attelé de deux sphinx, un cocher cuirassé se tient droit, la ville derrière lui déjà loin. Il ne tient pas de rênes : c'est sa seule volonté qui mène l'attelage contraire. Rien ne dévie de la ligne qu'il a tracée dans la poussière.", en: "On a carved chariot yoked to two sphinxes, an armoured driver stands upright, the city behind him already far off. He holds no reins: sheer will alone drives the mismatched team. Nothing strays from the line he has cut through the dust." },
        reversed: { fr: "Les deux sphinx tirent enfin chacun de leur côté, et il n'y a plus de rênes à saisir. La course droite tourne à la fuite en avant, l'armure ne protège plus qu'un orgueil qui refuse de ralentir. Le char file encore, aveugle à ce qui se dresse au bout de la ligne.", en: "The two sphinxes finally pull each their own way, and there are no reins left to seize. The straight charge turns into headlong flight, the armour now shields nothing but a pride that refuses to slow. The chariot races on, blind to what rises at the end of the line." },
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
        upright: { fr: "Une femme pose ses mains sur la gueule d'un lion et la referme sans effort, la couronne de fleurs intacte sur son front. Nulle chaîne, nulle lame — seulement une chaleur patiente qui apprivoise le fauve du dedans. La bête n'est pas vaincue : elle consent, apaisée par plus fort qu'elle.", en: "A woman rests her hands upon a lion's jaws and closes them without strain, the ring of flowers unbroken on her brow. No chain, no blade — only a patient warmth that gentles the beast from within. The animal is not beaten: it yields, quieted by something stronger than force." },
        reversed: { fr: "La main tremble sur la crinière et le fauve le sent. La douceur a viré à la poigne, ou bien c'est la peur qui gouverne sous le masque du calme. La chaleur qui domptait devient un feu mal tenu — la gueule s'ouvre et griffe ce qu'elle touche.", en: "The hand shakes on the mane, and the beast can feel it. Gentleness has curdled into a grip, or fear rules behind the mask of calm. The warmth that tamed becomes a fire poorly held — the jaws open, and what they touch, they tear." },
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
        upright: { fr: "Seul au sommet enneigé, un vieillard lève une lanterne où brûle une étoile, appuyé sur son bâton. Le silence est vaste, le froid net ; la petite lumière ne montre qu'un pas de chemin à la fois. Loin du bruit du monde, celui qui s'est retiré éclaire ce que la foule ne verrait pas.", en: "Alone on the snowbound peak, an old man lifts a lantern where a star burns, leaning on his staff. The silence is vast, the cold exact; the small light reveals only one step of the path at a time. Far from the world's noise, the one who withdrew illuminates what the crowd would never see." },
        reversed: { fr: "La lanterne reste éteinte au fond de la grotte, et le vieillard tourne le dos au sentier. Le retrait qui nourrissait s'est refermé en terrier : on rumine dans le froid, on repousse la main qui monte vers soi. La solitude ne cherche plus la clarté — elle s'enferme dans son ombre.", en: "The lantern stays dark at the back of the cave, and the old man turns his back on the path. The retreat that once nourished has sealed into a burrow: one broods in the cold, refusing the hand that climbs toward it. Solitude no longer seeks the light — it locks itself inside its own shadow." },
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
        upright: { fr: "Une grande roue tourne dans le ciel, chargée de créatures qui montent et d'autres qui glissent, gardée aux quatre coins par des figures penchées sur leurs livres. Rien ne se fixe ; ce qui était en bas remonte, ce qui triomphait décline. L'instant fait basculer la donne, et l'occasion passe à portée de main.", en: "A great wheel turns against the sky, laden with creatures that rise and others that slip, watched at its four corners by figures poring over their books. Nothing holds still; what lay low climbs again, what once triumphed declines. The moment tips the balance, and opportunity swings within reach." },
        reversed: { fr: "La roue poursuit sa course, indifférente, et cette fois la pente descend. La figure au sommet glisse, l'élan d'hier se change en dérobade, et la main tendue vers l'occasion se referme sur du vide. La même mécanique qui portait tourne le dos — ce qui monte ailleurs t'échappe.", en: "The wheel keeps turning, indifferent, and this time the slope runs down. The figure at the crest slips, yesterday's momentum turns to a stumble, and the hand reaching for opportunity closes on air. The same mechanism that lifted now turns away — what rises elsewhere slips past you." },
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
        upright: { fr: "Assise entre deux colonnes, une figure tient la balance d'une main et l'épée dressée de l'autre, le regard droit qui ne cille pas. Chaque acte est posé sur un plateau, pesé sans faveur ; la lame attend, prête à trancher net. L'équilibre n'est pas tiédeur — c'est la vérité rendue, exacte au grain près.", en: "Seated between two pillars, a figure holds the scales in one hand and the upright sword in the other, gaze level and unblinking. Every deed is laid on a pan and weighed without favour; the blade waits, ready to cut clean. This balance is no lukewarm thing — it is truth returned, exact to the last grain." },
        reversed: { fr: "La balance penche parce qu'un pouce appuie sur le plateau. L'épée sert celui qui la brandit, non ce qui est juste ; le verdict s'achète, le mensonge se couvre, et le fautif ressort libre. Sous les mêmes colonnes solennelles, la mesure a été truquée.", en: "The scales tilt because a thumb presses on the pan. The sword serves the hand that wields it, not what is right; the verdict is bought, the lie is covered, and the guilty walks free. Beneath the same solemn pillars, the measure has been rigged." },
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
        upright: { fr: "Un homme pend par un pied à la potence de bois, les bras liés, la tête vers le sol — et pourtant une clarté paisible auréole son visage renversé. Rien ne bouge, rien ne se force ; le monde entier se tient suspendu, vu depuis l'autre bord. Dans ce temps arrêté, ce qu'on lâche ouvre ce qu'on n'aurait jamais vu debout.", en: "A man hangs by one foot from the wooden gallows, arms bound, head toward the earth — and yet a quiet radiance haloes his upturned face. Nothing moves, nothing is forced; the whole world hangs suspended, seen from the other side. In this stilled time, what one lets go opens what standing upright would never reveal." },
        reversed: { fr: "L'homme pend toujours, mais rien ne se retourne en lui — l'attente n'est plus qu'une corde qui serre. Le sacrifice tourne à vide, le martyre ne rachète rien, et l'immobilité qui devait révéler ne fait qu'engourdir. On paie le prix sans jamais toucher le don.", en: "The man still hangs, but nothing turns within him — the waiting is now only a rope that binds. The sacrifice runs empty, the martyrdom buys nothing back, and the stillness that should have revealed only numbs. The price is paid, yet the gift is never reached." },
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
        upright: { fr: "Un cavalier en armure noire avance sur un cheval pâle, la bannière à la rose blanche déployée ; rois et enfants tombent sur son passage, mais au loin le soleil se lève entre deux tours. La faux ne négocie pas — elle clôt ce qui devait finir. Sous la fin sèche perce déjà la promesse d'un autre matin.", en: "A rider in black armour advances on a pale horse, the white-rose banner unfurled; kings and children fall in his path, yet far off the sun rises between two towers. The scythe does not bargain — it closes what was meant to end. Beneath the bare ending, another dawn is already breaking through." },
        reversed: { fr: "Le cavalier pâle est là, mais on lui barre la route, on s'accroche à ce qui devait tomber. Ce qui est mort refuse de partir et se met à pourrir sur place, empoisonnant l'air alentour. Le passage se change en marécage — l'aube derrière les tours reste hors d'atteinte.", en: "The pale rider has come, but the road is barred to him, and hands clutch at what should have fallen. What is dead refuses to leave and begins to rot in place, fouling the air around it. The passage turns to swamp — the dawn behind the towers stays out of reach." },
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
        upright: { fr: "Un ange aux ailes déployées, un pied dans l'eau, l'autre sur la rive, verse un flot entre deux coupes sans en perdre une goutte. Le liquide passe et repasse d'un vase à l'autre en un fil qui devrait tomber et pourtant tient. Le juste dosage se fait sous les yeux — patient, sans hâte ; au loin, un chemin s'ouvre vers la lumière.", en: "A winged angel, one foot in the water, the other on the bank, pours a stream between two cups without spilling a drop. The liquid flows back and forth from vessel to vessel in a thread that should fall and yet holds. The right measure takes shape before your eyes — patient, unhurried; far off, a path opens toward the light." },
        reversed: { fr: "Le fil entre les deux coupes se brise et l'eau se répand sur la berge. Le mélange déborde ou s'assèche, l'ange verse trop d'un côté ; ce qui devait s'accorder se disperse en excès ou en manque. L'un des pieds glisse, et le fragile équilibre entre le courant et la terre cède.", en: "The thread between the two cups snaps, and the water spills across the bank. The blend overflows or runs dry, the angel pours too heavy on one side; what should have harmonised scatters into excess or want. One foot slips, and the fragile balance between current and earth gives way." },
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
        upright: { fr: "Une figure cornue trône au-dessus de deux captifs enchaînés à son socle. Les chaînes pendent lâches autour de leurs cous — assez larges pour s'ôter, jamais ôtées. On savoure le vice, le confort de la faute, le poids doux qui fixe au sol ; l'emprise a la patience froide de la pierre.", en: "A horned figure looms above two captives chained to its pedestal. The chains hang loose about their necks — wide enough to slip off, never slipped. There is a savoring of vice, the comfort of the fault, the sweet weight that pins one to the ground; the hold keeps the cold patience of stone." },
        reversed: { fr: "Une main se glisse enfin sous le collier de fer et sent qu'il ne tenait à rien. Le tentateur perd sa stature, l'habitude craque, la nuit du désir se fend d'un jour cru. Ce qui semblait indéfectible n'était qu'un nœud lâche — reste à ne pas y remettre le cou.", en: "A hand slips at last beneath the iron collar and feels that it held to nothing. The tempter loses his stature, the habit cracks, the long night of craving splits with raw daylight. What seemed unbreakable was only a loose knot — the neck need only stay out of it." },
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
        upright: { fr: "La foudre frappe l'édifice et rien ne la retient. Ce qu'on croyait solide se fend, les murs cèdent, une vérité éclate au grand jour dans le fracas. C'est brutal — mais l'éclair montre aussi ce que les murs tenaient caché.", en: "Lightning strikes the tower and nothing holds it back. What seemed solid splits, the walls give way, a truth breaks open in the roar. It is brutal — yet the flash also lays bare what the walls kept hidden." },
        reversed: { fr: "L'orage gronde sans crever. On colmate les fissures, on détourne les yeux de la lézarde qui grimpe — mais la foudre est déjà dans l'air. Retarder l'effondrement ne fait qu'en épaissir le prix.", en: "The storm growls without breaking. You patch the cracks, look away from the fissure climbing the wall — but the lightning is already in the air. Delaying the collapse only thickens its price." },
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
        upright: { fr: "Une femme nue s'agenouille au bord de l'eau et verse deux cruches, l'une dans l'étang, l'autre sur la terre. Au-dessus d'elle, une grande étoile et sept plus petites veillent dans le ciel apaisé. Après la tourmente, un havre s'ouvre : on se lave, on se soigne, on lève les yeux vers la clarté qui guide.", en: "A naked woman kneels at the water's edge, pouring from two jugs — one into the pool, one onto the earth. Above her a great star and seven smaller ones keep watch in the quieted sky. After the storm a haven opens: one washes, one heals, one lifts the eyes toward the light that guides." },
        reversed: { fr: "Les cruches versent dans le vide, l'eau se perd sans nourrir ni la terre ni l'étang. L'étoile pâlit au fond d'un ciel qui recule ; le havre n'était qu'un reflet sur l'eau noire. La foi s'effrite là même où l'on s'était penché pour boire.", en: "The jugs pour into emptiness, the water lost, feeding neither earth nor pool. The star pales in a sky that draws back; the haven was only a glimmer on black water. Faith crumbles at the very place one leaned down to drink." },
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
        upright: { fr: "Deux tours encadrent un sentier qui s'enfonce dans la nuit, entre le chien et le loup qui hurlent à l'astre pâle. Une écrevisse sort de l'eau noire, la lumière tombe en gouttes froides. Rien n'a ses vrais contours ; les peurs anciennes remontent avec la brume et l'inconnu attend au bout du chemin.", en: "Two towers frame a path sinking into the night, between the dog and the wolf howling at the pale orb. A crayfish crawls from the black water, the light falling in cold drops. Nothing holds its true shape; old fears rise with the mist, and the unknown waits at the far end of the road." },
        reversed: { fr: "La brume ne se lève pas, elle épaissit. Le hurlement couvre toute autre voix, l'écrevisse s'enfonce à nouveau, le sentier se perd entre les tours devenues murs. La peur cesse d'avertir pour submerger, et l'esprit prend les ombres pour des bêtes.", en: "The mist does not lift, it thickens. The howling drowns every other voice, the crayfish sinks back down, the path is lost between towers turned to walls. Fear stops warning and starts to drown, and the mind takes shadows for beasts." },
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
        upright: { fr: "Un enfant nu chevauche un cheval blanc sous un soleil qui remplit tout le ciel, bras ouverts, une bannière au vent. Derrière lui, un mur de tournesols se tourne vers la lumière. Plus rien ne se cache : la joie est franche, le triomphe éclatant, tout se donne à voir en plein jour.", en: "A naked child rides a white horse beneath a sun that fills the whole sky, arms open, a banner streaming. Behind, a wall of sunflowers turns toward the light. Nothing hides any longer: the joy is plain, the triumph radiant, everything given to be seen in broad daylight." },
        reversed: { fr: "Le soleil chauffe fort mais l'éclat sonne creux. Le sourire de l'enfant se fige en pose, la bannière claque pour la galerie, les tournesols se penchent sans plus rien recevoir. La lumière est là — trop crue, trop lisse — et derrière elle traîne une ombre qu'elle prétend nier.", en: "The sun burns bright but the glow rings hollow. The child's smile freezes into a pose, the banner snaps for the crowd, the sunflowers lean without receiving anything more. The light is there — too raw, too smooth — and behind it drags a shadow it pretends does not exist." },
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
        upright: { fr: "Un ange embouche sa trompette au-dessus des tombes ouvertes, et les morts se dressent, bras levés vers l'appel. Ce qui gisait enfoui remonte au grand jour ; une vérité tranche l'air, une seconde chance flambe. L'heure du bilan a sonné, et quelque chose en soi renaît de sa propre cendre.", en: "An angel sounds his trumpet above the open graves, and the dead rise, arms lifted toward the call. What lay buried comes back to the light; a truth cuts the air, a second chance flares up. The hour of reckoning has struck, and something within is reborn from its own ash." },
        reversed: { fr: "La trompette sonne et personne ne se lève. L'appel se heurte à des couvercles refermés, à des oreilles bouchées ; le passé remonte non pour absoudre mais pour accuser. Le feu qui devait purifier se change en brasier de reproches, et l'on se juge soi-même plus durement qu'aucun tribunal.", en: "The trumpet sounds and no one rises. The call meets lids shut fast, ears stopped up; the past returns not to absolve but to accuse. The fire that was meant to purify turns to a pyre of reproach, and one judges oneself more harshly than any court would." },
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
        upright: { fr: "Une figure danse au centre d'une couronne de laurier, un bâton dans chaque main, entourée aux quatre coins par l'aigle, le taureau, le lion et l'ange. La longue traversée touche à son terme ; les forces se répondent enfin, la boucle se referme et le monde entier s'ouvre alentour, patiemment mérité.", en: "A figure dances at the center of a laurel wreath, a wand in each hand, framed at the four corners by eagle, bull, lion, and angel. The long crossing nears its close; the forces answer one another at last, the circle seals, and the whole world opens around it, patiently earned." },
        reversed: { fr: "La couronne reste ouverte d'un côté, la danse tourne sans jamais boucler. Il manque toujours une pièce, un dernier pas retardé, un seuil qui ne se franchit pas. On tourne autour de l'accomplissement comme d'une porte close — assez près pour en toucher le bois, jamais la poignée.", en: "The wreath stays open on one side, the dance turning without ever closing. A piece is always missing, a last step deferred, a threshold never crossed. One circles completion as one circles a shut door — close enough to touch the wood, never the handle." },
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

// --- Élément de chaque enseigne (couche ésotérique affichée dans la ligne meta) ---
const SUIT_ELEMENTS: Record<Suit, { fr: string; en: string }> = {
  wands: { fr: 'Feu', en: 'Fire' },
  cups: { fr: 'Eau', en: 'Water' },
  swords: { fr: 'Air', en: 'Air' },
  pentacles: { fr: 'Terre', en: 'Earth' },
};

// --- Correspondance ésotérique des majeurs (Golden Dawn : élément / planète / signe) ---
const MAJOR_CORRESPONDENCE: Record<number, { fr: string; en: string }> = {
  0: { fr: 'Air', en: 'Air' }, // Le Fou
  1: { fr: 'Mercure', en: 'Mercury' }, // Le Magicien
  2: { fr: 'Lune', en: 'Moon' }, // La Grande Prêtresse
  3: { fr: 'Vénus', en: 'Venus' }, // L'Impératrice
  4: { fr: 'Bélier', en: 'Aries' }, // L'Empereur
  5: { fr: 'Taureau', en: 'Taurus' }, // Le Hiérophante
  6: { fr: 'Gémeaux', en: 'Gemini' }, // Les Amoureux
  7: { fr: 'Cancer', en: 'Cancer' }, // Le Chariot
  8: { fr: 'Lion', en: 'Leo' }, // La Force
  9: { fr: 'Vierge', en: 'Virgo' }, // L'Ermite
  10: { fr: 'Jupiter', en: 'Jupiter' }, // La Roue de Fortune
  11: { fr: 'Balance', en: 'Libra' }, // La Justice
  12: { fr: 'Eau', en: 'Water' }, // Le Pendu
  13: { fr: 'Scorpion', en: 'Scorpio' }, // La Mort
  14: { fr: 'Sagittaire', en: 'Sagittarius' }, // Tempérance
  15: { fr: 'Capricorne', en: 'Capricorn' }, // Le Diable
  16: { fr: 'Mars', en: 'Mars' }, // La Tour
  17: { fr: 'Verseau', en: 'Aquarius' }, // L'Étoile
  18: { fr: 'Poissons', en: 'Pisces' }, // La Lune
  19: { fr: 'Soleil', en: 'Sun' }, // Le Soleil
  20: { fr: 'Feu', en: 'Fire' }, // Le Jugement
  21: { fr: 'Saturne', en: 'Saturn' }, // Le Monde
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
    // Élision devant voyelle : « Roi d’Épées », mais « As de Bâtons ».
    const de = /^[aeiouyàâäéèêëîïôöûü]/i.test(s.fr) ? 'd’' : 'de ';
    return {
      id: `${suit}-${pad2(rank)}`,
      arcana: 'minor' as const,
      suit,
      number: rank,
      image: `${suit}-${pad2(rank)}.webp`,
      name: { fr: `${r.fr} ${de}${s.fr}`, en: `${r.en} of ${s.en}` },
      content: MINOR_CONTENT[`${suit}-${pad2(rank)}`] ?? null,
    };
  }),
);

export const cards: Card[] = [...majorCards, ...minorCards];

export { SUIT_NAMES, SUIT_ELEMENTS, MAJOR_CORRESPONDENCE };
