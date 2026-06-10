import React from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

// Use public/profile.jpg for the profile image. Place your image at: e:/cv/portfolio/public/profile.jpg
// If the file is not present, the browser will show the fallback placeholder image.
const PROFILE_SRC = '/profile.jpg'
const FALLBACK = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%25' height='100%25' fill='%230b1220'/><text x='50%25' y='50%25' fill='%237c3aed' font-family='Arial' font-size='22' dominant-baseline='middle' text-anchor='middle'>Profile</text></svg>"

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '80ms' }}>
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Wasana M Wickramaarachchi</h1>
        <p className="text-accent mt-2 font-medium">Information Technology Student at SLIIT</p>
        <p className="mt-6 text-gray-300 leading-relaxed">I am an Information Technology student passionate about software development. I enjoy working with both backend logic and frontend design to create efficient and user-friendly applications.</p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2 rounded bg-primary hover:opacity-90 transition">
            View Projects
          </a>
          <a
            href="/cv.pdf"
            download="Wasana_M_Wickramaarachchi_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 rounded border border-gray-700 hover:bg-gray-800 transition"
          >
            <FaDownload /> Download CV
          </a>
        </div>

        
      </div>

      <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '160ms' }}>
        <div className="relative group"> 
          {/* soft radial glow behind the circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[510px] md:h-[510px] rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-transparent blur-3xl opacity-60 transform transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
          </div>

          <div className="relative z-10 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-gray-800 bg-[#071428] shadow-2xl transform transition duration-500 group-hover:scale-105">
            <img src={PROFILE_SRC} alt="profile" onError={(e) => { e.currentTarget.src = FALLBACK }} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
