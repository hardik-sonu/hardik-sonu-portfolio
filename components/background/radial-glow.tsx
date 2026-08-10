interface RadialGlowProps {
  className?: string;
}

export default function RadialGlow({
  className = "",
}: RadialGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(118,185,0,0.18), transparent 70%)",
      }}
    />
  );
}