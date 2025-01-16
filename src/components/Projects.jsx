import Card from "./Card";
import Heading from "./Heading";
import Section from "./Section";
import { curve } from "../assets";
import { BackgroundCircles } from "./design/Hero";
import GradientLight from "./design/GradientLight";
import Button from "./Button";

const Projects = () => {
    return (
        <>
            <Section id="features" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings className="-mt-[5.25rem] pt-[14rem]">

                <div className="relative container max-w-[56rem] z-1 mx-auto mb-[4rem] text-center md:mb-20 lg:mb-[6rem]">
                    <span className="relative inline-block">
                        <Heading title="Latest Project Highlight's" className="h1" />
                        <img
                            src={curve}
                            className="absolute left-0 top-[4.75rem] w-full xl:-mt-2"
                            width={624}
                            height={28}
                            alt="curve"
                        />
                    </span>
                </div>

                <div className="relative container right-[12rem] -top-[4.25rem]">
                    <Heading title="Blog Website" className="h4" />
                </div>
                <div className="relative container max-w-[56rem] translate-y-[1rem]">
                    <GradientLight />
                    <BackgroundCircles />
                </div>

                <div className="flex gap-4 container">
                    <p className="body-2 mb-6 max-w-2xl text-n-2 lg:mb-8 -mt-[8.25rem] ml-[2%]">
                        A dynamic blog website built with the MERN stack, combining MongoDB, Express, React, and Node.js for seamless functionality and efficient data handling. The platform features Firebase authentication for secure login and account management. Users can easily create, edit, and manage blogs, all within a responsive, modern, and user-friendly interface designed to enhance the overall experience.
                    </p>
                    <div className="z-1 flex flex-col -mt-[7.75rem] mb-[10rem] ml-[9.25rem]">
                        <Button link="http://google.com" className="mb-6">Live Demo</Button>
                        <Button link="/">Github Repositry</Button>
                    </div>

                </div>

                <div className="relative container">
                    Hello
                </div>
                <Card />
            </Section>
        </>
    )
}
export default Projects;