import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Lead development of enterprise applications, mentoring junior developers, and implementing best practices.",
    skills: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    type: "work",
    title: "Data Analyst",
    company: "DataInsights Co.",
    period: "2020 - 2022",
    description: "Analyzed business data to drive strategic decisions, created dashboards, and automated reporting processes.",
    skills: ["Python", "SQL", "Tableau", "Power BI"],
  },
  {
    type: "education",
    title: "BSc Computer Science",
    company: "University of Technology",
    period: "2016 - 2020",
    description: "Graduated with honors. Focus on software engineering and data science fundamentals.",
    skills: ["Algorithms", "Data Structures", "Machine Learning"],
  },
  {
    type: "certification",
    title: "AWS Certified Developer",
    company: "Amazon Web Services",
    period: "2023",
    description: "Professional certification demonstrating expertise in developing and maintaining AWS applications.",
    skills: ["Cloud Computing", "DevOps", "Serverless"],
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

const colorMap = {
  work: "from-blue-500 to-cyan-500",
  education: "from-purple-500 to-pink-500",
  certification: "from-green-500 to-emerald-500",
};

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Background</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Experience & Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = iconMap[exp.type as keyof typeof iconMap];
                const gradient = colorMap[exp.type as keyof typeof colorMap];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    {/* Icon */}
                    <div className={`absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="glass-card p-6 rounded-2xl hover-glow"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground font-medium mb-3">
                        {exp.company}
                      </p>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
