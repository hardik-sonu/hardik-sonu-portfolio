export default function Wafer() {
  return (
    <svg
      className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>

        <radialGradient id="waferBody">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#F3F4F6" />
          <stop offset="100%" stopColor="#D1D5DB" />
        </radialGradient>

        <linearGradient id="reflection">
          <stop offset="0%" stopColor="white" stopOpacity=".85"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>

      </defs>

      {/* Main Wafer */}

      <circle
        cx="300"
        cy="300"
        r="250"
        fill="url(#waferBody)"
        stroke="#D1D5DB"
        strokeWidth="2"
      />

      {/* Silicon Rings */}

      <circle cx="300" cy="300" r="210"
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="1"/>

      <circle cx="300" cy="300" r="170"
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="1"/>

      <circle cx="300" cy="300" r="130"
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="1"/>

      <circle cx="300" cy="300" r="90"
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="1"/>

      {/* Wafer Notch */}

      <rect
        x="270"
        y="540"
        width="60"
        height="12"
        rx="6"
        fill="#FAFAFA"
      />

      {/* Metallic Reflection */}

      <ellipse
        cx="220"
        cy="180"
        rx="120"
        ry="70"
        fill="url(#reflection)"
        transform="rotate(-25 220 180)"
      />

    </svg>
  );
}