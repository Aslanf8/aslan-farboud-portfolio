"use client";

import * as React from "react";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

// Import blog data
import { blogPosts } from "./data";

export default function BlogPage() {
  const [isClient, setIsClient] = React.useState(false);
  const isDevelopment = process.env.NODE_ENV === "development";

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container max-w-4xl py-16 md:py-24 px-4 mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Thoughts, discoveries, and insights on software development,
              technology, and AI.
            </p>
            {/* Only show Create New Post button in development mode */}
            {isClient && isDevelopment && (
              <Button asChild className="group">
                <Link href="/blog/add">
                  Create New Post
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
          </div>

          {/* Blog Posts */}
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/30"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="group transition-all duration-200"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Newsletter Sign-up (Optional) */}
          <div className="mt-16 p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to get notified when I publish new blog posts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
