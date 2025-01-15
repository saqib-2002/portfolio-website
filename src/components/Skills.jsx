import Section from "./Section";
import Heading from "./Heading";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "MongoDB"];
  return (
    <Section id="features" crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings className="-mt-[5.25rem] pt-[12rem]">

      <div className="realtive container z-2">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Skill Mastery Highlights"
        />
        <div className="mb-10">
          <ul className="flex flex-col gap-9">
            {skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>


      {/* <div className="container flex"> */}
      {/* <div className="h-5 w-12 rounded-s-full dark:bg-red-700 mb-12 pr-[2px] border-[2px]"> */}
      {/* <div className="h-5 rounded-s-full bg-conic-gradient"></div> */}
      {/* </div> */}
      {/* <div className="mx-1 h-5 w-12 dark:bg-orange-700 mb-12 pr-[2px] border-[2px]"> */}
      {/* <div className="h-5 rounded-s-full bg-conic-gradient"></div> */}
      {/* </div> */}
      {/* </div> */}

      <div className="container flex items-center space-x-1">
        {/* Level 1 */}
        <div className="h-5 w-12 rounded-s-full bg-gradient-to-r from-red-500 to-red-700 border-2 border-red-800 transition-all duration-300 hover:scale-110"></div>

        {/* Level 2 */}
        <div className="h-5 w-12 bg-gradient-to-r from-orange-500 to-orange-700 border-2 border-orange-800 transition-all duration-300 hover:scale-110"></div>

        {/* Level 3 */}
        <div className="h-5 w-12 bg-gradient-to-r from-yellow-500 to-yellow-700 border-2 border-yellow-800 transition-all duration-300 hover:scale-110"></div>

        {/* Level 4 */}
        <div className="h-5 w-12 bg-gradient-to-r from-green-500 to-green-700 border-2 border-green-800 transition-all duration-300 hover:scale-110"></div>

        {/* Level 5 */}
        <div className="h-5 w-12 rounded-e-full bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-blue-800 transition-all duration-300 hover:scale-110"></div>
      </div>


    </Section>
  );
};

export default Skills;
