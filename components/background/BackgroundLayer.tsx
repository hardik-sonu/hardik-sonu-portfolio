"use client";

import EngineeringGrid from "./engineering-grid";
import GradientGlow from "./GradientGlow";

export default function BackgroundLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* =========================================================
          BASE ENGINEERING BACKGROUND
      ========================================================= */}

      <EngineeringGrid />

      <GradientGlow />

      {/* =========================================================
          MATERIAL GRAIN
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
          mix-blend-screen
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 20% 30%,
              rgba(255,255,255,0.25) 0.5px,
              transparent 0.8px
            ),
            radial-gradient(
              circle at 70% 80%,
              rgba(255,255,255,0.18) 0.5px,
              transparent 0.8px
            )
          `,
          backgroundSize: "8px 8px, 13px 13px",
        }}
      />

      {/* =========================================================
          SOFT VIGNETTE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(8,10,8,0.38)_100%)]
        "
      />
    </div>
  );
}