import React from 'react';
import { resumeData, socialIcons } from '@/data/resume-data';
import { Section } from '@/components/shared/Section';
import { SectionTitle } from '@/components/shared/SectionTitle';
import FadeInWhenVisible from '@/components/shared/FadeInWhenVisible';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { personalInfo } = resumeData;

  const socialLinks = [
    { href: personalInfo.linkedin, Icon: socialIcons.linkedin, label: 'LinkedIn' },
    { href: personalInfo.github, Icon: socialIcons.github, label: 'GitHub' },
    { href: personalInfo.website, Icon: socialIcons.website, label: 'Website' },
    { href: `mailto:${personalInfo.email}`, Icon: socialIcons.email, label: 'Email' },
  ];

  return (
    <Section id="about" ariaLabelledBy="about-title">
      <SectionTitle id="about-title">
        <User className="inline-block mr-3 h-8 w-8" /> About Me
      </SectionTitle>
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <FadeInWhenVisible className="md:col-span-1" initialY="5">
          <Image
            src="/eyes.png"
            alt={personalInfo.name}
            width={800}
            height={800}
            className="rounded-lg shadow-xl aspect-square object-cover"
            data-ai-hint="professional portrait"
          />
        </FadeInWhenVisible>
        <FadeInWhenVisible className="md:col-span-2" initialY="5" delay={0.2}>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            {personalInfo.bio}
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ href, Icon, label }) => (
              <Button key={label} variant="outline" asChild>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="mr-2 h-4 w-4" />
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </Section>
  );
};

export default AboutSection;
