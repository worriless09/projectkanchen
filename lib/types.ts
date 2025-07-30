// lib/types.ts
export interface SearchParams {
  search?: string
  subject?: string
  fee_min?: string
  fee_max?: string
  level?: string
  batch_timing?: string
}

export interface Course {
  id: number
  title: string
  category: string
  level: string
  fee: number
  short_desc: string
  cover_url?: string
  batches: Array<{
    id: number
    start_date: string
    end_date: string
    timing: string
    mode: string
    seats: number
    fee_override?: number
  }>
}
