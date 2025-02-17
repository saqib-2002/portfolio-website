import Skills from "../components/Skills";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Button from "../components/Button";

import GradientLight from "../components/design/GradientLight";
import ProfileImg from "../components/ProfileImg";
import Social from "../benefitsCards/Social";

const About = () => {
  return (
    <>
      <Section
        id="features"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        className="-mt-[5.25rem] pt-[14rem]"
      >
        <div className="md:flex">
          <div className="container relative z-3">
            <Heading title="Hi, I'm Saqib" className="h1 ml-[2%]" />

            {/* about */}
            <p className="body-2 -mt-[3rem] mb-6 ml-[2%] max-w-lg text-n-2 lg:mb-8">
              Dedicated and passionate about learning new concepts in
              programming and web development, constantly seeking to expand
              knowledge and skills while staying updated with the latest trends
              and technologies.
            </p>

            {/* button */}
            <div className="ml-[2%]">
              <Button
                to="https://drive.google.com/file/d/1feJ-Dgx3fOcNsO-epGeBYtEcKZqBK4or/view?usp=sharing"
                target="_blank"
              >
                View Resume
              </Button>
            </div>

            {/* social icons */}
            <div className="mt-8 pl-4">
              <Social />
            </div>

            {/*  gradient light*/}
            <div className="opacity-40">
              <GradientLight />
            </div>
          </div>

          <div className="md:mx-w-5xl relative -left-[5.25rem] mx-auto max-w-[20rem] xl:mb-24">
            <ProfileImg />
          </div>
        </div>
        <Skills />
      </Section>
    </>
  );
};

export default About;
