import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { blogPosts } from "../data";

type PageParams = {
  slug: string;
};

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Aslan Farboud's Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://aslanfarboud.com/blog/${post.slug}`,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
}

// Generate static params for blog posts
export async function generateStaticParams(): Promise<PageParams[]> {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: PageParams }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <MainNav />
      </header>
      <main className="flex-1">
        <article className="container max-w-3xl py-16 md:py-24 px-4 mx-auto">
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

          {/* Cover Image */}
          {post.coverImage && (
            <div className="mb-8 overflow-hidden rounded-xl shadow-md">
              <div className="relative aspect-video w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Post Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/\n/g, "<br />"),
              }}
            />
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {post.author.image && (
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-primary/30">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-lg font-bold mb-2">About the Author</h3>
              <p className="text-muted-foreground mb-3">
                Aslan Farboud is a software developer specializing in modern web
                technologies and AI applications.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/about">More About Me</Link>
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card
                    key={relatedPost.slug}
                    className="overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/30"
                  >
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">
                        {relatedPost.title}
                      </CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="group transition-all duration-200"
                      >
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
