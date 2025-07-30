'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRightIcon, PlayIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      
      {/* Clean Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">Kanchen Academy</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Features</a>
              <a href="#courses" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Courses</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm font-medium">About</a>
              <Link href="/auth/sign-in" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Sign In
              </Link>
              <Link 
                href="/auth/sign-up"
                className="bg-[#7A9A95] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#6B8B86] transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Features</a>
                <a href="#courses" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Courses</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm font-medium">About</a>
                <Link href="/auth/sign-in" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  Sign In
                </Link>
                <Link 
                  href="/auth/sign-up"
                  className="bg-[#7A9A95] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#6B8B86] transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Clean & Minimal */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              10,000+ Students Successfully Placed
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Master UPSC & SSC with
              <span className="text-[#7A9A95] block">AI-Powered Learning</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Personalized study plans, smart flashcards, and expert guidance. 
              Everything you need to crack competitive exams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/auth/sign-up"
                className="bg-[#7A9A95] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#6B8B86] transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="border border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-300 transition-colors flex items-center justify-center">
                <PlayIcon className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                </div>
                <span>Join 10,000+ students</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★★★★★</span>
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Clean Cards */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI-powered tools and expert guidance for UPSC & SSC preparation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="AI-Powered Flashcards"
              description="Smart spaced repetition adapts to your learning pace for maximum retention"
              icon="🧠"
            />
            <FeatureCard 
              title="Expert Faculty"
              description="Learn from top educators and former civil servants with proven results"
              icon="👨‍🏫"
            />
            <FeatureCard 
              title="Progress Tracking"
              description="Detailed analytics help you identify strengths and improvement areas"
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-20 bg-[#7A9A95]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to start your success journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful candidates who achieved their dreams
          </p>
          <Link 
            href="/auth/sign-up"
            className="inline-flex items-center bg-white text-[#7A9A95] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Get Started Today
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            
            <div>
              <div className="text-xl font-semibold text-gray-900 mb-4">Kanchen Academy</div>
              <p className="text-gray-600 text-sm">
                Empowering UPSC & SSC aspirants with world-class education.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Courses</h3>
              <div className="space-y-2 text-sm">
                <div className="text-gray-600">UPSC Civil Services</div>
                <div className="text-gray-600">SSC CGL</div>
                <div className="text-gray-600">State PCS</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Careers</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <div className="space-y-2 text-sm">
                <div className="text-gray-600">help@kanchenacademy.com</div>
                <div className="text-gray-600">+91 98765 43210</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-gray-600 text-sm">
            © 2024 Kanchen Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

// Clean Feature Card Component
function FeatureCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
