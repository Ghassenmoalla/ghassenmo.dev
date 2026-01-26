import { generatePageMetadata } from "../seo";
import { AnimatedCertificationsList } from "../../components/animated-certifications-list";
import React from "react";
import { CERTIFICATIONS } from "@/data/certifications";

export const metadata = generatePageMetadata({
  title: "Certifications",
  description:
    "Professional certifications and credentials in cloud computing, DevOps, and platform engineering.",
});

export default function Certifications() {
  return (
    <div className="space-y-10">
      <div className="space-y-16">
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Certifications & Credentials
          </h2>
          <AnimatedCertificationsList certifications={CERTIFICATIONS} />
        </section>
      </div>
    </div>
  );
}
