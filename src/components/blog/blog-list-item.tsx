import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Blog } from "contentlayer/generated";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

type BlogListItemProps = Pick<
  Blog,
  "readingTime" | "slug" | "title" | "summary" | "publishedAt" | "externalUrl" | "image"
>;

export function BlogListItem({ blog }: { blog: BlogListItemProps }) {
  return (
    <Link 
      href={blog.externalUrl || `/blog/${blog.slug}`}
      target={blog.externalUrl ? "_blank" : undefined}
      rel={blog.externalUrl ? "noopener noreferrer" : undefined}
      className="block group py-8 border-b border-border/40 last:border-b-0"
    >
      <article>
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8">
          {/* Left side - Date and Reading time */}
          <div className="flex md:flex-col gap-3 md:gap-1 text-sm text-muted-foreground">
            <time dateTime={blog.publishedAt} className="whitespace-nowrap">
              {formatDate(blog.publishedAt)}
            </time>
            <div className="flex items-center gap-1.5 md:hidden">
              <Clock className="h-3.5 w-3.5" />
              <span>{blog.readingTime.text}</span>
            </div>
          </div>

        {/* Right side - Content */}
        <div className="space-y-4">
          {blog.image && (
            <div className="relative overflow-hidden rounded-lg max-w-[500px] h-[280px] bg-muted/10">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-contain hover:opacity-90 transition-opacity duration-200"
                sizes="(max-width: 768px) 100vw, 500px"
                quality={95}
              />
            </div>
          )}
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-200">
              {blog.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {blog.summary}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-200">
              <span>Read article</span>
              {blog.externalUrl ? (
                <ExternalLink className="h-4 w-4" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </div>

            {/* Reading time for desktop */}
            <div className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{blog.readingTime.text}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
}
