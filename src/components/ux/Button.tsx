import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

type ButtonProps = {
  className?: string;
  to?: string; // internal route
  href?: string; // external link
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
  target?: string;
};

const MotionButton = motion.button;
const MotionLink = motion(Link);
const MotionAnchor = motion.a;

export default function Button({
  className = "",
  to,
  href,
  onClick,
  children,
  px = "px-7",
  white = false,
  target,
}: ButtonProps) {
  const classes = `relative inline-flex items-center justify-center h-11 ${px} transition-colors ${
    white ? "text-n-8" : "text-n-1"
  } ${className}`;

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 350, damping: 22 },
  };

  if (href) {
    return (
      <MotionAnchor
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        {...motionProps}
      >
        {children}
      </MotionAnchor>
    );
  }

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton onClick={onClick} className={classes} {...motionProps}>
      {children}
    </MotionButton>
  );
}
