"use client";

import { motion } from "framer-motion";

const contactItems = [
  {
    label: "EMAIL",
    value: "mr.hardiksonu@gmail.com",
    description: "Professional inquiries & collaboration",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mr.hardiksonu@gmail.com",
    external: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "PHONE",
    value: "+92 314 6251632",
    description: "Direct professional contact",
    href: "tel:+923146251632",
    external: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <path d="M21 15.5v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.5 5.18 2 2 0 0 1 5.48 3h3a2 2 0 0 1 2 1.72c.1.72.27 1.43.52 2.11a2 2 0 0 1-.45 2.11L9.3 10.2a16 16 0 0 0 4.5 4.5l1.26-1.26a2 2 0 0 1 2.11-.45c.68.25 1.39.42 2.11.52A2 2 0 0 1 21 15.5Z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
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
          opacity: [0.018, 0.035, 0.018],
          scale: [1, 1.04, 1],
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
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#76B900]
          blur-[170px]
        "
      />

      {/* Technical grid */}

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
      {/* CONTAINER */}
      {/* ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1250px] px-6 lg:px-10">
        {/* ==================================================== */}
        {/* HEADER */}
        {/* ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Section label */}

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#76B900]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#76B900]
              "
            >
              Contact
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-[1.02]
              tracking-[-0.055em]
              text-white
              sm:text-5xl
              lg:text-[56px]
            "
          >
            Let&apos;s connect
            <span className="text-[#76B900]">.</span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-neutral-500
              sm:text-base
              sm:leading-7
            "
          >
            For professional opportunities, technical collaboration,
            engineering projects, or research discussions, feel free to
            reach out.
          </p>
        </motion.div>

        {/* ==================================================== */}
        {/* CONTACT CARD */}
        {/* ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mt-9"
        >
          <motion.div
            variants={itemVariants}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#0D100D]
              p-5
              sm:p-7
              lg:p-8
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
                via-[#76B900]/60
                to-transparent
              "
            />

            {/* Card glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-28
                -top-28
                h-64
                w-64
                rounded-full
                bg-[#76B900]/[0.04]
                blur-[90px]
                transition-all
                duration-700
                group-hover:bg-[#76B900]/[0.065]
              "
            />

            <div className="relative">
              {/* Card header */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#76B900]
                    "
                  >
                    Direct contact
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-bold
                      tracking-[-0.035em]
                      text-white
                      sm:text-2xl
                    "
                  >
                    Start a conversation
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-xl
                      text-xs
                      leading-5
                      text-neutral-600
                      sm:text-sm
                    "
                  >
                    Projects, opportunities, collaboration ideas, or
                    technical discussions.
                  </p>
                </div>

                <span
                  className="
                    hidden
                    font-mono
                    text-[9px]
                    tracking-[0.2em]
                    text-neutral-700
                    sm:block
                  "
                >
                  01 / CONTACT
                </span>
              </div>

              {/* ================================================= */}
              {/* CONTACT METHODS */}
              {/* ================================================= */}

              <div
                className="
                  mt-7
                  grid
                  gap-3
                  lg:grid-cols-2
                "
              >
                {contactItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={
                      item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ y: -2 }}
                    transition={{
                      duration: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group/item
                      relative
                      flex
                      min-h-[96px]
                      items-center
                      gap-4
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-white/[0.015]
                      p-4
                      transition-all
                      duration-300
                      hover:border-[#76B900]/25
                      hover:bg-[#76B900]/[0.035]
                    "
                  >
                    {/* Hover glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-8
                        -top-8
                        h-24
                        w-24
                        rounded-full
                        bg-[#76B900]/[0.05]
                        blur-2xl
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover/item:opacity-100
                      "
                    />

                    {/* Icon */}

                    <div
                      className="
                        relative
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        text-neutral-500
                        transition-all
                        duration-300
                        group-hover/item:border-[#76B900]/30
                        group-hover/item:bg-[#76B900]/[0.06]
                        group-hover/item:text-[#76B900]
                      "
                    >
                      {item.icon}
                    </div>

                    {/* Content */}

                    <div className="relative min-w-0 flex-1">
                      <p
                        className="
                          font-mono
                          text-[8px]
                          font-medium
                          tracking-[0.2em]
                          text-neutral-600
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                          mt-1
                          truncate
                          text-sm
                          font-semibold
                          text-neutral-300
                          transition-colors
                          duration-300
                          group-hover/item:text-white
                        "
                      >
                        {item.value}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[11px]
                          text-neutral-600
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}

                    <span
                      className="
                        relative
                        shrink-0
                        text-neutral-700
                        transition-all
                        duration-300
                        group-hover/item:-translate-y-0.5
                        group-hover/item:translate-x-0.5
                        group-hover/item:text-[#76B900]
                      "
                    >
                      ↗
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* ================================================= */}
              {/* EMAIL CTA */}
              {/* ================================================= */}

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  gap-3
                  rounded-xl
                  border
                  border-[#76B900]/10
                  bg-[#76B900]/[0.02]
                  p-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div>
                  <p className="text-sm font-semibold text-neutral-200">
                    Prefer email?
                  </p>

                  <p className="mt-0.5 text-[11px] text-neutral-600">
                    Open Gmail and start a message directly.
                  </p>
                </div>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mr.hardiksonu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#76B900]
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#87D000]
                    hover:shadow-[0_0_25px_rgba(118,185,0,0.18)]
                  "
                >
                  Send an email
                  <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ==================================================== */}
        {/* AVAILABILITY */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
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
                shrink-0
                rounded-full
                bg-[#76B900]
                shadow-[0_0_12px_rgba(118,185,0,0.65)]
              "
            />

            <p className="text-xs text-neutral-600">
              Available for{" "}
              <strong className="font-semibold text-neutral-400">
                meaningful technical opportunities.
              </strong>
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-neutral-700
            "
          >
            <span>METALLURGY</span>
            <span className="text-[#76B900]">•</span>
            <span>MATERIALS</span>
            <span className="text-[#76B900]">•</span>
            <span>SEMICONDUCTORS</span>
            <span className="text-[#76B900]">•</span>
            <span>AI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}