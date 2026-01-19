import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="py-20"
      >
        <div className="container max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Experience</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              4+ years of building impactful web applications across e-commerce, 
              fintech, and retail industries.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  <div className="bg-card rounded-xl border border-border/50 overflow-hidden card-shadow">
                    {/* Header */}
                    <div className="p-6 border-b border-border/50 bg-muted/30">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-xl font-bold mb-1">{exp.role}</h2>
                          <h3 className="text-lg text-primary font-medium">{exp.company}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        <Briefcase className="h-4 w-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span className="text-foreground/90">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Experience;
