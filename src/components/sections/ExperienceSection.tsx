import React from 'react';
import { resumeData } from '@/data/resume-data';
import { Section } from '@/components/shared/Section';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import FadeInWhenVisible from '@/components/shared/FadeInWhenVisible';
import { Briefcase, MapPin, CalendarDays, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const { workExperience } = resumeData;

  return (
    <Section id="experience" ariaLabelledBy="experience-title" className="bg-muted">
      <SectionTitle id="experience-title">
        <Briefcase className="inline-block mr-3 h-8 w-8" /> Work Experience
      </SectionTitle>
      <div className="space-y-8 relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block" />

        {workExperience.map((job, index) => (
          <FadeInWhenVisible key={index} delay={index * 0.1} initialY="5">
            <div className="md:flex items-start md:space-x-8 relative">
              {/* Desktop: Alternating sides */}
              <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:text-left md:pl-8'}`}>
                {index % 2 === 0 && (
                   <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-primary">{job.role}</CardTitle>
                      <CardDescription className="text-md text-foreground">{job.company}</CardDescription>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <CalendarDays className="h-4 w-4 mr-2" /> {job.period}
                        <span className="mx-2">|</span>
                        <MapPin className="h-4 w-4 mr-2" /> {job.location}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 list-none text-left">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
              
              {/* Timeline dot */}
              <div className="hidden md:flex absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

              <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:text-left md:pl-8'}`}>
                 <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-primary">{job.role}</CardTitle>
                      <CardDescription className="text-md text-foreground">{job.company}</CardDescription>
                      <div className="flex items-center text-sm text-muted-foreground mt-1 flex-wrap">
                        <CalendarDays className="h-4 w-4 mr-2" /> {job.period}
                        <span className="mx-2 hidden sm:inline">|</span>
                        <MapPin className="h-4 w-4 mr-2 mt-1 sm:mt-0" /> {job.location}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 list-none">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
