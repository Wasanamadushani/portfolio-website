import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 w-full z-30 backdrop-blur-sm border-b border-gray-800 bg-slate-900/90">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-semibold text-lg text-white">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">WW</div>
          <span className="hidden sm:inline">Wasana Wickramaarachchi</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-gray-200 hover:text-accent transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 text-gray-200">
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu (full-width block below nav) */}
      {open && (
        <div className="md:hidden w-full bg-slate-900/95 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-2 px-3 rounded text-gray-200 hover:bg-gray-800">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
