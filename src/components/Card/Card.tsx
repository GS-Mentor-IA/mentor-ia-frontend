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
  const classes = ["rounded-lg border border-border bg-card text-card-foreground", className]
    .filter(Boolean)
    .join(" ");

  if (to) {
    const { onClick, ...linkRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    const handleClick = onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined;

    return (
      <Link to={to} replace={rest.replace as any} target={rest.target as any} className={classes} onClick={handleClick} {...(linkRest as any)}>
        {children}
      </Link>
    );
  }

  return (
    <div className={classes} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  );
}
