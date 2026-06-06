export function IaqVisual() {
  return (
    <div className="relative h-full min-h-[240px] w-full overflow-hidden rounded-xl border border-border bg-surface-elevated/40">
      <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full text-accent-cyan" fill="none" aria-hidden="true">
        {/* ESP32 block */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="currentColor">
          <rect x="20" y="20" width="110" height="26" rx="4" stroke="currentColor" strokeWidth="0.75" fill="none" />
          <text x="75" y="37" textAnchor="middle">ESP32-S3</text>
        </g>
        {/* Sensor chips */}
        {[
          { label: "CO₂", x: 20, y: 70 },
          { label: "TVOC", x: 90, y: 70 },
          { label: "CO", x: 160, y: 70 },
          { label: "TEMP", x: 220, y: 70 },
          { label: "RH", x: 290, y: 70 },
        ].map((s) => (
          <g key={s.label} fontFamily="JetBrains Mono, monospace" fontSize="9" fill="currentColor">
            <rect x={s.x} y={s.y} width="60" height="22" rx="4" stroke="currentColor" strokeWidth="0.75" fill="none" />
            <text x={s.x + 30} y={s.y + 15} textAnchor="middle">
              {s.label}
            </text>
          </g>
        ))}
        {/* Sparkline */}
        <g stroke="currentColor" fill="none" strokeWidth="1.25">
          <path d="M20 200 L60 180 L100 195 L140 160 L180 175 L220 140 L260 165 L300 130 L340 155 L380 120" />
        </g>
        <g stroke="currentColor" strokeWidth="0.5" opacity="0.3">
          <line x1="20" y1="225" x2="380" y2="225" />
          <line x1="20" y1="120" x2="380" y2="120" />
        </g>
        {/* Threshold dot */}
        <circle cx="220" cy="140" r="3" fill="currentColor" />
        <text
          x="230"
          y="135"
          fontFamily="JetBrains Mono, monospace"
          fontSize="8"
          fill="currentColor"
          opacity="0.75"
        >
          ALERT
        </text>
      </svg>
    </div>
  );
}
