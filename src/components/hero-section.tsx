"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="max-w-lg text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aslan Farboud
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-300">
            I build software that balances technical depth with practical
            impact, whether it’s web applications, AI-driven systems, or backend
            infrastructure. I love exploring new technologies, understanding how
            they evolve, and applying them in ways that make my work and
            projects more effective and adaptable.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/projects">
                <Sparkles className="mr-2 h-4 w-4" /> View My Projects
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-0 lg:flex-shrink-0 flex justify-center">
          <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <Image
              src="/profile_sharpened.jpeg"
              alt="Aslan Farboud"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 450px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
