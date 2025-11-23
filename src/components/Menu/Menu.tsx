import { Link } from "react-router-dom";
import { usarTema } from "../../context/ContextoTema";
import { AiFillSun, AiFillMoon } from "react-icons/ai";

export default function Menu() {
  const { tema, alternarTema } = usarTema();

  return (
    <nav aria-label="Sidebar menu" className="w-full max-w-xs bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold">Navegação</h3>
        <button
          onClick={alternarTema}
          aria-label="Alternar tema"
          className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {tema === "light" ? <AiFillMoon className="h-4 w-4" /> : <AiFillSun className="h-4 w-4" />}
        </button>
      </div>

      <ul className="flex flex-col gap-2">
        <li>
          <Link to="/" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            Início
          </Link>
        </li>
        <li>
          <Link to="/sobre" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/integrantes" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            Integrantes
          </Link>
        </li>
        <li>
          <Link to="/faq" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
