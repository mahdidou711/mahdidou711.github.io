import { ArrowUpRight, Download, FileText, Github, Linkedin, Mail } from "lucide-react";
import { useT } from "@/providers/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/data/contact";

function Channel({
  href,
  external,
  icon,
  label,
  value,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const t = useT();
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer", "aria-label": `${label} ${t.contact.openExternal}` }
        : { "aria-label": label })}
      className="card-premium group flex items-center justify-between gap-3 p-4 transition-colors hover:border-accent-cyan/50"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface-elevated/60 text-accent-cyan">
          {icon}
        </span>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
          <p className="text-sm text-foreground">{value}</p>
        </div>
      </div>
      <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
    </a>
  );
}

export function Contact() {
  const t = useT();
  const cvReady = Boolean(contact.cvUrl);

  return (
    <section className="relative py-20 md:py-28">
      <div id="contact" className="section-anchor mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.contact.caption}</p>

            <div className="mt-6">
              {cvReady ? (
                <a
                  href={contact.cvUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  <Download className="size-4" />
                  {t.contact.cvAvailable}
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/20 px-4 py-2 text-sm font-medium text-muted-foreground opacity-70"
                  title={t.contact.cvSoon}
                >
                  <FileText className="size-4" />
                  {t.contact.cvSoon}
                </button>
              )}
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={120}>
            <div className="grid gap-3">
              <Channel
                href={`mailto:${contact.email}`}
                icon={<Mail className="size-4" />}
                label={t.contact.email}
                value={contact.email}
              />
              <Channel
                href={contact.github}
                external
                icon={<Github className="size-4" />}
                label={t.contact.github}
                value={contact.github.replace("https://", "")}
              />
              <Channel
                href={contact.linkedin}
                external
                icon={<Linkedin className="size-4" />}
                label={t.contact.linkedin}
                value={contact.linkedin.replace("https://", "")}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
