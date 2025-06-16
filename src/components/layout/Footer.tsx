import React from 'react';
import { resumeData, socialIcons } from '@/data/resume-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { personalInfo } = resumeData;

  const socialLinks = [
    { href: personalInfo.linkedin, Icon: socialIcons.linkedin, label: 'LinkedIn' },
    { href: personalInfo.github, Icon: socialIcons.github, label: 'GitHub' },
    { href: `mailto:${personalInfo.email}`, Icon: socialIcons.email, label: 'Email' },
    { href: personalInfo.website, Icon: socialIcons.website, label: 'Website' },
  ];

  return (
    <footer className="bg-muted text-muted-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map(({ href, Icon, label }) => (
            <Button key={label} variant="ghost" size="icon" asChild aria-label={label}>
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Thank You For Visiting!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
