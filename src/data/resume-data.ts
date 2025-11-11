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
      role: "Machine Learning Intern",
      company: "Amnex Infotechnologies",
      period: "July 2024 – August 2024",
      location: "India (In-Person)",
      responsibilities: [
        "Developed and deployed a stroke risk prediction web app using FastAPI (backend) and Streamlit (frontend), achieving approximately 80% accuracy.",
        "Engineered and tuned an XGBoost-based rare-event model with SMOTE balancing and SHAP explainability to improve recall and interpretability.",
        "Built REST API endpoints for real-time predictions and integrated them with a responsive Streamlit frontend for public health awareness.",
        "Collaborated with a data science team on GIS visualization mini-projects using QGIS and Python for spatial data analysis."
      ]
    },
    {
      role: "Eco-Schools Chairman (Green Flag Program)",
      company: "School Environmental Council",
      period: "Aug 2023 – Present",
      location: "Doha, Qatar",
      responsibilities: [
        "Led sustainability initiatives across the school including electricity, water, and waste audits as part of the Eco-Schools Green Flag accreditation.",
        "Organized student campaigns promoting responsible energy use, paperless lessons, and upcycling drives during Sustainability Day.",
        "Designed Canva presentations, Microsoft Forms surveys, and recruitment campaigns to expand committee participation among students.",
        "Coordinated with staff and administration to ensure measurable environmental improvements across classrooms and corridors."
      ]
    },
    {
      role: "Team Leader",
      company: "University of Cambridge Judge Business School – Personal Development Program",
      period: "June 2023 – July 2023",
      location: "Virtual Program (UK)",
      responsibilities: [
        "Led a cross-functional student team to design a UN Sustainable Development Goal-aligned product for a mock business pitch.",
        "Managed research, branding, and product strategy, ensuring alignment with SDG themes such as sustainability and education.",
        "Presented the final pitch to CJBS advisors, receiving commendation for communication, leadership, and problem-solving."
      ]
    },
    {
      role: "Prefect & House Captain",
      company: "West House – Compass International School",
      period: "2023 – 2025",
      location: "Doha, Qatar",
      responsibilities: [
        "Supervised student teams and organized inter-house competitions, leading the house to a second-place finish on Sports Day.",
        "Acted as a liaison between students and teachers, promoting inclusivity and teamwork across grade levels.",
        "Guided younger students academically and socially, fostering community and school spirit."
      ]
    }
  ],

  skills: [
    {
      name: "Programming Languages",
      Icon: Cpu,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 70 },
        { name: "HTML & CSS", level: 85 }
      ]
    },
    {
      name: "Frameworks & Libraries",
      Icon: Briefcase,
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Streamlit", level: 90 },
        { name: "React / Next.js", level: 80 },
        { name: "XGBoost, Scikit-learn, Optuna", level: 85 }
      ]
    },
    {
      name: "Data Science & AI",
      Icon: Globe,
      skills: [
        { name: "Machine Learning & Model Tuning", level: 90 },
        { name: "Data Visualization (Matplotlib, Seaborn, SHAP)", level: 85 },
        { name: "Pandas & NumPy", level: 90 },
        { name: "TensorFlow / Keras (Basic)", level: 70 }
      ]
    },
    {
      name: "Tools & Deployment",
      Icon: Award,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Render & Streamlit Cloud", level: 90 },
        { name: "Docker (Basic)", level: 70 },
        { name: "VS Code & Jupyter", level: 95 }
      ]
    },
    {
      name: "Other Technical Skills",
      Icon: Globe,
      skills: [
        { name: "GIS (QGIS, Spatial Data Analysis)", level: 80 },
        { name: "API Design & Integration", level: 85 },
        { name: "Feature Engineering", level: 90 },
        { name: "Model Explainability (SHAP, Logic Overrides)", level: 90 }
      ]
    },
    {
      name: "Soft Skills",
      Icon: Users,
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Leadership", level: 90 },
        { name: "Communication", level: 90 },
        { name: "Project Management", level: 95 }
      ]
    }
  ],

  projects: [
    {
      name: "Did You Know? (YouTube Channel)",
      description: "An educational short-form content channel debunking myths and sharing mind-blowing verified science and AI facts. Over 75,000 total views, 100+ subscribers, and 285 watch hours.",
      techStack: [
        "Content Creation & Digital Storytelling",
        "YouTube Analytics & Audience Engagement",
        "Video Editing (InVideo, Canva)",
        "Branding & Visual Communication"
      ],
      link: "https://www.youtube.com/channel/UC-cjLe__ZBTGYpXZfPnY29A",
      image: "/dark-brain.png"
    },
    {
      name: "Stroke Risk Prediction App",
      description: "A full-stack machine learning web app predicting stroke risk using demographic and health data. Built during a 20-day internship at a 300-person tech company, achieving ~80% accuracy.",
      techStack: [
        "FastAPI (Backend)",
        "Streamlit (Frontend)",
        "XGBoost + SHAP (Modeling & Explainability)",
        "Python, Pandas, Optuna, Scikit-learn"
      ],
      repo: "https://github.com/KingCoderGithub/stroke_detection_ml",
      image: "https://placehold.co/600x400.png?text=Stroke+Prediction+App"
    },
    {
      name: "Fruit Freshness Detection App",
      description: "An AI-based image classification model that identifies whether fruits are fresh, ripe, or rotten using computer vision techniques.",
      techStack: [
        "TensorFlow",
        "Keras",
        "OpenCV",
        "Python"
      ],
      image: "https://placehold.co/600x400.png?text=Fruit+Freshness+Detector"
    },
    {
      name: "GIS Applications Internship Projects",
      description: "Contributed to geospatial mapping and visualization mini-projects during internship, focusing on data integration and spatial analysis.",
      techStack: [
        "QGIS",
        "Python",
        "Data Visualization",
        "Geospatial Analysis"
      ],
      image: "https://placehold.co/600x400.png?text=GIS+Mini+Projects"
    },
    {
      name: "Interactive Resume Website",
      description: "A sleek, interactive personal portfolio showcasing achievements, certifications, and projects in a creative, dynamic format.",
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "TypeScript"
      ],
      repo: "https://github.com/KingCoderGithub/my-resume",
      image: "https://placehold.co/600x400.png?text=Interactive+Resume"
    }
  ],

  certifications: [
    {
      name: "Data Science Specialization",
      issuingOrganization: "Coursera",
      date: "Issued: 2024",
      credentialUrl: "https://www.coursera.org/professional-certificates/ibm-data-science",
      image: "https://placehold.co/300x200.png?text=Data+Science+Specialization",
      description: "12-course specialization covering data analysis, visualization, and machine learning, completed over 6 months."
    },
    {
      name: "Cybersecurity Specialization",
      issuingOrganization: "Coursera",
      date: "Issued: 2024",
      credentialUrl: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      image: "https://placehold.co/300x200.png?text=Cybersecurity+Specialization",
      description: "8-course specialization demonstrating practical understanding of network defense, cryptography, and digital forensics."
    },
    {
      name: "Program Management Certification",
      issuingOrganization: "Coursera",
      date: "Issued: 2024",
      credentialUrl: "https://www.coursera.org/professional-certificates/google-project-management",
      image: "https://placehold.co/300x200.png?text=Program+Management+Certification",
      description: "3-month professional certification emphasizing agile methodologies, stakeholder communication, and strategic planning."
    },
    {
      name: "ISRO Online Training Program Certificate",
      issuingOrganization: "Indian Space Research Organisation (ISRO)",
      date: "Issued: 2024",
      image: "https://placehold.co/300x200.png?text=ISRO+Online+Training+Program+Certificate",
      description: "Recognized completion of ISRO’s national training program on space science and remote sensing applications."
    },
    {
      name: "Deloitte Problem Solving Certificate",
      issuingOrganization: "Deloitte",
      date: "Issued: 2023",
      image: "https://placehold.co/300x200.png?text=Deloitte+Problem+Solving+Certificate",
      description: "Awarded for completing Deloitte’s problem-solving certification program focused on structured thinking and analytical reasoning."
    },
    {
      name: "Certified Android & iOS App Developer",
      issuingOrganization: "WhiteHat Jr",
      date: "Issued: 2023",
      image: "https://placehold.co/300x200.png?text=Certified+Android+&+iOS+App+Developer",
      description: "Certified for developing functional Android and iOS applications through 144+ hours of live instruction and projects."
    },
    {
      name: "Certified Game Developer",
      issuingOrganization: "WhiteHat Jr",
      date: "Issued: 2023",
      image: "https://placehold.co/300x200.png?text=Certified+Game+Developer",
      description: "Completed 144+ hours of live sessions and hands-on assignments creating interactive games with physics-based mechanics."
    }
  ]
};


export const socialIcons = {
  email: Mail,
  phone: Smartphone,
  linkedin: Linkedin,
  github: Github,
  website: Globe,
};
