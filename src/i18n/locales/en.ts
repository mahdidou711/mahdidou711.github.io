import type { Dict } from "./fr";

export const en: Dict = {
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    language: "Language",
    theme: "Theme",
  },
  theme: { toggleLabel: "Toggle theme", light: "Light mode", dark: "Dark mode" },
  locale: { toggleLabel: "Switch language" },
  hero: {
    eyebrow: "Université Paris-Saclay · M1 E3A",
    name: "Bouama Mehdi",
    title: "Electronics, FPGA & Embedded Software Student",
    intro:
      "I build embedded systems where hardware and software meet: FPGAs, microcontrollers, sensors and signal processing.",
    ctaProjects: "View my projects",
    ctaContact: "Contact me",
    chips: ["VHDL · FPGA", "STM32 · C", "Python · OpenCV"],
  },
  featured: {
    eyebrow: "Featured work",
    title: "Featured work",
    caption: "Two projects that summarize my profile: hardware/software integration and real-time systems.",
  },
  covapsy: {
    badge: "3rd place · Time-trial",
    category: "Autonomous systems · Embedded",
    title: "CoVAPSy",
    subtitle: "1/10-scale autonomous vehicle",
    contextLabel: "Context",
    context:
      "Competition-grade 1/10-scale autonomous car built around a Raspberry Pi 4 and an STM32 communicating over I²C, with 360° LiDAR perception.",
    roleLabel: "Role",
    role:
      "Low-level development (PWM, I²C, pthreads), control logic, telemetry, safety handling and stuck-recovery strategy.",
    resultLabel: "Result",
    result:
      "3rd place in the time-trial race. Stable behavior, automatic recovery from stuck situations and real-time control loop.",
  },
  iaq: {
    category: "Embedded · Web · Sensors",
    title: "IAQ Dashboard V2",
    subtitle: "Real-time indoor air quality monitoring",
    description:
      "ESP32-S3 platform connected to a Flask/SQLite backend, with Chart.js visualization, HTTPS transmission, alert thresholds and multi-sensor history (CO₂, TVOC, CO, temperature, humidity).",
  },
  projects: {
    eyebrow: "Other projects",
    title: "Other projects",
    caption: "Personal and academic work in electronics, embedded, vision and low-level software.",
    viewRepo: "View repository",
    status: {
      completed: "Completed",
      in_progress: "In progress",
      academic: "Academic",
      personal: "Personal",
      experimental: "Experimental",
    },
  },
  about: {
    eyebrow: "About",
    title: "Profile",
    p1:
      "M1 E3A student at Université Paris-Saclay (Electronics, Electrical Energy, Automatic Control). I focus on hardware/software integration, especially on FPGAs and microcontrollers.",
    p2:
      "My projects revolve around autonomous systems, sensor acquisition and low-level software: VHDL design, embedded C programming, signal processing and scientific Python for computer vision.",
    p3:
      "I enjoy working where hardware constraints force precise software choices, and where a solution has to be maintainable, testable and concrete.",
    photoAlt: "Portrait of Bouama Mehdi",
  },
  skills: {
    eyebrow: "Skills",
    title: "Technical skills",
    caption: "Grouped by domain, connected to real projects.",
    usedIn: "Used in:",
    domains: {
      embedded: { title: "Electronics & Embedded", intent: "Microcontrollers, communication buses and sensors." },
      fpga: { title: "FPGA & Digital Design", intent: "VHDL design, simulation and synthesis." },
      lowlevel: { title: "Low-level software", intent: "C, C++, threads, optimization and Linux." },
      scientific: { title: "Scientific Python & Vision", intent: "Signal processing, computer vision, edge AI." },
      tools: { title: "Tools & workflow", intent: "Engineering daily toolkit." },
    },
  },
  experience: { eyebrow: "Experience", title: "Experience" },
  education: { eyebrow: "Education", title: "Education" },
  contact: {
    eyebrow: "Contact",
    title: "Open to internships and technical opportunities",
    caption: "Internships, embedded projects, FPGA and signal processing: I am available to discuss technical opportunities or collaborations.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    cvAvailable: "Download CV",
    cvSoon: "CV coming soon",
    openExternal: "(opens in a new tab)",
  },
  footer: {
    tagline: "Electronics · FPGA · Embedded software",
    rights: "All rights reserved.",
  },
};
