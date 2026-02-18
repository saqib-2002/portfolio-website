import Heading from "../components/Heading";
import ProjectsSection from "../components/layout/ProjectsSection";
import FeaturedProject from "../components/ux/FeaturedProject";
import { benefitImage5 } from "../assets";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container mx-auto px-6">
        {/* section heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Heading title="Latest Project Highlights" />
          <p className="mt-4 text-n-2">
            Real-world projects focused on performance, scalability, and
            thoughtful user experience.
          </p>
        </div>

        {/* featured project */}
        <div className="relative mx-auto max-w-4xl rounded-2xl border border-n-7 bg-n-8/70 p-8 backdrop-blur">
          {/* ambient glow */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-2xl" />
          <FeaturedProject
            title="Blog Platform"
            description="A full-stack blog platform built with the MERN stack, focused on performance, scalability, and clean UX."
            techStack={["React", "Node.js", "Express", "MongoDB", "Firebase"]}
            metrics={[
              { label: "Monthly Users", value: "4.2k+" },
              { label: "Uptime", value: "99.99%" },
              { label: "Avg. Load Time", value: "0.8s" },
            ]}
            liveUrl="https://google.com"
            githubUrl="/"
            imageUrl={benefitImage5}
          />
        </div>
      </div>

      {/* all projects */}
      <ProjectsSection showAll />
    </section>
  );
};

export default Projects;
