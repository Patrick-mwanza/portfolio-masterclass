// ============================================================
// PORTFOLIO DATA - Patrick Mwanza's Portfolio
// ============================================================

import profilePhoto from "@/assets/profile-photo.jpg";

// Personal Information
export const personalInfo = {
  name: "Patrick Mwanza",
  title: "Developer",
  tagline: "Building scalable, user-focused web applications with clean code and modern technologies.",
  location: "Nairobi, Kenya",
  workPreference: "Remote / On-site",
  education: "Full-Stack Development (MERN Stack)",
  openToWork: true,
  profileImage: profilePhoto,
  resumeUrl: "https://docs.google.com/document/d/1k-SduGeMgPSHbZDZtukziUxgsLOHOSh-/edit?usp=drive_link&ouid=114865878550150048207&rtpof=true&sd=true",
};

// Contact Information
export const contactInfo = {
  email: "munyaopatrick002@gmail.com",
  phone: "+254798109651",
  github: "https://github.com/Patrick-mwanza",
  linkedin: "https://www.linkedin.com/in/patrick-mwanza/",
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

// Projects - Patrick's actual projects
export const projects = [
  {
    id: 1,
    title: "Tabia Zetu",
    description: "A digital tool that helps teachers track and analyze student behavior over time. It automates behavior logging, visualizes trends, generates reports, and provides rules-based suggestions to improve classroom strategies. Supports CBC and 8-4-4 systems.",
    image: "/tabia-zetu-cover.png",
    tags: ["React", "Education", "Analytics", "Dashboard"],
    category: "Full Stack",
    github: "https://github.com/iamiancliff/tabia-zetu",
    demo: "https://tabia-zetu.vercel.app/",
  },
  {
    id: 2,
    title: "Allsolves Company",
    description: "A travel and hiking platform for adventure enthusiasts, offering destination discovery, trail exploration, trip planning guides, safety tips, and local attraction insights.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Travel"],
    category: "Frontend",
    github: "https://github.com/Patrick-mwanza/allsolves-company-project",
    demo: "https://patrick-mwanza.github.io/allsolves-company-project/",
  },
  {
    id: 3,
    title: "COVID-19 Data Tracker",
    description: "A project analyzing global COVID-19 vaccination progress, cases, and deaths using real-world data, with visualizations and trend interpretation.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop",
    tags: ["Python", "Data Analysis", "Visualization"],
    category: "Full Stack",
    github: "https://github.com/Patrick-mwanza/covid-19-analysis-project",
    demo: "https://drive.google.com/file/d/1In04fatJ7pJpFxqoZarbvH_cLxCuMkIH/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Clinic Alert System",
    description: "A healthcare reminder system that automates follow-up management for healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["React", "Healthcare", "Automation"],
    category: "Full Stack",
    github: "https://github.com/Patrick-mwanza/clinic-alert-system-19.git",
    demo: "https://clinic-alert-system-19.lovable.app/",
  },
  {
    id: 5,
    title: "Portfolio Website (Client Project)",
    description: "A professional portfolio website built for a client to showcase projects, skills, and achievements using an interactive and visually engaging design.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
    category: "Frontend",
    github: "https://github.com/Kibirisman/group-portfolio-project.git",
    demo: "https://kibirisman.github.io/group-portfolio-project/",
  },
];

// Certifications - Patrick's actual certification
export const certifications = [
  {
    id: 1,
    title: "Full-Stack Development (MERN Stack)",
    issuer: "Power Learn Project",
    year: "2025",
    category: "Software Development",
    credentialUrl: "https://drive.google.com/file/d/15n53KTnNDCYlZzYGs-5VP0eE1L3QNskN/view?usp=sharing",
    note: "Verification available via QR code on certificate",
  },
];

// Experience
export const experience = [
  {
    type: "education",
    title: "Bachelor of Science in Information Technology with Development",
    company: "Murang'a University of Technology",
    period: "2023 - Present",
    description: "Currently pursuing a degree in Information Technology with a focus on software development, systems analysis, and modern web technologies.",
    skills: ["Software Development", "Web Technologies", "Database Management", "Systems Analysis"],
  },
  {
    type: "work",
    title: "Web Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Building custom websites and web applications for clients. Specializing in React and modern frontend technologies.",
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    type: "work",
    title: "Frontend Developer Intern",
    company: "Power Learn Project",
    period: "2024 - 2025",
    description: "Collaborated on real-world projects, building responsive user interfaces and implementing modern frontend solutions.",
    skills: ["React", "JavaScript", "CSS", "Git"],
  },
  {
    type: "work",
    title: "Technical Support & Web Assistant",
    company: "Various Clients",
    period: "2022 - 2023",
    description: "Provided technical support and assisted with website maintenance, content updates, and basic troubleshooting for small businesses.",
    skills: ["HTML", "CSS", "WordPress", "Customer Support"],
  },
  {
    type: "education",
    title: "Full-Stack Development (MERN Stack)",
    company: "Power Learn Project",
    period: "2024 - 2025",
    description: "Completed comprehensive training in MongoDB, Express.js, React, and Node.js development.",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Ian Cliff",
    role: "Project Lead, Tabia Zetu",
    content: "Patrick is an exceptional developer who delivered our education platform on time and with great attention to detail. His React skills and problem-solving abilities made the collaboration seamless.",
    avatar: "IC",
  },
  {
    id: 2,
    name: "James Kibiris",
    role: "Client, Portfolio Project",
    content: "Working with Patrick was a great experience. He understood my vision and created a stunning portfolio website that truly represents my brand. Highly recommended!",
    avatar: "JK",
  },
  {
    id: 3,
    name: "Sarah Wanjiku",
    role: "Startup Founder",
    content: "Patrick's technical expertise and professionalism exceeded our expectations. He built a robust clinic management system that has streamlined our operations significantly.",
    avatar: "SW",
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
