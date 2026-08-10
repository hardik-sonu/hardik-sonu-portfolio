"use client";

import { motion, type Variants } from "framer-motion";
import { skills } from "@/data/skills";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#080A08]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* ====================================================== */}
      {/* AMBIENT BACKGROUND */}
      {/* ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.018, 0.04, 0.018],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[560px]
          w-[560px]
          -translate-x-1/2
          rounded-full
          bg-[#76B900]
          blur-[180px]
        "
      />

      {/* ====================================================== */}
      {/* TECHNICAL GRID */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ====================================================== */}
      {/* CONTENT */}
      {/* ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1350px] px-6 lg:px-12">
        {/* ==================================================== */}
        {/* HEADER */}
        {/* ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          {/* Section label */}

          <div className="flex items-center gap-4">
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 44,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px bg-[#76B900]"
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#76B900]
              "
            >
              Technical Focus
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-[1.05]
              tracking-[-0.05em]
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Engineering at the intersection of{" "}
            <span className="text-[#76B900]">materials</span>, technology &
            AI.
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-neutral-400
              sm:text-base
              sm:leading-7
            "
          >
            My technical foundation combines{" "}
            <strong className="font-semibold text-neutral-200">
              metallurgy and materials engineering
            </strong>{" "}
            with an emerging focus on{" "}
            <strong className="font-semibold text-neutral-200">
              semiconductor packaging, computational methods, and artificial
              intelligence.
            </strong>
          </p>
        </motion.div>

        {/* ==================================================== */}
        {/* SKILL GROUPS */}
        {/* ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            mt-10
            grid
            gap-4
            md:grid-cols-2
          "
        >
          {skills.map((group, index) => (
            <motion.article
              key={group.title}
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="
                group
                relative
                min-h-[270px]
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0D100D]/95
                p-6
                transition-all
                duration-500
                hover:border-[#76B900]/30
                hover:bg-[#101410]
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]
                lg:p-7
              "
            >
              {/* ================================================= */}
              {/* TOP SIGNAL LINE */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-white/[0.04]
                "
              >
                <div
                  className="
                    h-full
                    w-0
                    bg-[#76B900]
                    transition-all
                    duration-700
                    ease-out
                    group-hover:w-24
                  "
                />
              </div>

              {/* ================================================= */}
              {/* INTERNAL GLOW */}
              {/* ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#76B900]/[0.035]
                  blur-[70px]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* ================================================= */}
              {/* CARD HEADER */}
              {/* ================================================= */}

              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <p
                    className="
                      font-mono
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-[#76B900]
                    "
                  >
                    0{index + 1}
                  </p>

                  <h3
                    className="
                      mt-2.5
                      text-xl
                      font-bold
                      tracking-[-0.035em]
                      text-white
                      sm:text-2xl
                    "
                  >
                    {group.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      max-w-md
                      text-xs
                      leading-5
                      text-neutral-500
                      sm:text-sm
                    "
                  >
                    {group.description}
                  </p>
                </div>

                {/* Domain indicator */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    font-mono
                    text-[10px]
                    text-neutral-600
                    transition-all
                    duration-500
                    group-hover:border-[#76B900]/30
                    group-hover:text-[#76B900]
                  "
                >
                  +
                </div>
              </div>

              {/* ================================================= */}
              {/* SKILLS */}
              {/* ================================================= */}

              <div className="relative mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.06 + skillIndex * 0.025,
                      ease: "easeOut",
                    }}
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      px-3
                      py-1.5
                      text-[11px]
                      font-medium
                      text-neutral-400
                      transition-all
                      duration-300
                      group-hover:border-white/[0.12]
                      group-hover:text-neutral-300
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* ================================================= */}
              {/* BOTTOM INDICATOR */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  bottom-5
                  left-6
                  flex
                  items-center
                  gap-2
                  opacity-50
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  lg:left-7
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#76B900]
                    shadow-[0_0_8px_rgba(118,185,0,0.5)]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-neutral-600
                  "
                >
                  Technical domain
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ==================================================== */}
        {/* CLOSING STATEMENT */}
        {/* ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            mt-8
            flex
            flex-col
            gap-3
            border-t
            border-white/[0.06]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#76B900]
                shadow-[0_0_12px_rgba(118,185,0,0.6)]
              "
            />

            <p className="text-xs text-neutral-500 sm:text-sm">
              Building toward{" "}
              <strong className="font-semibold text-neutral-300">
                intelligent materials
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-neutral-300">
                semiconductor engineering.
              </strong>
            </p>
          </div>

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-neutral-700
            "
          >
            Materials × AI
          </span>
        </motion.div>
      </div>
    </section>
  );
}