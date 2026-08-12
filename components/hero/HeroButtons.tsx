"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* =========================================================
          PRIMARY — PROJECTS
      ========================================================= */}

      <motion.a
        href="#projects"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-[#76B900]
          px-6
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-[0_10px_30px_rgba(118,185,0,0.16)]
          transition-all
          duration-300
          hover:bg-[#86c900]
          hover:shadow-[0_14px_35px_rgba(118,185,0,0.24)]
        "
      >
        <span>View Projects</span>

        <span
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </motion.a>

      {/* =========================================================
          SECONDARY — CONTACT
      ========================================================= */}

      <motion.a
        href="#contact"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/[0.12]
          bg-white/[0.025]
          px-6
          py-3.5
          text-sm
          font-semibold
          text-neutral-200
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-[#76B900]/40
          hover:bg-[#76B900]/[0.06]
          hover:text-white
        "
      >
        <span>Contact Me</span>

        <span
          className="
            text-neutral-500
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:text-[#76B900]
          "
        >
          ↗
        </span>
      </motion.a>

      {/* =========================================================
          RESUME — DOWNLOAD
      ========================================================= */}

      <motion.a
        href="/resume/Hardik_Sonu_Resume.pdf"
        download="Hardik_Sonu_Resume.pdf"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-xl
          border
          border-[#76B900]/25
          bg-[#76B900]/[0.045]
          px-6
          py-3.5
          text-sm
          font-semibold
          text-[#9BE329]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-[#76B900]/50
          hover:bg-[#76B900]/[0.09]
          hover:text-[#B4F34A]
          hover:shadow-[0_10px_30px_rgba(118,185,0,0.10)]
        "
      >
        <span>Download Resume</span>

        <span
          className="
            text-[#76B900]
            transition-transform
            duration-300
            group-hover:translate-y-0.5
          "
          aria-hidden="true"
        >
          ↓
        </span>
      </motion.a>
    </div>
  );
}