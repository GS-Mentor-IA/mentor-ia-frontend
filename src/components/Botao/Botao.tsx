import React from "react";
import { Link, type LinkProps } from "react-router-dom";

type Variante = "padrao" | "secundario" | "contorno" | "fantasma";
type Tamanho = "pequeno" | "medio" | "grande";

export interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: Variante;
  tamanho?: Tamanho;
  to?: LinkProps["to"];
  replace?: LinkProps["replace"];
  target?: LinkProps["target"];
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<any>;
  disabled?: boolean;
}

export default function Botao({
  variante = "padrao",
  tamanho = "medio",
  className = "",
  to,
  replace,
  target,
  children,
  onClick,
  disabled,
  ...rest
}: BotaoProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const varianteClass =
    variante === "padrao"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : variante === "secundario"
      ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      : variante === "contorno"
      ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      : "hover:bg-accent hover:text-accent-foreground";

  const tamanhoClass =
    tamanho === "pequeno" ? "h-9 px-3 text-sm" : tamanho === "grande" ? "h-12 px-8 text-base" : "h-10 px-4 text-sm";

  const classes = [base, varianteClass, tamanhoClass, className].filter(Boolean).join(" ");

  if (to) {
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) onClick(e);
    };

    return (
      <Link to={to} replace={replace} target={target} className={classes} aria-disabled={disabled} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick as React.MouseEventHandler<HTMLButtonElement>} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
