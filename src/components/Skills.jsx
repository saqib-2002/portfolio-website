import Heading from "./Heading";
import LevelBar from "./design/LevelBar";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="features">
      <div className="realtive container z-2">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Skill Mastery Highlights"
        />
        <div className="gap-8 pb-16 max-sm:space-y-4 md:grid md:grid-cols-2">
          {skills.map((item) => (
            <div className="flex items-center" key={item.id}>
              <p className="mr-12 w-32">{item.title}</p>
              <div className="flex-1">
                <LevelBar currentLevel={item.currentLevel} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
