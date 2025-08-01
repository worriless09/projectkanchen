'use client'

import useScrollReveal from '@/hooks/useScrollReveal'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'

interface CourseFiltersProps {
  currentFilters: {
    subject?: string
    level?: string
    fee_min?: string
    fee_max?: string
    batch_timing?: string
  }
  subjects: string[]
}

export default function CourseFilters({ currentFilters, subjects }: CourseFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    params.delete('page') // Reset pagination

    startTransition(() => {
      router.push(`/courses?${params.toString()}`)
    })
  }

  const clearAllFilters = () => {
    const params = new URLSearchParams(searchParams.toString())
    const searchValue = params.get('search')

    // Clear all existing keys
    for (const key of Array.from(params.keys())) {
      params.delete(key)
    }

    if (searchValue) {
      params.set('search', searchValue)
    }

    startTransition(() => {
      router.push(`/courses?${params.toString()}`)
    })
  }

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex flex-wrap gap-6">

        {/* Subject Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Exam Category
          </label>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <button
                key={subject}
                type="button"
                onClick={() => updateFilter('subject', currentFilters.subject === subject ? null : subject)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  currentFilters.subject === subject
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                disabled={isPending}
              >
                {subject.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Level
          </label>
          <select
            value={currentFilters.level || ''}
            onChange={(e) => updateFilter('level', e.target.value || null)}
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isPending}
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Fee Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fee Range
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              placeholder="Min"
              value={currentFilters.fee_min || ''}
              onChange={(e) => updateFilter('fee_min', e.target.value || null)}
              className="w-20 border border-gray-300 rounded-md px-2 py-1.5 text-sm"
              disabled={isPending}
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              value={currentFilters.fee_max || ''}
              onChange={(e) => updateFilter('fee_max', e.target.value || null)}
              className="w-20 border border-gray-300 rounded-md px-2 py-1.5 text-sm"
              disabled={isPending}
            />
          </div>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={clearAllFilters}
            className="text-sm text-red-600 hover:text-red-800 font-medium"
            disabled={isPending}
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Loading Spinner */}
      {isPending && (
        <div className="mt-3 text-sm text-gray-500 flex items-center gap-2">
          <div className="animate-spin h-3 w-3 border border-blue-500 border-t-transparent rounded-full"></div>
          Updating results...
        </div>
      )}
    </div>
  )
}
