import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

interface Blog {
  title: string
  description: string
  author: string
  date: string
}

interface Props {
  params: { slug: string }
}

async function getBlogs(): Promise<Blog[]> {
  const filePath = path.join(process.cwd(), "blogs.json")
  if (!fs.existsSync(filePath)) return []
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}

export default async function BlogDetail({ params }: Props) {
  const blogs = await getBlogs()
  const slug = params.slug
  const blog = blogs.find((b) => b.title.trim().replace(/\s+/g, "-").toLowerCase() === slug)

  if (!blog) return notFound()

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link href="/blogs" className="text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to stories
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">{blog.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="font-medium text-gray-900">{blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none text-gray-700">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900" {...props} />,
              p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
              li: ({ node, ...props }) => <li className="mb-2" {...props} />,
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" {...props} />
              ),
              pre: ({ node, ...props }) => (
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
              ),
            }}
          >
            {blog.description}
          </ReactMarkdown>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 mt-12">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <Link href="/blogs" className="text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to stories
          </Link>
        </div>
      </div>
    </div>
  )
}
