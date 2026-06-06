import type { ProjectVisual } from "@/data/projects";

const common = "h-full w-full text-accent-cyan";

export function ProjectIcon({ visual }: { visual: ProjectVisual }) {
  return (
    <div className="relative h-[120px] w-full overflow-hidden rounded-lg border border-border bg-surface-elevated/40 sm:h-[140px] lg:h-[160px]">
      <svg viewBox="0 0 160 90" preserveAspectRatio="xMidYMid meet" className={common} fill="none" aria-hidden="true">
        {visual === "simd" && (
          <g stroke="currentColor" strokeWidth="1">
            {Array.from({ length: 8 }).map((_, i) => (
              <rect key={i} x={10 + i * 18} y="20" width="14" height="50" rx="2" opacity={0.3 + (i % 4) * 0.18} />
            ))}
          </g>
        )}
        {visual === "rpn" && (
          <g stroke="currentColor" strokeWidth="1">
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x="55" y={70 - i * 14} width="50" height="12" rx="2" opacity={0.3 + i * 0.18} />
            ))}
            <path d="M120 30 L130 30 L130 70" />
          </g>
        )}
        {visual === "cv" && (
          <g stroke="currentColor" strokeWidth="1">
            <rect x="20" y="20" width="30" height="50" rx="2" />
            <rect x="65" y="20" width="30" height="50" rx="2" />
            <rect x="110" y="20" width="30" height="50" rx="2" />
            <path d="M50 45 H65 M95 45 H110" />
          </g>
        )}
        {visual === "cpp" && (
          <g stroke="currentColor" strokeWidth="1">
            <rect x="60" y="15" width="40" height="18" rx="2" />
            <rect x="20" y="55" width="40" height="18" rx="2" />
            <rect x="100" y="55" width="40" height="18" rx="2" />
            <path d="M80 33 L40 55 M80 33 L120 55" />
          </g>
        )}
        {visual === "globe" && (
          <g stroke="currentColor" strokeWidth="1">
            <circle cx="80" cy="45" r="28" />
            <ellipse cx="80" cy="45" rx="28" ry="12" />
            <ellipse cx="80" cy="45" rx="12" ry="28" />
            <line x1="52" y1="45" x2="108" y2="45" />
          </g>
        )}
        {visual === "covapsy" && (
          <g stroke="currentColor" strokeWidth="1">
            <rect x="60" y="35" width="40" height="20" rx="4" />
            <circle cx="68" cy="58" r="4" />
            <circle cx="92" cy="58" r="4" />
            <path d="M30 80 C 60 60, 100 60, 130 80" strokeDasharray="3 3" />
          </g>
        )}
        {visual === "iaq" && (
          <g stroke="currentColor" strokeWidth="1">
            <path d="M10 70 L30 55 L50 65 L70 40 L90 50 L110 30 L130 45 L150 25" />
          </g>
        )}
      </svg>
    </div>
  );
}
