import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends PropsWithChildren {
  id: string;
  className?: string;
  ariaLabelledBy?: string; // For accessibility, points to the ID of the SectionTitle
}

export const Section = ({ id, children, className, ariaLabelledBy }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 scroll-mt-20', className)} // scroll-mt-20 to offset fixed header
      aria-labelledby={ariaLabelledBy}
    >
      <div className="container mx-auto"> {/* container handles px */}
        {children}
      </div>
    </section>
  );
};
