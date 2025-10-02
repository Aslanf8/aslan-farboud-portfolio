import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  // Check if this is a proprietary client project
  const isClientProject =
    project.id === "tfi-group" || project.id === "traceit";

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <MainNav />
      </header>
      <main className="flex-1 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-4xl py-8 sm:py-12 md:py-16 lg:py-24 px-4 mx-auto">
          <div className="flex items-center space-x-2 mb-6 sm:mb-12">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="group transition-all duration-200 hover:translate-x-[-2px] text-xs sm:text-sm hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Link href="/projects">
                <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 group-hover:transform group-hover:translate-x-[-2px] transition-transform" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Project Header with Image */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-16">
            <div className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[250px] h-[180px] sm:h-[220px] md:h-[250px] mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-border/50 hover:border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm">
              {project.image ? (
                <div className="relative h-full w-full flex items-center justify-center p-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={180}
                    height={180}
                    className="object-contain transition-all duration-700 hover:scale-110"
                    sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 250px"
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-lg sm:text-xl font-medium">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {project.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 mb-4 sm:mb-6">
              {project.tags.slice(0, 8).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 8 && (
                <Badge
                  variant="outline"
                  className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
                >
                  +{project.tags.length - 8} more
                </Badge>
              )}
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl">
              {project.description}
            </p>

            {isClientProject && (
              <div className="mt-4 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-yellow-500/10 border-2 border-yellow-500/30 hover:border-yellow-500/50 text-yellow-600 dark:text-yellow-400 max-w-2xl shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
                <p className="text-xs sm:text-sm font-medium">
                  This is a proprietary client project. Live demo access is
                  restricted due to confidentiality agreements.
                </p>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 gap-6 sm:gap-12">
            <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none">
              <div className="mb-6 sm:mb-12 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/50 hover:border-blue-500/30 dark:hover:border-blue-400/30 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300">
                <p className="whitespace-pre-line text-sm sm:text-base md:text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-12">
                <div className="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/50 hover:border-purple-500/50 dark:hover:border-purple-400/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 transition-all duration-300 hover:-translate-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                    <span className="inline-block w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-purple-600 to-pink-600 mr-2 sm:mr-3 rounded-full"></span>
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Features
                    </span>
                  </h2>
                  <ul className="space-y-2 sm:space-y-3 list-none pl-0">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="min-w-4 min-h-4 sm:min-w-5 sm:min-h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 sm:mr-3 mt-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                    <span className="inline-block w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-blue-600 to-purple-600 mr-2 sm:mr-3 rounded-full"></span>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Technologies
                    </span>
                  </h2>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-background/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
                {isClientProject ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm cursor-not-allowed opacity-70 w-full sm:w-auto border-2"
                    disabled
                  >
                    <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Client Project (Access Restricted)
                  </Button>
                ) : project.live ? (
                  <Button
                    size="sm"
                    className="text-xs sm:text-sm group transition-all duration-300 hover:scale-105 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-y-[-1px] group-hover:translate-x-[1px] transition-transform duration-300" />
                      Visit Live Site
                    </a>
                  </Button>
                ) : project.comingSoon ? (
                  <div className="flex items-center w-full sm:w-auto">
                    <Badge
                      variant="outline"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-md border-2 border-purple-500/30 bg-purple-500/10 hover:border-purple-500/50 w-full sm:w-auto text-center transition-colors"
                    >
                      Coming Soon: {project.comingSoon}
                    </Badge>
                  </div>
                ) : null}
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm group transition-all duration-300 hover:scale-105 w-full sm:w-auto border-2 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-12 transition-transform duration-300" />
                      View Source
                    </a>
                  </Button>
                )}
                {project.appStore && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm group transition-all duration-300 hover:scale-105 w-full sm:w-auto border-2 hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400"
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
                        className="mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300"
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
