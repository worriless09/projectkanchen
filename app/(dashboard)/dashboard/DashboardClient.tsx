'use client'

import { useState } from 'react'

export default function DashboardClient() {
  const [count, setCount] = useState(0)

  return (
    <div className="mt-8 flex flex-col items-center">
      <button
        className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        onClick={() => setCount(c => c + 1)}
      >
        Click me! You've clicked {count} times
      </button>
      <p className="mt-2 text-gray-500 text-sm">This widget is interactive and rendered client-side.</p>
    </div>
  )
}
