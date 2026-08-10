import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hardik Sonu | Metallurgy & Materials Engineering",
    short_name: "Hardik Sonu",
    description:
      "Personal portfolio of Hardik Sonu, a Metallurgy & Materials Engineering student exploring materials science, semiconductors, computational engineering, and AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#080A08",
    theme_color: "#080A08",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}