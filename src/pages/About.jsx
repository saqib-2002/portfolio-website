import Heading from "../components/Heading";
import Button from "../components/ux/Button";
import Social from "../components/Social";
import ProfileImage from "../components/ui/ProfileImg";
import Skills from "../components/Skills";
import { aboutHighlights } from "../constants/about";

const About = () => {
  return (
    <section
      id="about"
      aria-label="About Saqib - Full Stack Developer"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="container mx-auto px-6">
        {/* top section */}
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* left content */}
          <div className="space-y-8">
            <Heading
              title="Hi, I’m Saqib, I build scalable web products"
              className="text-left"
            />

            <p className="max-w-xl text-lg leading-relaxed text-n-2">
              I’m a passionate web developer focused on building modern,
              scalable, and user-centric digital experiences. I love learning
              new technologies, refining my craft, and staying ahead of the
              curve in frontend and full-stack development.
            </p>

            <span className="inline-block rounded-full border border-white/10 px-4 py-1 text-xs font-medium text-neutral-400">
              Building SaaS products with React, Next.js, and scalable backend
              systems.
            </span>

            {/* credibility bullets */}

            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-n-3">
              {aboutHighlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            {/* availability */}
            <p className="text-sm font-medium text-color-1">
              Building products and open to collaborating with ambitious teams.
            </p>

            <div className="mt-6 max-w-xl text-sm text-n-3">
              <p>
                I focus on writing clean, scalable code, shipping fast, and
                thinking beyond features to real product value.
              </p>
            </div>

            {/* actions */}
            <div className="flex flex-wrap items-center gap-6">
              <Button
                link="https://drive.google.com/file/d/1JhZ8lHsuB2VrOAKW2ENjNlqbwQRVNt7X/view?usp=sharing"
                target="_blank"
              >
                View Resume
              </Button>

              <Social />
            </div>
          </div>

          {/* right visual */}
          <div className="relative flex justify-center md:justify-end">
            {/* gradient glow */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-2xl" />

            <ProfileImage />
          </div>
        </div>

        {/* skills */}
        <div className="mt-24">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
