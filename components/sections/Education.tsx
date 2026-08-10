"use client";

import { motion, useReducedMotion } from "framer-motion";

const education = [
  {
    period: "2025 — 2029",
    level: "UNDERGRADUATE",
    degree: "BS Metallurgical & Materials Engineering",
    institution:
      "Institute of Metallurgy and Materials Engineering, University of the Punjab",
    location: "Lahore, Pakistan",
    result: "Current GPA: 3.5+",
    current: true,
  },
  {
    period: "2023 — 2025",
    level: "HIGHER SECONDARY",
    degree: "F.Sc. Pre-Engineering",
    institution: "Iqra Postgraduate College",
    location: "Sadiqabad, Pakistan",
    result: "Grade: A+",
    current: false,
  },
  {
    period: "2021 — 2023",
    level: "SECONDARY",
    degree: "Matriculation",
    institution: "Govt. Tameer-e-Millat High School",
    location: "Sadiqabad, Pakistan",
    result: "Grade: A+",
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
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
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

      {!shouldReduceMotion && (
        <motion.div
          animate={{
            opacity: [0.02, 0.045, 0.02],
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
            top-[45%]
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#76B900]
            blur-[180px]
          "
        />
      )}

      {/* ====================================================== */}
      {/* SUBTLE ENGINEERING GRID */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.016]
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 42 }}
              viewport={{ once: true }}
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
              Education
            </span>
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-[1.02]
              tracking-[-0.055em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Academic{" "}
            <span className="text-[#76B900]">foundation.</span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-neutral-400
              sm:text-lg
              sm:leading-8
            "
          >
            From{" "}
            <strong className="font-semibold text-neutral-200">
              pre-engineering
            </strong>{" "}
            to materials engineering — building the technical foundation
            behind my work in{" "}
            <strong className="font-semibold text-neutral-200">
              materials, semiconductors, and AI.
            </strong>
          </p>
        </motion.div>

        {/* ==================================================== */}
        {/* EDUCATION TIMELINE */}
        {/* ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.06,
          }}
          className="relative mt-12"
        >
          {/* Timeline line */}

          <div
            className="
              absolute
              bottom-7
              left-[10px]
              top-7
              w-px
              bg-gradient-to-b
              from-[#76B900]/65
              via-[#76B900]/18
              to-transparent
              md:left-[15px]
            "
          />

          <div className="space-y-4">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                variants={itemVariants}
                className="group relative pl-9 md:pl-12"
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
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#76B900]/40
                    bg-[#080A08]
                    transition-all
                    duration-500
                    group-hover:border-[#76B900]
                    group-hover:shadow-[0_0_20px_rgba(118,185,0,0.3)]
                    md:h-[31px]
                    md:w-[31px]
                  "
                >
                  {!shouldReduceMotion ? (
                    <motion.span
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.65, 1, 0.65],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.25,
                      }}
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#76B900]
                      "
                    />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#76B900]" />
                  )}
                </div>

                {/* ================================================= */}
                {/* CARD */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-[#0D100D]/90
                    p-5
                    backdrop-blur-sm
                    transition-all
                    duration-400
                    group-hover:-translate-y-0.5
                    group-hover:border-[#76B900]/25
                    group-hover:bg-[#101410]
                    group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.2)]
                    sm:p-6
                    lg:p-7
                  "
                >
                  {/* Top signal */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-transparent
                      to-transparent
                      transition-all
                      duration-500
                      group-hover:via-[#76B900]/65
                    "
                  />

                  {/* Hover glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-52
                      w-52
                      rounded-full
                      bg-[#76B900]/[0.04]
                      blur-[80px]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative">

                    {/* Metadata */}

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className="
                            font-mono
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-[#76B900]
                          "
                        >
                          {item.period}
                        </span>

                        <span
                          className="
                            hidden
                            h-1
                            w-1
                            rounded-full
                            bg-neutral-700
                            sm:block
                          "
                        />

                        <span
                          className="
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.18em]
                            text-neutral-600
                          "
                        >
                          {item.level}
                        </span>
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
                        EDU / 0{index + 1}
                      </span>
                    </div>

                    {/* Degree */}

                    <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
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
                          {item.degree}
                        </h3>

                        <p
                          className="
                            mt-2
                            text-sm
                            font-medium
                            leading-6
                            text-neutral-300
                            sm:text-[15px]
                          "
                        >
                          {item.institution}
                        </p>

                        <p className="mt-0.5 text-sm text-neutral-500">
                          {item.location}
                        </p>
                      </div>

                      {item.current && (
                        <span
                          className="
                            inline-flex
                            w-fit
                            shrink-0
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#76B900]/20
                            bg-[#76B900]/[0.06]
                            px-3
                            py-1.5
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.15em]
                            text-[#76B900]
                          "
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#76B900] shadow-[0_0_8px_rgba(118,185,0,0.8)]" />
                          Current
                        </span>
                      )}
                    </div>

                    {/* Result */}

                    <div
                      className="
                        mt-5
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-white/[0.06]
                        pt-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                      "
                    >
                      <span className="text-xs text-neutral-500">
                        Academic result
                      </span>

                      <span
                        className="
                          w-fit
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.02]
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-neutral-300
                          transition-colors
                          duration-300
                          group-hover:border-[#76B900]/20
                          group-hover:text-[#76B900]
                        "
                      >
                        {item.result}
                      </span>
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            flex
            items-center
            gap-3
            border-t
            border-white/[0.06]
            pt-6
          "
        >
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#76B900]
              shadow-[0_0_14px_rgba(118,185,0,0.65)]
            "
          />

          <p className="text-sm text-neutral-500">
            A continuous path from{" "}
            <strong className="font-semibold text-neutral-300">
              foundational science
            </strong>{" "}
            to engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}