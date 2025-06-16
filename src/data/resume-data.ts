import { Card } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Smartphone, Globe, Briefcase, Award, Lightbulb, Cpu, BrainCircuit, Users, FileBadge} from 'lucide-react';

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  location: string;
  bio: string;
  shortIntro: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface SkillCategory {
  name: string;
  Icon?: LucideIcon;
  skills: { name: string; level?: number /* 0-100 for progress bar */ }[];
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
  image?: string; // URL to project image or placeholder
}

export interface Certification {
  name: string;
  issuingOrganization: string;
  date: string; // e.g., "Issued: Jan 2023"
  credentialId?: string;
  credentialUrl?: string;
  image?: string; // Path to certificate image, e.g., /certifications/cert1.png or placeholder
  description?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Karan Shah",
    title: "High School Student",
    email: "karanshahai858@gmail.com",
    phone: "",
    linkedin: "https://www.linkedin.com/in/karan-shah-633819312/",
    github: "https://github.com/KingCoderGithub",
    website: "",
    location: "Doha, Qatar",
    shortIntro: "Determined lifetime learner and budding tech bilionare passionate about leveraging cutting-edge technologies to solve real-world problems.",
    bio: "I am an IB Diploma student in Compass International School(Themaid), with a fire in my heart... To do something big... To achieve something in life. I thrive collaborative environments and am always eager to learn and adapt to new challenges. In my free time, I enjoy exploring new advancements in technology in general, especially in AI and machine learning.",
  },
  workExperience: [
    {
      role: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "Jan 2020 – Present",
      location: "San Francisco, CA",
      responsibilities: [
        "Led a team of 5 developers in designing and implementing a new microservices architecture, improving system scalability by 40%.",
        "Developed and maintained critical features for a SaaS platform used by over 100,000 users, utilizing React, Node.js, and PostgreSQL.",
        "Integrated third-party APIs for payment processing and analytics, enhancing platform functionality.",
        "Mentored junior engineers, fostering a culture of continuous learning and growth within the team.",
      ],
    },
    {
      role: "Software Developer",
      company: "Innovatech Ltd.",
      period: "Jun 2016 – Dec 2019",
      location: "Austin, TX",
      responsibilities: [
        "Contributed to the development of a customer relationship management (CRM) system using Angular and Java Spring Boot.",
        "Collaborated with UX/UI designers to create intuitive and responsive user interfaces.",
        "Participated in agile development cycles, including sprint planning, daily stand-ups, and retrospectives.",
        "Wrote unit and integration tests, ensuring code quality and reliability.",
      ],
    },
  ],
  skills: [
    {
      name: "Programming Languages",
      Icon: Cpu,
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
      ],
    },
    {
      name: "Frameworks & Libraries",
      Icon: Briefcase,
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "Node.js / Express", level: 90 },
        { name: "Angular", level: 70 },
        { name: "Spring Boot", level: 70 },
      ],
    },
    {
      name: "Databases & Cloud",
      Icon: Globe,
      skills: [
        { name: "PostgreSQL, MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "AWS (EC2, S3, Lambda)", level: 75 },
        { name: "Firebase", level: 80 },
      ],
    },
     {
      name: "Developer Tools",
      Icon: Award,
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 60 },
        { name: "Jira", level: 90 },
      ],
    },
    {
      name: "Soft Skills",
      Icon: Users,
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Leadership", level: 90 },
        { name: "Communication", level: 90 },
        { name: "Agile Methodologies", level: 85 },
      ],
    }
  ],
  projects: [
    {
      name: "Did You Know? (Youtube Channel)",
      description: "We bust myths and share mind-blowing, verified facts from around the world—fast, fun, and educational.",
      techStack: ["Content Creation & Digital Storytelling", "Audience Engagement & Community Building", "Video Editing & Visual Communication", "Project Management & Consistency"],
      link: "https://www.youtube.com/channel/UC-cjLe__ZBTGYpXZfPnY29A",
      image: "https://placehold.co/600x400.png",
    },
    {
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop interface, and notification system.",
      techStack: ["React", "Redux", "Node.js", "Socket.IO", "MongoDB"],
      link: "https://example-taskapp.com",
      repo: "https://github.com/alexjohnsondev/task-management-app",
      image: "https://placehold.co/600x400.png?text=Hello+World",
    },
    {
      name: "Personal Portfolio Website (This one!)",
      description: "A dynamic and AI-enhanced personal resume website built with Next.js and Tailwind CSS.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit AI"],
      repo: "",
      image: "https://placehold.co/600x400.png?text=Persona+Pro",
    }
  ],

  certifications: [
    {
      name: "Next.js Certified Developer",
      issuingOrganization: "Vercel",
      date: "Issued: March 2023",
      credentialId: "NCD-12345",
      credentialUrl: "https://vercel.com/certification/alexjohnson/NCD-12345",
      image: "https://placehold.co/300x200.png",
      description: "Validated expertise in developing high-performance web applications with Next.js.",
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuingOrganization: "Amazon Web Services",
      date: "Issued: July 2022",
      credentialId: "AWS-SAA-67890",
      credentialUrl: "https://www.credly.com/badges/your-aws-badge-id",
      image: "https://placehold.co/300x200.png",
      description: "Demonstrated knowledge of architecting and deploying secure and robust applications on AWS technologies.",
    },
    {
      name: "Professional Scrum Master I (PSM I)",
      issuingOrganization: "Scrum.org",
      date: "Issued: December 2021",
      credentialUrl: "https://www.scrum.org/user/your-profile-id",
      image: "https://placehold.co/300x200.png",
      description: "Proficiency in Scrum principles, practices, and theory, and the role of the Scrum Master.",
    },
    {
      name: "Placeholder Certificate One",
      issuingOrganization: "Tech Certifiers Inc.",
      date: "Issued: January 2024",
      credentialId: "PLC-001",
      credentialUrl: "https://example.com/cert/plc001",
      image: "https://placehold.co/300x200.png",
      description: "This is a placeholder for an additional certification. Update with real details.",
    },
    {
      name: "Placeholder Certificate Two",
      issuingOrganization: "Global Certs Co.",
      date: "Issued: February 2024",
      credentialId: "PLC-002",
      credentialUrl: "https://example.com/cert/plc002",
      image: "https://placehold.co/300x200.png",
      description: "Another placeholder for showcasing skills and knowledge in a specific area.",
    },
    {
      name: "Placeholder Certificate Three",
      issuingOrganization: "Online Learning Hub",
      date: "Issued: March 2024",
      credentialId: "PLC-003",
      credentialUrl: "https://example.com/cert/plc003",
      image: "https://placehold.co/300x200.png",
      description: "Fill this in with your certification details to expand your credentials section.",
    }
  ],
};


export const socialIcons = {
  email: Mail,
  phone: Smartphone,
  linkedin: Linkedin,
  github: Github,
  website: Globe,
};
