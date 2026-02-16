import { capabilities } from "../../constants";

const Capabilities = ({ className = "" }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <p className="mb-10 text-center text-sm uppercase tracking-widest text-neutral-500">
          What I Focus On
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-white/20 hover:bg-white/10"
            >
              <h4 className="mb-2 text-base font-medium text-white">
                {item.title}
              </h4>
              <p className="text-sm text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
