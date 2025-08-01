'use client'
import useScrollReveal from '@/hooks/useScrollReveal'

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Learning',
    description: 'Tailored study plans powered by AI.'
  },
  {
    icon: '🎯',
    title: 'Personalized Coaching',
    description: 'Customized syllabus per student.'
  },
  {
    icon: '🌐',
    title: 'Global Faculty',
    description: 'Top educators from across India.'
  }
]

export default function FeaturesSection() {
  const { domRef, isRevealed } = useScrollReveal()

  return (
    <section
      ref={domRef}
      className={`scroll-reveal ${isRevealed ? 'revealed' : ''} py-20 bg-[#EAF0EF]`}
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#2C3E3A]">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-6">{icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
