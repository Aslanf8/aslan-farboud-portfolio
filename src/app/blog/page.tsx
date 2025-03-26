import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
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
  async (
    postContents: { id: number; content: string }[]
  ): Promise<Record<number, number>> => {
    const wordsPerMinute = 200;
    const readingTimes: Record<number, number> = {};

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
  searchParams: { page?: string };
}) {
  console.log("BlogPage - Component starting to render");

  // Get the current page from the URL params or default to 1
  const currentPage = Number(searchParams.page) || 1;
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

        <div className="container max-w-5xl mx-auto px-4 py-12">
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Articles and thoughts on web development, technology, and more.
            </p>
          </header>

          <main className="mb-20" aria-label="Blog posts">
            {currentPosts.length > 0 ? (
              <>
                {currentPage === 1 && currentPosts.length > 0 && (
                  <>
                    {/* Featured Post (most recent) */}
                    <section className="mb-16">
                      <h2 className="text-2xl font-bold mb-6">
                        Latest Article
                      </h2>
                      <div className="featured-post group rounded-xl overflow-hidden border border-border bg-card hover:bg-accent/10 transition-all duration-300 shadow-sm hover:shadow-md">
                        <Link
                          href={`/blog/${currentPosts[0].slug}`}
                          className="block"
                          prefetch={true}
                        >
                          <div className="md:grid grid-cols-2 gap-0">
                            {/* Image section */}
                            <div className="relative overflow-hidden h-full">
                              {currentPosts[0].featured_image ? (
                                <div className="h-full">
                                  {/* <img
                                    src={currentPosts[0].featured_image}
                                    alt={currentPosts[0].title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                  /> */}
                                  <Image
                                    src={currentPosts[0].featured_image}
                                    alt={currentPosts[0].title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    width={1000}
                                    height={1000}
                                  />
                                </div>
                              ) : (
                                <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-full flex items-center justify-center">
                                  <span className="text-5xl font-bold text-primary">
                                    {currentPosts[0].title.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Content section */}
                            <div className="p-6 md:p-8 flex flex-col justify-center">
                              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
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
                                  <Clock size={14} className="mr-1.5" />
                                  {readingTimes[currentPosts[0].id] || 1} min
                                  read
                                </span>
                              </div>

                              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                                {currentPosts[0].title}
                              </h3>

                              {currentPosts[0].description && (
                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                  {currentPosts[0].description}
                                </p>
                              )}

                              <div className="mt-auto inline-flex items-center text-primary font-medium">
                                Read article
                                <ArrowRight
                                  size={16}
                                  className="ml-2 group-hover:translate-x-1 transition-transform"
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </section>

                    {currentPosts.length > 1 && (
                      <section className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-2xl font-bold">More Articles</h2>
                        </div>
                        <Separator className="mb-10" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
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
                                  <Card className="h-full overflow-hidden border bg-card hover:bg-accent/30 transition-colors duration-300 hover:border-accent hover:shadow-md">
                                    {post.featured_image && (
                                      <div className="relative overflow-hidden">
                                        <AspectRatio ratio={16 / 9}>
                                          {/* <img
                                            src={post.featured_image}
                                            alt={post.title}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                            itemProp="image"
                                          /> */}
                                          <Image
                                            src={post.featured_image}
                                            alt={post.title}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                            itemProp="image"
                                            width={1000}
                                            height={1000}
                                          />
                                        </AspectRatio>
                                      </div>
                                    )}
                                    <CardContent className="p-5 flex flex-col flex-grow">
                                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
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
                                          <Clock size={12} className="mr-1" />
                                          {readingTime} min
                                        </span>
                                      </div>

                                      <h2
                                        className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2"
                                        itemProp="headline"
                                      >
                                        {post.title}
                                      </h2>
                                      {post.description && (
                                        <p
                                          className="text-muted-foreground mb-4 line-clamp-2 text-sm"
                                          itemProp="description"
                                        >
                                          {post.description}
                                        </p>
                                      )}
                                      <div className="mt-auto flex items-center justify-end text-primary text-sm font-medium">
                                        Read more
                                        <ArrowRight
                                          size={14}
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
                    <h2 className="text-2xl font-bold mb-10">
                      Page {currentPage}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
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
                              <Card className="h-full overflow-hidden border bg-card hover:bg-accent/30 transition-colors duration-300 hover:border-accent hover:shadow-md">
                                {post.featured_image && (
                                  <div className="relative overflow-hidden">
                                    <AspectRatio ratio={16 / 9}>
                                      {/* <img
                                        src={post.featured_image}
                                        alt={post.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        itemProp="image"
                                      /> */}
                                      <Image
                                        src={post.featured_image}
                                        alt={post.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        itemProp="image"
                                        width={1000}
                                        height={1000}
                                      />
                                    </AspectRatio>
                                  </div>
                                )}
                                <CardContent className="p-5 flex flex-col flex-grow">
                                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
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
                                      <Clock size={12} className="mr-1" />
                                      {readingTime} min
                                    </span>
                                  </div>

                                  <h2
                                    className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2"
                                    itemProp="headline"
                                  >
                                    {post.title}
                                  </h2>
                                  {post.description && (
                                    <p
                                      className="text-muted-foreground mb-4 line-clamp-2 text-sm"
                                      itemProp="description"
                                    >
                                      {post.description}
                                    </p>
                                  )}
                                  <div className="mt-auto flex items-center justify-end text-primary text-sm font-medium">
                                    Read more
                                    <ArrowRight
                                      size={14}
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
              <div className="text-center py-16">
                <div className="mb-4 text-5xl">📝</div>
                <h3 className="text-2xl font-semibold mb-2">No posts yet</h3>
                <p className="text-muted-foreground">
                  Check back soon for new content!
                </p>
              </div>
            )}
          </main>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="flex items-center justify-center space-x-2"
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
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button variant="outline" size="icon" disabled>
                  <ChevronLeft className="h-4 w-4" />
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
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button variant="outline" size="icon" disabled>
                  <ChevronRight className="h-4 w-4" />
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
      <div className="container max-w-5xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Blog
        </h1>
        <div className="bg-destructive/10 p-6 rounded-lg mt-8">
          <h2 className="text-lg font-medium text-destructive mb-2">
            Error loading blog posts
          </h2>
          <p>
            We encountered an issue loading the blog posts. Please try again
            later.
          </p>
          <p className="text-xs text-muted-foreground mt-4">{String(error)}</p>
        </div>
      </div>
    );
  }
}
