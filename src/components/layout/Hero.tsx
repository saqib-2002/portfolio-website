import Button from "../ux/Button";
import Capabilities from "../ui/Capabilities";
import ProfileImg from "../ui/ProfileImg";

export default function Hero() {
  return (
    <section className="relative px-6 pb-24 pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full border border-white/10 px-4 py-1 text-xs font-medium text-neutral-400">
            Full-Stack Developer building modern web apps
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building modern, scalable
            <br />
            web applications
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400 lg:mx-0">
            I’m Saqib — a web developer focused on clean architecture, modern
            tooling, and performant Full Stack Applications.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button to="/projects">View Projects</Button>

            <Button
              href="https://drive.google.com/file/d/1JhZ8lHsuB2VrOAKW2ENjNlqbwQRVNt7X/view"
              target="_blank"
            >
              Download Resume
            </Button>
          </div>
        </div>
        <ProfileImg />
      </div>
      <Capabilities className="relative z-10 mt-20 lg:block" />
    </section>
  );
}
