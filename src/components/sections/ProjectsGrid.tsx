import { useT, useLocale } from "@/providers/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { secondaryProjects } from "@/data/projects";
import { TechChip } from "@/components/project/TechChip";
import { RepoButton } from "@/components/project/RepoButton";
import { ProjectIcon } from "@/components/visuals/ProjectIcon";

export function ProjectsGrid() {
  const t = useT();
  const { locale } = useLocale();
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
            {t.projects.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t.projects.caption}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryProjects.map((p, i) => {
            const visible = p.stack.slice(0, 4);
            const extra = p.stack.length - visible.length;
            return (
              <Reveal key={p.id} delay={i * 60}>
                <article className="card-premium group flex h-full flex-col p-5 transition-transform hover:-translate-y-0.5">
                  <ProjectIcon visual={p.visual} />

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {p.category[locale]}
                    </span>
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground/70">
                      {t.projects.status[p.status]}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description[locale]}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {visible.map((s) => (
                      <TechChip key={s}>{s}</TechChip>
                    ))}
                    {extra > 0 && <TechChip>+{extra}</TechChip>}
                  </div>

                  <div className="mt-5 pt-1">
                    <RepoButton href={p.repoUrl} variant="ghost" compact />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
