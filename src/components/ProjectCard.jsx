import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="bg-gray-900/40 border border-gray-800 rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition">
      <div className="w-full h-48 bg-gray-800">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-lg" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-white">{project.title}</h3>
        <p className="text-gray-300 mt-2 text-sm leading-relaxed">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span key={t} className="px-2 py-1 bg-gray-800 text-sm rounded text-gray-200">{t}</span>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href={project.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded border border-gray-700 hover:bg-gray-800 transition text-sm inline-flex items-center gap-2"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
