import { useLocale } from "@/providers/LocaleProvider";

export function LocaleToggle() {
  const { locale, toggle, t } = useLocale();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.locale.toggleLabel}
      className="inline-flex h-9 items-center gap-1 rounded-md border border-border bg-surface/40 px-2.5 font-mono text-xs uppercase tracking-wider text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
    >
      <span className={locale === "fr" ? "text-foreground" : "opacity-50"}>FR</span>
      <span className="opacity-40">/</span>
      <span className={locale === "en" ? "text-foreground" : "opacity-50"}>EN</span>
    </button>
  );
}
