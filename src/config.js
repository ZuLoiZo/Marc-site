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
    email: "marcblandel4@gmail.com",
    soundcloud: "https://soundcloud.com/user-572837353",
  },

  // Biographie
  bio: {
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
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
  concerts: [
    {
      date: "15",
      month: "Jan",
      year: "2025",
      title: "Concert Solo",
      venue: "Salle Pleyel, Paris",
      status: "available",
      ticketUrl: "#",
    },
    {
      date: "28",
      month: "Fév",
      year: "2025",
      title: "Récital Piano",
      venue: "Opéra de Lyon",
      status: "available",
      ticketUrl: "#",
    },
    {
      date: "12",
      month: "Mars",
      year: "2025",
      title: "Festival de Printemps",
      venue: "Philharmonie, Marseille",
      status: "soldout",
    },
    {
      date: "05",
      month: "Avr",
      year: "2025",
      title: "Soirée Chopin",
      venue: "Théâtre des Champs-Élysées",
      status: "available",
      ticketUrl: "#",
    },
  ],

  // Images de la galerie
  // Remplacez par les vrais chemins d'images
  gallery: [
    { src: null, alt: "Image 1" },
    { src: null, alt: "Image 2" },
    { src: null, alt: "Image 3" },
    { src: null, alt: "Image 4" },
    { src: null, alt: "Image 5" },
    { src: null, alt: "Image 6" },
  ],
};
