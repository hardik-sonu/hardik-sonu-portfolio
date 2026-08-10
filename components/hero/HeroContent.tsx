"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const contentEase = [0.22, 1, 0.36, 1] as const;

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start">
      {/* =========================================================
          NAME
      ========================================================= */}

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: contentEase,
        }}
        className="
          mt-0
          whitespace-nowrap
          text-[clamp(2.8rem,5vw,5.2rem)]
          font-bold
          leading-[0.92]
          tracking-[-0.065em]
          text-white
        "
      >
        Hardik Sonu
        <span className="text-[#76B900]">.</span>
      </motion.h1>

      {/* =========================================================
          PROFESSIONAL TITLE
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: contentEase,
        }}
        className="
          mt-8
          flex
          items-center
          gap-4
        "
      >
        <span
          className="
            h-px
            w-10
            shrink-0
            bg-[#76B900]
            shadow-[0_0_8px_rgba(118,185,0,0.35)]
          "
        />

        <h2
          className="
            text-lg
            font-semibold
            tracking-[-0.02em]
            text-[#9BE329]
            sm:text-xl
            lg:text-2xl
          "
        >
          Metallurgy & Materials Engineer
        </h2>
      </motion.div>

      {/* =========================================================
          DESCRIPTION
      ========================================================= */}

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.4,
          ease: contentEase,
        }}
        className="
          mt-7
          max-w-[690px]
          text-[15px]
          leading-7
          text-neutral-400
          sm:text-base
          sm:leading-8
        "
      >
        Exploring the intersection of{" "}
        <span className="font-medium text-neutral-200">
          materials engineering
        </span>
        ,{" "}
        <span className="font-medium text-neutral-200">
          semiconductor technology
        </span>
        , and{" "}
        <span className="font-medium text-neutral-200">
          artificial intelligence
        </span>
        . I build technical projects that connect engineering knowledge with
        computational methods and modern AI.
      </motion.p>

      {/* =========================================================
          ENGINEERING KEYWORDS
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.5,
          ease: contentEase,
        }}
        className="
          mt-7
          flex
          flex-wrap
          gap-x-5
          gap-y-2
        "
      >
        {[
          "Microstructure",
          "Semiconductor Packaging",
          "Computational Materials",
          "AI Engineering",
        ].map((item) => (
          <span
            key={item}
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-neutral-600
            "
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* =========================================================
          BUTTONS
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.6,
          ease: contentEase,
        }}
        className="mt-10"
      >
        <HeroButtons />
      </motion.div>

      {/* =========================================================
          STATS
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.72,
          ease: contentEase,
        }}
        className="mt-14 sm:mt-16"
      >
        <HeroStats />
      </motion.div>
    </div>
  );
}