import ProjectCard from "./project-card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack solution with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1739961097716-064cb40a941e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/ecommerce",
  },
  {
    title: "Weather App",
    description: "Responsive weather app using React and OpenWeatherMap API",
    image: "https://images.unsplash.com/photo-1739971600548-3360ae4b4c7a?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/weather-app",
  },
  {
    title: "Task Management System",
    description: "Collaborative tool built with React and Firebase",
    image: "https://images.unsplash.com/photo-1734615106647-937d3996caf2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/task-manager",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing skills and projects",
    image: "https://images.unsplash.com/photo-1734616699978-1a5fccec41e7?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/portfolio",
  },
]

export default function Projects() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-16 text-center tracking-tighter">projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

