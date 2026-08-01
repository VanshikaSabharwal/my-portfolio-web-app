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
import { useLanguage } from "../context/LanguageContext"

type Skill = { name: string; icon: React.ReactNode; proficiency: number }
type SkillCategory = { name: string; icon: React.ReactNode; skills: Skill[] }

const EnhancedAbout = () => {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>("Frontend")
  const [isVisible, setIsVisible] = useState(false)
  const [bioExpanded, setBioExpanded] = useState(false)

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
    <div className="w-full max-w-7xl mx-auto space-y-8">
      {/* About Section */}
      <div
        className={`relative overflow-hidden rounded-[28px] border border-[#e9dfcf] bg-white p-6 shadow-[0_24px_60px_-20px_rgba(92,58,33,0.18)] sm:p-10 md:p-16 ${
          isVisible ? "animate-in fade-in duration-700" : "opacity-0"
        }`}
      >
        {/* soft corner glows, echoing the site's warm palette */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[#B87F45]/10 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-[#A85B3E]/10 blur-3xl" />
        </div>

        {/* Center divider + emblem, fills the gap between text and visual on desktop */}
        <div className="pointer-events-none absolute inset-y-16 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D9CAB1] to-transparent md:block" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-dashed border-[#D9CAB1] bg-[#FFFDF9] font-serif text-2xl text-[#A85B3E] shadow-[0_10px_24px_-8px_rgba(168,91,62,0.2)] md:flex">
          ✦
        </div>

        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          {/* Left: content */}
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8A5A32]">
              <span className="inline-block h-px w-6 bg-[#B87F45]" />
              {t("about.tagline")}
            </span>

            <h1 className="mb-6 font-serif text-4xl font-semibold leading-[1.05] text-[#231A12] sm:text-5xl md:text-6xl">
              {t("about.titlePrefix")} <em className="font-medium italic text-[#A85B3E]">{t("about.titleEmphasis")}</em>
            </h1>

            <div className="relative max-w-[52ch]">
              <div
                className={`space-y-4 overflow-hidden text-[15px] leading-relaxed text-[#4A4038] transition-[max-height] duration-500 ease-in-out sm:!max-h-none sm:overflow-visible sm:text-base ${
                  bioExpanded ? "max-h-[600px]" : "max-h-[128px]"
                }`}
              >
                <p>{t("about.bio1")}</p>
                <p>{t("about.bio2")}</p>
                <p>{t("about.bio3")}</p>
                <p>{t("about.bio4")}</p>
              </div>

              {!bioExpanded && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent sm:hidden" />
              )}
            </div>

            <button
              type="button"
              onClick={() => setBioExpanded((prev) => !prev)}
              className="mt-2 text-sm font-semibold cursor-pointer text-[#A85B3E] hover:underline sm:hidden"
            >
              {bioExpanded ? t("about.readLess") : t("about.readMore")}
            </button>

            {/* Stamp row */}
            <div className="my-8 flex flex-wrap gap-3.5">
              {[
                { num: "2+", label: t("about.stampYrsOss"), rot: -8 },
                { num: "02", label: t("about.stampInternships"), rot: 6 },
                { num: "EN·HI", label: t("about.stampFluent"), rot: -4 },
                { num: "TR·JA", label: t("about.stampLearning"), rot: 10, dim: true },
              ].map((stamp) => (
                <div
                  key={stamp.label}
                  // style={{ transform: `rotate(${stamp.rot}deg)` }}
                  className={`flex h-14 w-14 flex-col items-center justify-center rounded-full border border-dashed text-center font-mono transition-all duration-300 hover:scale-110 hover:!rotate-0 hover:border-[#A85B3E] hover:bg-[#FFF7EE] hover:shadow-[0_10px_24px_-8px_rgba(168,91,62,0.35)] sm:h-20 sm:w-20 md:h-24 md:w-24 ${
                    stamp.dim ? "border-[#D9CAB1] bg-[#FBF7F0]" : "border-[#D9CAB1] bg-[#FDFBF7]"
                  }`}
                >
                  <span className={`text-[11px] font-bold sm:text-base md:text-lg ${stamp.dim ? "text-[#8A5A32] opacity-75" : "text-[#A85B3E]"}`}>
                    {stamp.num}
                  </span>
                  <span className="mt-0.5 px-1.5 text-[7px] uppercase leading-tight tracking-[0.06em] text-[#8A7C6C] sm:mt-1 sm:px-2 sm:text-[9px] sm:tracking-[0.08em]">
                    {stamp.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link href="mailto:vanshikasabharwalwork@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-[#5C3A21] px-6 font-bold text-[#FFF9F1] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A85B3E] hover:shadow-[0_14px_28px_-10px_rgba(168,91,62,0.45)]">
                  {t("about.emailMe")}
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/--vanshika--/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#D9CAB1] bg-[#FFFDF9] text-[#5C3A21] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A85B3E] hover:bg-[#FFF7EE] hover:text-[#A85B3E]"
                >
                  <FaLinkedin className="text-lg" />
                </Button>
              </Link>
              <Link href="https://x.com/Vanshika_0006" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#D9CAB1] bg-[#FFFDF9] text-[#5C3A21] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A85B3E] hover:bg-[#FFF7EE] hover:text-[#A85B3E]"
                >
                  <RiTwitterXFill className="text-lg" />
                </Button>
              </Link>
              <Link href="https://github.com/VanshikaSabharwal" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#D9CAB1] bg-[#FFFDF9] text-[#5C3A21] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A85B3E] hover:bg-[#FFF7EE] hover:text-[#A85B3E]"
                >
                  <IoLogoGithub className="text-lg" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: passport-style visual */}
          <div className="relative flex h-[320px] items-center justify-center sm:h-[420px] md:h-[500px] md:justify-self-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* stacked background cards for depth */}
            <div className="absolute h-[270px] w-[200px] -translate-x-14 translate-y-4 rotate-[-9deg] rounded-2xl border border-[#D9CAB1] bg-gradient-to-br from-[#F3E7D6] to-[#E9D8BE] shadow-[0_20px_40px_-18px_rgba(92,58,33,0.25)] sm:h-[330px] sm:w-[250px]" />
            <div className="absolute h-[270px] w-[200px] translate-x-16 -translate-y-1.5 rotate-[7deg] rounded-2xl border border-[#D9CAB1] bg-gradient-to-br from-[#F3E7D6] to-[#E9D8BE] shadow-[0_20px_40px_-18px_rgba(92,58,33,0.25)] sm:h-[330px] sm:w-[250px]" />

            {/* passport card */}
            <div className="group relative z-10 w-[224px] -rotate-2 rounded-2xl border border-dashed border-[#D9CAB1] bg-[#FFFDF9] p-4 shadow-[0_30px_60px_-20px_rgba(92,58,33,0.30)] transition-transform duration-300 hover:rotate-0 sm:w-[272px] sm:p-[18px]">
              {/* <div className="absolute -right-4 -top-3.5 z-10 flex h-[68px] w-[68px] rotate-[14deg] items-center justify-center rounded-full border-2 border-[#A85B3E] bg-[#A85B3E]/[0.06] sm:h-[72px] sm:w-[72px]">
                <span className="text-center font-mono text-[8px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#A85B3E]">
                  Open<br />to Work
                </span>
              </div> */}

              {/* <div className="mb-2.5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-[#8A7C6C]">
                <span>No. VS-2024</span>
                <span className="font-bold text-[#A85B3E]">Verified</span>
              </div> */}

              <div className="relative aspect-[3/3.6] w-full overflow-hidden rounded-lg border border-[#D9CAB1] bg-gradient-to-br from-[#F1E3CC] to-[#DEC79E]">
                <Image
                  src="/images/p1.jpeg"
                  alt="Vanshika Sabharwal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#5C3A21]/20" />
              </div>

              <div className="mt-3.5 font-serif text-base text-[#231A12] sm:text-[17px]">
                Vanshika Sabharwal
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#8A5A32]">
                {t("about.softwareEngineer")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <Card
        className={`bg-card border-2 border-dashed border-accent shadow-lg p-4 sm:p-6 md:p-8 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-card-foreground mb-6 sm:mb-8 text-center">
          {t("about.mySkills")}
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
                className="flex flex-row items-center gap-2.5 sm:gap-6 p-2 sm:p-4 bg-muted rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-md animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-accent/20 text-accent text-base sm:text-xl shrink-0">
                  {skill.icon}
                </div>

                <div className="flex-1 w-full">
                  <h3 className="text-xs sm:text-base md:text-lg font-semibold text-card-foreground text-black mb-0.5 sm:mb-2">
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
