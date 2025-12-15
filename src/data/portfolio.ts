// ============================================================
// PORTFOLIO DATA - Edit this file to personalize your portfolio
// ============================================================

// Personal Information
export const personalInfo = {
  name: "Patrick Mwanza",
  title: "Developer",
  tagline: "Building scalable, user-focused web applications with clean code and modern technologies.",
  location: "Nairobi, Kenya",
  workPreference: "Remote / On-site",
  education: "Computer Science Background",
  openToWork: true,
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  resumeUrl: "/resume.pdf",
};

// Contact Information
export const contactInfo = {
  email: "munyaopatrick002@gmail.com",
  phone: "+254798109651",
  github: "https://github.com/Patrick-mwanza",
  linkedin: "https://www.linkedin.com/in/patrick-mwanza",
  whatsapp: "254798109651",
  formspreeId: "xyzragad",
};

// About Me Content
export const aboutMe = {
  paragraph1: `I'm Patrick Mwanza, a passionate developer with expertise in building robust, scalable web applications. My journey in tech started with a deep curiosity about how software can solve real-world problems, and that curiosity has evolved into a dedicated career crafting digital solutions that make a difference.`,
  
  paragraph2: `With strong proficiency in frontend technologies like React and Next.js, as well as backend development with Node.js and databases, I bring a full-stack perspective to every project. I believe in writing clean, maintainable code and following best practices that ensure long-term project success.`,
  
  paragraph3: `I'm actively seeking opportunities to collaborate on innovative projects, contribute to dynamic development teams, and continue growing as a software professional. Whether it's building responsive user interfaces, architecting robust APIs, or optimizing application performance, I'm committed to delivering excellence in every line of code.`,
  
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Client Satisfaction" },
  ],
};

// Skills - Developer focused
export const skills = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  backend: {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "REST APIs", level: 85 },
      { name: "Authentication", level: 75 },
    ],
  },
  databases: {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "SQLite", level: 72 },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 85 },
      { name: "Docker", level: 65 },
    ],
  },
};

// Projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment integration, and responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    github: "https://github.com/Patrick-mwanza",
    demo: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio with dark/light mode, animations, and contact form integration.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/Patrick-mwanza",
    demo: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates, drag-and-drop, and team features.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    category: "Full Stack",
    github: "https://github.com/Patrick-mwanza",
    demo: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather app with location detection, forecasts, and beautiful UI animations.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    tags: ["React", "OpenWeather API", "CSS3"],
    category: "Frontend",
    github: "https://github.com/Patrick-mwanza",
    demo: "#",
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Full-featured blog with markdown support, categories, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    tags: ["Next.js", "MDX", "Tailwind"],
    category: "Full Stack",
    github: "https://github.com/Patrick-mwanza",
    demo: "#",
  },
  {
    id: 6,
    title: "Landing Page Template",
    description: "Conversion-optimized landing page with smooth animations and mobile-first design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/Patrick-mwanza",
    demo: "#",
  },
];

// Certifications
export const certifications = [
  {
    id: 1,
    title: "React Developer Certification",
    issuer: "Meta (Facebook)",
    year: "2024",
    category: "Software Development",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    year: "2023",
    category: "Software Development",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    category: "Software Development",
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "Git & GitHub Fundamentals",
    issuer: "Coursera",
    year: "2023",
    category: "Professional Skills",
    credentialUrl: "#",
  },
  {
    id: 5,
    title: "Node.js Development",
    issuer: "Udemy",
    year: "2024",
    category: "Software Development",
    credentialUrl: "#",
  },
];

// Experience
export const experience = [
  {
    type: "work",
    title: "Web Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Building custom websites and web applications for clients. Specializing in React and modern frontend technologies.",
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    type: "education",
    title: "BSc Computer Science",
    company: "University",
    period: "2020 - 2024",
    description: "Studied software engineering fundamentals, algorithms, data structures, and web development.",
    skills: ["Programming", "Algorithms", "Web Development"],
  },
];

// Services
export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building modern, responsive websites and web applications using React, Next.js, and other cutting-edge technologies.",
    icon: "code",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Creating beautiful, responsive user interfaces with modern frameworks and design best practices.",
    icon: "layout",
  },
  {
    id: 3,
    title: "Portfolio Websites",
    description: "Creating stunning, professional portfolio websites that showcase your work and attract opportunities.",
    icon: "layout",
  },
  {
    id: 4,
    title: "Consulting",
    description: "Technical consulting for startups and businesses looking to improve their digital presence.",
    icon: "users",
  },
];
