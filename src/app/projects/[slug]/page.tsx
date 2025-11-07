import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/app/seo";
import { Mdx } from "@/components/mdx";
import { WEB_APPS } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ZoomableImage } from "@/components/zoomable-image";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = allProjects.find((project) => project.slug === params.slug);
  if (!project) {
    return notFound();
  }
  return generatePageMetadata({
    title: project.title,
    description: project.description,
  });
}

export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const project = allProjects.find((project) => project.slug === slug);
  const webApp = WEB_APPS.find((app) => app.slug === slug);

  if (!project || !webApp) {
    return notFound();
  }

  return (
    <div className="space-y-8">
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>

        <ZoomableImage
            src={webApp.thumbnail}
            alt={`Screenshot of ${project.title}`}
            width={0}
            height={0}
            className="h-full w-full object-cover rounded-lg border"
        />

        <Mdx code={project.body.code} showComments={false} />

        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
            {webApp.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
                </Badge>
            ))}
            </div>
        </div>

        <div className="flex gap-4">
            {webApp.repo && (
            <Button variant="outline" asChild>
                <a
                href={webApp.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                >
                <Github className="h-4 w-4" />
                View Code
                </a>
            </Button>
            )}
            {webApp.demo && (
            <Button variant="outline" asChild>
                <a
                href={webApp.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                >
                <ExternalLink className="h-4 w-4" />
                Live Demo
                </a>
            </Button>
            )}
        </div>
    </div>
  );
}
