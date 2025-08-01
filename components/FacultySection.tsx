'use client'
const faculty = [
  { name: 'Dr. Sanjeev Sharma', subject: 'History', experience: '12 years', qualification: 'PhD Ancient History', achievement: 'Best Teacher 2019' },
  { name: 'Ms. Anjali Verma', subject: 'Economics', experience: '8 years', qualification: 'M.A. Economics', achievement: 'Author, Top Mentor' },
];

import useScrollReveal from '@/hooks/useScrollReveal'

export default function FacultySection() {
  return (
    <section className="py-20 bg-[#EAF0EF]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#2C3E3A]">Our Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculty.map((f) => (
            <div key={f.name} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-full bg-primary mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {f.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold mb-1">{f.name}</h3>
              <p className="text-gray-700 mb-1">{f.subject}</p>
              <p className="text-gray-600 text-sm">{f.experience} experience</p>
              <p className="text-gray-600 text-sm">{f.qualification}</p>
              <p className="mt-2 text-gray-500 text-sm italic">"{f.achievement}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
