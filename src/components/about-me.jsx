export default function AboutMe({ isDarkMode }) {
  return (
    <div
      className={`rounded-lg shadow-lg p-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-black via-red-600 to-pink-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          <p className="mb-4">
            Creative and detail-oriented <span className="font-semibold text-blue-600">Front-End Developer</span> with a
            passion for building responsive, user-friendly web interfaces.
          </p>

          <p className="mb-4">
            Seeking to contribute clean, efficient code and strong UI/UX skills to a dynamic development team.
          </p>

          <p>
            I enjoy transforming complex problems into simple, beautiful, and intuitive designs. When I'm not coding,
            you'll find me exploring new technologies and staying up-to-date with the latest web development trends.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Email: sachdevajatin45@gmail.com
              <br />
              Phone: (437)603-3483
              <br />
              Location: Scarborough, Ontario, Canada
            </p>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            <h3 className="font-semibold mb-2">Availability</h3>
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Open to new opportunities
              <br />
              Available for full-time positions
              <br />
              Remote or on-site work
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
