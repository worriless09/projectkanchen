'use client'


const courses = [
  { name: 'UPSC Civil Services', category: 'UPSC', duration: '8 months', batch: 'Morning', fee: '₹16000',
    features: ['Recorded sessions', 'Practice questions', 'Doubt resolution'] },
  // More courses...
];
import useScrollReveal from '@/hooks/useScrollReveal'

export default function CoursesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#2C3E3A]">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((c) => (
            <div key={c.name} className="border rounded-lg shadow p-6 hover:shadow-lg transition bg-white">
              <h3 className="text-2xl font-semibold text-primary mb-2">{c.name}</h3>
              <p className="text-gray-700 font-semibold">{c.category}</p>
              <p className="mb-2 text-gray-600">{c.duration} — {c.batch}</p>
              <p className="font-bold mb-2 text-primary">Fee: {c.fee}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {c.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <button className="btn-primary w-full">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
