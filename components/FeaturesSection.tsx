import { Brain, BookOpen, Target, Users } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: 'AI-Powered Learning',
      description: 'Smart flashcards with spaced repetition algorithm that adapts to your learning pace.'
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: 'Comprehensive Content',
      description: 'Complete syllabus coverage for UPSC, SSC, and State PCS with regular updates.'
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: 'Targeted Practice',
      description: 'Previous year questions and personalized quiz recommendations based on weak areas.'
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: 'Expert Guidance',
      description: 'Learn from experienced faculty with proven track record of producing successful candidates.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ink mb-4">
            Why Choose Kanchen Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our innovative approach combines traditional teaching methods with cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-accent rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:shadow-hover">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
