import { useT } from "@/providers/LocaleProvider";

export function HeroComposition() {
  const t = useT();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-xl sm:max-w-[380px] lg:max-w-[460px]">
      {/* Chip outline */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-accent-cyan/60"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="chipFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.10" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <g stroke="currentColor" strokeWidth="1">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`t${i}`} x1={110 + i * 22} y1="70" x2={110 + i * 22} y2="100" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`b${i}`} x1={110 + i * 22} y1="300" x2={110 + i * 22} y2="330" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`l${i}`} x1="70" y1={110 + i * 22} x2="100" y2={110 + i * 22} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`r${i}`} x1="300" y1={110 + i * 22} x2="330" y2={110 + i * 22} />
          ))}
        </g>
        <rect
          x="100"
          y="100"
          width="200"
          height="200"
          rx="18"
          fill="url(#chipFill)"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <g stroke="currentColor" strokeWidth="0.5" opacity="0.55">
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`vg${i}`} x1={120 + i * 27} y1="120" x2={120 + i * 27} y2="280" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`hg${i}`} x1="120" y1={120 + i * 27} x2="280" y2={120 + i * 27} />
          ))}
        </g>
        <circle cx="120" cy="120" r="4" fill="currentColor" opacity="0.8" />
        <text x="200" y="208" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="currentColor" opacity="0.85">
          MB-01
        </text>
        <text x="200" y="224" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="currentColor" opacity="0.6">
          FPGA · EMBEDDED
        </text>
      </svg>

      {/* Waveform */}
      <svg
        viewBox="0 0 400 80"
        className="absolute bottom-2 left-0 right-0 h-12 w-full text-accent-cyan/70 sm:h-16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 40 H40 V20 H80 V60 H140 V20 H180 V50 H240 V30 H300 V55 H360 V25 H400"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>

      {/* Floating chips — hidden on mobile to avoid clipping */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {t.hero.chips.map((c, i) => (
          <div
            key={c}
            className="glass animate-float-slow absolute rounded-md px-2.5 py-1.5 font-mono text-[11px] text-foreground/85"
            style={{
              top: `${[8, 42, 70][i]}%`,
              left: i === 1 ? "auto" : `${[2, 0, 4][i]}%`,
              right: i === 1 ? "2%" : "auto",
              animationDelay: `${i * 1.2}s`,
            }}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
