import * as React from "react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-16 mx-auto flex flex-col items-center">
          <div className="mx-auto max-w-3xl space-y-12 w-full">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground">
                Business and Computer Science student at Simon Fraser University
                with a passion for building innovative software solutions.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Education</h2>
              <div className="rounded-lg border p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold">Simon Fraser University</h3>
                    <p className="text-muted-foreground">
                      Dual Major in Business and Computer Science
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0">1 year left</Badge>
                </div>
                <div className="mt-4">
                  <p className="font-medium">Achievements:</p>
                  <ul className="ml-6 mt-2 list-disc text-muted-foreground">
                    <li>
                      Robertson O Award - $5,000 for being a well-rounded
                      individual
                    </li>
                    <li>
                      Waterloo Conrad School of Business Entrepreneurship Award
                      - $5,000
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Professional Experience</h2>

              <div className="rounded-lg border p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold">TFI Group</h3>
                    <p className="text-muted-foreground">
                      AI Solutions Architecture
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0">June 2023 - Present</Badge>
                </div>
                <div className="mt-4 text-muted-foreground">
                  <p>
                    Led the development of an AI-powered platform for R&D Tax
                    Relief, Land Remediation, and general AI agent workflows,
                    streamlining tax consultations and document management
                    across service lines. Reduced project costs from hundreds of
                    pounds to under £5 using AWS (Lambda, S3, SNS, Textract,
                    ECR), Supabase, Pinecone, and OpenAI.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold">BriefBuddy</h3>
                    <p className="text-muted-foreground">
                      Founder & Full-Stack Developer
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0">March 2023 - Present</Badge>
                </div>
                <div className="mt-4 text-muted-foreground">
                  <p>
                    Founded BriefBuddy, an LLM-powered note-taking platform,
                    scaling it from a web app to a fully functional iOS app.
                    Single-handedly developed the end-to-end solution using
                    JavaScript, React, Node.js, Python, and Expo for app
                    development/deployment, with Apple Connect (TestFlight,
                    Transporter) for distribution.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold">West Coast Kitchen</h3>
                    <p className="text-muted-foreground">
                      Software Solutions Architect
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0">January 2023 - Present</Badge>
                </div>
                <div className="mt-4 text-muted-foreground">
                  <p>
                    Developed TraceIt, a comprehensive food traceability system
                    for West Coast Kitchen, ensuring CFIA compliance by tracking
                    ingredients, production, and sales across the food
                    lifecycle. Built a scalable solution using Next.js 15, React
                    19, TypeScript, Tailwind CSS, and Tanstack React Query.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold">
                      University of Victoria (UVIC)
                    </h3>
                    <p className="text-muted-foreground">
                      TA & Research Assistant for MBA class
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0">2022</Badge>
                </div>
                <div className="mt-4 text-muted-foreground">
                  <p>
                    Developed Python-based AI and data analytics tools—including
                    Decision Trees, K-Means Clustering, PCA, web scraping,
                    vector embeddings, and Artificial Neural Networks (ANNs)—to
                    simplify advanced computer science concepts for MBA
                    students, making technical material accessible and
                    actionable.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold">Farm Credit Canada</h3>
                    <p className="text-muted-foreground">Data Analysis</p>
                  </div>
                  <Badge className="mt-2 md:mt-0">May 2022 - August 2022</Badge>
                </div>
                <div className="mt-4 text-muted-foreground">
                  <p>
                    Completed an intensive two-month program, learning financial
                    literacy skills such as loan policy analysis, land valuation
                    techniques, and in-depth financial statement evaluation.
                    Designed and implemented a C++ software solution to
                    streamline survey data analysis, delivering accurate,
                    actionable reports that supported upper management&apos;s
                    strategic decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
