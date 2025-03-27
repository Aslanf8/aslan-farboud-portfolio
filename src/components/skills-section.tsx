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
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "radix",
      "React Native",
      "Expo",
      "HTML/CSS",
      "Responsive Design",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      "Node.js",
      "Python",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
      "AWS Lambda",
      "AWS S3",
      "AWS SNS",
      "AWS Textract",
      "AWS ECR",
    ],
  },
  {
    id: "ai",
    name: "AI & Data",
    skills: [
      "OpenAI (GPT, Embedding, Whisper, TTS)",
      "LLM Fine-tuning",
      "Vector Databases",
      "Pinecone",
      "trigger.dev",
      "deepgram",
      "Machine Learning",
      "Natural Language Processing",
      "Text-to-Speech",
      "Speech-to-Text",
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    skills: [
      "AWS",
      "Supabase",
      "Github",
      "Vercel",
      "CI/CD",
      "Docker",
      "AWS cron",
      "Cloud Infrastructure",
      "Serverless",
      "Microservices",
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    skills: [
      "React Native",
      "Expo",
      "iOS Development",
      "TestFlight",
      "App Store Connect",
      "Mobile UI/UX",
      "Push Notifications",
      "Mobile Testing",
      "Cross-platform Development",
      "App Store Optimization",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technical Skills
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              My expertise across various technologies and domains.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 w-full max-w-[1200px]">
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-6 sm:mb-8">
              <TabsList className="flex flex-wrap justify-center w-full max-w-2xl">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-xs sm:text-sm flex-1 min-w-[120px]"
                  >
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
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">
                      {category.name} Skills
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
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
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs sm:text-sm py-1 px-2"
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
