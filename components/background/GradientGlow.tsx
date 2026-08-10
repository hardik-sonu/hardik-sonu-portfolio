export default function GradientGlow() {
  return (
    <>
      {/* Left Glow */}

      <div
        className="
          absolute
          left-[-180px]
          top-[-120px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#76B900]/10
          blur-[140px]
          pointer-events-none
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          right-[-220px]
          bottom-[-180px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-emerald-400/5
          blur-[180px]
          pointer-events-none
        "
      />

      {/* Center Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#76B900]/5
          blur-[120px]
          pointer-events-none
        "
      />
    </>
  );
}