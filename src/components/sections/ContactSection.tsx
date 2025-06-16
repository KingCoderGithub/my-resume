"use client";

import React, { useState } from 'react';
import { Section } from '@/components/shared/Section';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import FadeInWhenVisible from '@/components/shared/FadeInWhenVisible';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { Label } from '@/components/ui/label';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form data submitted:", formData); // Actual email integration would go here
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Section id="contact" ariaLabelledBy="contact-title" className="bg-muted">
      <SectionTitle id="contact-title">
        <Mail className="inline-block mr-3 h-8 w-8" /> Get In Touch
      </SectionTitle>
      <FadeInWhenVisible initialY="5" className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-xl">
          <div>
            <Label htmlFor="name" className="flex items-center mb-1">
              <User className="mr-2 h-4 w-4 text-primary" /> Your Name
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div>
            <Label htmlFor="email" className="flex items-center mb-1">
              <Mail className="mr-2 h-4 w-4 text-primary" /> Your Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div>
            <Label htmlFor="message" className="flex items-center mb-1">
              <MessageSquare className="mr-2 h-4 w-4 text-primary" /> Your Message
            </Label>
            <Textarea
              name="message"
              id="message"
              placeholder="Hi Alex, I'd like to discuss..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              aria-required="true"
              className="resize-none"
            />
          </div>
          <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Send className="mr-2 h-4 w-4 animate-pulse" /> Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send Message
              </>
            )}
          </Button>
        </form>
      </FadeInWhenVisible>
    </Section>
  );
};

export default ContactSection;
