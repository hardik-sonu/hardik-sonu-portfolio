"use client";

import { motion } from "framer-motion";
import ProjectVisual from "./ProjectVisual";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  badge?: string;
  href?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  badge = "Featured Project",
  href,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.12]
        bg-[#111411]
        p-6
        shadow-[0_25px_100px_rgba(0,0,0,0.25)]
        transition-all
        duration-500
        hover:border-[#76B900]/30
        hover:shadow-[0_30px_120px_rgba(118,185,0,0.08)]
        sm:p-8
        lg:p-10
      "
    >
      {/* Green top accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-48
          bg-gradient-to-r
          from-[#76B900]
          to-transparent
        "
      />

      {/* Subtle corner glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-[#76B900]/[0.045]
          blur-[80px]
        "
      />

      {/* Project number */}

      <div
        className="
          absolute
          right-8
          top-7
          font-mono
          text-[10px]
          tracking-[0.2em]
          text-neutral-600
          lg:right-10
          lg:top-9
        "
      >
        01 / PROJECT
      </div>

      <div
        className="
          relative
          grid
          grid-cols-1
          gap-10
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-14
          lg:items-center
        "
      >
        {/* Visual */}

        <div
          className="
            relative
            min-h-[320px]
            overflow-hidden
            rounded-xl
            border
            border-white/[0.09]
            bg-[#0B0E0B]
          "
        >
          <ProjectVisual className="h-full min-h-[320px]" />
        </div>

        {/* Information */}

        <div className="relative">

          {/* Badge */}

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#76B900] shadow-[0_0_12px_rgba(118,185,0,0.8)]" />

            <span
              className="
                font-mono
                text-[11px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#76B900]
              "
            >
              {badge}
            </span>
          </div>

          {/* Title */}

          <h3
            className="
              mt-5
              text-4xl
              font-bold
              tracking-[-0.045em]
              text-white
              sm:text-5xl
            "
          >
            {title}
          </h3>

          {/* Subtitle */}

          <p
            className="
              mt-4
              max-w-xl
              text-base
              font-medium
              leading-7
              text-neutral-300
            "
          >
            {subtitle}
          </p>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-neutral-500
              sm:text-base
            "
          >
            {description}
          </p>

          {/* Tags */}

          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-white/[0.09]
                  bg-white/[0.02]
                  px-3.5
                  py-1.5
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-wide
                  text-neutral-400
                  transition-all
                  duration-300
                  group-hover:border-[#76B900]/20
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Optional link */}

          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[#76B900]
                transition-all
                duration-300
                hover:gap-3
                hover:text-[#9FE000]
              "
            >
              View project
              <span aria-hidden="true">→</span>
            </a>
          )}

        </div>
      </div>
    </motion.article>
  );
}