import { FC } from "react";

interface HeadingProps {
  title?: string;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ className = "", title }) => {
  return (
    <div className={`${className} mx-auto mb-12 max-w-[50rem] lg:mb-20`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
