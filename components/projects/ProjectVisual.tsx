"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ProjectVisual({
  className = "",
}: {
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`
        relative
        w-full
        overflow-hidden
        border
        border-white/[0.08]
        bg-[#0D0F0D]
        ${className}
      `}
    >
      {/* Technical grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <svg
        viewBox="0 0 520 340"
        className="relative h-full w-full"
        role="img"
        aria-label="Semiconductor package cross-section showing silicon die, wire bonds, substrate, BGA solder joints and AI-assisted inspection."
      >
        <defs>
          <linearGradient
            id="packageScanGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#76B900"
              stopOpacity="0"
            />

            <stop
              offset="50%"
              stopColor="#76B900"
              stopOpacity="0.2"
            />

            <stop
              offset="100%"
              stopColor="#76B900"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* Vertical engineering pipeline */}

        <line
          x1="34"
          y1="56"
          x2="34"
          y2="272"
          stroke="#2A2F2A"
          strokeWidth="1"
        />

        {[
          { y: 56, label: "MATERIALS", active: false },
          { y: 128, label: "PACKAGING", active: false },
          { y: 200, label: "INSPECTION", active: true },
          { y: 272, label: "AI", active: true },
        ].map((stage) => (
          <g key={stage.label}>
            <circle
              cx="34"
              cy={stage.y}
              r="3"
              fill={stage.active ? "#76B900" : "#3A3F3A"}
            />

            <text
              x="34"
              y={stage.y + 34}
              textAnchor="middle"
              fontSize="8"
              letterSpacing="0.5"
              fontFamily="monospace"
              fill={stage.active ? "#76B900" : "#6B716B"}
              transform={`rotate(-90 34 ${stage.y + 34})`}
            >
              {stage.label}
            </text>
          </g>
        ))}

        {/* Semiconductor package */}

        <g>
          {/* Mold compound */}

          <rect
            x="130"
            y="58"
            width="260"
            height="66"
            rx="2"
            fill="#181A18"
            stroke="#2A2F2A"
          />

          {/* Silicon die */}

          <rect
            x="215"
            y="106"
            width="90"
            height="24"
            fill="#1C1F1C"
            stroke="#4A4F4A"
          />

          {/* Wire bonds */}

          <path
            d="M215 118 L165 158"
            stroke="#5A605A"
            strokeWidth="1.25"
            fill="none"
          />

          <path
            d="M305 118 L355 158"
            stroke="#5A605A"
            strokeWidth="1.25"
            fill="none"
          />

          {/* Moving signal */}

          {!shouldReduceMotion && (
            <motion.circle
              r="2"
              fill="#76B900"
              initial={{
                cx: 215,
                cy: 118,
                opacity: 0,
              }}
              animate={{
                cx: [215, 165],
                cy: [118, 158],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Substrate */}

          <rect
            x="130"
            y="158"
            width="260"
            height="26"
            fill="#161816"
            stroke="#2A2F2A"
          />

          {/* BGA solder joints */}

          {Array.from({ length: 7 }).map((_, index) => {
            const cx = 155 + index * 35;
            const isTarget = index === 4;

            return (
              <g key={cx}>
                <circle
                  cx={cx}
                  cy={200}
                  r={6.5}
                  fill={isTarget ? "#76B900" : "#20241F"}
                  stroke={isTarget ? "#9FE000" : "#3A3F3A"}
                  strokeWidth={isTarget ? 1.25 : 1}
                />

                {isTarget && !shouldReduceMotion && (
                  <motion.circle
                    cx={cx}
                    cy={200}
                    r={6.5}
                    fill="none"
                    stroke="#76B900"
                    strokeWidth={1}
                    initial={{
                      opacity: 0.45,
                      r: 6.5,
                    }}
                    animate={{
                      opacity: 0,
                      r: 17,
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
              </g>
            );
          })}

          {/* Inspection annotation */}

          <path
            d="M295 200 L295 232 L365 232"
            stroke="#76B900"
            strokeOpacity="0.5"
            strokeWidth="1"
            fill="none"
          />

          <text
            x="368"
            y="235"
            fontSize="9"
            letterSpacing="0.4"
            fontFamily="monospace"
            fill="#76B900"
          >
            AI INSPECTION
          </text>

          {/* PCB */}

          <line
            x1="110"
            y1="224"
            x2="410"
            y2="224"
            stroke="#2A2F2A"
            strokeWidth="1"
          />

          {/* Measurement line */}

          <g
            stroke="#3A3F3A"
            strokeWidth="1"
          >
            <line
              x1="130"
              y1="266"
              x2="390"
              y2="266"
            />

            <line
              x1="130"
              y1="261"
              x2="130"
              y2="271"
            />

            <line
              x1="390"
              y1="261"
              x2="390"
              y2="271"
            />
          </g>

          <text
            x="230"
            y="282"
            fontSize="8"
            letterSpacing="0.5"
            fontFamily="monospace"
            fill="#5C625C"
          >
            PACKAGE CROSS-SECTION
          </text>

          {/* Labels */}

          <text
            x="405"
            y="122"
            fontSize="10"
            letterSpacing="0.3"
            fontFamily="monospace"
            fill="#B7BDB6"
          >
            SILICON DIE
          </text>

          <text
            x="405"
            y="175"
            fontSize="10"
            letterSpacing="0.3"
            fontFamily="monospace"
            fill="#8B928C"
          >
            SUBSTRATE
          </text>

          <text
            x="405"
            y="204"
            fontSize="10"
            letterSpacing="0.3"
            fontFamily="monospace"
            fill="#8B928C"
          >
            SOLDER JOINT
          </text>

          <text
            x="405"
            y="242"
            fontSize="10"
            letterSpacing="0.3"
            fontFamily="monospace"
            fill="#5C625C"
          >
            PCB
          </text>

          {/* Inspection scan */}

          {!shouldReduceMotion && (
            <motion.rect
              x="130"
              y="52"
              width="260"
              height="34"
              fill="url(#packageScanGradient)"
              initial={{ y: 52 }}
              animate={{
                y: [52, 196, 52],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </g>
      </svg>
    </div>
  );
}