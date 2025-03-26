import useSWR from 'swr';
import { BlogPost } from '@/lib/blog';

// Basic fetcher function for JSON data
const fetcher = (url: string) => fetch(url).then(res => res.json());

// Hook for fetching latest blog posts with client-side caching
export function useLatestPosts(count: number = 3) {
  const { data, error, isLoading, mutate } = useSWR<BlogPost[]>(
    `/api/posts?limit=${count}`, 
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
      refreshInterval: 300000, // 5 minutes
      fallbackData: [], // Start with empty array while loading
    }
  );

  return {
    posts: data || [],
    isLoading,
    isError: error,
    mutate
  };
}

// Hook for fetching a single blog post with client-side caching
export function usePost(slug: string) {
  const { data, error, isLoading, mutate } = useSWR<BlogPost>(
    `/api/posts/${slug}`, 
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000, // 1 minute
      refreshInterval: 0, // No automatic refreshing for post content
    }
  );

  return {
    post: data,
    isLoading,
    isError: error,
    mutate
  };
}

// Hook for prefetching posts (called on hover)
export function prefetchPost(slug: string) {
  return fetcher(`/api/posts/${slug}`);
} 