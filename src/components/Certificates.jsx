import React from 'react'

import mongodb from '../assets/certificates/mongodb-data-modeling.png'
import frontend from '../assets/certificates/frontend-web-development.png'
import pythonBeginners from '../assets/certificates/python-for-beginners.png'
import pythonProgramming from '../assets/certificates/python-programming.png'
import webDesign from '../assets/certificates/web-design-for-beginners.png'

const certificates = [
  {
    title: 'MongoDB Data Modeling Path',
    issuer: 'MongoDB',
    date: '05-01-2026',
    image: mongodb,
  },
  {
    title: 'Front-End Web Development',
    issuer: 'University of Moratuwa – CODL',
    date: 'Online Learning Programme',
    image: frontend,
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa – CODL',
    date: 'November 28, 2024',
    image: pythonBeginners,
  },
  {
    title: 'Python Programming',
    issuer: 'University of Moratuwa – CODL',
    date: 'Online Learning Programme',
    image: pythonProgramming,
  },
  {
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa – CODL',
    date: 'Online Learning Programme',
    image: webDesign,
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-16">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <div
            key={certificate.title}
            className="glass rounded-xl overflow-hidden border border-gray-800 bg-slate-900/80 hover:border-blue-700 transition duration-300 hover:-translate-y-1"
          >
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-52 object-cover cursor-pointer hover:scale-105 transition duration-300"
              />
            </a>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">
                {certificate.title}
              </h3>

              <p className="mt-2 text-gray-300 text-sm">
                {certificate.issuer}
              </p>

              <p className="mt-2 text-gray-400 text-sm">
                {certificate.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
