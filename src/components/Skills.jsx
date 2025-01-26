import Section from "./Section";
import Heading from "./Heading";
import LevelBar from "./design/LevelBar";
import { skills } from "../constants";

const Skills = () => {
  return (
    <Section
      id="features"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      className="-mt-[5.25rem] pt-[12rem]"
    >
      <div className="realtive container z-2">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Skill Mastery Highlights"
        />
        <div className="mb-10 gap-8 md:grid md:grid-cols-2">
          {/* <div className="space-y-12"> */}
          {skills.map((item) => (
            <div className="flex items-center" key={item.id}>
              <p className="mr-12 w-32">{item.title}</p>
              <div className="flex-1">
                <LevelBar currentLevel={item.currentLevel} />
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
