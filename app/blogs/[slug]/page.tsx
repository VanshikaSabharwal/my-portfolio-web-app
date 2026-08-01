import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { Fraunces, Source_Serif_4, Space_Mono, Manrope } from "next/font/google"
import ReadingProgress from "./ReadingProgress"
import BlogArticle from "./BlogArticle"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
})
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-source-serif",
})
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
})

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
  const slug = decodeURIComponent(params.slug)
  const blog = blogs.find((b) => b.title.trim().replace(/\s+/g, "-").toLowerCase() === slug)

  if (!blog) return notFound()

  return (
    <div
      className={`min-h-screen bg-[#FBF8F3] ${fraunces.variable} ${sourceSerif.variable} ${spaceMono.variable} ${manrope.variable}`}
    >
      <ReadingProgress />
      <BlogArticle blog={blog} />
    </div>
  )
}
