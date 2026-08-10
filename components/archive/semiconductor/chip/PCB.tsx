export default function PCB() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-50"
      viewBox="0 0 700 700"
    >
      <g
        stroke="#76B900"
        strokeWidth="2"
        fill="none"
      >
        <path d="M350 620 V520" />

        <path d="M350 80 V180" />

        <path d="M90 350 H180" />

        <path d="M520 350 H610" />

        <circle cx="350" cy="620" r="5" fill="#76B900"/>

        <circle cx="350" cy="80" r="5" fill="#76B900"/>

        <circle cx="90" cy="350" r="5" fill="#76B900"/>

        <circle cx="610" cy="350" r="5" fill="#76B900"/>
      </g>
    </svg>
  );
}