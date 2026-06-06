export function TechChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface-elevated/60 px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}
