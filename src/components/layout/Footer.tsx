import Social from "../Social";

const Footer = () => {
  return (
    <footer className="bg-n-8/80 py-10 backdrop-blur-md">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Left: Copyright */}
        <p className="caption text-center text-n-4 sm:text-left">
          &copy; {new Date().getFullYear()} Saqib. All rights reserved.
        </p>

        {/* Right: Social icons */}
        <div className="flex gap-6">
          <Social className="text-n-4 transition-colors duration-300 hover:text-color-1" />
        </div>
      </div>

      {/* Optional tagline / small note */}
      <p className="mt-6 text-center text-sm text-n-5 opacity-70">
        Built with passion, React, and Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
