export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      tag: 'UPSC CSE Topper',
      text:
        'AI flashcards + spaced-repetition let me retain vast info. Cleared Prelims first try!',
    },
    {
      id: 2,
      name: 'Rohit Kumar',
      tag: 'SSC CGL Selected',
      text:
        'Faculty, study-plan and mock tests mirror the real exam. Highly recommended.',
    },
    {
      id: 3,
      name: 'Anjali Patel',
      tag: 'State PCS Officer',
      text:
        'State-specific modules gave me the edge. Kanchen was the game-changer.',
    },
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ink mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aspirants who turned dreams into reality with Kanchen Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-lg shadow-card hover:shadow-hover transition-all p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">
                    {r.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-ink">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.tag}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">“{r.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
