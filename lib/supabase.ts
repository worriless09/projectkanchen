import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

export const createClient = () =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { 
        cookies: cookies(), // ✅ Call the function to get the cookie object
    }
  );
