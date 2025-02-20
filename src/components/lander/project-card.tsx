import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <Link href={link} className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl">
        <div className="relative h-64 md:h-80">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="transition-transform duration-300 ease-in-out group-hover:scale-105 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-50" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h2 className="text-2xl font-semibold mb-2 transform transition-transform duration-300 ease-in-out group-hover:translate-y-[-0.25rem]">
            {title}
          </h2>
          <p className="text-sm text-gray-200 opacity-0 transform translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

