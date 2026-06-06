export type Localized = { fr: string; en: string };

export type ProjectStatus =
  | "completed"
  | "in_progress"
  | "academic"
  | "personal"
  | "experimental";
export type ProjectVisual = "covapsy" | "iaq" | "simd" | "rpn" | "cv" | "cpp" | "globe";

export type Project = {
  id: string;
  featured: "primary" | "secondary" | false;
  title: string;
  tagline: Localized;
  description: Localized;
  stack: string[];
  category: Localized;
  status: ProjectStatus;
  repoUrl: string;
  visual: ProjectVisual;
};

/** Real GitHub repository URLs — preserved verbatim from the existing portfolio. */
export const projects: Project[] = [
  {
    id: "covapsy",
    featured: "primary",
    title: "CoVAPSy",
    tagline: {
      fr: "Véhicule autonome 1/10 — 3ᵉ place course chronométrée",
      en: "1/10-scale autonomous vehicle — 3rd place time-trial",
    },
    description: {
      fr: "Voiture autonome 1/10 (Raspberry Pi 4, STM32, RPLidar A2M12) avec contrôle temps réel, télémétrie et récupération de blocage.",
      en: "1/10-scale autonomous car (Raspberry Pi 4, STM32, RPLidar A2M12) with real-time control, telemetry and stuck-recovery.",
    },
    stack: ["Raspberry Pi 4", "STM32", "RPLidar A2M12", "Python", "C", "PWM", "I²C", "pthreads"],
    category: { fr: "Systèmes autonomes", en: "Autonomous systems" },
    status: "completed",
    repoUrl: "https://github.com/mahdidou711/mahdidou711-covapsy",
    visual: "covapsy",
  },
  {
    id: "iaq",
    featured: "secondary",
    title: "IAQ Dashboard V2",
    tagline: {
      fr: "Surveillance qualité de l'air en temps réel",
      en: "Real-time indoor air quality monitoring",
    },
    description: {
      fr: "ESP32-S3 + backend Flask/SQLite via HTTPS, visualisation Chart.js, alertes capteurs (CO₂, TVOC, CO, T°, RH).",
      en: "ESP32-S3 with Flask/SQLite backend over HTTPS, Chart.js visualization, sensor alerts (CO₂, TVOC, CO, temp, RH).",
    },
    stack: ["ESP32-S3", "Flask", "SQLite", "HTTPS", "Chart.js"],
    category: { fr: "Embarqué · Web", en: "Embedded · Web" },
    status: "in_progress",
    repoUrl: "https://github.com/mahdidou711/iaq-dashboard-v2",
    visual: "iaq",
  },
  {
    id: "simd",
    featured: false,
    title: "C Image Processing SIMD",
    tagline: { fr: "Traitement d'image vectorisé en C", en: "Vectorized image processing in C" },
    description: {
      fr: "Chargement/écriture d'images BMP en C, filtres en variantes scalaires puis optimisées SIMD, avec benchmarking comparatif scalaire vs vectorisé.",
      en: "BMP image loading/writing in C, filters implemented as scalar baselines then SIMD-optimized variants, with benchmarking comparing scalar vs vectorized performance.",
    },
    stack: ["C", "SIMD", "BMP", "Benchmarking"],
    category: { fr: "Logiciel bas-niveau", en: "Low-level software" },
    status: "personal",
    repoUrl: "https://github.com/mahdidou711/c-image-processing-simd",
    visual: "simd",
  },
  {
    id: "rpn",
    featured: false,
    title: "RPN Calculator",
    tagline: { fr: "Calculatrice en notation polonaise inverse", en: "Reverse Polish Notation calculator" },
    description: {
      fr: "Implémentation d'une calculatrice RPN avec parsing et évaluation à base de pile.",
      en: "RPN calculator implementation with parsing and stack-based evaluation.",
    },
    stack: ["C", "Stack", "Parsing"],
    category: { fr: "Logiciel", en: "Software" },
    status: "academic",
    repoUrl: "https://github.com/mahdidou711/RPNcalculator",
    visual: "rpn",
  },
  {
    id: "cv",
    featured: false,
    title: "Computer Vision Algorithms",
    tagline: { fr: "Algorithmes de vision en Python", en: "Computer vision algorithms in Python" },
    description: {
      fr: "Détection de points d'intérêt (Harris, FAST), estimation d'homographie, mise en correspondance par ZMSSD et stitching de panoramas, en Python.",
      en: "Interest point detection (Harris, FAST), homography estimation, ZMSSD feature matching and panorama stitching, implemented in Python.",
    },
    stack: ["Python", "NumPy", "OpenCV", "Harris", "FAST"],
    category: { fr: "Vision par ordinateur", en: "Computer vision" },
    status: "academic",
    repoUrl: "https://github.com/mahdidou711/computer-vision-algorithms-python",
    visual: "cv",
  },
  {
    id: "cpp",
    featured: false,
    title: "C++ OOP & Data Structures",
    tagline: { fr: "Programmation objet et structures de données", en: "Object-oriented programming and data structures" },
    description: {
      fr: "Exercices C++ couvrant POO, structures de données et patterns idiomatiques.",
      en: "C++ exercises covering OOP, data structures and idiomatic patterns.",
    },
    stack: ["C++", "OOP", "Data structures"],
    category: { fr: "Logiciel", en: "Software" },
    status: "academic",
    repoUrl: "https://github.com/mahdidou711/cpp-oop-data-structures",
    visual: "cpp",
  },
  {
    id: "portfolio",
    featured: false,
    title: "Portfolio Website",
    tagline: { fr: "Ancienne version du portfolio", en: "Previous portfolio version" },
    description: {
      fr: "Ancienne version statique du portfolio personnel, hébergée publiquement.",
      en: "Previous static version of the personal portfolio, publicly hosted.",
    },
    stack: ["HTML", "CSS", "JS"],
    category: { fr: "Web", en: "Web" },
    status: "personal",
    repoUrl: "https://github.com/mahdidou711/mahdidou711.github.io",
    visual: "globe",
  },
];

export const featuredPrimary = projects.find((p) => p.featured === "primary")!;
export const featuredSecondary = projects.find((p) => p.featured === "secondary")!;
export const secondaryProjects = projects.filter((p) => p.featured === false);
