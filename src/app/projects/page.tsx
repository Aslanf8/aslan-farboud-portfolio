"use client";

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
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <MainNav />
      </header>
      <main className="flex-1 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 py-8 sm:py-12 md:py-16 mx-auto flex flex-col items-center">
          <ScrollReveal>
            <div className="space-y-3 sm:space-y-4 text-center w-full">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Projects
              </h1>
              <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground">
                A collection of my work across various technologies and domains
              </p>
            </div>
          </ScrollReveal>

          <div className="w-full max-w-[1200px] mt-8 sm:mt-12">
            <ScrollReveal delay={0.1}>
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                  Client Projects
                </h2>
                <p className="ml-6 text-sm sm:text-base text-muted-foreground">
                  Businesses that contracted me to develop custom software
                  solutions
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 mb-8 sm:mb-16">
              {projects
                .filter((project) =>
                  ["tfi-group", "traceit"].includes(project.id)
                )
                .map((project, index) => (
                  <ScrollReveal key={project.id} delay={0.2 + index * 0.1}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 group">
                        <div className="relative h-[150px] sm:h-[200px] overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                          {project.image ? (
                            <div className="relative h-full w-full flex items-center justify-center p-4">
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={200}
                                height={200}
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 200px, 250px"
                              />
                            </div>
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <span className="text-base sm:text-lg font-medium">
                                {project.title}
                              </span>
                            </div>
                          )}
                          <div className="absolute top-3 right-3">
                            <div className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium">
                              Enterprise
                            </div>
                          </div>
                        </div>
                        <CardHeader className="p-4 sm:p-6">
                          <CardTitle className="text-lg sm:text-xl flex items-center justify-between group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                            <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                className="text-xs sm:text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
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
                        <CardFooter className="flex justify-between p-4 sm:p-6 border-t">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="text-xs sm:text-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
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
                              <Badge variant="outline" className="ml-2 text-xs">
                                Coming Soon
                              </Badge>
                            ) : null}
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </ScrollReveal>
                ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
                  Personal Projects
                </h2>
                <p className="ml-6 text-sm sm:text-base text-muted-foreground">
                  Projects built out of curiosity and personal interest
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter(
                  (project) => !["tfi-group", "traceit"].includes(project.id)
                )
                .map((project, index) => (
                  <ScrollReveal key={project.id} delay={0.4 + index * 0.1}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-400/20 group">
                        <div className="relative h-[150px] sm:h-[200px] overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
                          {project.image ? (
                            <div className="relative h-full w-full flex items-center justify-center p-4">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <span className="text-base sm:text-lg font-medium">
                                {project.title}
                              </span>
                            </div>
                          )}
                          {project.comingSoon && (
                            <div className="absolute top-3 right-3">
                              <div className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-medium">
                                Coming Soon
                              </div>
                            </div>
                          )}
                        </div>
                        <CardHeader className="p-4 sm:p-6">
                          <CardTitle className="text-lg sm:text-xl flex items-center justify-between group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {project.title}
                            <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                                className="text-xs sm:text-sm hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
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
                        <CardFooter className="flex justify-between p-4 sm:p-6 border-t">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="text-xs sm:text-sm group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors"
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
                              <Badge variant="outline" className="ml-2 text-xs">
                                Coming Soon
                              </Badge>
                            ) : null}
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
