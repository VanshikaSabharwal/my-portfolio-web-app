"use client"
import { useState, useEffect } from "react"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaLinkedin, FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri"
import { IoLogoGithub } from "react-icons/io"
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiFigma,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si"

type Skill = { name: string; icon: React.ReactNode; proficiency: number }
type SkillCategory = { name: string; icon: React.ReactNode; skills: Skill[] }

const EnhancedAbout = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend")
  const [isVisible, setIsVisible] = useState(false)

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <FaCode className="w-5 h-5" />,
      skills: [
        { name: "React", icon: <SiReact />, proficiency: 5 },
        { name: "Next.js", icon: <SiNextdotjs />, proficiency: 4 },
        { name: "JavaScript", icon: <SiJavascript />, proficiency: 5 },
        { name: "TypeScript", icon: <SiTypescript />, proficiency: 4 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, proficiency: 4 },
      ],
    },
    {
      name: "Backend",
      icon: <FaServer className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, proficiency: 4 },
        { name: "Python", icon: <SiPython />, proficiency: 3 },
      ],
    },
    {
      name: "Database",
      icon: <FaDatabase className="w-5 h-5" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, proficiency: 4 },
        { name: "PostgreSQL", icon: <SiPostgresql />, proficiency: 3 },
        { name: "Supabase", icon: <SiSupabase />, proficiency: 3 },
      ],
    },
    {
      name: "Tools",
      icon: <FaTools className="w-5 h-5" />,
      skills: [
        { name: "Git", icon: <SiGit />, proficiency: 5 },
        { name: "Docker", icon: <SiDocker />, proficiency: 3 },
        { name: "Figma", icon: <SiFigma />, proficiency: 4 },
      ],
    },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="w-full space-y-8">
      {/* About Section */}
      <Card
        className={`bg-card border-2 border-dashed border-accent shadow-lg p-4 sm:p-6 md:p-8 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-card-foreground">
              About Me
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-card-foreground/80 mb-4 sm:mb-6">
              I am a software developer with a passion for creating innovative and user-friendly applications. I have a
              strong background in computer science and a keen eye for detail. I am always looking for new challenges
              and opportunities to learn and grow as a developer.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <Link href="mailto:vanshikasabharwalwork@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Email Me
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/--vanshika--/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="text-xl" />
                </Button>
              </Link>
              <Link href="https://x.com/Vanshika_0006" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <RiTwitterXFill className="text-xl" />
                </Button>
              </Link>
              <Link href="https://github.com/VanshikaSabharwal" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <IoLogoGithub className="text-xl" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-slide-in-right mt-6 md:mt-0">
            <div className="relative group w-48 sm:w-56 md:w-72">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="/images/p1.jpeg"
                alt="Profile"
                width={300}
                height={350}
                className="relative rounded-lg shadow-lg transition-transform duration-300 md:group-hover:scale-105 w-full h-auto"
              />
              <Image
                src="/images/p2.jpeg"
                alt="Profile"
                width={300}
                height={350}
                className="relative rounded-lg shadow-lg transition-transform duration-300 md:group-hover:scale-105 w-full h-auto"
              />
              <Image
                src="/images/p3.jpeg"
                alt="Profile"
                width={300}
                height={350}
                className="relative rounded-lg shadow-lg transition-transform duration-300 md:group-hover:scale-105 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Skills Section */}
      <Card
        className={`bg-card border-2 border-dashed border-accent shadow-lg p-4 sm:p-6 md:p-8 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-card-foreground mb-6 sm:mb-8 text-center">
          My Skills
        </h2>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center">
          {skillCategories.map((category, index) => (
            <Button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              variant={activeCategory === category.name ? "default" : "outline"}
              className={`flex items-center gap-1 sm:gap-2 transition-all duration-300 hover:scale-105 animate-scale-in text-xs sm:text-sm`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.icon}
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="space-y-4 sm:space-y-6">
          {skillCategories
            .find((category) => category.name === activeCategory)
            ?.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-3 sm:p-4 bg-muted rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-md animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 text-accent text-xl">
                  {skill.icon}
                </div>

                <div className="flex-1 w-full">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-card-foreground text-black mb-1 sm:mb-2">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-accent h-2 rounded-full bg-black transition-all duration-1000 ease-out"
                      style={{ width: `${(skill.proficiency / 5) * 100}%`, animationDelay: `${index * 0.2}s` }}
                    ></div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {skill.proficiency}/5
                </div>
              </div>
            ))}
        </div>
      </Card>
    </div>
  )
}

export default EnhancedAbout
