import type { Dict } from "@/i18n";

export type SkillDomain = {
  key: keyof Dict["skills"]["domains"];
  chips: string[];
  usedIn: string[]; // project ids
};

export const skillDomains: SkillDomain[] = [
  {
    key: "embedded",
    chips: ["Embedded C", "STM32", "ESP32-S3", "I²C", "PWM", "Sensors"],
    usedIn: ["covapsy", "iaq"],
  },
  {
    key: "fpga",
    chips: ["VHDL", "FPGA logic", "Quartus", "Vivado"],
    usedIn: [],
  },
  {
    key: "lowlevel",
    chips: ["C", "C++", "SIMD", "pthreads", "Linux"],
    usedIn: ["simd", "rpn", "cpp", "covapsy"],
  },
  {
    key: "scientific",
    chips: ["Python", "NumPy", "Matplotlib", "OpenCV", "Signal processing", "Edge AI"],
    usedIn: ["cv", "covapsy"],
  },
  {
    key: "tools",
    chips: ["Git", "MATLAB / Simulink", "LaTeX", "Linux"],
    usedIn: [],
  },
];
