import Skills from "../components/Skills";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Button from "../components/Button";
import { socials } from "../constants";
import { saqib } from "../assets";
import { Gradient } from "../components/design/Hero";
import GradientLight from "../components/design/GradientLight";

const About = () => {
  return (
    <>
      <Section
        id="features"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        className="-mt-[5.25rem] pt-[14rem] md:flex"
      >
        <div className="container relative z-3">
          <Heading title="Hi, I'm Saqib" className="h1 ml-[2%]" />
          <p className="body-2 -mt-[3rem] mb-6 ml-[2%] max-w-lg text-n-2 lg:mb-8">
            Dedicated and passionate about learning new concepts in programming
            and web development, constantly seeking to expand knowledge and
            skills while staying updated with the latest trends and
            technologies.
          </p>
          <div className="ml-[2%]">
            <Button
              to="https://drive.google.com/file/d/1feJ-Dgx3fOcNsO-epGeBYtEcKZqBK4or/view?usp=sharing"
              target="_blank"
            >
              {" "}
              View Resume
            </Button>
          </div>

          <ul className="my-[2rem] flex flex-wrap gap-5">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  alt={item.title}
                  width={16}
                  height={16}
                />
              </a>
            ))}
          </ul>
          <div className="opacity-40">
            <GradientLight />
          </div>
        </div>

        <div className="md:mx-w-5xl relative -left-[5.25rem] mx-auto max-w-[20rem] xl:mb-24">
          <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative rounded-[1rem] bg-n-8">
              <div className="h-[1rem] rounded-t-[0.9rem] bg-n-8" />
              <div className="aspect-[23/42] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/900] lg:aspect-[1480/1720]">
                <img
                  src={saqib}
                  className="md:--translate-y-[10%] w-full translate-y-[20%] scale-[1.7] md:scale-[1] lg:-translate-y-[10%]"
                  width={1024}
                  height={490}
                  alt="saqib.jpeg"
                />
              </div>
            </div>
            <Gradient />
          </div>
        </div>
      </Section>
      <Skills />
    </>
  );
};

export default About;
