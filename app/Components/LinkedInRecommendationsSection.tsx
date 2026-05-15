'use client'

import { useEffect, useState } from 'react'
import { Quote, Linkedin } from 'lucide-react'

type Recommendation = {
  id: string
  name: string
  role: string
  text: string
  linkedinUrl: string
}

const fallbackRecommendations: Recommendation[] = [
  {
    id: 'fallback-1',
    name: 'John Doe',
    role: 'Senior Engineer at MetaCall',
    text: 'Vanshika is one of the most dedicated engineers I have worked with. She consistently delivers high-quality contributions and takes ownership of complex tasks.',
    linkedinUrl: 'https://www.linkedin.com/in/johndoe/',
  },
]

export default function LinkedInRecommendationsSection() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/recommendations.json')
      .then(async (res) => {
        if (!res.ok) {
          throw new Error('Failed to load recommendations.')
        }
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRecommendations(data)
        } else {
          setRecommendations(fallbackRecommendations)
        }
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setRecommendations(fallbackRecommendations)
      })
      .finally(() => setLoading(false))
  }, [])

  const displayRecommendations = recommendations.length ? recommendations : fallbackRecommendations

  return (
    <section className="bg-[#F8F2EC] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#F3E2D5] text-[#B66A2C] text-xs tracking-[0.25em] uppercase font-semibold">
            Recommendations
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl leading-tight font-serif text-[#081B37]">
            Words from
            <span className="text-[#B66A2C] italic"> CEO & Mentors.</span>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-[#D6B59C]" />
            <Linkedin className="w-4 h-4 text-[#B66A2C]" />
            <div className="w-16 h-px bg-[#D6B59C]" />
          </div>

          {loading && <p className="mt-6 text-sm text-[#6A5F5A]">Loading recommendations from LinkedIn...</p>}
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {displayRecommendations.map((rec) => (
            <a
              key={rec.id}
              href={rec.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-[30px] border border-[#E8D9CB] p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F3E2D5] flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-[#B66A2C]" />
              </div>

              <blockquote className="text-xl leading-relaxed font-serif text-[#081B37] italic">
                “{rec.text}”
              </blockquote>

              <div className="mt-8 pt-6 border-t border-[#EFE2D7]">
                <h3 className="text-xl font-serif text-[#081B37]">
                  {rec.name}
                </h3>
                <p className="text-[#B66A2C] mt-1">{rec.role}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}