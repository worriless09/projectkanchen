'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface SearchBarProps {
  initialSearch?: string
}

export default function SearchBar({ initialSearch = '' }: SearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [search, setSearch] = useState(initialSearch)

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    
    // Reset to first page when searching
    params.delete('page')

    startTransition(() => {
      router.push(`/courses?${params.toString()}`)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(search)
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        
        {isPending && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>
    </form>
  )
}
