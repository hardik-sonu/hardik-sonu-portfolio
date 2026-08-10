"use client";

import { motion } from "framer-motion";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "PackageGuard AI",
    subtitle: "AI-Powered Semiconductor Packaging Reliability Platform",
    description:
      "An applied materials engineering project exploring how AI can help identify packaging defects and reliability risks in semiconductor devices.",
    tags: [
      "Materials Engineering",
      "Semiconductor Packaging",
      "AI",
      "Reliability",
    ],
    badge: "Featured Project",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        px-6
        py-28
        sm:py-32
        lg:px-16
        lg:py-36
      "
    >
      {/* Ambient background */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#76B900]/[0.035]
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1350px]">

        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#76B900]" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#76B900]
              "
            >
              Selected Work
            </span>
          </div>

          <h2
            className="
              mt-6
              text-5xl
              font-bold
              tracking-[-0.045em]
              text-white
              sm:text-6xl
            "
          >
            Projects
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-neutral-400
              sm:text-lg
            "
          >
            Where materials engineering, semiconductor technology, and AI
            come together.
          </p>
        </motion.div>

        {/* Featured project */}

        <div className="mt-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}