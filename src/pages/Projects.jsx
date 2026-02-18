import Heading from "../components/Heading";
import Button from "../components/ux/Button";
import ProjectsSection from "../components/layout/ProjectsSection";

const Projects = () => {
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

        {/* project card */}
        <div className="relative mx-auto max-w-4xl rounded-2xl border border-n-7 bg-n-8/70 p-8 backdrop-blur">
          {/* ambient glow */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-2xl" />

          <div className="grid gap-10 md:grid-cols-2">
            {/* left content */}
            <div className="space-y-4">
              <Heading title="Blog Website" className="text-left text-2xl" />

              <p className="leading-relaxed text-n-2">
                A dynamic blog platform built using the MERN stack — MongoDB,
                Express, React, and Node.js — focused on performance,
                scalability, and clean UX. It includes Firebase authentication
                for secure access and allows users to create, edit, and manage
                blogs seamlessly within a modern, responsive interface.
              </p>
            </div>

            {/* actions */}
            <div className="flex flex-col justify-center gap-6">
              <Button link="http://google.com" target="_blank">
                Live Demo
              </Button>
              <Button link="/" target="_blank" variant="secondary">
                GitHub Repository
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ProjectsSection showAll={true} />
    </section>
  );
};

export default Projects;
