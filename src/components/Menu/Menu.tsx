import { Link } from "react-router-dom";
import { usarTema } from "../../context/ContextoTema";

export default function Menu() {
  const { tema, alternarTema } = usarTema();

  return (
    <nav className="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
      <ul>
        <li>
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Teste
          </Link>
        </li>
      </ul>

      <button
        onClick={alternarTema}
        className="mt-4 p-2 rounded-lg bg-gray-200 text-black dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Alternar tema"
      >
        {tema === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}
