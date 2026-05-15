"use client";

import Link from "next/link";
import { FaBook } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { RiOpenSourceFill } from "react-icons/ri";
import { PiPlant } from "react-icons/pi";

interface Blog {
  title: string;
  description: string;
  author: string;
  date: string;
}

interface BlogShowcaseProps {
  blogs: Blog[];
}

const cardMeta = [
  { label: "Internship", icon: <FaBook /> },
  { label: "Performance", icon: <FaDatabase /> },
  { label: "Open Source", icon: <RiOpenSourceFill /> },
];

export default function BlogShowcase({ blogs }: BlogShowcaseProps) {
  const previewBlogs = blogs.slice(0, 3);

  return (
    <section id="blogs" className="relative overflow-hidden bg-[#fff7f0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-0 top-10 hidden sm:block">
        <div className="grid gap-2 p-6">
          {Array.from({ length: 20 }).map((_, idx) => (
            <span key={idx} className="h-1 w-1 rounded-full bg-[#edd9c9] opacity-70" />
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <span className="inline-flex rounded-full bg-[#f3e1cd] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#9f5c33] shadow-sm">
          My Blogs
        </span>

        <h2 className="mt-6 text-3xl font-semibold leading-tight text-[#111827] sm:text-4xl md:text-5xl lg:text-6xl">
          Stories, insights,
          <span className="block">and experiences I’ve <span className="text-[#a55a29]">shared.</span></span>
        </h2>

        <div className="mt-6 flex items-center gap-3 text-[#b9774c]">
          <span className="h-px w-14 bg-[#d9b292]" />
          <span className="text-2xl"><PiPlant /></span>
          <span className="h-px w-14 bg-[#d9b292]" />
        </div>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-7xl gap-8 items-stretch sm:grid-cols-2 lg:grid-cols-3">
        {previewBlogs.map((blog, index) => {
          const slug = encodeURIComponent(blog.title.trim().replace(/\s+/g, "-").toLowerCase());
          const meta = cardMeta[index] ?? { label: "Article", icon: "✦" };

          return (
            <Link
              key={index}
              href={`/blogs/${slug}`}
              className="group flex h-full flex-col rounded-[28px] border border-[#ecd7c9] bg-white p-6 shadow-[0_20px_60px_rgba(88,56,34,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(88,56,34,0.14)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7e1d3] text-xl text-[#8d5b36] shadow-sm">
                  {meta.icon}
                </span>
                <span className="rounded-full border border-[#f0d7c4] bg-[#f7e1d3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b5d30]">
                  {meta.label}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-snug text-[#111827] sm:text-2xl">
                {blog.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#6b7280] overflow-hidden line-clamp-4">
                {blog.description}
              </p>

              <div className="mt-auto flex flex-col gap-2 border-t border-[#f0d7c4] pt-4 text-sm text-[#6b7280] sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-2 text-[#4b5563]">
                  {/* <span className="text-base">👤</span> */}
                  {blog.author}
                </span>
                <span className="text-[#9e5d2d]">{blog.date}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/blogs"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#382413] px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(56,36,19,0.25)] transition hover:bg-[#2f1f14]"
        >
          {/* <span className="text-base"><IoBookSharp /></span> */}
          View all blogs →
        </Link>
      </div>
    </section>
  );
}
