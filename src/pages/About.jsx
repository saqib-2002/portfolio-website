import Heading from "../components/Heading";
import Button from "../components/ux/Button";
import Social from "../components/Social";
import ProfileImage from "../components/ui/ProfileImg";
import Skills from "../components/Skills";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container mx-auto px-6">
        {/* top section */}
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* left content */}
          <div className="space-y-8">
            <Heading title="Hi, I’m Saqib 👋" className="text-left" />

            <p className="max-w-xl text-lg leading-relaxed text-n-2">
              I’m a passionate web developer focused on building modern,
              scalable, and user-centric digital experiences. I love learning
              new technologies, refining my craft, and staying ahead of the
              curve in frontend and full-stack development.
            </p>

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
