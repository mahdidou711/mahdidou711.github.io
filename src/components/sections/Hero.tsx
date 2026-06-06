import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useT } from "@/providers/LocaleProvider";
import { HeroComposition } from "@/components/visuals/HeroComposition";
import { contact } from "@/data/contact";

export function Hero() {
  const t = useT();
  return (
    <section
      id="top"
      className="relative overflow-x-clip pt-24 pb-10 md:pt-40 md:pb-28"
    >
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[600px] opacity-80"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <span className="hairline inline-flex items-center gap-2 rounded-full bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-signal-green shadow-[0_0_8px_currentColor] text-signal-green" />
            {t.hero.eyebrow}
          </span>

          <h1 className="text-gradient mt-4 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.name}
          </h1>
          <p className="mt-3 max-w-2xl text-base font-medium text-foreground/85 sm:text-xl">
            {t.hero.title}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t.hero.intro}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              {t.hero.ctaProjects}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface sm:w-auto"
            >
              <Mail className="size-4" />
              {t.hero.ctaContact}
            </a>
            <div className="flex items-center gap-2 sm:contents">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub ${t.contact.openExternal}`}
                className="inline-flex h-10 flex-1 items-center justify-center rounded-md border border-border bg-surface/40 text-foreground/80 transition-colors hover:text-foreground sm:size-10 sm:flex-none"
              >
                <Github className="size-4" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn ${t.contact.openExternal}`}
                className="inline-flex h-10 flex-1 items-center justify-center rounded-md border border-border bg-surface/40 text-foreground/80 transition-colors hover:text-foreground sm:size-10 sm:flex-none"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroComposition />
        </div>
      </div>
    </section>
  );
}
