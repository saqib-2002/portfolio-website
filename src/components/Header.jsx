import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

// import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
// import Menu from "../assets/svg/MenuSvg"
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  // toggleNavigation();
  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full border-b border-n-6 backdrop-blur-sm lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <Link to="/" className="block w-[12rem] xl:mr-8" href="#hero">
          Saqib&rsquo;s Portfolio
        </Link>

        <nav
          className={`${openNavigation ? "flex" : "hidden"} fixed bottom-0 left-0 right-0 top-[4.5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div
            className={`relative ${openNavigation ? "w-full bg-black bg-opacity-90" : "bg-transparent"} m-auto flex flex-col items-center justify-center lg:flex-row`}
          >
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`relative block font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-8 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${item.url === pathName.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          Message me
        </a>
        <Button
          className="hidden lg:flex"
          href="https://github.com/Saqib-2002"
          target="_blank"
        >
          GitHub
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-4"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
