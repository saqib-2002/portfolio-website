// import { render } from "react-dom";
import { Link } from "react-router-dom";
import ButtonSvg from "../assets/svg/ButtonSvg.jsx";

const Button = ({ className, link, onClick, children, px, white, target }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <Link to={link} className={classes} target={target}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </Link>
  );
  return link ? renderLink() : renderButton();
};

export default Button;
