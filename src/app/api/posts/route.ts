import { getAllPosts } from '@/lib/blog';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limitParam = url.searchParams.get('limit');
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;
    
    const posts = await getAllPosts();
    const limitedPosts = limit ? posts.slice(0, limit) : posts;
    
    return new Response(JSON.stringify(limitedPosts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      message: 'Error fetching posts', 
      error: (error as Error).message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 