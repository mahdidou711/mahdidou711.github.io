export function CovapsyVisual() {
  return (
    <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-xl border border-border bg-surface-elevated/40">
      <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full text-accent-cyan" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="lidarSweep" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Lidar sweep */}
        <circle cx="200" cy="190" r="130" fill="url(#lidarSweep)" />
        <g stroke="currentColor" strokeWidth="0.5" opacity="0.5">
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 24;
            return (
              <line
                key={i}
                x1="200"
                y1="190"
                x2={200 + Math.cos(a) * 130}
                y2={190 + Math.sin(a) * 130}
              />
            );
          })}
        </g>
        {/* Car silhouette */}
        <g stroke="currentColor" strokeWidth="1.25" fill="none">
          <rect x="160" y="170" width="80" height="40" rx="8" />
          <circle cx="172" cy="216" r="8" />
          <circle cx="228" cy="216" r="8" />
          <rect x="190" y="155" width="20" height="15" rx="3" fill="currentColor" opacity="0.4" />
        </g>
        {/* Trajectory */}
        <path
          d="M40 280 C 120 220, 160 180, 200 190 S 320 240, 380 180"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.7"
        />
        {/* Block labels */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="currentColor" opacity="0.85">
          <rect x="20" y="20" width="80" height="22" rx="4" stroke="currentColor" strokeWidth="0.75" fill="none" />
          <text x="60" y="35" textAnchor="middle">RPI 4</text>
          <rect x="110" y="20" width="80" height="22" rx="4" stroke="currentColor" strokeWidth="0.75" fill="none" />
          <text x="150" y="35" textAnchor="middle">STM32</text>
          <text x="200" y="35" textAnchor="middle" opacity="0.6">I²C</text>
          <rect x="220" y="20" width="100" height="22" rx="4" stroke="currentColor" strokeWidth="0.75" fill="none" />
          <text x="270" y="35" textAnchor="middle">RPLidar A2M12</text>
        </g>
      </svg>
    </div>
  );
}
