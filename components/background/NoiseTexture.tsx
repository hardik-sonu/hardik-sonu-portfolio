export default function NoiseTexture() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
      style={{
        backgroundImage:
          "radial-gradient(circle, currentColor 0.6px, transparent 0.6px)",
        backgroundSize: "12px 12px",
      }}
    />
  );
}