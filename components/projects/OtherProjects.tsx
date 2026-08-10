"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "02",
    title: "Jarvis",
    category: "AI Assistant",
    description:
      "An AI-powered personal assistant exploring intelligent interaction and task automation.",
    symbol: "AI",
  },
  {
    number: "03",
    title: "Gesture Hill Climb",
    category: "Computer Vision",
    description:
      "A gesture-controlled game combining real-time hand recognition with interactive gameplay.",
    symbol: "CV",
  },
  {
    number: "04",
    title: "Merit Calculator",
    category: "Engineering Utility",
    description:
      "A utility developed to calculate University of the Punjab admission merit.",
    symbol: "MC",
  },
  {
    number: "05",
    title: "Certificate Automation",
    category: "Automation",
    description:
      "An automated workflow for sorting attendees and distributing personalized certificates by email.",
    symbol: "AU",
  },
  {
    number: "06",
    title: "Company Dashboard",
    category: "Data Analytics",
    description:
      "A data dashboard developed to present company information through a clearer visual interface.",
    symbol: "DA",
  },
];

export default function OtherProjects() {
  return (
    <section
      id="other-projects"
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#080A08]
        px-6
        py-16
        sm:py-20
        lg:px-12
        lg:py-24
      "
    >
      {/* ====================================================== */}
      {/* AMBIENT BACKGROUND */}
      {/* ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.015, 0.035, 0.015],
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
          top-1/2
          h-[560px]
          w-[760px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#76B900]
          blur-[160px]
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
          opacity-[0.015]
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

      <div className="relative z-10 mx-auto max-w-[1350px]">
        {/* ==================================================== */}
        {/* SECTION HEADER */}
        {/* ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
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
        >
          {/* Label */}

          <div className="flex items-center gap-4">
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 40,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px bg-[#76B900]"
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#76B900]
              "
            >
              More Work
            </span>
          </div>

          {/* Heading + description */}

          <div
            className="
              mt-5
              flex
              flex-col
              gap-4
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                tracking-[-0.045em]
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Other Projects
            </h2>

            <p
              className="
                max-w-[420px]
                text-sm
                leading-6
                text-neutral-500
                md:text-right
              "
            >
              A selection of technical work spanning AI, automation,
              computer vision, and data.
            </p>
          </div>
        </motion.div>

        {/* ==================================================== */}
        {/* PROJECT GRID */}
        {/* ==================================================== */}

        <div
          className="
            mt-9
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                min-h-[260px]
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0D100D]/95
                p-6
                transition-all
                duration-500
                hover:border-[#76B900]/25
                hover:bg-[#101410]
                hover:shadow-[0_18px_55px_rgba(0,0,0,0.18)]
                sm:p-7
              "
            >
              {/* ================================================= */}
              {/* HOVER GLOW */}
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
                  bg-[#76B900]/[0.04]
                  opacity-0
                  blur-[65px]
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* ================================================= */}
              {/* TOP SIGNAL */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  left-6
                  right-6
                  top-0
                  h-px
                  overflow-hidden
                  bg-white/[0.04]
                  sm:left-7
                  sm:right-7
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
                    group-hover:w-20
                  "
                />
              </div>

              {/* ================================================= */}
              {/* HEADER */}
              {/* ================================================= */}

              <div className="relative flex items-start justify-between">
                {/* Project symbol */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    font-mono
                    text-[10px]
                    font-semibold
                    tracking-wide
                    text-neutral-400
                    transition-all
                    duration-500
                    group-hover:border-[#76B900]/25
                    group-hover:bg-[#76B900]/[0.05]
                    group-hover:text-[#76B900]
                  "
                >
                  {project.symbol}
                </div>

                {/* Project number */}

                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.18em]
                    text-neutral-700
                    transition-colors
                    duration-500
                    group-hover:text-neutral-500
                  "
                >
                  {project.number}
                </span>
              </div>

              {/* ================================================= */}
              {/* CATEGORY */}
              {/* ================================================= */}

              <p
                className="
                  relative
                  mt-6
                  font-mono
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#76B900]
                "
              >
                {project.category}
              </p>

              {/* ================================================= */}
              {/* TITLE */}
              {/* ================================================= */}

              <h3
                className="
                  relative
                  mt-2
                  text-[23px]
                  font-semibold
                  tracking-[-0.03em]
                  text-white
                "
              >
                {project.title}
              </h3>

              {/* ================================================= */}
              {/* DESCRIPTION */}
              {/* ================================================= */}

              <p
                className="
                  relative
                  mt-2.5
                  max-w-[390px]
                  text-[13px]
                  leading-5.5
                  text-neutral-500
                  transition-colors
                  duration-500
                  group-hover:text-neutral-400
                "
              >
                {project.description}
              </p>

              {/* ================================================= */}
              {/* BOTTOM SIGNAL */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  flex
                  items-center
                  justify-between
                  sm:left-7
                  sm:right-7
                "
              >
                {/* Line */}

                <span
                  className="
                    h-px
                    w-7
                    bg-white/[0.08]
                    transition-all
                    duration-500
                    group-hover:w-11
                    group-hover:bg-[#76B900]/40
                  "
                />

                {/* Arrow */}

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    text-xs
                    text-neutral-600
                    transition-all
                    duration-500
                    group-hover:border-[#76B900]/30
                    group-hover:text-[#76B900]
                  "
                >
                  ↗
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ==================================================== */}
        {/* FOOTER SIGNAL */}
        {/* ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-white/[0.06]
            pt-5
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#76B900]
                shadow-[0_0_10px_rgba(118,185,0,0.55)]
              "
            />

            <span className="text-xs text-neutral-600">
              Selected technical work
            </span>
          </div>

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-neutral-700
            "
          >
            05 Projects
          </span>
        </motion.div>
      </div>
    </section>
  );
}