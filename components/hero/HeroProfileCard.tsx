"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-full bg-[#76B900]/25 blur-2xl" />

      {/* Outer Ring */}

      <div className="relative rounded-full border-2 border-[#76B900]/70 p-[5px]">

        {/* Inner Ring */}

        <div className="rounded-full border border-white/15 p-[4px]">

          <Image
            src="/profile/profile.jpg"
            alt="Hardik Sonu"
            width={150}
            height={150}
            priority
            className="
              h-[150px]
              w-[150px]
              rounded-full
              object-cover
              shadow-2xl
            "
          />

        </div>

      </div>

    </motion.div>
  );
}