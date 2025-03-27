"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Linkedin, ExternalLink, Phone } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;m always open to new opportunities and connections.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 max-w-3xl w-full">
          <Card className="border-2">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl text-center sm:text-left">
                Contact Information
              </CardTitle>
              <CardDescription className="text-center sm:text-left text-sm sm:text-base">
                Feel free to reach out through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
              <div className="grid gap-3 sm:gap-4 md:gap-6">
                <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 rounded-lg border p-3 sm:p-4">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-0" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <a
                          href="mailto:aslan.farboud@gmail.com"
                          className="hover:underline"
                        >
                          aslan.farboud@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 rounded-lg border p-3 sm:p-4">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-0" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <a href="tel:+16726739168" className="hover:underline">
                          +1 672 673 9168
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 rounded-lg border p-3 sm:p-4">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-0" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">LinkedIn</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <a
                          href="https://www.linkedin.com/in/aslan-farboud-1b59ab224/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center justify-center sm:justify-start gap-1"
                        >
                          Aslan Farboud
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 rounded-lg border p-3 sm:p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-0"
                    >
                      <path d="M2 12h2a10 10 0 0 1 10-10v0a10 10 0 0 1 10 10h0a10 10 0 0 1-17.071 7.071" />
                      <circle cx="12" cy="9" r="3" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        Vancouver, BC, Canada
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4 sm:mt-6">
                  <Button asChild size="lg" className="w-full sm:w-auto px-8">
                    <Link href="mailto:aslan.farboud@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
