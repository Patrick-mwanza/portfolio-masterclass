// ==========================================
// PORTFOLIO DATA - EDIT YOUR INFORMATION HERE
// ==========================================

// ====================
// PERSONAL INFORMATION
// ====================
export const personalInfo = {
  // Basic Info
  name: "Your Name",                          // ← REPLACE: Your full name
  title: "Full-Stack Developer & Data Analyst", // ← REPLACE: Your professional title
  tagline: "Crafting beautiful, performant web experiences and turning data into actionable insights.",
  
  // Location & Status
  location: "Your City, Country",             // ← REPLACE: Your location
  openToWork: true,
  workPreference: "Open to Remote Work",      // ← REPLACE: "Remote", "Hybrid", "On-site"
  
  // Education
  education: "BSc Computer Science",          // ← REPLACE: Your degree
  
  // Profile Image - Replace with your photo URL or local path
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
  
  // Resume/CV - Place your resume in the public folder
  resumeUrl: "/resume.pdf",                   // ← REPLACE: Path to your resume
};

// ====================
// CONTACT INFORMATION
// ====================
export const contactInfo = {
  email: "your.email@example.com",            // ← REPLACE: Your email
  phone: "+1 (555) 123-4567",                 // ← REPLACE: Your phone (optional)
  whatsapp: "",                               // ← REPLACE: WhatsApp number (optional)
  
  // Social Links - Replace with your actual profiles
  github: "https://github.com/yourusername",  // ← REPLACE
  linkedin: "https://linkedin.com/in/yourprofile", // ← REPLACE
  
  // Formspree Form ID - Get yours at https://formspree.io
  formspreeId: "YOUR_FORM_ID",                // ← REPLACE: Your Formspree form ID
};

// ====================
// ABOUT ME - EXTENDED
// ====================
export const aboutMe = {
  // Paragraph 1: Professional background and current focus
  paragraph1: `I'm a dedicated full-stack developer and data analyst with a passion for creating elegant 
  solutions to complex problems. With expertise in modern web technologies and data analytics, I bridge 
  the gap between beautiful user interfaces and meaningful data-driven insights. My approach combines 
  technical excellence with creative problem-solving to deliver solutions that make a real impact.`,
  
  // Paragraph 2: Core strengths and experience
  paragraph2: `My journey in tech started with curiosity about how things work, which evolved into a career 
  building applications that matter. I specialize in React, TypeScript, and Python, using these technologies 
  to craft responsive web applications and extract valuable insights from complex datasets. I believe in 
  writing clean, maintainable code and presenting data in ways that drive informed decision-making.`,
  
  // Paragraph 3: Career goals and what you're looking for
  paragraph3: `I'm passionate about joining innovative teams where I can contribute to meaningful projects 
  while continuing to grow professionally. Whether it's building scalable web applications, creating 
  interactive dashboards, or uncovering insights hidden in data, I'm always excited to take on new 
  challenges. I'm particularly interested in roles that combine software development with data analysis, 
  allowing me to leverage my full range of skills.`,
  
  // Stats - Update with your actual numbers
  stats: [
    { label: "Years Experience", value: "5+" },   // ← REPLACE
    { label: "Projects Completed", value: "50+" }, // ← REPLACE
    { label: "Happy Clients", value: "30+" },     // ← REPLACE
    { label: "Data Reports", value: "100+" },     // ← REPLACE
  ],
};

