"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2026",
    role: "PioPetro Summer Internship 2026",
    organization: "PioPetro Foundation",
    description:
      "Industrial experience applying engineering knowledge in a professional working environment.",
    tags: ["Engineering", "Industry", "Technical Practice"],
    current: true,
  },
  {
    period: "2025–2026",
    role: "PowerPoint Designer Intern",
    organization: "Webgross Pvt. Ltd.",
    description:
      "Created professional presentations and visual communication materials for technical and business content.",
    tags: ["Presentation Design", "Visual Communication", "50+ Presentations"],
    current: false,
  },
  {
    period: "2024–Present",
    role: "Freelance Designer",
    organization: "Independent",
    description:
      "Working independently on presentation design, visual communication, and digital creative projects.",
    tags: ["Freelancing", "PPTX", "Design"],
    current: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#080A08]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* ====================================================== */}
      {/* AMBIENT LIGHT */}
      {/* ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.018, 0.035, 0.018],
          scale: [1, 1.05, 1],
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
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#76B900]
          blur-[170px]
        "
      />

      {/* ====================================================== */}
      {/* ENGINEERING GRID */}
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

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-6
          sm:px-8
          lg:px-10
        "
      >
        {/* ==================================================== */}
        {/* HEADER */}
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
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Label */}

          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#76B900]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#76B900]
              "
            >
              Experience
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-[1.05]
              tracking-[-0.055em]
              text-white
              sm:text-4xl
              lg:text-5xl
          "
          >
            Learning through{" "}
            <span className="text-[#76B900]">engineering</span>{" "}
            & real-world work.
          </h2>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-neutral-400
              sm:text-base
              sm:leading-7
            "
          >
            A growing path combining{" "}
            <strong className="font-semibold text-neutral-200">
              engineering education
            </strong>
            , industry exposure, and practical digital work.
          </p>
        </motion.div>

        {/* ==================================================== */}
        {/* EXPERIENCE */}
        {/* ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="relative mt-10 sm:mt-12"
        >
          {/* Timeline */}

          <div
            className="
              absolute
              bottom-2
              left-[8px]
              top-2
              w-px
              bg-gradient-to-b
              from-[#76B900]/60
              via-white/[0.08]
              to-transparent
              md:left-[14px]
            "
          />

          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.role}-${experience.organization}`}
                variants={itemVariants}
                className="
                  group
                  relative
                  pl-8
                  md:pl-11
                "
              >
                {/* ================================================= */}
                {/* TIMELINE NODE */}
                {/* ================================================= */}

                <div
                  className="
                    absolute
                    left-0
                    top-7
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#76B900]/40
                    bg-[#080A08]
                    transition-all
                    duration-300
                    group-hover:border-[#76B900]
                    group-hover:shadow-[0_0_18px_rgba(118,185,0,0.3)]
                    md:h-7
                    md:w-7
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#76B900]
                      transition-all
                      duration-300
                      group-hover:h-2
                      group-hover:w-2
                    "
                  />
                </div>

                {/* ================================================= */}
                {/* CARD */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-[#0C0F0C]/90
                    px-5
                    py-5
                    transition-all
                    duration-400
                    group-hover:-translate-y-0.5
                    group-hover:border-[#76B900]/22
                    group-hover:bg-[#0F120F]
                    sm:px-6
                    sm:py-6
                  "
                >
                  {/* Top accent */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#76B900]/0
                      to-transparent
                      transition-all
                      duration-500
                      group-hover:via-[#76B900]/60
                    "
                  />

                  {/* Subtle glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-[#76B900]/[0.035]
                      blur-[65px]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative">
                    {/* ================================================= */}
                    {/* META */}
                    {/* ================================================= */}

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className="
                            font-mono
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-[#76B900]
                          "
                        >
                          {experience.period}
                        </span>

                        {experience.current && (
                          <>
                            <span className="h-1 w-1 rounded-full bg-neutral-700" />

                            <span
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-[#76B900]/15
                                bg-[#76B900]/[0.05]
                                px-2
                                py-1
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[0.12em]
                                text-[#76B900]
                              "
                            >
                              <span className="h-1 w-1 rounded-full bg-[#76B900]" />
                              Current
                            </span>
                          </>
                        )}
                      </div>

                      <span
                        className="
                          hidden
                          font-mono
                          text-[9px]
                          tracking-[0.18em]
                          text-neutral-700
                          sm:block
                        "
                      >
                        EXP / 0{index + 1}
                      </span>
                    </div>

                    {/* ================================================= */}
                    {/* MAIN CONTENT */}
                    {/* ================================================= */}

                    <div
                      className="
                        mt-4
                        flex
                        flex-col
                        gap-4
                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                      "
                    >
                      <div className="max-w-3xl">
                        <h3
                          className="
                            text-xl
                            font-bold
                            leading-tight
                            tracking-[-0.035em]
                            text-white
                            sm:text-2xl
                          "
                        >
                          {experience.role}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-medium
                            text-neutral-400
                          "
                        >
                          {experience.organization}
                        </p>

                        <p
                          className="
                            mt-3
                            max-w-2xl
                            text-sm
                            leading-6
                            text-neutral-500
                          "
                        >
                          {experience.description}
                        </p>
                      </div>
                    </div>

                    {/* ================================================= */}
                    {/* TAGS */}
                    {/* ================================================= */}

                    <div
                      className="
                        mt-4
                        flex
                        flex-wrap
                        gap-1.5
                      "
                    >
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-full
                            border
                            border-white/[0.07]
                            bg-white/[0.018]
                            px-2.5
                            py-1
                            text-[9px]
                            font-medium
                            text-neutral-600
                            transition-colors
                            duration-300
                            group-hover:text-neutral-400
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* ==================================================== */}
        {/* BOTTOM SIGNAL */}
        {/* ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
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
          <div className="flex items-center gap-2.5">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#76B900]
                shadow-[0_0_12px_rgba(118,185,0,0.6)]
              "
            />

            <p className="text-xs text-neutral-600 sm:text-sm">
              Building experience across{" "}
              <strong className="font-semibold text-neutral-400">
                engineering, technology & design.
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
            2024 → Present
          </span>
        </motion.div>
      </div>
    </section>
  );
}