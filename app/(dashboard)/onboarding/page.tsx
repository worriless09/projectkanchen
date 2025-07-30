'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function OnboardingPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    target_exam: 'UPSC',
    current_level: 'Beginner'
  })
  
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        const { error } = await supabase
          .from('profiles')
          .upsert({
            id: user.id,
            ...formData,
            onboarded: true
          })

        if (error) throw error
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Error updating profile:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Complete Your Profile</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.full_name}
              onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Exam
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.target_exam}
              onChange={(e) => setFormData(prev => ({ ...prev, target_exam: e.target.value }))}
            >
              <option value="UPSC">UPSC Civil Services</option>
              <option value="STATE_PCS">State PCS</option>
              <option value="SSC_CGL">SSC CGL</option>
              <option value="SSC_CHSL">SSC CHSL</option>
              <option value="BANKING">Banking Exams</option>
              <option value="RAILWAY">Railway Exams</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Level
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.current_level}
              onChange={(e) => setFormData(prev => ({ ...prev, current_level: e.target.value }))}
            >
              <option value="Beginner">Just Starting</option>
              <option value="Intermediate">Some Preparation</option>
              <option value="Advanced">Advanced Level</option>
              <option value="Revision">Final Revision</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Setting up...' : 'Complete Setup'}
          </button>
        </form>
      </div>
    </div>
  )
}
