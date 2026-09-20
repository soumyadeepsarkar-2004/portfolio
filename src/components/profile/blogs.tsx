"use client"

import { Blog, BLOGS } from "@/data"
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react"
import Link from "next/link"
import { formatMonthYear } from "@/lib/utils"
import { SkillBadgeList } from "./experience-item"
import { HeaderTitle } from "./header-title"

export function Blogs() {
  if (!BLOGS.length) return null

  return (
    <section id="blogs" className="w-full">
      <HeaderTitle title="Recent Posts" />
      <div className="flex w-full flex-col">
        {BLOGS.map((blog, index) => (
          <SingleBlog key={index} blog={blog} />
        ))}
      </div>
    </section>
  )
}

export function SingleBlog({ blog }: { blog: Blog }) {
  const isExternal = blog.url.startsWith("http")

  return (
    <Link
      href={blog.url}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="border-edge group w-full border-b-[1px] p-1 last:border-b-0 hover:cursor-pointer"
    >
      <div className="hover:bg-accent flex w-full flex-col gap-y-1.5 rounded-[10px] p-3 transition-colors duration-200">
        {/* Top Section */}
        <div className="flex items-start justify-between gap-x-2">
          <h3 className="text-primary/95 text-sm leading-snug font-semibold text-balance sm:text-base group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          <div className="shrink-0 pt-0.5">
            <ArrowRight className="text-muted-foreground size-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0 group-hover:text-primary" />
          </div>
        </div>

        {/* Summary */}
        {blog.summary && (
          <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {blog.summary}
          </p>
        )}

        {/* Middle Meta Section */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 py-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarIcon className="size-3.5" />
            <span>{formatMonthYear(blog.date)}</span>
          </div>
          {blog.readTime && (
            <div className="flex items-center gap-1">
              <span>•</span>
              <ClockIcon className="size-3.5" />
              <span>{blog.readTime}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="pt-0.5">
          <SkillBadgeList skills={blog.tags} />
        </div>
      </div>
    </Link>
  )
}
