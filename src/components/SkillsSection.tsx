import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  BarChart3, 
  Server, 
  Wrench,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React & Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "REST APIs", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "Authentication", level: 85 },
      { name: "API Integration", level: 90 },
      { name: "Formspree", level: 95 },
    ],
  },
  {
    title: "Data Analysis",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Python", level: 88 },
      { name: "Pandas & NumPy", level: 85 },
      { name: "Data Visualization", level: 90 },
      { name: "SQL Queries", level: 87 },
      { name: "Power BI / Tableau", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 90 },
      { name: "Database Design", level: 82 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-teal-500 to-cyan-500",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Vercel Deployment", level: 90 },
      { name: "CI/CD Basics", level: 78 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Additional Skills",
    icon: Layers,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Principles", level: 85 },
      { name: "Performance Optimization", level: 82 },
      { name: "SEO Best Practices", level: 80 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Expertise</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend development, backend systems, and data analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-glow group"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
