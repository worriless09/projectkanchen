export default function StatsSection() {
  const stats = [
    { number: '10,000+', label: 'Students Enrolled' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Expert Faculty' },
    { number: '1000+', label: 'Hours of Content' },
  ]

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">
                {stat.number}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
