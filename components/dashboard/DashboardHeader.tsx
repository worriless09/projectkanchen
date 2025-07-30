import { Bell, User } from 'lucide-react'

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ink">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
