import { WebApp } from "@/data/projects";
import { ZoomableImage } from "./zoomable-image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type Props = {
  project: WebApp;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={`/projects/${project.slug}`} className="h-full block">
      <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl h-full flex flex-col">
        <div className="relative cursor-pointer pb-[56.25%]">
          <ZoomableImage
            src={project.thumbnail}
            alt={`Screenshot of ${project.title}`}
            width={0}
            height={0}
            className="absolute top-0 left-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-4 pt-0 flex-1">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0 pb-6">
          <div className="flex gap-3 w-full">
            {project.repo && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
