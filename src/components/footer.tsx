import * as React from "react";
import { Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    // add margin right to © 2025 Aslan Farboud. All rights reserved.
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 md:h-20 flex flex-col sm:flex-row items-center justify-between gap-4 py-6 sm:py-0">
        <div className="order-2 sm:order-1">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © 2025 Aslan Farboud. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 order-1 sm:order-2">
          <Link
            href="https://www.linkedin.com/in/aslan-farboud-1b59ab224/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 hover:bg-primary/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:aslan.farboud@gmail.com"
            className="rounded-full p-2 hover:bg-primary/10 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://github.com/Aslanf8"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 hover:bg-primary/10 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
