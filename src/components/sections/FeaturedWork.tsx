import { Award } from "lucide-react";
import { useT } from "@/providers/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { CovapsyVisual } from "@/components/visuals/CovapsyVisual";
import { IaqVisual } from "@/components/visuals/IaqVisual";
import { RepoButton } from "@/components/project/RepoButton";
import { TechChip } from "@/components/project/TechChip";
import { featuredPrimary, featuredSecondary } from "@/data/projects";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
      {children}
    </span>
  );
}

export function FeaturedWork() {
  const t = useT();
  return (
    <section className="relative py-20 md:py-28">
      <div id="projects" className="section-anchor mx-auto max-w-6xl px-4">
        <Reveal>
          <Eyebrow>{t.featured.eyebrow}</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.featured.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t.featured.caption}</p>
        </Reveal>

        {/* CoVAPSy — primary feature */}
        <Reveal delay={80}>
          <article className="card-premium mt-10 grid gap-6 overflow-hidden p-6 md:grid-cols-12 md:gap-8 md:p-8">
            <div className="md:col-span-5">
              <CovapsyVisual />
            </div>
            <div className="md:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t.covapsy.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-signal-green/40 bg-signal-green/10 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-signal-green">
                  <Award className="size-3" />
                  {t.covapsy.badge}
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.covapsy.title}
              </h3>
              <p className="mt-1 text-base text-muted-foreground">{t.covapsy.subtitle}</p>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
                    {t.covapsy.contextLabel}
                  </dt>
                  <dd className="mt-1 text-foreground/85">{t.covapsy.context}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
                    {t.covapsy.roleLabel}
                  </dt>
                  <dd className="mt-1 text-foreground/85">{t.covapsy.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
                    {t.covapsy.resultLabel}
                  </dt>
                  <dd className="mt-1 text-foreground/85">{t.covapsy.result}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {featuredPrimary.stack.map((s) => (
                  <TechChip key={s}>{s}</TechChip>
                ))}
              </div>

              <div className="mt-6">
                <RepoButton href={featuredPrimary.repoUrl} />
              </div>
            </div>
          </article>
        </Reveal>

        {/* IAQ — secondary feature */}
        <Reveal delay={120}>
          <article className="card-premium mt-6 grid gap-6 overflow-hidden p-6 md:grid-cols-12 md:gap-8 md:p-8">
            <div className="md:col-span-5">
              <IaqVisual />
            </div>
            <div className="md:col-span-7 flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {t.iaq.category}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.iaq.title}
              </h3>
              <p className="mt-1 text-base text-muted-foreground">{t.iaq.subtitle}</p>
              <p className="mt-4 text-foreground/85">{t.iaq.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {featuredSecondary.stack.map((s) => (
                  <TechChip key={s}>{s}</TechChip>
                ))}
              </div>

              <div className="mt-6">
                <RepoButton href={featuredSecondary.repoUrl} />
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
