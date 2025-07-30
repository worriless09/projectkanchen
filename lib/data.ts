export interface Course {
  id: number
  title: string
  description: string
  category: 'upsc' | 'ssc' | 'state-pcs' | 'banking'
  price: number
  duration: string
  level: string
  thumbnail: string
  instructor: string
  rating: number
  students: number
  features: string[]
}

export interface Faculty {
  id: number
  name: string
  subject: string
  experience: string
  image: string
  bio: string
  qualifications: string[]
  achievements: string[]
}

export interface Testimonial {
  id: number
  name: string
  course: string
  rating: number
  comment: string
  image: string
  designation: string
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'UPSC Prelims Complete Course',
    description: 'Comprehensive coverage of UPSC Prelims syllabus with AI-powered flashcards and smart revision techniques.',
    category: 'upsc',
    price: 12999,
    duration: '12 months',
    level: 'Beginner to Advanced',
    thumbnail: '/images/course-thumbnails/upsc-prelims.jpg',
    instructor: 'Dr. Rajesh Kumar',
    rating: 4.8,
    students: 2547,
    features: ['AI Flashcards', 'Mock Tests', 'Current Affairs', 'Doubt Clearing']
  },
  {
    id: 2,
    title: 'SSC CGL Foundation Course',
    description: 'Complete SSC CGL preparation with practice tests, previous year questions, and expert guidance.',
    category: 'ssc',
    price: 8999,
    duration: '8 months',
    level: 'Foundation',
    thumbnail: '/images/course-thumbnails/ssc-cgl.jpg',
    instructor: 'Prof. Anita Sharma',
    rating: 4.7,
    students: 1834,
    features: ['Practice Tests', 'PYQs', 'Speed Tests', 'Video Lectures']
  },
  {
    id: 3,
    title: 'State PCS Comprehensive Package',
    description: 'State-specific PCS preparation with regional focus and local language support.',
    category: 'state-pcs',
    price: 9999,
    duration: '10 months',
    level: 'Intermediate',
    thumbnail: '/images/course-thumbnails/state-pcs.jpg',
    instructor: 'Dr. Vikram Singh',
    rating: 4.6,
    students: 1247,
    features: ['State Specific', 'Regional Focus', 'Local Language', 'Interview Prep']
  },
  {
    id: 4,
    title: 'Banking PO Complete Course',
    description: 'Comprehensive banking exam preparation with quantitative aptitude and reasoning.',
    category: 'banking',
    price: 6999,
    duration: '6 months',
    level: 'Foundation to Advanced',
    thumbnail: '/images/course-thumbnails/banking-po.jpg',
    instructor: 'Prof. Meera Patel',
    rating: 4.5,
    students: 956,
    features: ['Quant & Reasoning', 'Banking Awareness', 'Mock Interviews', 'Group Discussions']
  }
]

export const faculty: Faculty[] = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    subject: 'History & Geography',
    experience: '15+ years',
    image: '/images/faculty/rajesh-kumar.jpg',
    bio: 'Former IAS officer with extensive teaching experience in UPSC preparation.',
    qualifications: ['M.A. History', 'Ph.D. Geography', 'IAS (Retd.)'],
    achievements: ['500+ successful students', 'Author of 3 books', 'AIR 23 in UPSC CSE']
  },
  {
    id: 2,
    name: 'Prof. Anita Sharma',
    subject: 'Mathematics & Reasoning',
    experience: '12+ years',
    image: '/images/faculty/anita-sharma.jpg',
    bio: 'Mathematics expert specializing in competitive exam preparation and logical reasoning.',
    qualifications: ['M.Sc. Mathematics', 'B.Ed.', 'NET qualified'],
    achievements: ['1000+ students placed', 'Excellence in Teaching Award', 'Published researcher']
  },
  {
    id: 3,
    name: 'Dr. Vikram Singh',
    subject: 'Political Science & Current Affairs',
    experience: '18+ years',
    image: '/images/faculty/vikram-singh.jpg',
    bio: 'Political science professor with deep expertise in governance and current affairs.',
    qualifications: ['M.A. Political Science', 'Ph.D. Public Administration', 'UGC-NET'],
    achievements: ['Author of 5 books', '300+ successful candidates', 'Media contributor']
  }
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    course: 'UPSC Prelims',
    rating: 5,
    comment: 'The AI flashcards and spaced repetition system helped me retain information much better. Cleared UPSC Prelims in my first attempt!',
    image: '/images/testimonials/priya-sharma.jpg',
    designation: 'UPSC CSE Qualified'
  },
  {
    id: 2,
    name: 'Rohit Kumar',
    course: 'SSC CGL',
    rating: 5,
    comment: 'Excellent faculty and comprehensive study material. The mock tests were exactly like the real exam. Highly recommended!',
    image: '/images/testimonials/rohit-kumar.jpg',
    designation: 'SSC CGL Selected'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    course: 'State PCS',
    rating: 5,
    comment: 'The regional focus and state-specific preparation made all the difference. Thanks to Kanchen Academy for my success!',
    image: '/images/testimonials/anjali-patel.jpg',
    designation: 'State PCS Officer'
  }
]

// Main data export (this is what components are looking for)
export const applicationData = {
  courses,
  faculty,
  testimonials
}

// Export individual arrays as well
export { courses as courseData, faculty as facultyData, testimonials as testimonialsData }
