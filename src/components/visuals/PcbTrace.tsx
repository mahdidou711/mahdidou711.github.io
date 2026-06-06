/** Decorative PCB-trace SVG. Pure decoration — aria-hidden. */
export function PcbTrace({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.5">
        <path d="M10 30 H70 L90 50 H140 L160 30 H190" />
        <path d="M10 70 H50 L70 90 H120" />
        <path d="M30 190 V150 L50 130 H110 L130 150 V190" />
        <path d="M190 70 V110 L170 130 H140" />
      </g>
      <g fill="currentColor" opacity="0.6">
        <circle cx="70" cy="70" r="1.6" />
        <circle cx="140" cy="110" r="1.6" />
        <circle cx="110" cy="130" r="1.6" />
        <circle cx="50" cy="130" r="1.6" />
        <circle cx="90" cy="50" r="1.6" />
      </g>
    </svg>
  );
}
