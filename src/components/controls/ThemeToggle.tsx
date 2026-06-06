import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { useT } from "@/providers/LocaleProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const t = useT();
  const isLight = theme === "light";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.theme.toggleLabel}
      aria-pressed={isLight}
      title={isLight ? t.theme.dark : t.theme.light}
      className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface/40 text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
    >
      {isLight ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  );
}
