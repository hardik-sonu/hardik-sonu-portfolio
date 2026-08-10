"use client";

import { motion, useReducedMotion } from "framer-motion";

const certifications = [
  {
    year: "2026",
    title: "Materials Data Sciences and Informatics",
    issuer: "Georgia Institute of Technology · Coursera",
    category: "Materials + Data",
    featured: true,
  },
  {
    year: "2026",
    title: "Professional Certificate in Health and Safety Engineering",
    issuer: "Khalifa University · Coursera",
    category: "Engineering",
    featured: true,
  },
  {
    year: "2026",
    title: "Crash Course on Python Programming",
    issuer: "Google · Coursera",
    category: "Programming",
    featured: true,
  },
  {
    year: "2026",
    title: "MATLAB Basics",
    issuer: "Vanderbilt University · Coursera",
    category: "Computational",
    featured: false,
  },
  {
    year: "2026",
    title: "3D Printing Course",
    issuer: "HP LIFE",
    category: "Manufacturing",
    featured: false,
  },
  {
    year: "2026",
    title: "Basics of Engineering Management",
    issuer: "UniAthena",
    category: "Management",
    featured: false,
  },
  {
    year: "2026",
    title: "Certificate of Appreciation for Research Presentation",
    issuer: "Lahore College for Women University",
    category: "Research",
    featured: false,
  },
  {
    year: "2025",
    title: "Chief Minister Youth Skill Development Program",
    issuer: "Ulearn Online Education",
    category: "Professional Development",
    featured: false,
  },
  {
    year: "2025",
    title: "Data Analytics",
    issuer: "Hadi E-Learning",
    category: "Data",
    featured: false,
  },
  {
    year: "2024",
    title: "Customer Experience (CX) for Business Success",
    issuer: "HP LIFE",
    category: "Professional",
    featured: false,
  },
  {
    year: "2024",
    title: "Cyber Security Awareness",
    issuer: "HP LIFE",
    category: "Technology",
    featured: false,
  },
  {
    year: "2024",
    title: "WordPress",
    issuer: "Coursera",
    category: "Web",
    featured: false,
  },
  {
    year: "2024",
    title: "MS Office Expert",
    issuer: "Pakistan College SDK",
    category: "Productivity",
    featured: false,
  },
  {
    year: "2024",
    title: "Promotional Video Maker",
    issuer: "Coursera",
    category: "Creative",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(4px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
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
      {/* AMBIENT ENGINEERING GLOW */}
      {/* ====================================================== */}

      {!shouldReduceMotion && (
        <motion.div
          animate={{
            opacity: [0.018, 0.035, 0.018],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[22%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#76B900]
            blur-[180px]
          "
        />
      )}

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

      <div className="relative z-10 mx-auto max-w-[1350px] px-6 lg:px-12">

        {/* ==================================================== */}
        {/* HEADER */}
        {/* ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
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
          <div className="flex items-center gap-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 42 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
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
              Certifications
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
            Continuous{" "}
            <span className="text-[#76B900]">learning.</span>
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
            Building knowledge across{" "}
            <strong className="font-semibold text-neutral-200">
              materials science, engineering, programming, data, and
              technology.
            </strong>
          </p>
        </motion.div>

        {/* ==================================================== */}
        {/* FEATURED CERTIFICATIONS */}
        {/* ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            mt-12
            grid
            gap-4
            lg:grid-cols-3
          "
        >
          {certifications
            .filter((certificate) => certificate.featured)
            .map((certificate, index) => (
              <motion.article
                key={certificate.title}
                variants={itemVariants}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#76B900]/15
                  bg-[#0D100D]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#76B900]/35
                  hover:bg-[#101410]
                  hover:shadow-[0_16px_55px_rgba(0,0,0,0.22)]
                  sm:p-7
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
                    via-[#76B900]/70
                    to-transparent
                  "
                />

                {/* Card glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-[#76B900]/[0.04]
                    blur-[65px]
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative">

                  {/* Meta */}

                  <div className="flex items-center justify-between">
                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-[0.2em]
                        text-[#76B900]
                      "
                    >
                      {certificate.year}
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.14em]
                        text-neutral-600
                      "
                    >
                      Featured / 0{index + 1}
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      leading-tight
                      tracking-[-0.03em]
                      text-white
                      sm:text-2xl
                    "
                  >
                    {certificate.title}
                  </h3>

                  {/* Issuer */}

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-neutral-400
                    "
                  >
                    {certificate.issuer}
                  </p>

                  {/* Category */}

                  <div className="mt-6">
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.02]
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        text-neutral-500
                      "
                    >
                      {certificate.category}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
        </motion.div>

        {/* ==================================================== */}
        {/* OTHER CERTIFICATIONS */}
        {/* ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          className="
            mt-4
            divide-y
            divide-white/[0.06]
            rounded-2xl
            border
            border-white/[0.07]
            bg-[#0B0D0B]/80
            px-5
            sm:px-7
          "
        >
          {certifications
            .filter((certificate) => !certificate.featured)
            .map((certificate) => (
              <motion.div
                key={certificate.title}
                variants={itemVariants}
                className="
                  group
                  flex
                  flex-col
                  gap-3
                  py-5
                  transition-all
                  duration-300
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div className="flex min-w-0 items-start gap-5">

                  {/* Year */}

                  <span
                    className="
                      shrink-0
                      pt-1
                      font-mono
                      text-[10px]
                      tracking-[0.15em]
                      text-[#76B900]
                    "
                  >
                    {certificate.year}
                  </span>

                  {/* Certificate */}

                  <div className="min-w-0">
                    <h3
                      className="
                        text-base
                        font-semibold
                        tracking-[-0.01em]
                        text-neutral-200
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {certificate.title}
                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      {certificate.issuer}
                    </p>
                  </div>
                </div>

                {/* Category */}

                <span
                  className="
                    ml-9
                    w-fit
                    shrink-0
                    rounded-full
                    border
                    border-white/[0.07]
                    px-3
                    py-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-neutral-600
                    transition-all
                    duration-300
                    group-hover:border-[#76B900]/20
                    group-hover:text-neutral-400
                    sm:ml-0
                  "
                >
                  {certificate.category}
                </span>
              </motion.div>
            ))}
        </motion.div>

        {/* ==================================================== */}
        {/* LEARNING SIGNAL */}
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            flex
            flex-col
            gap-3
            border-t
            border-white/[0.06]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#76B900]
                shadow-[0_0_12px_rgba(118,185,0,0.55)]
              "
            />

            <p className="text-sm text-neutral-500">
              Learning across{" "}
              <strong className="font-semibold text-neutral-300">
                engineering, computation & technology.
              </strong>
            </p>
          </div>

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-neutral-700
            "
          >
            2024 → 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}