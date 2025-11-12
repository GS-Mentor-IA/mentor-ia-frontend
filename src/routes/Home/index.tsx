import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() { 

  useEffect(() => {
    document.title = "Home - Mentor.IA";
  }, []); 

  const navigate = useNavigate();

  const onStart = () => {

    navigate('/'); 
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Descubra sua Carreira do Futuro
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Orientação de carreira personalizada com inteligência artificial. 
          Encontre profissões emergentes alinhadas ao seu perfil e às tendências do mercado.
        </p>
        <button
          onClick={onStart}
          className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          Começar Agora →
        </button>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Personalizado</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Baseado no seu perfil único</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Emergente</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Carreiras do futuro</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">IA Avançada</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Análise inteligente</p>
          </div>
        </div>
      </div>
    </section>
  );
};