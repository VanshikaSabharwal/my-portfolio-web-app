import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Blog {
  title: string;
  description: string;
  author: string;
  date: string;
}

const blogsFilePath = path.join(process.cwd(), "blogs.json");

// Ensure blogs.json exists
if (!fs.existsSync(blogsFilePath)) {
  fs.writeFileSync(blogsFilePath, JSON.stringify([]));
}

// POST handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newBlog: Blog = body;

    const blogs: Blog[] = JSON.parse(fs.readFileSync(blogsFilePath, "utf8"));
    blogs.push(newBlog);

    fs.writeFileSync(blogsFilePath, JSON.stringify(blogs, null, 2));

    return NextResponse.json({ message: "Blog saved!" });
  } catch (error) {
    return NextResponse.json({ message: "Error saving blog", error }, { status: 500 });
  }
}

// Optional: GET handler to fetch all blogs
export async function GET() {
  try {
    const blogs: Blog[] = JSON.parse(fs.readFileSync(blogsFilePath, "utf8"));
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ message: "Error reading blogs", error }, { status: 500 });
  }
}
