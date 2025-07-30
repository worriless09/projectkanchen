import React from 'react'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { FaBook, FaClipboardList, FaStar, FaClock } from 'react-icons/fa'
import StatCard from '@/components/ui/StatCard'

export default async function DashboardPage() {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: cookies() }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const userId = user?.id

  if (!userId) {
    return <div className="p-6 text-red-600">Please log in to view your dashboard.</div>
  }

  // Fetch active courses enrolled
  const { data: enrollments, error: enrollmentsError } = await supabase
    .from('enrollments')
    .select('course_id')
    .eq('user_id', userId)
    .in('status', ['paid', 'confirmed'])

  // Count studied cards
  const { data: cards, error: cardsError } = await supabase
    .from('user_flashcard_progress')
    .select('id')
    .eq('user_id', userId)

  // Get quiz scores
  const { data: quizScores, error: quizError } = await supabase
    .from('quiz_attempts')
    .select('score')
    .eq('user_id', userId)

  // Calculate average quiz score
  const avgQuizScore =
    quizScores && quizScores.length > 0
      ? Math.round(
          quizScores.reduce((sum: number, q: { score: number | null }) => sum + (q.score ?? 0), 0) /
            quizScores.length
        )
      : 0

  // Total study time (minutes)
  const { data: studySessions, error: studyError } = await supabase
    .from('study_sessions')
    .select('duration_minutes')
    .eq('user_id', userId)

  const totalStudyTime =
    studySessions && studySessions.length > 0
      ? studySessions.reduce((sum: number, s: { duration_minutes: number | null }) => sum + (s.duration_minutes ?? 0), 0)
      : 0

  if (enrollmentsError || cardsError || quizError || studyError) {
    console.error('Supabase query errors:', {
      enrollmentsError,
      cardsError,
      quizError,
      studyError,
    })
  }

  const stats = [
    {
      label: 'Active Courses',
      value: enrollments?.length ?? 0,
      color: 'bg-primary-600',
      icon: <FaBook className="text-white" />,
    },
    {
      label: 'Cards Studied',
      value: cards?.length ?? 0,
      color: 'bg-primary-500',
      icon: <FaClipboardList className="text-white" />,
    },
    {
      label: 'Quiz Score',
      value: avgQuizScore + '%',
      color: 'bg-primary-400',
      icon: <FaStar className="text-white" />,
    },
    {
      label: 'Study Time',
      value: `${Math.floor(totalStudyTime / 60)}h ${totalStudyTime % 60}m`,
      color: 'bg-primary-300',
      icon: <FaClock className="text-white" />,
    },
  ]

  return (
    <div className="space-y-6 p-6">
      <header>
        <h2 className="text-3xl font-bold text-ink">Welcome back! 👋</h2>
        <p className="text-gray-600 mt-2">Here's your learning progress overview</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, color, icon }) => (
          <StatCard key={label} label={label} value={value} color={color} icon={icon} />
        ))}
      </section>
    </div>
  )
}
