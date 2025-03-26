import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";

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
      "AWS",
      "Supabase",
      "OpenAI",
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
    id: "brief-buddy",
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
    tags: ["React", "Node.js", "Expo", "iOS", "LLM"],
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
    id: "trace-it",
    title: "TraceIt",
    description:
      "Comprehensive food traceability system ensuring CFIA compliance by tracking ingredients, production, and sales across the food lifecycle.",
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
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
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

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container max-w-5xl py-12 md:py-16">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/projects">
                <ChevronLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {project.title}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 text-lg leading-8">
                <p>{project.longDescription}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold">Features</h2>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold">Technologies Used</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                {project.live && (
                  <Button asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Site
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                )}
                {project.appStore && (
                  <Button variant="outline" asChild>
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
                        className="mr-2 h-4 w-4"
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

            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden border-2">
                {/* Replace with actual image when available */}
                <div className="aspect-w-1 aspect-h-1 bg-slate-200 dark:bg-slate-800 flex items-center justify-center p-12">
                  <span className="text-xl font-medium">
                    {project.title} Image
                  </span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image 
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
