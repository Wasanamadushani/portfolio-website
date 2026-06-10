import React, { useState, useEffect } from 'react'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa'

// Your contact destinations (updated)
const CONTACT_LINKS = {
  email: 'wasanamadushani125@gmail.com',
  linkedin: 'https://www.linkedin.com/in/wasana-wickramaarachchi-9517a7396/',
  github: 'https://github.com/Wasanamadushani',
}

const cards = [
  {
    id: 'email',
    Icon: FiMail,
    title: 'Email Me',
    description: 'Connect via Email',
    href: `mailto:${CONTACT_LINKS.email}`,
    external: false,
  },
  {
    id: 'linkedin',
    Icon: FaLinkedin,
    title: 'LinkedIn',
    description: 'Connect professionally',
    href: CONTACT_LINKS.linkedin,
    external: true,
  },
  {
    id: 'github',
    Icon: FaGithub,
    title: 'GitHub',
    description: 'Check out my code',
    href: CONTACT_LINKS.github,
    external: true,
  },
]

export default function Contact() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-white" style={{ background: 'linear-gradient(180deg,#071430 0%,#04203a 50%,#021428 100%)' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3">Let's Connect</h2>
        <p className="text-gray-300 mb-1">I am currently open to internship opportunities.</p>
        <p className="text-gray-400 mb-8">Here is my contact information</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ id, Icon, title, description, href, external }) => (
            <a
              key={id}
              href={href}
              target={external ? '_blank' : '_self'}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group block rounded-2xl bg-[#1e293b] border border-white/10 backdrop-blur-md p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)]"
            >
              <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-white/5 mb-4">
                <Icon className="text-white text-2xl" />
              </div>

              <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm">{description}</p>
            </a>
          ))}
        </div>

        
      </div>

      {/* Back to top button */}
      <button
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white transition transform ${showTop ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        style={{ background: 'linear-gradient(90deg,#6366f1,#7c3aed)' }}
      >
        <FaArrowUp />
      </button>
    </section>
  )
}

