'use client'
const testimonials = [
  { name: 'Rajesh Kumar', text: 'Fantastic teachers and supportive environment.', role: 'UPSC Aspirant' },
  // More testimonials ...
];

import useScrollReveal from '@/hooks/useScrollReveal'

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#2C3E3A]">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 border rounded shadow hover:shadow-lg transition bg-gradient-to-br from-[#f0f5f3] to-[#d9f0e4]">
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <h4 className="font-semibold text-primary">{t.name}</h4>
              <span className="text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
