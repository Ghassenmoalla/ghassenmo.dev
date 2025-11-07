import { generatePageMetadata } from "../seo";
import { AnimatedProjectsList } from "../../components/animated-projects-list";
import React from "react";
import { WEB_APPS } from "@/data/projects";
import { Separator } from "@/components/ui/separator";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "Selected DevOps and Cloud projects showcasing Infrastructure as Code, CI/CD pipelines, automation, and platform engineering work.",
});

export default function Projects() {
  return (
    <div className="space-y-10">
      <div className="space-y-16">
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            DevOps & Cloud Projects
          </h2>
          <AnimatedProjectsList projects={WEB_APPS} type="web-apps" />
        </section>
      </div>
    </div>
  );
}
