"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["Node.js", "Python", "Java", "C++", "C"],
  },
  {
    id: "ai",
    name: "AI & Data",
    skills: [
      "OpenAI (GPT, Embedding, Whisper, TTS)",
      "LLM Fine-tuning",
      "Vector Databases",
      "Python AI Libraries (TensorFlow, scikit-learn)",
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    skills: [
      "AWS (Lambda, S3, SNS, Textract, ECR)",
      "Supabase",
      "Github",
      "Vercel",
      "CI/CD",
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    skills: [
      "Expo",
      "React Native",
      "iOS Development",
      "TestFlight",
      "App Store Connect",
      "Mobile UI/UX",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technical Skills
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              My expertise across various technologies and domains.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 w-full max-w-[1200px]">
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-5">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="space-y-4"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{category.name} Skills</CardTitle>
                    <CardDescription>
                      {category.id === "frontend" &&
                        "Building modern, responsive user interfaces"}
                      {category.id === "backend" &&
                        "Developing robust server-side applications"}
                      {category.id === "ai" &&
                        "Working with cutting-edge AI and data technologies"}
                      {category.id === "cloud" &&
                        "Deploying and managing cloud infrastructure"}
                      {category.id === "mobile" &&
                        "Creating cross-platform mobile experiences"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm py-1 px-2"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
