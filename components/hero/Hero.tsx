"use client";

import BackgroundLayer from "@/components/background/BackgroundLayer";
import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#070907]
        text-white
      "
    >
      {/* =========================================================
          BACKGROUND SYSTEM
      ========================================================= */}

      <BackgroundLayer />

      {/* =========================================================
          TOP ATMOSPHERIC FADE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[2]
          h-40
          bg-gradient-to-b
          from-[#070907]
          via-[#070907]/70
          to-transparent
        "
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1540px]
          items-center
          px-6
          pb-20
          pt-32
          sm:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-8
            xl:grid-cols-[1.08fr_0.92fr]
            xl:gap-16
          "
        >
          {/* =====================================================
              LEFT — CONTENT
          ===================================================== */}

          <div className="relative z-20 flex justify-start">
            <HeroContent />
          </div>

          {/* =====================================================
              RIGHT — TECHNICAL PORTRAIT
          ===================================================== */}

          <div
            className="
              relative
              flex
              min-h-[460px]
              items-center
              justify-center
              lg:min-h-[620px]
              lg:justify-end
            "
          >
            <HeroIllustration />
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-40
          bg-gradient-to-t
          from-[#080A08]
          via-[#080A08]/70
          to-transparent
        "
      />

      {/* =========================================================
          MICRO TECHNICAL LINE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-7
          left-1/2
          z-30
          hidden
          h-px
          w-[min(80%,900px)]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#76B900]/25
          to-transparent
          lg:block
        "
      />
    </section>
  );
}