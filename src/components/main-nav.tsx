"use client";

import * as React from "react";
import Link from "next/link";

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

export function MainNav() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <Link href="/" className="text-xl font-bold">
        Aslan Farboud
      </Link>
      <div className="flex items-center gap-4 ">
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
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
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
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </div>
  );
}
