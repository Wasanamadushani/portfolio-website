import React from 'react'
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGit } from 'react-icons/fa'
import {
  SiJavascript,
  SiKotlin,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiVisualstudiocode,
  SiEclipseide,
  SiAndroidstudio,
  SiGithub,
  SiFigma,
} from 'react-icons/si'

const expertise = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Kotlin', icon: SiKotlin },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Spring Boot', icon: FaJava },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'VS Code', icon: SiVisualstudiocode },
      { name: 'Eclipse', icon: SiEclipseide },
      { name: 'Android Studio', icon: SiAndroidstudio },
      { name: 'Git', icon: FaGit },
      { name: 'GitHub', icon: SiGithub },
    ],
  },
  {
    category: 'UI/UX Design',
    skills: [{ name: 'Figma', icon: SiFigma }],
  },
]

function Badge({ Icon, label }) {
  return (
    <div className="inline-flex items-center gap-3 px-3 py-2 rounded-full bg-gradient-to-br from-blue-900/40 to-slate-900/40 border border-blue-800 text-sm text-gray-100 shadow-sm transform transition duration-200 hover:scale-105">
      <Icon className="w-5 h-5 text-accent" />
      <span className="whitespace-nowrap">{label}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="glass p-6 rounded-xl border border-blue-900 bg-gradient-to-br from-slate-900 to-blue-950">
      <h2 className="text-2xl font-bold mb-6 text-blue-100">Area of Expertise</h2>

      <div className="space-y-6">
        {expertise.map((group) => (
          <div key={group.category} className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-full sm:w-48 text-sm font-semibold text-blue-200 pt-2">{group.category}</div>
            <div className="flex-1 flex flex-wrap gap-3">
              {group.skills.map((s) => (
                <Badge key={s.name} Icon={s.icon} label={s.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
