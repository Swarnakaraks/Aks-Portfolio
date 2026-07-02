

import {
    Code2,
    Sparkles,
    Rocket,
    Palette,
    Server,
    Smartphone,
    Briefcase,
    GraduationCap,
    Award,
} from "lucide-react";

import {
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiFigma,
    SiGit,
    SiPostgresql,
    SiRedux,
    SiFramer,
} from "react-icons/si";

import careerCertificate1 from "../assets/CertificateOfCompletion_Introduction to Career Skills in Software Development.jpg";
import careerCertificate2 from "../assets/Wordpress.png";
import careerCertificate3 from "../assets/Prompt Engineer certificate.jpg";



export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  {
    v: "20+",
    l: "Projects Built",
  },
  {
    v: "1+",
    l: "Years of Learning",
  },
  {
    v: "10+",
    l: "Frontend Interfaces",
  },
  {
    v: "5+",
    l: "Backend APIs",
  },
];

export const cards = [
 {
   icon: Code2,
   title: "Expertise",
   desc: "Specialized in building scalable web apps with modern technologies and best practices.",
 },
 {
   icon: Sparkles,
   title: "Clean Code",
   desc: "Writing maintainable, well-structured code that scales with teams and products.",
 },
 {
   icon: Rocket,
   title: "Performance",
   desc: "Optimizing speed, responsiveness, and UX across every project I build.",
 },
 {
   icon: Palette,
   title: "Design Eye",
   desc: "Blending engineering precision with strong visual hierarchy and aesthetics.",
 },
];

export const stats2 = [
 { v: "100%", l: "Client Satisfaction" },
 { v: "24/7", l: "Support Availability" },
 { v: "Fast", l: "Delivery Time" },
];

  export const certs = [
    {
      title: "Introduction to Career Skills in Software Development",
      issuer: "LinkedIn",
      issued: "Dec 2025",
      credentialId: "6e8b65355d831e235dbb09b4ca420d84acd29d25ba7658e32919101efdb15990",
      skills: ["Software Development", "Problem Solving", "Critical Thinking", "Communication", "Team Collaboration", "Career Development"],
      link: careerCertificate1,
    },
    {
      title: "WordPress E-commerce Website Development Workshop",
      issuer: "Clove IT",
      issued: "Aug 2025",
      credentialId: "WP-ECOM-2025-015",
      skills: [ "WordPress", "E-commerce Development", "Plugin Management", "Payment Gateway Integration", "Product Management", "Shopping Cart Configuration", "Order Management", "Responsive Web Design",],
      link: careerCertificate2,
    },
    {
      title: "Introduction to Prompt Engineering",
      issuer: "Microsoft",
      issued: "Dec 2025",
      credentialId: "9529287",
      skills: ["Prompt Engineering", "Generative AI", "AI-Assisted Development", "Prompt Design", "AI Content Generation", "Context Engineering", "Prompt Optimization", "AI Productivity", "Critical Thinking", "Problem Solving",
   ],
      link: careerCertificate3,
    },
  ];

export const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Pixel-perfect, accessible React & Next.js interfaces with butter-smooth interactions.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    desc: "Robust Node.js, Express and MongoDB APIs designed to scale with your product.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Design systems and product flows that feel obvious — built in Figma, shipped in code.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Mobile-first layouts that work flawlessly across every device and screen size.",
  },
  {
    icon: Sparkles,
    title: "Graphic Design",
    desc: "Brand systems, logos and visual identity that capture your product's personality.",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "Lighthouse-perfect apps with code splitting, lazy loading and Core Web Vitals tuning.",
  },
];

export const skills = [
  { icon: SiReact, name: "React", level: 95 },
  { icon: SiNextdotjs, name: "Next.js", level: 92 },
  { icon: SiTypescript, name: "TypeScript", level: 90 },
  { icon: SiNodedotjs, name: "Node.js", level: 88 },
  { icon: SiExpress, name: "Express", level: 86 },
  { icon: SiMongodb, name: "MongoDB", level: 85 },
  { icon: SiPostgresql, name: "Postgres", level: 78 },
  { icon: SiTailwindcss, name: "Tailwind CSS", level: 96 },
  { icon: SiRedux, name: "Redux", level: 84 },
  { icon: SiFramer, name: "Framer Motion", level: 88 },
  { icon: SiFigma, name: "Figma", level: 90 },
  { icon: SiGit, name: "Git", level: 92 },
];

