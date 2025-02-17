import Section from "./Section";
import { curve } from "../assets";
import Button from "./Button";
// import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { useRef } from "react";

import { BackgroundCircles } from "./design/Hero";
import ProfileImg from "./ProfileImg";
// import { heroIcons } from "../constants";
// import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="-mt-[5.25rem] pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[6.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-[4rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Saqib&rsquo;s Web Development Portfolio {``}
            <h1>
              <span className="relative inline-block">
                MERN STACK
                <img
                  src={curve}
                  className="absolute left-0 top-full w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="curve"
                />
              </span>
            </h1>
          </h1>
          <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
            Dedicated and passionate about learning new concepts in programming
            and web development, constantly seeking to expand knowledge and
            skills while staying updated with the latest trends and
            technologies.
          </p>
          <Button
            link="https://drive.google.com/file/d/1JhZ8lHsuB2VrOAKW2ENjNlqbwQRVNt7X/view?usp=sharing"
            target="_blank"
          >
            My Resume
          </Button>
        </div>

        <div className="md:mx-w-5xl relative mx-auto max-w-[23rem] xl:mb-24">
          <ProfileImg />

          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>

        <CompanyLogos className="relative z-10 mt-20 hidden lg:block" />
      </div>
    </Section>
  );
};

export default Hero;
