# Changelog

## 2024-06-26

- Added dynamic blog functionality with Supabase integration
- Implemented dynamic routing for blog posts with `/blog/[slug]` pattern
- Created Supabase schema with optimized indexes for blog post retrieval
- Added API functions for retrieving blog posts and blog post details
- Enhanced blog UI with modern card-based design, animations, and responsive layout
- Added featured post section, reading time estimates, and related posts
- Integrated blog in main navigation for easy access
- Added pagination system for browsing through blog posts
- Enhanced navigation with breadcrumbs and previous/next post links
- Added footers to blog pages with social sharing and site navigation
- Implemented "Back to top" functionality for long blog posts
- Integrated blog with main site layout for consistent user experience
- Fixed client/server component separation for interactive elements

## 2023-11-18

- Integrated blog pages with the main site layout to ensure consistent branding and navigation
- Updated blog listing page to match the main site's design principles
- Added responsive layout for both single blog posts and listing pages
- Created a "Back to top" client component to fix server component event handler issues
- Enhanced navigation between blog posts with previous/next links
- Improved error handling with the blog-specific not-found page

## 2023-11-19

- Added SEO optimization for blog pages
- Implemented structured data (JSON-LD) for blog posts and listing pages
- Added semantic HTML with proper article tags and schema.org attributes
- Created dynamic sitemap.xml and robots.txt files for search engine indexing
- Added rich metadata including OpenGraph and Twitter card data
- Improved image loading with appropriate attributes for better Core Web Vitals
- Enhanced accessibility with proper ARIA attributes and semantic HTML
- Added canonical URLs to prevent duplicate content issues
- Optimized reading time estimation for better user experience
- Added structured data to the home page with person and profile information
- Created reusable metadata utility for consistent SEO implementation across the site

## 2023-11-20

- Implemented comprehensive caching strategies for improved performance
- Added React server-side caching with the cache() function for data fetch deduplication
- Implemented unstable_cache for persistent caching of expensive calculations
- Added ISR-like behavior with revalidate options for blog pages
- Created API routes with proper HTTP caching headers for edge delivery
- Added on-demand revalidation API for cache invalidation
- Implemented client-side caching with SWR for real-time updates
- Added session persistence for SWR cache between page navigations
- Optimized prefetching for faster page transitions
- Improved user experience with better loading states
- Enhanced API response times with edge runtime optimizations

## 2023-11-21

- Fixed Supabase client query chain compatibility issues
- Removed unsupported methods (withTags, abortSignal) from Supabase queries
- Enhanced error handling with try/catch blocks in data fetching functions
- Maintained React cache() for fetch deduplication while simplifying query chain
- Improved error reporting for better debugging
- Fixed SWR provider to properly handle server-side rendering
- Added browser environment detection for sessionStorage access
- Implemented safe client-side caching with useEffect initialization
- Improved error handling for client-side storage operations
- Enhanced cross-environment compatibility for SWR caching
- Fixed database table name in queries from 'posts' to 'blog_posts'
- Simplified pagination logic for better reliability
- Added comprehensive error handling and fallbacks for blog pages
- Added detailed debug logging to help identify issues
- Fixed reading time display to handle missing data gracefully

## 2023-11-22

- Enhanced blog listing page with modern design and improved visual hierarchy
- Added featured article section with prominent display for the most recent post
- Implemented two-column layout for featured articles with side-by-side image and content
- Improved visual separation between featured and regular posts
- Enhanced card design with hover effects, shadows, and smoother transitions
- Optimized typography and spacing for better readability
- Added "Read article" and "Read more" call-to-action elements
- Improved date and reading time display format
- Updated responsive design for better mobile experience
- Cleaned up unused imports and optimized code structure
- Enhanced visual feedback for interactive elements

## 2023-11-23

- Added image domain configuration to Next.js config to support external image sources
- Configured support for multiple image providers including Unsplash and Cloudinary
- Fixed image loading issues in the blog featured and card components
- Created first blog post introducing the site and author
- Ensured proper image optimization through Next.js Image component
- Added Supabase storage domain to approved image sources for blog images
