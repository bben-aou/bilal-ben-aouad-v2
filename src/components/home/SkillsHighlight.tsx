import { motion } from "framer-motion";
import { highlightedSkills } from "@/data/skills";

export function SkillsHighlight() {
  return (
    <section className="py-16 border-y border-border/50 bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Technologies I work with
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {highlightedSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="px-4 py-2 rounded-lg bg-card border border-border/50 text-foreground font-medium text-sm md:text-base card-shadow"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
