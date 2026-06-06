import { Github, Linkedin } from "lucide-react";
import { useT } from "@/providers/LocaleProvider";
import { contact } from "@/data/contact";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold tracking-tight text-foreground">
            Bouama Mehdi
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="flex items-center gap-3">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub ${t.contact.openExternal}`}
              className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface/40 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn ${t.contact.openExternal}`}
              className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface/40 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
          <span className="text-xs text-muted-foreground">
            © {year} Bouama Mehdi · {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
