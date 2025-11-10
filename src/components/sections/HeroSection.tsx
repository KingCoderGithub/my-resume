import React from 'react';
import { resumeData } from '@/data/resume-data';
import { Button } from '@/components/ui/button';
import SmoothScrollLink from '@/components/layout/SmoothScrollLink';
import FadeInWhenVisible from '@/components/shared/FadeInWhenVisible';
import Image from 'next/image';
import { Download, ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { personalInfo } = resumeData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-10">
        {/* Subtle background pattern or image can go here */}
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <FadeInWhenVisible delay={0.1} initialY="5">
          <div className="mb-6">
            <Image 
              src="/profile.png"
              alt={personalInfo.name}
              width={400}
              height={400}
              className="rounded-full mx-auto shadow-xl border-4 border-primary/50"
              data-ai-hint="profile photo"
              priority
            />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2} initialY="5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-primary mb-4">
            {personalInfo.name}
          </h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3} initialY="5">
          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
            {personalInfo.title}
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4} initialY="5">
          <p className="text-md md:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            {personalInfo.shortIntro}
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.5} initialY="5" className="space-x-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <SmoothScrollLink href="#contact">
              Get In Touch
            </SmoothScrollLink>
          </Button>
          <Button size="lg" variant="outline" asChild>
          <a href="/my-resume/karan_shah_resume.pdf" download="Karan_Shah_Resume.pdf" aria-label="Download Resume">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </a>
          </Button>
        </FadeInWhenVisible>
      </div>
      <FadeInWhenVisible delay={0.8} initialY="0" className="absolute bottom-10 left-1/2 -translate-x-1/2">
         <SmoothScrollLink href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
          </SmoothScrollLink>
      </FadeInWhenVisible>
    </section>
  );
};

export default HeroSection;
