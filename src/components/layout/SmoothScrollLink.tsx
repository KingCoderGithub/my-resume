"use client";

import Link from 'next/link';
import type React from 'react';
import { cn } from '@/lib/utils';

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // For closing mobile menu
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ href, children, className, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={cn("text-foreground hover:text-primary transition-colors duration-300", className)}>
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
