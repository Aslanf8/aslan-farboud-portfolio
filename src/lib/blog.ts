import { createClient } from '@/lib/supabase';
import { cache } from 'react';
import { revalidateTag } from 'next/cache';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  featured_image?: string;
  author?: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

/**
 * Fetch all blog posts
 */
export const getAllPosts = cache(async () => {
  const supabase = createClient();
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('published_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching all posts:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [];
  }
});

/**
 * Fetch a single blog post by slug
 */
export const getPostBySlug = cache(async (slug: string) => {
  const supabase = createClient();
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single();
      
    if (error) {
      console.error(`Error fetching post with slug ${slug}:`, error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error(`Error in getPostBySlug for slug ${slug}:`, error);
    return null;
  }
});

/**
 * Get all post slugs (for static generation)
 */
export const getAllSlugs = cache(async () => {
  const supabase = createClient();
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug')
      .order('published_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching all slugs:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in getAllSlugs:', error);
    return [];
  }
});

// Function to revalidate all blog data
export async function revalidateBlogData() {
  revalidateTag('posts');
  revalidateTag('post-slugs');
}

// Function to revalidate a specific post
export async function revalidatePost(slug: string) {
  revalidateTag(`post-${slug}`);
} 