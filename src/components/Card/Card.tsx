import React from "react";
import { Link, type LinkProps } from "react-router-dom";

type PropsCard = {
  className?: string;
  children?: React.ReactNode;
  to?: LinkProps["to"];
  replace?: LinkProps["replace"];
  target?: LinkProps["target"];
} & React.HTMLAttributes<HTMLElement>;

export default function Card({ className = "", to, children, ...rest }: PropsCard) {
  const classes = [
    "rounded-lg border bg-white text-gray-900",
    "border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} replace={rest.replace as any} target={rest.target as any} className={classes} {...(rest as any)}>
        {children}
      </Link>
    );
  }

  return (
    <div className={classes} {...(rest as any)}>
      {children}
    </div>
  );
}
