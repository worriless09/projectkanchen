/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features if needed
  experimental: {
    // Remove appDir - it's now stable
    // Add other experimental features if needed
    serverComponentsExternalPackages: ['@supabase/supabase-js']
  },
  
  // Optimize images
  images: {
    domains: ['your-supabase-project.supabase.co'], // Add your Supabase storage domain
    formats: ['image/webp', 'image/avif']
  },

  // Environment variables (optional)
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  }
}

module.exports = nextConfig
