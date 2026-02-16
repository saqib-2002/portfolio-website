import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ux/Button";
import { coreSkills, devTools, skillsDescription } from "../constants";
import SkillIcons from "./ui/SkillIcons";

const SkillsShowcase = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = showAllSkills ? coreSkills : coreSkills.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-n-8 py-16 sm:py-20">
      {/* SaaS-style gradient blobs */}
      {/* <div className="animate-blob absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-400 opacity-20 blur-3xl sm:h-[40rem] sm:w-[40rem]"></div>
      <div className="animate-blob animation-delay-2000 absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 opacity-20 blur-3xl sm:h-[40rem] sm:w-[40rem]"></div> */}

      {/* Top-left blob */}
      <div
        className="animate-blob absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-400 opacity-20 blur-[120px]"
        style={{
          top: "0%",
          left: "0%",
          width: "60rem",
          height: "60rem",
        }}
      ></div>

      {/* Bottom-right blob */}
      <div
        className="animate-blob animation-delay-2000 pointer-events-none absolute -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 opacity-20 blur-[120px]"
        style={{
          bottom: "0%",
          right: "0%",
          width: "60rem",
          height: "60rem",
        }}
      ></div>

      <div className="container relative z-10 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-24">
        {/* Left Column: Core Skills */}
        <div className="flex-1 lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Core Developer Skills
          </h2>
          <p className="mb-8 text-base text-n-3 sm:text-lg">
            {skillsDescription}
          </p>

          <ul className="space-y-4 sm:space-y-6">
            <AnimatePresence initial={false}>
              {visibleSkills.map((skill) => (
                <motion.li
                  key={skill.id}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h6 className="text-base font-semibold text-white sm:text-lg">
                    {skill.title}
                  </h6>
                  {skill.text && (
                    <p className="mt-1 text-sm text-n-3 sm:text-base">
                      {skill.text}
                    </p>
                  )}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {/* Read More Button */}
          {coreSkills.length > 6 && (
            <button
              className="group mt-4 inline-block rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:text-color-1"
              onClick={() => setShowAllSkills(!showAllSkills)}
            >
              <span className="relative">
                {showAllSkills ? "Show Less" : "Read More"}
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-color-1 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          )}

          <div className="mt-8 sm:mt-10">
            <Button
              to="/contact"
              className="w-full max-w-xs py-3 text-base font-semibold sm:text-lg"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right Column: Dev Tools Grid */}
        <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:ml-auto">
          <SkillIcons />
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
