/**
 * Polarité oui/non de chaque carte pour la « question fermée ».
 * Charge intrinsèque à l'endroit, de -2 (non franc) à +2 (oui franc) ;
 * 0 = incertain / « ça dépend ». Le tarot n'est pas binaire : cette valeur
 * est une *inclinaison*, jamais un verdict. L'inversion la tempère dans
 * `src/lib/oracle.ts` (elle rapproche la réponse de l'incertain).
 *
 * Le classement suit la charge symbolique usuelle des arcanes (Rider-Waite-Smith) :
 * les cartes de joie, d'union et d'accomplissement penchent vers le oui ; celles
 * de rupture, d'entrave et d'illusion vers le non ; l'attente et l'ambivalence
 * restent au centre.
 */
export const POLARITY: Record<string, number> = {
  // --- Arcanes majeurs ---
  'major-00': 0, // Le Fou — saut dans l'inconnu, ni oui ni non
  'major-01': 2, // Le Magicien — pouvoir d'agir, tout est en main
  'major-02': 0, // La Grande Prêtresse — secret, « attends et observe »
  'major-03': 2, // L'Impératrice — abondance, fécondité
  'major-04': 1, // L'Empereur — cadre stable, oui posé
  'major-05': 1, // Le Hiérophante — voie établie, conformité
  'major-06': 2, // Les Amoureux — union, alliance
  'major-07': 2, // Le Chariot — élan, triomphe
  'major-08': 1, // La Force — maîtrise tranquille
  'major-09': 0, // L'Ermite — retrait, « pas maintenant »
  'major-10': 1, // La Roue — le sort tourne en ta faveur
  'major-11': 0, // La Justice — dépend de ce qui est juste
  'major-12': -1, // Le Pendu — suspension, rien n'avance
  'major-13': -1, // La Mort — une fin, un « non » à l'ancien
  'major-14': 1, // La Tempérance — équilibre, accord
  'major-15': -2, // Le Diable — entrave, emprise
  'major-16': -2, // La Tour — effondrement
  'major-17': 2, // L'Étoile — espoir, bienfait
  'major-18': -1, // La Lune — illusion, brouillard
  'major-19': 2, // Le Soleil — joie franche
  'major-20': 1, // Le Jugement — appel, renaissance
  'major-21': 2, // Le Monde — accomplissement

  // --- Bâtons (Feu : énergie, action) ---
  'wands-01': 2, // As — étincelle, élan neuf
  'wands-02': 1, // Deux — projet en préparation
  'wands-03': 2, // Trois — expansion, horizons qui s'ouvrent
  'wands-04': 2, // Quatre — fête, seuil franchi
  'wands-05': -1, // Cinq — friction, rivalité
  'wands-06': 2, // Six — victoire reconnue
  'wands-07': 1, // Sept — tenir sa position
  'wands-08': 2, // Huit — nouvelle rapide, mouvement
  'wands-09': 0, // Neuf — sur ses gardes, épuisé mais debout
  'wands-10': -1, // Dix — fardeau, trop lourd
  'wands-11': 1, // Valet — messager enthousiaste
  'wands-12': 1, // Cavalier — action, départ
  'wands-13': 2, // Reine — assurance rayonnante
  'wands-14': 2, // Roi — vision, meneur

  // --- Coupes (Eau : émotion, lien) ---
  'cups-01': 2, // As — cœur qui déborde
  'cups-02': 2, // Deux — union, partenariat
  'cups-03': 2, // Trois — joie partagée
  'cups-04': -1, // Quatre — lassitude, désintérêt
  'cups-05': -2, // Cinq — deuil, regret
  'cups-06': 1, // Six — douceur, retrouvailles
  'cups-07': -1, // Sept — mirages, trop de choix
  'cups-08': -1, // Huit — s'en aller, tourner la page
  'cups-09': 2, // Neuf — la carte du vœu exaucé
  'cups-10': 2, // Dix — plénitude, foyer heureux
  'cups-11': 1, // Valet — douce nouvelle, tendresse
  'cups-12': 1, // Cavalier — offre du cœur
  'cups-13': 2, // Reine — compassion, cœur ouvert
  'cups-14': 1, // Roi — maîtrise sereine des émotions

  // --- Épées (Air : conflit, esprit) ---
  'swords-01': 1, // As — percée, clarté décisive
  'swords-02': -1, // Deux — impasse, choix bloqué
  'swords-03': -2, // Trois — chagrin, cœur transpercé
  'swords-04': 0, // Quatre — repos, pause
  'swords-05': -2, // Cinq — défaite, discorde
  'swords-06': 1, // Six — passage vers plus calme
  'swords-07': -1, // Sept — ruse, dérobade
  'swords-08': -2, // Huit — piège, entrave
  'swords-09': -2, // Neuf — angoisse, cauchemar
  'swords-10': -2, // Dix — effondrement, fond touché
  'swords-11': 0, // Valet — vigilance, curiosité inquiète
  'swords-12': 0, // Cavalier — charge impétueuse, à double tranchant
  'swords-13': 0, // Reine — jugement lucide mais froid
  'swords-14': 1, // Roi — autorité, raison

  // --- Deniers (Terre : matière, stabilité) ---
  'pentacles-01': 2, // As — graine féconde, opportunité concrète
  'pentacles-02': 0, // Deux — jonglage, équilibre précaire
  'pentacles-03': 1, // Trois — savoir-faire, collaboration
  'pentacles-04': 0, // Quatre — on serre, on garde, sans mouvement
  'pentacles-05': -2, // Cinq — dénuement, exclusion
  'pentacles-06': 1, // Six — générosité, aide reçue
  'pentacles-07': 0, // Sept — patience, on attend la récolte
  'pentacles-08': 1, // Huit — travail assidu, progrès
  'pentacles-09': 2, // Neuf — abondance, autonomie
  'pentacles-10': 2, // Dix — richesse, héritage, durée
  'pentacles-11': 1, // Valet — étude, promesse concrète
  'pentacles-12': 0, // Cavalier — routine sûre mais lente
  'pentacles-13': 1, // Reine — soin, sens pratique
  'pentacles-14': 2, // Roi — prospérité, sécurité
};
