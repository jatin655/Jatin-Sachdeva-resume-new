"use client"

export default function Header({ isDarkMode }) {
  return (
    <section
      className={`text-center py-12 rounded-lg shadow-lg transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-black via-red-600 to-pink-500 bg-clip-text text-transparent">
        Jatin Sachdeva
      </h1>
      <p className={`text-2xl mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Front-End Developer</p>
      <div className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
        <p>Scarborough, Ontario, Canada • sachdevajatin45@gmail.com • (437)603-3483</p>
      </div>
    </section>
  )
}
