"use client"

import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useLanguage } from "../../context/LanguageContext"
import ShareRow from "./ShareRow"

interface Blog {
  title: string
  description: string
  author: string
  date: string
  points?: string[]
  category?: string
  tags?: string[]
  japaneseTitle?: string
  japaneseDescription?: string
  japanesePoints?: string[]
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function getReadTime(description: string, points: string[] = []) {
  const words =
    description.split(/\s+/).filter(Boolean).length +
    points.join(" ").split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export default function BlogArticle({ blog }: { blog: Blog }) {
  const { t, locale, toggleLocale } = useLanguage()

  const title = locale === "jp" && blog.japaneseTitle ? blog.japaneseTitle : blog.title
  const description = locale === "jp" && blog.japaneseDescription ? blog.japaneseDescription : blog.description
  const points = locale === "jp" && blog.japanesePoints ? blog.japanesePoints : blog.points ?? []

  const readTime = getReadTime(description, points)
  let paragraphIndex = 0

  return (
    <div className="mx-auto max-w-[900px] px-6 py-14 sm:py-20">
      {/* Back link + language toggle */}
      <div className="mb-10 flex items-center justify-between">
        <Link
          href="/blogs"
          className="group inline-flex items-center gap-2 [font-family:var(--font-space-mono)] text-[13px] text-[#8A7C6C] transition-colors hover:text-[#A85B3E]"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>{" "}
          {t("blogs.backToStories")}
        </Link>
        <button
          onClick={toggleLocale}
          className="text-sm font-bold text-[#8A5A32] border border-[#D9CAB1] rounded-full px-3 py-1 hover:bg-[#FBF3E7] transition-colors"
        >
          {t("lang.toggleLabel")}
        </button>
      </div>

      {/* Tag */}
      <span className="mb-5 inline-flex items-center rounded-full border border-[#D9CAB1] bg-[#FBF3E7] px-3.5 py-1.5 [font-family:var(--font-space-mono)] text-[11px] uppercase tracking-[0.14em] text-[#A85B3E] ml-4">
        {blog.category ?? "Essay"}
      </span>

      {/* Headline */}
      <h1 className="mb-6 [font-family:var(--font-fraunces)] text-[32px] font-semibold leading-[1.14] text-[#231A12] sm:text-[40px] md:text-[46px]">
        {title}
      </h1>

      {/* Meta row */}
      <div className="mb-9 flex items-center gap-3.5 border-b border-[#E9DFCF] pb-9">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8A5A32] to-[#5C3A21] [font-family:var(--font-fraunces)] text-sm font-semibold text-[#FBF3E7]">
          {getInitials(blog.author)}
        </div>
        <div className="text-sm leading-[1.4] text-[#8A7C6C]">
          <span className="font-bold text-[#231A12]">{blog.author}</span>
          <span className="mx-1.5 text-[#D9CAB1]">·</span>
          {blog.date}
          <span className="mx-1.5 text-[#D9CAB1]">·</span>
          <span className="[font-family:var(--font-space-mono)] text-xs text-[#A85B3E]">
            {readTime} {t("blogs.minRead")}
          </span>
        </div>
      </div>

      {/* Article body */}
      <div className="[font-family:var(--font-source-serif)] text-[17px] leading-[1.8] text-[#3D342B] sm:text-[18.5px]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="mb-4 mt-8 [font-family:var(--font-fraunces)] text-3xl font-semibold text-[#231A12]" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="mb-4 mt-8 [font-family:var(--font-fraunces)] text-2xl font-semibold text-[#231A12]" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="mb-3 mt-6 [font-family:var(--font-fraunces)] text-xl font-semibold text-[#231A12]" {...props} />
            ),
            p: ({ node, ...props }) => {
              const isFirst = paragraphIndex === 0
              paragraphIndex += 1
              return (
                <p
                  className={
                    isFirst
                      ? "mb-6 first-letter:float-left first-letter:mr-2.5 first-letter:mt-1 first-letter:[font-family:var(--font-fraunces)] first-letter:text-[58px] first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-[#A85B3E]"
                      : "mb-6"
                  }
                  {...props}
                />
              )
            },
            ul: ({ node, ...props }) => <ul className="mb-6 list-disc space-y-2 pl-6" {...props} />,
            ol: ({ node, ...props }) => <ol className="mb-6 list-decimal space-y-2 pl-6" {...props} />,
            li: ({ node, ...props }) => <li {...props} />,
            strong: ({ node, ...props }) => (
              <strong
                className="relative mb-2.5 block pl-5 [font-family:var(--font-manrope)] text-sm font-bold uppercase tracking-[0.04em] text-[#231A12] before:absolute before:left-0 before:top-1.5 before:h-2.5 before:w-2.5 before:rotate-45 before:bg-[#A85B3E] before:content-['']"
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="my-9 rounded [font-family:var(--font-fraunces)] text-xl italic leading-[1.5] text-[#5C3A21] border-l-[3px] border-[#A85B3E] bg-[#FBF3E7] px-7 py-6 sm:text-[23px]"
                {...props}
              />
            ),
            code: ({ node, ...props }) => (
              <code className="rounded bg-[#F3E7D6] px-2 py-1 text-sm [font-family:var(--font-space-mono)]" {...props} />
            ),
            pre: ({ node, ...props }) => <pre className="mb-6 overflow-x-auto rounded-lg bg-[#F3E7D6] p-4" {...props} />,
            a: ({ node, href, children, ...props }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A85B3E] underline decoration-[#D9CAB1] underline-offset-2 hover:decoration-[#A85B3E]"
                {...props}
              >
                {children}
              </a>
            ),
          }}
        >
          {description}
        </ReactMarkdown>

        {/* Key Points */}
        {points.length > 0 && (
          <div className="mt-12 border-t border-[#E9DFCF] pt-9">
            <h2 className="mb-4 [font-family:var(--font-fraunces)] text-2xl font-semibold text-[#231A12]">
              {t("blogs.keyPoints")}
            </h2>
            <ul className="space-y-3 [font-family:var(--font-manrope)] text-base leading-relaxed text-[#3D342B]">
              {points.map((point, i) => (
                <li key={i} className="relative pl-6">
                  <span className="absolute left-0 top-[7px] h-2 w-2 rotate-45 rounded-[1px] bg-[#A85B3E]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer: tags + share */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-[#E9DFCF] pt-8">
        <div className="flex flex-wrap gap-2.5">
          {blog.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#D9CAB1] bg-[#FDFBF7] px-3.5 py-1.5 [font-family:var(--font-space-mono)] text-xs text-[#8A5A32] transition-colors hover:border-[#A85B3E] hover:bg-[#FBF3E7] hover:text-[#A85B3E]"
            >
              #{tag}
            </span>
          ))}
        </div>
        <ShareRow title={title} />
      </div>
    </div>
  )
}
