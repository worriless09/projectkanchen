export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-ink">Welcome back! 👋</h2>
        <p className="text-gray-600 mt-2">Here's your learning progress overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Courses', value: '3', color: 'bg-blue-500' },
          { label: 'Cards Studied', value: '247', color: 'bg-green-500' },
          { label: 'Quiz Score', value: '85%', color: 'bg-yellow-500' },
          { label: 'Study Time', value: '24h', color: 'bg-purple-500' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-card p-6">
            <div className="flex items-center">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold">{stat.value}</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-ink">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
