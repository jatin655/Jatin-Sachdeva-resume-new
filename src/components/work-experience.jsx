export default function WorkExperience({ isDarkMode }) {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "InfoTech",
      period: "Mar 2022 - Present",
      description: "Developed responsive UIs using React and Tailwind.",
      achievements: [
        "Built 15+ responsive web applications",
        "Improved page load times by 40%",
        "Collaborated with design team on UI/UX improvements",
        "Mentored junior developers",
      ],
    },
    {
      title: "Web Designer",
      company: "RBC",
      period: "Jan 2020 - Feb 2022",
      description: "Designed and built static websites with HTML/CSS.",
      achievements: [
        "Created 25+ static websites for clients",
        "Implemented responsive design principles",
        "Optimized websites for SEO",
        "Maintained 98% client satisfaction rate",
      ],
    },
  ]

  return (
    <div
      className={`rounded-lg shadow-lg p-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-black via-red-600 to-pink-500 bg-clip-text text-transparent">
        Work Experience
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`border-l-4 border-blue-600 pl-6 pb-6 ${
              index !== experiences.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
            }`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
                <p className="text-lg font-semibold">{exp.company}</p>
              </div>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0 ${
                  isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                }`}
              >
                {exp.period}
              </span>
            </div>

            <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{exp.description}</p>

            <div>
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
