import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Clock,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { unstable_cache } from "next/cache";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Aslan Farboud",
  description: "Articles and thoughts on web development, technology, and more",
  keywords: [
    "blog",
    "articles",
    "web development",
    "programming",
    "technology",
  ],
  alternates: {
    canonical: "https://aslanfarboud.com/blog",
  },
  openGraph: {
    title: "Blog | Aslan Farboud",
    description:
      "Articles and thoughts on web development, technology, and more",
    type: "website",
    url: "https://aslanfarboud.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Aslan Farboud",
    description:
      "Articles and thoughts on web development, technology, and more",
  },
};

// Cache page using ISR-like behavior (1 hour)
export const revalidate = 3600;

// Cache reading time calculations for all posts
const getReadingTimes = unstable_cache(
  async (postContents) => {
    const wordsPerMinute = 200;
    const readingTimes = {};

    for (const { id, content } of postContents) {
      const words = content.trim().split(/\s+/).length;
      readingTimes[id] = Math.max(1, Math.ceil(words / wordsPerMinute));
    }

    return readingTimes;
  },
  ["blog-reading-times"],
  { revalidate: 86400 } // Cache for 24 hours
);

// Directly fetch and prepare posts in the component without using getPaginatedPosts
export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  console.log("BlogPage - Component starting to render");

  const params = await searchParams;
  // Get the current page from the URL params or default to 1
  const currentPage = Number(params.page) || 1;
  const postsPerPage = 6;

  console.log(`BlogPage - Fetching posts for page: ${currentPage}`);

  try {
    // Get all posts
    const allPosts = await getAllPosts();

    console.log(`BlogPage - Found ${allPosts.length} total posts`);

    // Calculate total pages
    const totalPages = Math.ceil(allPosts.length / postsPerPage);

    // Get current page posts
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    // For the first page, we'll display posts differently
    const currentPosts =
      currentPage === 1
        ? allPosts.slice(0, postsPerPage)
        : allPosts.slice(startIndex, endIndex);

    console.log(
      `BlogPage - Showing ${currentPosts.length} posts for page ${currentPage}`
    );

    if (allPosts.length === 0) {
      console.log("BlogPage - No posts found");
    }

    // Get reading times for all posts with caching
    const postContents = allPosts.map((post) => ({
      id: post.id,
      content: post.content,
    }));
    const readingTimes = await getReadingTimes(postContents);

    // Create pagination links
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    // Structure JSON-LD data for blog listing
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      headline: "Blog | Aslan Farboud",
      description:
        "Articles and thoughts on web development, technology, and more",
      url: "https://aslanfarboud.com/blog",
      publisher: {
        "@type": "Organization",
        name: "Aslan Farboud",
        logo: {
          "@type": "ImageObject",
          url: "https://aslanfarboud.com/logo.png",
        },
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: currentPosts.map((post, index) => ({
          "@type": "ListItem",
          position: (currentPage - 1) * postsPerPage + index + 1,
          url: `https://aslanfarboud.com/blog/${post.slug}`,
          name: post.title,
        })),
      },
    };

    return (
      <>
        {/* Add JSON-LD structured data */}
        <Script
          id="blog-listing-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="relative container max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          {/* Decorative background elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl -z-10" />

          <header className="mb-8 sm:mb-12 md:mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Blog
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Articles and thoughts on web development, AI, and modern
              technology.
            </p>
          </header>

          <main className="mb-12 sm:mb-16 md:mb-20" aria-label="Blog posts">
            {currentPosts.length > 0 ? (
              <>
                {currentPage === 1 && currentPosts.length > 0 && (
                  <>
                    {/* Featured Post (most recent) */}
                    <section className="mb-8 sm:mb-12 md:mb-16">
                      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Latest Article
                      </h2>
                      <div className="featured-post group rounded-lg sm:rounded-xl overflow-hidden border-2 border-border hover:border-blue-500 dark:hover:border-blue-400 bg-card hover:bg-accent/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10">
                        <Link
                          href={`/blog/${currentPosts[0].slug}`}
                          className="block"
                          prefetch={true}
                        >
                          <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
                            {/* Image section */}
                            <div className="relative overflow-hidden h-full">
                              {currentPosts[0].featured_image ? (
                                <div className="h-48 sm:h-64 md:h-full">
                                  <Image
                                    src={currentPosts[0].featured_image}
                                    alt={currentPosts[0].title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    width={800}
                                    height={600}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                  />
                                </div>
                              ) : (
                                <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-48 sm:h-64 md:h-full flex items-center justify-center">
                                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                                    {currentPosts[0].title.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Content section */}
                            <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                                <time dateTime={currentPosts[0].published_at}>
                                  {new Date(
                                    currentPosts[0].published_at
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </time>
                                <span>•</span>
                                <span className="flex items-center">
                                  <Clock size={12} className="mr-1 sm:mr-1.5" />
                                  {readingTimes[currentPosts[0].id] || 1} min
                                  read
                                </span>
                              </div>

                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                                {currentPosts[0].title}
                              </h3>

                              {currentPosts[0].description && (
                                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 line-clamp-3">
                                  {currentPosts[0].description}
                                </p>
                              )}

                              <div className="mt-auto inline-flex items-center text-sm sm:text-base text-primary font-medium">
                                Read article
                                <ArrowRight
                                  size={14}
                                  className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform"
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </section>

                    {currentPosts.length > 1 && (
                      <section className="mb-8 sm:mb-12">
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            More Articles
                          </h2>
                        </div>
                        <Separator className="mb-6 sm:mb-10 bg-gradient-to-r from-transparent via-border to-transparent" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-x-6 md:gap-y-10">
                          {currentPosts.slice(1).map((post) => {
                            const readingTime = readingTimes[post.id] || 1;

                            return (
                              <article
                                key={post.id}
                                className="group flex flex-col h-full"
                                itemScope
                                itemType="https://schema.org/BlogPosting"
                              >
                                <meta
                                  itemProp="headline"
                                  content={post.title}
                                />
                                {post.description && (
                                  <meta
                                    itemProp="description"
                                    content={post.description}
                                  />
                                )}
                                {post.featured_image && (
                                  <meta
                                    itemProp="image"
                                    content={post.featured_image}
                                  />
                                )}
                                <meta
                                  itemProp="datePublished"
                                  content={new Date(
                                    post.published_at
                                  ).toISOString()}
                                />
                                {post.updated_at && (
                                  <meta
                                    itemProp="dateModified"
                                    content={new Date(
                                      post.updated_at
                                    ).toISOString()}
                                  />
                                )}
                                <meta
                                  itemProp="url"
                                  content={`https://aslanfarboud.com/blog/${post.slug}`}
                                />
                                <div
                                  itemProp="author"
                                  itemScope
                                  itemType="https://schema.org/Person"
                                >
                                  <meta
                                    itemProp="name"
                                    content={post.author || "Aslan Farboud"}
                                  />
                                </div>
                                <div
                                  itemProp="publisher"
                                  itemScope
                                  itemType="https://schema.org/Organization"
                                >
                                  <meta
                                    itemProp="name"
                                    content="Aslan Farboud"
                                  />
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

                                <Link
                                  href={`/blog/${post.slug}`}
                                  className="block h-full"
                                  itemProp="url"
                                  prefetch={true}
                                >
                                  <Card className="h-full overflow-hidden border-2 bg-card hover:bg-accent/30 transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 hover:-translate-y-1">
                                    {post.featured_image && (
                                      <div className="relative overflow-hidden">
                                        <AspectRatio ratio={16 / 9}>
                                          <Image
                                            src={post.featured_image}
                                            alt={post.title}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                            itemProp="image"
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                          />
                                        </AspectRatio>
                                      </div>
                                    )}
                                    <CardContent className="p-4 sm:p-5 flex flex-col flex-grow">
                                      <div className="flex items-center gap-2 sm:gap-3 text-xs text-muted-foreground mb-2 sm:mb-3">
                                        <time
                                          dateTime={post.published_at}
                                          itemProp="datePublished"
                                        >
                                          {new Date(
                                            post.published_at
                                          ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                          })}
                                        </time>
                                        <span className="flex items-center">
                                          <Clock size={10} className="mr-1" />
                                          {readingTime} min
                                        </span>
                                      </div>

                                      <h2
                                        className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2"
                                        itemProp="headline"
                                      >
                                        {post.title}
                                      </h2>
                                      {post.description && (
                                        <p
                                          className="text-muted-foreground mb-3 sm:mb-4 line-clamp-2 text-xs sm:text-sm"
                                          itemProp="description"
                                        >
                                          {post.description}
                                        </p>
                                      )}
                                      <div className="mt-auto flex items-center justify-end text-primary text-xs sm:text-sm font-medium">
                                        Read more
                                        <ArrowRight
                                          size={12}
                                          className="ml-1 group-hover:translate-x-1 transition-transform"
                                        />
                                      </div>
                                    </CardContent>
                                  </Card>
                                </Link>
                              </article>
                            );
                          })}
                        </div>
                      </section>
                    )}
                  </>
                )}

                {currentPage !== 1 && (
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Page {currentPage}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-x-6 md:gap-y-10">
                      {currentPosts.map((post) => {
                        const readingTime = readingTimes[post.id] || 1;

                        return (
                          <article
                            key={post.id}
                            className="group flex flex-col h-full"
                            itemScope
                            itemType="https://schema.org/BlogPosting"
                          >
                            <meta itemProp="headline" content={post.title} />
                            {post.description && (
                              <meta
                                itemProp="description"
                                content={post.description}
                              />
                            )}
                            {post.featured_image && (
                              <meta
                                itemProp="image"
                                content={post.featured_image}
                              />
                            )}
                            <meta
                              itemProp="datePublished"
                              content={new Date(
                                post.published_at
                              ).toISOString()}
                            />
                            {post.updated_at && (
                              <meta
                                itemProp="dateModified"
                                content={new Date(
                                  post.updated_at
                                ).toISOString()}
                              />
                            )}
                            <meta
                              itemProp="url"
                              content={`https://aslanfarboud.com/blog/${post.slug}`}
                            />
                            <div
                              itemProp="author"
                              itemScope
                              itemType="https://schema.org/Person"
                            >
                              <meta
                                itemProp="name"
                                content={post.author || "Aslan Farboud"}
                              />
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

                            <Link
                              href={`/blog/${post.slug}`}
                              className="block h-full"
                              itemProp="url"
                              prefetch={true}
                            >
                              <Card className="h-full overflow-hidden border-2 bg-card hover:bg-accent/30 transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 hover:-translate-y-1">
                                {post.featured_image && (
                                  <div className="relative overflow-hidden">
                                    <AspectRatio ratio={16 / 9}>
                                      <Image
                                        src={post.featured_image}
                                        alt={post.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        itemProp="image"
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                      />
                                    </AspectRatio>
                                  </div>
                                )}
                                <CardContent className="p-4 sm:p-5 flex flex-col flex-grow">
                                  <div className="flex items-center gap-2 sm:gap-3 text-xs text-muted-foreground mb-2 sm:mb-3">
                                    <time
                                      dateTime={post.published_at}
                                      itemProp="datePublished"
                                    >
                                      {new Date(
                                        post.published_at
                                      ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                      })}
                                    </time>
                                    <span className="flex items-center">
                                      <Clock size={10} className="mr-1" />
                                      {readingTime} min
                                    </span>
                                  </div>

                                  <h2
                                    className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2"
                                    itemProp="headline"
                                  >
                                    {post.title}
                                  </h2>
                                  {post.description && (
                                    <p
                                      className="text-muted-foreground mb-3 sm:mb-4 line-clamp-2 text-xs sm:text-sm"
                                      itemProp="description"
                                    >
                                      {post.description}
                                    </p>
                                  )}
                                  <div className="mt-auto flex items-center justify-end text-primary text-xs sm:text-sm font-medium">
                                    Read more
                                    <ArrowRight
                                      size={12}
                                      className="ml-1 group-hover:translate-x-1 transition-transform"
                                    />
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          </article>
                        );
                      })}
                    </div>
                  </section>
                )}
              </>
            ) : (
              <div className="text-center py-8 sm:py-12 md:py-16">
                <div className="mb-4 text-4xl sm:text-5xl">📝</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  No posts yet
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Check back soon for new content!
                </p>
              </div>
            )}
          </main>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="flex items-center justify-center space-x-1 sm:space-x-2 pt-8"
              aria-label="Blog pagination"
              role="navigation"
            >
              {prevPage ? (
                <Link
                  href={`/blog?page=${prevPage}`}
                  aria-label="Go to previous page"
                  rel="prev"
                  prefetch={true}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 sm:h-9 sm:w-9 p-0 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="h-8 w-8 sm:h-9 sm:w-9 p-0"
                >
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              )}

              {Array.from({ length: totalPages }).map((_, i) => (
                <Link
                  key={i}
                  href={`/blog?page=${i + 1}`}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={currentPage === i + 1 ? "page" : undefined}
                  prefetch={currentPage === i + 1 ? false : true}
                >
                  <Button
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    size="sm"
                    className={`h-8 w-8 sm:h-9 sm:w-9 p-0 text-xs sm:text-sm ${
                      currentPage === i + 1
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        : "hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400"
                    }`}
                  >
                    {i + 1}
                  </Button>
                </Link>
              ))}

              {nextPage ? (
                <Link
                  href={`/blog?page=${nextPage}`}
                  aria-label="Go to next page"
                  rel="next"
                  prefetch={true}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 sm:h-9 sm:w-9 p-0 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="h-8 w-8 sm:h-9 sm:w-9 p-0"
                >
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              )}
            </nav>
          )}
        </div>
      </>
    );
  } catch (error) {
    console.error("BlogPage - Error rendering page:", error);
    return (
      <div className="container max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Blog
        </h1>
        <div className="bg-destructive/10 p-4 sm:p-6 rounded-lg mt-6 sm:mt-8">
          <h2 className="text-base sm:text-lg font-medium text-destructive mb-2">
            Error loading blog posts
          </h2>
          <p className="text-sm sm:text-base">
            We encountered an issue loading the blog posts. Please try again
            later.
          </p>
          <p className="text-xs text-muted-foreground mt-4">{String(error)}</p>
        </div>
      </div>
    );
  }
}
