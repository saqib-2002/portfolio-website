import Social from "../benefitsCards/Social";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
        <p className="caption text-n-4 lg:block">
          &copy;{new Date().getFullYear()}. All rights reserved.
        </p>
        <Social />
      </div>
    </Section>
  );
};

export default Footer;
