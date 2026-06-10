import React from 'react'
import ProjectCard from './ProjectCard'

// Import project images that currently exist in the repo.
// Add or replace these imports when you add new images to `src/assets/projects/`.
import harsha from '../assets/projects/harsha-fashion.png'
import sliitCampusHub from '../assets/projects/sliit-campus-hub.png'
import smartCampusHub from '../assets/projects/smartcampushub.png'
import dailyVibe from '../assets/projects/dailyvibe.jpeg'
import earthquakes from '../assets/projects/earthquakes.jpeg'
// Example for future image: import dailyVibe from '../assets/projects/dailyvibe.png'

const FALLBACK =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400'><rect width='100%25' height='100%25' fill='%23071225'/><text x='50%25' y='50%25' fill='%237c3aed' font-family='Arial' font-size='28' dominant-baseline='middle' text-anchor='middle'>Project%20Image</text></svg>"

const projects = [
    {
    title: 'Harsha Fashion',
    image: harsha || FALLBACK,
    description:
      'Full-stack MERN e-commerce application with product management, shopping cart, payments, order tracking and admin controls.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Wasanamadushani/IT-Project.git',
  },
  {
    title: 'SLIIT Campus Hub',
    image: sliitCampusHub || FALLBACK,
    description:
      'Developed key features for an integrated university support platform, including canteen assistance, transport sharing, study area management, and event planning. Contributed to event workflows, calendar integration, database integration, testing, and debugging while collaborating within an Agile development team.',
    technologies: ['React', 'JavaScript', 'Mongodb','GitHub'],
    github: 'https://github.com/Wasanamadushani/SmartUniHub-itpm.git',
  },
  {
    title: 'Smart Campus Hub',
    image: smartCampusHub || FALLBACK,
    description:
      'Contributed to the development of a university support platform by implementing the Facilities Management Module. Developed CRUD functionalities, integrated Spring Boot APIs, and participated in database integration, testing, and debugging activities.',
    technologies: ['React', 'Spring Boot', 'Mongodb','GitHub'],
    github: 'https://github.com/Wasanamadushani/it3030-paf-2026-smart-campus-group-03.02.git',
  },
  
  {
    title: 'Daily Vibe',
    image: dailyVibe || FALLBACK,
    description: 'Developed a mobile health and wellness application designed to help users build positive daily habits and improve overall well-being. Implemented features such as habit tracking, mood journaling, and hydration monitoring, enabling users to track their progress and maintain a healthier lifestyle.',
    technologies: ['Kotlin', 'Java'],
    github: 'https://github.com/Wasanamadushani/DailyVibe-Mobile-App.git',
  },

  {
    title: 'Real-Time-Eartquakes-Alert',
    image: earthquakes || FALLBACK,
    description: 'Designed a mobile application prototype for earthquake awareness and emergency response using Figma. Created intuitive user interfaces and user flows for real-time earthquake alerts, emergency guidance, SOS support, live earthquake monitoring, and user profile management, focusing on accessibility, usability, and user-centered design principles.',
    technologies: ['Figma'],
    github: 'https://github.com/Wasanamadushani/REAL-TIME-EARTHQUAKES-ALERT-UI-UX.git',
  },
]

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-white">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
