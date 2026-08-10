"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-24 lg:px-16 lg:py-32"
    >
      {/* Ambient engineering glow */}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute left-[15%] top-[25%] h-[320px] w-[320px] rounded-full bg-[#76B900]/[0.045] blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.4, delay: 0.15, ease: "easeOut" }}
        className="pointer-events-none absolute right-[10%] bottom-[5%] h-[260px] w-[260px] rounded-full bg-emerald-400/[0.025] blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Small label */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="h-px bg-[#76B900]"
          />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#76B900]">
            About Me
          </span>
        </motion.div>

        {/* Main statement */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-8 max-w-[1000px]"
        >
          <h2 className="text-3xl font-medium leading-[1.2] tracking-[-0.025em] text-neutral-300 sm:text-4xl lg:text-5xl">
            I am a{" "}
            <span className="font-bold text-white">
              Metallurgy & Materials Engineer
            </span>{" "}
            interested in the future of{" "}
            <span className="font-bold text-[#76B900]">
              semiconductor technology
            </span>{" "}
            and using{" "}
            <span className="font-bold text-white">
              AI
            </span>{" "}
            to solve materials engineering problems.
          </h2>
        </motion.div>

        {/* Engineering signal line */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
          className="mt-14 origin-left"
        >
          <div className="relative h-px w-full bg-white/[0.08]">

            {/* Moving signal */}

            <motion.div
              animate={{
                x: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-0
                top-1/2
                h-1
                w-20
                -translate-y-1/2
                bg-gradient-to-r
                from-transparent
                via-[#76B900]
                to-transparent
                blur-[1px]
              "
            />

            {/* Nodes */}

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="absolute left-[18%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#76B900] shadow-[0_0_14px_rgba(118,185,0,0.8)]"
            />

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.85 }}
              className="absolute left-[52%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-neutral-500"
            />

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1 }}
              className="absolute right-[18%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#76B900] shadow-[0_0_14px_rgba(118,185,0,0.7)]"
            />
          </div>
        </motion.div>

        {/* Supporting information */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Short description */}

          <p className="max-w-2xl text-base leading-7 text-neutral-500">
            My focus is on understanding how{" "}
            <span className="text-neutral-300">
              composition, structure, processing, and properties
            </span>{" "}
            influence material performance — and exploring how AI can make
            that engineering process smarter.
          </p>

          {/* Focus indicator */}

          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex shrink-0 items-center gap-4"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0px rgba(118,185,0,0)",
                  "0 0 18px rgba(118,185,0,0.18)",
                  "0 0 0px rgba(118,185,0,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#76B900]/20 bg-[#76B900]/[0.06]"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#76B900] shadow-[0_0_15px_rgba(118,185,0,0.9)]" />
            </motion.div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                Focus
              </p>

              <p className="mt-1 text-sm font-semibold text-neutral-300">
                Materials × Semiconductor × AI
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}