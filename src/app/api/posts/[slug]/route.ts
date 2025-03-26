import { getPostBySlug } from '@/lib/blog';

// Set appropriate caching headers
export const runtime = 'edge'; // Use edge runtime for better performance

export async function GET(request: Request) {
  try {
    // Extract slug from URL
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const slug = pathParts[pathParts.length - 1];
    
    const post = await getPostBySlug(slug);
    
    if (!post) {
      return new Response(JSON.stringify({ message: 'Post not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify(post), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      message: 'Error fetching post', 
      error: (error as Error).message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 