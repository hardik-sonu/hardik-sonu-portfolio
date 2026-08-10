export default function EngineeringGrid() {
  return (
    <div
      className="
        absolute
        inset-0
        opacity-[0.04]
        pointer-events-none
        dark:opacity-[0.06]
      "
      style={{
        backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}