import Heading from "./Heading";
import LevelBar from "./design/LevelBar";
import { skills } from "../constants/skills";

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="container relative z-2">
        <Heading
          className="mx-auto text-center md:max-w-md lg:max-w-2xl"
          title="Skill Mastery Highlights"
        />

        <div className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.group}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-xl sm:p-6"
            >
              {/* subtle liquid glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10" />

              {/* content */}
              <div className="relative">
                {/* Group title */}
                <h3 className="mb-5 text-base font-semibold text-n-1 sm:text-lg">
                  {group.group}
                </h3>

                {/* Skills */}
                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
                    >
                      <p className="text-xs text-n-3 sm:w-36 sm:text-sm">
                        {skill.title}
                      </p>

                      <div className="w-full sm:flex-1">
                        <LevelBar currentLevel={skill.currentLevel} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
