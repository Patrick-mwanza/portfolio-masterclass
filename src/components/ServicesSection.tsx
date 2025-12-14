import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { 
  Code2, 
  BarChart3, 
  Layout, 
  Headphones,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js. From landing pages to full-stack solutions.",
    features: ["Responsive Design", "Performance Optimization", "SEO Best Practices"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Reporting",
    description: "Transform raw data into actionable insights. Comprehensive analysis, visualization, and automated reporting to drive business decisions.",
    features: ["Custom Dashboards", "Trend Analysis", "Automated Reports"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Layout,
    title: "Portfolio Websites",
    description: "Stunning personal portfolio websites that showcase your work effectively. Modern designs with smooth animations and great user experience.",
    features: ["Unique Designs", "Mobile-First", "Fast Loading"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Headphones,
    title: "Consulting & Freelance",
    description: "Technical consulting and freelance services for your projects. From code reviews to full project development and data strategy.",
    features: ["Code Reviews", "Technical Strategy", "Ongoing Support"],
    gradient: "from-orange-500 to-red-500",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">What I Offer</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            My Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional services tailored to meet your digital needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-8 rounded-2xl hover-glow relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
