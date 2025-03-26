import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get the secret token from the request
    const secret = searchParams.get('secret');
    
    // Check if the secret is valid
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { message: 'Invalid revalidation secret' },
        { status: 401 }
      );
    }
    
    // Get the type of revalidation to perform
    const type = searchParams.get('type');
    
    if (type === 'path') {
      // Revalidate by path
      const path = searchParams.get('path');
      
      if (!path) {
        return NextResponse.json(
          { message: 'Path parameter is missing' },
          { status: 400 }
        );
      }
      
      // Revalidate the path
      revalidatePath(path);
      
      return NextResponse.json(
        { 
          revalidated: true,
          message: `Path ${path} revalidated successfully`
        }
      );
    } else if (type === 'tag') {
      // Revalidate by tag
      const tag = searchParams.get('tag');
      
      if (!tag) {
        return NextResponse.json(
          { message: 'Tag parameter is missing' },
          { status: 400 }
        );
      }
      
      // Revalidate the tag
      revalidateTag(tag);
      
      return NextResponse.json(
        { 
          revalidated: true,
          message: `Tag ${tag} revalidated successfully`
        }
      );
    } else if (type === 'blog') {
      // Revalidate all blog tags
      revalidateTag('posts');
      revalidateTag('post-slugs');
      revalidateTag('blog-pagination');
      revalidateTag('related-posts');
      revalidateTag('reading-time');
      
      // Also revalidate blog paths
      revalidatePath('/blog');
      
      return NextResponse.json(
        { 
          revalidated: true,
          message: 'Blog cache revalidated successfully'
        }
      );
    } else {
      return NextResponse.json(
        { message: 'Invalid revalidation type. Use "path", "tag", or "blog"' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating cache', error: (error as Error).message },
      { status: 500 }
    );
  }
}

// Enable revalidation API from GET requests too for easier testing
export async function GET(request: NextRequest) {
  return POST(request);
} 