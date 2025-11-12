import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Tema = "claro" | "escuro";

interface TemaContextoTipo {
  tema: Tema;
  mudarTema: () => void;
}

const TemaContexto = createContext<TemaContextoTipo | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [tema, setTema] = useState<Tema>(() => {
    if (typeof window === "undefined") {
      return "claro";
    }
    const saved = localStorage.getItem("mentoria-tema");
    if (saved === "claro" || saved === "escuro") {
      return saved;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "escuro"
      : "claro";
  });

  useEffect(() => {
    const root = document.documentElement; 

    root.classList.remove("claro", "escuro");

    root.classList.add(tema);

    localStorage.setItem("mentoria-tema", tema);
  }, [tema]); // Dispara sempre que 'tema' mudar

  const mudarTema = () => {
    setTema((prev) => (prev === "claro" ? "escuro" : "claro"));
  };

  return (
    <TemaContexto.Provider value={{ tema, mudarTema }}>
      {children}
    </TemaContexto.Provider>
  );
}

export function useTheme() {
  const context = useContext(TemaContexto);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return context;
}