"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TiArrowRightThick } from "react-icons/ti"
import { IoLogoGithub } from "react-icons/io5"
import { AiOutlineClose } from "react-icons/ai"

// Project data
const projectData = [
  {
    name: "Ko-lab",
    description: "A website to meet the desire of working on projects together as a team in real time.",
    imageUrls: ["/images/colab-1.png", "/images/colab-2.png", "/images/colab-3.png"],
    liveUrl: "https://ko-lab.vercel.app/",
    githubUrl: "https://github.com/VanshikaSabharwal/co-lab",
  },
  {
    name: "V-Wallet-Web-App",
    description: "V Wallet is a web app inspired by Paytm, offering secure and seamless peer-to-peer payments and fund management.",
    imageUrls: ["/images/v_wallet-1.png", "/images/v_wallet-2.png", "/images/v_wallet-3.png", "/images/v_wallet-4.png"],
    liveUrl: "https://v-wallet-user-app.vercel.app/",
    githubUrl: "https://github.com/VanshikaSabharwal/v-wallet",
  },
  {
    name: "Bakery Website",
    description: "A website to meet the desire of exploring cakes and other bakery items from anywhere, anytime.",
    imageUrls: ["/images/bakery-1.png", "/images/bakery-2.png", "/images/bakery-3.png"],
    liveUrl: "https://vanshikasabharwal.github.io/bakeryWebsite-V1/",
    githubUrl: "https://github.com/VanshikaSabharwal/bakeryWebsite-V1",
  },
  {
    name: "Nintendo-Clone-Web-App",
    description: "Nintendo Clone Web App is a web app inspired by the official Nintendo app, providing features for managing and exploring Nintendo games.",
    imageUrls: ["/images/nintendo-1.png", "/images/nintendo-2.png", "/images/nintendo-3.png"],
    liveUrl: "https://github.com/VanshikaSabharwal/Nintendo-clone",
    githubUrl: "https://github.com/VanshikaSabharwal/Nintendo-clone",
  },
  {
    name: "Hotel-Management",
    description: "A website to meet the desire of exploring cakes and other bakery items from anywhere, anytime.",
    imageUrls: ["/images/hotel-1.png"],
    liveUrl: "https://github.com/VanshikaSabharwal/hotel-management-webApp",
    githubUrl: "https://github.com/VanshikaSabharwal/hotel-management-webApp",
  },
]

const EnhancedProjects = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentProject, setCurrentProject] = useState<any>(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const openModal = (project: any) => {
    setCurrentProject(project)
    setCurrentImage(0)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setCurrentProject(null)
    setCurrentImage(0)
  }

  const nextImage = () => {
    if (!currentProject) return
    setCurrentImage((prev) => (prev + 1) % currentProject.imageUrls.length)
  }

  const prevImage = () => {
    if (!currentProject) return
    setCurrentImage((prev) => (prev - 1 + currentProject.imageUrls.length) % currentProject.imageUrls.length)
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Section Heading */}
      <div className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          My Projects
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve worked on, showcasing my skills in web development and design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projectData.map((project, index) => (
          <Card
            key={index}
            className={`bg-card border-2 border-dashed border-accent shadow-lg overflow-hidden transition-all duration-500 ${
              isVisible ? "animate-slide-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden group">
              <Image
                src={project.imageUrls[0]}
                alt={`${project.name} Project`}
                width={400}
                height={250}
                className="w-full h-48 sm:h-56 lg:h-48 object-cover cursor-pointer transition-transform duration-500 md:group-hover:scale-110"
                onClick={() => openModal(project)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Project Details */}
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-card-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h2>
              <p className="text-card-foreground/70 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href={project.liveUrl}>
                  <Button size="sm" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                    <TiArrowRightThick />
                    Live Demo
                  </Button>
                </Link>
                <Link href={project.githubUrl}>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent hover:scale-105 transition-transform duration-200">
                    <IoLogoGithub />
                    Code
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {showModal && currentProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in-up">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal}></div>
          <Card className="relative bg-card border-2 border-accent shadow-2xl w-full max-w-md sm:max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 hover:bg-destructive hover:text-destructive-foreground"
              onClick={closeModal}
            >
              <AiOutlineClose className="text-lg" />
            </Button>

            <div className="p-4 sm:p-6">
              <Image
                src={currentProject.imageUrls[currentImage]}
                alt={currentProject.name}
                width={600}
                height={400}
                className="w-full rounded-lg mb-4 sm:mb-6"
              />

              <h2 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 sm:mb-4">
                {currentProject.name}
              </h2>

              <p className="text-card-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                {currentProject.description}
              </p>

              {/* Modal Controls */}
              <div className="flex justify-between mt-2">
                <Button onClick={prevImage} className="flex items-center gap-2">
                  &lt; Prev
                </Button>
                <Button onClick={nextImage} className="flex items-center gap-2">
                  Next &gt;
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default EnhancedProjects