export const projects = [
  {
    title: "HireTrack — Job Application Tracker",
    tag: "Featured Project",
    desc: "A full-stack job tracking system to manage applications, interview stages, and reminders in one place. Helps users organize their job search efficiently.",
    tech: ["React", "Node", "MongoDB", "Express"],
    metric: "Real-world productivity tool",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "SpendWise — Expense Tracker",
    tag: "Finance App",
    desc: "Built a modern finance management system that enables users to monitor expenses, analyze spending habits, set budget goals, and visualize financial data through dynamic charts and detailed reports.",
    tech: ["React", "Node", "MongoDB", "Chart.js"],
    metric: "Budget management system",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "NoteFlow — Smart Notes App",
    tag: "Productivity",
    desc: "A minimal note-taking app with folders, tags, search, and auto-save functionality for better productivity and organization.",
    tech: ["React", "Node", "MongoDB"],
    metric: "Fast CRUD system",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200"
  },
  {
    title: "ShopLite — Mini E-Commerce",
    tag: "Full Stack",
    desc: "A simple e-commerce application with product listing, cart system, and checkout flow using Stripe integration.",
    tech: ["React", "Node", "MongoDB", "Stripe"],
    metric: "Shopping cart system",
    image: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

];
export const timeline = [
  {
    year: "2026 — Present",
    title: "Full-Stack MERN Developer",
    org: "Personal & Real-World Projects",
    icon: Briefcase,
    desc: "Building full-stack applications with React, Node.js, Express, and MongoDB while creating real-world projects and continuously improving software development skills.",
  },

   {
    year: "2024 — Present",
    title: "Web Development & MERN Specialization",
    org: "Projects, Practice & Continuous Learning",
    icon: Code2,
    desc: "Mastered modern web development concepts including React, Tailwind CSS, Node.js, Express, MongoDB, API integration, authentication, state management, and deployment through hands-on projects.",
  },

  {
    year: "2023 — Present",
    title: "Bachelor of Science in CSIT (BSc CSIT)",
    org: "Undergraduate Studies",
    icon: GraduationCap,
    desc: "Pursuing a degree in Computer Science and Information Technology with a focus on programming, databases, networking, and software engineering.",
  },
  {
    year: "2021 — 2023",
    title: "+2 Science",
    org: "Higher Secondary Education",
    icon: GraduationCap,
    desc: "Completed higher secondary studies in Science, strengthening analytical thinking, mathematics, and problem-solving abilities.",
  },
  {
    year: "2021",
    title: "SEE / SLC Completion",
    org: "Secondary Education",
    icon: Award,
    desc: "Successfully completed secondary education and developed a growing interest in computers, technology, and programming.",
  },
];

export const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer • Kathmandu",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    quote:
      "Working with Abhisek was smooth and efficient. He delivered a clean, responsive web app with great attention to UI details.",
  },
  {
    name: "Sujan Thapa",
    role: "Full-Stack Developer • Lalitpur",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=300&q=80",
    quote:
      "Very professional work. The system was fast, scalable, and perfectly aligned with our requirements.",
  },
  {
    name: "Rohan Adhikari",
    role: "UI/UX Designer • Pokhara",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
    quote:
      "He transformed my design into a fully responsive UI with smooth animations. Great attention to detail.",
  },

  {
    name: "Aakriti Sah",
    role: "Product Designer • Kathmandu",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    quote:
      "The implementation of design into code was very accurate. Smooth animations and clean UI structure.",
  },
  {
    name: "Neha Joshi",
    role: "Startup Founder • Bhaktapur",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    quote:
      "He quickly understood the requirements and built a functional full-stack solution. Great communication and consistency.",
  },
  {
    name: "Sita Karki",
    role: "Software Engineer • Chitwan",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
    quote:
      "Amazing developer! Delivered a clean, modern, and scalable application with excellent UI/UX.",
  },
];