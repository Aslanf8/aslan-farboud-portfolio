import { Metadata } from "next";

type MetadataProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  noIndex?: boolean;
  alternates?: {
    canonical?: string;
  };
};

export function constructMetadata({
  title = "Aslan Farboud | Web Developer & Designer",
  description = "Personal portfolio of Aslan Farboud, a web developer and designer specializing in modern web technologies and user experience.",
  keywords = ["web developer", "designer", "portfolio", "frontend", "backend", "full stack", "Aslan Farboud"],
  image = "/images/og-image.png", // Ensure this image exists in the public directory
  type = "website",
  publishedTime,
  authors = ["Aslan Farboud"],
  noIndex = false,
  alternates,
}: MetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aslanfarboud.com";
  
  return {
    title,
    description,
    keywords,
    authors: authors.map(author => ({ name: author })),
    creator: "Aslan Farboud",
    publisher: "Aslan Farboud",
    
    // Open Graph metadata
    openGraph: {
      type,
      title,
      description,
      siteName: "Aslan Farboud Portfolio",
      url: baseUrl,
      images: image ? [{ url: image, alt: title }] : undefined,
      publishedTime,
      authors,
    },
    
    // Twitter metadata
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
      creator: "@aslanfarboud",
    },
    
    // SEO controls
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    
    // Canonical URL
    alternates: {
      canonical: alternates?.canonical || baseUrl,
    },
    
    // App metadata
    applicationName: "Aslan Farboud Portfolio",
    appleWebApp: {
      capable: true,
      title,
      statusBarStyle: "default",
    },
    
    // Verification
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      other: {
        me: ["https://twitter.com/aslanfarboud", "https://github.com/aslanfarboud"],
      },
    },
    
    // Content type
    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true,
    },
  };
}

// Helper function to create blog post metadata
export function createBlogMetadata({
  title,
  description,
  slug,
  image,
  publishedTime,
  authors = ["Aslan Farboud"],
  keywords = [],
}: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedTime: string;
  authors?: string[];
  keywords?: string[];
}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aslanfarboud.com";
  const url = `${baseUrl}/blog/${slug}`;
  
  return constructMetadata({
    title: `${title} | Aslan Farboud Blog`,
    description,
    keywords: [...keywords, "blog", "article", "web development"],
    image,
    type: "article",
    publishedTime,
    authors,
    alternates: {
      canonical: url,
    },
  });
} 