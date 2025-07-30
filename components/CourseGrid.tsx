import Link from 'next/link'
import { CalendarIcon, ClockIcon, CurrencyRupeeIcon, UsersIcon } from '@heroicons/react/24/outline'

interface Course {
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

interface CourseGridProps {
  courses: Course[]
}

export default function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">No courses found</div>
        <p className="text-gray-400">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

function CourseCard({ course }: { course: Course }) {
  const nextBatch = course.batches
    ?.filter(batch => new Date(batch.start_date) > new Date())
    ?.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())[0]

  const displayFee = nextBatch?.fee_override ?? course.fee

  return (
    <Link href={`/courses/${course.id}`} className="group">
      <div className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow p-6">
        
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {course.category?.replace('_', ' ')}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            {course.level}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.short_desc}
        </p>

        {/* Course Details */}
        <div className="space-y-2 mb-4">
          {nextBatch && (
            <>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CalendarIcon className="h-4 w-4" />
                <span>Starts {new Date(nextBatch.start_date).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ClockIcon className="h-4 w-4" />
                <span>{nextBatch.timing} • {nextBatch.mode}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <UsersIcon className="h-4 w-4" />
                <span>{nextBatch.seats} seats available</span>
              </div>
            </>
          )}
        </div>

        {/* Fee and CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-1">
            <CurrencyRupeeIcon className="h-5 w-5 text-gray-600" />
            <span className="font-bold text-lg text-gray-900">
              ₹{displayFee?.toLocaleString()}
            </span>
          </div>
          
          <div className="text-sm font-medium text-blue-600 group-hover:text-blue-500">
            View Details →
          </div>
        </div>
      </div>
    </Link>
  )
}
