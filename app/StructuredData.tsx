const SITE_URL = "https://example.com";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Hardik Sonu",
        url: SITE_URL,
        jobTitle: "Metallurgy & Materials Engineering Student",
        description:
          "Metallurgy & Materials Engineering student working at the intersection of materials science, semiconductor technology, computational engineering, and artificial intelligence.",
        knowsAbout: [
          "Metallurgy",
          "Materials Engineering",
          "Materials Science",
          "Semiconductor Engineering",
          "Semiconductor Packaging",
          "Materials Informatics",
          "Materials Data Science",
          "Computational Materials Science",
          "Artificial Intelligence",
          "AI for Materials Science",
        ],
      },

      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Hardik Sonu",
        description:
          "Personal engineering portfolio of Hardik Sonu.",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
        inLanguage: "en-US",
      },

      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Hardik Sonu | Metallurgy & Materials Engineer",
        description:
          "Portfolio of Hardik Sonu, a Metallurgy & Materials Engineering student focused on materials science, semiconductor technology, computational engineering, and artificial intelligence.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#person`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}