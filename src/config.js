// ============================================
// CONFIGURATION DU SITE - Marc Blandel
// ============================================
// Modifiez ce fichier pour mettre à jour le contenu du site

export const config = {
  // Informations générales
  artist: {
    name: "Marc Blandel",
    title: "Pianiste & Compositeur",
    tagline: "L'émotion au bout des doigts",
    description: "Compositeur de musique à l'image, professeur de piano classique et jazz, co-créateur d'un festival de musique Funk-Soul et organisateur de concerts en appartement avec mon association \"Concerts sous la Voûte\".",
    email: "marcblandel4@gmail.com",
    soundcloud: "https://soundcloud.com/user-572837353",
    youtube: "https://www.youtube.com/watch?v=nXlzohO8mCg",
  },

  // Biographie
  bio: {
    paragraphs: [
      "Après une 1ere vie comblée en tant que kinésithérapeute ostéopathe tout autour de la planète, j'ai du changer de métier. Une opportunité que j'ai saisie pour choisir de vivre mon rêve de musicien.",
      "Quelques années d'études intensives en classe de Composition Instrumentale et Electroaccoustique au Conservatoire et à l'Ecole Nationale de Musique de Lyon me permettent d'obtenir un  D.E.M. d'écriture et analyse, la validation de \"Culture de musique contemporaine\". Ainsi qu'un diplôme de musicien pro du CFPM de Lyon.",
      "Aujourd'hui je suis compositeur de musique à l'image, professeur de piano classique et jazz, co-créateur d'un festival de musique Funk-Soul de la Croix-Rousse et organisateur de concerts en appartement avec mon association \"Concerts sous la Voûte\".",
      "Aujourd’hui, l’écoute attentive et l’énergie de mes mains de thérapeute s’expriment à travers ma sensibilité créative, pour composer des musiques à l’image et partager des émotions : films, animations, dessins animés, expositions culturelles…",
    ],
  },

  // ============================================
  // CONCERTS - Ajoutez/modifiez les dates ici
  // ============================================
  // Format:
  // {
  //   date: "JJ",        // Jour (ex: "15")
  //   month: "Mois",     // Mois abrégé (ex: "Jan", "Fév", "Mars")
  //   year: "AAAA",      // Année (ex: "2025")
  //   title: "Titre",    // Nom du concert
  //   venue: "Lieu",     // Salle et ville
  //   status: "available" | "soldout",  // Disponibilité
  //   ticketUrl: "https://..." // (optionnel) Lien de réservation
  // }
  concerts: [],

  // Images de la galerie
  // Remplacez par les vrais chemins d'images
  gallery: [
    { src: "studiomusiquelyon.png", alt: "Image 1" },
    { src: "Concert.png", alt: "Image 2" },
    { src: "console.png", alt: "Image 3" },
  ],
};
