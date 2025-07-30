import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Create Supabase client for this request, passing in cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: cookies() }
  )

  // Sign out the user
  await supabase.auth.signOut()

  // Redirect to sign-in page after logout
  return NextResponse.redirect(new URL('/auth/sign-in', request.url))
}
