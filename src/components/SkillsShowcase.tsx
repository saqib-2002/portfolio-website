import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ux/Button";
import { coreSkills, skillsDescription } from "../constants/skills";
import SkillIcons from "./ui/SkillIcons";

const SkillsShowcase = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = showAllSkills ? coreSkills : coreSkills.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-n-8 py-16 sm:py-20 lg:py-28">
      {/* background blobs */}
      <div className="pointer-events-none absolute -left-1/3 -top-1/3 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-blue-400/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-1/3 -right-1/4 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-[140px]" />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* LEFT — Core Skills */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Core Developer Skills
            </h2>

            <p className="mb-10 max-w-xl text-base text-n-3 sm:text-lg">
              {skillsDescription}
            </p>

            <ul className="space-y-5 sm:space-y-6">
              <AnimatePresence initial={false}>
                {visibleSkills.map((skill) => (
                  <motion.li
                    key={skill.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <h6 className="text-base font-semibold text-white sm:text-lg">
                      {skill.title}
                    </h6>
                    {skill.text && (
                      <p className="mt-1 max-w-lg text-sm text-n-3 sm:text-base">
                        {skill.text}
                      </p>
                    )}
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            {/* Read more */}
            {coreSkills.length > 6 && (
              <button
                onClick={() => setShowAllSkills((prev) => !prev)}
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {showAllSkills ? "Show Less" : "Read More"}
                <span className="block h-[2px] w-0 bg-color-1 transition-all duration-300 group-hover:w-4" />
              </button>
            )}

            <div className="mt-10">
              <Button
                to="/contact"
                className="w-full max-w-xs py-3 text-base font-semibold"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* RIGHT — Skill Icons */}
          {/* RIGHT — Skill Icons */}
          <div className="flex items-start justify-center lg:pt-6">
            <div className="grid w-full max-w-md grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-7 lg:gap-8">
              <SkillIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
