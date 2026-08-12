"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value += Math.random() * 7 + 4;

      if (value >= 100) {
        value = 100;
        clearInterval(timer);

        setTimeout(() => setVisible(false), 350);
      }

      setProgress(Math.round(value));
    }, 55);

    return () => clearInterval(timer);
  }, []);

  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070907]"
        >
          <div className="relative flex items-center justify-center">
            {/* Rotating segmented ring */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              width="180"
              height="180"
              viewBox="0 0 180 180"
              className="absolute"
            >
              <circle
                cx="90"
                cy="90"
                r="74"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1.5"
                strokeDasharray="5 12"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Progress Ring */}
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="8"
              />

              <motion.circle
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke="#76B900"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 0.15, ease: "linear" }}
                transform="rotate(-90 90 90)"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(118,185,0,.45))",
                }}
              />
            </svg>

            {/* Center Percentage */}
            <div className="absolute flex flex-col items-center">
              <motion.span
                key={progress}
                initial={{ opacity: 0.6, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-mono text-3xl font-semibold tracking-tight text-white"
              >
                {progress}
              </motion.span>

              <span className="mt-1 font-mono text-[10px] tracking-[0.28em] text-neutral-500">
                LOADING
              </span>
            </div>

            {/* Ambient Glow */}
            <div className="absolute h-40 w-40 rounded-full bg-[#76B900]/10 blur-3xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}