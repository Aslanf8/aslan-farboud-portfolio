import * as React from "react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

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
                Student at Simon Fraser University with a passion for building
                innovative software solutions. Focused on applying technical
                expertise to solve real-world business problems through AI, web
                development, and data analytics.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 border rounded-lg bg-muted/30 space-y-3">
              <div className="text-center space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Want the full details?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Download my complete resume for a comprehensive overview of my
                  skills and experience.
                </p>
              </div>
              <Button className="group" variant="default">
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
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold">
                Professional Experience
              </h2>

              <div className="rounded-lg border p-4 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      Zafin
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      AI Engineer
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                    May 2025 - August 2025 (Remote)
                  </Badge>
                </div>
                <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Completed a full-time in-person role at Zafin working with
                    their AI team under the guidance of the VP of AI alongside a
                    dedicated team of AI engineers. Contributed to AI
                    initiatives and applied my LLM expertise in an enterprise
                    banking technology environment. Now continuing remote work
                    with the team.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4 sm:p-6">
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
                    vector search with RAG, schema-driven AI configuration, MFA
                    authentication, and cost tracking systems.
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
                      Creator
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
              </div>

              <div className="rounded-lg border p-4 sm:p-6">
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
                    Developed TraceIt, a comprehensive food traceability system
                    for West Coast Kitchen, ensuring CFIA compliance by tracking
                    ingredients, production, and sales across the food
                    lifecycle. Built a scalable solution using Next.js 15, React
                    19, TypeScript, Tailwind CSS, and Tanstack React Query and
                    AWS. Implemented barcode generation, detailed audit logging,
                    and inventory management features that reduced manual
                    tracking time by over 70% while ensuring regulatory
                    compliance.
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
                      TA & Research Assistant for MBA Program
                    </p>
                  </div>
                  <Badge className="mt-2 md:mt-0 text-xs sm:text-sm self-start md:self-center">
                    Feb 2024 - May 2024
                  </Badge>
                </div>
                <div className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Developed Python-based AI and data analytics tools—including
                    Decision Trees, K-Means Clustering, PCA, web scraping,
                    vector embeddings, and Artificial Neural Networks (ANNs)—to
                    simplify advanced computer science concepts for MBA
                    students, making technical material accessible and
                    actionable. Created interactive Jupyter notebooks and
                    visualization tools that transformed complex algorithms into
                    practical business intelligence applications. Received
                    exceptional feedback for bridging the gap between technical
                    concepts and business applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold">Internships</h2>
              <div className="rounded-lg border p-4 sm:p-6">
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

              <div className="rounded-lg border p-4 sm:p-6">
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
                    Developed a data-driven project that strategically processed
                    large volumes of word-hashtags from leading investment
                    influencers on TikTok, enabling the extraction of popular
                    trends for implementation in marketing campaigns. Analyzed
                    social media performance metrics to identify engagement
                    patterns and optimize content scheduling. Contributed to
                    guerrilla marketing initiatives by creating viral-oriented
                    content strategies that increased brand visibility at
                    minimal cost.
                  </p>
                </div>
              </div>
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
                      Bachelor of Business Administration (BBA) with focus in
                      Management Information Systems
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
                      Waterloo Conrad School of Business Entrepreneurship Award
                      - $5,000 for innovative business concept development and
                      entrepreneurial potential
                    </li>
                  </ul>
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
