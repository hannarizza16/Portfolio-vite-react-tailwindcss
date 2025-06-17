import projects from "./projectsData.jsx"
import ModalImage from "./ModalImage.jsx"
import { useState } from "react"

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <>
    <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10 pb-20">
      <h2 className="text-white text-3xl font-bold text-center mb-8">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-blue-950 rounded-lg shadow-md/20 shadow-yellow-200 overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center pt-2 cursor-pointer">
              <img
              src={project.imageUrl}
              alt={project.title}
              onClick={() => setSelectedImage(project.imageUrl)}
              className="w-fit h-48 object-cover"
            />

            </div>
            
            <div className="p-5">
              <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    {selectedImage && (
      <ModalImage imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    )}
    </>
  )
} 