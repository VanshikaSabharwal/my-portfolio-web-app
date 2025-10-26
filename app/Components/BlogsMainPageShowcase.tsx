"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Blog {
  title: string;
  description: string;
  author: string;
  date: string;
}

interface BlogShowcaseProps {
  blogs: Blog[];
}

export default function BlogShowcase({ blogs }: BlogShowcaseProps) {
  // Show only 2–3 recent blogs
  const previewBlogs = blogs.slice(0, 3);

  return (
    <section id="blogs" className="bg-background py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          My Blogs
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Stories, insights, and experiences I’ve shared.
        </p>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {previewBlogs.map((blog, index) => {
            const slug = encodeURIComponent(
              blog.title.trim().replace(/\s+/g, "-").toLowerCase()
            );
            return (
              <Link
                key={index}
                href={`/blogs/${slug}`}
                className="block text-left border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* More Blogs Button */}
        <div className="mt-12">
          <Link href="/blogs">
            <Button
              variant="default"
              size="lg"
              className="hover:scale-105 transition-transform duration-200"
            >
              More Blogs →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
