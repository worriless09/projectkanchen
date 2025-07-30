import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies as nextCookies, headers as nextHeaders } from 'next/headers'

export function createClient() {
  return createServerComponentClient({
    cookies: () => nextCookies(),
    
  })
}
