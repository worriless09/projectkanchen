// lib/cache-tags.ts

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { unstable_cache } from 'next/cache'

export const CACHE_TAGS = {
  courses: 'courses',
  batches: 'batches',
  enrollments: 'enrollments',
} as const

// Define the SearchParams interface locally
interface SearchParams {
  search?: string
  subject?: string
  fee_min?: string
  fee_max?: string
  level?: string
  batch_timing?: string
}

export const getCachedCourses = unstable_cache(
  async (filters: SearchParams) => {
    // Create server-side Supabase client with proper cookies object
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: cookies() }
    )

    // Build dynamic query based on search params
    let query = supabase
      .from('courses')
      .select(`
        *,
        batches (
          id,
          start_date,
          end_date,
          timing,
          mode,
          seats,
          fee_override
        )
      `)
      .eq('is_active', true)

    // Apply search filter
    if (filters.search) {
      query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
    }

    // Apply subject filter
    if (filters.subject) {
      query = query.eq('category', filters.subject)
    }

    // Apply level filter
    if (filters.level) {
      query = query.eq('level', filters.level)
    }

    // Apply fee range filter
    if (filters.fee_min) {
      query = query.gte('fee', parseInt(filters.fee_min, 10))
    }
    if (filters.fee_max) {
      query = query.lte('fee', parseInt(filters.fee_max, 10))
    }

    // You can add batch_timing filter if needed, e.g.:
    // if(filters.batch_timing) {
    //   query = query.eq('batches.timing', filters.batch_timing)
    // }

    const { data: courses, error } = await query.order('created_at', { ascending: false })

    if (error) {
      throw new Error('Failed to fetch courses: ' + error.message)
    }

    return courses || []
  },
  ['courses-list'],
  {
    tags: [CACHE_TAGS.courses],
    revalidate: 60,
  }
)
