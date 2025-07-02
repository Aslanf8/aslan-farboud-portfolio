"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
const projects = [
  {
    id: "tfi-group",
    title: "TFI Group AI Platform",
    description:
      "AI-powered platform for tax consultancy featuring multi-modal AI assistants, advanced document processing pipelines, and sophisticated LLM orchestration. Built comprehensive AI workflows including Tina AI (conversational AI with vector search), Dan AI (voice-enabled tax consultant), automated document analysis with parallel processing, and schema-driven AI configuration systems.",
    image: "/tfi-logo.svg",
    tags: [
      "Next.js",
      "TypeScript",
      "Multi-Modal AI",
      "LLM Orchestration",
      "Vector Search",
      "RAG",
      "OpenAI GPT-4o/O1",
      "Voice AI",
      "Document Processing",
      "AI Workflows",
      "Enterprise Auth",
      "Supabase",
    ],
    link: "/projects/tfi-group",
    live: "https://example.com/tfi",
    github: "",
  },
  {
    id: "daily-vocab",
    title: "DailyVocab",
    description:
      "A IOS mobile vocabulary app that uses LLM to generate a new word daily, featuring pronunciation, definitions, etymology, and personalized tracking to learn obscure english words.",
    image: "/daily-word-logo.png",
    tags: ["React Native", "Expo", "Supabase", "IOS", "LLM", "AWS cron"],
    link: "/projects/daily-vocab",
    live: "https://apps.apple.com/ca/app/dailyword/id6627334788",
    github: "",
  },
  {
    id: "storytime",
    title: "StoryTime",
    description:
      "A social platform for creating (using LLMs) and sharing stories with features for story creation, friend connections, and personalized feeds. Coming soon - pending Grok 3 API release.",
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
    link: "/projects/storytime",
    live: "https://storytime-ruby.vercel.app",
    github: "",
    comingSoon: true,
  },
  {
    id: "briefbuddy",
    title: "BriefBuddy",
    description:
      "LLM-powered note-taking platform, scaled from a web app to a fully functional iOS app. Includes in-app purchases and unique features for enhanced note-taking.",
    image: "/briefbuddy-logo.png",
    tags: ["React", "Node.js", "Expo", "IOS", "LLM", "AWS", "Supabase"],
    link: "/projects/briefbuddy",
    live: "https://briefbuddy.ca",
    github: "",
  },
  {
    id: "traceit",
    title: "TraceIt",
    description:
      "Food traceability system ensuring CFIA compliance by tracking ingredients, production, and sales across the food lifecycle. ",
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
    link: "/projects/traceit",
    live: "https://traceit.ca",
    github: "",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A selection of projects I&apos;ve built.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mt-8 sm:mt-12">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            Client Projects
          </h3>
          <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">
            Businesses that contracted me to develop custom software solutions.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 mb-8 sm:mb-12">
            {projects
              .filter(
                (project) =>
                  project.id === "tfi-group" || project.id === "traceit"
              )
              .map((project) => (
                <Card
                  key={project.id}
                  className="h-full flex flex-col overflow-hidden border-2 transition-colors hover:border-primary"
                >
                  <div className="relative h-[150px] sm:h-[200px] overflow-hidden">
                    {project.image ? (
                      <div className="relative h-full w-full flex items-center justify-center p-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={250}
                          height={350}
                          className="object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-800">
                        <span className="text-lg font-medium">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base mt-1">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                      {project.tags.slice(0, 6).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs sm:text-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 6 && (
                        <Badge variant="outline" className="text-xs sm:text-sm">
                          +{project.tags.length - 6} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 sm:p-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.link}>View Details</Link>
                    </Button>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button size="icon" variant="ghost" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        </Button>
                      )}
                      {project.live && project.id !== "tfi-group" ? (
                        <Button size="icon" variant="ghost" asChild>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Live Demo</span>
                          </a>
                        </Button>
                      ) : project.comingSoon ? (
                        <Badge variant="outline" className="ml-2">
                          Coming Soon
                        </Badge>
                      ) : null}
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>

          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            Personal Projects
          </h3>
          <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">
            Projects built out of curiosity and personal interest.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter(
                (project) =>
                  project.id !== "tfi-group" && project.id !== "traceit"
              )
              .map((project) => (
                <Card
                  key={project.id}
                  className="h-full flex flex-col overflow-hidden border-2 transition-colors hover:border-primary"
                >
                  <div className="relative h-[150px] sm:h-[200px] overflow-hidden">
                    {project.image ? (
                      <div className="relative h-full w-full flex items-center justify-center p-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-800">
                        <span className="text-lg font-medium">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base mt-1">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                      {project.tags.slice(0, 5).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs sm:text-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 5 && (
                        <Badge variant="outline" className="text-xs sm:text-sm">
                          +{project.tags.length - 5} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 sm:p-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.link}>View Details</Link>
                    </Button>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button size="icon" variant="ghost" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        </Button>
                      )}
                      {project.live ? (
                        <Button size="icon" variant="ghost" asChild>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Live Demo</span>
                          </a>
                        </Button>
                      ) : project.comingSoon ? (
                        <Badge
                          variant="outline"
                          className="ml-2 text-xs sm:text-sm"
                        >
                          Coming Soon
                        </Badge>
                      ) : null}
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-12">
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
