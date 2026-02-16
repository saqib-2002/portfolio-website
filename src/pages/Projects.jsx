import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { curve } from "../assets";
import { BackgroundCircles } from "../components/design/Hero";
import GradientLight from "../components/design/GradientLight";
import Button from "../components/ux/Button";

const Projects = () => {
  return (
    <>
      <Section
        id="features"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        className="-mt-[5.25rem] pt-[14rem]"
      >
        <div className="container relative z-1 mx-auto mb-[0.25rem] max-w-[56rem] text-center md:mb-[5.25rem]">
          <span className="relative inline-block">
            <Heading
              title="Latest Project Highlight's"
              className="h1 max-sm:flex max-sm:justify-center"
            />
            <img
              src={curve}
              className="absolute left-0 top-[4.25rem] w-full max-sm:left-[5rem] max-sm:top-[4.75rem] max-sm:w-1/2 xl:-mt-2"
              width={624}
              height={28}
              alt="curve"
            />
          </span>
        </div>

        <Heading
          title="Blog Website"
          className="h4 ml-[2rem] md:ml-[5.25rem]"
        />

        <div className="container relative max-w-[56rem] translate-y-[0.25rem] max-sm:opacity-40">
          <GradientLight />
          <BackgroundCircles />
        </div>

        <div className="container sm:flex sm:gap-4">
          <p className="body-2 mb-6 ml-[2%] max-w-2xl text-n-2 lg:mb-8">
            A dynamic blog website built with the MERN stack, combining MongoDB,
            Express, React, and Node.js for seamless functionality and efficient
            data handling. The platform features Firebase authentication for
            secure login and account management. Users can easily create, edit,
            and manage blogs, all within a responsive, modern, and user-friendly
            interface designed to enhance the overall experience.
          </p>
          <div className="relative z-1 mb-[2rem] flex justify-between sm:left-[25%] md:flex-col md:justify-center md:space-y-8">
            <Button link="http://google.com">Live Demo</Button>
            <Button link="/">Github Repositry</Button>
          </div>
        </div>

        <Card />
      </Section>
    </>
  );
};
export default Projects;
