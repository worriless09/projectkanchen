export default function FacultySection() {
  const faculty = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      subject: 'History & Geography',
      exp: '15 years',
      bio: 'Former IAS officer with extensive UPSC-teaching experience.',
      badges: ['500+ toppers', 'Author of 3 books'],
    },
    {
      id: 2,
      name: 'Prof. Anita Sharma',
      subject: 'Maths & Reasoning',
      exp: '12 years',
      bio: 'Quantitative-aptitude mentor for SSC & banking exams.',
      badges: ['1000+ selections', 'Teaching-Excellence Award'],
    },
    {
      id: 3,
      name: 'Dr. Vikram Singh',
      subject: 'Polity & Current Affairs',
      exp: '18 years',
      bio: 'Political-science scholar and media commentator.',
      badges: ['Author of 5 books', '300+ PCS officers'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ink mb-4">Meet Our Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veteran educators and former civil-servants guiding your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((f) => (
            <div
              key={f.id}
              className="text-center bg-white rounded-lg shadow-card hover:shadow-hover transition-all p-8"
            >
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">
                  {f.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-ink">{f.name}</h3>
              <p className="text-primary font-medium">{f.subject}</p>
              <p className="text-sm text-gray-500 mb-4">{f.exp} experience</p>
              <p className="text-sm text-gray-600 mb-4">{f.bio}</p>

              {f.badges.map((b) => (
                <p key={b} className="text-xs text-gray-500">• {b}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
