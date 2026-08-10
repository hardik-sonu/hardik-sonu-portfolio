export default function AboutHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      {/* Section Label */}

      <div className="inline-flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-900/60 px-5 py-2 backdrop-blur-xl">

        <span className="h-2.5 w-2.5 rounded-full bg-[#76B900]" />

        <span className="text-sm font-medium tracking-wide text-neutral-300">
          About Me
        </span>

      </div>

      {/* Heading */}

      <h2
        className="
          mt-8
          text-5xl
          font-extrabold
          tracking-tight
          text-white
          lg:text-6xl
        "
      >
        Engineering the Future with
        <span className="block text-[#76B900]">
          Materials & Artificial Intelligence
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-neutral-400
        "
      >
        I am a Metallurgy & Materials Engineering student focused on
        semiconductor packaging, AI-driven materials engineering, and
        computational approaches for solving modern engineering challenges.
      </p>

    </div>
  );
}