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
import { Mail, Linkedin, ExternalLink, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";
import { motion } from "framer-motion";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "aslan.farboud@gmail.com",
      href: "mailto:aslan.farboud@gmail.com",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 672 673 9168",
      href: "tel:+16726739168",
      color: "purple",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Aslan Farboud",
      href: "https://www.linkedin.com/in/aslan-farboud-1b59ab224/",
      color: "pink",
      external: true,
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Vancouver, BC, Canada",
      color: "green",
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="max-w-[900px] text-sm sm:text-base text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I&apos;m always open to new opportunities and connections
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-8 sm:mt-12 max-w-3xl w-full">
            <Card className="border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl text-center sm:text-left bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-center sm:text-left text-sm sm:text-base">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <div className="grid gap-3 sm:gap-4 md:gap-6">
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2">
                    {contactMethods.map((method, index) => (
                      <motion.div
                        key={method.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="group"
                      >
                        {method.href ? (
                          <a
                            href={method.href}
                            target={method.external ? "_blank" : undefined}
                            rel={
                              method.external
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 rounded-lg border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-5 transition-all duration-300 hover:shadow-lg"
                          >
                            <method.icon className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-0 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                            <div className="space-y-1 flex-1">
                              <p className="text-sm font-semibold flex items-center justify-center sm:justify-start gap-1">
                                {method.title}
                                {method.external && (
                                  <ExternalLink className="h-3 w-3" />
                                )}
                              </p>
                              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all">
                                {method.value}
                              </p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 rounded-lg border-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-5">
                            <method.icon className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-0 text-green-600 dark:text-green-400" />
                            <div className="space-y-1">
                              <p className="text-sm font-semibold">
                                {method.title}
                              </p>
                              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                {method.value}
                              </p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex justify-center mt-4 sm:mt-6"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto px-8 group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Link href="mailto:aslan.farboud@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
