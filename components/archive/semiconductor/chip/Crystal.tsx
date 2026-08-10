export default function Crystal() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-20"
      viewBox="0 0 500 500"
    >
      <defs>
        <pattern
          id="wafer-crystal"
          width="40"
          height="34"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="20,2 36,11 36,25 20,34 4,25 4,11"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      <circle
        cx="250"
        cy="250"
        r="170"
        fill="url(#wafer-crystal)"
      />
    </svg>
  );
}