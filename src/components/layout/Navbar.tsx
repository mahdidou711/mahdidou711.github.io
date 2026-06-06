import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useT } from "@/providers/LocaleProvider";
import { ThemeToggle } from "@/components/controls/ThemeToggle";
import { LocaleToggle } from "@/components/controls/LocaleToggle";

function Monogram() {
  return (
    <a href="#top" className="group inline-flex items-center gap-2" aria-label="Bouama Mehdi">
      <span className="relative inline-flex size-8 items-center justify-center rounded-md border border-border bg-surface-elevated/70">
        <svg viewBox="0 0 24 24" className="size-4 text-accent-cyan" fill="none" aria-hidden="true">
          <path d="M4 18 V8 L12 14 L20 8 V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="4" cy="6" r="1" fill="currentColor" />
          <circle cx="20" cy="6" r="1" fill="currentColor" />
        </svg>
      </span>
      <span className="font-display text-sm font-semibold tracking-tight text-foreground">
        Bouama Mehdi
      </span>
    </a>
  );
}

export function Navbar() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-3"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-3 pl-4 transition-all ${
            scrolled ? "py-2" : "py-2.5"
          }`}
          aria-label="Primary"
        >
          <Monogram />

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <LocaleToggle />
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            className="md:hidden inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface/40 text-foreground"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>

        {open && (
          <div className="nav-mobile-panel mt-2 rounded-2xl p-3 md:hidden">
            <ul className="flex flex-col gap-0.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-border pt-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t.nav.language}
                </span>
                <LocaleToggle />
              </div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t.nav.theme}
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