// ====================
// SKILLS
// ====================
export const skills = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React & Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "TypeScript", level: 85 },
    ],
  },
  backend: {
    title: "Backend & APIs",
    skills: [
      { name: "REST APIs", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "Authentication", level: 85 },
      { name: "API Integration", level: 90 },
      { name: "Formspree", level: 95 },
    ],
  },
  dataAnalysis: {
    title: "Data Analysis",
    skills: [
      { name: "Python", level: 88 },
      { name: "Pandas & NumPy", level: 85 },
      { name: "Data Visualization", level: 90 },
      { name: "SQL Queries", level: 87 },
      { name: "Power BI / Tableau", level: 80 },
    ],
  },
  databases: {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 90 },
      { name: "Database Design", level: 82 },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Vercel Deployment", level: 90 },
      { name: "CI/CD Basics", level: 78 },
      { name: "Docker", level: 70 },
    ],
  },
  additional: {
    title: "Additional Skills",
    skills: [
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Principles", level: 85 },
      { name: "Performance Optimization", level: 82 },
      { name: "SEO Best Practices", level: 80 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
};

// ====================
// PROJECTS
// ====================
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",                // ← REPLACE
    description: "A full-featured online store with cart, checkout, and payment integration. Built with modern web technologies for optimal performance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com",                // ← REPLACE
    demo: "https://demo.com",                    // ← REPLACE
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Interactive data visualization dashboard with real-time metrics, charts, and comprehensive reporting capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    category: "Data Analysis",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations and optimized performance for showcasing work.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Sales Data Analysis",
    description: "Comprehensive analysis of sales trends, customer behavior, and revenue forecasting using Python and visualization tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["Python", "Pandas", "Matplotlib", "Tableau"],
    category: "Data Analysis",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    tags: ["React", "Firebase", "Tailwind CSS"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Weather Application",
    description: "Beautiful weather app with location-based forecasts, interactive maps, and detailed meteorological data.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    tags: ["React", "Weather API", "CSS3"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

// ====================
// CERTIFICATIONS
// ====================
export const certifications = [
  {
    id: 1,
    title: "AWS Certified Developer",           // ← REPLACE
    issuer: "Amazon Web Services",              // ← REPLACE
    year: "2024",                               // ← REPLACE
    category: "Cloud / DevOps",
    credentialUrl: "https://aws.amazon.com",    // ← REPLACE (optional)
  },
  {
    id: 2,
    title: "Google Data Analytics Professional",
    issuer: "Google",
    year: "2023",
    category: "Data Analysis",
    credentialUrl: "https://coursera.org",
  },
  {
    id: 3,
    title: "React Developer Certificate",
    issuer: "Meta",
    year: "2023",
    category: "Software Development",
    credentialUrl: "https://coursera.org",
  },
  {
    id: 4,
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2022",
    category: "Data Analysis",
    credentialUrl: "https://coursera.org",
  },
  {
    id: 5,
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    year: "2022",
    category: "Professional Skills",
    credentialUrl: "https://scrum.org",
  },
  {
    id: 6,
    title: "MongoDB Developer Certificate",
    issuer: "MongoDB University",
    year: "2021",
    category: "Software Development",
    credentialUrl: "https://university.mongodb.com",
  },
];

// ====================
// EXPERIENCE
// ====================
export const experiences = [
  {
    id: 1,
    role: "Senior Developer",                   // ← REPLACE
    company: "Tech Company",                    // ← REPLACE
    period: "2022 - Present",                   // ← REPLACE
    description: "Lead development of web applications and data solutions. Mentor junior developers and implement best practices.",
    achievements: [
      "Led a team of 5 developers",
      "Increased app performance by 40%",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Built responsive web applications and integrated analytics solutions for various clients.",
    achievements: [
      "Delivered 20+ client projects",
      "Reduced load times by 60%",
      "Built custom analytics dashboards",
    ],
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "Startup Inc",
    period: "2019 - 2020",
    description: "Developed frontend features and learned backend technologies. Contributed to data analysis projects.",
    achievements: [
      "Learned React and Node.js",
      "Built 10+ responsive pages",
      "Assisted with data reporting",
    ],
  },
];

// ====================
// SERVICES
// ====================
export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building modern, responsive websites and web applications using React, Next.js, and other cutting-edge technologies.",
    icon: "code",
  },
  {
    id: 2,
    title: "Data Analysis",
    description: "Transforming raw data into actionable insights through analysis, visualization, and comprehensive reporting.",
    icon: "chart",
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
    description: "Technical consulting for startups and businesses looking to improve their digital presence and data strategy.",
    icon: "users",
  },
];
