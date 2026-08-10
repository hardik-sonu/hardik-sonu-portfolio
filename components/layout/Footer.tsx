"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hardik-sonu-3b220b380",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A2 2 0 1 0 4.85 7 2 2 0 0 0 4.85 3ZM21 13.85c0-3.76-2-5.52-4.67-5.52-2.15 0-3.1 1.18-3.63 2.01V8.5H9.4V21h3.3v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.31V21H21v-7.15Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.7c-2.64.57-3.2-1.12-3.2-1.12-.44-1.1-1.08-1.39-1.08-1.39-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .87 1.49 2.28 1.06 2.84.81.09-.63.34-1.06.62-1.3-2.11-.24-4.33-1.05-4.33-4.68 0-1.03.37-1.87.98-2.53-.1-.24-.43-1.2.09-2.5 0 0 .8-.26 2.62.97A9.1 9.1 0 0 1 12 7.1c.81 0 1.62.11 2.38.32 1.81-1.23 2.61-.97 2.61-.97.52 1.3.19 2.26.09 2.5.61.66.98 1.5.98 2.53 0 3.64-2.22 4.44-4.34 4.68.35.3.66.89.66 1.8v2.67c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/hardiksonu_1245",
    icon: (
      <span className="text-[11px] font-bold leading-none" aria-hidden="true">
        fi
      </span>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mr.hardiksonu",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/191q3B1Cpy/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M14 8h3V4h-3c-3.31 0-5 2-5 5v3H6v4h3v5h4v-5h3.2l.8-4H13V9c0-.67.33-1 1-1Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#080A08]
      "
    >
      {/* Top signal line, matches navbar's accent language */}

      <motion.div
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="
          pointer-events-none
          absolute
          left-[8%]
          right-[8%]
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#76B900]/70
          to-transparent
        "
      />

      {/* Ambient glow */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[420px]
          w-[720px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#76B900]/[0.045]
          blur-[160px]
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

      <div className="relative z-10 mx-auto max-w-[1350px] px-6 lg:px-12">
        {/* ==================================================== */}
        {/* MAIN GRID */}
        {/* ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="
            grid
            gap-10
            py-14
            sm:py-16
            lg:grid-cols-[1.2fr_1fr]
            lg:gap-14
            lg:py-20
          "
        >
          {/* ================================================== */}
          {/* IDENTITY / BRAND BLOCK */}
          {/* ================================================== */}

          <div>
            <a
              href="#"
              className="group inline-flex items-center gap-3 text-white"
            >
              <span
                className="
                  relative
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-lg
                  border
                  border-[#76B900]/30
                  bg-[#76B900]
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_0_24px_rgba(118,185,0,0.20)]
                "
              >
                HS
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />
              </span>

              <span
                className="
                  bg-gradient-to-r
                  from-white
                  to-neutral-300
                  bg-clip-text
                  text-base
                  font-semibold
                  tracking-tight
                  text-transparent
                "
              >
                Hardik Sonu
              </span>
            </a>

            <p
              className="
                mt-4
                flex
                items-center
                gap-2
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#9BE329]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#76B900]
                  shadow-[0_0_8px_rgba(118,185,0,0.7)]
                "
              />
              Future Semiconductor Process Engineer
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500">
              Metallurgy & Materials Engineer exploring the intersection of
              semiconductor technology and artificial intelligence.
            </p>

            {/* Discipline chips */}

            <div className="mt-5 flex flex-wrap gap-2">
              {["Metallurgy", "Materials", "Semiconductors", "AI"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      px-3
                      py-1
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-neutral-500
                    "
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ================================================== */}
          {/* QUOTE + CONNECT */}
          {/* ================================================== */}

          <div className="flex flex-col gap-10">
            {/* Quote block */}

            <div
              className="
                relative
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.02]
                p-6
                sm:p-7
              "
            >
              <span
                className="
                  absolute
                  left-6
                  top-4
                  font-serif
                  text-4xl
                  leading-none
                  text-[#76B900]/30
                "
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p
                className="
                  relative
                  mt-3
                  text-[15px]
                  italic
                  leading-7
                  text-neutral-300
                  sm:text-base
                "
              >
                The chip you build today is only as good as your willingness
                to be wrong about it tomorrow.
              </p>

              <p
                className="
                  mt-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-neutral-600
                "
              >
                In the spirit of Jensen Huang
              </p>
            </div>

            {/* Connect */}

            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#76B900]
                "
              >
                Connect
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="
                      group
                      relative
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-lg
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      text-neutral-500
                      transition-all
                      duration-300
                      hover:border-[#76B900]/40
                      hover:bg-[#76B900]/[0.08]
                      hover:text-[#9BE329]
                      hover:shadow-[0_8px_24px_rgba(118,185,0,0.18)]
                    "
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <a
                href="mailto:hello@hardiksonu.dev"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-neutral-500
                  transition-colors
                  duration-300
                  hover:text-[#9BE329]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#76B900]
                    shadow-[0_0_8px_rgba(118,185,0,0.7)]
                  "
                />
                Available for opportunities
              </a>
            </div>
          </div>
        </motion.div>

        {/* ==================================================== */}
        {/* BOTTOM BAR */}
        {/* ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-3
            border-t
            border-white/[0.06]
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[11px] text-neutral-600">
            © 2026 Hardik Sonu. All rights reserved.
          </p>

          <p
            className="
              flex
              items-center
              gap-2
              font-mono
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-neutral-700
            "
          >
            <span className="h-1 w-1 rounded-full bg-[#76B900]" />
            Metallurgy & Materials Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}