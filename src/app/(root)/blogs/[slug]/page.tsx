import { SkillBadgeList } from "@/components/profile/experience-item"
import { Separator } from "@/components/profile/separator"
import { BackButton } from "@/components/site/component-info"
import { ContainerWrapper } from "@/components/site/container"
import { Card } from "@/components/ui/card"
import { BLOGS } from "@/data/blogs"
import { formatMonthYear } from "@/lib/utils"
import { CalendarIcon, ClockIcon, ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export async function generateStaticParams() {
  return BLOGS.filter((b) => !b.url.startsWith("http")).map((blog) => ({
    slug: blog.slug,
  }))
}

const BlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const resolvedParams = await params
  const slug = resolvedParams?.slug

  const blog = BLOGS.find(
    (b) => b.slug === slug || b.url === `/blogs/${slug}`
  )

  if (!blog) {
    return (
      <ContainerWrapper>
        <Separator />
        <BackButton title="Blogs" href="/#blogs" />
        <Separator />
        <div className="flex h-64 flex-col items-center justify-center space-y-2">
          <p className="text-muted-foreground text-lg font-medium">
            Blog post not found
          </p>
          <Link
            href="/#blogs"
            className="text-primary text-sm underline hover:opacity-80"
          >
            Return to Homepage
          </Link>
        </div>
      </ContainerWrapper>
    )
  }

  const isExternal = blog.url.startsWith("http")

  return (
    <ContainerWrapper>
      <Separator />
      <BackButton title="Blogs" href="/#blogs" />
      <Separator />

      {/* Header Section */}
      <div className="flex flex-col gap-4 p-4 md:p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-sm">
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="size-4" />
            <span>{formatMonthYear(blog.date)}</span>
          </div>
          {blog.readTime && (
            <div className="flex items-center gap-1.5">
              <ClockIcon className="size-4" />
              <span>{blog.readTime}</span>
            </div>
          )}
        </div>

        <h1 className="text-primary/95 text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
          {blog.title}
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          {blog.summary}
        </p>

        <div className="pt-2">
          <SkillBadgeList skills={blog.tags} />
        </div>
      </div>

      <Separator />

      {/* Hero Banner / Cover */}
      {blog.image && (
        <div className="p-4 md:p-6">
          <Card className="border-border overflow-hidden p-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-[8px] bg-muted">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1200}
                height={675}
                quality={95}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </Card>
        </div>
      )}

      {/* Main Content / Paragraphs */}
      <div className="p-4 md:p-6 space-y-6 text-primary/90 text-base leading-relaxed sm:text-lg">
        {blog.content ? (
          blog.content.map((paragraph, idx) => (
            <p key={idx} className="text-pretty">
              {paragraph}
            </p>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <p className="text-muted-foreground">
              This article was published on an external platform.
            </p>
            {isExternal && (
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
              >
                Read on Medium / External Platform
                <ExternalLinkIcon className="size-4" />
              </a>
            )}
          </div>
        )}
      </div>

      <Separator />

      {/* Author & Footer Note */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 md:p-6 bg-muted/30">
        <div>
          <h4 className="text-sm font-semibold text-primary">Written by Soumyadeep Sarkar</h4>
          <p className="text-xs text-muted-foreground">
            Full Stack & Web3 Developer • GSSoC&apos;25 Mentor
          </p>
        </div>
        {isExternal && (
          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-primary font-medium hover:underline"
          >
            Original Post <ExternalLinkIcon className="size-3.5" />
          </a>
        )}
      </div>
      <Separator />
    </ContainerWrapper>
  )
}

export default BlogPage
