import Section from "./Section";
import { curve, heroBackground, saqib } from "../assets";
import Button from "./Button";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { useRef } from "react";

import { BackgroundCircles, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="-mt-[5.25rem] pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
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
            href="https://drive.google.com/file/d/1feJ-Dgx3fOcNsO-epGeBYtEcKZqBK4or/view?usp=sharing"
            target="_blank"
          >
            My Resume
          </Button>
        </div>
        <div className="md:mx-w-5xl relative mx-auto max-w-[23rem] xl:mb-24">
          <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative rounded-[1rem] bg-n-8">
              <div className="h-[1rem] rounded-t-[0.9rem] bg-n-8" />
              <div className="aspect-[23/42] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/900] lg:aspect-[1480/1720]">
                <img
                  src={saqib}
                  className="md:--translate-y-[10%] w-full translate-y-[20%] scale-[1.7] md:scale-[1] lg:-translate-y-[10%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute -left-[20rem] bottom-[4rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 px-1 py-1 backdrop-blur xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="absolute -right-[23rem] bottom-[18rem] hidden w-[20rem] xl:flex"
                    title="Alex checked Porfolio"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[55%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[40%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>

        <CompanyLogos className="relative z-10 mt-20 hidden lg:block" />
      </div>
    </Section>
  );
};

export default Hero;
