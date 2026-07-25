'use client'

import { useEffect, useState } from 'react'
import {
  GitPullRequest,
  Github,
  Building2,
  ExternalLink,
} from 'lucide-react'
import Image from "next/image"

type Pr = {
  title: string
  number: number
  url: string
  merged_at?: string
}

type Organization = {
  name: string
  prs: Pr[]
}

export default function OpenSourceSection() {
  const [organizations, setOrganizations] = useState<Organization[]>([])
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visiblePrCount, setVisiblePrCount] = useState(3)

  useEffect(() => {
    const fetchGithubContributions = async () => {
      try {
        const response = await fetch('/api/github-prs')
        if (!response.ok) {
          const errorBody = await response.json().catch(() => null)
          throw new Error(errorBody?.error || `GitHub API error ${response.status}`)
        }

        const data: Organization[] = await response.json()
        setOrganizations(data)
        setSelectedOrg(data[0] ?? null)
      } catch (fetchError) {
        console.error('Error loading GitHub contributions:', fetchError)
        setError('Unable to load GitHub contributions right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchGithubContributions()
  }, [])

  const activeOrg = selectedOrg ?? organizations[0] ?? null

  useEffect(() => {
  setVisiblePrCount(3)
}, [selectedOrg])

  return (
    <section className="bg-[#F8F2EC] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#F3E2D5] text-[#B66A2C] text-xs tracking-[0.25em] uppercase font-semibold">
            Open Source
          </span>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight font-serif text-[#081B37]">
            Contributions,
            <br />
            pull requests, and
            <span className="text-[#B66A2C] italic"> communities.</span>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-[#D6B59C]" />
            <Github className="w-4 h-4 text-[#B66A2C]" />
            <div className="w-16 h-px bg-[#D6B59C]" />
          </div>
        </div>

        {/* GitHub Contribution Chart */}
        <div className="bg-white rounded-[30px] border border-[#E8D9CB] shadow-sm p-8 md:p-10 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#F3E2D5] flex items-center justify-center">
              <Github className="w-5 h-5 text-[#B66A2C]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B66A2C] font-semibold">
                Activity Heatmap
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#081B37]">
                GitHub Contributions
              </h3>
            </div>
          </div>

          {/* Use react-github-calendar */}
          <div className="overflow-x-auto">
            {/*
              npm install react-github-calendar

              <GitHubCalendar
                username="VanshikaSabharwal"
                blockSize={14}
                blockMargin={4}
                fontSize={14}
              />
            */}
            <div className="relative w-full" style={{ aspectRatio: '4 / 1' }}>
              <Image
                src="https://ghchart.rshah.org/VanshikaSabharwal"
                alt="GitHub contribution chart"
                fill
                className="w-full rounded-2xl object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>


        {/* Organization Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {loading ? (
            <div className="md:col-span-3 rounded-[30px] border border-[#E8D9CB] bg-white p-10 text-center text-[#6E6E6E] shadow-sm">
              Loading GitHub contributions...
            </div>
          ) : error ? (
            <div className="md:col-span-3 rounded-[30px] border border-[#E8D9CB] bg-white p-10 text-center text-[#6E6E6E] shadow-sm">
              {error}
            </div>
          ) : organizations.length === 0 ? (
            <div className="md:col-span-3 rounded-[30px] border border-[#E8D9CB] bg-white p-10 text-center text-[#6E6E6E] shadow-sm">
              No GitHub contributions found yet.
            </div>
          ) : (
            organizations.map((org) => (
              <button
                key={org.name}
                onClick={() => setSelectedOrg(org)}
                className={`text-left bg-white rounded-[30px] border p-6 transition-all duration-300 ${
                  activeOrg?.name === org.name
                    ? 'border-[#B66A2C] shadow-md -translate-y-1'
                    : 'border-[#E8D9CB] hover:-translate-y-1 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3E2D5] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#B66A2C]" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#F9EEE5] text-[#B66A2C] text-xs tracking-[0.2em] uppercase font-semibold">
                    {org.prs.length} PRs
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#081B37] leading-snug">
                  {org.name}
                </h3>

                <p className="mt-4 text-[#6E6E6E] italic">
                  Click to explore merged pull requests.
                </p>
              </button>
            ))
          )}
        </div>

        {/* Pull Requests List */}
        <div className="bg-white rounded-[30px] border border-[#E8D9CB] shadow-sm p-8 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#F3E2D5] text-[#B66A2C] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                Pull Requests
              </span>

              <h3 className="text-lg sm:text-2xl md:text-3xl font-serif text-[#081B37]">
                {activeOrg?.name ?? 'Contributions'}
              </h3>
            </div>

            <GitPullRequest className="w-6 h-6 text-[#B66A2C]" />
          </div>

<div className="space-y-4">
  {loading || !activeOrg ? (
    <div className="rounded-2xl border border-[#F0E4DA] bg-[#FCF8F4] p-10 text-center text-[#6E6E6E]">
      {loading
        ? 'Loading pull request details...'
        : error
        ? error
        : 'Select an organization to view pull request details.'}
    </div>
  ) : (
    <>
      {activeOrg.prs
        .slice(0, visiblePrCount)
        .map((pr) => (
          <a
            key={pr.number}
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-2xl border border-[#F0E4DA] hover:border-[#D6B59C] hover:bg-[#FCF8F4] transition"
          >
            <div>
              <h4 className="text-base sm:text-lg font-medium text-[#081B37]">
                {pr.title}
              </h4>
              <p className="text-[#B66A2C] mt-1">#{pr.number}</p>
            </div>

            <ExternalLink className="w-4 h-4 text-[#B66A2C]" />
          </a>
        ))}

      {/* Show More / Show Less */}
      {activeOrg.prs.length > 3 && (
        <div className="pt-4 flex justify-center">
          {visiblePrCount < activeOrg.prs.length ? (
            <button
              onClick={() =>
                setVisiblePrCount((prev) =>
                  Math.min(prev + 3, activeOrg.prs.length)
                )
              }
              className="px-6 py-3 rounded-full bg-[#F3E2D5] text-[#B66A2C] font-semibold hover:bg-[#EBD4C2] transition"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={() => setVisiblePrCount(3)}
              className="px-6 py-3 rounded-full bg-[#F9EEE5] text-[#B66A2C] font-semibold hover:bg-[#F3E2D5] transition"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </>
  )}
</div>
        </div>
      </div>
    </section>
  )
}