"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

const EnhancedTerminal: React.FC = () => {
  const [currentLine, setCurrentLine] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands = {
    help: "Available commands: about, skills, projects, contact, clear",
    about: "Software developer passionate about creating innovative applications",
    skills: "React • Next.js • TypeScript • Node.js • Python • MongoDB",
    projects: "Check out my portfolio of web applications and tools",
    contact: "Email: vanshikasabharwalwork@gmail.com",
    clear: "CLEAR_TERMINAL",
  }

  const typeWriter = (text: string, callback?: () => void) => {
    setIsTyping(true)
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setCurrentLine(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setIsTyping(false)
        if (callback) callback()
      }
    }, 50)
  }

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    const output = commands[command as keyof typeof commands] || `Command not found: ${cmd}`

    if (output === "CLEAR_TERMINAL") {
      setHistory([])
      setCurrentLine("")
      return
    }

    setHistory((prev) => [...prev, `$ ${cmd}`, output])
    setCurrentLine("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentLine.trim()) {
      handleCommand(currentLine)
    }
  }

  useEffect(() => {
    const welcomeText = "Welcome to Vanshika's Terminal! Type 'help' to get started."
    setTimeout(() => {
      typeWriter(welcomeText, () => {
        setHistory([welcomeText])
        setCurrentLine("")
      })
    }, 1000)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history, currentLine])

  return (
    <div className="w-full animate-fade-in-up">
      <Card className="bg-card border-4 border-black rounded-xl shadow-xl overflow-hidden">
        {/* Top bar */}
        <div className="bg-black/20 px-2 sm:px-4 py-1 sm:py-2 border-b border-black/30">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse-subtle"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 animate-pulse-subtle animate-delay-100"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse-subtle animate-delay-200"></div>
            <span className="ml-2 sm:ml-4 text-xs sm:text-sm font-mono text-card-foreground">
              terminal
            </span>
          </div>
        </div>

        {/* Terminal body */}
        <div
          ref={terminalRef}
          className="bg-card text-card-foreground p-4 md:p-6 h-80 sm:h-96 md:h-[32rem] overflow-y-auto font-mono text-sm sm:text-base md:text-lg rounded-lg"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, index) => (
            <div
              key={index}
              className={`mb-1 ${
                line.startsWith("$") ? "text-black font-semibold" : "text-card-foreground/80"
              } animate-slide-in-left`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {line}
            </div>
          ))}

          {/* Input line */}
          <div className="flex items-center flex-wrap">
            <span className="text-black font-semibold mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentLine}
              onChange={(e) => setCurrentLine(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent border-none outline-none flex-1 text-card-foreground text-sm sm:text-base md:text-lg py-1"
              placeholder={isTyping ? "" : "Type a command..."}
              disabled={isTyping}
            />
            <span className="animate-pulse text-black hidden sm:inline">|</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default EnhancedTerminal
