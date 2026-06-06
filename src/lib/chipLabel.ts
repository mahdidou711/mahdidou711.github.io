import type { Locale } from "@/providers/LocaleProvider";

const FR_MAP: Record<string, string> = {
  "Embedded C": "C embarqué",
  Sensors: "Capteurs",
  "FPGA logic": "Logique FPGA",
  "Signal processing": "Traitement du signal",
  "Edge AI": "IA embarquée",
};

export function chipLabel(chip: string, locale: Locale): string {
  if (locale === "fr" && FR_MAP[chip]) return FR_MAP[chip];
  return chip;
}
