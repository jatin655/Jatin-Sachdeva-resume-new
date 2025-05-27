"use client"
import { Eye, EyeOff, Award, Code2, GraduationCap } from "lucide-react"
import { Button } from "./ui/button"

export default function Certificates({ isDarkMode, showCertificates, setShowCertificates }) {
  const certificates = [
    {
      title: "Certified Web Developer",
      issuer: "Tech Certification Board",
      year: "2023",
      type: "Professional Certification",
      icon: Award,
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2024",
      type: "Online Certification",
      icon: Code2,
    },
    {
      title: "Diploma in Web Development",
      issuer: "XYZ College",
      year: "2021",
      type: "Diploma",
      icon: GraduationCap,
    },
    {
      title: "Bachelor of Computer Science",
      issuer: "Galgotias University",
      year: "2019",
      type: "Degree",
      icon: GraduationCap,
    },
  ]

  return (
    <div
      className={`rounded-lg shadow-lg p-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-black via-red-600 to-pink-500 bg-clip-text text-transparent">
          Certificates & Education
        </h2>

        {/* Hide/Show Certificates Button */}
        <Button
          onClick={() => setShowCertificates(!showCertificates)}
          variant="outline"
          size="sm"
          className={`${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
              : "bg-white border-gray-300 text-gray-900 hover:bg-gray-100"
          }`}
        >
          {showCertificates ? (
            <>
              <EyeOff className="w-4 h-4 mr-2" />
              Hide Certificates
            </>
          ) : (
            <>
              <Eye className="w-4 h-4 mr-2" />
              Show Certificates
            </>
          )}
        </Button>
      </div>

      {showCertificates ? (
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {certificates.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div
                  key={index}
                  className={`min-w-80 p-6 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isDarkMode
                      ? "bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-500"
                      : "bg-gradient-to-br from-white to-gray-50 border border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        isDarkMode ? "bg-gray-600 text-gray-300" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {cert.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-blue-600 mb-3 leading-tight">{cert.title}</h3>
                  <p className="font-semibold mb-2">{cert.issuer}</p>
                  <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Completed: {cert.year}</p>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            Certificates are currently hidden. Click "Show Certificates" to view them.
          </p>
        </div>
      )}
    </div>
  )
}
