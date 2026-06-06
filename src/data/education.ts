import type { Localized } from "./projects";

export type EducationItem = {
  id: string;
  institution: string;
  degree: Localized;
  period: Localized;
  focus: Localized;
  current?: boolean;
};

export const education: EducationItem[] = [
  {
    id: "m1-saclay",
    institution: "Université Paris-Saclay",
    degree: { fr: "Master 1 — E3A", en: "Master 1 — E3A" },
    period: { fr: "2025 — en cours", en: "2025 — present" },
    focus: {
      fr: "Électronique, énergie électrique et automatique. Spécialisation : systèmes embarqués, FPGA et traitement du signal.",
      en: "Electronics, electrical energy and automatic control. Focus: embedded systems, FPGA and signal processing.",
    },
    current: true,
  },
  {
    id: "l3-saclay",
    institution: "Université Paris-Saclay",
    degree: { fr: "Licence 3 — E3A", en: "Bachelor 3 — E3A track" },
    period: { fr: "2024 — 2025", en: "2024 — 2025" },
    focus: {
      fr: "Approfondissement en électronique numérique, automatique, traitement du signal et programmation embarquée.",
      en: "Advanced digital electronics, automatic control, signal processing and embedded programming.",
    },
  },
  {
    id: "licence-usthb",
    institution: "USTHB — Alger",
    degree: { fr: "Licence — Électronique", en: "Bachelor — Electronics" },
    period: { fr: "2021 — 2024", en: "2021 — 2024" },
    focus: {
      fr: "Bases de l'électronique analogique et numérique, mathématiques, physique et programmation.",
      en: "Foundations in analog and digital electronics, mathematics, physics and programming.",
    },
  },
];
