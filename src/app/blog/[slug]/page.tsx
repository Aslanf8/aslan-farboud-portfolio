import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { createBlogMetadata } from "@/lib/metadata";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Clock, CalendarDays, User, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BackToTopButton } from "@/components/back-to-top-button";
import Script from "next/script";
import { unstable_cache } from "next/cache";
import Image from "next/image";

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    };
  }

  return createBlogMetadata({
    title: post.title,
    description:
      post.description || `Read ${post.title} on Aslan Farboud's blog`,
    slug: params.slug,
    image: post.featured_image,
    publishedTime: post.published_at,
    authors: [post.author || "Aslan Farboud"],
    keywords: [
      "blog",
      "technology",
      "web development",
      post.title.toLowerCase(),
    ],
  });
}

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = await getAllSlugs();

  return slugs.map((post) => ({
    slug: post.slug,
  }));
}

// Cache for 1 hour (3600 seconds) with ISR-like behavior
export const revalidate = 3600;

// Cache the reading time calculation with a persistent cache
const getReadingTime = unstable_cache(
  async (content) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  },
  ["reading-time"],
  { revalidate: 86400 } // Cache for 24 hours
);

// Cache related posts data for 1 hour
const getRelatedPosts = unstable_cache(
  async (currentPostId) => {
    const allPosts = await getAllPosts();
    return allPosts.filter((p) => p.id !== currentPostId).slice(0, 3);
  },
  ["related-posts"],
  { revalidate: 3600 }
);

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get all posts for navigation
  const allPosts = await getAllPosts();

  // Find current post index
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);

  // Get previous and next posts
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  // Get related posts (excluding current post) with caching
  const relatedPosts = await getRelatedPosts(post.id);

  // Calculate reading time with caching
  const readingTime = await getReadingTime(post.content);

  // Format date for schema and article tag
  const formattedPublishDate = new Date(post.published_at).toISOString();
  const formattedModifiedDate = post.updated_at
    ? new Date(post.updated_at).toISOString()
    : formattedPublishDate;

  // Structure JSON-LD data for blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.featured_image ? [post.featured_image] : [],
    datePublished: formattedPublishDate,
    dateModified: formattedModifiedDate,
    author: {
      "@type": "Person",
      name: post.author || "Aslan Farboud",
      url: "https://aslanfarboud.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Aslan Farboud",
      logo: {
        "@type": "ImageObject",
        url: "https://aslanfarboud.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aslanfarboud.com/blog/${params.slug}`,
    },
  };

  return (
    <>
      {/* Add JSON-LD structured data */}
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-10 group"
          prefetch={true}
        >
          <ArrowLeft
            size={14}
            className="mr-1.5 sm:mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Back to all posts
        </Link>

        <article
          className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <meta itemProp="headline" content={post.title} />
          {post.description && (
            <meta itemProp="description" content={post.description} />
          )}
          {post.featured_image && (
            <meta itemProp="image" content={post.featured_image} />
          )}
          <meta itemProp="datePublished" content={formattedPublishDate} />
          <meta itemProp="dateModified" content={formattedModifiedDate} />
          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content={post.author || "Aslan Farboud"} />
          </div>
          <div
            itemProp="publisher"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta itemProp="name" content="Aslan Farboud" />
            <div
              itemProp="logo"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <meta
                itemProp="url"
                content="https://aslanfarboud.com/logo.png"
              />
            </div>
          </div>

          <header className="not-prose mb-6 sm:mb-10">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6"
              itemProp="headline"
            >
              {post.title}
            </h1>

            {post.description && (
              <p
                className="text-sm sm:text-base md:text-xl text-muted-foreground mb-4 sm:mb-6"
                itemProp="abstract"
              >
                {post.description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
              {post.author && (
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <User size={14} className="text-primary" />
                  <span itemProp="author">{post.author}</span>
                </div>
              )}
              <div className="flex items-center gap-1 sm:gap-1.5">
                <CalendarDays size={14} className="text-primary" />
                <time dateTime={post.published_at} itemProp="datePublished">
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Clock size={14} className="text-primary" />
                <span>{readingTime} min read</span>
              </div>
            </div>

            <Separator className="mb-6 sm:mb-8" />
          </header>

          {post.featured_image && (
            <div className="not-prose mb-6 sm:mb-10 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg">
              <AspectRatio ratio={21 / 9}>
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  priority
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  itemProp="image"
                />
              </AspectRatio>
            </div>
          )}

          <div
            className="prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg sm:prose-img:rounded-xl prose-img:shadow-md text-sm sm:text-base md:text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
            itemProp="articleBody"
          />

          <Separator className="my-8 sm:my-12 md:my-16" />

          {/* Post Navigation */}
          <nav
            aria-label="Post navigation"
            className="not-prose grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 mb-8 sm:mb-12 md:mb-16"
          >
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group"
                rel="prev"
                prefetch={true}
              >
                <div className="flex flex-col h-full p-4 sm:p-6 border rounded-lg bg-card hover:bg-accent/10 transition-colors">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 flex items-center">
                    <ArrowLeft
                      size={12}
                      className="mr-1 group-hover:-translate-x-1 transition-transform"
                    />
                    Previous Post
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </h3>
                </div>
              </Link>
            )}

            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group md:ml-auto"
                rel="next"
                prefetch={true}
              >
                <div className="flex flex-col h-full p-4 sm:p-6 border rounded-lg bg-card hover:bg-accent/10 transition-colors text-right">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 flex items-center justify-end">
                    Next Post
                    <ArrowRight
                      size={12}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </h3>
                </div>
              </Link>
            )}
          </nav>

          <div className="not-prose flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:underline"
              prefetch={true}
            >
              <ArrowLeft size={14} className="mr-1.5 sm:mr-2" />
              Back to all posts
            </Link>

            <BackToTopButton />
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section
            className="mt-8 sm:mt-12 md:mt-16"
            aria-labelledby="related-posts-heading"
          >
            <h2
              id="related-posts-heading"
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8"
            >
              More Articles
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                  prefetch={true}
                >
                  <Card className="h-full overflow-hidden border bg-card hover:bg-accent/30 transition-colors duration-300 hover:border-accent">
                    <AspectRatio ratio={16 / 9}>
                      {relatedPost.featured_image ? (
                        <Image
                          src={relatedPost.featured_image}
                          alt={relatedPost.title}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="bg-gradient-to-br from-gray-700 to-gray-900 w-full h-full flex items-center justify-center text-white">
                          <span className="text-xl sm:text-2xl font-bold">
                            {relatedPost.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </AspectRatio>
                    <CardContent className="p-3 sm:p-4">
                      <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="text-xs text-muted-foreground">
                        {new Date(relatedPost.published_at).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
