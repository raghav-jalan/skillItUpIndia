import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 py-20 sm:py-32">
      <div className="absolute inset-0">
        <svg className="h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(6, 182, 212, 0.1)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Elevate Your Skills with <span className="text-cyan-400">SkillItUp</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master in-demand skills, earn industry-recognized certifications, and accelerate your career growth with our
            cutting-edge learning platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/courses"
              className="bg-cyan-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors inline-flex items-center justify-center"
            >
              Explore Courses <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link
              href="/learning-process"
              className="bg-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
