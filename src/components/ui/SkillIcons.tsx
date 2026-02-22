import { devTools } from "../../constants";

const SkillIcons = () => {
  return (
    <>
      {devTools.map((tool, index) => (
        <div
          key={tool.id}
          className="group relative flex flex-col items-center justify-center rounded-full border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/15"
          style={{
            animation: "fadeUpCard 0.4s ease forwards",
            animationDelay: `${index * 0.08}s`,
            opacity: 0,
          }}
        >
          {/* Subtle glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-pink-500/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30" />

          {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-n-7 shadow-inner transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
            <img
              src={tool.icon}
              alt={tool.title}
              className="h-8 w-8 object-contain sm:h-8 sm:w-8"
            />
          </div>

          {/* Label */}
          <span className="mt-2 text-center text-xs font-medium tracking-wide text-n-2 sm:text-sm">
            {tool.title}
          </span>
        </div>
      ))}

      {/* Keyframes */}
      <style>
        {`
          @keyframes fadeUpCard {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default SkillIcons;
