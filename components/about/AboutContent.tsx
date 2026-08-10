export default function AboutContent() {
  return (
    <div className="mt-20 grid gap-10 lg:grid-cols-2">

      {/* ================= LEFT CARD ================= */}

      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8 backdrop-blur-xl">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#76B900]">
          Professional Summary
        </p>

        <h3 className="mt-5 text-3xl font-bold text-white">
          Building the Future of Intelligent Materials Engineering
        </h3>

        <p className="mt-6 leading-8 text-neutral-400">
          I am a Metallurgy & Materials Engineering student at the
          University of the Punjab with a strong passion for semiconductor
          packaging, artificial intelligence, computational materials,
          and modern manufacturing technologies.

          My objective is to combine materials science with AI to develop
          intelligent engineering solutions for the semiconductor industry,
          advanced manufacturing, and industrial automation.
        </p>

      </div>

      {/* ================= RIGHT CARD ================= */}

      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8 backdrop-blur-xl">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#76B900]">
          Education
        </p>

        <div className="mt-8 space-y-8">

          <div>
            <h4 className="text-2xl font-semibold text-white">
              University of the Punjab
            </h4>

            <p className="mt-2 text-neutral-400">
              BSc Metallurgy & Materials Engineering
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              2025 — Present
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-neutral-950 p-5">
              <p className="text-sm text-neutral-400">
                Current GPA
              </p>

              <h5 className="mt-2 text-3xl font-bold text-[#76B900]">
                3.8
              </h5>
            </div>

            <div className="rounded-2xl bg-neutral-950 p-5">
              <p className="text-sm text-neutral-400">
                Certificates
              </p>

              <h5 className="mt-2 text-3xl font-bold text-[#76B900]">
                50+
              </h5>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}