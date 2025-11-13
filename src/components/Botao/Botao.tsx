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
  disabled,
  ...rest
}: BotaoProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const varianteClass =
    variante === "padrao"
      ? "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
      : variante === "secundario"
      ? "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white"
      : variante === "contorno"
      ? "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      : "bg-transparent text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800";

  const tamanhoClass =
    tamanho === "pequeno" ? "h-9 px-3 text-sm" : tamanho === "grande" ? "h-12 px-8 text-base" : "h-10 px-4 text-sm";

  const classes = [base, varianteClass, tamanhoClass, className].filter(Boolean).join(" ");

  if (to) {
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
    };

    return (
      <Link
        to={to}
        replace={replace}
        target={target}
        className={classes}
        aria-disabled={disabled}
        onClick={handleClick}
        {...(rest as any)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...(rest as any)}>
      {children}
    </button>
  );
}
