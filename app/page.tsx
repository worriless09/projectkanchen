export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Crack UPSC, SSC, PCS with Kanchen Academy</h1>
        <p className="mb-6 text-lg">Smart learning with AI-driven revision, flashcards, quizzes & expert faculty.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary font-semibold py-2 px-6 rounded-md">Book a Trial</button>
          <button className="border border-white py-2 px-6 rounded-md">Browse Courses</button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { title: "AI Flashcards", desc: "Spaced repetition powered by Anki-style learning." },
          { title: "PYQ Practice", desc: "Real previous-year questions with analytics." },
          { title: "Smart Dashboard", desc: "Track your progress, reminders & goals." }
        ].map((f, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Course Listing Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Courses</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">UPSC GS Foundation</h3>
              <p className="text-sm mt-2">12 Months | ₹35,000 | Live + Recorded</p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md">Enroll Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Faculty</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4" />
              <h4 className="font-semibold">Dr. Anil Kumar</h4>
              <p className="text-sm">Polity & Governance | 15+ yrs</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-primary text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input className="p-3 rounded text-black" type="text" placeholder="Full Name" />
          <input className="p-3 rounded text-black" type="email" placeholder="Email or Phone" />
          <select className="p-3 rounded text-black">
            <option>Area of Interest</option>
            <option>UPSC</option>
            <option>SSC</option>
            <option>State PCS</option>
          </select>
          <textarea className="p-3 rounded text-black" rows={4} placeholder="Inquiry Details..." />
          <button className="bg-white text-primary font-semibold py-2 px-6 rounded-md">Submit Inquiry</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gray-200">
        © {new Date().getFullYear()} Kanchen Academy. All rights reserved.
      </footer>
    </main>
  );
}
