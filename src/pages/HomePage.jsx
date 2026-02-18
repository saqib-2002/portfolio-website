import ProjectsSection from "../components/layout/ProjectsSection";
import Hero from "../components/layout/Hero";
import SkillsShowcase from "../components/SkillsShowcase";

const HomePage = () => {
  return (
    <section className="space-y-16">
      <Hero />
      <ProjectsSection showAll={false} />
      <SkillsShowcase />
    </section>
  );
};

export default HomePage;
