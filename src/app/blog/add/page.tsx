"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, Save } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

export default function AddBlogPostPage() {
  const router = useRouter();
  const [isClient, setIsClient] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: "",
    excerpt: "",
    tags: "",
    coverImage: "",
    content: "",
  });

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === "development";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isDevelopment) {
      toast.error("Adding blog posts is only available in development mode");
      return;
    }

    try {
      setIsSubmitting(true);

      // Generate slug from title
      const slug = slugify(formData.title);

      // Format the date as ISO string (YYYY-MM-DD)
      const currentDate = new Date().toISOString().split("T")[0];

      // Parse tags into an array
      const tagsArray = formData.tags.split(",").map((tag) => tag.trim());

      // Create the blog post object
      const blogPost = {
        slug,
        title: formData.title,
        date: currentDate,
        excerpt: formData.excerpt,
        content: formData.content,
        tags: tagsArray,
        coverImage: formData.coverImage || undefined,
        author: {
          name: "Aslan Farboud",
          image: "/aslan-avatar.jpg",
        },
      };

      // Save the blog post data
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogPost),
      });

      if (!response.ok) {
        throw new Error("Failed to save blog post");
      }

      toast.success("Blog post created successfully!");
      router.push(`/blog/${slug}`);
    } catch (error) {
      console.error("Error creating blog post:", error);
      toast.error("Failed to create blog post. See console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // If not in development mode and on the client, show access denied
  if (isClient && !isDevelopment) {
    return (
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
          <MainNav />
        </header>
        <main className="flex-1 flex items-center justify-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Access Denied</CardTitle>
              <CardDescription>
                This page is only available in development mode.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The blog post creation form is only accessible when running the
                application locally in development mode.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href="/blog">Back to Blog</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container max-w-4xl py-16 md:py-24 px-4 mx-auto">
          {/* Back Button */}
          <div className="mb-10">
            <Button
              variant="ghost"
              asChild
              className="group transition-all duration-200 hover:translate-x-[-2px]"
            >
              <Link href="/blog">
                <ChevronLeft className="h-4 w-4 mr-1 group-hover:transform group-hover:translate-x-[-2px] transition-transform" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Add New Blog Post
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create and publish a new blog post to share your thoughts and
              discoveries.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="title"
                >
                  Post Title
                </label>
                <input
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter a compelling title..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="excerpt"
                >
                  Excerpt
                </label>
                <input
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="A brief summary of your post..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="tags"
                >
                  Tags (comma separated)
                </label>
                <input
                  id="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Next.js, React, TypeScript..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="coverImage"
                >
                  Cover Image URL
                </label>
                <input
                  id="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="/blog/your-image.jpg"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="content"
                >
                  Content (Markdown supported)
                </label>
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="flex min-h-[300px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="# Your Markdown Content Here..."
                  required
                />
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline" asChild>
                  <Link href="/blog">Cancel</Link>
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  {isSubmitting ? "Saving..." : "Save Post"}
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-16 p-6 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400">
            <h3 className="text-lg font-bold mb-2">How This Works</h3>
            <p className="mb-2">
              This form is only accessible in development mode. When you save a
              post:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Your blog post is converted to the proper format</li>
              <li>
                It gets saved as Markdown to{" "}
                <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-xs">
                  src/content/blog/[slug].md
                </code>
              </li>
              <li>The blog post data is added to the blog data file</li>
              <li>
                You&apos;ll need to commit these changes to your repository
              </li>
              <li>Deploy to Vercel to make the post live on your site</li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
