import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import FadeInWhenVisible from './FadeInWhenVisible';

interface SectionTitleProps extends PropsWithChildren {
  id?: string; // For aria-labelledby in Section component
  className?: string;
}

export const SectionTitle = ({ id, children, className }: SectionTitleProps) => {
  return (
    <FadeInWhenVisible initialY="5">
      <h2
        id={id}
        className={cn(
          'text-3xl md:text-4xl font-headline font-bold text-primary mb-10 md:mb-16 text-center',
          className
        )}
      >
        {children}
      </h2>
    </FadeInWhenVisible>
  );
};
