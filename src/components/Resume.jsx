"use client"

import { useState, useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import Header from "./header"
import AboutMe from "./about-me"
import Skills from "./skills"
import WorkExperience from "./work-experience"
import Certificates from "./certificates"

export default function Resume() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showCertificates, setShowCertificates] = useState(true)

  // Refs for smooth scrolling
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)
  const certificatesRef = useRef(null)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const navItems = [
    { id: "about", label: "About", ref: aboutRef },
    { id: "skills", label: "Skills", ref: skillsRef },
    { id: "experience", label: "Experience", ref: experienceRef },
    { id: "certificates", label: "Certificates", ref: certificatesRef },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Fixed Header with Navigation and Dark Mode Toggle */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-800/95 backdrop-blur-sm border-gray-700"
            : "bg-white/95 backdrop-blur-sm border-gray-200"
        } border-b`}
      >
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Name with Gradient */}
            <h1 className="text-xl font-bold bg-gradient-to-r from-black via-red-600 to-pink-500 bg-clip-text text-transparent">
              Jatin Sachdeva
            </h1>

            {/* Navigation */}
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Dark Mode Toggle */}
            <Button
              onClick={toggleDarkMode}
              variant="outline"
              size="sm"
              className={`${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                  : "bg-white border-gray-300 text-gray-900 hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pt-20 pb-8 space-y-8">
        {/* Header Component - Hero Section */}
        <Header isDarkMode={isDarkMode} />

        {/* About Me Section */}
        <section ref={aboutRef}>
          <AboutMe isDarkMode={isDarkMode} />
        </section>

        {/* Skills Section */}
        <section ref={skillsRef}>
          <Skills isDarkMode={isDarkMode} />
        </section>

        {/* Work Experience Section */}
        <section ref={experienceRef}>
          <WorkExperience isDarkMode={isDarkMode} />
        </section>

        {/* Certificates Section */}
        <section ref={certificatesRef}>
          <Certificates
            isDarkMode={isDarkMode}
            showCertificates={showCertificates}
            setShowCertificates={setShowCertificates}
          />
        </section>
      </main>
    </div>
  )
}
