import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Tema } from "../types/Tema";

interface ContextoTemaProps {
  tema: Tema;
  alternarTema: () => void;
}

const ContextoTema = createContext<ContextoTemaProps | undefined>(undefined);

export function TemaProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>(() => {
    if (typeof window === "undefined") return "light";
    try {
      const temaSalvo = localStorage.getItem("tema") as Tema | null;
      if (temaSalvo === "light" || temaSalvo === "dark") return temaSalvo;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const raiz = document.documentElement;
    raiz.classList.remove("light", "dark");
    raiz.classList.add(tema);
    try {
      localStorage.setItem("tema", tema);
    } catch {
    }
  }, [tema]);

  const alternarTema = () => setTema((prev) => (prev === "light" ? "dark" : "light"));

  return <ContextoTema.Provider value={{ tema, alternarTema }}>{children}</ContextoTema.Provider>;
}

export function usarTema(): ContextoTemaProps {
  const contexto = useContext(ContextoTema);
  if (!contexto) throw new Error("usarTema deve ser usado dentro de TemaProvider");
  return contexto;
}
