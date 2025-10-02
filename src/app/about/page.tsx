"use client";

import * as React from "react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <MainNav />
      </header>
      <main className="flex-1 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 py-8 sm:py-12 md:py-16 mx-auto flex flex-col items-center">
          <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12 w-full">
            <ScrollReveal>
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  About Me
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Student at Simon Fraser University with a passion for building
                  innovative software solutions. Focused on applying technical
                  expertise to solve real-world business problems through AI,
                  web development, and data analytics.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center p-6 border-2 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 space-y-3"
              >
                <div className="text-center space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Want the full details?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Download my complete resume for a comprehensive overview of
                    my skills and experience.
                  </p>
                </div>
                <Button
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="lg"
                >
                  <DownloadIcon className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  <a
                    href="https://luzvrehlgxzdctsldcgw.supabase.co/storage/v1/object/public/blog-images/resume-sep.pdf"
                    download
                    className="no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </ScrollReveal>

            <div className="space-y-4 sm:space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Client Projects
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border-2 hover:border-blue-500 dark:hover:border-blue-400 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        TFI Group
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        AI Solutions Architecture Lead
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                      June 2023 - Present
                    </Badge>
                  </div>
                  <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Architected and developed a comprehensive enterprise AI
                      platform for TFI Group, a leading tax consultancy
                      specializing in Housing Development, Land Remediation
                      Relief, R&D tax credits, and Capital Allowances. Built
                      multiple sophisticated AI systems including Tina AI
                      (conversational AI with multi-model support), Dan AI
                      (voice-enabled virtual tax consultant), and advanced
                      document processing pipelines with parallel AI analysis
                      workflows. Implemented enterprise-grade features including
                      vector search with RAG, schema-driven AI configuration,
                      MFA authentication, and cost tracking systems.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border-2 hover:border-purple-500 dark:hover:border-purple-400 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        West Coast Kitchen
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Software Solutions Architect & Lead Developer
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                      January 2023 - Present
                    </Badge>
                  </div>
                  <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Developed TraceIt, a comprehensive food traceability
                      system for West Coast Kitchen, ensuring CFIA compliance by
                      tracking ingredients, production, and sales across the
                      food lifecycle. Built a scalable solution using Next.js
                      15, React 19, TypeScript, Tailwind CSS, and Tanstack React
                      Query and AWS. Implemented barcode generation, detailed
                      audit logging, and inventory management features that
                      reduced manual tracking time by over 70% while ensuring
                      regulatory compliance.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <ScrollReveal delay={0.35}>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Internships
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border-2 hover:border-blue-500 dark:hover:border-blue-400 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Zafin
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        AI Engineer Intern
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                      May 2025 - August 2025 (Remote)
                    </Badge>
                  </div>
                  <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Completed a full-time in-person role at Zafin working with
                      their AI team under the guidance of the VP of AI alongside
                      a dedicated team of AI engineers. Contributed to AI
                      initiatives and applied my LLM expertise in an enterprise
                      banking technology environment. Now continuing remote work
                      with the team.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.45}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border-2 hover:border-blue-500 dark:hover:border-blue-400 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Farm Credit Canada
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Data Analysis Intern
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                      May 2022 - August 2022
                    </Badge>
                  </div>
                  <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Completed an intensive two-month program, learning
                      financial literacy skills such as loan policy analysis,
                      land valuation techniques, and in-depth financial
                      statement evaluation. Designed and implemented a C++
                      software solution to streamline survey data analysis,
                      delivering accurate, actionable reports that supported
                      upper management&apos;s strategic decisions.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border-2 hover:border-purple-500 dark:hover:border-purple-400 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Blossom Social Media
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Content Strategist Intern
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                      January 2022 - May 2022
                    </Badge>
                  </div>
                  <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Developed a data-driven project that strategically
                      processed large volumes of word-hashtags from leading
                      investment influencers on TikTok, enabling the extraction
                      of popular trends for implementation in marketing
                      campaigns. Analyzed social media performance metrics to
                      identify engagement patterns and optimize content
                      scheduling. Contributed to guerrilla marketing initiatives
                      by creating viral-oriented content strategies that
                      increased brand visibility at minimal cost.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <ScrollReveal delay={0.55}>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Professional Experience
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border-2 hover:border-blue-500 dark:hover:border-blue-400 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        BriefBuddy
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Founder & Lead Developer
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                      March 2023 - Present
                    </Badge>
                  </div>
                  <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Founded BriefBuddy, an LLM-powered note-taking platform,
                      scaling it from a web app to a fully functional iOS app.
                      Single-handedly developed the end-to-end solution using
                      JavaScript, React, Node.js, Python, and Expo for app
                      development/deployment, with Apple Connect (TestFlight,
                      Transporter) for distribution. Implemented user
                      authentication, real-time synchronization, and optimized
                      prompting techniques to deliver accurate summarization
                      capabilities.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.65}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border-2 hover:border-purple-500 dark:hover:border-purple-400 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        University of Victoria (UVIC)
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        TA & Research Assistant for MBA Program
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                      Feb 2024 - May 2024
                    </Badge>
                  </div>
                  <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                    <p>
                      Developed Python-based AI and data analytics
                      tools—including Decision Trees, K-Means Clustering, PCA,
                      web scraping, vector embeddings, and Artificial Neural
                      Networks (ANNs)—to simplify advanced computer science
                      concepts for MBA students, making technical material
                      accessible and actionable. Created interactive Jupyter
                      notebooks and visualization tools that transformed complex
                      algorithms into practical business intelligence
                      applications. Received exceptional feedback for bridging
                      the gap between technical concepts and business
                      applications.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <ScrollReveal delay={0.7}>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Education
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.75}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border-2 hover:border-pink-500 dark:hover:border-pink-400 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl hover:shadow-pink-500/10 dark:hover:shadow-pink-400/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Simon Fraser University
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Bachelor of Business Administration (BBA)
                      </p>
                    </div>
                    <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                      1 year left
                    </Badge>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <p className="text-sm sm:text-base font-medium">
                      Achievements:
                    </p>
                    <ul className="ml-4 sm:ml-6 mt-2 list-disc text-sm sm:text-base text-muted-foreground">
                      <li>
                        Robertson O Award - $5,000 for being a well-rounded
                        individual with demonstrated excellence in academics,
                        leadership, and community involvement
                      </li>
                      <li>
                        Waterloo Conrad School of Business Entrepreneurship
                        Award - $5,000 for innovative business concept
                        development and entrepreneurial potential
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
