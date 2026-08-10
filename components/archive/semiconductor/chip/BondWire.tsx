export default function BondWire() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 500 500"
    >
      <g
        stroke="#D6B15D"
        strokeWidth="1.5"
        fill="none"
        opacity="0.8"
      >
        <path d="M180 180 Q150 150 120 150" />
        <path d="M320 180 Q350 150 380 150" />

        <path d="M180 320 Q150 350 120 350" />
        <path d="M320 320 Q350 350 380 350" />

        <path d="M180 250 Q120 250 90 250" />
        <path d="M320 250 Q380 250 410 250" />
      </g>
    </svg>
  );
}