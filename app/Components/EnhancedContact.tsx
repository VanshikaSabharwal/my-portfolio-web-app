"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { FaLinkedin, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaEnvelope } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri"

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Heading */}
      <div
        className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Get In Touch
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          I&apos;d love to hear from you! Whether you have a project in mind or just want to connect, feel free to reach out.
        </p>
      </div>

      {/* Grid Layout - 2 equal halves */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-full overflow-x-hidden">
        {/* Contact Form */}
        <Card
          className={`bg-card border-2 border-dashed border-accent shadow-lg p-6 sm:p-8 transition-all duration-700 ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          } w-full break-words`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-card-foreground font-semibold">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-input border-border focus:border-accent transition-colors duration-300 w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-card-foreground font-semibold">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-input border-border focus:border-accent transition-colors duration-300 w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-card-foreground font-semibold">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hello!"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-input border-border focus:border-accent transition-colors duration-300 resize-none w-full"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </Button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg animate-fade-in-up">
                <FaCheckCircle />
                <span>Message sent successfully! I&apos;ll get back to you soon.</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg animate-fade-in-up">
                <FaExclamationCircle />
                <span>Failed to send message. Please try again.</span>
              </div>
            )}
          </form>
        </Card>

        {/* Contact Info */}
        <Card
          className={`bg-card border-2 border-dashed border-accent shadow-lg p-6 sm:p-8 transition-all duration-700 ${
            isVisible ? "animate-slide-in-right animate-delay-200" : "opacity-0"
          } w-full break-words`}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-6">Let&apos;s Connect</h3>
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
              <div className="hidden sm:flex w-12 h-12 bg-accent/20 rounded-full items-center justify-center">
                 <FaEnvelope className="text-black text-lg sm:text-xl" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Email</p>
                <Link
                  href="mailto:vanshikasabharwalwork@gmail.com"
                  className="text-muted-foreground transition-colors duration-300 text-sm sm:text-base"
                >
                  vanshikasabharwalwork@gmail.com
                </Link>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaLinkedin className="text-blue-600 text-lg sm:text-xl" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">LinkedIn</p>
                <Link
                  href="https://www.linkedin.com/in/--vanshika--/"
                  className="text-muted-foreground transition-colors duration-300 text-sm sm:text-base"
                >
                  Connect with me
                </Link>
              </div>
            </div>

            {/* Twitter */}
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <RiTwitterXFill className="text-blue-400 text-lg sm:text-xl" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Twitter</p>
                <Link
                  href="https://x.com/Vanshika_0006"
                  className="text-muted-foreground transition-colors duration-300 text-sm sm:text-base"
                >
                  Follow me
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default EnhancedContact
