"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.55);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{
            opacity: 0,
            x: 30,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 30,
            scale: 0.85,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.08,
            x: -3,
          }}
          whileTap={{
            scale: 0.94,
          }}
          className="
            fixed
            right-6
            bottom-8
            z-[60]
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-[#76B900]/40
            bg-[#0B0E0B]/90
            text-[#9BE329]
            shadow-[0_0_25px_rgba(118,185,0,0.14)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-[#76B900]
            hover:bg-[#76B900]/10
            hover:text-[#76B900]
            hover:shadow-[0_0_30px_rgba(118,185,0,0.28)]
            sm:right-8
            sm:bottom-9
          "
        >
          {/* Bold upward arrow */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 19V5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="M6 11L12 5L18 11"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Subtle active indicator */}
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-xl
              border
              border-[#76B900]/0
              transition-all
              duration-300
              hover:border-[#76B900]/30
            "
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}