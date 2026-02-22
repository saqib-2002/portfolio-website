import Heading from "../components/Heading";
import Button from "../components/ux/Button";

import { services, processSteps, outcomes } from "../constants/what-i-di";

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="relative py-20 sm:py-28">
      <div className="container relative z-10">
        {/* Header */}
        <Heading
          title="What I Do"
          className="mx-auto mb-6 text-center md:max-w-xl"
        />

        <p className="mx-auto mb-16 max-w-2xl text-center text-base text-n-3 sm:text-lg">
          I help founders, teams, and businesses build modern, scalable web
          products with a strong focus on performance, usability, and clean
          architecture.
        </p>
        <p className="mb-6 text-center">
          <span className="inline-block rounded-full border border-white/10 px-4 py-1 text-xs font-medium text-neutral-400">
            Available for full-time roles, collaborations, and impactful
            products.
          </span>
        </p>

        {/* Services */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20"
            >
              <span className="mb-3 block h-1 w-10 rounded-full bg-color-1/70" />

              <h3 className="mb-3 text-lg font-semibold text-white">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-n-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-n-2">
            {outcomes.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-color-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Process */}
        <div className="mt-24">
          <h3 className="mb-10 text-center text-2xl font-semibold text-white">
            How I Work
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <span className="mb-3 block text-sm font-medium text-color-1">
                  {item.step}
                </span>
                <h4 className="mb-2 text-base font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-n-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mb-8 mt-16 text-center text-sm font-medium text-color-1">
          Currently open to full-time roles and long-term product
          collaborations.
        </p>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button to="/projects" variant="outline">
            View Selected Work
          </Button>

          <Button to="/contact">Start a Conversation</Button>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
