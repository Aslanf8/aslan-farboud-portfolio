import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug } from '@/lib/blog';

// Set appropriate caching headers
export const runtime = 'edge'; // Use edge runtime for better performance

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  try {
    const slug = context.params.slug;
    
    console.log(`API /posts/[slug] - Fetching post with slug: ${slug}`);
    
    if (!slug) {
      return NextResponse.json(
        { message: 'Slug is required' },
        { status: 400 }
      );
    }
    
    const post = await getPostBySlug(slug);
    
    console.log(`API /posts/[slug] - Post found: ${post ? 'Yes' : 'No'}`);
    
    if (!post) {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }
    
    // Set headers for client-side caching
    return NextResponse.json(post, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600',
        'CDN-Cache-Control': 'public, max-age=60, stale-while-revalidate=600',
        'Vercel-CDN-Cache-Control': 'public, max-age=60, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error(`Error fetching post with slug ${context.params.slug}:`, error);
    return NextResponse.json(
      { message: 'Error fetching post', error: (error as Error).message },
      { status: 500 }
    );
  }
} 