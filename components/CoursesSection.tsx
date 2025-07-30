'use client'
import { useState } from 'react'

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const courses = [
    { id: 1, title: 'UPSC Prelims Complete Course', category: 'upsc', price: 12999, students: 2547 },
    { id: 2, title: 'SSC CGL Foundation Course', category: 'ssc', price: 8999, students: 1834 },
    { id: 3, title: 'State PCS Comprehensive Package', category: 'state-pcs', price: 9999, students: 1247 },
    { id: 4, title: 'Banking PO Complete Course', category: 'banking', price: 6999, students: 956 },
  ]

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ink mb-4">Popular Courses</h2>
          <p className="text-xl text-gray-600">Choose from our comprehensive range of courses</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'upsc', 'ssc', 'state-pcs', 'banking'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-primary/10'
              }`}
            >
              {filter.replace('-', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">
                  {course.category.toUpperCase()}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">{course.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">{course.students} students</span>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
