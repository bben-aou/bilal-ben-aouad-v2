import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { skillCategories } from "@/data/skills";
import { MapPin, Mail, Phone, Languages } from "lucide-react";

const About = () => {
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
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Senior Frontend Developer with 4+ years of experience building scalable, 
              high-performing, and user-focused web applications.
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="prose-custom">
              <p className="text-lg leading-relaxed mb-6">
                I specialize in <strong>React.js, Next.js, TypeScript</strong>, and modern frontend 
                architecture, with a strong expertise in performance optimization, responsive UI/UX, 
                and cross-platform development.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Throughout my career, I've had the privilege of working on impactful projects—from 
                building Morocco's first fully digital real estate financing platform to creating 
                enterprise PIM solutions for leading e-commerce platforms.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about clean architecture, developer experience, and creating interfaces 
                that users love. I believe in continuous learning and sharing knowledge with the 
                community through writing and mentoring.
              </p>
            </div>
          </motion.section>

          {/* Contact Info */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Casablanca, Morocco</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">bilal.benaouad.me@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+212 708 215 342</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Languages className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Languages</p>
                  <p className="font-medium">English, French, Arabic</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border/50"
                >
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </Layout>
  );
};

export default About;
