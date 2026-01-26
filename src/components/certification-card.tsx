'use client';

import { Certification } from '@/data/certifications';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import {useEffect, useState} from "react";
import { ZoomableImage } from "./zoomable-image";

type Props = {
  certification: Certification;
};

export const CertificationCard = ({ certification }: Props) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

  return (
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-xl h-full flex flex-col">
      <div className="flex flex-col flex-grow">
        {certification.image && (
          <div className="relative cursor-pointer pb-[56.25%]">
            <ZoomableImage
              src={certification.image}
              alt={`${certification.title} certification badge`}
              width={0}
              height={0}
              className="absolute top-0 left-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        )}
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                {certification.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed mt-2">
                {certification.issuer}
              </CardDescription>
            </div>
            <div className="text-2xl font-bold">{certification.logo}</div>
          </div>
        </CardHeader>

        <CardContent className="pb-4 pt-0">
          <div className="text-sm text-muted-foreground">
            <span>{certification.issueDate}</span>
            {certification.expiryDate && (
              <span> · {certification.expiryDate}</span>
            )}
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            Credential ID: {certification.credentialId}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {certification.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>

      <CardFooter className="pt-0 pb-6">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            {isClient && <ExternalLink className="h-4 w-4" />}
            Show credential
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
