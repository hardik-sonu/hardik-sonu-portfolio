"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ============================================================
   NAVIGATION ORDER
   IMPORTANT:
   Keep this in the SAME ORDER as your actual page sections.
   ============================================================ */

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#technical-focus" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/hardik-sonu-3b220b380";

const NAVBAR_OFFSET = 105;
const HERO_ID = "home";

/* ============================================================
   NAVBAR
   ============================================================ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /*
   * null = Hero section.
   * Nothing is highlighted while the user is on Hero.
   */
  const [activeSection, setActiveSection] = useState<string | null>(null);

  /* ==========================================================
     SINGLE SOURCE OF TRUTH FOR ACTIVE SECTION
     (unchanged logic — do not add a second detection system)
     ========================================================== */

  const updateActiveSection = useCallback(() => {
    setScrolled(window.scrollY > 24);

    /*
     * Overall page scroll progress, used for the thin
     * progress bar under the navbar.
     */
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    setScrollProgress(
      docHeight > 0
        ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100))
        : 0
    );

    const hero = document.getElementById(HERO_ID);

    if (hero) {
      const heroBottom = hero.getBoundingClientRect().bottom;

      if (heroBottom > NAVBAR_OFFSET) {
        setActiveSection(null);
        return;
      }
    }

    const readingLine = NAVBAR_OFFSET + 1;

    let current: string | null = null;

    for (const item of navigation) {
      const id = item.href.substring(1);
      const section = document.getElementById(id);

      if (!section) continue;

      const top = section.getBoundingClientRect().top;

      if (top <= readingLine) {
        current = id;
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.requestAnimationFrame(() => {
      updateActiveSection();
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateActiveSection]);

  /* ==========================================================
     SMOOTH NAVIGATION
     ========================================================== */

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const id = href.substring(1);
    const target = document.getElementById(id);

    if (!target) {
      console.warn(`Navbar target not found: #${id}`);
      return;
    }

    setMobileOpen(false);
    setActiveSection(id);

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  /* ==========================================================
     MOBILE RESIZE
     ========================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        px-4
        pt-4
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto max-w-[1450px]">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`
            relative
            flex
            items-center
            justify-between
            overflow-hidden
            rounded-2xl
            px-4
            transition-all
            duration-500
            sm:px-5

            ${
              scrolled
                ? `
                  h-14
                  border
                  border-[#76B900]/20
                  bg-[#090B09]/94
                  shadow-[0_12px_50px_rgba(0,0,0,0.32)]
                  backdrop-blur-2xl
                `
                : `
                  h-16
                  border
                  border-white/[0.11]
                  bg-[#090B09]/72
                  backdrop-blur-xl
                `
            }
          `}
        >
          {/* ==================================================
              TOP LIGHT
              ================================================== */}

          <motion.div
            animate={{
              opacity: scrolled ? [0.25, 0.55, 0.25] : [0.15, 0.35, 0.15],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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

          {/* ==================================================
              SCROLL PROGRESS BAR
              ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              h-[2px]
              bg-white/[0.03]
            "
          >
            <motion.div
              animate={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.15, ease: "linear" }}
              className="
                h-full
                bg-gradient-to-r
                from-[#4d7a00]
                via-[#76B900]
                to-[#9BE329]
                shadow-[0_0_10px_rgba(118,185,0,0.7)]
              "
            />
          </div>

          {/* ==================================================
              LOGO
              ================================================== */}

          <Link
            href="/"
            className="group relative z-10 flex items-center gap-3"
            aria-label="Hardik Sonu — Home"
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.25 }}
              className="relative flex h-9 w-9 shrink-0 items-center justify-center"
            >
              {/* Rotating conic ring */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-[-3px]
                  rounded-lg
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, #76B900, transparent 55%)",
                }}
              />

              <div
                className="
                  relative
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-lg
                  border
                  border-[#76B900]/30
                  bg-[#76B900]
                  font-bold
                  text-white
                  shadow-[0_0_24px_rgba(118,185,0,0.20)]
                "
              >
                <span className="relative z-10 text-[13px] font-bold tracking-[-0.04em]">
                  HS
                </span>

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
              </div>
            </motion.div>

            <div className="hidden sm:block">
              <p
                className="
                  bg-gradient-to-r
                  from-white
                  to-neutral-300
                  bg-clip-text
                  text-[14px]
                  font-semibold
                  tracking-[-0.02em]
                  text-transparent
                "
              >
                Hardik Sonu
              </p>

              <p className="mt-0.5 flex items-center gap-1.5 text-[10px] font-medium tracking-[0.08em] text-neutral-400">
                <span className="h-1 w-1 rounded-full bg-[#76B900] shadow-[0_0_6px_rgba(118,185,0,0.8)]" />
                METALLURGY & MATERIALS ENGINEER
              </p>
            </div>
          </Link>

          {/* ==================================================
              DESKTOP NAVIGATION
              ================================================== */}

          <div className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item, index) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.href)}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-1.5
                    rounded-lg
                    px-3
                    py-2
                    text-[12px]
                    font-semibold
                    tracking-[0.01em]
                    transition-colors
                    duration-300

                    ${
                      isActive
                        ? "text-white"
                        : "text-neutral-400 hover:text-white"
                    }
                  `}
                >
                  {/* ACTIVE BACKGROUND + GLOW */}

                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-bg"
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-lg
                          bg-[#76B900]/[0.09]
                          shadow-[0_0_18px_rgba(118,185,0,0.16)_inset]
                        "
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 30,
                          mass: 0.8,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* INDEX LABEL */}

                  <span
                    className={`
                      relative
                      z-10
                      font-mono
                      text-[9px]
                      transition-colors
                      duration-300

                      ${
                        isActive
                          ? "text-[#76B900]"
                          : "text-neutral-600 group-hover:text-[#76B900]/70"
                      }
                    `}
                  >
                    0{index + 1}
                  </span>

                  {/* TEXT */}

                  <span className="relative z-10">{item.name}</span>

                  {/* ACTIVE UNDERLINE */}

                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-line"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "55%", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          absolute
                          bottom-[4px]
                          left-1/2
                          h-px
                          -translate-x-1/2
                          bg-[#76B900]
                          shadow-[0_0_8px_rgba(118,185,0,0.75)]
                        "
                      />
                    )}
                  </AnimatePresence>

                  {/* HOVER LINE */}

                  {!isActive && (
                    <span
                      className="
                        pointer-events-none
                        absolute
                        bottom-[4px]
                        left-1/2
                        h-px
                        w-0
                        -translate-x-1/2
                        bg-[#76B900]/60
                        transition-all
                        duration-300
                        group-hover:w-[45%]
                      "
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* ==================================================
              RIGHT SIDE
              ================================================== */}

          <div className="relative z-10 flex items-center gap-2">
            {/* LinkedIn */}

            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                hidden
                items-center
                gap-2
                rounded-lg
                border
                border-white/[0.12]
                bg-white/[0.035]
                px-4
                py-2
                text-[11px]
                font-semibold
                tracking-[0.02em]
                text-neutral-200
                transition-all
                duration-300
                hover:border-[#76B900]/45
                hover:bg-[#76B900]/[0.07]
                hover:text-[#9BE329]
                sm:inline-flex
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 fill-current text-neutral-400 transition-colors duration-300 group-hover:text-[#9BE329]"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
              </svg>
              LinkedIn
              <span
                className="
                  text-[13px]
                  text-neutral-500
                  transition-all
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:text-[#76B900]
                "
              >
                {"\u2197"}
              </span>
            </motion.a>

            {/* Mobile menu */}

            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.12]
                bg-white/[0.035]
                text-neutral-200
                transition-all
                duration-300
                hover:border-[#76B900]/40
                hover:bg-[#76B900]/[0.06]
                hover:text-[#76B900]
                lg:hidden
              "
            >
              <div className="flex w-4 flex-col gap-[4px]">
                <motion.span
                  animate={
                    mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25 }}
                  className="h-px w-full bg-current"
                />

                <motion.span
                  animate={{
                    opacity: mobileOpen ? 0 : 1,
                    x: mobileOpen ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="h-px w-full bg-current"
                />

                <motion.span
                  animate={
                    mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25 }}
                  className="h-px w-full bg-current"
                />
              </div>
            </button>
          </div>

          {/* ==================================================
              MOBILE NAVIGATION
              ================================================== */}

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="
                  absolute
                  left-0
                  right-0
                  top-[calc(100%+8px)]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.11]
                  bg-[#090B09]/96
                  p-2
                  shadow-[0_20px_60px_rgba(0,0,0,0.40)]
                  backdrop-blur-2xl
                  lg:hidden
                "
              >
                <div
                  className="
                    absolute
                    left-8
                    right-8
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#76B900]/60
                    to-transparent
                  "
                />

                <div className="space-y-1">
                  {navigation.map((item, index) => {
                    const sectionId = item.href.substring(1);
                    const isActive = activeSection === sectionId;

                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(event) => handleNavigation(event, item.href)}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        className={`
                          group
                          relative
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3.5
                          text-sm
                          font-semibold
                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "bg-[#76B900]/[0.09] text-white"
                              : "text-neutral-300 hover:bg-[#76B900]/[0.07] hover:text-white"
                          }
                        `}
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          <span
                            className={`
                              font-mono
                              text-[10px]
                              transition-colors
                              duration-300

                              ${
                                isActive
                                  ? "text-[#76B900]"
                                  : "text-neutral-600"
                              }
                            `}
                          >
                            0{index + 1}
                          </span>

                          <span
                            className={`
                              h-1.5
                              w-1.5
                              rounded-full
                              transition-all
                              duration-300

                              ${
                                isActive
                                  ? "bg-[#76B900] shadow-[0_0_10px_rgba(118,185,0,0.8)]"
                                  : "bg-neutral-700"
                              }
                            `}
                          />
                          {item.name}
                        </span>

                        <span
                          className={`
                            transition-all
                            duration-300

                            ${
                              isActive
                                ? "text-[#76B900]"
                                : "text-neutral-600 group-hover:translate-x-1 group-hover:text-[#76B900]"
                            }
                          `}
                        >
                          {"\u2192"}
                        </span>
                      </motion.a>
                    );
                  })}

                  {/* Mobile LinkedIn */}

                  <div className="mt-2 border-t border-white/[0.07] pt-2">
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        px-4
                        py-3.5
                        text-sm
                        font-semibold
                        text-[#76B900]
                        transition-all
                        hover:bg-[#76B900]/[0.07]
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                      >
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
                      </svg>
                      <span>LinkedIn</span>
                      <span className="ml-auto">{"\u2197"}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}