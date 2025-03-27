import * as React from "react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
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

// Import project data from the dynamic route
import { projects } from "./[slug]/page";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 sm:py-12 md:py-16 mx-auto flex flex-col items-center">
          <div className="space-y-3 sm:space-y-4 text-center w-full">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              My Projects
            </h1>
            <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground">
              A collection of my work across various technologies and domains.
            </p>
          </div>

          <div className="w-full max-w-[1200px] mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-6">
              Client Projects
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted-foreground">
              Businesses that contracted me to develop custom software
              solutions.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 mb-8 sm:mb-16">
              {projects
                .filter((project) =>
                  ["tfi-group", "traceit"].includes(project.id)
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
                            width={200}
                            height={200}
                            className="object-contain transition-transform duration-300 hover:scale-105"
                            sizes="(max-width: 768px) 200px, 250px"
                          />
                        </div>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-800">
                          <span className="text-base sm:text-lg font-medium">
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
                          <Badge
                            variant="outline"
                            className="text-xs sm:text-sm"
                          >
                            +{project.tags.length - 6} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 sm:p-6">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="text-xs sm:text-sm"
                      >
                        <Link href={`/projects/${project.id}`}>
                          View Details
                        </Link>
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
                          <Badge variant="outline" className="ml-2 text-xs">
                            Coming Soon
                          </Badge>
                        ) : null}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-6">
              Personal Projects
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted-foreground">
              Projects built out of curiosity and personal interest.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter(
                  (project) => !["tfi-group", "traceit"].includes(project.id)
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
                            className="object-contain transition-transform duration-300 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-800">
                          <span className="text-base sm:text-lg font-medium">
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
                          <Badge
                            variant="outline"
                            className="text-xs sm:text-sm"
                          >
                            +{project.tags.length - 5} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 sm:p-6">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="text-xs sm:text-sm"
                      >
                        <Link href={`/projects/${project.id}`}>
                          View Details
                        </Link>
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
                          <Badge variant="outline" className="ml-2 text-xs">
                            Coming Soon
                          </Badge>
                        ) : null}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
