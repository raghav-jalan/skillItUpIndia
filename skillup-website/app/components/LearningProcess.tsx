import { BookOpen, Video, PenTool, Award } from 'lucide-react'

const steps = [
  { icon: BookOpen, title: 'Study Materials', description: 'Access comprehensive course materials and resources.' },
  { icon: Video, title: 'Video Lessons', description: 'Watch engaging video lessons from industry experts.' },
  { icon: PenTool, title: 'Hands-on Projects', description: 'Apply your knowledge through practical projects.' },
  { icon: Award, title: 'Certification', description: 'Earn industry-recognized certifications upon completion.' },
]

export default function LearningProcess() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Your Learning Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience a structured and effective learning process designed to help you master new skills and advance your career.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-full bg-cyan-400 rounded-full"></div>
          </div>
          <div className="relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
