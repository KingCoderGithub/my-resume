
import React from 'react';
import { resumeData } from '@/data/resume-data';
import { Section } from '@/components/shared/Section';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWhenVisible from '@/components/shared/FadeInWhenVisible';
import { FileBadge, ExternalLink, CalendarDays, Building } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CertificationsSection: React.FC = () => {
  const { certifications } = resumeData;

  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <Section id="certifications" ariaLabelledBy="certifications-title">
      <SectionTitle id="certifications-title">
        <FileBadge className="inline-block mr-3 h-8 w-8" /> Certifications
      </SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <FadeInWhenVisible key={cert.name + index} delay={index * 0.1} initialY="5">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full overflow-hidden">
              {cert.image && (
                <div className="relative aspect-[3/2] w-full"> {/* Aspect ratio for typical certificate images */}
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    style={{ objectFit: 'contain' }} // Use 'contain' to show the whole certificate
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="bg-muted"
                    data-ai-hint="certificate document"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-primary">{cert.name}</CardTitle>
                <CardDescription className="text-sm">
                  <div className="flex items-center mt-1">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    {cert.issuingOrganization}
                  </div>
                  <div className="flex items-center mt-1">
                    <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
                    {cert.date}
                  </div>
                </CardDescription>
              </CardHeader>
              {cert.description && (
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              )}
              <CardFooter className="flex flex-wrap justify-start gap-2 pt-4">
                {cert.credentialUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Credential
                    </Link>
                  </Button>
                )}
                {cert.credentialId && (
                   <Badge variant="secondary">ID: {cert.credentialId}</Badge>
                )}
              </CardFooter>
            </Card>
          </FadeInWhenVisible>
        ))}
      </div>
    </Section>
  );
};

export default CertificationsSection;
