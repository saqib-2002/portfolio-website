import Section from "./Section";
import Heading from "./Heading";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "MongoDB"];
  return (
    <Section id="features" crosses className="mt-10">
      <div className="realtive container z-2">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Skill Mastery Highlights"
        />
        <div className="mb-10 flex">
          <ul className="flex flex-wrap gap-9">
            {skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="h-5 rounded-full bg-conic-gradient"></div>
      </div>
    </Section>
  );
};

export default Skills;
