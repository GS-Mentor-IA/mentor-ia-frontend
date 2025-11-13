import { IoMenu } from "react-icons/io5";
import { AiFillSun, AiFillMoon } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { usarTema } from "../../context/ContextoTema";
import Botao from "../Botao/Botao";

export default function Cabecalho() {
  const { tema, alternarTema } = usarTema();
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuAberto(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAberto(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/mentoria-logo.png" alt="Mentor.IA logo" className="items-left w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" to="/sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" to="/integrantes">
                Integrantes
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Actions: mobile menu button and theme toggle */}
        <div className="flex items-center gap-2">
          <Botao
            variante="fantasma"
            onClick={() => setMenuAberto((s) => !s)}
            className="rounded-full md:hidden h-10 w-10 p-0"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
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

      {/* Mobile nav */}
      {menuAberto && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur"
        >
          <ul className="container mx-auto flex flex-col gap-3 p-4">
            <li>
              <Link onClick={() => setMenuAberto(false)} className="block text-base font-medium text-gray-700 dark:text-gray-200" to="/">
                Início
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuAberto(false)} className="block text-base font-medium text-gray-700 dark:text-gray-200" to="/sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuAberto(false)} className="block text-base font-medium text-gray-700 dark:text-gray-200" to="/integrantes">
                Integrantes
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuAberto(false)} className="block text-base font-medium text-gray-700 dark:text-gray-200" to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
