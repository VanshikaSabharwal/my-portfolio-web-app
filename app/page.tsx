"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { IoReorderThreeSharp, IoCloseSharp } from "react-icons/io5"

import Intro from "./Components/Intro/Intro"
import EnhancedTerminal from "./Components/EnhancedTerminal"
import EnhancedAbout from "./Components/EnhancedAbout"
import EnhancedProjects from "./Components/EnhancedProjects"
import EnhancedContact from "./Components/EnhancedContact"

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  const sections = [
    { id: "intro", label: "Intro", component: <Intro /> },
    { id: "terminal", label: "Terminal", component: <EnhancedTerminal /> },
    { id: "about", label: "About", component: <EnhancedAbout /> },
    { id: "projects", label: "Projects", component: <EnhancedProjects /> },
    { id: "contact", label: "Contact", component: <EnhancedContact /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-2xl font-bold text-foreground whitespace-nowrap">
            Vanshika Sabharwal
          </h1>

          {/* Desktop nav */}
          <div className="hidden sm:flex gap-2">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:scale-110 transition-transform duration-200 whitespace-nowrap text-base sm:text-lg md:text-xl"
                >
                  {section.label}
                </Button>
              </a>
            ))}
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="sm:hidden text-3xl p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoCloseSharp /> : <IoReorderThreeSharp />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 flex flex-col gap-3 bg-background/95 border-t border-border rounded-b-2xl shadow-md">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)} // close after click
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full justify-start text-lg hover:translate-x-2 transition-transform"
                >
                  {section.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Slide Sections */}
      <main className="snap-y md:snap-mandatory overflow-y-auto scroll-smooth">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="snap-start min-h-[80vh] md:min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-8 sm:py-12"
          >
            <div className="w-full max-w-5xl">{section.component}</div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm sm:text-base">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Vanshika Sabharwal
          </p>
        </div>
      </footer>
    </div>
  )
}
