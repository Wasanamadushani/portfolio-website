import React from 'react'
import ProjectCard from './ProjectCard'

// Import project images
import foodieHub from '../assets/projects/foodiehub.png'
import harsha from '../assets/projects/harsha-fashion.png'
import sliitCampusHub from '../assets/projects/sliit-campus-hub.png'
import smartCampusHub from '../assets/projects/smartcampushub.png'
import dailyVibe from '../assets/projects/dailyvibe.jpeg'
import earthquakes from '../assets/projects/earthquakes.jpeg'

const FALLBACK =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400'><rect width='100%25' height='100%25' fill='%23071225'/><text x='50%25' y='50%25' fill='%237c3aed' font-family='Arial' font-size='28' dominant-baseline='middle' text-anchor='middle'>Project%20Image</text></svg>"

const projects = [
  {
    title: 'FoodieHub – Smart Restaurant Management System',
    image: foodieHub || FALLBACK,
    description:
      'A full-stack MERN restaurant management system with user authentication, menu browsing, shopping cart, multiple payment methods, real-time order tracking, order history, reviews, PDF invoices, and an admin dashboard for food, order, payment, and review management.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'GitHub',
    ],
    github:
      'https://github.com/Wasanamadushani/RMS-restaurant-system.git',
  },

  {
    title: 'Harsha Fashion – Online Clothing Store Management System',
    image: harsha || FALLBACK,
    description:
      'A full-stack MERN e-commerce platform with authentication, product browsing, filtering, shopping cart, online payments, order tracking, refund and exchange requests, delivery updates, and admin dashboards. Implemented automatic PDF generation.',
    technologies: [
      'MERN',
      'JavaScript',
      'REST API',
      'GitHub',
    ],
    github:
      'https://github.com/Wasanamadushani/IT-Project.git',
  },

  {
    title: 'SmartCampusHub',
    image: smartCampusHub || FALLBACK,
    description:
      'Developed the Facilities Management Module for a university support platform, implementing CRUD functionalities for administrators to manage facilities. Developed backend REST APIs using Spring Boot and contributed to database integration, testing, debugging, and system enhancement.',
    technologies: [
      'Spring Boot',
      'React.js',
      'MongoDB',
      'GitHub',
    ],
    github:
      'https://github.com/Wasanamadushani/it3030-paf-2026-smart-campus-group-03.02.git',
  },

  {
    title: 'SmartUniHub',
    image: sliitCampusHub || FALLBACK,
    description:
      'Developed the Canteen Management Module with food viewing, stock availability, promotions, and order tracking. Implemented a food assistance request system and contributed to Event Management features including event creation, approval workflows, calendar integration, stall requests, event history, and gallery functionalities.',
    technologies: [
      'React.js',
      'JavaScript',
      'MongoDB',
      'GitHub',
    ],
    github:
      'https://github.com/Wasanamadushani/SmartUniHub-itpm.git',
  },

  {
    title: 'DailyVibe – Mobile Application',
    image: dailyVibe || FALLBACK,
    description:
      'A mobile application featuring Habit Tracking, Mood Journal, and Hydration Tracker to help users manage their daily well-being.',
    technologies: [
      'Android Studio',
      'Kotlin',
      'Java',
    ],
    github:
      'https://github.com/Wasanamadushani/DailyVibe-Mobile-App.git',
  },

  {
    title: 'Earthquake Alert – Mobile App UI/UX Design',
    image: earthquakes || FALLBACK,
    description:
      'Designed a user-friendly mobile application prototype for earthquake alerts and emergency response, including wireframes, high-fidelity UI screens, and interactive prototypes.',
    technologies: [
      'Figma',
    ],
    github:
      'https://github.com/Wasanamadushani/REAL-TIME-EARTHQUAKES-ALERT-UI-UX.git',
  },
]

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-white">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
