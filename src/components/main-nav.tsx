"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

export function MainNav() {
  const [open, setOpen] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  // Close the sheet when a navigation link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Toggle projects section expansion
  const toggleProjects = () => {
    setProjectsExpanded(!projectsExpanded);
  };

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <Link href="/" className="text-xl font-bold">
        Aslan Farboud
      </Link>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center gap-2">
        <ThemeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-[350px] p-0 border-l border-border/40 backdrop-blur-md bg-background/95"
          >
            <div className="flex flex-col h-full">
              <SheetHeader className="text-left p-6 pb-2 border-b border-border/10">
                <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                <SheetDescription className="text-sm text-muted-foreground">
                  Navigate through my portfolio
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto py-4 px-6">
                <nav className="flex flex-col gap-6 mt-2">
                  <Link
                    href="/"
                    className="flex items-center text-lg font-medium transition-colors hover:text-primary p-2 rounded-lg hover:bg-primary/5"
                    onClick={handleLinkClick}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mr-4 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    Home
                  </Link>

                  <div className="py-2">
                    <button
                      onClick={toggleProjects}
                      className="flex items-center justify-between w-full text-lg font-medium mb-4 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mr-4 shadow-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <rect width="8" height="8" x="2" y="2" rx="1" />
                            <path d="M14 2c.3 0 .5 0 .8.1a2 2 0 0 1 1.1 1.1c.1.3.1.5.1.8v5c0 .3 0 .5-.1.8a2 2 0 0 1-1.1 1.1c-.3.1-.5.1-.8.1h-5c-.3 0-.5 0-.8-.1a2 2 0 0 1-1.1-1.1c-.1-.3-.1-.5-.1-.8v-5c0-.3 0-.5.1-.8a2 2 0 0 1 1.1-1.1c.3-.1.5-.1.8-.1h5Z" />
                            <rect width="8" height="8" x="2" y="14" rx="1" />
                            <rect width="8" height="8" x="14" y="14" rx="1" />
                          </svg>
                        </div>
                        Projects
                      </div>
                      {projectsExpanded ? (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>

                    {projectsExpanded && (
                      <div className="ml-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                          href="/projects"
                          className="p-3 rounded-lg border border-border/30 hover:border-primary/30 bg-background/50 hover:bg-primary/5 transition-colors flex flex-col items-center sm:items-start text-center sm:text-left"
                          onClick={handleLinkClick}
                        >
                          <span className="font-medium">All Projects</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            View portfolio
                          </span>
                        </Link>
                        <Link
                          href="/projects/tfi-group"
                          className="p-3 rounded-lg border border-border/30 hover:border-primary/30 bg-background/50 hover:bg-primary/5 transition-colors flex flex-col items-center sm:items-start text-center sm:text-left"
                          onClick={handleLinkClick}
                        >
                          <span className="font-medium">TFI Group</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            AI platform
                          </span>
                        </Link>
                        <Link
                          href="/projects/daily-vocab"
                          className="p-3 rounded-lg border border-border/30 hover:border-primary/30 bg-background/50 hover:bg-primary/5 transition-colors flex flex-col items-center sm:items-start text-center sm:text-left"
                          onClick={handleLinkClick}
                        >
                          <span className="font-medium">DailyVocab</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            Vocabulary app
                          </span>
                        </Link>
                        <Link
                          href="/projects/storytime"
                          className="p-3 rounded-lg border border-border/30 hover:border-primary/30 bg-background/50 hover:bg-primary/5 transition-colors flex flex-col items-center sm:items-start text-center sm:text-left"
                          onClick={handleLinkClick}
                        >
                          <span className="font-medium">StoryTime</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            Coming soon
                          </span>
                        </Link>
                        <Link
                          href="/projects/brief-buddy"
                          className="p-3 rounded-lg border border-border/30 hover:border-primary/30 bg-background/50 hover:bg-primary/5 transition-colors flex flex-col items-center sm:items-start text-center sm:text-left"
                          onClick={handleLinkClick}
                        >
                          <span className="font-medium">BriefBuddy</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            Note-taking app
                          </span>
                        </Link>
                        <Link
                          href="/projects/trace-it"
                          className="p-3 rounded-lg border border-border/30 hover:border-primary/30 bg-background/50 hover:bg-primary/5 transition-colors flex flex-col items-center sm:items-start text-center sm:text-left"
                          onClick={handleLinkClick}
                        >
                          <span className="font-medium">TraceIt</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            Food traceability
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                    <Link
                      href="/about"
                      className="p-3 rounded-lg border border-border/30 hover:border-primary/30 bg-background/50 hover:bg-primary/5 transition-colors flex flex-col items-center text-center"
                      onClick={handleLinkClick}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="10" r="3" />
                          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                        </svg>
                      </div>
                      <span className="font-medium">About</span>
                    </Link>

                    <Link
                      href="/contact"
                      className="p-3 rounded-lg border border-border/30 hover:border-primary/30 bg-background/50 hover:bg-primary/5 transition-colors flex flex-col items-center text-center"
                      onClick={handleLinkClick}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                        </svg>
                      </div>
                      <span className="font-medium">Contact</span>
                    </Link>

                    <Link
                      href="/blog"
                      className="p-3 rounded-lg border border-border/30 hover:border-primary/30 bg-background/50 hover:bg-primary/5 transition-colors flex flex-col items-center text-center"
                      onClick={handleLinkClick}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                          <path d="M18 14h-8" />
                          <path d="M15 18h-5" />
                          <path d="M10 6h8v4h-8V6Z" />
                        </svg>
                      </div>
                      <span className="font-medium">Blog</span>
                    </Link>
                  </div>

                  {/* Budget Calculator Section */}
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <Link
                      href="/budget"
                      className="flex items-center text-lg font-medium transition-colors hover:text-primary p-2 rounded-lg hover:bg-primary/5"
                      onClick={handleLinkClick}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 mr-4 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      🔥 FIRE Calculator
                    </Link>
                    <p className="text-sm text-muted-foreground ml-14 mt-2">
                      40% savings rate + luxury lifestyle = early retirement
                    </p>
                  </div>
                </nav>
              </div>

              <div className="border-t border-border/30 p-6">
                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/Aslanf8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-3 hover:bg-primary/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aslan-farboud-1b59ab224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-3 hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="mailto:aslan.farboud@gmail.com"
                    className="rounded-full p-3 hover:bg-primary/10 transition-colors"
                    aria-label="Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-3 p-4 w-[300px] overflow-hidden">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-900 to-slate-700 p-4 no-underline outline-none focus:shadow-md dark:from-slate-800 dark:to-slate-900"
                        href="/projects"
                      >
                        <div className="mb-1 text-lg font-medium text-white">
                          Featured Projects
                        </div>
                        <p className="text-xs leading-tight text-white/90">
                          Check out my showcase of work
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="w-full">
                    <Link href="/projects/tfi-group" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                        <div className="text-sm font-medium">TFI Group</div>
                        <p className="line-clamp-2 text-xs leading-snug text-slate-500 dark:text-slate-400">
                          AI-powered platform
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link href="/projects/daily-vocab" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                        <div className="text-sm font-medium">DailyVocab</div>
                        <p className="line-clamp-2 text-xs leading-snug text-slate-500 dark:text-slate-400">
                          Mobile vocabulary app
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link href="/projects/storytime" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                        <div className="text-sm font-medium">StoryTime</div>
                        <p className="line-clamp-2 text-xs leading-snug text-slate-500 dark:text-slate-400">
                          Social story platform (coming soon)
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link href="/projects/brief-buddy" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                        <div className="text-sm font-medium">BriefBuddy</div>
                        <p className="line-clamp-2 text-xs leading-snug text-slate-500 dark:text-slate-400">
                          LLM-powered note-taking
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link href="/projects/trace-it" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                        <div className="text-sm font-medium">TraceIt</div>
                        <p className="line-clamp-2 text-xs leading-snug text-slate-500 dark:text-slate-400">
                          Food traceability system
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </div>
  );
}
