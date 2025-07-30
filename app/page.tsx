export default function Home() {
  return (
    <main className="bg-white text-ink min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Crack UPSC, SSC, PCS with <span className="underline decoration-secondary decoration-4">Kanchen Academy</span>
        </h1>
        <p className="mb-8 text-lg md:text-xl max-w-xl mx-auto">
          Smart learning with AI-driven revision, flashcards, quizzes & expert faculty.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xs mx-auto">
          <button className="bg-white text-primary font-semibold py-3 px-8 rounded-md shadow-md hover:shadow-lg transition focus:outline-none focus:ring-4 focus:ring-secondary">
            Book a Trial
          </button>
          <button className="border border-white py-3 px-8 rounded-md hover:bg-white hover:text-primary transition focus:outline-none focus:ring-4 focus:ring-secondary">
            Browse Courses
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {[
          { title: 'AI Flashcards', desc: 'Spaced repetition powered by Anki-style learning.' },
          { title: 'PYQ Practice', desc: 'Real previous-year questions with analytics.' },
          { title: 'Smart Dashboard', desc: 'Track your progress, reminders & goals.' },
        ].map((feature, i) => (
          <article
            key={i}
            className="bg-accent rounded-lg p-8 shadow-card hover:shadow-hover transition"
          >
            <h3 className="font-semibold text-2xl mb-4 text-primary">{feature.title}</h3>
            <p className="text-gray-700">{feature.desc}</p>
          </article>
        ))}
      </section>

      {/* Course Listing Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center text-ink">Popular Courses</h2>
        <div className="grid gap-8 max-w-7xl mx-auto md:grid-cols-3">
          {[1, 2, 3].map((id) => (
            <article key={id} className="bg-white p-6 rounded-lg shadow-card flex flex-col">
              <h3 className="text-xl font-semibold text-primary mb-2">UPSC GS Foundation</h3>
              <p className="text-sm text-gray-600 mb-4">
                12 Months &nbsp;|&nbsp; ₹35,000 &nbsp;|&nbsp; Live + Recorded
              </p>
              <button
                className="mt-auto bg-primary text-white py-3 rounded-md shadow hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-secondary transition"
                aria-label="Enroll in UPSC GS Foundation course"
              >
                Enroll Now
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-ink">Our Faculty</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((id) => (
            <article
              key={id}
              className="bg-accent rounded-lg p-6 text-center shadow-card"
            >
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gray-300" />
              <h3 className="font-semibold text-lg text-primary mb-1">Dr. Anil Kumar</h3>
              <p className="text-sm text-gray-700">Polity & Governance | 15+ yrs</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-primary text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <form className="max-w-xl mx-auto grid gap-6" aria-label="Contact form">
          <label htmlFor="name" className="sr-only">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            required
            className="p-4 rounded text-ink focus:outline-none focus:ring-4 focus:ring-secondary"
          />

          <label htmlFor="contact" className="sr-only">Email or Phone</label>
          <input
            id="contact"
            type="email"
            placeholder="Email or Phone"
            required
            className="p-4 rounded text-ink focus:outline-none focus:ring-4 focus:ring-secondary"
          />

          <label htmlFor="interest" className="sr-only">Area of Interest</label>
          <select
            id="interest"
            required
            className="p-4 rounded text-ink focus:outline-none focus:ring-4 focus:ring-secondary"
            defaultValue=""
          >
            <option value="" disabled>Area of Interest</option>
            <option>UPSC</option>
            <option>SSC</option>
            <option>State PCS</option>
          </select>

          <label htmlFor="details" className="sr-only">Inquiry Details</label>
          <textarea
            id="details"
            rows={4}
            placeholder="Inquiry Details..."
            className="p-4 rounded text-ink focus:outline-none focus:ring-4 focus:ring-secondary"
          />
          <button
            type="submit"
            className="bg-white text-primary font-semibold py-3 px-6 rounded-md shadow hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-secondary transition"
          >
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gray-200 text-gray-700">
        © {new Date().getFullYear()} Kanchen Academy. All rights reserved.
      </footer>
    </main>
  )
}
