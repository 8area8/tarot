import type { Locale } from '../lib/i18n';

/**
 * « Lire l'image » : les symboles repérables dans l'illustration Rider-Waite-Smith
 * de chaque carte. Le cœur de l'apprentissage RWS — apprendre à lire la scène
 * plutôt qu'à mémoriser des mots-clés. Chaque entrée nomme un élément visuel réel
 * de la carte et dit comment le lire. FR+EN, ton cohérent avec le reste du jeu.
 *
 * Couverture actuelle : les 22 arcanes majeurs (les 56 mineurs suivront).
 * Une carte absente de SYMBOLS n'affiche simplement pas le bouton « Lire l'image ».
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
};
