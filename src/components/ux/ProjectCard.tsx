import Arrow from "../../assets/svg/Arrow";

const ProjectCard = ({ item }: { item: Project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-n-7 bg-n-8 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Background Image */}
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-30"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-n-8/60 to-n-8 transition-all duration-500"></div>

      {/* GitHub Status */}
      {item.githubStatus && (
        <span
          className={`absolute right-4 top-4 z-20 inline-block px-3 py-1 text-[10px] font-semibold transition-colors duration-300 ${
            item.githubStatus === "public" ? "text-green-500" : "text-red-400"
          }`}
        >
          {item.githubStatus.toUpperCase()}
        </span>
      )}

      <div className="relative z-10 flex h-full flex-col p-6">
        {item.iconUrl && (
          <img
            src={item.iconUrl}
            alt={`${item.title} icon`}
            className="mb-4 h-10 w-10"
            loading="lazy"
          />
        )}

        <h3 className="mb-3 text-lg font-semibold text-n-1 transition-colors group-hover:text-color-1">
          {item.title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-n-3">{item.text}</p>

        <div className="mt-auto flex items-center justify-between">
          {item.explore && item.githubStatus === "public" && (
            <a
              href={item.explore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${item.title} on GitHub`}
              className="group inline-flex items-center gap-1 text-sm font-semibold text-n-1 transition-colors duration-300 hover:text-color-1"
            >
              <span className="relative">
                GitHub
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-color-1 transition-all duration-300 group-hover:w-full"></span>
              </span>
              <Arrow className="ml-1 fill-current text-n-1 transition-transform duration-300 group-hover:translate-x-2 group-hover:rotate-12 group-hover:text-color-1" />
            </a>
          )}

          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live app: ${item.title}`}
              className="inline-flex items-center text-sm font-medium text-color-1 transition-colors duration-300 hover:text-n-1"
            >
              <span className="relative">
                Go to App
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-color-1 transition-all duration-300 hover:w-full"></span>
              </span>
              <Arrow className="ml-1 fill-current text-n-1 transition-transform duration-300 group-hover:translate-x-2 group-hover:rotate-12 group-hover:text-color-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
