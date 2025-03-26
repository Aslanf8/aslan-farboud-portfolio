import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

// Project data (in a real app, this would come from a database or CMS)
export const projects = [
  {
    id: "tfi-group",
    title: "TFI Group AI Platform",
    description:
      "AI-powered platform for R&D Tax Relief, Land Remediation, and general AI agent workflows, streamlining tax consultations and document management across service lines.",
    longDescription: `
      Led the development of an AI-powered platform for R&D Tax Relief, Land Remediation, and general AI agent workflows, 
      streamlining tax consultations and document management across service lines. Reduced project costs from hundreds 
      of pounds to under £5 using AWS (Lambda, S3, SNS, Textract, ECR), Supabase, Pinecone, and OpenAI (GPT4o, 
      Text-to-Speech, Speech-to-Text).
      
      Built with Next.js 15+, TypeScript, Tailwind CSS, and React Query, featuring MFA, role-based access, and streaming APIs.
    `,
    image: "/tfi-logo.svg",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "radix",
      "AWS",
      "Supabase",
      "OpenAI",
      "trigger.dev",
      "deepgram",
      "LLM",
      "TTS",
    ],
    features: [
      "AI-powered document analysis",
      "Role-based access control",
      "Multi-factor authentication",
      "Real-time streaming APIs",
      "Document management system",
    ],
    tech: [
      "Next.js 15+",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "AWS Lambda",
      "AWS S3",
      "AWS SNS",
      "AWS Textract",
      "AWS ECR",
      "Supabase",
      "Pinecone",
      "OpenAI GPT-4o",
      "OpenAI Text-to-Speech",
      "OpenAI Speech-to-Text",
    ],
    live: "https://example.com/tfi",
    github: "",
  },
  {
    id: "daily-vocab",
    title: "DailyVocab",
    description:
      "A IOS mobile vocabulary app that uses LLM to generate a new word daily, featuring pronunciation, definitions, etymology, and personalized tracking to learn obscure english words.",
    longDescription: `
      Developed DailyVocab, a feature-rich mobile application built with React Native (Expo) that helps users expand 
      their vocabulary by learning a new word each day. Implemented comprehensive word details including pronunciation 
      (audio + IPA), definitions, usage examples, etymology, and synonyms & antonyms.
      
      Created an engaging user experience with smooth animations, gradient backgrounds, and responsive design for all 
      screen sizes. Integrated Supabase for backend services, Expo Notifications for daily reminders, and AsyncStorage 
      for local data persistence. Designed a user-friendly interface with word history tracking, profile statistics, 
      and infinite scrolling for seamless content browsing.
    `,
    image: "/daily-word-logo.png",
    tags: ["React Native", "Expo", "Supabase", "IOS", "LLM", "AWS cron"],
    features: [
      "Daily word with complete details",
      "Word history with expandable cards",
      "Profile with streak tracking",
      "Push notifications reminders",
      "Animated transitions and UI elements",
      "Audio pronunciation playback",
      "Infinite scrolling word history",
    ],
    tech: [
      "React Native (Expo)",
      "React Context API",
      "React Navigation",
      "Expo AV",
      "Expo Notifications",
      "Supabase",
      "React Native Animated API",
      "AsyncStorage",
      "Dictionary API Integration",
    ],
    live: "https://apps.apple.com/ca/app/dailyword/id6627334788",
    github: "",
    appStore: "https://apps.apple.com/ca/app/dailyword/id6627334788",
  },
  {
    id: "storytime",
    title: "StoryTime",
    description:
      "A social platform for creating (using LLMs) and sharing stories with features for story creation, friend connections, and personalized feeds. Coming soon - pending Grok 3 API release.",
    longDescription: `
      Developed StoryTime, a comprehensive mobile story-sharing application built with React Native (Expo) and TypeScript. 
      Created a robust social platform featuring AI-assisted story generation, audio narration, and personalized content discovery.
      
      Implemented a sophisticated audio system with chapter-based playback, background audio support, and progress tracking. 
      Integrated a friend system with request management and notifications. Built a custom theme system with dark/light modes 
      and designed a library of reusable UI components. Used Supabase for authentication, database, and real-time features.
      
      Note: StoryTime is currently in development, with release pending the availability of the Grok 3 API, which testing has shown 
      to be superior for AI story generation capabilities.
    `,
    image: "/storytime-logo.png",
    tags: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "IOS",
      "LLM",
      "TTS",
      "trigger.dev",
    ],
    features: [
      "AI-assisted story generation",
      "Chapter-based audio playback",
      "Friend system with notifications",
      "Personalized content feed",
      "Custom theme system with dark mode",
      "Real-time updates and interactions",
    ],
    tech: [
      "React Native (Expo)",
      "TypeScript",
      "Supabase PostgreSQL",
      "Supabase Storage",
      "Expo AV",
      "Expo Router",
      "Context API",
      "React Native Reanimated",
      "React Native Gesture Handler",
    ],
    live: "",
    github: "",
    comingSoon: "Releasing after Grok 3 API availability",
  },
  {
    id: "briefbuddy",
    title: "BriefBuddy",
    description:
      "LLM-powered note-taking platform, scaled from a web app to a fully functional iOS app. Includes in-app purchases and unique features for enhanced note-taking.",
    longDescription: `
      Founded BriefBuddy, an LLM-powered note-taking platform, scaling it from a web app to a fully functional iOS app 
      (apple.co/49xQYCf; briefbuddy.ca). Single-handedly developed the end-to-end solution using JavaScript, React, Node.js, 
      Python, and Expo for app development/deployment, with Apple Connect (TestFlight, Transporter) for distribution.
      
      Grew the user base to 100+ and generated revenue via in-app purchases. Secured the $5,000 Waterloo Conrad School 
      of Business Entrepreneurship Award for operational excellence.
    `,
    image: "/briefbuddy-logo.png",
    tags: ["React", "Node.js", "Expo", "IOS", "LLM", "AWS", "Supabase"],
    features: [
      "LLM-powered note summarization",
      "Cross-platform functionality",
      "In-app purchases",
      "iOS app available on App Store",
      "Web interface",
    ],
    tech: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "Expo",
      "Apple Connect",
      "TestFlight",
      "Transporter",
    ],
    live: "https://briefbuddy.ca",
    github: "",
    appStore: "https://apple.co/49xQYCf",
  },
  {
    id: "traceit",
    title: "TraceIt",
    description:
      "Food traceability system ensuring CFIA compliance by tracking ingredients, production, and sales across the food lifecycle. ",
    longDescription: `
      Developed TraceIt (traceit.ca), a comprehensive food traceability system for West Coast Kitchen, ensuring CFIA compliance 
      by tracking ingredients, production, and sales across the food lifecycle. Built a scalable solution using Next.js 15, 
      React 19, TypeScript, Tailwind CSS, and Tanstack React Query for efficient data management, with Supabase handling 
      authentication, real-time database updates, and storage.
      
      Integrated QR code scanning for rapid product identification, Excel-exportable traceability reports, and secure 
      authentication with Supabase Auth. Earned federal food inspector approval through rigorous system validation and 
      query resolution.
    `,
    image: "/wck-logo.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "shadcn/ui",
      "radix",
      "QR Code & Scanning",
    ],
    features: [
      "CFIA compliant food traceability",
      "QR code scanning",
      "Exportable reports",
      "Ingredient tracking",
      "Production monitoring",
      "Sales tracking",
    ],
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Tanstack React Query",
      "Supabase Auth",
      "Supabase Database",
      "Supabase Storage",
    ],
    live: "https://traceit.ca",
    github: "",
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  // Check if this is a proprietary client project
  const isClientProject =
    project.id === "tfi-group" || project.id === "traceit";

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container max-w-4xl py-16 md:py-24 px-4 mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="group transition-all duration-200 hover:translate-x-[-2px]"
            >
              <Link href="/projects">
                <ChevronLeft className="h-4 w-4 mr-1 group-hover:transform group-hover:translate-x-[-2px] transition-transform" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Project Header with Image */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-full max-w-[250px] h-[250px] mb-8 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg transition-transform duration-500 hover:scale-105">
              {project.image ? (
                <div className="relative h-full w-full flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={200}
                    className="object-contain transition-all duration-700 hover:scale-110"
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-200/50 dark:bg-slate-800/50">
                  <span className="text-xl font-medium">{project.title}</span>
                </div>
              )}
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {project.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-2 mt-4 mb-6">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-3 py-1 text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl">
              {project.description}
            </p>

            {isClientProject && (
              <div className="mt-4 px-6 py-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 max-w-2xl">
                <p className="text-sm font-medium">
                  This is a proprietary client project. Live demo access is
                  restricted due to confidentiality agreements.
                </p>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 gap-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-12 p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm">
                <p className="whitespace-pre-line text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="inline-block w-2 h-8 bg-primary mr-3 rounded-full"></span>
                    Features
                  </h2>
                  <ul className="space-y-3 list-none pl-0">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="min-w-5 min-h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="inline-block w-2 h-8 bg-primary mr-3 rounded-full"></span>
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="px-3 py-1.5 text-sm bg-background/50 hover:bg-primary/10 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-12">
                {isClientProject ? (
                  <Button
                    variant="outline"
                    size="lg"
                    className="cursor-not-allowed opacity-70"
                    disabled
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Client Project (Access Restricted)
                  </Button>
                ) : project.live ? (
                  <Button
                    size="lg"
                    className="group transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-y-[-1px] group-hover:translate-x-[1px] transition-transform duration-300" />
                      Visit Live Site
                    </a>
                  </Button>
                ) : project.comingSoon ? (
                  <div className="flex items-center">
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-md border-primary/30 bg-primary/5"
                    >
                      Coming Soon: {project.comingSoon}
                    </Badge>
                  </div>
                ) : null}
                {project.github && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="group transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      View Source
                    </a>
                  </Button>
                )}
                {project.appStore && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="group transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300"
                      >
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                        <path d="M10 2c1 .5 2 2 2 5" />
                      </svg>
                      App Store
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
