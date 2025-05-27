"use client"

import { Code2, Palette, GitBranch, MessageSquare, Users } from "lucide-react"

export default function Skills({ isDarkMode }) {
  const technicalSkills = [
    { name: "React", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Git", icon: GitBranch },
  ]

  const additionalSkills = [
    { name: "Communication", icon: MessageSquare },
    { name: "Teamwork", icon: Users },
  ]

  return (
    <div
      className={`rounded-lg shadow-lg p-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-black via-red-600 to-pink-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technicalSkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-lg font-medium">{skill.name}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Additional Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalSkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-lg font-medium">{skill.name}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Skill Levels Visualization */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Proficiency Levels</h3>
          <div className="space-y-4">
            {[
              { skill: "React", level: 90 },
              { skill: "JavaScript", level: 85 },
              { skill: "Tailwind CSS", level: 80 },
              { skill: "Git", level: 75 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{item.skill}</span>
                  <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{item.level}%</span>
                </div>
                <div className={`w-full rounded-full h-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
