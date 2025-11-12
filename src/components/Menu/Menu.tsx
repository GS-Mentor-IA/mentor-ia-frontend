import { Link } from "react-router-dom";
import { useTheme } from "../../types/Tema";

export default function Menu() {
  const { tema, mudarTema } = useTheme();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Teste</Link>
        </li>
      </ul>
      <button
        onClick={mudarTema}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Toggle theme"
      >
        {tema === 'claro' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}