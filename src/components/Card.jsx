import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import GradientLight from "./design/GradientLight";
import ClipPath from "../assets/svg/ClipPath";
import Button from "../components/ux/Button";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Link } from "react-router-dom";

const BenefitItem = ({ item }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`benefit-item relative block bg-[length:100%_100%] bg-no-repeat p-0.5 transition-all duration-700 ease-out md:max-w-[24rem] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ backgroundImage: `url(${item.backgroundUrl})` }}
    >
      <div className="pointer-events-none relative z-2 flex min-h-[22rem] flex-col p-[2.4rem]">
        <h5 className="h5 mb-5">{item.title}</h5>
        <p className="body-2 mb-6 text-n-3">{item.text}</p>
        <div className="mt-auto flex items-center">
          <img src={item.iconUrl} alt={item.title} width={48} height={48} />

          <Link
            to={item.explore}
            target="_blank"
            className="pointer-events-auto ml-auto cursor-pointer font-code text-xs font-bold uppercase tracking-wider text-n-1 hover:text-color-1"
          >
            Explore more
          </Link>
          <Arrow />
        </div>
      </div>
      {item.light && <GradientLight />}
      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20 md:hover:opacity-20">
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              width={380}
              height={362}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
      <ClipPath />
    </div>
  );
};

const Card = () => {
  return (
    <Section id="features" crosses>
      <div className="container relative z-2">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Projects that I've made"
        />
        <div className="mb-10 flex flex-wrap gap-9">
          {benefits.map((item) => (
            <BenefitItem key={item.id} item={item} />
          ))}
        </div>
        <Button className="">Explore more on Github</Button>
      </div>
    </Section>
  );
};

export default Card;
