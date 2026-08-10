export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Materials Engineering",
    description: "Core engineering foundation",
    skills: [
      "Metallurgy",
      "Materials Science",
      "Materials Characterization",
      "Materials Processing",
      "Microstructure–Property Relationships",
    ],
  },
  {
    title: "Semiconductor & AI",
    description: "Emerging technical focus",
    skills: [
      "Semiconductor Packaging",
      "Packaging Reliability",
      "Defect Analysis",
      "Artificial Intelligence",
      "Machine Learning",
      "Computational Materials",
    ],
  },
  {
    title: "Engineering Computing",
    description: "Tools for technical problem solving",
    skills: [
      "Python",
      "MATLAB",
      "C++",
      "Data Analytics",
      "FreeCAD",
    ],
  },
  {
    title: "Professional Tools",
    description: "Technical communication & design",
    skills: [
      "Microsoft Office",
      "PowerPoint",
      "Google Workspace",
      "Canva",
      "Presentation Design",
    ],
  },
];