import { Link } from "react-router-dom";
import React from "react";

type ButtonProps = {
  className?: string;
  to?: string; // internal route
  href?: string; // external link
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  px?: string;
  target?: string;
};

export default function Button({
  className = "",
  to,
  href,
  onClick,
  children,
  px = "px-8",
  target,
}: ButtonProps) {
  const classes = `
    relative inline-flex items-center justify-center
    h-12 ${px} rounded-full
    font-medium text-sm
    text-white
    bg-white/10 backdrop-blur-lg
    border border-white/20
    shadow-lg
    overflow-hidden
    transition-all duration-300 ease-out
    transform-gpu
    hover:scale-105 hover:bg-white/20
    hover:shadow-xl
    before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-white/20 before:via-white/10 before:to-white/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-30
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
