import { useT, useLocale } from "@/providers/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { education } from "@/data/education";

export function Education() {
  const t = useT();
  const { locale } = useLocale();
  return (
    <section className="relative py-20 md:py-28">
      <div id="education" className="section-anchor mx-auto max-w-6xl px-4">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
            {t.education.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.education.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.id} delay={i * 60}>
              <article className="card-premium h-full p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
                    {e.institution}
                  </span>
                  {e.current && (
                    <span className="rounded-full border border-signal-green/40 bg-signal-green/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-signal-green">
                      ●
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                  {e.degree[locale]}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {e.period[locale]}
                </p>
                <p className="mt-3 text-sm text-foreground/85">{e.focus[locale]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
