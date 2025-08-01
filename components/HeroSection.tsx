'use client'
import useScrollReveal from '@/hooks/useScrollReveal'

export default function HeroSection() {
  const { domRef, isRevealed } = useScrollReveal()

  return (
    <section
      ref={domRef}
      className={`gradient-hero min-h-[60vh] flex items-center justify-center py-24 px-6 transition-opacity transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-[#2C3E3A]">
          Welcome to <span className="text-primary">Kanchen Academy</span>
        </h1>
        <p className="text-lg text-[#6B7B77] max-w-lg mx-auto">
          Personalized UPSC, SSC, PCS coaching with AI-powered tools and expert faculty.
        </p>
        <button className="mt-10 bg-primary text-white py-3 px-8 rounded shadow hover:bg-primary-dark transition">
          Book Your Trial Class
        </button>
      </div>
    </section>
  )
}
