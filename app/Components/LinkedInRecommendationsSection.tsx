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
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({})

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }))
  }

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
    <section className="bg-[#F8F2EC] py-24 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#F3E2D5] text-[#B66A2C] text-xs tracking-[0.25em] uppercase font-semibold">
            Recommendations
          </span>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight font-serif text-[#081B37]">
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
          {displayRecommendations.map((rec) => {
            const isExpanded = !!expandedIds[rec.id]
            return (
              <div
                key={rec.id}
                className="bg-white rounded-[30px] border border-[#E8D9CB] p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F3E2D5] flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-[#B66A2C]" />
                </div>

                <blockquote
                  className={`text-base sm:text-lg md:text-xl leading-relaxed font-serif text-[#081B37] italic ${
                    isExpanded ? "" : "line-clamp-4"
                  }`}
                >
                  &quot;{rec.text}&quot;
                </blockquote>

                {rec.text.length > 180 && (
                  <button
                    type="button"
                    onClick={() => toggleExpanded(rec.id)}
                    className="mt-3 text-sm font-semibold text-[#B66A2C] hover:underline transition-colors duration-300"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                )}

                <div className="mt-8 pt-6 border-t border-[#EFE2D7] flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif text-[#081B37]">
                      {rec.name}
                    </h3>
                    <p className="text-[#B66A2C] mt-1">{rec.role}</p>
                  </div>
                  <a
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${rec.name} on LinkedIn`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3E2D5] text-[#B66A2C] hover:bg-[#B66A2C] hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}