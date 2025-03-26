"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="max-w-lg text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aslan Farboud
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Business and Tech enthusiast student at Simon Fraser University,
            passionate about building innovative software solutions. From
            AI-powered platforms to mobile apps, I create technology that solves
            real problems.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild>
              <Link href="/projects">
                <Sparkles className="mr-2 h-4 w-4" /> View My Projects
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0">
          <div className="relative h-[450px] w-[450px] rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
            {/* Add a profile image here (recommended size: 450x450) */}
            {/* Example for when you have an image: */}
            <Image
              src="/profile_sharpened.jpeg"
              alt="Aslan Farboud"
              fill
              className="object-cover"
              priority
            />

            {/* Placeholder if no image available */}
            {/* <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-400">
              AF
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
