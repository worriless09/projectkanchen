export default function ConfirmEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h1>
          <p className="text-gray-600">
            We've sent you a confirmation link at your email address.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Next steps:</strong>
              <br />
              1. Check your email inbox
              <br />
              2. Click the confirmation link
              <br />
              3. Start learning at Kanchen Academy!
            </p>
          </div>

          <p className="text-xs text-gray-500">
            Didn't receive the email? Check your spam folder or{' '}
            <a href="/contact" className="text-primary hover:underline">
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
