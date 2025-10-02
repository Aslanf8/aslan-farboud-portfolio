import * as React from "react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aslan Farboud | Full Stack & Mobile Developer",
  description:
    "Personal portfolio of Aslan Farboud, a full stack and mobile developer specializing in modern web technologies, iOS development, and AI integration. Building innovative solutions across platforms.",
  keywords: [
    "full stack developer",
    "mobile developer",
    "iOS developer",
    "web developer",
    "React Native",
    "Next.js",
    "AI integration",
    "LLM applications",
    "Aslan Farboud",
  ],
  creator: "Aslan Farboud",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  openGraph: {
    type: "website",
    url: "https://aslanfarboud.com",
    title: "Aslan Farboud | Full Stack & Mobile Developer",
    description:
      "Personal portfolio of Aslan Farboud, a full stack and mobile developer specializing in modern web technologies, iOS development, and AI integration. Building innovative solutions across platforms.",
    siteName: "Aslan Farboud Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: "Aslan Farboud Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aslan Farboud | Full Stack & Mobile Developer",
    description:
      "Personal portfolio of Aslan Farboud, a full stack and mobile developer specializing in modern web technologies, iOS development, and AI integration. Building innovative solutions across platforms.",
    creator: "@aslanfarboud",
    images: ["/twitter-image.jpg"], // Create this image for Twitter sharing
  },
  alternates: {
    canonical: "https://aslanfarboud.com",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Aslan Farboud",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export default function Home() {
  // Structure JSON-LD data for the home page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Aslan Farboud Portfolio",
    description:
      "Personal portfolio of Aslan Farboud, a full stack and mobile developer specializing in modern web technologies, iOS development, and AI integration. Building innovative solutions across platforms.",
    url: "https://aslanfarboud.com",
    mainEntity: {
      "@type": "Person",
      name: "Aslan Farboud",
      jobTitle: "Full Stack & Mobile Developer",
      url: "https://aslanfarboud.com",
      sameAs: [
        // "https://twitter.com/aslanfarboud",
        "https://github.com/Aslanf8",
        "https://www.linkedin.com/in/aslan-farboud-1b59ab224/",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Mobile Development",
        "iOS Development",
        "React Native",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AI Integration",
        "LLM Applications",
        "OpenAI",
        "Supabase",
        "AWS",
        "Cloud Infrastructure",
        "Mobile UI/UX",
        "Cross-platform Development",
      ],
    },
  };

  return (
    <>
      {/* Add JSON-LD structured data */}
      <Script
        id="home-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
          <MainNav />
        </header>
        <main className="flex-1">
          <HeroSection />
          <div className="relative">
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
