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
  title: "Aslan Farboud | Web Developer & Designer",
  description:
    "Personal portfolio of Aslan Farboud, a web developer and designer specializing in modern web technologies and user experience.",
  keywords: [
    "web developer",
    "designer",
    "portfolio",
    "frontend",
    "backend",
    "full stack",
    "Aslan Farboud",
  ],
  creator: "Aslan Farboud",
  openGraph: {
    type: "website",
    url: "https://aslanfarboud.com",
    title: "Aslan Farboud | Web Developer & Designer",
    description:
      "Personal portfolio of Aslan Farboud, a web developer and designer specializing in modern web technologies and user experience.",
    siteName: "Aslan Farboud Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aslan Farboud | Web Developer & Designer",
    description:
      "Personal portfolio of Aslan Farboud, a web developer and designer specializing in modern web technologies and user experience.",
    creator: "@aslanfarboud",
  },
  alternates: {
    canonical: "https://aslanfarboud.com",
  },
};

export default function Home() {
  // Structure JSON-LD data for the home page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Aslan Farboud Portfolio",
    description:
      "Personal portfolio of Aslan Farboud, a web developer and designer specializing in modern web technologies and user experience.",
    url: "https://aslanfarboud.com",
    mainEntity: {
      "@type": "Person",
      name: "Aslan Farboud",
      jobTitle: "Web Developer & Designer",
      url: "https://aslanfarboud.com",
      sameAs: [
        "https://twitter.com/aslanfarboud",
        "https://github.com/aslanfarboud",
        "https://linkedin.com/in/aslanfarboud",
      ],
      knowsAbout: [
        "Web Development",
        "UX Design",
        "Frontend Development",
        "React",
        "Next.js",
        "TypeScript",
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
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <MainNav />
        </header>
        <main className="flex-1">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
