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
  const previewBlogs = blogs.slice(0, 3);

  return (
    <section id="blogs" className="bg-background py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
          My Blogs
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-10 sm:mb-12">
          Stories, insights, and experiences I’ve shared.
        </p>

        {/* Blog Cards */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {previewBlogs.map((blog, index) => {
            const slug = encodeURIComponent(
              blog.title.trim().replace(/\s+/g, "-").toLowerCase()
            );
            return (
              <Link
                key={index}
                href={`/blogs/${slug}`}
                className="block text-left border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
                  {blog.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground line-clamp-3 mb-3 sm:mb-4 leading-relaxed">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* More Blogs Button */}
        <div className="mt-10 sm:mt-12">
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
