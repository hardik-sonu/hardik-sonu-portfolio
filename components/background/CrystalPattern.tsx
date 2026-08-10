export default function CrystalPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.03]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="crystal-pattern"
          width="80"
          height="70"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="40,5 70,22 70,48 40,65 10,48 10,22"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#crystal-pattern)" />
    </svg>
  );
}