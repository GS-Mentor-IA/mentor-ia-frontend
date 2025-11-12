import { useState } from 'react';
import { useTheme } from '../../types/Tema'; 

export default function Cabecalho() {
  const { tema, mudarTema } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
            Mentor.IA
          </h1>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={mudarTema}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle theme"
            >
              {tema === 'claro' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              aria-label="Menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}