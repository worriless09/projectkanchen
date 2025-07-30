'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import { 
  Home, 
  BookOpen, 
  Brain, 
  FileQuestion, 
  BarChart3, 
  User, 
  Settings 
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'My Courses', href: '/dashboard/courses', icon: BookOpen },
  { name: 'Flashcards', href: '/dashboard/flashcards', icon: Brain },
  { name: 'Quizzes', href: '/dashboard/quizzes', icon: FileQuestion },
  { name: 'Progress', href: '/dashboard/progress', icon: BarChart3 },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardMobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800 shadow-xl">
            {/* Close button */}
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Mobile navigation */}
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="ml-2 text-xl font-bold text-ink dark:text-white">Kanchen</span>
              </div>
              
              <nav className="mt-5 px-2 space-y-1">
                {navigation.map((item) => {
                  const IconComponent = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <IconComponent className={`mr-4 flex-shrink-0 h-6 w-6 ${
                        isActive ? 'text-white' : 'text-gray-500'
                      }`} />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
