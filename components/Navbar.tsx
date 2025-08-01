'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow px-6 py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Kanchen Academy
        </Link>

        <button
          className="md:hidden block text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        <div
          className={`md:flex md:items-center w-full md:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="md:flex space-y-3 md:space-y-0 md:space-x-6 text-primary font-semibold">
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/faculty">Faculty</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/sign-in" className="btn-primary px-4 py-2 rounded">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
