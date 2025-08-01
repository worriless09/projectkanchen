'use client'
import useScrollReveal from '@/hooks/useScrollReveal'

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-[#EAF0EF]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#2C3E3A]">Contact Us</h2>
        <form className="space-y-6" onSubmit={e => {e.preventDefault(); alert('Submitted!')}}>
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-700 font-semibold">Name</label>
            <input id="name" type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-700 font-semibold">Email</label>
            <input id="email" type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-gray-700 font-semibold">Message</label>
            <textarea id="message" rows={5} placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500" required />
          </div>
          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </section>
  )
}
