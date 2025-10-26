import fs from "fs"
import path from "path"
import Link from "next/link"
import Navbar from "../Components/Navbar"

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
  const blogs = await getBlogs()

  return (
    <div className="min-h-screen bg-white">

      <Navbar />
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Stories</h1>
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
          <div className="space-y-12">
            {blogs.map((blog, index) => {
              const slug = encodeURIComponent(blog.title.trim().replace(/\s+/g, "-").toLowerCase())
              return (
                <Link key={index} href={`/blogs/${slug}`}>
                  <article className="group cursor-pointer pb-12 border-b border-gray-200 last:border-b-0 hover:opacity-70 transition-opacity">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
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
