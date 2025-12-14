import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, MapPin, Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { personalInfo, aboutMe } from "@/data/portfolio";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card p-4 rounded-3xl overflow-hidden">
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  className="w-full aspect-square object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 glass-card px-6 py-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{aboutMe.stats[0].value}</p>
                    <p className="text-sm text-muted-foreground">{aboutMe.stats[0].label}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Passionate Developer & Data Enthusiast
            </h3>
            
            {/* Extended Bio */}
            <div className="space-y-4 mb-6">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {aboutMe.paragraph1}
              </p>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {aboutMe.paragraph2}
              </p>

              {/* Collapsible third paragraph for mobile */}
              <div className="hidden md:block">
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {aboutMe.paragraph3}
                </p>
              </div>

              {/* Mobile: Show/Hide toggle */}
              <div className="md:hidden">
                {showFullBio && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-muted-foreground text-base leading-relaxed"
                  >
                    {aboutMe.paragraph3}
                  </motion.p>
                )}
                <button
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-2 hover:underline"
                >
                  {showFullBio ? (
                    <>
                      Show less <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read more <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Info Items */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{personalInfo.workPreference}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{personalInfo.education}</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {aboutMe.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center hover-glow"
            >
              <p className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
