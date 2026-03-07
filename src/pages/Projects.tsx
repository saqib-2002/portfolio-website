import Heading from "../components/Heading";
import ProjectsSection from "../components/layout/ProjectsSection";
import FeaturedProject from "../components/ux/FeaturedProject";

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
            title="Lekki AI"
            description="A Chrome extension that converts voice to text in real time, translates it instantly, and refines the transcript using AI for clearer and more accurate communication."
            techStack={[
              "Chrome Extension",
              "JavaScript",
              "Web Audio API",
              "Speech-to-Text API",
              "AI",
            ]}
            metrics={[
              { label: "Transcription", value: "Real-time" },
              { label: "Translation", value: "Multi-language" },
              { label: "AI Enhancement", value: "Enabled" },
            ]}
            statusText="Currently in development..."
            liveUrl=""
            imageUrl="https://res.cloudinary.com/dddorzxo2/image/upload/v1772848122/Screenshot_380_on065y.png"
          />
        </div>
      </div>

      {/* all projects */}
      <ProjectsSection showAll />
    </section>
  );
};

export default Projects;
