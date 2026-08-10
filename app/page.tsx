import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/projects/Projects";
import OtherProjects from "@/components/projects/OtherProjects";
import Certifications from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* =====================================================
            HERO
            Primary introduction and identity
            ===================================================== */}
        <section aria-label="Introduction">
          <Hero />
        </section>

        {/* =====================================================
            ABOUT
            ===================================================== */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-24"
        >
          <About />
        </section>

        {/* =====================================================
            TECHNICAL FOCUS
            ===================================================== */}
        <section
          id="technical-focus"
          aria-labelledby="technical-focus-heading"
          className="scroll-mt-24"
        >
          <Skills />
        </section>

        {/* =====================================================
            EXPERIENCE
            ===================================================== */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="scroll-mt-24"
        >
          <Experience />
        </section>

        {/* =====================================================
            EDUCATION
            ===================================================== */}
        <section
          id="education"
          aria-labelledby="education-heading"
          className="scroll-mt-24"
        >
          <Education />
        </section>

        {/* =====================================================
            PROJECTS
            ===================================================== */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="scroll-mt-24"
        >
          <Projects />
        </section>

        {/* =====================================================
            OTHER PROJECTS
            ===================================================== */}
        <section
          aria-label="Additional projects"
          className="scroll-mt-24"
        >
          <OtherProjects />
        </section>

        {/* =====================================================
            CERTIFICATIONS
            ===================================================== */}
        <section
          id="certifications"
          aria-labelledby="certifications-heading"
          className="scroll-mt-24"
        >
          <Certifications />
        </section>

        {/* =====================================================
            CONTACT
            ===================================================== */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-24"
        >
          <Contact />
        </section>
      </main>

      {/* Floating return-to-top control */}
      <BackToTop />

      <Footer />
    </>
  );
}