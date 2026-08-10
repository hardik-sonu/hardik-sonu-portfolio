"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "50+",
    label: "Certifications",
  },
  {
    value: "2+",
    label: "Years Freelance",
  },
  {
    value: "3.8",
    label: "Current GPA",
  },
  {
    value: "2029",
    label: "Engineering",
  },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-7 sm:gap-x-12">

      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
          className="
            relative
            min-w-[85px]
          "
        >
          <div className="flex items-baseline gap-1">

            <span
              className="
                text-3xl
                font-bold
                tracking-[-0.05em]
                text-white
                sm:text-4xl
              "
            >
              {stat.value}
            </span>

            {index === 2 && (
              <span className="text-xs font-semibold text-[#76B900]">
                /4
              </span>
            )}
          </div>

          <p
            className="
              mt-2
              font-mono
              text-[8px]
              uppercase
              tracking-[0.16em]
              text-neutral-600
              sm:text-[9px]
            "
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}