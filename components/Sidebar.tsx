'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BookOpen, 
  Brain, 
  BarChart3, 
  User, 
  Home,
  FileQuestion 
} from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'My Courses', href: '/dashboard/courses', icon: BookOpen },
    { name: 'Flashcards', href: '/dashboard/flashcards', icon: Brain },
    { name: 'Quizzes', href: '/dashboard/quizzes', icon: FileQuestion },
    { name: 'Progress', href: '/dashboard/progress', icon: BarChart3 },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
  ]

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <Link href="/" className="text-2xl font-bold text-primary">
          Kanchen
        </Link>
      </div>
      
      <nav className="mt-6">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white border-r-4 border-primary-dark'
                  : 'text-gray-600 hover:bg-accent hover:text-primary'
              }`}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
