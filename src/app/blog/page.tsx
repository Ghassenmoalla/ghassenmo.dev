import { Suspense } from "react";
import { AnimatedBlogList } from "@/components/blog/animated-blog-list";
import { allBlogs } from "contentlayer/generated";
import { generatePageMetadata } from "../seo";

export const metadata = generatePageMetadata({
  title: "Blog",
  description: "Technical writing on DevOps, Cloud, and secure deployments.",
});

export default async function Blog() {
  // Show only the Dependency-Track article
  const blogs = allBlogs.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const dependencyPost = blogs.find(
    (b) => b.slug === "dependency-track-azure" || b.title.includes("Dependency-Track"),
  );

  const posts = dependencyPost ? [dependencyPost] : [];

  return (
    <div className="space-y-10 md:space-y-12">
      <section className="space-y-8 md:space-y-10">
        <div className="space-y-5 md:space-y-6">
          <div className="space-y-2 md:space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Blog
            </h1>
            <p className="text-muted-foreground max-w-3xl text-sm md:text-base">
              Selected technical write-ups and guides.
            </p>
          </div>
        </div>

        <div className="max-w-5xl">
          <Suspense fallback={<div>Loading...</div>}>
            <AnimatedBlogList posts={posts} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
