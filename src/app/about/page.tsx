import * as React from "react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 sm:py-12 md:py-16 mx-auto flex flex-col items-center">
          <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12 w-full">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                About Me
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Business and Computer Science student at Simon Fraser University
                with a passion for building innovative software solutions.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold">Education</h2>
              <div className="rounded-lg border p-4 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      Simon Fraser University
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Dual Major in Business and Computer Science
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

            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold">
                Professional Experience
              </h2>

              <div className="rounded-lg border p-4 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      TFI Group
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      AI Solutions Architecture
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                    June 2023 - Present
                  </Badge>
                </div>
                <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
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

              <div className="rounded-lg border p-4 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      BriefBuddy
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Founder & Full-Stack Developer
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
                    Transporter) for distribution.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      West Coast Kitchen
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Software Solutions Architect
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                    January 2023 - Present
                  </Badge>
                </div>
                <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Developed TraceIt, a comprehensive food traceability system
                    for West Coast Kitchen, ensuring CFIA compliance by tracking
                    ingredients, production, and sales across the food
                    lifecycle. Built a scalable solution using Next.js 15, React
                    19, TypeScript, Tailwind CSS, and Tanstack React Query.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      University of Victoria (UVIC)
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      TA & Research Assistant for MBA class
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                    2022
                  </Badge>
                </div>
                <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
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

              <div className="rounded-lg border p-4 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      Farm Credit Canada
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Data Analysis
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                    May 2022 - August 2022
                  </Badge>
                </div>
                <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
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
