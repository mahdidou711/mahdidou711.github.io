import type { Localized } from "./projects";

export type ExperienceItem = {
  id: string;
  role: Localized;
  org: string;
  period: Localized;
  description: Localized;
  chips: Localized[];
};

export const experience: ExperienceItem[] = [
  {
    id: "tutor",
    role: { fr: "Professeur particulier", en: "Private Tutor" },
    org: "Indépendant",
    period: {
      fr: "Septembre 2024 — aujourd'hui · Région parisienne",
      en: "September 2024 — Present · Paris area",
    },
    description: {
      fr: "Cours particuliers en mathématiques, physique et électronique pour lycéens et étudiants.",
      en: "Private lessons in mathematics, physics and electronics for high-school and university students.",
    },
    chips: [
      { fr: "Maths", en: "Math" },
      { fr: "Physique", en: "Physics" },
      { fr: "Électronique", en: "Electronics" },
    ],
  },
  {
    id: "entv",
    role: { fr: "Stage technicien", en: "Technician Internship" },
    org: "ENTV",
    period: { fr: "Juin 2023 · Alger", en: "June 2023 · Algiers" },
    description: {
      fr: "Stage en environnement broadcast : maintenance d'équipements et observation des chaînes de production audiovisuelle.",
      en: "Broadcast environment internship: equipment maintenance and observation of audiovisual production chains.",
    },
    chips: [
      { fr: "Broadcast", en: "Broadcast" },
      { fr: "Maintenance", en: "Maintenance" },
    ],
  },
  {
    id: "celec",
    role: { fr: "Membre — Club scientifique", en: "Member — Scientific Club" },
    org: "CELEC · USTHB",
    period: {
      fr: "Septembre 2022 — juillet 2025 · USTHB",
      en: "September 2022 — July 2025 · USTHB",
    },
    description: {
      fr: "Participation à des projets d'électronique et de robotique au sein du club scientifique étudiant.",
      en: "Participation in electronics and robotics projects within the student scientific club.",
    },
    chips: [
      { fr: "Électronique", en: "Electronics" },
      { fr: "Robotique", en: "Robotics" },
      { fr: "Projets étudiants", en: "Student projects" },
    ],
  },
];
