"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

import Intro from "./Components/Intro/Intro"
import EnhancedTerminal from "./Components/EnhancedTerminal"
import EnhancedAbout from "./Components/EnhancedAbout"
import EnhancedProjects from "./Components/EnhancedProjects"
import EnhancedContact from "./Components/EnhancedContact"
import BlogShowcase from "./Components/BlogsMainPageShowcase"
import OpenSourceSection from "./Components/Opensource"
import LinkedInRecommendationsSection from "./Components/LinkedInRecommendationsSection"
import blogsData from "../blogs.json";
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "./context/LanguageContext"

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, toggleLocale } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const sections = [
    { id: "intro", label: t("nav.intro"), component: <Intro /> },
    { id: "about", label: t("nav.about"), component: <EnhancedAbout /> },
    { id: "opensource", label: t("nav.opensource"), component: <OpenSourceSection /> },
    { id: "projects", label: t("nav.projects"), component: <EnhancedProjects /> },
    { id: "recommendations", label: t("nav.recommendations"), component: <LinkedInRecommendationsSection /> },
    { id: "blogs", label: t("nav.myblogs"), component: <BlogShowcase blogs={blogsData}/>},
    { id: "terminal", label: t("nav.terminal"), component: <EnhancedTerminal /> },
    { id: "contact", label: t("nav.contact"), component: <EnhancedContact /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<h1 className="text-lg sm:text-2xl font-bold text-foreground whitespace-nowrap">
  <Link href="/" className="hover:underline">
    <Image src="/images/vs-logo.jpeg" alt="vs-logo" width={50} height={50} className="rounded-[50%]" />
  </Link>
</h1>

          {/* Desktop nav */}
          <div className="hidden sm:flex gap-2">
            {sections.map((section) => (
              <Link key={section.id} href={`#${section.id}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:scale-110 transition-transform duration-200 whitespace-nowrap text-base sm:text-lg md:text-xl"
                >
                  {section.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="text-sm font-bold text-foreground border border-border rounded-full px-3 py-1.5 hover:bg-muted transition-colors"
            >
              {t("lang.toggleLabel")}
            </button>

            {/* Hamburger (mobile only) — morphs into a close icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="sm:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-lg transition-colors duration-200 hover:bg-muted active:bg-muted/70"
            >
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#231A12] origin-center transition-all duration-300 ease-in-out ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#231A12] origin-center transition-all duration-200 ease-in-out ${
                  menuOpen ? "w-0 opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#231A12] origin-center transition-all duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-page mobile menu overlay */}
      <div
        className={`sm:hidden fixed inset-0 z-40 bg-[#fff7f0] flex flex-col transition-opacity duration-300 ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Offset so links start below the sticky navbar */}
        <div className="h-[72px] shrink-0" />

        <div className="flex-1 flex flex-col justify-center px-8 pb-10">
          <ul>
            {sections.map((section, i) => (
              <li
                key={section.id}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(48px)",
                  transition: "opacity 0.38s ease, transform 0.38s ease",
                  transitionDelay: menuOpen ? `${80 + i * 60}ms` : "0ms",
                }}
              >
                <Link
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between group py-3.5 border-b border-[#ecd7c9]"
                >
                  <span className="text-[28px] font-bold text-[#231A12] group-hover:text-[#a55a29] transition-colors duration-200 leading-tight tracking-tight">
                    {section.label}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-[#a55a29] opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-250"
                  >
                    <path
                      d="M3 10h14M10 4l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA — cascades in after all links */}
          <div
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(48px)",
              transition: "opacity 0.38s ease, transform 0.38s ease",
              transitionDelay: menuOpen ? `${80 + sections.length * 60}ms` : "0ms",
            }}
            className="mt-8"
          >
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#382413] text-white text-[15px] font-semibold hover:bg-[#2f1f14] active:scale-[0.98] transition-all duration-200 shadow-md"
            >
              {t("nav.sayhello")}
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Sections */}
      <main className="snap-y md:snap-mandatory overflow-y-auto scroll-smooth">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="bg-[#fff7f0] snap-start md:min-h-screen flex items-center justify-center px-4 py-6 sm:py-12"
          >
            <div className="w-full">{section.component}</div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm sm:text-base">
          <p className="text-muted-foreground">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </div>
  )
}
