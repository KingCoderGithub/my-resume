
"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import SmoothScrollLink from './SmoothScrollLink';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useIsMobile } from '../../hooks/use-mobile.tsx';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const commonLinkClasses = "px-4 py-2 rounded-md text-sm font-medium";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <Code2 size={28} />
          <span>Karan's Resume</span>
        </Link>

        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center mb-6">
                   <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={() => setIsSheetOpen(false)}>
                      <Code2 size={24} />
                      <span>Karan's Resume</span>
                    </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>
                {navItems.map((item) => (
                  <SmoothScrollLink
                    key={item.href}
                    href={item.href}
                    className={`${commonLinkClasses} block text-lg hover:bg-muted`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.label}
                  </SmoothScrollLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <SmoothScrollLink
                key={item.href}
                href={item.href}
                className={commonLinkClasses}
              >
                {item.label}
              </SmoothScrollLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
