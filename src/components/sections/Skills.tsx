import { useT, useLocale } from "@/providers/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { skillDomains } from "@/data/skills";
import { projects } from "@/data/projects";
import { TechChip } from "@/components/project/TechChip";
import { chipLabel } from "@/lib/chipLabel";

export function Skills() {
  const t = useT();
  const { locale } = useLocale();
  return (
    <section className="relative py-20 md:py-28">
      <div id="skills" className="section-anchor mx-auto max-w-6xl px-4">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
            {t.skills.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.skills.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t.skills.caption}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skillDomains.map((d, i) => {
            const meta = t.skills.domains[d.key];
            const used = projects.filter((p) => d.usedIn.includes(p.id));
            return (
              <Reveal key={d.key} delay={i * 60}>
                <article className="card-premium h-full p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{meta.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{meta.intent}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {d.chips.map((c) => (
                      <TechChip key={c}>{chipLabel(c, locale)}</TechChip>
                    ))}
                  </div>
                  {used.length > 0 && (
                    <p className="mt-4 text-xs text-muted-foreground">
                      <span className="font-mono uppercase tracking-wider text-foreground/70">
                        {t.skills.usedIn}
                      </span>{" "}
                      {used.map((p) => p.title).join(" · ")}
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
