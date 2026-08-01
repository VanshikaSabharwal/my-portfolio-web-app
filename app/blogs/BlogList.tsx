"use client"

import Link from "next/link"
import { useLanguage } from "../context/LanguageContext"

interface Blog {
  title: string
  description: string
  author: string
  date: string
  japaneseTitle?: string
  japaneseDescription?: string
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const { t, locale } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t("blogs.storiesTitle")}</h1>
          <p className="text-lg text-gray-600">{t("blogs.storiesSubtitle")}</p>
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t("blogs.empty")}</p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-12">
            {blogs.map((blog, index) => {
              const slug = encodeURIComponent(blog.title.trim().replace(/\s+/g, "-").toLowerCase())
              const title = locale === "jp" && blog.japaneseTitle ? blog.japaneseTitle : blog.title
              const description =
                locale === "jp" && blog.japaneseDescription ? blog.japaneseDescription : blog.description
              return (
                <Link key={index} href={`/blogs/${slug}`} className="my-[0.2rem] mx-[1rem]">
                  <article
                    className="group cursor-pointer rounded-2xl border border-gray-200 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md
                    sm:rounded-none sm:border-0 sm:border-b sm:border-gray-200 sm:p-0 sm:pb-12 sm:shadow-none sm:transition-opacity sm:last:border-b-0 sm:hover:translate-y-0 sm:hover:border-gray-500 sm:hover:opacity-70"
                  >
                    <h2 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-gray-700 sm:mb-3 sm:text-xl md:text-3xl">
                      {title}
                    </h2>
                    <p className="mb-3 line-clamp-2 text-sm italic text-gray-500 sm:mb-4 sm:text-lg sm:not-italic sm:text-gray-600">
                      {description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 sm:gap-4 sm:text-sm">
                      <span className="font-medium text-gray-700">{blog.author}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
