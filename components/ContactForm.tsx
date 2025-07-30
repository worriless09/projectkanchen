'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  interest: string
  inquiry: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interest: '',
    inquiry: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!isValidPhone(formData.phone)) newErrors.phone = 'Please enter a valid phone number'
    if (!formData.interest) newErrors.interest = 'Please select your area of interest'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{9,15}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        inquiry: '',
        message: ''
      })
      
      setShowSuccessModal(true)
      console.log('Form submitted:', formData)
      
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to start your journey? Contact us for more information about our courses
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#7A9A95] focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#7A9A95] focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone and Interest Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#7A9A95] focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#7A9A95] focus:border-transparent transition-colors ${
                      errors.interest ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select your exam</option>
                    <option value="UPSC">UPSC Civil Services</option>
                    <option value="SSC">SSC CGL/CHSL</option>
                    <option value="State PCS">State PCS</option>
                    <option value="Banking">Banking Exams</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.interest && <p className="text-red-500 text-sm mt-1">{errors.interest}</p>}
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A9A95] focus:border-transparent transition-colors"
                >
                  <option value="">Select inquiry type</option>
                  <option value="course-info">Course Information</option>
                  <option value="admission">Admission Process</option>
                  <option value="fees">Fee Structure</option>
                  <option value="schedule">Batch Schedule</option>
                  <option value="demo">Demo Class</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A9A95] focus:border-transparent transition-colors"
                  placeholder="Tell us more about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#7A9A95] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#6B8B87] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest. Our team will contact you within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-[#7A9A95] text-white px-6 py-2 rounded-lg hover:bg-[#6B8B87] transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  )
}
