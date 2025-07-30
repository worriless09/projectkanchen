// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'

export function createClient(p0: string, p1: string) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
