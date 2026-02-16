import { benefits } from "../../constants/index.js";
import Button from "../ux/Button";
import ProjectCard from "../ux/ProjectCard";

interface Project {
  id: number | string;
  title: string;
  text: string;
  imageUrl?: string;
  iconUrl?: string;
  explore?: string;
  liveUrl?: string;
  githubStatus?: "public" | "private";
}

export default function ProjectsSection() {
  const visibleProjects = benefits.slice(0, 5);

  return (
    <section id="projects" className="relative py-20">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-2xl"
        style={{
          width: "100%",
          height: "50%",
          opacity: "20%",
        }}
      />
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold text-n-1">
            Projects I’ve Built
          </h2>
          <p className="text-base text-n-3">
            A selection of projects showcasing my full-stack and frontend
            skills.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>

        {benefits.length > 5 && (
          <div className="mt-12 flex justify-center">
            <Button to="/projects">Explore More Projects</Button>
          </div>
        )}
      </div>
    </section>
  );
}
