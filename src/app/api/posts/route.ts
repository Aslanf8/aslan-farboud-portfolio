import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';

// Set appropriate caching headers
export const runtime = 'edge'; // Use edge runtime for better performance

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get('limit');
    
    console.log(`API /posts - Fetching posts with limit: ${limitParam}`);
    
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;
    const posts = await getAllPosts();
    
    console.log(`API /posts - Found ${posts.length} posts`);
    
    // Apply limit if specified
    const limitedPosts = limit ? posts.slice(0, limit) : posts;
    
    return NextResponse.json(limitedPosts, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        'CDN-Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
        'Vercel-CDN-Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { message: 'Error fetching posts', error: (error as Error).message },
      { status: 500 }
    );
  }
} 