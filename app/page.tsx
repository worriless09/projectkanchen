// app/page.tsx
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import CoursesSection from '@/components/CoursesSection'
import FacultySection from '@/components/FacultySection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanchen Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white text-ink min-h-screen font-sans">
        {/* Navbar Component */}
        <Navbar />

        {/* Hero Section Component */}
        <HeroSection />

        {/* Features Section Component */}
        <FeaturesSection />

        {/* Courses Section Component */}
        <CoursesSection />
        
        {/* Stats Section Component */}
        <StatsSection />

        {/* Testimonials Section Component */}
        <TestimonialsSection />

        {/* CTA Section Component */}
        <CTASection />

        {/* Contact Form Component */}
        <ContactForm />

        {/* Footer Component */}
        <Footer />
      </main>
    </>
  )
}
