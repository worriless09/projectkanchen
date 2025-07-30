'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SignUpPage() {
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth event:', event, session ? 'with session' : 'no session')

      if (event === 'SIGNED_IN' && session) {
        const createdAt = new Date(session.user.created_at).getTime()
        const now = new Date().getTime()

        const isNewUser = now - createdAt < 10 * 1000 // within 10 seconds

        if (isNewUser) {
          router.push('/auth/confirm-email')
        } else {
          router.push('/dashboard')
        }
      }
    })

    return () => subscription.unsubscribe()
  }, [supabase, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Join Kanchen Academy</h1>
          <p className="text-gray-600 mt-2">Start your UPSC/SSC success journey</p>
        </div>

        <Auth
          supabaseClient={supabase}
          view="sign_up"
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#7A9A95',
                  brandAccent: '#6B8B87',
                  inputBackground: 'white',
                  inputText: '#1f2937',
                  inputBorder: '#d1d5db',
                  inputBorderFocus: '#7A9A95',
                },
              },
            },
          }}
          providers={['google']}
          redirectTo={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`}
          onlyThirdPartyProviders={false}
          magicLink={false}
          showLinks={true}
        />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a
              href="/auth/sign-in"
              className="font-medium text-[#7A9A95] hover:text-[#6B8B87] transition-colors"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
