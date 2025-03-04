'use client'


import Image from 'next/image'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  logo: string
  featured?: boolean
  projectLink?: string
  researchPaper?: string
  detailedDescription?: string
  images?: string[]
}

const projects: Project[] = [
  {
    title: "Lane Line Detection System Using Machine Learning",
    description: "A Machine Learning Project that describes a reliable method for regonising road lanes in real time. ",
    logo: "/images/projects/lld-logo.png",
    featured: true,
    researchPaper: "https://doi.org/10.1109/ICICT55121.2022.10064598",
    projectLink: "https://doi.org/10.1109/ICICT55121.2022.10064598",
    detailedDescription: "Driving vehicles on roads in conditions such as fuzzy view, showery, and inside the tunnel is difficult for a driver. This research describes a reliable method for recognising road lanes in real time. The complexity of the road environment makes lane detection difficult. The test result shows that the design is accurate and robust for seeing the road lane. To improve traffic safety, this research paper suggests a real-time, efficient lane detecting approach.",
    images: [
      "/images/projects/lld-1.jpg",
      "/images/projects/lld-2.png",
      "/images/projects/lld-3.jpg"
    ],
  },
  {
    title: "Air Canvas",
    description: "Developed an air canvas using OpenCV and Python that allows user to draw on the screen using hand gestures.",
    logo: "/images/projects/aircanvas-logo.png"
  },
  {
    title: "Ria Generics",
    description: "Freelance Project for a company that is an integrated and highly sought after generic pharmaceutical partner to the distributors in UK and Europe",
    logo: "/images/projects/freelance-logo.svg"
  },
  {
    title: "Uday Groups of Pharma",
    description: "Freelance Project for a startup that provides generic medicines at affordable prices Locally.",
    logo: "/images/projects/freelance-logo.svg"
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-5xl text-center text-white mb-3">
          Projects
        </h2>
        <div className="text-center mb-5">
          <span className="bg-gradient-to-r from-purple-500 via-purple-700 to-orange-500 inline-block text-transparent bg-clip-text">
          INNOVATION IN ACTION
          </span>
          <hr className="w-24 mx-auto mt-2 shadow-[0_0_10px_rgba(168,85,247,0.4)] border-purple-500" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-2xl p-8 pt-14 flex flex-col md:flex-row gap-5 transition-transform duration-300 hover:-translate-y-1 relative"
            >
              {project.featured && (
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 via-purple-700 to-orange-500 text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)] flex items-center gap-1.5 transform hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  ⭐
                  Featured
                </div>
              )}
              <div className={`flex-none md:w-52 bg-white rounded-lg flex items-center justify-center p-4 ${project.featured ? 'ring-2 ring-yellow-500/30' : ''}`}>
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <h3 className="text-2xl text-white mb-3">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/80 hover:text-white p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 p-2 bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src={selectedProject.logo}
                    alt={selectedProject.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h3>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
              </div>

              {selectedProject.images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-2 sm:mt-4">
                  {selectedProject.images.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4">
                {selectedProject.projectLink && (
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors text-sm sm:text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Project
                  </a>
                )}
                {selectedProject.researchPaper && (
                  <a
                    href={selectedProject.researchPaper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-colors text-sm sm:text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Research Paper
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 