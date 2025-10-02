"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollReveal } from "./scroll-reveal";
import { motion } from "framer-motion";

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
      "State Management (Redux, Zustand)",
      "Material UI",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      "Node.js",
      "Python",
      "Flask",
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
      "RAG",
      "Pinecone",
      "trigger.dev",
      "deepgram",
      "Machine Learning",
      "TensorFlow",
      "PyTorch",
      "Pandas/NumPy",
      "LangChain",
      "Hugging Face Transformers",
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
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <p className="max-w-[900px] text-sm sm:text-base text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                My expertise across various technologies and domains
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 sm:mt-12 md:mt-16 w-full max-w-[1200px]">
            <Tabs defaultValue="frontend" className="w-full">
              <div className="flex justify-center mb-6 sm:mb-8">
                <TabsList className="flex flex-wrap justify-center w-full max-w-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-1">
                  {skillCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="text-xs sm:text-sm flex-1 min-w-[120px] data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
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
                  <Card className="border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {category.name} Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs sm:text-sm py-1.5 px-3 hover:bg-blue-100 dark:hover:bg-blue-900 hover:scale-105 transition-all cursor-default"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
