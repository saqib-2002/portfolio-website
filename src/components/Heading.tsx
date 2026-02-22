interface HeadingProps {
  title?: string;
  text?: string;
  className?: string;
}

const Heading = ({ title, text, className = "" }: HeadingProps) => {
  return (
    <div className={`${className} mx-auto mb-8 max-w-[50rem] lg:mb-12`}>
      {title && <h2 className="h2 text-white">{title}</h2>}
      {text && <p className="mt-4 text-base text-n-3 sm:text-lg">{text}</p>}
    </div>
  );
};

export default Heading;
