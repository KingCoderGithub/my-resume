import React from 'react';
import { resumeData } from '@/data/resume-data';
import { Section } from '@/components/shared/Section';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import FadeInWhenVisible from '@/components/shared/FadeInWhenVisible';
import { Award } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const { skills } = resumeData;

  return (
    <Section id="skills" ariaLabelledBy="skills-title">
      <SectionTitle id="skills-title">
         <Award className="inline-block mr-3 h-8 w-8" /> Skills
      </SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <FadeInWhenVisible key={category.name} delay={index * 0.1} initialY="5">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  {category.Icon && <category.Icon className="mr-3 h-6 w-6 text-primary" />}
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      )}
                    </div>
                    {skill.level ? (
                      <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2" />
                    ) : (
                       <div className="h-2 bg-muted rounded-full w-full"></div> // For skills without level
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
