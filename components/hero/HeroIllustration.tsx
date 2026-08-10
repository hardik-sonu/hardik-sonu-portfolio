"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function HeroIllustration() {
  const reducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 180,
    damping: 20,
    mass: 0.6,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 180,
    damping: 20,
    mass: 0.6,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (reducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 10;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * -10;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
        x: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex
        h-[470px]
        w-full
        max-w-[650px]
        items-center
        justify-center
        sm:h-[540px]
        lg:h-[620px]
      "
      style={{
        perspective: 1200,
      }}
    >
      {/* ===================================================== */}
      {/* AMBIENT ENGINEERING FIELD */}
      {/* ===================================================== */}

      <motion.div
        animate={{
          opacity: isHovered ? 0.16 : 0.08,
          scale: isHovered ? 1.18 : 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#76B900]
          blur-[130px]
          sm:h-[450px]
          sm:w-[450px]
        "
      />

      {/* ===================================================== */}
      {/* OUTER ORBIT */}
      {/* ===================================================== */}

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: isHovered ? 16 : 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          h-[350px]
          w-[350px]
          rounded-full
          border
          border-[#76B900]/[0.16]
          sm:h-[430px]
          sm:w-[430px]
          lg:h-[500px]
          lg:w-[500px]
        "
      >
        {/* Orbit marker */}

        <motion.span
          animate={{
            scale: isHovered ? [1, 1.8, 1] : [1, 1.3, 1],
            opacity: isHovered ? [0.5, 1, 0.5] : [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: isHovered ? 1.2 : 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[8%]
            top-[16%]
            h-2
            w-2
            rounded-full
            bg-[#76B900]
            shadow-[0_0_16px_rgba(118,185,0,0.9)]
          "
        />
      </motion.div>

      {/* ===================================================== */}
      {/* SECONDARY MEASUREMENT RING */}
      {/* ===================================================== */}

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: isHovered ? 24 : 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          h-[285px]
          w-[285px]
          rounded-full
          border
          border-white/[0.055]
          sm:h-[350px]
          sm:w-[350px]
          lg:h-[410px]
          lg:w-[410px]
        "
      >
        <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-white/20" />

        <span className="absolute bottom-0 left-1/2 h-4 w-px -translate-x-1/2 bg-white/10" />

        <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-white/10" />

        <span className="absolute right-0 top-1/2 h-px w-4 -translate-y-1/2 bg-white/10" />
      </motion.div>

      {/* ===================================================== */}
      {/* INTERACTIVE PHOTO SYSTEM */}
      {/* ===================================================== */}

      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: reducedMotion ? 0 : [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          group
          relative
          z-20
          cursor-crosshair
        "
      >
        {/* ================================================= */}
        {/* HOVER RESPONSE FIELD */}
        {/* ================================================= */}

        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.82,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-[-35px]
            rounded-full
            border
            border-[#76B900]/20
            bg-[#76B900]/[0.025]
            blur-[2px]
          "
        />

        {/* ================================================= */}
        {/* GREEN MATERIAL SCAN */}
        {/* ================================================= */}

        <motion.div
          initial={{ x: "-120%" }}
          animate={{
            x: isHovered ? "120%" : "-120%",
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-30
            w-[35%]
            bg-gradient-to-r
            from-transparent
            via-[#76B900]/20
            to-transparent
            blur-xl
          "
        />

        {/* ================================================= */}
        {/* OUTER PHOTO FRAME */}
        {/* ================================================= */}

        <motion.div
          animate={{
            borderColor: isHovered
              ? "rgba(118,185,0,0.75)"
              : "rgba(118,185,0,0.42)",

            boxShadow: isHovered
              ? "0 0 100px rgba(118,185,0,0.28)"
              : "0 0 70px rgba(118,185,0,0.14)",
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            relative
            rounded-full
            border
            bg-[#090B09]
            p-2
          "
        >
          {/* ================================================= */}
          {/* INNER FRAME */}
          {/* ================================================= */}

          <div
            className="
              relative
              rounded-full
              border
              border-white/[0.09]
              bg-[#0D100D]
              p-1.5
              overflow-hidden
            "
          >
            {/* Technical grid */}

            <motion.div
              animate={{
                opacity: isHovered ? 0.18 : 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                pointer-events-none
                absolute
                inset-0
                z-20
                rounded-full
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(118,185,0,0.35) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(118,185,0,0.35) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "18px 18px",
              }}
            />

            {/* Image */}

            <motion.div
              animate={{
                scale: isHovered ? 1.035 : 1,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <Image
                src="/profile/profile.png"
                alt="Hardik Sonu"
                width={360}
                height={360}
                priority
                draggable={false}
                className="
                  h-[245px]
                  w-[245px]
                  select-none
                  rounded-full
                  object-cover
                  object-center
                  sm:h-[300px]
                  sm:w-[300px]
                  lg:h-[350px]
                  lg:w-[350px]
                "
              />
            </motion.div>

            {/* ================================================= */}
            {/* SCANNING LINE */}
            {/* ================================================= */}

            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
                top: isHovered ? ["8%", "92%", "8%"] : "8%",
              }}
              transition={{
                duration: 2.4,
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                left-[8%]
                right-[8%]
                z-30
                h-px
                bg-[#76B900]
                shadow-[0_0_12px_rgba(118,185,0,0.9)]
              "
            />
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* MICROSTRUCTURE LABEL */}
        {/* ================================================= */}

        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 8,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            pointer-events-none
            absolute
            -right-10
            top-1/2
            hidden
            translate-x-full
            -translate-y-1/2
            lg:block
          "
        >
          <div
            className="
              rounded-lg
              border
              border-[#76B900]/20
              bg-[#090B09]/90
              px-3
              py-2
              backdrop-blur-xl
            "
          >
            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-[#76B900]
              "
            >
              Surface Scan
            </p>

            <p
              className="
                mt-1
                font-mono
                text-[8px]
                tracking-[0.12em]
                text-neutral-600
              "
            >
              MICROSTRUCTURE / ACTIVE
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ===================================================== */}
      {/* ENGINEERING DATA MARKER */}
      {/* ===================================================== */}

      <motion.div
        animate={{
          opacity: isHovered ? 1 : [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: isHovered ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[18%]
          flex
          items-center
          gap-2
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#76B900]" />

        <span
          className="
            hidden
            font-mono
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-neutral-600
            sm:block
          "
        >
          Materials / 01
        </span>
      </motion.div>

      {/* ===================================================== */}
      {/* LOWER ENGINEERING MARKER */}
      {/* ===================================================== */}

      <motion.div
        animate={{
          opacity: isHovered ? 1 : [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: isHovered ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[17%]
          left-[6%]
          flex
          items-center
          gap-2
        "
      >
        <span
          className="
            hidden
            font-mono
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-neutral-600
            sm:block
          "
        >
          Semiconductor / 02
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-[#76B900]" />
      </motion.div>

      {/* ===================================================== */}
      {/* CENTER CROSSHAIR */}
      {/* ===================================================== */}

      <motion.div
        animate={{
          opacity: isHovered ? 0.35 : 0.08,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[390px]
          w-[390px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-white/[0.025]
          sm:h-[470px]
          sm:w-[470px]
        "
      />
    </motion.div>
  );
}