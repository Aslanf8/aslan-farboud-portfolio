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
      "AI-powered platform for R&D Tax Relief, Land Remediation, and general AI agent workflows, streamlining tax consultations and document management across service lines.",
    image: "/tfi-logo.svg",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AWS",
      "Supabase",
      "OpenAI",
    ],
    link: "/projects/tfi-group",
    live: "https://example.com/tfi",
    github: "",
  },
  {
    id: "daily-vocab",
    title: "DailyVocab",
    description:
      "A comprehensive mobile vocabulary app that delivers a new word daily, featuring pronunciation, definitions, etymology, and personalized tracking to enhance language learning.",
    image: "/daily-word-logo.png",
    tags: ["React Native", "Expo", "Supabase", "Mobile", "API Integration"],
    link: "/projects/daily-vocab",
    live: "https://apps.apple.com/ca/app/dailyword/id6627334788",
    github: "",
  },
  {
    id: "storytime",
    title: "StoryTime",
    description:
      "A social platform for sharing and listening to stories with features for story creation, friend connections, and personalized feeds. Coming soon - pending Grok 3 API release.",
    image: "/storytime-logo.png",
    tags: ["React Native", "TypeScript", "Expo", "Supabase", "Audio"],
    link: "/projects/storytime",
    live: "",
    github: "",
    comingSoon: true,
  },
  {
    id: "briefbuddy",
    title: "BriefBuddy",
    description:
      "LLM-powered note-taking platform, scaled from a web app to a fully functional iOS app. Includes in-app purchases and unique features for enhanced note-taking.",
    image: "/briefbuddy-logo.png",
    tags: ["React", "Node.js", "Expo", "iOS", "LLM"],
    link: "/projects/brief-buddy",
    live: "https://briefbuddy.ca",
    github: "",
  },
  {
    id: "traceit",
    title: "TraceIt",
    description:
      "Comprehensive food traceability system ensuring CFIA compliance by tracking ingredients, production, and sales across the food lifecycle.",
    image: "/wck-logo.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    link: "/projects/trace-it",
    live: "https://traceit.ca",
    github: "",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-12 md:py-32">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A selection of projects I&apos;ve built and contributed to.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mt-12">
          <h3 className="text-xl font-semibold mb-6">Client Projects</h3>
          <p className="text-gray-500 mb-6">
            Businesses that contracted me to develop custom software solutions.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-12">
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
                  <div className="relative h-[200px] overflow-hidden">
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
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
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
                        <Badge variant="outline" className="ml-2">
                          Coming Soon
                        </Badge>
                      ) : null}
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>

          <h3 className="text-xl font-semibold mb-6">Personal Projects</h3>
          <p className="text-gray-500 mb-6">
            Projects built out of curiosity and personal interest.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="relative h-[200px] overflow-hidden">
                    {project.image ? (
                      <div className="relative h-full w-full flex items-center justify-center p-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
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
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
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
                        <Badge variant="outline" className="ml-2">
                          Coming Soon
                        </Badge>
                      ) : null}
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
