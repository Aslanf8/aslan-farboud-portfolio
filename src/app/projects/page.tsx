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
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-16 mx-auto flex flex-col items-center">
          <div className="space-y-4 text-center w-full">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              My Projects
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              A collection of my work across various technologies and domains.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1200px] w-full">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="h-full flex flex-col overflow-hidden border-2 transition-colors hover:border-primary"
              >
                <div className="relative h-[200px] overflow-hidden">
                  {project.image ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-800">
                      <span className="text-lg font-medium">
                        {project.title} Image
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
                    <Link href={`/projects/${project.id}`}>View Details</Link>
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
                    {project.live && (
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
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
