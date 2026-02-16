import { devTools } from "../../constants";
const SkillIcons = () => {
  return (
    <>
      {devTools.map((tool, index) => (
        <div
          key={tool.id}
          className="group relative flex flex-col items-center justify-center rounded-full border border-white/20 bg-white/10 p-4 shadow-md backdrop-blur-md transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl sm:p-5"
          style={{
            animation: `fadeUpCard 0.5s ease forwards`,
            animationDelay: `${index * 0.1}s`,
            opacity: 0,
          }}
        >
          {/* Glow appears only on hover */}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-purple-400 via-pink-400 to-indigo-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"></div>

          {/* Circular icon container */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-n-7 shadow-inner sm:h-14 sm:w-14">
            <img
              src={tool.icon}
              alt={tool.title}
              className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
            />
          </div>

          <span className="sm:text-md mt-2 text-center text-sm font-semibold text-white">
            {tool.title}
          </span>
        </div>
      ))}

      {/* Keyframes for the outer card animation */}
      <style>
        {`
      @keyframes fadeUpCard {
        0% { opacity: 0; transform: translateY(20px) scale(0.9); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
    `}
      </style>
    </>
  );
};

export default SkillIcons;
