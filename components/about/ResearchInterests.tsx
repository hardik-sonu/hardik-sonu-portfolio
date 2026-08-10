const interests = [
  {
    title: "Semiconductor Packaging",
    description: "AI-powered inspection, defect analysis and package reliability.",
  },
  {
    title: "Artificial Intelligence",
    description: "Deep learning solutions for engineering and manufacturing.",
  },
  {
    title: "Computational Materials",
    description: "Data-driven materials discovery and property prediction.",
  },
  {
    title: "Materials Characterization",
    description: "Microstructure analysis and performance evaluation.",
  },
  {
    title: "Reliability Engineering",
    description: "Failure analysis, durability and lifecycle assessment.",
  },
  {
    title: "Advanced Manufacturing",
    description: "Smart manufacturing with automation and AI integration.",
  },
];

export default function ResearchInterests() {
  return (
    <section className="mt-24">

      {/* Heading */}

      <div className="mb-12">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#76B900]">
          Research Interests
        </p>

        <h3 className="mt-4 text-4xl font-bold text-white">
          Areas I Am Passionate About
        </h3>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {interests.map((item) => (
          <div
            key={item.title}
            className="
              group
              rounded-3xl
              border
              border-neutral-800
              bg-neutral-900/60
              p-7
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#76B900]
              hover:shadow-xl
              hover:shadow-[#76B900]/10
            "
          >

            {/* Icon */}

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#76B900]/15
                text-2xl
              "
            >
              ⚙️
            </div>

            {/* Title */}

            <h4 className="mt-6 text-2xl font-semibold text-white">
              {item.title}
            </h4>

            {/* Description */}

            <p className="mt-4 leading-7 text-neutral-400">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}