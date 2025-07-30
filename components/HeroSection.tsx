import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-ink mb-6 animate-fadeInUp">
            Master <span className="text-primary">UPSC</span>, <span className="text-primary">SSC</span> & 
            <span className="text-primary"> State PCS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            AI-powered learning with spaced repetition flashcards, expert coaching, 
            and smart progress tracking. Join 10,000+ successful aspirants.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <Link href="/dashboard" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all hover:shadow-hover group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
