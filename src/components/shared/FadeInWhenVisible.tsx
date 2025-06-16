"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in seconds
  duration?: number; // in seconds
  initialY?: '5' | '10' | '0' | '-5' | '-10'; // Corresponds to Tailwind translate-y classes (e.g., translate-y-5)
  threshold?: number;
  once?: boolean;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  initialY = '5',
  threshold = 0.1,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  let translateYClass = '';
  if (initialY !== '0') {
    translateYClass = initialY.startsWith('-') ? `-translate-y-${initialY.substring(1)}` : `translate-y-${initialY}`;
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
           setIsVisible(false);
        }
      },
      {
        rootMargin: '0px 0px -50px 0px', // Trigger a bit before it's fully in view
        threshold: threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold, initialY]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${translateYClass}`,
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInWhenVisible;
