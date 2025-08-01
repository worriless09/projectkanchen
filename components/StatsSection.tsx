'use client'
const stats = [
  { label: 'Students', value: '1000+', icon: '🎓' },
  { label: 'Courses', value: '14+', icon: '📚' },
  { label: 'Faculty', value: '20+', icon: '👩‍🏫' },
];

import useScrollReveal from '@/hooks/useScrollReveal'

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#F8FAFA] p-6 shadow rounded-lg">
            <div className="text-4xl mb-2">{s.icon}</div>
            <div className="text-3xl font-bold text-primary">{s.value}</div>
            <div className="mt-2 text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
