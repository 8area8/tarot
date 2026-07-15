import type { Locale } from '../lib/i18n';

/**
 * « Lire l'image » : les symboles repérables dans l'illustration Rider-Waite-Smith
 * de chaque carte. Le cœur de l'apprentissage RWS — apprendre à lire la scène
 * plutôt qu'à mémoriser des mots-clés. Chaque entrée nomme un élément visuel réel
 * de la carte et dit comment le lire. FR+EN, ton cohérent avec le reste du jeu.
 *
 * Couverture : les 78 cartes (22 majeurs + 56 mineurs).
 * Une carte absente de SYMBOLS n’affiche simplement pas le bouton « Lire l’image ».
 */

type Bi = Record<Locale, string>;

export interface CardSymbol {
  /** Le détail visuel, nommé (ex. « Le petit chien blanc »). */
  label: Bi;
  /** Comment le lire. */
  text: Bi;
}

export const SYMBOLS: Record<string, CardSymbol[]> = {
  'major-00': [
    {
      label: { fr: 'La falaise', en: 'The cliff' },
      text: {
        fr: 'Le bord vers lequel il avance en riant : le saut dans l’inconnu, insouciant du danger.',
        en: 'The edge he steps toward, laughing: the leap into the unknown, heedless of danger.',
      },
    },
    {
      label: { fr: 'Le petit chien blanc', en: 'The little white dog' },
      text: {
        fr: 'À ses talons, l’instinct qui l’avertit — ou qui le pousse à bondir.',
        en: 'At his heels, the instinct that warns him — or urges him to leap.',
      },
    },
    {
      label: { fr: 'La rose blanche', en: 'The white rose' },
      text: {
        fr: 'Tenue à la main : la pureté de l’intention, l’innocence de celui qui part sans arrière-pensée.',
        en: 'Held in his hand: purity of intent, the innocence of one who sets off with no hidden agenda.',
      },
    },
  ],
  'major-01': [
    {
      label: { fr: 'Le lemniscate (∞)', en: 'The lemniscate (∞)' },
      text: {
        fr: 'Au-dessus de sa tête : le potentiel infini, la maîtrise de forces qui ne s’épuisent pas.',
        en: 'Above his head: infinite potential, mastery of forces that never run dry.',
      },
    },
    {
      label: { fr: 'Une main au ciel, l’autre à la terre', en: 'One hand to the sky, one to the earth' },
      text: {
        fr: 'Il canalise : « ce qui est en haut est comme ce qui est en bas », le passage de l’idée à l’acte.',
        en: 'He channels: “as above, so below” — the passage from idea to act.',
      },
    },
    {
      label: { fr: 'Les quatre outils sur la table', en: 'The four tools on the table' },
      text: {
        fr: 'Bâton, coupe, épée, denier : les quatre éléments réunis sous sa main, tout est à disposition.',
        en: 'Wand, cup, sword, pentacle: the four elements gathered under his hand — all at his disposal.',
      },
    },
  ],
  'major-02': [
    {
      label: { fr: 'Les deux piliers, noir et blanc (Boaz & Jachin)', en: 'The two pillars, black and white (Boaz & Jachin)' },
      text: {
        fr: 'Le seuil du mystère : elle siège entre les contraires, gardienne de ce qui ne se dit pas.',
        en: 'The threshold of mystery: she sits between the opposites, guardian of what goes unspoken.',
      },
    },
    {
      label: { fr: 'Le voile aux grenades', en: 'The pomegranate veil' },
      text: {
        fr: 'Derrière elle, ce qui reste caché : le savoir voilé, l’inconscient qu’on ne force pas.',
        en: 'Behind her, what stays hidden: veiled knowledge, the unconscious one does not force.',
      },
    },
    {
      label: { fr: 'Le croissant de lune à ses pieds', en: 'The crescent moon at her feet' },
      text: {
        fr: 'L’intuition et les marées de l’invisible, sous sa maîtrise tranquille.',
        en: 'Intuition and the tides of the unseen, under her quiet command.',
      },
    },
  ],
  'major-03': [
    {
      label: { fr: 'Le champ de blé mûr', en: 'The field of ripe wheat' },
      text: {
        fr: 'L’abondance qui déborde : fécondité, récolte, ce qui pousse sans qu’on ait à forcer.',
        en: 'Overflowing abundance: fertility, harvest, what grows without forcing.',
      },
    },
    {
      label: { fr: 'La couronne de douze étoiles', en: 'The crown of twelve stars' },
      text: {
        fr: 'Son règne sur les cycles naturels — les mois, le zodiaque, le rythme du vivant.',
        en: 'Her reign over the natural cycles — the months, the zodiac, the rhythm of the living.',
      },
    },
    {
      label: { fr: 'Le ruisseau et la forêt', en: 'The stream and the forest' },
      text: {
        fr: 'La vie qui coule autour d’elle : la nature généreuse, sensuelle, inépuisable.',
        en: 'Life flowing around her: nature generous, sensual, inexhaustible.',
      },
    },
  ],
  'major-04': [
    {
      label: { fr: 'Les têtes de bélier du trône', en: 'The ram heads on the throne' },
      text: {
        fr: 'Le Bélier, Mars : l’autorité, la volonté qui fonce et impose son ordre.',
        en: 'Aries, Mars: authority, the will that charges and imposes its order.',
      },
    },
    {
      label: { fr: 'Les montagnes arides', en: 'The barren mountains' },
      text: {
        fr: 'Derrière lui, la structure dure et nue du pouvoir — rien n’y pousse, tout y tient.',
        en: 'Behind him, the hard bare structure of power — nothing grows there, everything holds.',
      },
    },
    {
      label: { fr: 'L’armure sous la robe', en: 'The armour beneath the robe' },
      text: {
        fr: 'Le souverain jamais en repos, prêt à défendre ce qu’il a bâti.',
        en: 'The ruler never at rest, ready to defend what he has built.',
      },
    },
  ],
  'major-05': [
    {
      label: { fr: 'La triple tiare et le geste de bénédiction', en: 'The triple tiara and the blessing gesture' },
      text: {
        fr: 'L’autorité spirituelle, l’enseignement sanctionné qu’on transmet d’en haut.',
        en: 'Spiritual authority, the sanctioned teaching handed down from above.',
      },
    },
    {
      label: { fr: 'Les deux clés croisées', en: 'The two crossed keys' },
      text: {
        fr: 'Les clés des mystères : ce qui ouvre le ciel et ce qui lie la terre.',
        en: 'The keys to the mysteries: what opens heaven and what binds earth.',
      },
    },
    {
      label: { fr: 'Les deux acolytes', en: 'The two acolytes' },
      text: {
        fr: 'La transmission : le savoir passe au sein d’une institution, du maître aux disciples.',
        en: 'Transmission: knowledge passes within an institution, master to disciples.',
      },
    },
  ],
  'major-06': [
    {
      label: { fr: 'L’ange au-dessus (Raphaël)', en: 'The angel above (Raphael)' },
      text: {
        fr: 'La bénédiction d’en haut sur l’union — ou sur le choix qui engage.',
        en: 'The blessing from above upon the union — or upon the choice that commits.',
      },
    },
    {
      label: { fr: 'L’arbre et le serpent, derrière la femme', en: 'The tree and serpent, behind the woman' },
      text: {
        fr: 'L’arbre de la connaissance : la tentation, l’éveil, le prix du savoir.',
        en: 'The tree of knowledge: temptation, awakening, the price of knowing.',
      },
    },
    {
      label: { fr: 'L’arbre en flammes, derrière l’homme', en: 'The flaming tree, behind the man' },
      text: {
        fr: 'La passion, le désir qui brûle — la part ardente de l’union.',
        en: 'Passion, burning desire — the ardent side of the union.',
      },
    },
  ],
  'major-07': [
    {
      label: { fr: 'Les deux sphinx, noir et blanc', en: 'The two sphinxes, black and white' },
      text: {
        fr: 'Les forces contraires qu’il doit mener d’un seul vouloir — sans rênes, par la seule volonté.',
        en: 'The opposing forces he must drive as one — no reins, by will alone.',
      },
    },
    {
      label: { fr: 'Le dais étoilé', en: 'The starry canopy' },
      text: {
        fr: 'Le ciel qui le guide : la conduite juste vient d’en haut, pas du seul effort.',
        en: 'The sky that guides him: right conduct comes from above, not from effort alone.',
      },
    },
    {
      label: { fr: 'La cité, derrière lui', en: 'The city, behind him' },
      text: {
        fr: 'Ce qu’il quitte pour vaincre : la victoire au prix du départ, du confort laissé.',
        en: 'What he leaves to conquer: victory at the cost of departure, of comfort left behind.',
      },
    },
  ],
  'major-08': [
    {
      label: { fr: 'La femme qui referme la gueule du lion', en: 'The woman closing the lion’s jaws' },
      text: {
        fr: 'La maîtrise par la douceur, non par la brute : la vraie force est tranquille.',
        en: 'Mastery through gentleness, not brute strength: true force is calm.',
      },
    },
    {
      label: { fr: 'Le lion', en: 'The lion' },
      text: {
        fr: 'L’instinct brut, la passion animale — apprivoisé par l’amour, pas soumis par la peur.',
        en: 'Raw instinct, animal passion — tamed by love, not subdued by fear.',
      },
    },
    {
      label: { fr: 'Le lemniscate (∞)', en: 'The lemniscate (∞)' },
      text: {
        fr: 'La même puissance infinie que le Magicien, mais tournée vers le dedans.',
        en: 'The same infinite power as the Magician, here turned inward.',
      },
    },
  ],
  'major-09': [
    {
      label: { fr: 'La lanterne à l’étoile', en: 'The star-lantern' },
      text: {
        fr: 'Le Sceau de Salomon en son cœur : la lumière intérieure qu’il tend pour guider.',
        en: 'The Seal of Solomon at its heart: the inner light he holds out to guide.',
      },
    },
    {
      label: { fr: 'Le sommet enneigé', en: 'The snowy peak' },
      text: {
        fr: 'La hauteur d’une quête solitaire : il s’est retiré du monde pour voir clair.',
        en: 'The height of a solitary quest: he withdrew from the world to see clearly.',
      },
    },
    {
      label: { fr: 'Le bâton', en: 'The staff' },
      text: {
        fr: 'Le soutien et la volonté qui le portent, pas à pas, sur le chemin.',
        en: 'The support and the will that carry him, step by step, along the path.',
      },
    },
  ],
  'major-10': [
    {
      label: { fr: 'La roue (ROTA / TARO)', en: 'The wheel (ROTA / TARO)' },
      text: {
        fr: 'Le tour du sort : les cycles, la montée et la chute, ce qui revient toujours.',
        en: 'The turn of fate: the cycles, the rise and the fall, what always comes round.',
      },
    },
    {
      label: { fr: 'Le sphinx au sommet, l’épée en main', en: 'The sphinx atop, sword in hand' },
      text: {
        fr: 'L’équilibre au-dessus du mouvement : rester stable quand tout tourne.',
        en: 'Balance above the movement: staying steady while all turns.',
      },
    },
    {
      label: { fr: 'Le serpent qui descend, Anubis qui monte', en: 'The snake descending, Anubis rising' },
      text: {
        fr: 'Ce qui chute et ce qui s’élève à chaque tour — rien n’est acquis.',
        en: 'What falls and what rises with each turn — nothing is fixed.',
      },
    },
  ],
  'major-11': [
    {
      label: { fr: 'L’épée dressée', en: 'The upright sword' },
      text: {
        fr: 'La décision claire, impartiale : le tranchant de la vérité qui coupe net.',
        en: 'The clear, impartial decision: the edge of truth that cuts clean.',
      },
    },
    {
      label: { fr: 'La balance', en: 'The scales' },
      text: {
        fr: 'Le poids des actes et de leurs suites : cause et effet mis en regard.',
        en: 'The weight of deeds and their consequences: cause and effect held up together.',
      },
    },
    {
      label: { fr: 'Le pied qui dépasse du voile', en: 'The foot stepping past the veil' },
      text: {
        fr: 'Prête à agir sur son verdict — la justice ne reste pas assise.',
        en: 'Ready to act on her verdict — justice does not stay seated.',
      },
    },
  ],
  'major-12': [
    {
      label: { fr: 'La suspension tête en bas', en: 'Hanging head-down' },
      text: {
        fr: 'Le point de vue renversé : lâcher prise pour voir enfin autrement.',
        en: 'The reversed viewpoint: letting go to see, at last, differently.',
      },
    },
    {
      label: { fr: 'L’auréole autour de la tête', en: 'The halo around the head' },
      text: {
        fr: 'L’illumination gagnée dans l’abandon : la pause éclaire.',
        en: 'Illumination won through surrender: the pause enlightens.',
      },
    },
    {
      label: { fr: 'La jambe croisée en 4, l’arbre vivant', en: 'The leg crossed in a 4, the living tree' },
      text: {
        fr: 'Le sacrifice choisi, non subi — et l’arbre verdoyant : cette attente est féconde.',
        en: 'Sacrifice chosen, not imposed — and the green tree: this waiting is fertile.',
      },
    },
  ],
  'major-13': [
    {
      label: { fr: 'Le squelette en armure sur le cheval blanc', en: 'The armoured skeleton on the white horse' },
      text: {
        fr: 'L’inévitable en marche, que nul rang n’arrête : la transformation avance.',
        en: 'The inevitable on the march, that no rank halts: transformation advances.',
      },
    },
    {
      label: { fr: 'La bannière à la rose blanche', en: 'The banner with the white rose' },
      text: {
        fr: 'La mort comme renouveau : ce qui finit ouvre à une vie plus pure.',
        en: 'Death as renewal: what ends opens onto a purer life.',
      },
    },
    {
      label: { fr: 'Le soleil entre deux tours, à l’horizon', en: 'The sun between two towers, on the horizon' },
      text: {
        fr: 'Au loin, la renaissance qui se lève au-delà du passage.',
        en: 'Far off, the rebirth rising beyond the passage.',
      },
    },
  ],
  'major-14': [
    {
      label: { fr: 'L’eau versée d’une coupe à l’autre', en: 'Water poured from cup to cup' },
      text: {
        fr: 'Le mélange sans fin : l’équilibre en mouvement, la juste mesure.',
        en: 'The endless blending: balance in motion, the right measure.',
      },
    },
    {
      label: { fr: 'Un pied sur terre, un pied dans l’eau', en: 'One foot on land, one in the water' },
      text: {
        fr: 'Le pont entre le conscient et l’inconscient, la matière et le sentiment.',
        en: 'The bridge between conscious and unconscious, matter and feeling.',
      },
    },
    {
      label: { fr: 'Le sentier vers les montagnes, la couronne au loin', en: 'The path to the mountains, the crown afar' },
      text: {
        fr: 'Le long chemin vers le but plus haut : la patience de l’alchimiste.',
        en: 'The long road toward the higher goal: the alchemist’s patience.',
      },
    },
  ],
  'major-15': [
    {
      label: { fr: 'Les chaînes lâches autour du cou', en: 'The loose chains around the neck' },
      text: {
        fr: 'La servitude qu’on pourrait défaire : le piège est consenti.',
        en: 'Bondage that could be slipped: the trap is consented to.',
      },
    },
    {
      label: { fr: 'Le pentagramme inversé', en: 'The inverted pentagram' },
      text: {
        fr: 'L’appétit qui règne sur l’esprit : les valeurs retournées, la matière au-dessus.',
        en: 'Appetite ruling over spirit: values upended, matter placed above.',
      },
    },
    {
      label: { fr: 'La torche renversée', en: 'The reversed torch' },
      text: {
        fr: 'Le feu détourné : le désir qui consume au lieu d’éclairer.',
        en: 'The misused fire: desire that consumes instead of lighting the way.',
      },
    },
  ],
  'major-16': [
    {
      label: { fr: 'La foudre qui frappe', en: 'The striking lightning' },
      text: {
        fr: 'Le trait soudain venu du dehors : la vérité ou le désastre qui fracasse tout.',
        en: 'The sudden bolt from outside: the truth or disaster that shatters everything.',
      },
    },
    {
      label: { fr: 'La couronne soufflée du sommet', en: 'The crown blown off the top' },
      text: {
        fr: 'Les fausses structures renversées : ce qui était bâti sur le mensonge tombe.',
        en: 'False structures toppled: what was built on a lie comes down.',
      },
    },
    {
      label: { fr: 'Les deux figures qui chutent', en: 'The two figures falling' },
      text: {
        fr: 'La chute que nul n’a vue venir, jeté hors de ses certitudes.',
        en: 'The fall no one saw coming, thrown out of one’s certainties.',
      },
    },
  ],
  'major-17': [
    {
      label: { fr: 'La grande étoile à huit branches', en: 'The great eight-pointed star' },
      text: {
        fr: 'L’espérance et le guide : la lumière douce après la nuit de la Tour.',
        en: 'Hope and guidance: the soft light after the Tower’s night.',
      },
    },
    {
      label: { fr: 'Les deux cruches versées (eau et terre)', en: 'The two jugs poured (water and earth)' },
      text: {
        fr: 'Le renouveau rendu au monde et aux profondeurs, sans rien retenir.',
        en: 'Renewal returned to the world and to the depths, holding nothing back.',
      },
    },
    {
      label: { fr: 'La femme nue', en: 'The naked woman' },
      text: {
        fr: 'La vérité mise à nu : plus rien à cacher, la vulnérabilité assumée.',
        en: 'Truth laid bare: nothing left to hide, vulnerability owned.',
      },
    },
  ],
  'major-18': [
    {
      label: { fr: 'La lune aux gouttes', en: 'The moon shedding drops' },
      text: {
        fr: 'L’illusion : la lumière qui déforme, les rêves et les peurs mêlés.',
        en: 'Illusion: the light that distorts, dreams and fears entangled.',
      },
    },
    {
      label: { fr: 'Le chien et le loup qui hurlent', en: 'The dog and the wolf howling' },
      text: {
        fr: 'L’esprit apprivoisé et l’esprit sauvage, tous deux troublés par la nuit.',
        en: 'The tamed mind and the wild mind, both unsettled by the night.',
      },
    },
    {
      label: { fr: 'L’écrevisse qui sort de l’eau', en: 'The crayfish emerging from the water' },
      text: {
        fr: 'Les peurs enfouies qui remontent des profondeurs vers la surface.',
        en: 'Buried fears crawling up from the depths toward the surface.',
      },
    },
  ],
  'major-19': [
    {
      label: { fr: 'Le soleil rayonnant', en: 'The radiant sun' },
      text: {
        fr: 'La clarté, la vitalité, la vérité en pleine lumière — la joie sans ombre.',
        en: 'Clarity, vitality, truth in full light — joy without shadow.',
      },
    },
    {
      label: { fr: 'L’enfant nu sur le cheval blanc', en: 'The naked child on the white horse' },
      text: {
        fr: 'La joie innocente, rien de caché, la liberté d’être pleinement soi.',
        en: 'Innocent joy, nothing hidden, the freedom to be fully oneself.',
      },
    },
    {
      label: { fr: 'Les tournesols et le mur', en: 'The sunflowers and the wall' },
      text: {
        fr: 'Ce qui se tourne vers la lumière — et le jardin clos qu’on laisse derrière.',
        en: 'What turns toward the light — and the walled garden left behind.',
      },
    },
  ],
  'major-20': [
    {
      label: { fr: 'L’ange à la trompette', en: 'The angel with the trumpet' },
      text: {
        fr: 'L’appel qui réveille : la sommation qu’on ne peut ignorer.',
        en: 'The call that awakens: the summons that cannot be ignored.',
      },
    },
    {
      label: { fr: 'Les morts qui se lèvent des tombes', en: 'The dead rising from the graves' },
      text: {
        fr: 'La renaissance : le passé soldé, on se relève renouvelé.',
        en: 'Rebirth: the past settled, one rises renewed.',
      },
    },
    {
      label: { fr: 'Les bras ouverts des ressuscités', en: 'The open arms of the risen' },
      text: {
        fr: 'L’acceptation du grand bilan, prêt à répondre de tout.',
        en: 'Acceptance of the great reckoning, ready to answer for all.',
      },
    },
  ],
  'major-21': [
    {
      label: { fr: 'La couronne de laurier (la mandorle)', en: 'The laurel wreath (the mandorla)' },
      text: {
        fr: 'L’achèvement : le cycle bouclé, l’œuvre accomplie.',
        en: 'Completion: the cycle closed, the work fulfilled.',
      },
    },
    {
      label: { fr: 'La figure qui danse', en: 'The dancing figure' },
      text: {
        fr: 'La liberté trouvée au cœur du tour complet : l’harmonie enfin.',
        en: 'Freedom found at the heart of the full round: harmony at last.',
      },
    },
    {
      label: { fr: 'Les quatre vivants aux coins', en: 'The four creatures at the corners' },
      text: {
        fr: 'Les quatre éléments réunis : la plénitude du monde entier.',
        en: 'The four elements gathered: the fullness of the whole world.',
      },
    },
  ],
  'wands-01': [
    {
      label: { fr: 'La main jaillie du nuage', en: 'The hand from the cloud' },
      text: { fr: 'Sortie d’un nuage gris à droite, elle empoigne fermement le bâton à pleine main : l’occasion t’est déjà donnée, saisie à bras-le-corps.', en: 'Emerging from a grey cloud on the right, it grips the wand firmly in a closed fist: the opportunity is already yours, seized in full.' },
    },
    {
      label: { fr: 'Les feuilles neuves qui tombent', en: 'The falling new leaves' },
      text: { fr: 'Le bâton bourgeonne encore et sème ses jeunes feuilles vertes dans l’air — signe que la sève monte vraiment, que ce début est vivant et déjà en croissance.', en: 'The wand is still budding and scatters its young green leaves through the air — a sign the sap is truly rising, that this beginning is alive and already growing.' },
    },
    {
      label: { fr: 'Le château sur la colline', en: 'The castle on the hill' },
      text: { fr: 'Petit et lointain, il se dresse sur sa hauteur à gauche du paysage : la destination existe déjà, il ne manque que le premier pas pour t’y porter.', en: 'Small and distant, it stands on its height at the left of the landscape: the destination already exists, only the first step is missing to carry you there.' },
    },
  ],
  'wands-02': [
    {
      label: { fr: 'Le globe dans sa main droite', en: 'The globe in his right hand' },
      text: { fr: 'L’homme tient le monde entier au creux de la paume : ton projet est déjà vaste, reste à décider où le porter.', en: 'The man cradles the whole world in his palm: your project is already vast, now you must decide where to carry it.' },
    },
    {
      label: { fr: 'Le second bâton fixé au mur', en: 'The second wand fixed to the wall' },
      text: { fr: 'Le second bâton reste arrimé à la pierre derrière lui : une partie de toi s’accroche encore au connu tandis que l’autre veut partir.', en: 'The second wand stays fastened to the stone behind him: part of you still clings to the known while the other wants to leave.' },
    },
    {
      label: { fr: 'La rose et le lys croisés', en: 'The crossed rose and lily' },
      text: { fr: 'Dans le coin du muret, une rose rouge et un lys blanc gravés se croisent : ton désir brûlant et ton besoin de pureté te tirent chacun de leur côté.', en: 'In the corner of the ledge, an engraved red rose and white lily cross: your burning desire and your need for purity each pull you their own way.' },
    },
  ],
  'wands-03': [
    {
      label: { fr: 'La figure vue de dos', en: 'The figure seen from behind' },
      text: { fr: 'Il te tourne le dos, campé sur la hauteur : ton attention est déjà tournée vers le large, plus vers ce que tu quittes.', en: 'He turns his back to you, planted on the height: your attention is already turned toward open water, no longer toward what you are leaving.' },
    },
    {
      label: { fr: 'Les navires au loin sur la mer', en: 'The ships far out on the sea' },
      text: { fr: 'De petites voiles glissent à l’horizon : tes envois sont partis, et ce qui revient reviendra plus vaste que ce que tu as lancé.', en: 'Small sails glide on the horizon: your ventures have set out, and what returns will come back larger than what you sent.' },
    },
    {
      label: { fr: 'Le bâton qu’il tient en main', en: 'The staff he holds in hand' },
      text: { fr: 'Des trois bâtons dressés autour de lui, sa main en saisit un seul : l’engagement concret d’une entreprise déjà en marche, gardée à portée.', en: 'Of the three staves standing around him, his hand grips a single one: the concrete commitment to a venture already under way, kept within reach.' },
    },
  ],
  'wands-04': [
    {
      label: { fr: 'Les quatre bâtons dressés', en: 'The four upright staves' },
      text: { fr: 'Plantés bien droits et fleuris à leur sommet, ils forment un portique : les fondations solides sur lesquelles ta quête peut enfin se poser et célébrer.', en: 'Standing straight and crowned with blossoms at their tips, they form a portal: the solid foundations on which your quest can at last settle and celebrate.' },
    },
    {
      label: { fr: 'La guirlande fleurie en feston', en: 'The flowered garland festooned' },
      text: { fr: 'Tendue en swag entre les sommets des bâtons, lourde de feuilles et de fruits, elle transforme le seuil en fête : la récolte et la joie partagée après l’effort.', en: 'Draped as a swag between the tops of the staves, heavy with leaves and fruit, it turns the threshold into a feast: the harvest and shared joy after the effort.' },
    },
    {
      label: { fr: 'Les deux silhouettes aux bouquets levés', en: 'The two figures with raised bouquets' },
      text: { fr: 'Devant le château, elles brandissent des bouquets vers le ciel : ceux qui t’accueillent au foyer et te disent que tu as trouvé ta place.', en: 'Before the castle, they raise bouquets toward the sky: those who welcome you home and tell you that you have found your place.' },
    },
  ],
  'wands-05': [
    {
      label: { fr: 'Les cinq bâtons entrecroisés', en: 'The five crossed staves' },
      text: { fr: 'Levés et se croisant en un enchevêtrement désordonné, ils ne convergent vers rien : la mêlée où chaque voix veut couvrir les autres.', en: 'Raised and crossing in a disordered tangle, they converge on nothing: the melee where every voice tries to drown out the rest.' },
    },
    {
      label: { fr: 'Les cinq jeunes gens', en: 'The five young men' },
      text: { fr: 'Ils s’affrontent tête nue, sans armure ni sang : une rivalité de bravade plus qu’une vraie guerre, un chahut qui peut se dénouer.', en: 'They clash bareheaded, without armor or blood: a rivalry of bravado more than real war, a scuffle that can still be undone.' },
    },
    {
      label: { fr: 'Les tuniques dépareillées', en: 'The mismatched tunics' },
      text: { fr: 'Vertes, rouges, jaunes, chacun vêtu différemment : cinq visions qui refusent de s’accorder.', en: 'Green, red, yellow, each dressed differently: five outlooks that refuse to fall into agreement.' },
    },
  ],
  'wands-06': [
    {
      label: { fr: 'La couronne de laurier', en: 'The laurel crown' },
      text: { fr: 'Posée sur sa tête, la victoire déjà proclamée : tu rentres acclamé, la reconnaissance t’attend au tournant.', en: 'Set upon his head, victory already proclaimed: you return to cheers, recognition waiting round the bend.' },
    },
    {
      label: { fr: 'Le cheval blanc caparaçonné', en: 'The draped white horse' },
      text: { fr: 'Sa monture blanche couverte d’un drap, portée haut au milieu de la foule : ton triomphe s’affiche, il ne se cache plus.', en: 'His white mount covered in a cloth, borne high through the crowd: your triumph is on display, hidden no longer.' },
    },
    {
      label: { fr: 'Les six bâtons dressés', en: 'The six raised staves' },
      text: { fr: 'Le sien couronné d’une guirlande, cinq autres levés par ceux qui l’escortent : tu ne gagnes pas seul, on marche derrière toi.', en: 'His own crowned with a garland, five more raised by those escorting him: you do not win alone, they march behind you.' },
    },
  ],
  'wands-07': [
    {
      label: { fr: 'Les six bâtons d’en bas', en: 'The six wands below' },
      text: { fr: 'Six hampes montent depuis le bord inférieur du cadre pour l’assaillir : tu tiens seul, en hauteur, contre une opposition venue d’en dessous.', en: 'Six staves rise from the lower edge of the frame to challenge him: you hold your ground alone, above, against opposition coming from below.' },
    },
    {
      label: { fr: 'Les deux chaussures dépareillées', en: 'The two mismatched shoes' },
      text: { fr: 'Il porte une botte montante à un pied et une chaussure basse à l’autre : tu défends ta position sans avoir eu le temps de te préparer.', en: 'He wears a high boot on one foot and a low shoe on the other: you defend your position without having had time to get ready.' },
    },
    {
      label: { fr: 'Le seul bâton brandi', en: 'The single raised wand' },
      text: { fr: 'Il empoigne des deux mains son unique bâton, tenu en travers au-dessus des autres : garde le terrain conquis, ton avantage tient à ta hauteur.', en: 'He grips his single wand with both hands, held crosswise above the others: keep the ground you’ve won, your advantage lies in your higher stance.' },
    },
  ],
  'wands-08': [
    {
      label: { fr: 'Les huit bâtons en plein vol', en: 'The eight wands in flight' },
      text: { fr: 'Aucune main ne les tient : les huit bâtons feuillus filent en biais dans les airs, tous parallèles et dans le même sens — ce que tu as lancé fonce déjà vers sa cible.', en: 'No hand holds them: the eight leafy wands streak diagonally through the air, all parallel and pointing the same way — what you set loose is already racing toward its mark.' },
    },
    {
      label: { fr: 'Le ciel clair et dégagé', en: 'The clear open sky' },
      text: { fr: 'Pas un nuage pour ralentir la course : le ciel est d’un bleu uni, la voie est libre, l’instant est celui de la vitesse et non de l’attente.', en: 'Not a cloud to slow the course: the sky is plain blue, the way is open, and the moment is one of speed rather than waiting.' },
    },
    {
      label: { fr: 'La rivière et la maison au loin', en: 'The river and the distant house' },
      text: { fr: 'En contrebas serpente un cours d’eau à travers la campagne verte, avec une petite maison sur la rive lointaine : une terre paisible au sol tandis que tout se précipite au-dessus.', en: 'Below, a stream winds through the green country with a small house on the far bank: a peaceful land at ground level while everything rushes overhead.' },
    },
  ],
  'wands-09': [
    {
      label: { fr: 'Le bandage autour du front', en: 'The bandage around his head' },
      text: { fr: 'Un linge enroulé autour de sa tête : tu portes encore les blessures des combats passés, mais tu es toujours debout.', en: 'A cloth wound around his head: you still bear the wounds of past battles, yet you are still standing.' },
    },
    {
      label: { fr: 'Les huit bâtons dressés derrière', en: 'The eight staves standing behind' },
      text: { fr: 'Alignés en palissade dans son dos : tout ce que tu as déjà défendu, la dernière ligne à ne pas laisser tomber.', en: 'Lined up like a stockade at his back: everything you have already defended, the last line you refuse to give up.' },
    },
    {
      label: { fr: 'Le bâton tenu des deux mains', en: 'The staff held in both hands' },
      text: { fr: 'Il s’y appuie et l’agrippe, le regard tourné de côté : tu montes la garde, méfiant, prêt à l’ultime assaut.', en: 'He leans on it and grips it, his gaze turned aside: you stand guard, wary, braced for the final assault.' },
    },
  ],
  'wands-10': [
    {
      label: { fr: 'Les dix bâtons en brassée', en: 'Ten staves in one armful' },
      text: { fr: 'Les dix bâtons serrés d’un seul coup entre ses bras penchés en avant : tu as tout pris sur toi, et maintenant la charge te plie.', en: 'All ten staves clutched at once in his forward-bent arms: you took everything on yourself, and now the load bends you double.' },
    },
    {
      label: { fr: 'Le dos courbé, le visage baissé', en: 'Bent back, lowered face' },
      text: { fr: 'Ployé en avant derrière la brassée, tu ne regardes plus que le sol devant tes pas — l’effort t’absorbe au point d’en oublier pourquoi tu marches.', en: 'Hunched forward behind the bundle, you see only the ground before your feet — the effort so absorbs you that you forget why you walk.' },
    },
    {
      label: { fr: 'Le village au loin', en: 'The village in the distance' },
      text: { fr: 'Les toits d’un hameau se dessinent à droite, un toit rouge en tête : le but est presque là, tiens encore quelques pas avant de tout poser.', en: 'The roofs of a hamlet take shape to the right, a red roof leading: the goal is nearly there — hold a few more steps before you set it all down.' },
    },
  ],
  'wands-11': [
    {
      label: { fr: 'Les salamandres sur sa tunique', en: 'The salamanders on his tunic' },
      text: { fr: 'Sa tunique est semée de petites salamandres noires, ces bêtes du feu qui traversent les flammes sans brûler : elles disent l’énergie qui bouillonne en toi avant même que tu saches quoi en faire.', en: 'His tunic is strewn with little black salamanders, those fire creatures that pass through flames unburnt: they name the energy bubbling up in you before you even know what to do with it.' },
    },
    {
      label: { fr: 'Le long bâton bourgeonnant', en: 'The long budding staff' },
      text: { fr: 'Il tient un unique bâton plus grand que lui, d’où pointent de jeunes feuilles vertes ; regarde-le comme lui : une idée neuve pousse, encore verte, prête à être portée.', en: 'He holds a single staff taller than himself, with young green leaves sprouting from it; look at it as he does: a new idea is growing, still green, ready to be carried.' },
    },
    {
      label: { fr: 'Les trois pyramides au loin', en: 'The three pyramids in the distance' },
      text: { fr: 'Derrière lui, un désert nu et trois pyramides à l’horizon : le voyage n’est pas commencé, tout l’espace reste à traverser, et c’est là que ton élan doit se dépenser.', en: 'Behind him, a bare desert and three pyramids on the horizon: the journey hasn’t begun, all that space remains to be crossed, and that is where your drive must be spent.' },
    },
  ],
  'wands-12': [
    {
      label: { fr: 'Le cheval cabré, jambes en l’air', en: 'The rearing horse, legs in the air' },
      text: { fr: 'Sa monture rousse se cabre d’un bond, sabots avant levés : tu pars au galop avant même d’avoir réfléchi.', en: 'His chestnut mount rears in a single bound, forelegs lifted: you charge off before you’ve even had time to think.' },
    },
    {
      label: { fr: 'Les trois pyramides au loin', en: 'The three pyramids in the distance' },
      text: { fr: 'Derrière lui, le désert nu et ses trois pyramides : la terre aride qu’il traverse sans s’arrêter, tout à sa quête.', en: 'Behind him, the bare desert and its three pyramids: the arid land he crosses without pausing, wholly given to his quest.' },
    },
    {
      label: { fr: 'Les salamandres sur son surcot', en: 'The salamanders on his surcoat' },
      text: { fr: 'Son surcot jaune est semé de salamandres, créatures du feu : l’ardeur qui te brûle, mais dont la queue reste inachevée, encore mal maîtrisée.', en: 'His yellow surcoat is strewn with salamanders, creatures of fire: the ardour that burns in you, yet whose tail stays unfinished, not yet mastered.' },
    },
  ],
  'wands-13': [
    {
      label: { fr: 'Le chat noir à ses pieds', en: 'The black cat at her feet' },
      text: { fr: 'Assis bien droit face à toi, l’animal veille : ton instinct farouche, l’allié qui garde tes arrières autant qu’il flaire le danger.', en: 'Sitting bolt upright and facing you, the creature keeps watch: your fierce instinct, the ally who guards your back as keenly as it scents danger.' },
    },
    {
      label: { fr: 'Le tournesol qu’elle tient', en: 'The sunflower she holds' },
      text: { fr: 'Une seule fleur dressée dans sa main gauche, tournée vers la lumière : mets ta chaleur là où la vie pousse, pas là où elle s’éteint.', en: 'A single bloom held up in her left hand, turned toward the light: put your warmth where life grows, not where it dies out.' },
    },
    {
      label: { fr: 'Les lions sculptés du trône', en: 'The carved lions of the throne' },
      text: { fr: 'Deux têtes de fauve en pierre encadrent son siège : l’autorité assumée, une force de feu que tu n’as plus à prouver, seulement à tenir.', en: 'Two carved lion heads flank her seat: authority owned, a force of fire you no longer have to prove, only to hold.' },
    },
  ],
  'wands-14': [
    {
      label: { fr: 'Les salamandres du trône', en: 'The salamanders on the throne' },
      text: { fr: 'Des lézards ardents ornent le dossier de son trône : ta volonté se nourrit du feu, brûlante et vivace.', en: 'Fiery lizards adorn the back of his throne: your will feeds on fire, burning and alive.' },
    },
    {
      label: { fr: 'Le long bâton verdoyant', en: 'The long budding staff' },
      text: { fr: 'Il empoigne fermement un bâton qui bourgeonne encore de feuilles : une initiative bien vivante attend ton élan.', en: 'He firmly grips a staff still budding with leaves: a living initiative awaits your momentum.' },
    },
    {
      label: { fr: 'Le petit lézard à ses pieds', en: 'The little lizard at his feet' },
      text: { fr: 'Une salamandre posée sur le sol, la queue presque en boucle : ose la boucler pour mener ton projet jusqu’au bout.', en: 'A salamander on the ground, its tail nearly forming a loop: dare to close the loop and see your project through.' },
    },
  ],
  'cups-01': [
    {
      label: { fr: 'Les cinq filets d’eau', en: 'The five streams of water' },
      text: { fr: 'Débordant du calice, ils retombent sans fin sur l’étang : ta source intérieure est trop pleine pour se retenir, laisse-la couler.', en: 'Overflowing the chalice, they fall endlessly onto the pond: your inner spring is too full to hold back, let it pour.' },
    },
    {
      label: { fr: 'La colombe et l’hostie', en: 'The dove and the wafer' },
      text: { fr: 'Elle descend déposer dans la coupe un disque marqué d’une croix : un don venu d’en haut qui bénit l’instant, accueille-le sans le mériter d’abord.', en: 'It descends to lay a disc marked with a cross into the cup: a gift from above that blesses the moment, receive it without first earning it.' },
    },
    {
      label: { fr: 'L’étang couvert de lys', en: 'The pond covered with lilies' },
      text: { fr: 'Sous la coupe qui déborde, les fleurs flottent sur l’eau calme : le cœur qui s’ouvre à fleur d’eau, offert et vulnérable — penche-toi pour y boire.', en: 'Beneath the overflowing cup, the flowers float on the still water: the heart opening at the water’s edge, offered and vulnerable — lean in to drink.' },
    },
  ],
  'cups-02': [
    {
      label: { fr: 'Les deux coupes échangées', en: 'The two exchanged cups' },
      text: { fr: 'Un homme et une femme se font face, chacun tenant sa coupe d’or et la tendant vers l’autre : un pacte scellé, un serment que tu ne peux jurer seul.', en: 'A man and a woman face each other, each holding a golden cup and offering it toward the other: a pact sealed, an oath you cannot swear alone.' },
    },
    {
      label: { fr: 'Le caducée au lion ailé', en: 'The winged lion caduceus' },
      text: { fr: 'Deux serpents enlacés sur un bâton, surmontés d’une tête de lion rouge aux ailes déployées, flottant entre eux : le désir brut apprivoisé, la passion qui guérit au lieu de blesser.', en: 'Two serpents entwined on a staff, crowned by a red lion’s head with wings spread wide, floating between them: raw desire tamed, the passion that heals instead of wounding.' },
    },
    {
      label: { fr: 'La maison au toit rouge sur la colline', en: 'The red-roofed house on the hill' },
      text: { fr: 'Au loin, une petite maison au toit rouge posée sur une butte verte : ce lien pourrait devenir un foyer, si tu choisis d’y bâtir.', en: 'Far off, a small house with a red roof set on a green mound: this bond could become a home, if you choose to build there.' },
    },
  ],
  'cups-03': [
    {
      label: { fr: 'Les trois coupes levées', en: 'The three raised cups' },
      text: { fr: 'Les trois femmes brandissent chacune leur coupe d’or vers le centre, où elles se rejoignent : un toast, une alliance scellée, un cercle qui te tend la main.', en: 'The three women each raise their gold cup toward the center, where they meet: a toast, a sealed bond, a circle reaching out to you.' },
    },
    {
      label: { fr: 'La danseuse de dos en robe rouge', en: 'The red-robed woman, seen from behind' },
      text: { fr: 'Au centre, une femme te tourne le dos, drapée d’une ample robe rouge : la joie n’exclut personne, mais elle attend que tu fasses le pas pour la rejoindre.', en: 'At the center a woman turns her back to you, wrapped in a flowing red robe: the joy shuts no one out, but it waits for you to step in and join it.' },
    },
    {
      label: { fr: 'Les fruits et la citrouille au sol', en: 'The fruit and pumpkin on the ground' },
      text: { fr: 'À leurs pieds s’étalent la récolte et une grosse citrouille : l’abondance a mûri, c’est l’heure de célébrer ce que l’effort commun a fait pousser.', en: 'At their feet lie the harvest and a large pumpkin: abundance has ripened, it’s time to celebrate what shared effort has grown.' },
    },
  ],
  'cups-04': [
    {
      label: { fr: 'Les bras croisés', en: 'The folded arms' },
      text: { fr: 'Le jeune homme assis sous l’arbre, bras croisés sur la poitrine : le repli boudeur, la porte fermée à ce qu’on t’offre.', en: 'The young man seated beneath the tree, arms folded across his chest: the sullen withdrawal, the door closed to what you’re offered.' },
    },
    {
      label: { fr: 'Les trois coupes posées', en: 'The three standing cups' },
      text: { fr: 'Devant lui, trois coupes dressées sur l’herbe sur lesquelles son regard reste fixé : le bien déjà là, ressassé par lassitude.', en: 'Before him, three cups stand upright on the grass, and his gaze stays fixed on them: the good already at hand, brooded over out of weariness.' },
    },
    {
      label: { fr: 'La coupe dans la nuée', en: 'The cup from the cloud' },
      text: { fr: 'Une main sort d’un nuage gris et tend une quatrième coupe : l’offre inattendue que ton indifférence risque de laisser passer.', en: 'A hand reaches from a grey cloud, holding out a fourth cup: the unexpected offer your indifference risks letting slip by.' },
    },
  ],
  'cups-05': [
    {
      label: { fr: 'Les trois coupes renversées', en: 'The three toppled cups' },
      text: { fr: 'Devant la figure au long manteau noir, trois coupes gisent renversées, leur contenu répandu sur le sol : tu fixes ce qui est perdu.', en: 'Before the figure in the long black cloak, three cups lie toppled, their contents spilled across the ground: you stare at what is lost.' },
    },
    {
      label: { fr: 'Les deux coupes debout', en: 'The two upright cups' },
      text: { fr: 'Derrière son dos, deux coupes tiennent encore debout : le deuil t’aveugle sur ce qu’il te reste, retourne-toi.', en: 'Behind its back, two cups still stand upright: grief blinds you to what remains, turn around.' },
    },
    {
      label: { fr: 'Le pont vers le château', en: 'The bridge toward the castle' },
      text: { fr: 'Au loin, une rivière franchie par un petit pont mène à un château : le chemin du retour existe, quand tu voudras le prendre.', en: 'In the distance, a river crossed by a small bridge leads to a castle: the way back exists, whenever you choose to take it.' },
    },
  ],
  'cups-06': [
    {
      label: { fr: 'La coupe de fleurs tendue', en: 'The offered flower-cup' },
      text: { fr: 'L’enfant le plus grand la tend au plus petit : un présent d’enfance, offert sans arrière-pensée — accepte-le, quelqu’un te veut du bien.', en: 'The taller child holds it out to the smaller one: a childhood gift, given with no ulterior motive — take it, someone means you well.' },
    },
    {
      label: { fr: 'Les six coupes fleuries', en: 'The six blossoming cups' },
      text: { fr: 'Chacune emplie d’une grande fleur blanche à cinq pointes : six douceurs alignées, autant de souvenirs adoucis qui remontent tout ensemble.', en: 'Each brimming with a large five-pointed white bloom: six sweetnesses in a row, as many softened memories rising all at once.' },
    },
    {
      label: { fr: 'La silhouette qui s’éloigne', en: 'The figure walking away' },
      text: { fr: 'Au fond, un gardien pique à l’épaule quitte la cour, dos tourné : le monde des grands s’écarte pour te laisser cet instant tendre et protégé.', en: 'In the background, a guard with a pike on his shoulder leaves the courtyard, his back turned: the grown-up world steps aside to leave you this tender, sheltered moment.' },
    },
  ],
  'cups-07': [
    {
      label: { fr: 'La silhouette de dos, dans l’ombre', en: 'The dark figure seen from behind' },
      text: { fr: 'Face aux visions, tu contemples sans choisir : c’est toi, silhouette sombre hypnotisée par tout ce que tu pourrais désirer.', en: 'Facing the visions, you gaze without choosing: it’s you, a dark shape mesmerised by all you might desire.' },
    },
    {
      label: { fr: 'Les sept coupes sur la nuée', en: 'The seven cups upon the cloud' },
      text: { fr: 'Elles flottent sur un nuage gris, sans sol ni poids : sept possibles séduisants qui ne tiennent qu’à la fumée.', en: 'They float on a grey cloud, without ground or weight: seven seductive possibilities held up by nothing but smoke.' },
    },
    {
      label: { fr: 'La figure voilée qui rayonne', en: 'The veiled figure that glows' },
      text: { fr: 'Dans l’une des coupes, une silhouette drapée d’un voile irradie de lumière : le mirage le plus pur, celui qu’on n’ose pas regarder en face.', en: 'In one of the cups, a shrouded figure blazes with light: the purest mirage, the one you dare not look at directly.' },
    },
  ],
  'cups-08': [
    {
      label: { fr: 'Les huit coupes en rangées', en: 'The eight cups in rows' },
      text: { fr: 'Cinq coupes dressées en bas, trois posées au-dessus, mais un vide laisse un trou : ce que tu as bâti reste debout, et pourtant il y manque quelque chose.', en: 'Five cups standing below, three set above, yet a gap leaves a hole: what you built still stands, and something in it is missing all the same.' },
    },
    {
      label: { fr: 'L’homme de dos qui s’éloigne', en: 'The figure walking away' },
      text: { fr: 'Bâton en main, drapé de rouge, il tourne le dos à ses coupes et gravit les hauteurs rocheuses : tu choisis de partir vers l’inconnu plutôt que de rester.', en: 'Staff in hand, draped in red, he turns his back on his cups and climbs the rocky heights: you choose to leave for the unknown rather than stay.' },
    },
    {
      label: { fr: 'La lune éclipsée dans le ciel', en: 'The eclipsed moon in the sky' },
      text: { fr: 'Un croissant enlaçant un disque plein, tout en haut : le voyage se fait de nuit, guidé par un pressentiment plus que par la clarté.', en: 'A crescent embracing a full disc, high above: the journey unfolds by night, guided by a hunch more than by any light.' },
    },
  ],
  'cups-09': [
    {
      label: { fr: 'Les neuf coupes en arc de cercle', en: 'The nine cups in an arc' },
      text: { fr: 'Disposées en arc de cercle sur l’étoffe bleue derrière lui, ta collection au complet : le vœu déjà exaucé, tout ce que tu voulais posé bien en vue.', en: 'Ranged in a curved arc on the blue cloth behind him, your whole collection: the wish already granted, everything you wanted set out in plain sight.' },
    },
    {
      label: { fr: 'Les bras croisés du festin', en: 'The banquet’s folded arms' },
      text: { fr: 'L’homme trône, bras repliés sur son ventre plein : le contentement satisfait de soi — savoure, mais prends garde à la suffisance.', en: 'The man sits enthroned, arms folded over his full belly: self-satisfied contentment — savour it, but beware of smugness.' },
    },
    {
      label: { fr: 'Le grand chapeau rouge', en: 'The big red hat' },
      text: { fr: 'Coiffé de rouge vif, il s’affiche en hôte prospère : ton plaisir se montre, quitte à masquer ce que la rangée pleine ne comble pas.', en: 'Crowned in bright red, he flaunts the prosperous host: your pleasure shows itself, even masking what the full row leaves unfilled.' },
    },
  ],
  'cups-10': [
    {
      label: { fr: 'Les dix coupes dans l’arc-en-ciel', en: 'The ten cups in the rainbow' },
      text: { fr: 'Alignées dans le grand arc coloré du ciel : la promesse rêvée enfin comblée, une félicité que tu n’as plus qu’à contempler.', en: 'Ranged across the great coloured arc in the sky: the dreamed-of promise fulfilled at last, a bliss you need only behold.' },
    },
    {
      label: { fr: 'Le couple, bras levés', en: 'The couple, arms raised' },
      text: { fr: 'Enlacés, l’homme et la femme tendent leur bras libre vers l’arc-en-ciel : l’amour partagé qui déborde et s’offre au monde plutôt que de se garder.', en: 'Arm in arm, the man and woman lift their free arm toward the rainbow: shared love that overflows and offers itself to the world rather than hoarding itself.' },
    },
    {
      label: { fr: 'Les deux enfants qui dansent', en: 'The two dancing children' },
      text: { fr: 'Main dans la main, bras levés, ils tournent au bord de la rivière : le bonheur si évident qu’on l’habite sans même y penser.', en: 'Hand in hand, arms lifted, they whirl by the riverside: happiness so plain you simply live in it without a thought.' },
    },
  ],
  'cups-11': [
    {
      label: { fr: 'Le petit poisson dans la coupe', en: 'The little fish in the cup' },
      text: { fr: 'Un poisson bleu surgit de la coupe qu’il tient et le regarde droit dans les yeux : le message inattendu de l’inconscient, une intuition qui te parle si tu daignes l’écouter.', en: 'A blue fish pops out of the cup he is holding and looks him right in the eye: the unexpected message from the unconscious, an intuition that speaks to you if you deign to listen.' },
    },
    {
      label: { fr: 'La tunique aux fleurs roses', en: 'The tunic of pink blossoms' },
      text: { fr: 'Sa courte tunique parsemée de fleurs roses : une âme fleurie, sensible et rêveuse, plus à l’aise dans l’imaginaire que dans l’action brute.', en: 'His short tunic scattered with pink blossoms: a flowering soul, sensitive and dreamy, more at ease in imagination than in raw action.' },
    },
    {
      label: { fr: 'Le couvre-chef bleu à pan retombant', en: 'The blue cap with trailing fold' },
      text: { fr: 'Sa coiffe bleue prolongée d’un long pan d’étoffe qui retombe sur le côté : une jeunesse un peu théâtrale, prête à jouer, à créer, à ne pas se prendre au sérieux.', en: 'His blue cap extended by a long fold of cloth trailing down the side: a slightly theatrical youth, ready to play, to create, to not take himself too seriously.' },
    },
  ],
  'cups-12': [
    {
      label: { fr: 'L’unique coupe tendue', en: 'The single outstretched cup' },
      text: { fr: 'Il n’en porte qu’une, calmement offerte devant lui : une proposition qui vient à toi, un cœur tendu comme une invitation à laquelle tu choisis de répondre.', en: 'He carries only one, calmly held out before him: an offer that comes to you, a heart extended like an invitation you get to answer.' },
    },
    {
      label: { fr: 'Le cheval au pas lent', en: 'The horse at a slow walk' },
      text: { fr: 'Sa monture claire avance au pas, sans galoper : ce messager ne fonce pas, il approche doucement — laisse-toi le temps de sentir avant d’agir.', en: 'His pale horse steps forward at a walk, never galloping: this messenger does not charge, he approaches gently — give yourself time to feel before you act.' },
    },
    {
      label: { fr: 'Les poissons du surcot', en: 'The fish on his surcoat' },
      text: { fr: 'Des poissons rouges ornent son surcot : l’élément Eau brodé à même lui, signe que tout, ici, se joue au fil des émotions et de l’imaginaire.', en: 'Red fish adorn his surcoat: the Water element stitched onto him, a sign that everything here plays out through feeling and imagination.' },
    },
  ],
  'cups-13': [
    {
      label: { fr: 'La coupe couverte à anses', en: 'The covered cup with handles' },
      text: { fr: 'Seule coupe fermée de tout le jeu, sa coupe à couvercle et à deux anses est surmontée d’une croix : ton monde intérieur est si riche qu’il en devient un secret que nul ne voit.', en: 'The only closed cup in the whole deck, her lidded two-handled chalice is crowned with a cross: your inner world is so rich it becomes a secret no one else sees.' },
    },
    {
      label: { fr: 'Le regard fixé sur la coupe', en: 'Her gaze fixed on the cup' },
      text: { fr: 'Elle contemple la coupe tenue dans ses mains sans la lâcher des yeux : écoute ce que ton cœur te souffle avant de décider quoi que ce soit.', en: 'She contemplates the cup held in her hands, never taking her eyes off it: listen to what your heart whispers before deciding anything.' },
    },
    {
      label: { fr: 'Le trône au bord de l’eau', en: 'The throne at the water’s edge' },
      text: { fr: 'Son trône de pierre repose sur la grève rocheuse, là où les vagues viennent effleurer le rivage : tu sièges à la lisière du conscient et du rêve.', en: 'Her stone throne rests on the rocky shore, where the waves come brushing against the strand: you sit at the border of the conscious and the dream.' },
    },
  ],
  'cups-14': [
    {
      label: { fr: 'Le trône sur la mer houleuse', en: 'The throne on the heaving sea' },
      text: { fr: 'Son trône de pierre repose au milieu de flots agités : tu gardes ton calme là où d’autres se noieraient dans l’émotion.', en: 'His stone throne rests amid the churning waves: you keep your calm where others would drown in emotion.' },
    },
    {
      label: { fr: 'Le poisson au bout du collier', en: 'The fish on the necklace' },
      text: { fr: 'Un pendentif en forme de poisson pend à sa chaîne sur sa poitrine : l’inconscient et l’imaginaire qu’il porte ouvertement, sans en avoir peur.', en: 'A fish-shaped pendant hangs from the chain on his chest: the unconscious and the imagination he wears openly, unafraid.' },
    },
    {
      label: { fr: 'Le navire à l’arrière-plan', en: 'The ship in the background' },
      text: { fr: 'Derrière lui, un navire vogue sur la même mer : le commerce et le voyage restent possibles quand tu maîtrises tes courants intérieurs.', en: 'Behind him, a ship sails the same sea: trade and travel stay possible when you master your inner currents.' },
    },
  ],
  'swords-01': [
    {
      label: { fr: 'La main jaillie du nuage', en: 'The hand from the cloud' },
      text: { fr: 'Une seule main surgit d’un nuage gris et empoigne fermement la garde : une vérité te tombe dessus, brute et sans détour, à toi de la saisir.', en: 'A single hand thrusts from a grey cloud and grips the hilt firmly: a truth lands on you, raw and unqualified, and it is yours to seize.' },
    },
    {
      label: { fr: 'La couronne au bout de la lame', en: 'The crown at the blade’s tip' },
      text: { fr: 'La pointe transperce une couronne d’or d’où pendent une palme et une guirlande : ta clarté franchit l’obstacle et couronne la percée.', en: 'The tip pierces a golden crown hung with a palm and a garland: your clarity cuts through and crowns the breakthrough.' },
    },
    {
      label: { fr: 'Les six yods flottants', en: 'The six floating yods' },
      text: { fr: 'Six petites flammèches jaunes dérivent de part et d’autre de la lame : des étincelles d’esprit qui accompagnent la percée, prêtes à être saisies.', en: 'Six small yellow flame-shapes drift on either side of the blade: sparks of mind attending the breakthrough, there for the taking.' },
    },
  ],
  'swords-02': [
    {
      label: { fr: 'Les bras croisés sur la poitrine', en: 'Arms crossed over the chest' },
      text: { fr: 'Elle serre une épée dans chaque main, les bras croisés contre elle, et les deux longues lames s’élèvent en V vers le ciel — deux forces tenues en équilibre par une posture verrouillée plutôt que tranchée.', en: 'She grips a sword in each hand, arms crossed against her, the two long blades rising in a V toward the sky — two forces held in balance by a locked posture rather than settled.' },
    },
    {
      label: { fr: 'Le bandeau sur les yeux', en: 'The blindfold over the eyes' },
      text: { fr: 'Il t’empêche de regarder ce que tu tiens : la décision est repoussée en refusant de voir clairement l’enjeu.', en: 'It keeps you from looking at what you hold: the decision is put off by refusing to see the stakes clearly.' },
    },
    {
      label: { fr: 'Le mince croissant de lune', en: 'The thin crescent moon' },
      text: { fr: 'Suspendu en haut à droite du ciel, ce fin croissant baigne la scène d’une lumière trompeuse — intuition voilée, réponses encore dans l’ombre.', en: 'Hung high in the sky to her right, this thin crescent bathes the scene in a deceptive light — veiled intuition, answers still in shadow.' },
    },
  ],
  'swords-03': [
    {
      label: { fr: 'Les trois épées croisées', en: 'The three crossing swords' },
      text: { fr: 'Elles transpercent le cœur de part en part, entrant par des angles différents : la blessure vient de plusieurs côtés à la fois, et rien ne la voile.', en: 'They pierce the heart clean through, entering from different angles: the wound comes from several sides at once, and nothing veils it.' },
    },
    {
      label: { fr: 'Le cœur rouge suspendu', en: 'The red heart, floating' },
      text: { fr: 'Seul au centre, sans corps ni visage : ce que tu ressens est mis à nu, offert cru à qui regarde ton tirage.', en: 'Alone at the center, no body, no face: what you feel is laid bare, offered raw to whoever reads your draw.' },
    },
    {
      label: { fr: 'Le ciel gris de pluie', en: 'The grey rainy sky' },
      text: { fr: 'Les nuages lourds pleurent en traits obliques derrière le cœur : l’orage lave la scène mais ne console pas — laisse-le passer.', en: 'Heavy clouds weep in slanting streaks behind the heart: the storm washes the scene but brings no comfort — let it pass.' },
    },
  ],
  'swords-04': [
    {
      label: { fr: 'Le gisant aux mains jointes', en: 'The recumbent effigy, hands joined' },
      text: { fr: 'Une effigie couchée sur un tombeau, mains jointes en prière : ce n’est pas la mort mais la trêve — pose les armes, tu as le droit de te retirer.', en: 'An effigy lying atop a tomb, hands joined in prayer: this is not death but a truce — lay down your arms, you have the right to withdraw.' },
    },
    {
      label: { fr: 'Les trois épées au mur', en: 'The three swords on the wall' },
      text: { fr: 'Suspendues au-dessus de lui, pointes vers le bas, elles restent hors de portée : les combats en suspens attendront que tu aies repris des forces.', en: 'Hung above him, points downward, they stay out of reach: the fights left pending will wait until you have regained your strength.' },
    },
    {
      label: { fr: 'La quatrième épée sous le gisant', en: 'The fourth sword beneath the effigy' },
      text: { fr: 'Couchée le long du flanc du tombeau, à plat sous le corps, celle-là ne menace plus : l’arme que tu portes encore peut enfin reposer, sans être brandie.', en: 'Lying along the side of the tomb, flat beneath the body, that one no longer threatens: the weapon you still carry can rest at last, unbrandished.' },
    },
  ],
  'swords-05': [
    {
      label: { fr: 'Le regard narquois par-dessus l’épaule', en: 'The smirk over the shoulder' },
      text: { fr: 'L’homme rassemble trois épées — deux calées sur l’épaule, une pointée vers le sol — et jette un regard narquois en arrière : la victoire arrachée sans gloire, ce que tu gagnes en écrasant l’autre.', en: 'The man gathers three swords — two resting on his shoulder, one pointing down — and glances back with a smirk: victory seized without glory, what you gain by crushing the other.' },
    },
    {
      label: { fr: 'Les deux silhouettes qui s’éloignent', en: 'The two figures walking away' },
      text: { fr: 'Dos courbé au bord de l’eau, deux vaincus s’en vont tête basse : le prix de ton triomphe, ceux que tu laisses derrière toi.', en: 'Backs bent at the water’s edge, two defeated figures walk off with heads bowed: the price of your triumph, those you leave behind.' },
    },
    {
      label: { fr: 'Le ciel aux nuages déchiquetés', en: 'The sky of jagged clouds' },
      text: { fr: 'Au-dessus de la scène, de longues nuées grises lacérées : la tension d’après-conflit, l’air vicié qui reste quand les mots ont blessé.', en: 'Above the scene, long grey clouds torn to shreds: the tension after conflict, the tainted air that lingers when words have wounded.' },
    },
  ],
  'swords-06': [
    {
      label: { fr: 'Les six épées dressées', en: 'The six upright swords' },
      text: { fr: 'Fichées bien droites dans le fond de la barque, elles voyagent avec toi : tu pars, mais tu n’abandonnes rien du poids que tu emportes.', en: 'Planted upright in the floor of the boat, they travel with you: you leave, yet you abandon nothing of the weight you carry.' },
    },
    {
      label: { fr: 'Le passeur à la perche', en: 'The ferryman with the pole' },
      text: { fr: 'Debout à une extrémité, il pousse la barque avec sa longue perche : quelqu’un te mène vers l’autre rive, sans hâte, sans un mot.', en: 'Standing at one end, he pushes the boat along with his long pole: someone carries you toward the far bank, unhurried, without a word.' },
    },
    {
      label: { fr: 'La femme voilée et l’enfant', en: 'The veiled woman and the child' },
      text: { fr: 'Assis et recroquevillés sous une étoffe, ils tournent le dos au départ : tu emmènes ce que tu protèges vers un lieu plus calme.', en: 'Seated and huddled beneath a cloth, they turn their backs on what is left behind: you carry what you protect toward a calmer place.' },
    },
  ],
  'swords-07': [
    {
      label: { fr: 'Les cinq épées emportées', en: 'The five swords carried off' },
      text: { fr: 'Serrées maladroitement contre lui, il en emporte cinq d’un coup, tenues par les lames : ce qu’on rafle en vitesse menace de vous entailler les mains.', en: 'Clutched awkwardly against him, he carries off five at once, held by the blades: what you snatch in haste threatens to cut your hands.' },
    },
    {
      label: { fr: 'Les deux épées laissées plantées', en: 'The two swords left standing' },
      text: { fr: 'Derrière lui, deux lames restent fichées droit dans le sol : ce qu’on abandonne pour filer plus léger, mais qui demeure en évidence.', en: 'Behind him, two blades stay staked upright in the ground: what you leave behind to slip away lighter, yet that stays in plain view.' },
    },
    {
      label: { fr: 'Le regard tourné en arrière', en: 'The glance over the shoulder' },
      text: { fr: 'Sur la pointe des pieds, il jette un coup d’œil vers le campement de tentes qu’il quitte : ruse et fuite, l’œil craignant déjà d’être surpris.', en: 'On tiptoe, he glances back at the tented camp he is leaving: cunning and flight, the eye already fearing to be caught.' },
    },
  ],
  'swords-08': [
    {
      label: { fr: 'Les huit épées plantées', en: 'The eight planted swords' },
      text: { fr: 'Huit lames fichées en terre autour d’elle, espacées et non refermées : la cage que tu crois close laisse, entre deux fers, un passage devant elle que personne ne garde.', en: 'Eight blades stuck upright in the ground around her, spaced and never closed: the cage you think is shut leaves, between two irons, an open way before her that no one guards.' },
    },
    {
      label: { fr: 'Le bandeau sur ses yeux', en: 'The blindfold over her eyes' },
      text: { fr: 'Le linge pâle qui l’aveugle : tu n’es pas retenu par le monde mais par ce que tu refuses de regarder, et l’étoffe glisserait si tu tournais la tête.', en: 'The pale cloth that blinds her: you are held not by the world but by what you refuse to look at, and the fabric would slip the moment you turned your head.' },
    },
    {
      label: { fr: 'Les liens qui l’enserrent', en: 'The bindings around her body' },
      text: { fr: 'L’étoffe grise enroulée autour de ses bras et de son buste, nouée sans mordre : desserrée, presque défaite — un pas suffirait à t’en dégager si tu cessais de la croire serrée.', en: 'The grey cloth wound around her arms and torso, tied without biting: loose, almost undone — one step would free you if you stopped believing it tight.' },
    },
  ],
  'swords-09': [
    {
      label: { fr: 'Le visage dans les mains', en: 'The face buried in the hands' },
      text: { fr: 'Redressée dans le noir, la silhouette se cache les yeux des deux mains : l’ennemi ne vient pas de dehors, il veille sous ton propre crâne.', en: 'Sitting up in the dark, the figure hides their eyes behind both hands: the enemy doesn’t come from outside, it keeps watch beneath your own skull.' },
    },
    {
      label: { fr: 'Les neuf épées empilées', en: 'The nine stacked swords' },
      text: { fr: 'Alignées à l’horizontale sur le fond noir, elles ne frappent personne : ce sont tes pensées qui s’empilent et refusent de te laisser dormir.', en: 'Laid out horizontally against the black background, they strike no one: it’s your thoughts stacking up, refusing to let you sleep.' },
    },
    {
      label: { fr: 'La courtepointe aux roses et signes', en: 'The quilt of roses and signs' },
      text: { fr: 'Le couvre-lit en damier de roses rouges et de signes du zodiaque rappelle que la nuit, aussi lourde soit-elle, s’inscrit dans un cycle qui finira par tourner.', en: 'The chequered coverlet of red roses and zodiac signs reminds you that the night, however heavy, belongs to a cycle that will eventually turn.' },
    },
  ],
  'swords-10': [
    {
      label: { fr: 'Les dix épées dans le dos', en: 'Ten swords in the back' },
      text: { fr: 'Plantées côte à côte le long de l’échine de l’homme couché face contre terre : l’acharnement de trop, la défaite si totale qu’elle ne peut plus empirer.', en: 'Driven side by side down the spine of the man lying face-down: one blow too many, a defeat so total it can sink no lower.' },
    },
    {
      label: { fr: 'Le ciel noir, l’aube jaune', en: 'Black sky, yellow dawn' },
      text: { fr: 'La nuit la plus épaisse déjà fendue d’une lueur dorée au ras de l’horizon : le pire est passé, la lumière revient.', en: 'The thickest night already split by a golden glow along the horizon: the worst has passed, the light returns.' },
    },
    {
      label: { fr: 'La main droite en bénédiction', en: 'The right hand in blessing' },
      text: { fr: 'Deux doigts repliés malgré tout, un dernier geste de paix : même à terre, tu gardes le pouvoir de lâcher prise.', en: 'Two fingers curled even so, a last gesture of peace: even brought low, you keep the power to let go.' },
    },
  ],
  'swords-11': [
    {
      label: { fr: 'L’épée tenue à deux mains', en: 'The sword held in both hands' },
      text: { fr: 'Il empoigne la lame droite et haute de ses deux mains, prêt à en découdre : la pensée dégainée, vive et tranchante, qui cherche déjà à qui parler.', en: 'He grips the upright blade high in both hands, ready for a fight: thought unsheathed, quick and cutting, already looking for someone to challenge.' },
    },
    {
      label: { fr: 'Le regard tourné en arrière', en: 'The gaze turned backward' },
      text: { fr: 'Le visage guette par-dessus l’épaule, à rebours de son corps : la vigilance de l’espion, l’oeil qui surveille autant qu’il défie.', en: 'The face peers back over the shoulder, against the turn of the body: the watchfulness of a spy, an eye that surveys as much as it defies.' },
    },
    {
      label: { fr: 'Les arbres pliés par le vent', en: 'The trees bent by the wind' },
      text: { fr: 'Nuées bousculées et arbres courbés sur la butte : l’air agité de la carte, ces idées et rumeurs qui filent trop vite pour se poser.', en: 'Scudding clouds and trees bowing on the ridge: the card’s restless air, those ideas and rumours that race by too fast to settle.' },
    },
  ],
  'swords-12': [
    {
      label: { fr: 'L’épée brandie vers le ciel', en: 'The sword raised to the sky' },
      text: { fr: 'Levée bien haut au bout de son bras tendu, elle tranche l’air avant même de savoir où frapper : tu fonces, mû par une idée qui ne souffre aucun délai.', en: 'Raised high at the end of his outstretched arm, it slices the air before he even knows where to strike: you charge on, driven by an idea that brooks no delay.' },
    },
    {
      label: { fr: 'Le cheval blanc au galop', en: 'The white horse at full gallop' },
      text: { fr: 'Lancé à pleine course, crinière et jambes tendues, il t’emporte plus vite que ta prudence — élan grisant, mais nul ne tient vraiment les rênes.', en: 'Launched at full speed, mane and legs flung out, it carries you faster than your caution — a heady rush, yet no one truly holds the reins.' },
    },
    {
      label: { fr: 'Le ciel aux nuages striés', en: 'The sky of streaked clouds' },
      text: { fr: 'Derrière lui, les nuées filent en longues stries et deux arbres grêles ploient sous le vent : l’air est en tempête, et ta hâte souffle droit dans l’orage.', en: 'Behind him the clouds race in long streaks and two spindly trees bend in the wind: the air is a storm, and your haste blows straight into it.' },
    },
  ],
  'swords-13': [
    {
      label: { fr: 'L’épée dressée, main droite', en: 'The upright sword, right hand' },
      text: { fr: 'Elle la tient bien droite, légèrement inclinée : le tranchant de l’esprit qui ne s’excuse pas — tu vois clair, tu tranches, quitte à blesser.', en: 'She holds it upright, tilted slightly: the blade of a mind that never apologizes — you see clearly, you cut, even if it wounds.' },
    },
    {
      label: { fr: 'Les papillons de sa couronne', en: 'The butterflies on her crown' },
      text: { fr: 'Sculptés au sommet de sa couronne d’or : la pensée transformée par le deuil, l’âme qui a mué et n’est plus dupe de rien.', en: 'Carved atop her golden crown: thought transformed by grief, a soul that has molted and is fooled by nothing now.' },
    },
    {
      label: { fr: 'La main gauche tendue', en: 'The extended left hand' },
      text: { fr: 'Ouverte, paume levée vers l’avant : elle t’invite à approcher mais garde ses distances — accueil lucide, sans tendresse aveugle.', en: 'Open, palm raised forward: she invites you closer yet keeps her distance — a clear-eyed welcome, no blind tenderness.' },
    },
  ],
  'swords-14': [
    {
      label: { fr: 'L’épée droite, inclinée vers la droite', en: 'The upright sword, tilted to the right' },
      text: { fr: 'Levée dans sa main droite, la lame penche légèrement : ta décision est prise, mais elle vacille encore d’un cheveu — ose trancher pour de bon.', en: 'Raised in his right hand, the blade leans just slightly: your decision is made, yet it still wavers by a hair — dare to cut clean for good.' },
    },
    {
      label: { fr: 'Le papillon sculpté sur le trône', en: 'The butterfly carved on the throne' },
      text: { fr: 'Gravé au sommet de son trône de pierre, il rappelle l’air et la pensée : laisse ton jugement s’élever au-dessus de la mêlée avant de parler.', en: 'Carved at the top of his stone throne, it recalls air and thought: let your judgment rise above the fray before you speak.' },
    },
    {
      label: { fr: 'Sa robe bleue sous la cape violette', en: 'His blue robe beneath the purple cape' },
      text: { fr: 'Le bleu de la clarté sous le violet de l’autorité : dans cette scène, tu es celui qui sait autant qu’il commande — sers-toi des deux.', en: 'The blue of clarity beneath the purple of authority: in this scene, you are the one who knows as much as he commands — use both.' },
    },
  ],
  'pentacles-01': [
    {
      label: { fr: 'La main sortie du nuage', en: 'The hand from the cloud' },
      text: { fr: 'Une paume ouverte jaillit d’un nuage gris et te présente un unique denier : une offre concrète te tombe entre les mains, saisis-la.', en: 'An open palm bursts from a grey cloud, presenting a single coin: a tangible offer lands in your hands, take it.' },
    },
    {
      label: { fr: 'Le pentacle gravé', en: 'The engraved pentacle' },
      text: { fr: 'L’étoile à cinq branches inscrite dans la grande pièce d’or : la promesse de prospérité n’est pas rêvée, elle a déjà une forme et un poids.', en: 'The five-pointed star set inside the large gold coin: the promise of prosperity isn’t dreamed, it already has shape and weight.' },
    },
    {
      label: { fr: 'L’arche fleurie de la haie', en: 'The flowering hedge arch' },
      text: { fr: 'En bas, une haie parsemée de roses rouges s’ouvre en arche sur un sentier vers des montagnes bleues : franchis le seuil vers un chemin plus vaste que le jardin.', en: 'Below, a hedge dotted with red roses opens into an arch over a path toward blue mountains: cross the threshold to a way wider than the garden.' },
    },
  ],
  'pentacles-02': [
    {
      label: { fr: 'Le ruban vert en huit', en: 'The green ribbon in a figure-eight' },
      text: { fr: 'Il enlace les deux deniers en un huit couché : tes deux affaires ne tiennent que par le mouvement, garde-les liées et jamais figées.', en: 'It loops the two pentacles into a lying figure-eight: your two concerns hold only through motion, so keep them linked and never frozen.' },
    },
    {
      label: { fr: 'Les deux navires sur les vagues', en: 'The two ships on the waves' },
      text: { fr: 'Derrière lui, deux bateaux montent et plongent sur une mer houleuse : les hauts et les bas te dépassent, à toi de danser avec le roulis.', en: 'Behind him, two ships rise and plunge on a swelling sea: the highs and lows are beyond you, so dance with the roll.' },
    },
    {
      label: { fr: 'Le grand chapeau démesuré', en: 'The oversized towering hat' },
      text: { fr: 'Coiffé d’un chapeau rouge démesurément haut, il jongle les jambes écartées : tu portes ta charge avec panache, en équilibre précaire.', en: 'Wearing a red hat towering far too tall, he juggles with legs splayed wide: you carry your load with flair, on precarious footing.' },
    },
  ],
  'pentacles-03': [
    {
      label: { fr: 'Les trois deniers sculptés', en: 'The three carved pentacles' },
      text: { fr: 'Gravés en haut de l’arche de pierre, ils forment un motif qui domine la scène : la preuve visible que ton travail a déjà pris forme et mérite qu’on s’y attarde.', en: 'Carved at the top of the stone arch, forming a pattern that crowns the scene: visible proof that your work has already taken shape and deserves attention.' },
    },
    {
      label: { fr: 'L’artisan sur son banc', en: 'The craftsman on his bench' },
      text: { fr: 'Juché sur un banc, outil en main, il se retourne vers les deux figures qui l’entourent : monte d’un cran, montre ton savoir-faire, laisse-toi conseiller.', en: 'Perched on a bench, tool in hand, he turns toward the two figures beside him: step up, show your craft, and let yourself be advised.' },
    },
    {
      label: { fr: 'Le plan tenu par les visiteurs', en: 'The plan held by the visitors' },
      text: { fr: 'Face à lui, l’une des deux figures déploie une feuille de plans qu’ils consultent ensemble : personne ne bâtit seul, écoute ceux qui apportent la vision.', en: 'Facing him, one of the two figures unfolds a sheet of plans they study together: no one builds alone, listen to those who bring the vision.' },
    },
  ],
  'pentacles-04': [
    {
      label: { fr: 'Le denier en couronne sur sa tête', en: 'The coin crowning his head' },
      text: { fr: 'Une pièce tient en équilibre au sommet de sa tête : ce que tu possèdes finit par coiffer et diriger tes pensées.', en: 'A coin balances on top of his head: what you own ends up crowning and ruling your thoughts.' },
    },
    {
      label: { fr: 'Les deux deniers sous ses pieds', en: 'The two coins beneath his feet' },
      text: { fr: 'Il presse deux pièces sous ses semelles pour ne rien laisser filer : cramponne-toi trop et tu ne bougeras plus.', en: 'He pins two coins beneath his feet so nothing slips away: hold on too tight and you’ll never move again.' },
    },
    {
      label: { fr: 'La ville derrière lui', en: 'The city behind him' },
      text: { fr: 'Toute une cité s’étend dans son dos, ignorée : à trop serrer ton trésor, tu tournes le dos au monde.', en: 'A whole city stretches behind his back, ignored: clutch your treasure too tightly and you turn your back on the world.' },
    },
  ],
  'pentacles-05': [
    {
      label: { fr: 'Les cinq deniers du vitrail', en: 'The five coins in the window' },
      text: { fr: 'Sur le vitrail illuminé de l’église, cinq pentacles dorés brillent tout près : le secours est là, à portée de main, mais tu passes dessous sans lever les yeux.', en: 'In the church’s glowing stained-glass window, five golden pentacles shine close by: help is right there, within reach, yet you pass beneath it without looking up.' },
    },
    {
      label: { fr: 'Le mendiant et ses béquilles', en: 'The beggar on his crutches' },
      text: { fr: 'L’homme avance péniblement sur deux béquilles, le pied bandé et les vêtements en loques : la blessure qui te ralentit et te tient à l’écart.', en: 'The man limps forward on two crutches, one foot bandaged and his clothes in rags: the wound that slows you down and keeps you shut out.' },
    },
    {
      label: { fr: 'La neige et les deux exilés', en: 'The snow and the two outcasts' },
      text: { fr: 'La neige tombe drue et couvre le sol tandis que les deux mendiants avancent dehors dans le froid : le dénuement à ciel ouvert que rien n’adoucit tant que tu restes dehors.', en: 'Snow falls thick and blankets the ground as the two beggars trudge outside in the cold: bare destitution that nothing eases while you stay out in the open.' },
    },
  ],
  'pentacles-06': [
    {
      label: { fr: 'La balance dans sa main', en: 'The scales in his hand' },
      text: { fr: 'Tenue en équilibre par le marchand : ce qui se donne est pesé, mesuré — as-tu la main juste, ou juges-tu qui mérite ?', en: 'Held level by the merchant: what is given is weighed and measured — is your hand fair, or are you judging who deserves?' },
    },
    {
      label: { fr: 'Les deux pauvres agenouillés', en: 'The two kneeling poor' },
      text: { fr: 'Un de chaque côté à ses pieds, seul celui de gauche tend la main vers les pièces : reçois-tu ta part, ou restes-tu à genoux plus longtemps qu’il ne le faut ?', en: 'One at each side at his feet, only the left one reaches for the coins: do you receive your share, or stay kneeling longer than you need to?' },
    },
    {
      label: { fr: 'Les pièces qui tombent', en: 'The falling coins' },
      text: { fr: 'Les deniers qu’il laisse glisser de sa main vers le pauvre agenouillé à gauche : le don circule vraiment — laisse passer ce qui doit passer par toi.', en: 'The coins he lets slip from his hand toward the poor man kneeling on the left: the gift truly flows — let pass through you what must pass.' },
    },
  ],
  'pentacles-07': [
    {
      label: { fr: 'Les sept deniers sur la vigne', en: 'The seven pentacles on the vine' },
      text: { fr: 'Les sept étoiles sont accrochées ensemble au feuillage vert d’un grand plant : rien n’est encore cueilli, ta récolte tient toute sur la tige.', en: 'All seven stars hang together in the green leaves of a tall plant: nothing is picked yet, your whole harvest still clings to the stem.' },
    },
    {
      label: { fr: 'Les mains croisées sur la houe', en: 'Hands crossed on the hoe' },
      text: { fr: 'Il s’appuie des deux mains sur le long manche planté dans la terre : la pause de celui qui a assez travaillé pour s’autoriser à souffler.', en: 'He leans both hands on the long handle planted in the earth: the pause of one who has worked enough to let himself breathe.' },
    },
    {
      label: { fr: 'Le regard penché vers la plante', en: 'The gaze bent toward the plant' },
      text: { fr: 'La tête inclinée, il contemple sa culture sans y toucher : le moment d’évaluer ce que tu as semé avant de décider si tu continues.', en: 'Head tilted, he contemplates his crop without touching it: the moment to weigh what you have sown before deciding whether to go on.' },
    },
  ],
  'pentacles-08': [
    {
      label: { fr: 'Les six deniers accrochés', en: 'The six mounted coins' },
      text: { fr: 'Six pentacles déjà gravés s’alignent en rangée sur le poteau dressé à ses côtés : chaque quête bouclée devient la preuve visible de ton savoir-faire.', en: 'Six finished pentacles line up in a row on the upright post beside him: each completed task becomes the visible proof of your craft.' },
    },
    {
      label: { fr: 'Le maillet et le burin', en: 'The mallet and chisel' },
      text: { fr: 'Penché sur son établi, il frappe le disque qu’il tient : reste concentré sur l’ouvrage en cours, coup après coup patient.', en: 'Bent over his bench, he strikes the disc he holds: stay focused on the work at hand, patient blow after patient blow.' },
    },
    {
      label: { fr: 'La ville au loin', en: 'The town in the distance' },
      text: { fr: 'Reliée à lui par un chemin doré, la cité rappelle qu’il s’est retiré à l’écart pour perfectionner son art avant d’y retourner.', en: 'Linked to him by a golden path, the town recalls that he withdrew apart to perfect his craft before returning to it.' },
    },
  ],
  'pentacles-09': [
    {
      label: { fr: 'Le faucon encapuchonné au poignet', en: 'The hooded falcon on the wrist' },
      text: { fr: 'Posé sur sa main gantée, le capuchon lui couvre les yeux : c’est ta pensée sauvage que tu as appris à discipliner par toi-même.', en: 'Perched on her gloved hand, the hood covering its eyes: it is your wild mind that you have learned to master on your own.' },
    },
    {
      label: { fr: 'Les grappes de raisin mûres', en: 'The ripe clusters of grapes' },
      text: { fr: 'La vigne lourde qui l’entoure de toutes parts : l’abondance que tu récoltes après avoir patiemment cultivé ton domaine.', en: 'The heavy vine that surrounds her on every side: the abundance you reap after patiently tending your own estate.' },
    },
    {
      label: { fr: 'Le petit escargot au sol', en: 'The little snail on the ground' },
      text: { fr: 'Il rampe près de sa robe, lent et à l’abri de sa coquille : savoure le luxe sans te presser, tu portes ta demeure avec toi.', en: 'It crawls near her gown, slow and sheltered in its shell: savour the luxury without hurrying, for you carry your home with you.' },
    },
  ],
  'pentacles-10': [
    {
      label: { fr: 'Les dix deniers en arbre de vie', en: 'Ten pentacles as a Tree of Life' },
      text: { fr: 'Les dix deniers sont disposés sur toute la scène selon le motif kabbalistique de l’arbre de vie, recouvrant familles et décor : la richesse enfin stable, transmise et partagée.', en: 'The ten pentacles are laid across the whole scene in the Kabbalistic Tree of Life pattern, covering family and setting alike: wealth at last stable, handed down and shared.' },
    },
    {
      label: { fr: 'Le vieillard aux robes brodées', en: 'The old man in embroidered robes' },
      text: { fr: 'Assis à l’écart au premier plan, drapé d’une robe couverte de pampres et de croissants, l’aïeul se tient parmi deux chiens blancs qui viennent à ses pieds.', en: 'Seated apart in the foreground, wrapped in a robe patterned with grapevines and crescents, the patriarch sits among two white dogs that come to his feet.' },
    },
    {
      label: { fr: 'L’arche de pierre au blason', en: 'The stone arch with its coat of arms' },
      text: { fr: 'Derrière les figures s’élève une arche gravée d’armoiries, seuil du domaine familial : la lignée et le nom qui perdurent.', en: 'Behind the figures rises an arch carved with a coat of arms, the threshold of the family estate: the lineage and the name that endure.' },
    },
  ],
  'pentacles-11': [
    {
      label: { fr: 'L’unique pièce levée à deux mains', en: 'The single coin raised in both hands' },
      text: { fr: 'Le jeune homme élève devant son visage un seul pentacle qu’il fixe avec émerveillement : une étude, un projet, une promesse que tu contemples avant même d’y toucher.', en: 'The young man lifts a single pentacle before his face and gazes at it in wonder: a study, a project, a promise you contemplate before ever laying a hand on it.' },
    },
    {
      label: { fr: 'La prairie fleurie et le champ labouré', en: 'The flowering meadow and the ploughed field' },
      text: { fr: 'À ses pieds s’étend une herbe verte piquée de petites fleurs, tandis qu’au loin s’ouvrent des sillons retournés : le terrain concret déjà préparé, prêt à recevoir ce que tu vas semer.', en: 'At his feet a green sward is dotted with little flowers, while furrowed strips lie ploughed in the distance: the concrete ground already prepared, ready to receive what you will sow.' },
    },
    {
      label: { fr: 'Le bosquet vert à gauche de l’horizon', en: 'The green grove on the left horizon' },
      text: { fr: 'Au fond, à gauche, un petit bouquet d’arbres feuillus se détache sur le ciel jaune : la croissance patiente qui t’attend au bout de l’effort, si tu restes fidèle à ce début studieux.', en: 'Far off to the left, a small clump of leafy trees stands against the yellow sky: the patient growth awaiting you at the end of the effort, if you stay true to this studious beginning.' },
    },
  ],
  'pentacles-12': [
    {
      label: { fr: 'Le cheval noir immobile', en: 'The still black horse' },
      text: { fr: 'Lourd et planté sur ses quatre sabots, il n’avance pas : ton allié patient, celui qui ne bondit jamais mais ne recule pas non plus.', en: 'Heavy and planted on all four hooves, it does not advance: your patient ally, the one that never leaps but never retreats either.' },
    },
    {
      label: { fr: 'Le denier levé dans la paume', en: 'The coin raised in the palm' },
      text: { fr: 'L’unique pentacle qu’il tient devant lui sur sa main ouverte et fixe du regard : la tâche concrète que tu examines sans hâte, décidé à la mener au bout.', en: 'The single pentacle he holds before him on his open palm and studies intently: the concrete task you examine without haste, resolved to see it through.' },
    },
    {
      label: { fr: 'Le champ labouré au loin', en: 'The plowed field beyond' },
      text: { fr: 'Les sillons bruns d’un labour déjà fait s’étendent jusqu’aux collines : le travail méthodique porte ses fruits, même quand rien ne semble bouger.', en: 'The brown furrows of a field already tilled stretch to the hills: methodical work bears fruit, even when nothing seems to move.' },
    },
  ],
  'pentacles-13': [
    {
      label: { fr: 'Le disque d’or sur ses genoux', en: 'The golden disc on her lap' },
      text: { fr: 'Elle tient à deux mains l’unique pentacle posé sur ses genoux, les yeux baissés sur lui : la richesse qu’on soigne, qu’on couve comme un enfant plutôt qu’on ne l’exhibe.', en: 'She holds the single pentacle on her lap with both hands, eyes lowered upon it: wealth one tends, cradled like a child rather than flaunted.' },
    },
    {
      label: { fr: 'Le petit lapin dans l’herbe', en: 'The little rabbit in the grass' },
      text: { fr: 'En bas à droite, un lapin bondit près de son trône : la fertilité et l’abondance du vivant, mais aussi la nervosité qui traverse ce coin de paradis.', en: 'In the lower right, a rabbit leaps near her throne: the fertility and abundance of living things, but also the skittishness that runs through this corner of paradise.' },
    },
    {
      label: { fr: 'La treille de roses au-dessus', en: 'The rose bower overhead' },
      text: { fr: 'Un arceau de roses rouges épanouies encadre sa tête : le foyer luxuriant qu’elle fait fleurir, sensuel et généreux, mais bordé d’épines.', en: 'An arch of full red roses frames her head: the lush home she brings to bloom, sensual and generous, yet edged with thorns.' },
    },
  ],
  'pentacles-14': [
    {
      label: { fr: 'La robe brodée de grappes', en: 'The grape-laden robe' },
      text: { fr: 'Feuilles de vigne et grappes de raisin couvrent tout son manteau : l’abondance patiemment cultivée, la richesse qui a mûri, pas celle qu’on rafle.', en: 'Vine leaves and clusters of grapes cover his whole robe: abundance patiently cultivated, wealth that has ripened, not wealth snatched.' },
    },
    {
      label: { fr: 'Le deniers posé sur le genou', en: 'The pentacle on his knee' },
      text: { fr: 'Un seul grand deniers d’or repose sur sa cuisse, sa main posée dessus sans crispation : maîtrise tranquille de tes ressources, tu possèdes sans être possédé.', en: 'A single large golden pentacle rests on his thigh, his hand laid on it without tension: quiet mastery of your resources, you own without being owned.' },
    },
    {
      label: { fr: 'Les têtes de taureau du trône', en: 'The throne’s bull heads' },
      text: { fr: 'Deux mufles de taureau sculptés couronnent son trône et rappellent l’élément Terre : ta force est têtue, stable, ancrée — rien ne te déloge sans raison.', en: 'Two carved bull heads crown his throne and recall the element Earth: your strength is stubborn, stable, rooted — nothing dislodges you without reason.' },
    },
  ],
};
