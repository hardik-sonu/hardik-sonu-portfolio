import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ============================================================
   SITE CONFIGURATION
   ============================================================ */

const SITE_URL = "https://hardik-sonu-portfolio.vercel.app";

const SITE_NAME = "Hardik Sonu";

const SITE_TITLE =
  "Hardik Sonu | Metallurgy & Materials Engineer";

const SITE_DESCRIPTION =
  "Hardik Sonu is a Metallurgy & Materials Engineering student working at the intersection of materials science, semiconductor technology, computational engineering, and artificial intelligence.";

/* ============================================================
   SEO METADATA
   ============================================================ */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Hardik Sonu",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Hardik Sonu",
    "Hardik Sonu Metallurgy",
    "Hardik Sonu Materials Engineer",
    "Metallurgy and Materials Engineering",
    "Metallurgy Engineering",
    "Materials Engineering",
    "Materials Science",
    "Materials Engineering Student",
    "Semiconductor Engineering",
    "Semiconductor Packaging",
    "Materials Informatics",
    "Materials Data Science",
    "Computational Materials Science",
    "Artificial Intelligence",
    "AI for Materials Science",
    "Materials Science and AI",
    "PackageGuard AI",
  ],

  authors: [
    {
      name: SITE_NAME,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,

  category: "technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* ==========================================================
     OPEN GRAPH
     ========================================================== */

  openGraph: {
    type: "website",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hardik Sonu — Metallurgy & Materials Engineering",
      },
    ],
  },

  /* ==========================================================
     TWITTER / X
     ========================================================== */

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },

  /* ==========================================================
     ICONS
     ========================================================== */

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* ============================================================
   ROOT LAYOUT
   ============================================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <StructuredData />

        {children}
      </body>
    </html>
  );
}