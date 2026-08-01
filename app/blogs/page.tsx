import fs from "fs"
import path from "path"
import Navbar from "../Components/NavbarBlogs"
import BlogList from "./BlogList"

interface Blog {
  title: string
  description: string
  author: string
  date: string
  japaneseTitle?: string
  japaneseDescription?: string
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
    <>
      <Navbar />
      <BlogList blogs={blogs} />
    </>
  )
}
