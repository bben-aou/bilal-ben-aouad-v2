import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsHighlight } from "@/components/home/SkillsHighlight";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { LatestPosts } from "@/components/home/LatestPosts";

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <HeroSection />
        <SkillsHighlight />
        <FeaturedProjects />
        <LatestPosts />
      </motion.div>
    </Layout>
  );
};

export default Index;
