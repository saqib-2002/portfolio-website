import Heading from "../Heading";
import Button from "../ux/Button";

export interface FeaturedProjectProps {
  badge?: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  statusText?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export default function FeaturedProject({
  badge = "Featured Project",
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  imageUrl,
  statusText = "Actively maintained · Open source",
  metrics = [],
}: FeaturedProjectProps) {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-n-7 bg-n-8/80 p-10 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.2),0_20px_60px_-20px_rgba(99,102,241,0.45)]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90" />

      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* LEFT — content */}
        <div className="space-y-7">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-medium tracking-wide text-indigo-400">
            ✨ {badge}
          </div>

          {/* title */}
          <Heading
            title={title}
            className="text-left text-3xl font-semibold tracking-tight text-white"
          />

          {/* description */}
          <p className="max-w-xl text-base leading-relaxed text-n-3">
            {description}
          </p>

          {metrics.length > 0 && (
            <div className="flex flex-wrap gap-5 pt-1">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-n-4">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}
          {/* tech stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-n-6 bg-n-7/80 px-3 py-1 text-xs font-medium text-n-3 transition-colors hover:border-indigo-500/40 hover:text-indigo-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* status */}
          {statusText && <p className="text-xs text-n-4">{statusText}</p>}
        </div>

        {/* RIGHT — preview + actions */}
        <div className="space-y-6">
          {/* image */}
          {imageUrl && (
            <div className="relative overflow-hidden rounded-2xl border border-n-7 bg-n-9">
              <img
                src={imageUrl}
                alt={`${title} preview`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-n-9/70 via-n-9/20 to-transparent" />
            </div>
          )}

          {/* actions */}
          <div className="flex flex-wrap items-center gap-4">
            {liveUrl && (
              <Button to={liveUrl} target="_blank">
                Live Demo →
              </Button>
            )}

            {githubUrl && (
              <Button
                to={githubUrl}
                target="_blank"
                // variant="ghost"
                className="text-n-3 hover:text-white"
              >
                View on GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
