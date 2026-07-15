import type { Orientation } from '../lib/types';

/**
 * Oracle « question fermée » (JDR solo) : chaque carte + orientation donne une
 * réponse sur l'échelle classique du solo (Non, et… → Oui, et…) plus un
 * « pourquoi » rédigé qui relie l'image de la carte au sens de la réponse.
 *
 * L'échelle a 6 crans, sans centre mort : l'oracle relance toujours la fiction.
 *   0 = Non, et…   (non aggravé)     3 = Oui, mais… (oui avec une contrepartie)
 *   1 = Non                          4 = Oui
 *   2 = Non, mais… (non consolé)     5 = Oui, et…   (oui amplifié)
 *
 * Principe d'écriture : à l'endroit, la carte peut atteindre les réponses franches
 * (« et ») ; l'inversion introduit presque toujours une complication (« mais »)
 * ou bascule le sens. Déterministe : une carte tirée dans une orientation donne
 * toujours la même réponse — l'aléatoire vient de la pioche, pas d'un jet.
 */
export type Answer = 0 | 1 | 2 | 3 | 4 | 5;

export interface OracleEntry {
  answer: Answer;
  why: { fr: string; en: string };
}

export const ORACLE: Record<string, Record<Orientation, OracleEntry>> = {
  // ---------------- Arcanes majeurs ----------------
  'major-00': {
    upright: { answer: 3, why: { fr: "Le Fou s'élance vers le vide en riant : oui, lance-toi — mais tu avances les yeux fermés, sans filet.", en: "The Fool steps laughing toward the edge: yes, leap — but you go in blind, with no safety net." } },
    reversed: { answer: 2, why: { fr: "L'élan tourne à la fuite imprudente : non, pas ainsi — mais un pas de côté évite encore la chute.", en: "The leap turns to reckless flight: no, not like this — but a step aside still avoids the fall." } },
  },
  'major-01': {
    upright: { answer: 5, why: { fr: "Tout est déjà sur la table et la main est sûre : oui, et tu as tous les outils pour réussir.", en: "Everything is already on the table and the hand is sure: yes, and you hold every tool to pull it off." } },
    reversed: { answer: 3, why: { fr: "Beau parleur, tours de passe-passe : oui en apparence — mais on te manipule, la promesse est creuse.", en: "Smooth talk and sleight of hand: yes on the surface — but you're being played, the promise is hollow." } },
  },
  'major-02': {
    upright: { answer: 2, why: { fr: "Elle garde le secret derrière son voile : non, pas maintenant — mais la réponse mûrit dans le silence.", en: "She keeps the secret behind her veil: no, not yet — but the answer is ripening in the silence." } },
    reversed: { answer: 1, why: { fr: "Le voile devient rideau, le secret se corrompt : non — quelque chose t'est caché qui joue contre toi.", en: "The veil becomes a curtain, the secret festers: no — something is hidden from you and works against you." } },
  },
  'major-03': {
    upright: { answer: 5, why: { fr: "Le champ ploie de blé mûr : oui, et cela portera ses fruits, nourri et fécond.", en: "The field bows heavy with ripe wheat: yes, and it will bear fruit, nourished and fertile." } },
    reversed: { answer: 3, why: { fr: "L'abondance se fait poigne : oui — mais l'excès étouffe, et le confort pèse comme une dette.", en: "Plenty tightens into a grip: yes — but excess smothers, and comfort weighs like a debt." } },
  },
  'major-04': {
    upright: { answer: 4, why: { fr: "L'ordre a un visage et une main ferme : oui, le cadre tient et la structure répond.", en: "Order has a face and a firm hand: yes, the framework holds and the structure answers." } },
    reversed: { answer: 2, why: { fr: "Le trône s'est fait mur : non, la rigidité écrase — mais assouplir l'emprise rouvre la voie.", en: "The throne has become a wall: no, the rigidity crushes — but loosening the grip reopens the way." } },
  },
  'major-05': {
    upright: { answer: 4, why: { fr: "La voie établie bénit ta démarche : oui, si tu suis les règles et la tradition.", en: "The established path blesses your move: yes, if you follow the rules and the tradition." } },
    reversed: { answer: 2, why: { fr: "La bénédiction s'est faite chaîne : non — le dogme enferme, mais t'affranchir des règles rouvre le choix.", en: "The blessing has become a chain: no — dogma confines, but breaking free of the rules reopens the choice." } },
  },
  'major-06': {
    upright: { answer: 5, why: { fr: "Le lien se noue de lui-même, béni d'en haut : oui, et le cœur y trouve son alliance.", en: "The bond ties of its own accord, blessed from above: yes, and the heart finds its alliance." } },
    reversed: { answer: 2, why: { fr: "La parole donnée se lézarde, deux fidélités s'opposent : non — mais choisir clair recolle ce qui tremble.", en: "The given word cracks, two loyalties pull apart: no — but a clear choice can mend what trembles." } },
  },
  'major-07': {
    upright: { answer: 5, why: { fr: "La seule volonté mène l'attelage droit au but : oui, et l'élan te portera jusqu'à la victoire.", en: "Sheer will drives the team straight to the goal: yes, and the momentum will carry you to victory." } },
    reversed: { answer: 3, why: { fr: "Les sphinx tirent chacun de leur côté : oui, ça fonce — mais sans rênes, la course vire à la déroute.", en: "The sphinxes pull opposite ways: yes, it charges on — but with no reins, the drive turns to rout." } },
  },
  'major-08': {
    upright: { answer: 4, why: { fr: "La main apaise le fauve sans une once de violence : oui, la douceur ferme viendra à bout de l'obstacle.", en: "The hand gentles the beast without a trace of force: yes, firm gentleness will master the obstacle." } },
    reversed: { answer: 2, why: { fr: "La main tremble et le fauve le sent : non — la peur gouverne, mais retrouver ton calme reprend la bête en main.", en: "The hand shakes and the beast feels it: no — fear rules, but regaining your calm brings the beast back in hand." } },
  },
  'major-09': {
    upright: { answer: 2, why: { fr: "Sa lanterne n'éclaire qu'un pas à la fois : non, pas maintenant — mais retire-toi et la clarté viendra.", en: "His lantern lights but one step at a time: no, not now — but withdraw, and the clarity will come." } },
    reversed: { answer: 1, why: { fr: "La lanterne reste éteinte, le dos tourné au sentier : non — l'isolement s'est refermé en terrier.", en: "The lantern stays dark, his back to the path: no — the isolation has sealed into a burrow." } },
  },
  'major-10': {
    upright: { answer: 4, why: { fr: "La roue tourne et te ramène vers le haut : oui, le vent du sort penche en ta faveur.", en: "The wheel turns and lifts you back up: yes, the wind of fate leans your way." } },
    reversed: { answer: 2, why: { fr: "Cette fois la pente descend et l'occasion se dérobe : non — mais la roue tourne encore, attends son retour.", en: "This time the slope runs down and the chance slips away: no — but the wheel still turns, wait for its return." } },
  },
  'major-11': {
    upright: { answer: 3, why: { fr: "La balance pèse chaque acte sans faveur : oui — mais seulement à hauteur de ce qui est juste.", en: "The scales weigh every deed without favor: yes — but only to the measure of what is just." } },
    reversed: { answer: 1, why: { fr: "Un pouce fausse la balance, le verdict s'achète : non — la mesure est truquée contre toi.", en: "A thumb rigs the scales, the verdict is bought: no — the measure is skewed against you." } },
  },
  'major-12': {
    upright: { answer: 2, why: { fr: "Tout se tient suspendu, tête en bas : non, rien n'avance — mais lâcher prise ouvre une autre vue.", en: "Everything hangs suspended, head down: no, nothing moves — but letting go opens another view." } },
    reversed: { answer: 1, why: { fr: "L'attente n'est plus qu'une corde qui serre : non — le sacrifice tourne à vide, l'impasse dure.", en: "The waiting is now just a tightening rope: no — the sacrifice runs empty, the deadlock holds." } },
  },
  'major-13': {
    upright: { answer: 2, why: { fr: "La faux clôt ce qui devait finir : non à l'ancien — mais derrière les tours, une aube neuve se lève.", en: "The scythe closes what had to end: no to the old — but beyond the towers, a new dawn rises." } },
    reversed: { answer: 1, why: { fr: "Ce qui est mort refuse de partir et pourrit sur place : non — tu t'accroches à ce qui devait tomber.", en: "What is dead refuses to leave and rots in place: no — you cling to what should have fallen." } },
  },
  'major-14': {
    upright: { answer: 4, why: { fr: "L'ange verse d'une coupe à l'autre sans perdre une goutte : oui, le juste dosage se trouve avec patience.", en: "The angel pours cup to cup without spilling a drop: yes, the right measure comes with patience." } },
    reversed: { answer: 2, why: { fr: "Le fil se brise, l'eau se répand : non — le mélange déborde, mais retrouver la mesure rétablit l'accord.", en: "The thread snaps, the water spills: no — the blend overflows, but finding the measure restores the harmony." } },
  },
  'major-15': {
    upright: { answer: 0, why: { fr: "Les chaînes pendent lâches mais on ne les ôte pas : non, et l'emprise te retient plus fort que tu ne crois.", en: "The chains hang loose yet go unremoved: no, and the hold binds you tighter than you think." } },
    reversed: { answer: 3, why: { fr: "La main glisse enfin sous le collier de fer : oui — tu peux te libérer, mais ne remets pas le cou dedans.", en: "A hand slips at last beneath the iron collar: yes — you can break free, but don't put your neck back in." } },
  },
  'major-16': {
    upright: { answer: 0, why: { fr: "La foudre fend l'édifice et rien ne la retient : non, et ce qu'on croyait solide s'effondre d'un coup.", en: "Lightning splits the tower and nothing holds it back: no, and what seemed solid collapses in an instant." } },
    reversed: { answer: 2, why: { fr: "L'orage gronde sans crever, on colmate les fissures : non — mais retarder l'effondrement ne fait qu'en épaissir le prix.", en: "The storm growls without breaking, the cracks are patched: no — but delaying the collapse only thickens its price." } },
  },
  'major-17': {
    upright: { answer: 5, why: { fr: "Après la tourmente, l'étoile veille et le havre s'ouvre : oui, et l'espoir te guide vers la clarté.", en: "After the storm, the star keeps watch and a haven opens: yes, and hope guides you toward the light." } },
    reversed: { answer: 2, why: { fr: "Les cruches versent dans le vide, l'étoile pâlit : non — l'espoir s'effrite, mais il n'est pas tout à fait éteint.", en: "The jugs pour into emptiness, the star pales: no — hope crumbles, but it is not quite put out." } },
  },
  'major-18': {
    upright: { answer: 2, why: { fr: "Rien n'a ses vrais contours sous la lune : non — les peurs brouillent tout, mais le sentier existe au-delà de la brume.", en: "Nothing holds its true shape under the moon: no — fears blur everything, but the path exists beyond the mist." } },
    reversed: { answer: 1, why: { fr: "La brume épaissit, le hurlement couvre toute voix : non — la peur submerge et prend les ombres pour des bêtes.", en: "The mist thickens, the howling drowns every voice: no — fear overwhelms and takes shadows for beasts." } },
  },
  'major-19': {
    upright: { answer: 5, why: { fr: "L'enfant rit sous un soleil plein ciel, rien ne se cache : oui, et la joie est franche, éclatante.", en: "The child laughs under a sky-filling sun, nothing hidden: yes, and the joy is plain and radiant." } },
    reversed: { answer: 3, why: { fr: "Le soleil chauffe fort mais l'éclat sonne creux : oui — mais le triomphe est en toc, et une ombre traîne derrière.", en: "The sun burns bright but the glow rings hollow: yes — but the triumph is fake, and a shadow drags behind." } },
  },
  'major-20': {
    upright: { answer: 4, why: { fr: "La trompette sonne et les morts se lèvent : oui, l'appel te réveille et une seconde chance flambe.", en: "The trumpet sounds and the dead rise: yes, the call wakes you and a second chance flares up." } },
    reversed: { answer: 2, why: { fr: "L'appel se heurte à des oreilles bouchées : non — tu te juges trop dur, mais l'oreille peut encore s'ouvrir.", en: "The call meets stopped ears: no — you judge yourself too harshly, but the ear can still open." } },
  },
  'major-21': {
    upright: { answer: 5, why: { fr: "La danse boucle au centre de la couronne : oui, et la boucle se referme, patiemment méritée.", en: "The dance closes at the center of the wreath: yes, and the circle seals, patiently earned." } },
    reversed: { answer: 3, why: { fr: "La couronne reste ouverte d'un côté : oui — presque — mais il manque un dernier pas pour franchir le seuil.", en: "The wreath stays open on one side: yes — almost — but one last step is missing to cross the threshold." } },
  },

  // ---------------- Bâtons (Feu) ----------------
  'wands-01': {
    upright: { answer: 5, why: { fr: "Une main jaillie du ciel offre le bâton en fleur : oui, et l'étincelle promet un beau départ.", en: "A hand bursting from the sky offers the sprouting wand: yes, and the spark promises a bright start." } },
    reversed: { answer: 3, why: { fr: "L'étincelle tarde à prendre : oui — mais l'élan manque encore, le départ se fait attendre.", en: "The spark is slow to catch: yes — but the drive is still missing, the start keeps you waiting." } },
  },
  'wands-02': {
    upright: { answer: 3, why: { fr: "Le globe en main, le regard sur l'horizon : oui — mais tu en es encore aux plans, il faut oser partir.", en: "Globe in hand, gaze on the horizon: yes — but you're still at the planning, you must dare to set out." } },
    reversed: { answer: 2, why: { fr: "Le globe reste posé, la peur retient : non — mais dépasser la crainte relance le projet.", en: "The globe stays on the table, fear holds you back: no — but pushing past the dread revives the plan." } },
  },
  'wands-03': {
    upright: { answer: 5, why: { fr: "Les navires reviennent chargés à l'horizon : oui, et l'expansion dépasse ce que tu espérais.", en: "The ships return laden on the horizon: yes, and the expansion goes beyond what you hoped." } },
    reversed: { answer: 3, why: { fr: "Les navires tardent à revenir : oui — mais des retards contrarient l'élan, patiente.", en: "The ships are slow to return: yes — but delays thwart the momentum, be patient." } },
  },
  'wands-04': {
    upright: { answer: 5, why: { fr: "Sous la tonnelle fleurie, on célèbre le seuil franchi : oui, et l'harmonie couronne le moment.", en: "Beneath the flowered canopy, the milestone is celebrated: yes, and harmony crowns the moment." } },
    reversed: { answer: 4, why: { fr: "La fête est plus discrète mais bien réelle : oui, la joie tient même si l'éclat est moindre.", en: "The celebration is quieter but real: yes, the joy holds even if the shine is dimmer." } },
  },
  'wands-05': {
    upright: { answer: 2, why: { fr: "Cinq bâtons s'entrechoquent dans la mêlée : non — la friction domine, mais rien n'est encore joué.", en: "Five staves clash in the fray: no — friction rules, but nothing is settled yet." } },
    reversed: { answer: 3, why: { fr: "La mêlée se disperse enfin : oui — mais des tensions couvent encore sous la surface.", en: "The scuffle finally scatters: yes — but tensions still smolder under the surface." } },
  },
  'wands-06': {
    upright: { answer: 5, why: { fr: "Le cavalier rentre couronné de laurier sous les acclamations : oui, et la victoire est reconnue de tous.", en: "The rider returns laurel-crowned to cheers: yes, and the victory is recognized by all." } },
    reversed: { answer: 3, why: { fr: "Le laurier fane et la foule doute : oui — mais la reconnaissance se fait attendre, ne crie pas trop tôt.", en: "The laurel wilts and the crowd doubts: yes — but the recognition is delayed, don't crow too soon." } },
  },
  'wands-07': {
    upright: { answer: 3, why: { fr: "Seul en hauteur, il tient tête à six assaillants : oui — mais tu devras défendre ta position sans relâche.", en: "Alone on the high ground, he holds off six attackers: yes — but you'll have to defend your position without let-up." } },
    reversed: { answer: 2, why: { fr: "Les assauts sont trop nombreux, la garde faiblit : non — mais tenir un peu plus renverse encore l'issue.", en: "The assaults are too many, the guard weakens: no — but holding a little longer can still turn it around." } },
  },
  'wands-08': {
    upright: { answer: 5, why: { fr: "Huit bâtons filent dans l'air vers leur but : oui, et tout se met en mouvement, vite.", en: "Eight staves fly through the air toward their mark: yes, and everything moves into motion, fast." } },
    reversed: { answer: 3, why: { fr: "Les bâtons retombent en désordre : oui — mais des lenteurs et des couacs ralentissent la course.", en: "The staves fall scattered: yes — but delays and mix-ups slow the course." } },
  },
  'wands-09': {
    upright: { answer: 3, why: { fr: "Blessé mais debout, il garde encore la palissade : oui — mais il te faudra tenir malgré la fatigue.", en: "Wounded but standing, he still guards the fence: yes — but you'll have to hold on despite the fatigue." } },
    reversed: { answer: 2, why: { fr: "Les forces manquent, la méfiance ronge : non — mais un dernier sursaut peut encore sauver la position.", en: "Strength fails, suspicion gnaws: no — but one last effort can still save the position." } },
  },
  'wands-10': {
    upright: { answer: 2, why: { fr: "Ployant sous dix bâtons, il avance à peine : non — la charge écrase, mais en poser quelques-uns rouvre le chemin.", en: "Bent under ten staves, he barely advances: no — the load crushes, but setting a few down reopens the way." } },
    reversed: { answer: 3, why: { fr: "Il lâche enfin une partie du fardeau : oui — mais seulement si tu acceptes de déléguer et d'alléger.", en: "He finally drops part of the burden: yes — but only if you agree to delegate and lighten the load." } },
  },
  'wands-11': {
    upright: { answer: 4, why: { fr: "Le jeune porteur brandit son bâton avec fougue : oui, l'idée est prometteuse et l'enthousiasme au rendez-vous.", en: "The young bearer brandishes his staff with zeal: yes, the idea is promising and the enthusiasm is there." } },
    reversed: { answer: 3, why: { fr: "L'ardeur retombe, le message tarde : oui — mais l'idée manque encore de maturité.", en: "The zeal fizzles, the message lags: yes — but the idea still lacks maturity." } },
  },
  'wands-12': {
    upright: { answer: 4, why: { fr: "Le cavalier fougueux s'élance, cabré : oui, l'action est lancée avec panache.", en: "The fiery knight charges, rearing: yes, the action is launched with flair." } },
    reversed: { answer: 3, why: { fr: "La monture s'emballe sans direction : oui — mais l'impulsivité risque de tout faire dérailler.", en: "The mount bolts without direction: yes — but the impulsiveness risks derailing it all." } },
  },
  'wands-13': {
    upright: { answer: 5, why: { fr: "La reine trône, tournesol en main, chat noir à ses pieds : oui, et ton assurance rayonnante emporte l'adhésion.", en: "The queen sits enthroned, sunflower in hand, black cat at her feet: yes, and your radiant confidence wins the day." } },
    reversed: { answer: 3, why: { fr: "L'éclat se voile de doute ou d'exigence : oui — mais l'assurance vacille, ne te laisse pas gagner par la jalousie.", en: "The radiance clouds with doubt or demand: yes — but the confidence wavers, don't let jealousy win." } },
  },
  'wands-14': {
    upright: { answer: 5, why: { fr: "Le roi tient son bâton en fleur, salamandres à ses pieds : oui, et ta vision audacieuse ouvre grand la voie.", en: "The king holds his flowering staff, salamanders at his feet: yes, and your bold vision throws the way wide open." } },
    reversed: { answer: 3, why: { fr: "La vision vire à l'autoritarisme : oui — mais l'impatience et l'orgueil peuvent tout gâcher.", en: "The vision turns overbearing: yes — but impatience and pride can spoil it all." } },
  },

  // ---------------- Coupes (Eau) ----------------
  'cups-01': {
    upright: { answer: 5, why: { fr: "La coupe déborde, offerte par une main du ciel : oui, et le cœur reçoit plus qu'il n'espérait.", en: "The cup overflows, offered by a hand from the sky: yes, and the heart receives more than it hoped." } },
    reversed: { answer: 3, why: { fr: "La coupe se renverse et l'eau se perd : oui — mais l'émotion se bloque, le cœur reste sur sa faim.", en: "The cup tips and the water is lost: yes — but the feeling is blocked, the heart stays wanting." } },
  },
  'cups-02': {
    upright: { answer: 5, why: { fr: "Deux êtres échangent leur coupe sous le caducée : oui, et l'union se scelle d'un accord du cœur.", en: "Two exchange their cups beneath the caduceus: yes, and the union is sealed by a meeting of hearts." } },
    reversed: { answer: 2, why: { fr: "L'échange se déséquilibre, la coupe tremble : non — mais parler franc peut encore rétablir le lien.", en: "The exchange tips out of balance, the cup shakes: no — but speaking plainly can still restore the bond." } },
  },
  'cups-03': {
    upright: { answer: 5, why: { fr: "Trois femmes lèvent leurs coupes en dansant : oui, et l'entourage fête et soutient.", en: "Three women raise their cups in a dance: yes, and the circle celebrates and supports." } },
    reversed: { answer: 3, why: { fr: "La fête tourne à l'excès ou au commérage : oui — mais gare aux abus et aux faux amis.", en: "The party tips into excess or gossip: yes — but beware of overindulgence and false friends." } },
  },
  'cups-04': {
    upright: { answer: 2, why: { fr: "Bras croisés, il boude trois coupes et ignore la quatrième offerte : non — mais lève les yeux, une occasion t'est tendue.", en: "Arms crossed, he sulks at three cups and ignores the fourth on offer: no — but look up, an opportunity is held out to you." } },
    reversed: { answer: 3, why: { fr: "Il décroise enfin les bras : oui — mais il t'a fallu sortir de ta bouderie pour le voir.", en: "He finally uncrosses his arms: yes — but you had to shake off the sulk to see it." } },
  },
  'cups-05': {
    upright: { answer: 2, why: { fr: "Trois coupes renversées, deux encore debout derrière lui : non — le deuil pèse, mais tout n'est pas perdu dans ton dos.", en: "Three cups spilled, two still standing behind him: no — grief weighs, but not all is lost behind you." } },
    reversed: { answer: 3, why: { fr: "Il se retourne enfin vers les coupes debout : oui — mais seulement en cessant de pleurer ce qui est versé.", en: "He finally turns toward the standing cups: yes — but only by ceasing to mourn what is spilled." } },
  },
  'cups-06': {
    upright: { answer: 4, why: { fr: "Un enfant offre une coupe fleurie à un autre : oui, la douceur et un geste du passé portent bonheur.", en: "A child offers a flowered cup to another: yes, tenderness and a gesture from the past bring good fortune." } },
    reversed: { answer: 3, why: { fr: "Le regard reste tourné vers l'enfance : oui — mais s'accrocher au passé freine le présent.", en: "The gaze stays turned toward childhood: yes — but clinging to the past holds back the present." } },
  },
  'cups-07': {
    upright: { answer: 2, why: { fr: "Sept coupes flottent, chargées de mirages : non — l'illusion brouille tout, mais choisir une seule voie dissipe le rêve.", en: "Seven cups float, laden with mirages: no — illusion clouds it all, but picking a single path clears the dream." } },
    reversed: { answer: 3, why: { fr: "Le brouillard des coupes se dissipe : oui — mais seulement quand tu tranches parmi les mirages.", en: "The fog of cups lifts: yes — but only when you cut through the mirages." } },
  },
  'cups-08': {
    upright: { answer: 2, why: { fr: "Il tourne le dos aux huit coupes et s'en va vers les montagnes : non — mais partir mène vers quelque chose de plus vrai.", en: "He turns his back on the eight cups and walks toward the mountains: no — but leaving leads toward something truer." } },
    reversed: { answer: 2, why: { fr: "Le pas hésite, il revient sur ses coupes : non — mais fuir ou rester par peur ne règle rien.", en: "The step falters, he turns back to his cups: no — but fleeing or staying out of fear settles nothing." } },
  },
  'cups-09': {
    upright: { answer: 5, why: { fr: "L'hôte satisfait trône devant ses neuf coupes alignées : oui, et c'est la carte du vœu exaucé.", en: "The satisfied host sits before his nine aligned cups: yes, and this is the wish-granted card." } },
    reversed: { answer: 3, why: { fr: "Le contentement sonne un peu creux : oui — mais le vœu comblé pourrait ne pas suffire à ton bonheur.", en: "The contentment rings a little hollow: yes — but the granted wish may not be enough for your happiness." } },
  },
  'cups-10': {
    upright: { answer: 5, why: { fr: "Un arc-en-ciel de dix coupes couronne la famille réunie : oui, et la plénitude rayonne sur tout.", en: "A rainbow of ten cups crowns the gathered family: yes, and fulfilment shines over everything." } },
    reversed: { answer: 3, why: { fr: "L'arc-en-ciel pâlit sur un foyer fêlé : oui — mais l'harmonie demande à être réparée.", en: "The rainbow fades over a cracked home: yes — but the harmony needs mending." } },
  },
  'cups-11': {
    upright: { answer: 4, why: { fr: "Le page contemple un poisson surgi de sa coupe : oui, une douce nouvelle ou une idée sensible s'annonce.", en: "The page gazes at a fish rising from his cup: yes, a sweet message or a tender idea is on its way." } },
    reversed: { answer: 3, why: { fr: "Le poisson replonge, l'humeur se trouble : oui — mais l'immaturité ou la susceptibilité gâche un peu l'élan.", en: "The fish dives back, the mood clouds: yes — but immaturity or touchiness dulls the momentum." } },
  },
  'cups-12': {
    upright: { answer: 4, why: { fr: "Le chevalier avance au pas, coupe tendue comme une offrande : oui, une proposition du cœur se présente.", en: "The knight advances at a walk, cup held out like an offering: yes, an offer of the heart comes forward." } },
    reversed: { answer: 3, why: { fr: "L'offrande cache peut-être un mirage : oui — mais méfie-toi des promesses trop belles.", en: "The offering may hide a mirage: yes — but beware of promises too good to be true." } },
  },
  'cups-13': {
    upright: { answer: 5, why: { fr: "La reine contemple sa coupe ouvragée au bord de l'eau : oui, et ton cœur ouvert et ton intuition te guident juste.", en: "The queen gazes at her ornate cup by the water: yes, and your open heart and intuition guide you true." } },
    reversed: { answer: 3, why: { fr: "L'eau déborde de la coupe : oui — mais l'émotion te submerge, garde un pied sur la rive.", en: "The water spills from the cup: yes — but the emotion floods you, keep one foot on the bank." } },
  },
  'cups-14': {
    upright: { answer: 4, why: { fr: "Le roi tient sa coupe, serein sur un trône cerné par les vagues : oui, la maîtrise sereine des émotions porte ses fruits.", en: "The king holds his cup, serene on a throne ringed by waves: yes, calm mastery of feeling bears fruit." } },
    reversed: { answer: 3, why: { fr: "Sous le calme, les vagues menacent : oui — mais l'émotion refoulée ou manipulée trouble le jugement.", en: "Beneath the calm, the waves threaten: yes — but repressed or manipulated feeling clouds the judgment." } },
  },

  // ---------------- Épées (Air) ----------------
  'swords-01': {
    upright: { answer: 4, why: { fr: "L'épée dressée fend l'air, couronnée de laurier : oui, une percée nette tranche la question.", en: "The upright sword cleaves the air, laurel-crowned: yes, a clean breakthrough cuts through the question." } },
    reversed: { answer: 3, why: { fr: "L'épée vacille, la lame se retourne : oui — mais la clarté manque, la force peut se retourner contre toi.", en: "The sword wavers, the blade turns: yes — but clarity is lacking, the force may turn against you." } },
  },
  'swords-02': {
    upright: { answer: 2, why: { fr: "Les yeux bandés, deux épées croisées, elle refuse de choisir : non — l'impasse dure tant que tu n'ôtes pas le bandeau.", en: "Blindfolded, two crossed swords, she refuses to choose: no — the deadlock holds until you lift the blindfold." } },
    reversed: { answer: 3, why: { fr: "Le bandeau tombe, une épée s'abaisse : oui — mais il t'a fallu regarder la vérité en face.", en: "The blindfold falls, one sword lowers: yes — but you had to face the truth to get there." } },
  },
  'swords-03': {
    upright: { answer: 0, why: { fr: "Trois épées transpercent un cœur sous la pluie : non, et la blessure fait mal, sans détour.", en: "Three swords pierce a heart under the rain: no, and the wound cuts deep, plainly." } },
    reversed: { answer: 2, why: { fr: "Les épées commencent à se retirer du cœur : non — mais la douleur reflue, la guérison s'amorce.", en: "The swords begin to withdraw from the heart: no — but the pain recedes, the healing begins." } },
  },
  'swords-04': {
    upright: { answer: 2, why: { fr: "Un gisant repose, trois épées au mur : non, pas maintenant — mais le repos te prépare au retour.", en: "An effigy rests, three swords on the wall: no, not now — but the rest readies you for the return." } },
    reversed: { answer: 3, why: { fr: "Le gisant se relève enfin : oui — mais es-tu vraiment reposé, ou reprends-tu trop tôt ?", en: "The effigy finally rises: yes — but are you truly rested, or resuming too soon?" } },
  },
  'swords-05': {
    upright: { answer: 2, why: { fr: "Il ramasse les épées, deux ennemis s'éloignent vaincus : non — la victoire ici est amère, sans gloire à gagner.", en: "He gathers the swords, two foes walk off beaten: no — victory here is bitter, no glory to win." } },
    reversed: { answer: 2, why: { fr: "Les épées se posent, mais la rancune traîne : non — mais réparer les torts peut désamorcer le conflit.", en: "The swords are set down, yet resentment lingers: no — but mending the wrongs can defuse the conflict." } },
  },
  'swords-06': {
    upright: { answer: 3, why: { fr: "La barque glisse vers la rive plus calme : oui — mais la traversée n'est pas finie, garde le cap.", en: "The boat glides toward the calmer shore: yes — but the crossing isn't over, hold the course." } },
    reversed: { answer: 2, why: { fr: "La barque tourne en rond, incapable de partir : non — mais accepter le départ libère enfin le courant.", en: "The boat circles, unable to leave: no — but accepting the departure finally frees the current." } },
  },
  'swords-07': {
    upright: { answer: 2, why: { fr: "Il s'esquive du camp avec cinq épées volées : non — la ruse ne tient pas debout, mais un plan plus franc peut réussir.", en: "He sneaks from the camp with five stolen swords: no — the ruse won't hold, but a more honest plan could work." } },
    reversed: { answer: 2, why: { fr: "La ruse se dévoile au grand jour : non — mais avouer et rendre ce qui est pris rétablit la confiance.", en: "The trick comes to light: no — but owning up and returning what was taken restores trust." } },
  },
  'swords-08': {
    upright: { answer: 2, why: { fr: "Ligotée et bandée au milieu de huit épées : non — mais les liens sont lâches, un pas de côté suffit à sortir.", en: "Bound and blindfolded among eight swords: no — but the bonds are loose, one sidestep is enough to escape." } },
    reversed: { answer: 3, why: { fr: "Le bandeau glisse, les liens tombent : oui — mais tu dois oser voir que la cage n'était pas fermée.", en: "The blindfold slips, the bonds fall: yes — but you must dare to see the cage was never locked." } },
  },
  'swords-09': {
    upright: { answer: 2, why: { fr: "Assis dans le noir, la tête dans les mains, neuf épées au mur : non — mais l'angoisse exagère, l'aube dissipe souvent le pire.", en: "Sitting in the dark, head in hands, nine swords on the wall: no — but the dread exaggerates, dawn often scatters the worst." } },
    reversed: { answer: 2, why: { fr: "La nuit blanche commence à pâlir : non — mais nommer tes peurs les réduit à leur vraie taille.", en: "The sleepless night begins to pale: no — but naming your fears cuts them down to their true size." } },
  },
  'swords-10': {
    upright: { answer: 0, why: { fr: "Dix épées plantées dans le dos, face contre terre : non, et c'est le fond touché, sans issue de ce côté.", en: "Ten swords in the back, face to the ground: no, and this is rock bottom, no way out on this side." } },
    reversed: { answer: 2, why: { fr: "Le pire est passé, l'aube point à l'horizon : non — mais on ne peut que remonter désormais.", en: "The worst is over, dawn breaks on the horizon: no — but from here the only way is up." } },
  },
  'swords-11': {
    upright: { answer: 3, why: { fr: "Le page scrute l'horizon, épée levée dans le vent : oui — mais reste sur tes gardes, l'info demande vérification.", en: "The page scans the horizon, sword raised in the wind: yes — but stay alert, the news needs checking." } },
    reversed: { answer: 2, why: { fr: "L'épée s'agite en paroles blessantes : non — mais tenir ta langue et vérifier tes sources change la donne.", en: "The sword flails into cutting words: no — but holding your tongue and checking your facts changes things." } },
  },
  'swords-12': {
    upright: { answer: 3, why: { fr: "Le cavalier fonce sabre au clair dans la tempête : oui — mais la précipitation risque de te faire foncer dans le mur.", en: "The knight charges saber drawn into the storm: yes — but the haste risks driving you straight into a wall." } },
    reversed: { answer: 2, why: { fr: "La charge dérape, l'élan se retourne : non — mais ralentir et viser juste sauve encore la manœuvre.", en: "The charge skids, the momentum backfires: no — but slowing down and aiming true can still save the move." } },
  },
  'swords-13': {
    upright: { answer: 3, why: { fr: "La reine tend son épée droite, main ouverte : oui — mais la lucidité sans complaisance peut trancher plus qu'il ne faut.", en: "The queen holds her sword upright, hand open: yes — but unsparing clarity can cut more than needed." } },
    reversed: { answer: 2, why: { fr: "La lame se fait froide et amère : non — mais adoucir le jugement rouvre le dialogue.", en: "The blade turns cold and bitter: no — but softening the judgment reopens the dialogue." } },
  },
  'swords-14': {
    upright: { answer: 4, why: { fr: "Le roi siège, épée droite, regard sans détour : oui, la raison et l'autorité tranchent en ta faveur.", en: "The king sits, sword upright, gaze unflinching: yes, reason and authority rule in your favor." } },
    reversed: { answer: 2, why: { fr: "L'épée sert le pouvoir plus que le juste : non — mais une décision honnête, non tyrannique, renverse la vapeur.", en: "The sword serves power more than fairness: no — but an honest, untyrannical ruling turns the tide." } },
  },

  // ---------------- Deniers (Terre) ----------------
  'pentacles-01': {
    upright: { answer: 5, why: { fr: "Une main du ciel présente un denier au-dessus d'un jardin en fleur : oui, et l'occasion est solide, concrète.", en: "A hand from the sky presents a coin above a flowering garden: yes, and the opportunity is solid and concrete." } },
    reversed: { answer: 3, why: { fr: "Le denier glisse des doigts : oui — mais gare à l'occasion mal saisie ou au mauvais placement.", en: "The coin slips from the fingers: yes — but beware the mishandled chance or the poor investment." } },
  },
  'pentacles-02': {
    upright: { answer: 3, why: { fr: "Il jongle avec deux deniers dans un ruban sans fin : oui — mais l'équilibre est précaire, ne charge pas trop la barque.", en: "He juggles two coins in an endless ribbon: yes — but the balance is precarious, don't overload the boat." } },
    reversed: { answer: 2, why: { fr: "Les deniers échappent au jongleur débordé : non — mais reprendre une chose à la fois rétablit l'équilibre.", en: "The coins slip from the overwhelmed juggler: no — but taking one thing at a time restores the balance." } },
  },
  'pentacles-03': {
    upright: { answer: 4, why: { fr: "L'artisan confère avec deux commanditaires dans la cathédrale : oui, le savoir-faire et la collaboration bâtissent solide.", en: "The craftsman confers with two patrons in the cathedral: yes, skill and collaboration build something solid." } },
    reversed: { answer: 3, why: { fr: "Les plans se contredisent sur le chantier : oui — mais sans coordination, l'ouvrage risque le bâclé.", en: "The plans contradict on the site: yes — but without coordination, the work risks being botched." } },
  },
  'pentacles-04': {
    upright: { answer: 3, why: { fr: "Il serre ses quatre deniers sans rien lâcher : oui — mais à trop vouloir garder, tu bloques ce qui devrait circuler.", en: "He clutches his four coins, letting nothing go: yes — but by hoarding, you block what ought to flow." } },
    reversed: { answer: 3, why: { fr: "Les doigts se desserrent enfin sur les deniers : oui — mais seulement si tu acceptes de lâcher un peu.", en: "The fingers finally loosen on the coins: yes — but only if you agree to let go a little." } },
  },
  'pentacles-05': {
    upright: { answer: 0, why: { fr: "Deux miséreux passent dans la neige devant un vitrail éclairé : non, et le dénuement et l'exclusion pèsent lourd.", en: "Two destitute figures pass in the snow beneath a lit window: no, and want and exclusion weigh heavy." } },
    reversed: { answer: 3, why: { fr: "La porte éclairée se rapproche enfin : oui — mais il te faut oser demander l'aide tendue.", en: "The lit door finally draws near: yes — but you must dare to accept the help held out." } },
  },
  'pentacles-06': {
    upright: { answer: 4, why: { fr: "Le marchand pèse et distribue ses pièces aux mendiants : oui, l'aide arrive, l'échange est juste.", en: "The merchant weighs and shares his coins with the beggars: yes, help arrives, the exchange is fair." } },
    reversed: { answer: 3, why: { fr: "La balance penche, le don cache un intérêt : oui — mais vérifie ce qu'on attend de toi en retour.", en: "The scales tip, the gift hides an interest: yes — but check what's expected of you in return." } },
  },
  'pentacles-07': {
    upright: { answer: 3, why: { fr: "Appuyé sur sa houe, il contemple ses deniers mûrir : oui — mais la récolte demande encore du temps, ne cueille pas trop tôt.", en: "Leaning on his hoe, he watches his coins ripen: yes — but the harvest needs more time, don't pick too soon." } },
    reversed: { answer: 2, why: { fr: "Le fruit tarde et le doute gagne : non — mais réévaluer plutôt qu'abandonner peut sauver l'investissement.", en: "The fruit is slow and doubt creeps in: no — but reassessing rather than quitting can save the investment." } },
  },
  'pentacles-08': {
    upright: { answer: 4, why: { fr: "L'artisan frappe denier sur denier, appliqué : oui, le travail assidu paie et la maîtrise vient.", en: "The craftsman strikes coin after coin, diligent: yes, steady work pays off and mastery comes." } },
    reversed: { answer: 3, why: { fr: "Le geste devient mécanique, l'ardeur s'émousse : oui — mais sans soin ni sens, l'ouvrage perd sa valeur.", en: "The motion turns mechanical, the zeal dulls: yes — but without care or meaning, the work loses its worth." } },
  },
  'pentacles-09': {
    upright: { answer: 5, why: { fr: "Dans son jardin fleuri, un faucon au poing : oui, et l'abondance récoltée par toi-même est bien là.", en: "In her flowering garden, a falcon on her wrist: yes, and the abundance you earned yourself is right here." } },
    reversed: { answer: 3, why: { fr: "Le jardin brille mais sonne un peu vide : oui — mais l'autonomie a un prix, attention à la dépendance ou au vernis.", en: "The garden shines but rings a little empty: yes — but self-reliance has a cost, mind the dependence or the veneer." } },
  },
  'pentacles-10': {
    upright: { answer: 5, why: { fr: "Trois générations sous l'arche, deniers et chiens autour : oui, et la richesse s'inscrit dans la durée et l'héritage.", en: "Three generations beneath the arch, coins and hounds around: yes, and the wealth endures across time and legacy." } },
    reversed: { answer: 3, why: { fr: "L'héritage se fissure de querelles : oui — mais l'instabilité ou les disputes menacent la fondation.", en: "The legacy cracks with quarrels: yes — but instability or disputes threaten the foundation." } },
  },
  'pentacles-11': {
    upright: { answer: 4, why: { fr: "Le page contemple un denier comme une promesse : oui, une occasion concrète s'ouvre à qui veut apprendre.", en: "The page studies a coin like a promise: yes, a concrete opportunity opens for whoever will learn." } },
    reversed: { answer: 3, why: { fr: "Le denier reste à contempler sans agir : oui — mais la remise à plus tard risque de laisser filer l'occasion.", en: "The coin stays admired but untouched: yes — but putting it off risks letting the chance slip away." } },
  },
  'pentacles-12': {
    upright: { answer: 3, why: { fr: "Le cavalier immobile veille sur son denier, champ labouré derrière : oui — mais lentement, par la constance plus que par l'élan.", en: "The still knight watches over his coin, plowed field behind: yes — but slowly, through steadiness rather than dash." } },
    reversed: { answer: 2, why: { fr: "La monture ne bouge plus, l'ennui s'installe : non — mais sortir de la routine relance la machine.", en: "The mount no longer moves, boredom sets in: no — but breaking the routine gets things going again." } },
  },
  'pentacles-13': {
    upright: { answer: 4, why: { fr: "La reine trône dans un jardin luxuriant, denier sur les genoux : oui, le sens pratique et le soin font prospérer.", en: "The queen sits enthroned in a lush garden, coin on her lap: yes, practicality and care make things prosper." } },
    reversed: { answer: 3, why: { fr: "Le jardin déborde et l'épuise : oui — mais à trop porter les autres, veille à ne pas te négliger.", en: "The garden overwhelms and drains her: yes — but in carrying everyone, take care not to neglect yourself." } },
  },
  'pentacles-14': {
    upright: { answer: 5, why: { fr: "Le roi trône parmi les vignes, denier en main, taureau à ses pieds : oui, et la prospérité repose sur des bases sûres.", en: "The king sits enthroned among the vines, coin in hand, bull at his feet: yes, and prosperity rests on sure foundations." } },
    reversed: { answer: 3, why: { fr: "L'or devient une fin en soi : oui — mais l'avidité ou la mauvaise gestion peut ronger l'acquis.", en: "Gold becomes an end in itself: yes — but greed or poor management can erode what's gained." } },
  },
};
