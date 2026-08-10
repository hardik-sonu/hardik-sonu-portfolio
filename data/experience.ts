export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Materials & Engineering Intern",
    organization: "PioPetro",
    period: "2026",
    description:
      "Engineering internship experience focused on applying technical knowledge in an industrial environment.",
    highlights: [
      "Engineering practice",
      "Industrial exposure",
      "Technical problem solving",
    ],
  },
  {
    role: "PowerPoint Designer Intern",
    organization: "Webgross Pvt. Ltd.",
    period: "2025–2026",
    description:
      "Designed professional presentations and visual communication materials for business and technical content.",
    highlights: [
      "50+ presentations",
      "Presentation design",
      "Visual communication",
    ],
  },
  {
    role: "Freelance Designer",
    organization: "Independent",
    period: "2024–Present",
    description:
      "Independent freelance work spanning presentation design, visual communication, and digital content.",
    highlights: [
      "2+ years experience",
      "Client projects",
      "Presentation design",
    ],
  },
];