import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Check if required environment variables are defined
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a singleton instance of the Supabase client
const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey);

// Export the createClient function that returns the singleton instance
export function createClient() {
  return supabase;
}

// Also export the default client for backward compatibility
export default supabase; 