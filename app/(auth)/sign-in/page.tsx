'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SignInPage() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const router = useRouter()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          router.push('/dashboard')
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [supabase, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to Kanchen Academy</p>
        </div>

        <Auth
          supabaseClient={supabase}
          view="sign_in"
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#7A9A95',        // Your Misty Mountains primary
                  brandAccent: '#6B8B87',  // Darker shade for hover
                  inputBackground: 'white',
                  inputText: '#1f2937',
                  inputBorder: '#d1d5db',
                  inputBorderFocus: '#7A9A95',
                  inputBorderHover: '#9CA3AF'
                },
                space: {
                  inputPadding: '12px',
                  buttonPadding: '12px 24px'
                },
                borderWidths: {
                  buttonBorderWidth: '1px',
                  inputBorderWidth: '1px'
                },
                radii: {
                  borderRadiusButton: '6px',
                  buttonBorderRadius: '6px',
                  inputBorderRadius: '6px'
                }
              }
            },
            className: {
              container: 'w-full',
              button: 'w-full font-medium transition-colors',
              input: 'w-full transition-colors',
              label: 'text-sm font-medium text-gray-700'
            }
          }}
          providers={['google']}
          redirectTo={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`}
          onlyThirdPartyProviders={false}
          magicLink={true}
          showLinks={true}
        />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a 
              href="/auth/sign-up" 
              className="font-medium text-[#7A9A95] hover:text-[#7A9A95]/80 transition-colors"
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
