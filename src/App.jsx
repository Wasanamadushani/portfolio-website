import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#071025] to-gray-900 text-gray-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <section id="home" className="pt-24">
          <Hero />
        </section>
        <section id="about" className="pt-24">
          <About />
        </section>
        <section id="skills" className="pt-24">
          <Skills />
        </section>
        <section id="projects" className="pt-24">
          <Projects />
        </section>
        <section id="contact" className="pt-24 pb-12">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
