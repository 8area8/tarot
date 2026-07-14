import type { CardContent } from '../lib/types';

/**
 * Contenu des 56 arcanes mineurs (cadre JDR solo, FR+EN).
 * Chaque « meaning » évoque la scène RWS de la carte pour ouvrir l'imaginaire,
 * sur un socle symbolique tissé en filigrane : numérologie du rang × élément de
 * l'enseigne (Bâtons=Feu, Coupes=Eau, Épées=Air, Deniers=Terre). Voir cards.ts.
 * Registre : nominal + tutoiement léger ; l'inversé = tournure assombrie/bloquée/dévoyée.
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
      upright: { fr: "Une main jaillit d'un nuage et brandit un bâton verdoyant, encore couvert de feuilles neuves. Rien n'est bâti, tout est promesse : un feu qui prend, un désir qui se lève, la sève d'un commencement offert à qui saura le saisir. Au loin, un château sur sa colline — le premier appel d'une aventure.", en: "A hand thrusts from a cloud, gripping a living branch still crowned with new leaves. Nothing is built yet, all is promise: a fire catching, a desire rising, the sap of a beginning held out to whoever will seize it. Far off, a castle on its hill — the first summons of an adventure." },
      reversed: { fr: "La main tend le bâton, mais aucune flamme ne prend. Les feuilles neuves fanent avant d'avoir grandi, l'élan se disperse en gestes sans lendemain. Une occasion couve encore dans la paume — refroidie, retardée, faute d'un souffle pour l'attiser.", en: "The hand offers the branch, yet no flame will catch. The new leaves wither before they can grow, the impulse scatters into gestures with no morrow. A chance still smoulders in the palm — cooled, delayed, wanting a breath to fan it." },
    },
  },
  'wands-02': {
    keywords: {
      upright: { fr: ['plan', 'horizon', 'décision', 'ambition'], en: ['planning', 'horizon', 'decision', 'ambition'] },
      reversed: { fr: ['hésitation', 'peur du saut', 'statu quo', 'indécision'], en: ['hesitation', 'fear of the leap', 'status quo', 'indecision'] },
    },
    meaning: {
      upright: { fr: "Un homme se tient sur son rempart, un globe au creux de la main, le regard perdu vers la mer et les terres qu'il n'a pas encore touchées. Un bâton reste fiché derrière lui, l'autre serré contre lui : ce qu'il possède le tient, ce qu'il désire l'appelle. Tout est prêt pour le départ — il ne manque que le pas.", en: "A man stands on his rampart, a small globe cupped in his hand, his gaze cast toward the sea and the lands he has not yet touched. One staff is fixed behind him, the other held close: what he owns anchors him, what he craves calls out. All is set for departure — only the step is missing." },
      reversed: { fr: "Le globe pèse dans la paume, mais le pied ne quitte pas la pierre. L'horizon reste un tableau qu'on admire de loin, l'ambition s'enlise dans le confort du déjà-acquis. On tourne le monde entier entre ses doigts sans jamais franchir le mur.", en: "The globe weighs in the hand, but the foot will not leave the stone. The horizon stays a picture admired from afar, ambition sinking into the comfort of what is already held. The whole world turns between the fingers, and never once is the wall crossed." },
    },
  },
  'wands-03': {
    keywords: {
      upright: { fr: ['progrès', 'renforts', 'expansion', 'premiers fruits'], en: ['progress', 'reinforcements', 'expansion', 'first fruits'] },
      reversed: { fr: ['retard', 'obstacle', 'attente vaine', 'vue courte'], en: ['delay', 'obstacle', 'fruitless wait', 'short sight'] },
    },
    meaning: {
      upright: { fr: "Une figure de dos, campée sur la hauteur, contemple les navires qui glissent vers le large. Trois bâtons plantés autour d'elle tiennent bon comme les jalons d'une entreprise déjà lancée. Les premiers efforts ont pris le vent ; ce qui est parti reviendra plus vaste, et le regard suit la promesse à l'horizon.", en: "A figure seen from behind, planted on the height, watches the ships slide toward open water. Three staves stand around them like the markers of a venture already under way. The first efforts have caught the wind; what set out will return enlarged, and the gaze follows the promise to the horizon." },
      reversed: { fr: "Les voiles s'attardent sur une mer qui ne rend rien. On scrute l'horizon jour après jour, les bâtons plantés dans un sol qui ne porte plus — l'expansion espérée bute sur un obstacle qu'on n'avait pas vu venir. L'attente s'étire et l'élan se fatigue.", en: "The sails linger on a sea that yields nothing back. Day after day the horizon is scanned, the staves rooted in ground that bears no more — the hoped-for growth snags on an obstacle unseen. The waiting draws out, and the drive grows weary." },
    },
  },
  'wands-04': {
    keywords: {
      upright: { fr: ['fête', 'foyer', 'célébration', 'étape'], en: ['celebration', 'home', 'milestone', 'stability'] },
      reversed: { fr: ['harmonie fragile', 'transition', 'soutien absent', 'instabilité'], en: ['fragile harmony', 'transition', 'missing support', 'instability'] },
    },
    meaning: {
      upright: { fr: "Quatre bâtons dressés portent une guirlande de fleurs et de fruits, comme un seuil de fête sous le grand jour. Au-delà, deux silhouettes lèvent leurs bouquets vers le château : un foyer atteint, une récolte partagée, une étape que l'on célèbre à plusieurs. La joie repose enfin sur des bases sûres.", en: "Four staves raised bear a garland of flowers and fruit, a threshold of celebration under open sky. Beyond it, two figures lift their bouquets toward the castle: a home reached, a harvest shared, a milestone marked together. Joy rests at last on solid ground." },
      reversed: { fr: "La guirlande tient encore, mais les fleurs commencent à pencher. La fête sonne un peu creux, le foyer vacille sur ses appuis, un convive manque à l'appel. L'harmonie est réelle — seulement plus fragile qu'elle n'en a l'air, et le seuil demande à être consolidé.", en: "The garland still holds, but the flowers have begun to droop. The feast rings a little hollow, the home teeters on its footing, one guest is missing from the gathering. The harmony is real — only frailer than it looks, and the threshold asks to be shored up." },
    },
  },
  'wands-05': {
    keywords: {
      upright: { fr: ['querelle', 'rivalité', 'mêlée', 'chaos'], en: ['quarrel', 'rivalry', 'skirmish', 'chaos'] },
      reversed: { fr: ['trêve', 'compromis', 'conflit évité', 'apaisement'], en: ['truce', 'compromise', 'conflict avoided', 'de-escalation'] },
    },
    meaning: {
      upright: { fr: "Cinq jeunes gens brandissent leurs bâtons dans une mêlée désordonnée, chacun frappant l'air sans viser vraiment. Ce n'est pas la guerre mais la friction : rivalités, voix qui se couvrent, ardeurs qui se heurtent faute de s'accorder. L'équilibre a cédé, et l'énergie tourne au chaos avant de trouver son camp.", en: "Five youths raise their staves in a ragged scrum, each striking the air without truly aiming. This is not war but friction: rivalries, voices talking over one another, ardours colliding for want of accord. The balance has broken, and the energy churns into chaos before it finds its side." },
      reversed: { fr: "Les bâtons s'abaissent, la mêlée se dénoue. On lâche prise, on cherche un terrain d'entente, ou l'on quitte la place avant que les coups ne portent. Le feu de la dispute retombe — trêve gagnée ou querelle esquivée, le fracas cède au silence.", en: "The staves come down, the scrum unknots. Grips loosen, common ground is sought, or the field is quit before the blows land. The fire of the quarrel dies down — a truce won or a fight sidestepped, the clamour giving way to quiet." },
    },
  },
  'wands-06': {
    keywords: {
      upright: { fr: ['victoire', 'triomphe', 'honneurs', 'reconnaissance'], en: ['victory', 'triumph', 'honours', 'recognition'] },
      reversed: { fr: ['gloire volée', 'doute', 'revers public', 'orgueil'], en: ['stolen glory', 'doubt', 'public setback', 'pride'] },
    },
    meaning: {
      upright: { fr: "Un cavalier s'avance couronné de laurier, son bâton orné d'une guirlande, porté par la clameur de ceux qui l'entourent. Après la mêlée vient le retour glorieux : l'effort reconnu, les honneurs rendus, la tête haute au milieu des acclamations. Le répit d'un triomphe que la foule confirme.", en: "A rider comes forward crowned with laurel, his staff wreathed in a garland, borne up by the cheers around him. After the fray comes the glorious return: effort acknowledged, honours paid, head held high amid the acclaim. The respite of a triumph the crowd confirms." },
      reversed: { fr: "Le laurier tient mal sur le front, et la clameur s'est tue. La victoire revient à un autre, les acclamations manquent, ou l'orgueil enfle juste avant de trébucher. Le cortège se disperse et laisse le cavalier seul avec un triomphe que nul ne vient saluer.", en: "The laurel sits poorly on the brow, and the cheering has fallen silent. The victory is claimed by another, the acclaim withheld, or pride swells just before the stumble. The procession thins and leaves the rider alone with a triumph no one comes to hail." },
    },
  },
  'wands-07': {
    keywords: {
      upright: { fr: ['défi', 'tenir tête', 'défense', 'avantage'], en: ['challenge', 'standing firm', 'defence', 'high ground'] },
      reversed: { fr: ['débordé', 'épuisement', 'recul', 'abandon'], en: ['overwhelmed', 'exhaustion', 'retreat', 'giving up'] },
    },
    meaning: {
      upright: { fr: "Un homme campé sur une éminence frappe de son bâton contre six autres qui montent à l'assaut d'en bas. Il tient le terrain haut, seul face au nombre, chaque coup défendant ce qu'il a conquis. La position est rude mais l'avantage lui reste — tant que le bras et la volonté ne faiblissent pas.", en: "A man braced on a rise beats down with his staff against six others surging up from below. He holds the high ground, one against many, each blow defending what he has won. The stance is punishing, yet the advantage stays with him — so long as arm and will do not fail." },
      reversed: { fr: "Les assaillants gagnent la pente et le bâton pèse trop lourd. Épuisé, débordé, on recule d'un pas puis d'un autre, la hauteur qui protégeait se dérobe. Tenir tête n'est plus que tenir bon, de plus en plus mal — et le terrain, coup après coup, glisse entre les doigts.", en: "The attackers gain the slope and the staff grows too heavy to lift. Worn out, overwhelmed, one gives a step and then another, the height that shielded slipping away. Standing one's ground shrinks to barely holding on — and the terrain, blow by blow, slides through the fingers." },
    },
  },
  'wands-08': {
    keywords: {
      upright: { fr: ['rapidité', 'nouvelles', 'mouvement', 'action'], en: ['speed', 'news', 'movement', 'action'] },
      reversed: { fr: ['retard', 'message perdu', 'précipitation', 'blocage'], en: ['delay', 'lost message', 'haste', 'blockage'] },
    },
    meaning: {
      upright: { fr: "Huit bâtons filent dans un ciel dégagé, tous lancés dans le même sens, sans personne pour les retenir. La campagne verte défile sous leur course, l'air siffle de vitesse. Rien ne freine : messages en chemin, choses déjà en route, un élan qui se précipite vers son but.", en: "Eight staves streak across a clear sky, all loosed the same way, with no hand to hold them back. Green country flows beneath their flight, the air whistling with speed. Nothing slows: messages in transit, things already underway, a rush aimed straight at its mark." },
      reversed: { fr: "Les traits s'emmêlent en plein vol, retombent avant terme, se croisent sans plus savoir où frapper. La hâte tourne à la bousculade — messages qui se perdent, élans qui se contrarient. Trop de vitesse d'un coup, et plus rien n'arrive où on l'attendait.", en: "The shafts tangle in mid-flight, dropping short, crossing with no sense of where to land. Haste turns to jostle — messages gone astray, impulses working against each other. Too much speed at once, and nothing lands where it was meant to." },
    },
  },
  'wands-09': {
    keywords: {
      upright: { fr: ['vigilance', 'dernier rempart', 'ténacité', 'sur ses gardes'], en: ['vigilance', 'last stand', 'resilience', 'on guard'] },
      reversed: { fr: ['épuisement', 'paranoïa', 'à bout', 'reddition'], en: ['exhaustion', 'paranoia', 'at the end', 'surrender'] },
    },
    meaning: {
      upright: { fr: "Un homme s'appuie sur son bâton, la tête bandée, derrière une palissade de huit autres plantés comme une clôture. Le corps porte les marques des assauts passés, mais le regard scrute encore l'horizon. Épuisé et sur ses gardes, il tient — une bataille de plus à soutenir avant le repos.", en: "A man leans on his staff, his head bound, behind a fence of eight others driven in like a stockade. His body carries the marks of past assaults, yet his eyes still search the ridge. Spent and wary, he holds — one more clash to weather before rest." },
      reversed: { fr: "La garde ne tient plus que par la peur. Chaque ombre devient ennemi, chaque bruit une attaque, et le corps blessé refuse d'aller plus loin. À force de tout défendre, on ne défend plus qu'une position vidée de sens.", en: "The guard holds now on fear alone. Every shadow becomes an enemy, every sound an assault, and the wounded body refuses to go on. Defend everything long enough and you defend nothing but a position drained of meaning." },
    },
  },
  'wands-10': {
    keywords: {
      upright: { fr: ['fardeau', 'surcharge', 'épuisement', 'devoir'], en: ['burden', 'overload', 'exhaustion', 'duty'] },
      reversed: { fr: ['délestage', 'effondrement', 'abandon', 'trop-plein'], en: ['offloading', 'collapse', 'giving up', 'overwhelm'] },
    },
    meaning: {
      upright: { fr: "Un homme avance courbé, serrant dix bâtons contre sa poitrine, la ville proche mais le pas écrasé. Le faisceau lui masque le chemin autant qu'il pèse sur l'échine. Tout ce qui fut entrepris s'est amassé sur une seule paire d'épaules — la charge du succès autant que celle du devoir.", en: "A man trudges bent double, ten staves clutched to his chest, the town near but his stride crushed. The bundle hides the road as much as it weighs on his spine. All that was begun has piled onto a single pair of shoulders — the load of success as much as duty." },
      reversed: { fr: "Le faisceau glisse enfin des bras — posé de plein gré, ou lâché quand les jambes cèdent. On répartit le poids, ou l'on s'effondre en pleine côte, les bâtons roulant dans la poussière. Ce qu'on portait seul depuis trop longtemps trouve son terme, d'une manière ou d'une autre.", en: "The bundle slips at last from the arms — set down by choice, or dropped when the legs give out. The weight is shared, or you buckle on the slope, staves rolling in the dust. What was carried alone too long finds its end, one way or another." },
    },
  },
  'wands-11': {
    keywords: {
      upright: { fr: ['jeune fougueux', 'messager', 'enthousiasme', 'idée neuve'], en: ['eager youth', 'messenger', 'enthusiasm', 'fresh idea'] },
      reversed: { fr: ['dispersion', 'vantardise', 'projet sans suite', 'fausse nouvelle'], en: ['scattered', 'bragging', 'no follow-through', 'false news'] },
    },
    meaning: {
      upright: { fr: "Un jeune homme se tient droit, son bâton verdoyant planté devant lui, et l'examine comme une chose vivante pleine de promesses. Les salamandres brodées sur sa tunique s'étirent au soleil du désert. Curieux, ardent, il porte une nouvelle ou une idée qui n'attend que la première flamme pour s'embraser.", en: "A young man stands upright, his sprouting staff planted before him, studying it like a living thing full of promise. Salamanders stretch across his tunic in the desert sun. Curious and ardent, he carries a piece of news or an idea waiting only for the first flame to catch." },
      reversed: { fr: "Le jeune homme parle plus qu'il n'agit : le bâton reste planté, la salamandre ne s'allume pas. Grandes annonces, feu de paille, une nouvelle qui excite un instant puis retombe. L'ardeur s'éparpille avant d'avoir rien pris.", en: "The young man talks more than he acts: the staff stays planted, the salamander never lights. Grand announcements, a flash in the pan, news that thrills for a moment then falls flat. The ardour scatters before anything takes hold." },
    },
  },
  'wands-12': {
    keywords: {
      upright: { fr: ['aventurier', 'fougue', 'passion', 'départ'], en: ['adventurer', 'dash', 'passion', 'departure'] },
      reversed: { fr: ['imprudence', 'colère', 'précipitation', 'sans suite'], en: ['recklessness', 'anger', 'haste', 'no follow-through'] },
    },
    meaning: {
      upright: { fr: "Un cavalier lance son cheval cabré, l'armure ornée de salamandres, le bâton dressé comme une torche. La poussière du désert se soulève sous les sabots, tout est mouvement et chaleur. Rien ne l'arrête : la passion prend corps, le départ est donné, l'aventure fonce droit devant.", en: "A rider spurs his rearing horse, his armour scaled with salamanders, his staff raised like a torch. Desert dust kicks up beneath the hooves, all heat and motion. Nothing stays him: passion made flesh, the leap taken, the adventure charging straight ahead." },
      reversed: { fr: "Le cheval se cabre trop haut, la charge part sans cap. L'ardeur vire à la fureur, l'audace à l'imprudence — on éperonne dans le vide, on brûle plus qu'on ne bâtit. L'élan est bien réel, mais il tourne en rond ou se jette contre les rochers.", en: "The horse rears too high, the charge sets off with no bearing. Ardour curdles into fury, boldness into folly — spurring into emptiness, burning more than building. The drive is real, but it wheels in circles or hurls itself onto the rocks." },
    },
  },
  'wands-13': {
    keywords: {
      upright: { fr: ['meneuse', 'assurance', 'charisme', 'chaleur'], en: ['leader', 'confidence', 'charisma', 'warmth'] },
      reversed: { fr: ['jalousie', 'exigence', 'susceptibilité', 'domination'], en: ['jealousy', 'demanding', 'touchiness', 'domineering'] },
    },
    meaning: {
      upright: { fr: "Une reine trône, un tournesol dans une main, son bâton fleuri dans l'autre, un chat noir couché à ses pieds. Le soleil du désert baigne la scène d'une chaleur assurée. Rayonnante et généreuse, elle tient sa flamme sans jamais la laisser dévorer — présence qui réchauffe et qu'on suit d'instinct.", en: "A queen sits enthroned, a sunflower in one hand, her flowering staff in the other, a black cat couched at her feet. Desert sun bathes the scene in steady warmth. Radiant and giving, she holds her flame without ever letting it devour — a presence that warms, one you follow by instinct." },
      reversed: { fr: "La chaleur se retourne en brûlure. Le tournesol se fane, le chat noir sort ses griffes, la générosité se fait possession jalouse. Ce qui rayonnait exige désormais qu'on l'entoure — une flamme qui étouffe autant qu'elle éclaire.", en: "The warmth turns to scorch. The sunflower wilts, the black cat bares its claws, generosity hardens into jealous grip. What once shone now demands to be circled and served — a flame that smothers as much as it lights." },
    },
  },
  'wands-14': {
    keywords: {
      upright: { fr: ['chef visionnaire', 'audace', 'leadership', 'inspiration'], en: ['visionary leader', 'boldness', 'leadership', 'inspiration'] },
      reversed: { fr: ['despote', 'impulsivité', 'intolérance', 'tyrannie'], en: ['despot', 'impulsiveness', 'intolerance', 'tyranny'] },
    },
    meaning: {
      upright: { fr: "Un roi siège de profil, le bâton fermement en main, salamandres et lions frappés sur son trône et son manteau. Le regard porte au loin, déjà sur la conquête suivante. Autorité naturelle, souffle qui entraîne — il gouverne le feu du dehors, celui qui bâtit des royaumes et allume les autres.", en: "A king sits in profile, his staff firm in hand, salamanders and lions stamped on throne and robe. His gaze reaches far off, already on the next conquest. Natural authority, a breath that carries others along — he governs the outward fire, the kind that builds kingdoms and kindles those around him." },
      reversed: { fr: "Le roi ne supporte plus la contradiction. La vision se fait décret, l'ardeur intolérance, et le feu qui bâtissait se met à consumer tout ce qui résiste. Le sceptre devient trique, le meneur un brasier qui n'éclaire que lui-même.", en: "The king no longer brooks dissent. Vision hardens into decree, ardour into intolerance, and the fire that built now consumes whatever resists it. The sceptre becomes a cudgel, the leader a blaze that lights none but himself." },
    },
  },

  // ─────────────── COUPES / CUPS (eau : émotions, liens, ambiance) ───────────────
  'cups-01': {
    keywords: {
      upright: { fr: ['amour naissant', 'émotion', 'tendresse', 'grâce'], en: ['new love', 'emotion', 'tenderness', 'grace'] },
      reversed: { fr: ['cœur fermé', 'vide', 'amour refoulé', 'froideur'], en: ['closed heart', 'emptiness', 'repressed love', 'coldness'] },
    },
    meaning: {
      upright: { fr: "Une main sortie de la nuée présente une coupe qui déborde, et cinq filets d'eau retombent sur le miroir d'un étang couvert de lys. La colombe descend y déposer l'hostie ; tout ruisselle, tendre et neuf. Le cœur s'ouvre comme une source qui n'a encore rien perdu de sa fraîcheur.", en: "A hand out of the cloud offers a brimming cup, and five streams fall back onto the mirror of a pond thick with lilies. The dove descends to lay the wafer within; everything runs over, tender and new. The heart opens like a spring that has yet to lose a drop of its freshness." },
      reversed: { fr: "La coupe se retourne, l'eau ne coule plus, la colombe s'est tue. Le cœur se referme sur sa propre source, tarie ou tenue au secret ; la tendresse demeure au-dedans, sans trouver la lèvre où se répandre. Un plein qui pèse comme un vide.", en: "The cup turns over, the water no longer flows, the dove has fallen silent. The heart closes upon its own spring, run dry or kept hidden; tenderness stays sealed within, finding no rim to spill across. A fullness that weighs like an emptiness." },
    },
  },
  'cups-02': {
    keywords: {
      upright: { fr: ['rencontre', 'attirance', 'pacte', 'réciprocité'], en: ['meeting', 'attraction', 'pact', 'reciprocity'] },
      reversed: { fr: ['rupture', 'déséquilibre', 'malentendu', 'tension'], en: ['breakup', 'imbalance', 'misunderstanding', 'tension'] },
    },
    meaning: {
      upright: { fr: "Deux êtres se font face et échangent leurs coupes ; entre eux monte le caducée surmonté du lion ailé, sceau ardent d'un accord. Les regards se répondent, les mains se tendent à égale distance. Un pacte se scelle là, dans l'espace juste où deux courants consentent à se mêler.", en: "Two figures stand face to face and exchange their cups; between them rises the caduceus crowned by a winged lion, ardent seal of an accord. Their gazes answer each other, their hands reach across an equal distance. A pact is sealed there, in the exact space where two currents consent to mingle." },
      reversed: { fr: "Les coupes ne se rejoignent plus à mi-chemin ; l'un tend la sienne trop loin, l'autre la retient. Le caducée vacille, l'accord se fêle en un malentendu que nul ne nomme. Deux courants qui voulaient se mêler tirent désormais chacun vers sa rive.", en: "The cups no longer meet halfway; one reaches too far, the other holds back. The caduceus wavers, the accord cracks into a misunderstanding no one names. Two currents that meant to merge now each pull toward their own shore." },
    },
  },
  'cups-03': {
    keywords: {
      upright: { fr: ['célébration', 'amitié', 'retrouvailles', 'joie'], en: ['celebration', 'friendship', 'reunion', 'joy'] },
      reversed: { fr: ['excès', 'ragots', 'isolement', 'lassitude'], en: ['excess', 'gossip', 'isolation', 'weariness'] },
    },
    meaning: {
      upright: { fr: "Trois femmes se tiennent en cercle et lèvent leurs coupes vers le ciel, au milieu des fruits mûrs et des premières récoltes. La danse tourne, les rires se répondent, l'abondance se partage à trois. C'est la joie qui fructifie quand elle se met en commun.", en: "Three women stand in a ring and raise their cups skyward, amid ripe fruit and the first harvest. The dance turns, laughter answers laughter, plenty shared three ways. It is joy come to fruit when it is held in common." },
      reversed: { fr: "Le cercle se défait, les coupes se vident une fois de trop. La danse se fait titubante, les rires tournent aux murmures et aux médisances. Ce qui unissait à trois se dilue dans l'excès, et l'un finit par regarder les autres de loin.", en: "The ring comes apart, the cups drain one time too many. The dance turns unsteady, the laughter curdles into whispers and gossip. What bound the three dissolves in excess, and one is left watching the others from a distance." },
    },
  },
  'cups-04': {
    keywords: {
      upright: { fr: ['morosité', 'ennui', 'lassitude', 'offre ignorée'], en: ['gloom', 'boredom', 'apathy', 'offer ignored'] },
      reversed: { fr: ['réveil', 'nouvelle envie', 'ouverture', 'regain'], en: ['awakening', 'new desire', 'opening', 'renewal'] },
    },
    meaning: {
      upright: { fr: "Un homme reste assis sous l'arbre, bras croisés, le regard buté sur les trois coupes posées devant lui. Une quatrième surgit d'un nuage, offerte, et il ne la voit même pas. L'eau s'est faite étale et grise ; l'ennui l'a muré dans une contemplation qui ne désire plus rien.", en: "A man sits beneath the tree, arms folded, his gaze fixed and sullen on the three cups set before him. A fourth appears from a cloud, offered, and he does not even see it. The water has gone flat and grey; boredom has walled him into a contemplation that wants for nothing and no one." },
      reversed: { fr: "Les bras se décroisent, le regard se lève enfin vers la coupe tendue. Ce qui semblait fade retrouve une saveur ; une envie neuve traverse l'eau dormante comme un frisson. On se surprend à tendre la main vers ce qu'on avait dédaigné.", en: "The arms unfold, the gaze lifts at last toward the offered cup. What seemed dull recovers a savor; a new desire crosses the sleeping water like a shiver. You catch yourself reaching for the very thing you had scorned." },
    },
  },
  'cups-05': {
    keywords: {
      upright: { fr: ['perte', 'chagrin', 'regret', 'deuil'], en: ['loss', 'grief', 'regret', 'mourning'] },
      reversed: { fr: ['acceptation', 'ce qui reste', 'pardon', 'on avance'], en: ['acceptance', 'what remains', 'forgiveness', 'moving on'] },
    },
    meaning: {
      upright: { fr: "Trois coupes gisent renversées sur la pierre, et le regard ne quitte pas l'eau répandue. Le chagrin colle, le dos tourné à ce qui tient encore debout. Ce qui s'est perdu ne se ramasse pas — mais derrière soi, deux coupes sont restées pleines.", en: "Three cups lie spilled on the stone, and the gaze will not leave the wasted water. Grief clings, the back turned to what still stands. What is lost cannot be gathered up — yet behind you, two cups remain full." },
      reversed: { fr: "L'eau versée finit par s'évaporer. On se retourne enfin vers les coupes intactes ; le deuil desserre son étreinte, le pardon devient possible. Le courant reprend, doucement, vers l'avant.", en: "Spilled water dries in the end. At last you turn toward the cups still whole; grief loosens its grip, forgiveness becomes possible. The current picks up again, gently, forward." },
    },
  },
  'cups-06': {
    keywords: {
      upright: { fr: ['nostalgie', 'souvenir', 'retrouvailles', 'innocence'], en: ['nostalgia', 'memory', 'reunion', 'innocence'] },
      reversed: { fr: ['nostalgie pesante', 'idéalisation', 'stagnation', 'regret'], en: ['heavy nostalgia', 'idealising', 'stagnation', 'regret'] },
    },
    meaning: {
      upright: { fr: "Dans une cour d'un autre temps, un enfant tend à un plus petit une coupe emplie de fleurs blanches. Tout baigne dans une lumière dorée et sans danger, celle des souvenirs adoucis. Une tendresse ancienne remonte, offerte comme un présent qu'on croyait perdu.", en: "In a courtyard out of another age, a child holds out to a smaller one a cup filled with white flowers. Everything is bathed in a golden, harmless light, the light of memories gone soft. An old tenderness rises up, offered like a gift once thought lost." },
      reversed: { fr: "La lumière dorée se fige et devient une cage. On reste penché sur la coupe de fleurs comme sur une image trop belle pour être vraie, et le présent attend, dehors, sans qu'on le regarde. Le souvenir embelli retient les pieds au seuil d'hier.", en: "The golden light hardens into a cage. You stay bent over the cup of flowers as over a picture too fair to be true, while the present waits outside, unlooked at. The prettied memory keeps your feet at yesterday's threshold." },
    },
  },
  'cups-07': {
    keywords: {
      upright: { fr: ['choix multiples', 'mirage', 'rêverie', 'tentation'], en: ['many choices', 'mirage', 'daydream', 'temptation'] },
      reversed: { fr: ['clarté', 'décision', 'priorités', 'retour au réel'], en: ['clarity', 'decision', 'priorities', 'back to reality'] },
    },
    meaning: {
      upright: { fr: "Devant une silhouette dressée dans l'ombre, sept coupes flottent sur la nuée, chacune chargée d'un mirage : un visage, un joyau, une couronne, un dragon, un linceul voilé. Tout brille, tout appelle, et rien n'a de poids. La rêverie ouvre mille chemins qui ne tiennent qu'à la fumée.", en: "Before a figure standing in shadow, seven cups float upon the cloud, each freighted with a mirage: a face, a jewel, a crown, a dragon, a veiled shroud. Everything glitters, everything calls, and nothing holds any weight. Reverie opens a thousand paths spun from nothing but smoke." },
      reversed: { fr: "La nuée se dissipe et les coupes s'effacent une à une ; il n'en reste qu'une, tangible dans la main. Le regard cesse d'errer parmi les mirages et se pose sur ce qui existe vraiment. Choisir, c'est laisser mourir les fantômes qu'on ne prendra pas.", en: "The cloud thins and the cups fade one by one; a single one remains, solid in the hand. The gaze stops wandering among the mirages and settles on what truly exists. To choose is to let the phantoms you will not take fall away." },
    },
  },
  'cups-08': {
    keywords: {
      upright: { fr: ['départ', 'quête', 'renoncement', 'tourner la page'], en: ['departure', 'quest', 'letting go', 'turning the page'] },
      reversed: { fr: ['peur de partir', 'stagnation', 'allers-retours', 'indécision'], en: ['fear of leaving', 'stagnation', 'back and forth', 'indecision'] },
    },
    meaning: {
      upright: { fr: "Sous une lune voilée, une silhouette encapuchonnée s'éloigne à travers le marécage, appuyée sur son bâton. Derrière elle, huit coupes restent dressées, pleines — et pourtant quelque chose y manque. Le pas quitte l'eau stagnante vers les hauteurs, en quête d'un ailleurs plus vrai que ce qui brillait ici.", en: "Beneath a veiled moon, a cloaked figure trudges off across the marsh, leaning on a staff. Behind, eight cups still stand full — and yet something in them is missing. The step leaves the stagnant water for the heights, seeking a truth deeper than all that shone here." },
      reversed: { fr: "Le voyageur revient sur ses pas, ou n'ose plus les faire. Les coupes le retiennent, tièdes et familières, tandis que la lune décroît sur un marécage où l'on tourne en rond. Rester par peur du départ, et l'eau immobile qui se met à croupir.", en: "The traveller doubles back, or no longer dares to move at all. The cups hold him, lukewarm and familiar, while the moon wanes over a marsh that keeps folding into the same circle. Staying for fear of leaving — and the still water begins to rot." },
    },
  },
  'cups-09': {
    keywords: {
      upright: { fr: ['contentement', 'vœu exaucé', 'plaisir', 'satisfaction'], en: ['contentment', 'wish granted', 'pleasure', 'satisfaction'] },
      reversed: { fr: ['suffisance', 'plaisir vide', 'insatiable', 'vanité'], en: ['smugness', 'hollow pleasure', 'never enough', 'vanity'] },
    },
    meaning: {
      upright: { fr: "Un homme trône bras croisés devant une rangée de neuf coupes dorées, alignées sur une étoffe bleue comme un vœu déjà exaucé. Le visage est comblé, le ventre plein, l'instant se savoure sans hâte. Presque tout est là — le contentement tranquille de qui a obtenu ce qu'il désirait.", en: "A man sits arms folded before a curved shelf of nine golden cups, ranged on blue cloth like a wish already granted. The face is sated, the belly full, the moment savoured without haste. Nearly everything is here — the quiet contentment of one who got what he wanted." },
      reversed: { fr: "Le sourire du festin se fige en suffisance. Les neuf coupes brillent toujours, mais leur or ne rassasie plus : on en veut une dixième, puis une autre, sans jamais toucher le fond du désir. Le plaisir tourne à vide, et la satisfaction sonne creux.", en: "The banquet's smile stiffens into smugness. The nine cups still gleam, but their gold no longer fills: one more is wanted, then another, the hunger never reaching bottom. The pleasure spins empty, and satisfaction rings hollow." },
    },
  },
  'cups-10': {
    keywords: {
      upright: { fr: ['plénitude', 'foyer', 'harmonie', 'bonheur'], en: ['fulfilment', 'home', 'harmony', 'happiness'] },
      reversed: { fr: ['façade', 'discorde', 'tensions cachées', 'désunion'], en: ['facade', 'discord', 'hidden tension', 'disunity'] },
    },
    meaning: {
      upright: { fr: "Un arc-en-ciel de dix coupes se déploie dans le ciel au-dessus d'un couple enlacé, tandis que deux enfants dansent près de la rivière et de la maison. C'est le comble de la joie partagée : un foyer, un lien accompli, un bonheur simple qui déborde et rayonne sur tout le paysage.", en: "A rainbow of ten cups arches across the sky above an embracing couple, while two children dance by the river and the house. This is joy brimming over: a home, a bond fulfilled, a simple happiness that spills out and lights the whole landscape." },
      reversed: { fr: "L'arc-en-ciel pâlit au-dessus d'un foyer qui joue la scène du bonheur. Les gestes tendres sont encore là, mais une fêlure court sous le vernis — regards qui s'évitent, silences trop longs. La belle image tient debout ; c'est la joie, dessous, qui s'est retirée.", en: "The rainbow fades over a home performing its own happiness. The tender gestures remain, but a crack runs beneath the varnish — eyes that avoid each other, silences held too long. The pretty picture stands; it is the joy underneath that has withdrawn." },
    },
  },
  'cups-11': {
    keywords: {
      upright: { fr: ['âme sensible', 'messager tendre', 'rêverie', 'invitation'], en: ['sensitive soul', 'tender messenger', 'reverie', 'invitation'] },
      reversed: { fr: ['caprice', 'humeur', 'susceptibilité', 'immaturité'], en: ['whim', 'moodiness', 'touchiness', 'immaturity'] },
    },
    meaning: {
      upright: { fr: "Un jeune homme aux habits fleuris contemple une coupe d'où surgit un poisson, sans s'étonner de le voir lui parler. L'imaginaire déborde du réel, tendre et curieux ; c'est un messager du cœur, une invitation neuve venue de l'eau — la promesse d'une émotion qui commence à peine.", en: "A youth in flowered clothes gazes at a cup from which a fish rises, unsurprised to find it speaks to him. Imagination overflows the real, tender and curious; a messenger of the heart, a fresh invitation risen from the water — the promise of a feeling barely begun." },
      reversed: { fr: "Le poisson dans la coupe n'amuse plus : il boude, se vexe, se noie dans son propre sentiment. La sensibilité tourne au caprice, l'humeur vire sans raison, et l'imaginaire qui devait s'ouvrir se replie sur une blessure minuscule qu'il caresse.", en: "The fish in the cup delights no longer: it sulks, takes offence, drowns in its own feeling. Sensitivity curdles into whim, moods shift for no reason, and the imagination that should have opened folds back onto a tiny wound it keeps stroking." },
    },
  },
  'cups-12': {
    keywords: {
      upright: { fr: ['romantique', 'charmeur', 'proposition', 'idéal'], en: ['romantic', 'charmer', 'proposal', 'ideal'] },
      reversed: { fr: ['belles paroles', 'humeur', 'déception', 'mirage'], en: ['empty words', 'moodiness', 'disappointment', 'mirage'] },
    },
    meaning: {
      upright: { fr: "Un cavalier s'avance au pas, sa monture calme, tendant devant lui une coupe comme on offre son cœur. Rien de guerrier dans cet élan : c'est le désir mis en mouvement, le romantique en quête, une proposition sincère portée jusqu'à l'autre, casque et talons ornés d'ailes.", en: "A rider comes forward at a walk, his mount unhurried, holding out a cup the way one offers a heart. Nothing warlike in the advance: desire set in motion, the romantic on his quest, a sincere proposal carried to another, helm and heels feathered with wings." },
      reversed: { fr: "La coupe tendue ne contient que de belles paroles. Le cavalier séduit, promet, s'enflamme — puis le cheval piétine, l'ardeur retombe et rien ne suit. Sous le charme, un mirage : l'offre du cœur se révèle vide, la déception tapie au bout du chemin.", en: "The offered cup holds nothing but fine words. The rider charms, promises, catches fire — then the horse stalls, the ardour cools and nothing follows. Beneath the charm, a mirage: the heart's offer proves empty, disappointment lying in wait at the road's end." },
    },
  },
  'cups-13': {
    keywords: {
      upright: { fr: ['bienveillance', 'compassion', 'écoute', 'soutien'], en: ['kindness', 'compassion', 'listening', 'support'] },
      reversed: { fr: ['trop-plein', 'dépendance', 'oubli de soi', 'susceptibilité'], en: ['overwhelm', 'dependence', 'self-neglect', 'over-sensitivity'] },
    },
    meaning: {
      upright: { fr: "Sur un trône au bord de l'eau, une femme contemple une coupe ouvragée qu'elle tient à deux mains, absorbée, tendre. Elle règne sur le sentiment sans jamais s'y noyer : écoute, compassion, une présence qui apaise. Ce qu'elle porte, elle le comprend — et de là, elle veille sur les autres.", en: "On a throne at the water's edge, a woman contemplates an ornate cup she cradles in both hands, absorbed and tender. She reigns over feeling without ever drowning in it: listening, compassion, a presence that soothes. What she holds, she understands — and from it she watches over others." },
      reversed: { fr: "Le trône glisse trop près de la marée, et la coupe déborde sur celle qui la tient. À force de porter les peines d'autrui, elle s'oublie ; l'écoute devient dépendance, la tendresse un trop-plein qui submerge. Le cœur qui apaisait tout ne trouve plus le rivage.", en: "The throne slides too close to the tide, and the cup overflows onto the one who holds it. Carrying every other grief, she loses herself; listening turns to dependence, tenderness to a flood that overwhelms. The heart that soothed all can no longer find the shore." },
    },
  },
  'cups-14': {
    keywords: {
      upright: { fr: ['maîtrise', 'calme', 'diplomatie', 'sagesse du cœur'], en: ['composure', 'calm', 'diplomacy', 'wise heart'] },
      reversed: { fr: ['instabilité', 'manipulation', 'froideur', 'houle cachée'], en: ['volatility', 'manipulation', 'coldness', 'hidden storm'] },
    },
    meaning: {
      upright: { fr: "Un roi trône sur un socle de pierre au milieu d'une mer houleuse, coupe en main, parfaitement calme tandis que les vagues se dressent autour de lui. Il ne nie pas la tempête affective : il la gouverne. Diplomate, égal à lui-même, il tient d'une main sûre ce que d'autres laisseraient déborder.", en: "A king sits enthroned on a stone dais amid a heaving sea, cup in hand, perfectly calm as the waves rear around him. He does not deny the emotional storm: he governs it. Diplomatic, unshaken, he holds with a steady hand what others would let spill over." },
      reversed: { fr: "Le calme du roi n'est plus qu'un masque posé sur la houle. Sous la surface lisse, les humeurs montent, et la maîtrise se retourne en arme : mots calculés, froideur qui blesse, sentiments retenus pour mieux les manier. La mer, longtemps contenue, cherche par où déborder.", en: "The king's calm is now only a mask laid over the swell. Beneath the smooth surface the moods rise, and mastery turns into a weapon: measured words, a wounding coldness, feeling held back the better to wield it. The sea, long contained, hunts for a way to break free." },
    },
  },

  // ─────────────── ÉPÉES / SWORDS (air : esprit, conflit, vérité) ───────────────
  'swords-01': {
    keywords: {
      upright: { fr: ['clarté', 'vérité', 'idée décisive', 'percée'], en: ['clarity', 'truth', 'decisive idea', 'breakthrough'] },
      reversed: { fr: ['confusion', 'désinformation', 'brouillard', 'idée faussée'], en: ['confusion', 'misinformation', 'fog', 'muddled idea'] },
    },
    meaning: {
      upright: { fr: "Une main jaillie d'un nuage brandit l'épée droite vers le ciel, la pointe ceinte d'une couronne et de palmes. Rien ne l'émousse : une vérité s'ouvre d'un seul coup, une idée décisive fend le brouillard et l'esprit y voit enfin net. La lame est neuve, tranchante, offerte au premier qui saura la saisir.", en: "A hand thrust from a cloud lifts the blade straight to the sky, its point crowned with laurel and palm. Nothing dulls it: a truth opens in a single stroke, a decisive idea splits the fog, and the mind at last sees clear. The edge is new, keen, held out to whoever dares take it." },
      reversed: { fr: "La lame vacille dans la nuée, la pointe embrouillée de brume au lieu de la trancher. Ce qui devait éclairer trouble : une parole faussée, une pensée qui tourne mal, une clarté qu'on retourne comme une arme contre soi. Le fil est là, mais l'esprit ne sait plus où frapper.", en: "The blade wavers in the cloud, its point snarled in mist instead of cutting it. What should light the way only muddies: twisted words, a thought gone sour, a clarity turned like a weapon against oneself. The edge is there, but the mind no longer knows where to strike." },
    },
  },
  'swords-02': {
    keywords: {
      upright: { fr: ['impasse', 'choix évité', 'statu quo', 'tension'], en: ['stalemate', 'avoided choice', 'standoff', 'tension'] },
      reversed: { fr: ['déblocage', 'vérité révélée', 'décision', 'tension qui lâche'], en: ['breakthrough', 'truth revealed', 'decision', 'release'] },
    },
    meaning: {
      upright: { fr: "Assise au bord de l'eau calme, les yeux bandés, une silhouette croise deux épées sur sa poitrine, immobile sous un mince croissant de lune. Deux forces se neutralisent et le choix reste suspendu, tenu à distance par le bandeau qu'on refuse d'ôter. L'équilibre tient — mais c'est l'équilibre d'un bras qui n'ose plus bouger.", en: "Seated by still water, blindfolded, a figure holds two swords crossed over the chest, motionless beneath a thin crescent moon. Two forces cancel each other out, the choice left hanging, kept at arm's length by a blindfold no one will lift. The balance holds — but it is the balance of an arm that no longer dares move." },
      reversed: { fr: "Le bandeau glisse, les bras se dénouent, et la mer derrière cesse d'être calme. Ce qu'on tenait à distance revient de plein fouet : une vérité tombe, on tranche enfin, ou tout bascule d'un coup dans le fracas. La tension trop longtemps portée cherche partout où lâcher.", en: "The blindfold slips, the arms come apart, and the sea behind ceases to be calm. What was held at bay comes flooding back: a truth drops, a choice is finally cut, or everything tips at once into noise. Tension carried too long feels everywhere for a place to break." },
    },
  },
  'swords-03': {
    keywords: {
      upright: { fr: ['blessure', 'trahison', 'parole qui blesse', 'chagrin'], en: ['heartbreak', 'betrayal', 'wounding words', 'grief'] },
      reversed: { fr: ['guérison', 'pardon', 'douleur relâchée', 'reconstruction'], en: ['healing', 'forgiveness', 'pain released', 'rebuilding'] },
    },
    meaning: {
      upright: { fr: "Trois lames transpercent un cœur rouge, dressé seul sous un ciel gorgé de pluie. La douleur est nette, sans détour : une trahison, une parole qui traverse de part en part, un chagrin qu'aucun voile ne masque. L'orage lave et ne console pas ; il ne reste que la vérité, crue, plantée en plein centre.", en: "Three blades pierce a single red heart, upright beneath a sky heavy with rain. The pain is clean, without detour: a betrayal, a word driven clear through, a grief no veil can soften. The storm washes but does not comfort; only the truth remains, raw, lodged dead centre." },
      reversed: { fr: "La pluie faiblit, et l'une des lames commence à céder du terrain. La plaie reste, mais on la laisse enfin respirer : la douleur se relâche, le pardon cherche son chemin, le cœur apprend lentement à porter ce qui l'a percé. Rien n'est effacé — quelque chose, pourtant, se referme.", en: "The rain thins, and one of the blades begins to give ground. The wound stays, but at last it is let breathe: the pain loosens, forgiveness feels for its path, the heart slowly learns to carry what pierced it. Nothing is erased — yet something, at last, begins to close." },
    },
  },
  'swords-04': {
    keywords: {
      upright: { fr: ['repos', 'trêve', 'récupération', 'pause'], en: ['rest', 'truce', 'recovery', 'pause'] },
      reversed: { fr: ['agitation', 'épuisement', 'repos refusé', 'reprise forcée'], en: ['restlessness', 'exhaustion', 'rest refused', 'forced return'] },
    },
    meaning: {
      upright: { fr: "Une effigie de pierre repose les mains jointes, trois épées suspendues au mur, une quatrième couchée sous elle. Le vitrail filtre une lumière paisible sur ce sommeil qui n'est pas la mort mais la trêve. On dépose les armes, on panse ses forces en silence — un répit gagné, non une fuite.", en: "A stone effigy lies with hands joined, three swords hung on the wall, a fourth laid beneath it. A stained-glass window filters a quiet light over this sleep that is not death but truce. The weapons are set down, strength mended in silence — a rest earned, not a flight." },
      reversed: { fr: "Le gisant remue, la trêve se refuse : on rouvre les yeux trop tôt, on rattrape l'épée avant que le corps ait recouvré. L'agitation revient sous le calme feint, l'épuisement s'entête à ne rien vouloir entendre. Le repos qu'on repousse revient frapper à sa porte.", en: "The recumbent figure stirs, the truce refused: eyes opened too soon, the sword snatched back before the body has mended. Restlessness returns beneath the feigned calm, exhaustion insisting on hearing nothing. The rest one pushes away comes knocking again at the door." },
    },
  },
  'swords-05': {
    keywords: {
      upright: { fr: ['querelle', 'humiliation', 'victoire amère', 'rancune'], en: ['quarrel', 'humiliation', 'hollow victory', 'resentment'] },
      reversed: { fr: ['réconciliation', 'on lâche', 'retrait', 'pardon'], en: ['reconciliation', 'letting go', 'walking away', 'forgiveness'] },
    },
    meaning: {
      upright: { fr: "Sur un rivage venteux, un homme ramasse trois épées avec un rictus, tandis que deux silhouettes s'éloignent, tête basse, abandonnant leurs lames. La victoire est là, mais elle a le goût de la cendre : on l'a prise par la ruse, l'humiliation, le mépris. Le ciel déchiré retient une rancune que nul triomphe ne dissipe.", en: "On a windswept shore a man gathers three swords with a smirk while two figures walk off, heads low, leaving their blades behind. Victory is his, but it tastes of ash: taken by cunning, humiliation, contempt. The torn sky holds a spite no triumph can clear." },
      reversed: { fr: "Le vent tombe, et les armes ramassées commencent à peser. Le vainqueur sans gloire desserre son emprise, le vaincu digère sa défaite et quitte enfin le sable ; peut-être une main se tend là où régnait le mépris. On lâche la querelle avant qu'elle n'achève de tout ronger.", en: "The wind drops, and the gathered blades begin to weigh. The joyless victor loosens his grip, the beaten swallow their loss and leave the sand at last; perhaps a hand reaches out where scorn once ruled. The quarrel is let go before it finishes eating everything." },
    },
  },
  'swords-06': {
    keywords: {
      upright: { fr: ['passage', 'traversée', 'apaisement', 'départ'], en: ['passage', 'crossing', 'relief', 'departure'] },
      reversed: { fr: ['bagage', 'retour en arrière', 'enlisement', 'départ manqué'], en: ['baggage', 'backsliding', 'stuck', 'failed departure'] },
    },
    meaning: {
      upright: { fr: "Un passeur pousse sa barque chargée de six épées dressées, menant une silhouette voilée et son enfant vers l'autre rive. D'un côté l'eau se hérisse, de l'autre elle s'apaise ; la traversée est lente, silencieuse, mais elle éloigne des remous. On emporte ses lames avec soi, sans plus les brandir — le pire est derrière, la berge devant.", en: "A ferryman poles his boat, laden with six upright swords, carrying a veiled figure and a child toward the far bank. On one side the water bristles, on the other it smooths; the crossing is slow, silent, but it draws away from the turmoil. The blades come along, no longer raised — the worst behind, the shore ahead." },
      reversed: { fr: "La barque n'avance plus, la perche s'enfonce dans une eau qui la retient. Le bagage qu'on traîne alourdit chaque coup ; les rives se confondent, on dérive vers l'arrière au lieu de gagner l'autre bord. Le départ reste une intention qui ne trouve pas son courant.", en: "The boat no longer moves, the pole sinking into water that holds it fast. The baggage dragged along drags each stroke down; the banks blur, and one drifts back rather than reaching the far side. Departure stays an intention that cannot find its current." },
    },
  },
  'swords-07': {
    keywords: {
      upright: { fr: ['ruse', 'larcin', 'stratégie', 'discrétion'], en: ['stealth', 'theft', 'strategy', 'discretion'] },
      reversed: { fr: ['pris sur le fait', 'aveu', 'conscience', 'plan éventé'], en: ['caught', 'confession', 'conscience', 'plan exposed'] },
    },
    meaning: {
      upright: { fr: "Un homme s'éloigne d'un campement sur la pointe des pieds, cinq épées serrées maladroitement dans ses bras, deux autres laissées plantées derrière lui. Le regard en arrière trahit le plan discret, le larcin, la manœuvre menée dans le dos des tentes. C'est l'esprit qui ruse plutôt que la force qui frappe — habile, et jamais tout à fait tranquille.", en: "A man tiptoes away from a camp, five swords clutched awkwardly in his arms, two more left standing behind him. The glance over his shoulder betrays the quiet plan, the pilfering, the manoeuvre worked behind the tents' backs. It is the cunning mind, not the striking hand — clever, and never quite at ease." },
      reversed: { fr: "Le voleur s'arrête net, une épée lui glisse des bras, un regard le fixe depuis les tentes. La ruse se retourne contre son auteur : on est pris sur le fait, la conscience se met à parler, un aveu monte qu'on ne peut plus retenir. Le plan si soigneusement caché gît soudain à découvert.", en: "The thief stops short, a sword slipping from his arms, a gaze fixing him from the tents. The cunning turns on its author: caught in the act, conscience begins to speak, a confession rises that can no longer be held. The plan so carefully hidden lies suddenly exposed." },
    },
  },
  'swords-08': {
    keywords: {
      upright: { fr: ['piège', 'entrave', 'impuissance', 'aveuglement'], en: ['trap', 'restriction', 'powerlessness', 'blindfold'] },
      reversed: { fr: ['libération', 'issue', 'nouveau regard', 'délivrance'], en: ['release', 'way out', 'new perspective', 'freeing'] },
    },
    meaning: {
      upright: { fr: "Bandée et ligotée, une femme se tient parmi huit lames plantées comme les barreaux d'une cage à ciel ouvert. Terre boueuse, mer lointaine, château muet : l'esprit se croit prisonnier de ses propres pensées et n'ose plus un pas. Pourtant les cordes ne serrent guère, et nul ne monte la garde.", en: "Blindfolded and bound, a woman stands among eight blades staked like the bars of an open-air cage. Muddy ground, a distant sea, a silent castle: the mind takes its own thoughts for a prison and dares not move. Yet the ropes barely bite, and no one keeps watch." },
      reversed: { fr: "Le bandeau glisse et la lumière rentre par en dessous. Les nœuds tombés d'eux-mêmes découvrent l'évidence : entre deux lames s'ouvrait un passage que la seule peur masquait. Ce qui retenait n'était fait que de mots.", en: "The blindfold slips and light returns from below. Knots fallen of their own accord lay the truth bare: between two blades a passage stood open all along, veiled by nothing but fear. What held you was made of words alone." },
    },
  },
  'swords-09': {
    keywords: {
      upright: { fr: ['angoisse', 'cauchemar', 'peur', 'culpabilité'], en: ['anguish', 'nightmare', 'fear', 'guilt'] },
      reversed: { fr: ['apaisement', 'peur qui reflue', 'aide', 'sortie du tunnel'], en: ['relief', 'fear receding', 'help', 'coming through'] },
    },
    meaning: {
      upright: { fr: "Dressée dans le noir, une silhouette se redresse du lit, le visage dans les mains, tandis que neuf lames luisent alignées au mur. La nuit épaissit chaque pensée, retourne le remords, gonfle la peur jusqu'à emplir la chambre. Rien n'attaque — l'ennemi veille à l'intérieur du crâne.", en: "Bolt upright in the dark, a figure sits with face buried in hands, nine blades glinting in a row along the wall. Night thickens every thought, turns the remorse over and over, swells the fear until it fills the room. Nothing attacks — the enemy keeps vigil inside the skull." },
      reversed: { fr: "L'étau nocturne cède fibre à fibre. Ce qui rongeait dans le silence se dit enfin tout haut, et le cauchemar, une fois nommé, perd de sa masse. Sous la porte, une ligne pâle rappelle que la nuit a une fin.", en: "The night's grip yields thread by thread. What gnawed in silence is finally spoken aloud, and the nightmare, once named, loses its bulk. Under the door a pale line recalls that the night does have an end." },
    },
  },
  'swords-10': {
    keywords: {
      upright: { fr: ['ruine', 'trahison', 'point bas', 'fin brutale'], en: ['ruin', 'betrayal', 'rock bottom', 'brutal ending'] },
      reversed: { fr: ['relèvement', 'pire passé', 'aube', 'survie'], en: ['recovery', 'worst is over', 'dawn', 'survival'] },
    },
    meaning: {
      upright: { fr: "Un corps gît face contre terre, dix lames enfoncées le long du dos — une chute sans appel, une trahison portée jusqu'au bout. Le ciel est le plus noir des noirs et le sang a cessé de couler. Plus rien ne pèse, car il n'y a plus rien à perdre.", en: "A body lies face-down, ten blades driven the length of its back — a fall past appeal, a betrayal carried to its very end. The sky is the blackest of blacks and the bleeding has stopped. Nothing weighs anymore, for there is nothing left to lose." },
      reversed: { fr: "À l'horizon, une bande d'or perce le noir absolu. Le pire a déjà eu lieu, il ne guette plus derrière soi ; ne reste que le corps qui, contre toute attente, respire encore. D'ici, tout chemin remonte.", en: "At the horizon a band of gold splits the absolute black. The worst has already happened; it no longer lurks behind you — only the body remains, breathing against all odds. From here, every road leads upward." },
    },
  },
  'swords-11': {
    keywords: {
      upright: { fr: ['esprit vif', 'guetteur', 'curiosité', 'vigilance'], en: ['sharp mind', 'watcher', 'curiosity', 'vigilance'] },
      reversed: { fr: ['espionnage', 'ragots', 'précipitation', 'médisance'], en: ['snooping', 'gossip', 'haste', 'slander'] },
    },
    meaning: {
      upright: { fr: "Sur une crête balayée de vent, une jeune figure lève sa lame et scrute l'horizon, prête à bondir au moindre mot. Nuages hachés, cheveux fouettés, regard qui fouille — c'est l'esprit à l'affût, curieux de tout, avide de comprendre. Quelque part au loin, une nouvelle se prépare, encore hors de vue.", en: "On a wind-scoured ridge a young figure lifts a blade and scans the skyline, poised to leap at the faintest word. Ragged clouds, whipped hair, a searching gaze — this is the mind on watch, curious about everything, hungry to understand. Somewhere far off, word is gathering, still out of sight." },
      reversed: { fr: "La vigie devient guetteuse d'ombre : on épie, on colporte, on tranche avant de savoir. La lame si promptement levée sert désormais la rumeur, et la langue court plus vite que la vérité.", en: "The lookout turns spy: prying, tattling, cutting before knowing. The blade so quickly raised now serves the rumour, and the tongue outruns the truth." },
    },
  },
  'swords-12': {
    keywords: {
      upright: { fr: ['assaut', 'franchise', 'rapidité', 'détermination'], en: ['charge', 'bluntness', 'speed', 'determination'] },
      reversed: { fr: ['agressivité', 'imprudence', 'brusquerie', 'sans suite'], en: ['aggression', 'recklessness', 'harshness', 'no follow-through'] },
    },
    meaning: {
      upright: { fr: "Un cavalier lance sa monture au galop, lame haute, penché sur l'encolure sous un ciel de tempête. Rien ne l'arrête, ni le vent contraire ni les arbres tordus — c'est la pensée changée en charge, la franchise qui fend l'air, l'idée poussée d'un seul trait jusqu'au but.", en: "A rider drives his mount at full gallop, blade raised, bent low over its neck beneath a storm-torn sky. Nothing slows him — not the headwind, not the twisted trees — this is thought made charge, bluntness cleaving the air, the idea flung in a single line toward its mark." },
      reversed: { fr: "L'élan tourne à la furie aveugle : on charge sans regarder, la parole blesse, la monture s'emballe. La fougue retombée, la poussière recouvre un terrain conquis puis aussitôt abandonné.", en: "The drive curdles into blind fury: charging without looking, words that wound, a mount run wild. When the blaze burns out, dust settles over ground taken and just as quickly abandoned." },
    },
  },
  'swords-13': {
    keywords: {
      upright: { fr: ['lucidité', 'perspicacité', 'franchise', 'indépendance'], en: ['clarity', 'perceptiveness', 'frankness', 'independence'] },
      reversed: { fr: ['froideur', 'jugement dur', 'amertume', 'sarcasme'], en: ['coldness', 'harsh judgement', 'bitterness', 'sarcasm'] },
    },
    meaning: {
      upright: { fr: "Sur un trône dressé au-dessus des nuages, une femme tient sa lame droite vers le ciel, une main tendue vers qui saura dire vrai. Le regard ne cille pas ; il a connu la perte et en a tiré la clarté. Ici la pensée règne sans complaisance, tranchante comme l'air pur des hauteurs.", en: "On a throne raised above the clouds, a woman holds her blade upright to the sky, one hand extended to whoever will speak true. The gaze does not waver; it has known loss and drawn clarity from it. Here the mind reigns without indulgence, keen as the pure air of high places." },
      reversed: { fr: "La lucidité vire au gel. La lame qui coupait le faux entaille désormais tout ce qui approche ; le jugement ne pardonne plus, l'amertume tient lieu de vérité. À force de tout voir, on ne voit plus que les défauts.", en: "The clarity turns to frost. The blade that once cut through falsehood now gashes all that comes near; judgement no longer forgives, bitterness stands in for truth. Seeing everything, one comes to see only the flaws." },
    },
  },
  'swords-14': {
    keywords: {
      upright: { fr: ['intelligence', 'autorité', 'rigueur', 'vérité'], en: ['intellect', 'authority', 'rigour', 'truth'] },
      reversed: { fr: ['manipulation', 'froideur', 'abus', 'rigidité'], en: ['manipulation', 'coldness', 'abuse', 'rigidity'] },
    },
    meaning: {
      upright: { fr: "De face sur son trône de pierre, un homme tient l'épée bien droite, le regard qui pèse et qui sonde. Papillons gravés, ciel immobile : ici la loi, la stratégie et la parole donnée gouvernent. C'est l'esprit fait autorité, celui qui tranche parce qu'il a d'abord compris.", en: "Facing forward on his stone throne, a man holds the sword bolt upright, his gaze weighing and probing. Carved butterflies, a windless sky: here law, strategy and the given word hold sway. This is the mind made authority, the one who decides because he first understood." },
      reversed: { fr: "L'intelligence se met au service de la seule puissance. La lame juge sans écouter, la règle écrase au lieu de protéger, la parole devient piège. Un pouvoir qui a cessé de sentir gouverne encore, mais ne gouverne plus que par la crainte.", en: "Intellect bends into the service of raw power. The blade judges without listening, the rule crushes instead of shielding, the given word becomes a snare. A power that has stopped feeling still governs — but governs now by fear alone." },
    },
  },

  // ─────────────── DENIERS / PENTACLES (terre : matériel, travail, corps) ───────────────
  'pentacles-01': {
    keywords: {
      upright: { fr: ['aubaine', 'occasion', 'richesse', 'prospérité'], en: ['windfall', 'opportunity', 'wealth', 'prosperity'] },
      reversed: { fr: ['occasion manquée', 'piège', 'promesse creuse', 'perte'], en: ['missed chance', 'trap', 'hollow promise', 'loss'] },
    },
    meaning: {
      upright: { fr: "Une main s'ouvre et tend une pièce d'or, lourde et bien réelle. Au bout du jardin, une porte donne sur du concret : un don, un sol fertile, la graine d'une prospérité qui ne demande qu'à être plantée. Tout part de là, tangible dans la paume.", en: "A hand opens and offers a gold coin, heavy and wholly real. At the garden's end, a gate opens onto the tangible: a gift, fertile ground, the seed of a prosperity that asks only to be planted. It all starts here, solid in the palm." },
      reversed: { fr: "La main se referme sur la pièce, ou la laisse tomber dans la boue. La graine pourrit avant de lever : occasion gâchée, promesse sans lendemain, ou l'or serré si fort qu'il n'a plus rien à rendre. Le sol, ici, ne donne pas.", en: "The hand closes over the coin, or lets it drop in the mud. The seed rots before it sprouts: a chance wasted, a promise with no morrow, or gold gripped so tight it has nothing left to give. This ground yields nothing." },
    },
  },
  'pentacles-02': {
    keywords: {
      upright: { fr: ['jonglage', 'adaptation', 'équilibre', 'souplesse'], en: ['juggling', 'adaptability', 'balance', 'flexibility'] },
      reversed: { fr: ['surcharge', 'désordre', 'déséquilibre', 'trop de fronts'], en: ['overload', 'disorder', 'imbalance', 'too many fronts'] },
    },
    meaning: {
      upright: { fr: "Un jongleur fait danser deux pièces d'or dans une boucle sans fin, tandis que derrière lui la mer soulève et repose les navires. Les pieds bougent, le corps ondule, tout tient dans le rythme trouvé. Rien n'est posé, et pourtant rien ne tombe : l'équilibre est une danse, pas un repos.", en: "A juggler keeps two golden coins looping through the air, while behind him the sea lifts the ships and sets them down again. The feet shift, the body sways, everything holds in the rhythm found. Nothing is set down, yet nothing drops: balance here is a dance, not a rest." },
      reversed: { fr: "Le rythme se casse, les vagues montent trop haut derrière la silhouette. Les pièces filent plus vite que les mains ne suivent, et la danse tourne à la course essoufflée. Un poids de trop dans la boucle, et tout ce qu'on tenait s'éparpille sur la pierre.", en: "The rhythm breaks, the waves climb too high behind the figure. The coins fly faster than the hands can follow, and the dance turns into a breathless scramble. One weight too many in the loop, and everything you held scatters across the stone." },
    },
  },
  'pentacles-03': {
    keywords: {
      upright: { fr: ['savoir-faire', 'collaboration', 'chantier', 'reconnaissance'], en: ['craft', 'collaboration', 'project', 'recognition'] },
      reversed: { fr: ['cafouillage', 'rôles flous', 'travail bâclé', 'egos'], en: ['muddle', 'unclear roles', 'sloppy work', 'egos'] },
    },
    meaning: {
      upright: { fr: "Dans la fraîcheur de la pierre, un artisan taille la voûte pendant que deux hommes tiennent le plan sous les yeux. Le marteau, le dessin, la parole s'accordent : chaque main sait sa part et l'ouvrage monte. Le savoir-faire d'un seul devient l'œuvre de plusieurs, et l'édifice porte déjà leur nom.", en: "In the cool of the stone, a craftsman carves the vault while two men hold the plan before him. Hammer, drawing and word fall into accord: each hand knows its part and the work rises. One person's skill becomes the labour of many, and the building already bears their names." },
      reversed: { fr: "L'échafaudage tient encore, mais les voix se croisent sans se répondre. L'un montre le plan que l'autre ignore, le ciseau frappe de travers, et l'ouvrage prend du retard à mesure que les orgueils enflent. Sans mains accordées, la belle voûte reste une esquisse figée.", en: "The scaffolding still stands, but the voices cross without answering one another. One points at a plan the other ignores, the chisel bites off the mark, and the work falls behind as the egos swell. With hands out of accord, the fine vault stays a frozen sketch." },
    },
  },
  'pentacles-04': {
    keywords: {
      upright: { fr: ['sécurité', 'épargne', 'contrôle', 'possession'], en: ['security', 'saving', 'control', 'possession'] },
      reversed: { fr: ['avarice', 'possessivité', 'isolement', 'perte'], en: ['greed', 'possessiveness', 'isolation', 'loss'] },
    },
    meaning: {
      upright: { fr: "Assis aux portes de la cité, un homme presse une pièce contre son cœur, deux autres sous ses pieds, une dernière en couronne sur son front. Rien ne lui échappe, tout est tenu, verrouillé, à l'abri du vent. C'est la paix de qui possède — une forteresse de métal bâtie autour d'un corps qui n'ose plus bouger.", en: "Seated at the city gates, a man clutches a coin to his heart, two more beneath his feet, a last one crowning his brow. Nothing slips from him, all is held, locked, sheltered from the wind. This is the peace of the one who owns — a fortress of metal built around a body that no longer dares to move." },
      reversed: { fr: "Les doigts se referment jusqu'à blanchir, et le rempart d'or devient une cage. À trop serrer, on ne tient plus que le vide autour de soi : les portes closes, les mains crispées, personne à qui ouvrir. Ou bien la prise cède d'un coup, et tout ce qu'on couvait roule loin dans la poussière.", en: "The fingers close until they whiten, and the rampart of gold becomes a cage. Grip too hard and all you hold is the emptiness around you: the gates shut, the hands clenched, no one left to open to. Or else the hold gives way at once, and all you hoarded rolls off into the dust." },
    },
  },
  'pentacles-05': {
    keywords: {
      upright: { fr: ['disette', 'manque', 'exclusion', 'froid'], en: ['hardship', 'want', 'exclusion', 'cold'] },
      reversed: { fr: ['secours', 'refuge', 'reprise', 'espoir'], en: ['aid', 'shelter', 'recovery', 'hope'] },
    },
    meaning: {
      upright: { fr: "Deux silhouettes en haillons passent dans la neige, l'une boitant sur des béquilles, l'autre courbée sous le froid. Au-dessus d'eux, un vitrail brûle de lumière et de pièces d'or — mais la porte n'est pas de leur côté. Le manque mord, et le seuil chaud reste juste hors d'atteinte, à quelques pas dans la nuit.", en: "Two ragged figures trudge through the snow, one limping on crutches, the other bent beneath the cold. Above them a stained-glass window blazes with light and golden coins — but the door is not on their side. Want bites deep, and the warm threshold stays just out of reach, a few steps away in the night." },
      reversed: { fr: "Le froid relâche enfin son étreinte : un porche se découpe dans la nuit, une main tendue attend au bout du chemin. Les pas restent lourds, mais la lumière du vitrail cesse d'être un mur pour devenir une direction. Ce qui manquait n'est pas encore là — pourtant le pire s'éloigne, un peu.", en: "The cold loosens its hold at last: a porch takes shape in the dark, a hand held out waits at the road's end. The steps are still heavy, but the window's light stops being a wall and becomes a bearing. What was missing is not yet here — and yet the worst is drawing back, a little." },
    },
  },
  'pentacles-06': {
    keywords: {
      upright: { fr: ['générosité', 'partage', 'mécène', 'échange juste'], en: ['generosity', 'sharing', 'patron', 'fair exchange'] },
      reversed: { fr: ['don intéressé', 'dette', 'déséquilibre', 'dépendance'], en: ['strings attached', 'debt', 'imbalance', 'dependence'] },
    },
    meaning: {
      upright: { fr: "Un marchand tient sa balance d'une main et laisse tomber des pièces de l'autre dans les paumes ouvertes de deux mendiants agenouillés. Le geste est mesuré, l'échange pesé, chacun reçoit selon sa part. Un instant de justice tranquille où le trop-plein de l'un comble le vide de l'autre.", en: "A merchant holds his scales in one hand and lets coins fall from the other into the open palms of two kneeling beggars. The gesture is measured, the exchange weighed, each receives according to his share. A quiet moment of justice, where one man's surplus fills another's want." },
      reversed: { fr: "La balance penche, et l'on ne sait plus qui tient l'autre. La pièce donnée traîne un fil invisible : elle achète une reconnaissance, elle scelle une dette, elle place le mendiant sous une main qui pourra se refermer. Le geste garde l'allure de la bonté, mais les plateaux ne s'équilibrent plus.", en: "The scales tilt, and it is no longer clear who holds whom. The coin given trails an invisible thread: it buys a debt of gratitude, it seals an obligation, it sets the beggar beneath a hand that can yet close. The gesture keeps the look of kindness, but the pans no longer come level." },
    },
  },
  'pentacles-07': {
    keywords: {
      upright: { fr: ['patience', 'récolte à venir', 'évaluation', 'investissement'], en: ['patience', 'coming harvest', 'assessment', 'investment'] },
      reversed: { fr: ['maigre récolte', 'effort vain', 'impatience', 'doute'], en: ['poor harvest', 'wasted effort', 'impatience', 'doubt'] },
    },
    meaning: {
      upright: { fr: "Appuyé sur sa houe, un homme s'arrête au bord du feuillage où mûrissent des pièces d'or comme des fruits lourds. Le travail est fait ; reste le temps, ce vieux complice qui gonfle la récolte à son heure et non à la nôtre. Un moment suspendu entre l'effort donné et la moisson encore verte.", en: "Leaning on his hoe, a man pauses at the edge of the foliage where golden coins ripen like heavy fruit. The labour is done; what remains is time, that old accomplice who swells the harvest at its hour and not at ours. A suspended moment between the effort spent and the crop still green." },
      reversed: { fr: "Le regard s'attarde sur les pièces sans les voir grossir, et le doute s'installe dans la longue attente. La récolte semble maigre pour tant de sueur, l'envie monte d'arracher le fruit avant terme. La houe pèse plus lourd qu'au premier jour, et le vert ne veut pas virer à l'or.", en: "The gaze lingers on the coins without seeing them swell, and doubt settles into the long wait. The harvest looks meagre for so much sweat, and the urge rises to tear the fruit down before its time. The hoe weighs heavier than on the first day, and the green will not turn to gold." },
    },
  },
  'pentacles-08': {
    keywords: {
      upright: { fr: ['application', 'métier', 'constance', 'apprentissage'], en: ['diligence', 'craft', 'consistency', 'apprenticeship'] },
      reversed: { fr: ['routine vide', 'perfectionnisme', 'sans cœur', 'bâclage'], en: ['empty routine', 'perfectionism', 'heartless', 'sloppiness'] },
    },
    meaning: {
      upright: { fr: "Assis à l'établi, l'artisan grave une étoile dans le métal et l'accroche au mur, déjà six ouvrées, une septième sous le burin. Le geste se répète, patient, chaque pièce plus sûre que la précédente ; la ville reste au loin, oubliée. Le métier s'apprend là, coup après coup, dans l'odeur du copeau et le silence de l'application.", en: "At the bench the craftsman carves a star into the metal and hangs it on the wall — six done already, a seventh under the chisel. The gesture repeats, patient, each piece surer than the last; the town stays far off, forgotten. The craft is learned right here, stroke after stroke, in the scent of shavings and the quiet of applied hands." },
      reversed: { fr: "Le burin frappe encore, mais la main ne regarde plus l'ouvrage. Les étoiles s'alignent, identiques et froides, ou bien on lime la même à l'infini sans jamais l'accrocher. Le geste demeure — c'est le cœur qui a quitté l'établi.", en: "The chisel still strikes, but the hand no longer looks at the work. The stars line up, identical and cold — or the same one is filed forever and never hung. The gesture remains; it is the heart that has left the bench." },
    },
  },
  'pentacles-09': {
    keywords: {
      upright: { fr: ['aisance', 'autonomie', 'confort', 'récompense'], en: ['ease', 'self-reliance', 'comfort', 'reward'] },
      reversed: { fr: ['surmenage', 'vide', 'dépendance', 'luxe creux'], en: ['overwork', 'emptiness', 'dependence', 'hollow luxury'] },
    },
    meaning: {
      upright: { fr: "Dans un jardin mûr, une femme richement vêtue pose la main sur une étoile d'or, un oiseau encapuchonné perché à son gant. Les vignes ploient de fruits, le domaine respire l'abondance patiemment gagnée ; elle est seule et cela lui suffit. Ici, le travail a porté sa récompense, et l'on peut enfin en savourer le calme raffiné.", en: "In a ripe garden a richly dressed woman rests her hand on a golden star, a hooded bird poised on her glove. The vines bow with fruit, the estate breathes an abundance patiently earned; she is alone and it is enough. Here the work has borne its reward, and one may savour at last its refined calm." },
      reversed: { fr: "Le jardin est toujours somptueux, mais le gant serre trop fort et le regard se fatigue. On tient le train de vie à bout de bras, ou l'on erre parmi des ors qui ne réjouissent plus personne. L'aisance est là, splendide et vide, comme un fruit peint sur la vigne.", en: "The garden is still sumptuous, but the glove grips too hard and the gaze grows tired. One keeps up the lifestyle at arm's length, or wanders among golds that gladden no one anymore. The ease is there, splendid and hollow, like a fruit painted onto the vine." },
    },
  },
  'pentacles-10': {
    keywords: {
      upright: { fr: ['richesse durable', 'héritage', 'maisonnée', 'stabilité'], en: ['lasting wealth', 'legacy', 'household', 'stability'] },
      reversed: { fr: ['héritage disputé', 'argent qui divise', 'instabilité', 'sursis'], en: ['disputed legacy', 'money that divides', 'instability', 'borrowed time'] },
    },
    meaning: {
      upright: { fr: "Sous une arche gravée d'armoiries, trois générations se tiennent : le vieillard aux chiens, le couple, l'enfant qui touche une étoile. Dix pièces s'agencent dans l'air comme un arbre de lignée, et la maisonnée entière repose à leur ombre. Tout est bâti, transmis, à l'abri — un patrimoine assez lourd pour porter ceux qui viendront.", en: "Beneath an arch carved with heraldry three generations stand: the old man with his hounds, the couple, the child reaching for a star. Ten coins arrange themselves in the air like a family tree, and the whole household rests in their shade. Everything is built, handed down, sheltered — a legacy heavy enough to carry those still to come." },
      reversed: { fr: "L'arche tient encore, mais une fissure court dans la pierre des armoiries. Les héritiers comptent les pièces au lieu de se regarder, et l'or qui devait unir la maisonnée la divise. La prospérité demeure — sur un socle qui n'est plus tout à fait sûr.", en: "The arch still stands, but a crack runs through the heraldic stone. The heirs count the coins instead of meeting each other's eyes, and the gold that should have bound the household divides it. The prosperity remains — on a footing no longer quite sure." },
    },
  },
  'pentacles-11': {
    keywords: {
      upright: { fr: ['jeune studieux', 'apprenti', 'occasion', 'projet concret'], en: ['studious youth', 'apprentice', 'opportunity', 'concrete plan'] },
      reversed: { fr: ['procrastination', 'occasion gâchée', 'stagnation', 'rêverie'], en: ['procrastination', 'missed chance', 'stagnation', 'daydreaming'] },
    },
    meaning: {
      upright: { fr: "Dans un champ verdoyant, un jeune homme lève une étoile d'or à deux mains et la contemple comme une promesse. Rien n'est encore construit, mais tout y est contenu : le sérieux du regard, le sol fertile alentour, l'envie d'apprendre un métier bien réel. Une graine tangible, offerte à qui saura la mettre en terre.", en: "In a green field a young man lifts a golden star in both hands and studies it like a promise. Nothing is built yet, but everything is held within it: the seriousness of the gaze, the fertile ground around, the hunger to learn a real trade. A tangible seed, offered to whoever will plant it." },
      reversed: { fr: "L'étoile tourne encore entre ses doigts, mais elle n'ira pas plus loin que la contemplation. Le projet reste au fond de la poche, l'occasion glisse pendant qu'on rêve du fruit sans creuser la terre. La graine était bonne — elle sèche dans la paume.", en: "The star still turns between his fingers, but it will go no further than contemplation. The plan stays at the bottom of the pocket, the chance slips while one dreams of the fruit without breaking the soil. The seed was good — it dries in the palm." },
    },
  },
  'pentacles-12': {
    keywords: {
      upright: { fr: ['fiabilité', 'constance', 'sérieux', 'labeur'], en: ['reliability', 'consistency', 'diligence', 'toil'] },
      reversed: { fr: ['routine', 'ennui', 'stagnation', 'paresse'], en: ['dull routine', 'boredom', 'stagnation', 'laziness'] },
    },
    meaning: {
      upright: { fr: "Sur un cheval de trait noir, immobile au bord d'un champ labouré, un cavalier tient une étoile d'or et fixe le sillon. Nulle fougue ici : la monture pèse, le pas sera lent, mais le travail sera fait jusqu'au bout. Une force tranquille tournée vers la terre, qui avance sans jamais se hâter.", en: "On a heavy black horse, still at the edge of a ploughed field, a knight holds a golden star and studies the furrow. No fire here: the mount is weighty, the pace will be slow, but the work will be seen through. A quiet strength turned toward the soil, moving forward without ever hurrying." },
      reversed: { fr: "Le cheval s'est arrêté et ne repart plus, planté dans un champ qu'il connaît trop. Le pas régulier s'est fait ornière, la lenteur a viré à l'engourdissement ; l'étoile reste au poing, oubliée. La constance, privée d'horizon, n'est plus qu'un piétinement.", en: "The horse has halted and will not set off again, rooted in a field it knows too well. The steady pace has worn into a rut, the slowness curdled to torpor; the star stays in the fist, forgotten. Constancy, robbed of a horizon, is nothing but treading in place." },
    },
  },
  'pentacles-13': {
    keywords: {
      upright: { fr: ['sens pratique', 'générosité', 'ancrage', 'débrouille'], en: ['practicality', 'generosity', 'groundedness', 'resourcefulness'] },
      reversed: { fr: ['oubli de soi', 'surprotection', 'déséquilibre', 'dispersion'], en: ['self-neglect', 'smothering', 'imbalance', 'overstretch'] },
    },
    meaning: {
      upright: { fr: "Trônant dans un jardin foisonnant, une femme tient une étoile d'or sur ses genoux et la contemple avec tendresse, un lièvre filant à ses pieds. Roses, fruits et verdure l'entourent d'une abondance qu'elle sait faire vivre et partager. Ancrée, débrouillarde, elle nourrit les siens et le domaine sans jamais rompre son propre équilibre.", en: "Enthroned in a teeming garden, a woman cradles a golden star on her lap and gazes at it with tenderness, a hare darting past her feet. Roses, fruit and green surround her with an abundance she knows how to keep alive and to share. Grounded and resourceful, she feeds her own and the estate without ever breaking her own balance." },
      reversed: { fr: "Le jardin déborde encore, mais elle ne s'assoit plus. À force de veiller sur chacun, elle s'oublie ; l'étoile passe de main en main, jamais gardée pour elle. Le soin vire à l'étouffement, l'abondance à l'épuisement — tout pour les siens, plus rien pour son propre sol.", en: "The garden still overflows, but she no longer sits down. From tending everyone she forgets herself; the star passes from hand to hand, never kept for her. Care tips into smothering, abundance into exhaustion — all for her own, nothing left for her own ground." },
    },
  },
  'pentacles-14': {
    keywords: {
      upright: { fr: ['prospérité', 'discipline', 'pourvoyeur', 'réussite solide'], en: ['prosperity', 'discipline', 'provider', 'solid success'] },
      reversed: { fr: ['avidité', 'matérialisme', 'entêtement', 'contrôle'], en: ['greed', 'materialism', 'stubbornness', 'control'] },
    },
    meaning: {
      upright: { fr: "Sous une treille lourde de grappes, un roi corpulent siège, une étoile d'or au creux du bras, sa robe brodée de fruits mûrs. Le château monte derrière lui, la richesse s'étale, tout ici obéit et prospère. Bâtisseur et pourvoyeur, il règne sur un domaine solide qu'il sait faire fructifier année après année.", en: "Beneath a trellis heavy with grapes a stout king sits, a golden star in the crook of his arm, his robe embroidered with ripe fruit. The castle rises behind him, the wealth spreads out, everything here obeys and prospers. A builder and a provider, he presides over a solid domain he knows how to grow year upon year." },
      reversed: { fr: "La treille croule toujours de fruits, mais la main sur l'étoile ne s'ouvre plus. Le pourvoyeur ne pourvoit qu'à lui-même, tenant le domaine dans un poing qui compte et ne donne pas. La réussite s'est figée en avidité, le trône en forteresse.", en: "The trellis still sags with fruit, but the hand upon the star no longer opens. The provider provides only for himself, holding the domain in a fist that counts and does not give. Success has hardened into greed, the throne into a fortress." },
    },
  },
};
