
import React from 'react';
import { resumeData } from '@/data/resume-data';
import { Section } from '@/components/shared/Section';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWhenVisible from '@/components/shared/FadeInWhenVisible';
import { Lightbulb, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProjectsSection: React.FC = () => {
  const { projects } = resumeData;

  return (
    <Section id="projects" ariaLabelledBy="projects-title" className="bg-muted">
      <SectionTitle id="projects-title">
        <Lightbulb className="inline-block mr-3 h-8 w-8" /> Projects
      </SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <FadeInWhenVisible key={project.name} delay={index * 0.1} initialY="5">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full overflow-hidden">
              {project.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={
                      project.image === "/dark-brain.png" ? "custom project" :
                      project.name.toLowerCase().includes('task management app') ? "task interface" :
                      "project interface"
                    }
                    // Add unoptimized={true} specifically for the local image as a diagnostic
                    unoptimized={project.image === "/dark-brain.png" ? true : undefined}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.name}</CardTitle>
                <CardDescription className="text-sm h-16 overflow-y-auto">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Skill Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-start space-x-2">
                {project.link && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Live
                    </Link>
                  </Button>
                )}
                {project.repo && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Source Code
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </FadeInWhenVisible>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
