import { createServerClient } from '@supabase/ssr'

/**
 * Creates a Supabase client for server-side usage (API routes, server components).
 */
export function createClient(p0: string, p1: string) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    
  );
}
