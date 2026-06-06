import { useT, useLocale } from "@/providers/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/experience";
import { TechChip } from "@/components/project/TechChip";

export function Experience() {
  const t = useT();
  const { locale } = useLocale();
  return (
    <section className="relative py-20 md:py-28">
      <div id="experience" className="section-anchor mx-auto max-w-6xl px-4">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
            {t.experience.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.experience.title}
          </h2>
        </Reveal>

        <ol className="relative mt-10 space-y-6 border-l border-border pl-6">
          {experience.map((e, i) => (
            <Reveal key={e.id} as="li" delay={i * 60}>
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-background bg-accent-cyan shadow-[0_0_0_3px_color-mix(in_oklab,var(--accent-cyan)_20%,transparent)]" />
                <div className="card-premium p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-base font-semibold tracking-tight">
                      {e.role[locale]} · <span className="text-muted-foreground">{e.org}</span>
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {e.period[locale]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/85">{e.description[locale]}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.chips.map((c) => (
                      <TechChip key={c.en}>{c[locale]}</TechChip>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
