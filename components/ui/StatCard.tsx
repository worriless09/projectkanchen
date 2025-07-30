import React from 'react'

interface StatCardProps {
  label: string
  value: string | number
  color: string
  icon: React.ReactNode
}

export default function StatCard({ label, value, color, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-card p-6 flex items-center space-x-4">
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-2xl font-semibold text-ink">{value}</p>
      </div>
    </div>
  )
}
