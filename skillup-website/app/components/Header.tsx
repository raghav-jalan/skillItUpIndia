"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L4 7V21L16 30L28 21V7L16 2Z" fill="#0B0E13" stroke="#06B6D4" strokeWidth="2" />
                <path d="M16 8L10 11V20L16 24L22 20V11L16 8Z" fill="#06B6D4" />
                <path d="M16 16L19 14V18L16 20L13 18V14L16 16Z" fill="#0B0E13" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">SkillItUp</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/courses" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Courses
            </Link>
            <Link href="/learning-process" className="text-gray-300 hover:text-cyan-400 transition-colors">
              How It Works
            </Link>
            <Link href="/jobs" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Jobs
            </Link>
            <Link href="/partners" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Partners
            </Link>
            <Link href="/testimonials" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Success Stories
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-cyan-400 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact Us
            </Link>
          </nav>
          <div className="hidden md:block">
            <Link
              href="/courses"
              className="bg-cyan-500 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-colors"
            >
              Start Learning
            </Link>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <Link href="/courses" className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">
              Courses
            </Link>
            <Link href="/learning-process" className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">
              How It Works
            </Link>
            <Link href="/jobs" className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">
              Jobs
            </Link>
            <Link href="/partners" className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">
              Partners
            </Link>
            <Link href="/testimonials" className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">
              Success Stories
            </Link>
            <Link href="/faq" className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">
              Contact Us
            </Link>
            <Link
              href="/courses"
              className="block mt-4 bg-cyan-500 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-colors text-center"
            >
              Start Learning
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
