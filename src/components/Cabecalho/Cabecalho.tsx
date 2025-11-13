import { IoMenu } from "react-icons/io5";
import { AiFillSun, AiFillMoon } from "react-icons/ai";
import { useState } from "react";
import { usarTema } from "../../context/ContextoTema";
import Botao from "../Botao/Botao";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  const { tema, alternarTema } = usarTema();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">Mentor.IA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">Início</Link>
          <Link to="/sobre" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">Sobre</Link>
          <Link to="/integrantes" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">Integrantes</Link>
          <Link to="/faq" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">FAQ</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Botao
            variante="fantasma"
            onClick={() => setMenuAberto((s) => !s)}
            className="rounded-full md:hidden h-10 w-10 p-0"
            aria-label="Menu"
          >
            <IoMenu className="h-5 w-5" />
          </Botao>

          <Botao
            variante="fantasma"
            onClick={alternarTema}
            className="rounded-full h-10 w-10 p-0"
            aria-label="Alternar tema"
          >
            {tema === "light" ? <AiFillMoon className="h-5 w-5" /> : <AiFillSun className="h-5 w-5" />}
          </Botao>
        </div>
      </div>

      {menuAberto && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <Link to="/" onClick={() => setMenuAberto(false)} className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">Início</Link>
            <Link to="/sobre" onClick={() => setMenuAberto(false)} className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">Sobre</Link>
            <Link to="/integrantes" onClick={() => setMenuAberto(false)} className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">Integrantes</Link>
            <Link to="/faq" onClick={() => setMenuAberto(false)} className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">FAQ</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
