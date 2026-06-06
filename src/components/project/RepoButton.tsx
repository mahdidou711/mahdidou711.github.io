import { ArrowUpRight, Github } from "lucide-react";
import { useT } from "@/providers/LocaleProvider";

type Props = {
  href: string;
  variant?: "primary" | "ghost";
  compact?: boolean;
};

export function RepoButton({ href, variant = "primary", compact = false }: Props) {
  const t = useT();
  const base =
    "inline-flex items-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const sizing = compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm";
  const look =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-border bg-surface/40 text-foreground hover:bg-surface";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizing} ${look}`}
      aria-label={`${t.projects.viewRepo} ${t.contact.openExternal}`}
    >
      <Github className="size-4" aria-hidden="true" />
      <span>{t.projects.viewRepo}</span>
      <ArrowUpRight className="size-3.5 opacity-70" aria-hidden="true" />
    </a>
  );
}
