import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';

export function createClient(cookies: any) {
  return createServerComponentSupabaseClient({ cookies });
}
