import * as React from "react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-16 mx-auto flex flex-col items-center">
          <div className="mx-auto max-w-3xl space-y-6 text-center w-full">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Contact Me
            </h1>
            <p className="text-lg text-muted-foreground">
              I&apos;m open to job opportunities, collaborations, and
              conversations. Don&apos;t hesitate to reach out!
            </p>
          </div>

          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
