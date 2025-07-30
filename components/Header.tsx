'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Kanchen Academy
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link href="/courses" className="text-gray-700 hover:text-primary transition-colors">Courses</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
            <Link href="/dashboard" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              Dashboard
            </Link>
          </nav>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="py-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Home</Link>
              <Link href="/courses" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Courses</Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">About</Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Contact</Link>
              <Link href="/dashboard" className="block mx-4 mt-4 bg-primary text-white px-4 py-2 rounded-lg text-center">
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
