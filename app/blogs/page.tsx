import fs from "fs"
import path from "path"
import Link from "next/link"
import Navbar from "../Components/NavbarBlogs"

interface Blog {
  title: string
  description: string
  author: string
  date: string
}

async function getBlogs(): Promise<Blog[]> {
  const filePath = path.join(process.cwd(), "blogs.json")
  if (!fs.existsSync(filePath)) return []
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

export default async function BlogPage() {
  let blogs = await getBlogs()

    blogs = blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-white">

      <Navbar />
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Stories</h1>
          <p className="text-lg text-gray-600">Insights, ideas, and experiences</p>
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No stories yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-12">
            {blogs.map((blog, index) => {
              const slug = encodeURIComponent(blog.title.trim().replace(/\s+/g, "-").toLowerCase())
              return (
                <Link key={index} href={`/blogs/${slug}`} className="my-[0.2rem] mx-[1rem]">
                  <article
                    className="group cursor-pointer rounded-2xl border border-gray-200 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md
                    sm:rounded-none sm:border-0 sm:border-b sm:border-gray-200 sm:p-0 sm:pb-12 sm:shadow-none sm:transition-opacity sm:last:border-b-0 sm:hover:translate-y-0 sm:hover:border-gray-500 sm:hover:opacity-70"
                  >
                    <h2 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-gray-700 sm:mb-3 sm:text-xl md:text-3xl">
                      {blog.title}
                    </h2>
                    <p className="mb-3 line-clamp-2 text-sm italic text-gray-500 sm:mb-4 sm:text-lg sm:not-italic sm:text-gray-600">
                      {blog.description}
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
