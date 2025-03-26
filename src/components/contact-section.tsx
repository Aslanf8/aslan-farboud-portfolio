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
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;m always open to new opportunities and connections.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl w-full">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <Mail className="h-6 w-6" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <a
                        href="mailto:aslan.farboud@gmail.com"
                        className="hover:underline"
                      >
                        aslan.farboud@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <Phone className="h-6 w-6" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <a href="tel:+16726739168" className="hover:underline">
                        +1 672 673 9168
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <Linkedin className="h-6 w-6" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <a
                        href="https://www.linkedin.com/in/aslan-farboud-1b59ab224/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        Aslan Farboud
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-4">
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
                    className="h-6 w-6"
                  >
                    <path d="M2 12h2a10 10 0 0 1 10-10v0a10 10 0 0 1 10 10h0a10 10 0 0 1-17.071 7.071" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Vancouver, BC, Canada
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button asChild size="lg">
                  <Link href="mailto:aslan.farboud@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
