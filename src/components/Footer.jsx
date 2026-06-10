import React from 'react'
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
        

        <div className="text-sm text-gray-400 text-center">  © {new Date().getFullYear()} Wasana Wickramaarachchi. All rights reserved.</div>
    </div>
    </footer>
  )
}
