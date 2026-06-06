export const fr = {
  nav: {
    about: "À propos",
    projects: "Projets",
    skills: "Compétences",
    experience: "Expérience",
    education: "Formation",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    language: "Langue",
    theme: "Thème",
  },
  theme: { toggleLabel: "Changer de thème", light: "Mode clair", dark: "Mode sombre" },
  locale: { toggleLabel: "Changer de langue" },
  hero: {
    eyebrow: "Université Paris-Saclay · M1 E3A",
    name: "Bouama Mehdi",
    title: "Étudiant en électronique, FPGA et logiciel embarqué",
    intro:
      "Je conçois des systèmes embarqués où le matériel et le logiciel se rencontrent : FPGA, microcontrôleurs, capteurs et traitement du signal.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    chips: ["VHDL · FPGA", "STM32 · C", "Python · OpenCV"],
  },
  featured: {
    eyebrow: "Projets phares",
    title: "Projets phares",
    caption: "Deux projets qui résument mon profil : intégration matériel/logiciel et systèmes temps réel.",
  },
  covapsy: {
    badge: "3ᵉ place · course chronométrée",
    category: "Systèmes autonomes · Embarqué",
    title: "CoVAPSy",
    subtitle: "Véhicule autonome à l'échelle 1/10",
    contextLabel: "Contexte",
    context:
      "Projet de véhicule autonome 1/10 utilisé en compétition, basé sur un Raspberry Pi 4 et un STM32 communiquant en I²C, avec perception LiDAR 360°.",
    roleLabel: "Rôle",
    role:
      "Développement bas-niveau (PWM, I²C, pthreads), logique de contrôle, télémétrie, gestion de la sécurité et stratégie de récupération en cas de blocage.",
    resultLabel: "Résultat",
    result:
      "3ᵉ place en course chronométrée. Comportement stable, récupération automatique des situations bloquées et boucle de contrôle temps réel.",
  },
  iaq: {
    category: "Embarqué · Web · Capteurs",
    title: "IAQ Dashboard V2",
    subtitle: "Surveillance de la qualité de l'air en temps réel",
    description:
      "Plateforme ESP32-S3 connectée à un backend Flask/SQLite, avec visualisation Chart.js, transmission HTTPS, seuils d'alerte et historique multi-capteurs (CO₂, TVOC, CO, température, humidité).",
  },
  projects: {
    eyebrow: "Autres projets",
    title: "Autres projets",
    caption: "Travaux personnels et académiques en électronique, embarqué, vision et logiciel bas-niveau.",
    viewRepo: "Voir le dépôt",
    status: {
      completed: "Terminé",
      in_progress: "En cours",
      academic: "Académique",
      personal: "Personnel",
      experimental: "Expérimental",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "Profil",
    p1:
      "Étudiant en M1 E3A à l'Université Paris-Saclay (électronique, énergie électrique, automatique). Je m'intéresse à l'intégration matériel/logiciel, en particulier sur FPGA et microcontrôleurs.",
    p2:
      "Mes projets tournent autour des systèmes autonomes, de l'acquisition de capteurs et du logiciel bas-niveau : conception VHDL, programmation embarquée en C, traitement du signal et vision en Python scientifique.",
    p3:
      "J'aime travailler là où les contraintes matérielles imposent des choix logiciels précis, et où une solution doit être à la fois maintenable, testable et concrète.",
    photoAlt: "Portrait de Bouama Mehdi",
  },
  skills: {
    eyebrow: "Compétences",
    title: "Compétences techniques",
    caption: "Organisées par domaine, reliées à des projets concrets.",
    usedIn: "Mis en pratique :",
    domains: {
      embedded: { title: "Électronique & embarqué", intent: "Microcontrôleurs, bus de communication et capteurs." },
      fpga: { title: "FPGA & logique numérique", intent: "Conception VHDL, simulation et synthèse." },
      lowlevel: { title: "Logiciel bas-niveau", intent: "C, C++, threads, optimisation et Linux." },
      scientific: { title: "Python scientifique & vision", intent: "Traitement du signal, vision par ordinateur, edge AI." },
      tools: { title: "Outils & workflow", intent: "Environnement de travail d'ingénieur." },
    },
  },
  experience: { eyebrow: "Expérience", title: "Expérience" },
  education: { eyebrow: "Formation", title: "Formation" },
  contact: {
    eyebrow: "Contact",
    title: "Ouvert aux stages et opportunités techniques",
    caption:
      "Stages, projets embarqués, FPGA et traitement du signal : je suis disponible pour échanger autour d'opportunités ou de collaborations techniques.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    cvAvailable: "Télécharger le CV",
    cvSoon: "CV bientôt disponible",
    openExternal: "(ouvre dans un nouvel onglet)",
  },
  footer: {
    tagline: "Électronique · FPGA · Logiciel embarqué",
    rights: "Tous droits réservés.",
  },
};

export type Dict = typeof fr;
