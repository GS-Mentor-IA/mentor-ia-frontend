import { usarTema } from "../../context/ContextoTema";

export default function Sobre() {
  const { tema } = usarTema();

  const bgLight = "linear-gradient(180deg,#eef2ff 0%,#ffffff 100%)";
  const bgDark = "linear-gradient(180deg,#0b1220 0%,#0f1724 100%)";
  const styleFundo = { background: tema === "dark" ? bgDark : bgLight };

  return (
    <main
      className="min-h-screen w-full py-20 px-6 text-gray-900 dark:text-gray-100"
      style={styleFundo}
    >
      <section className="container mx-auto max-w-4xl space-y-12">

        {/* Título */}
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Sobre o Projeto</h1>
        </header>

        {/* Explicação principal */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold">O que é o Mentor.IA?</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            O Mentor.IA é uma plataforma de orientação vocacional baseada em inteligência artificial, 
            projetada para ajudar pessoas a encontrarem carreiras emergentes alinhadas ao seu perfil. 
            Através de um questionário interativo, o sistema analisa preferências, interesses pessoais 
            e estilo de trabalho para gerar recomendações profissionais que estão em alta no mercado 
            do futuro.
          </p>

          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            O objetivo principal é oferecer clareza e direcionamento em um mundo onde as profissões 
            mudam rapidamente. Ao invés de focar apenas em áreas tradicionais, o Mentor.IA aponta 
            caminhos inovadores e alinhados com tendências tecnológicas, sociais e econômicas.
          </p>

          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            A análise leva em consideração combinações entre área de interesse, tipo de trabalho 
            preferido e situação atual da pessoa, criando resultados personalizados que ajudam no 
            planejamento da carreira, na tomada de decisões e na descoberta de novas possibilidades.
          </p>
        </div>

        {/* Cards de destaques */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 space-y-3">
            <h3 className="text-xl font-semibold">🎯 Propósito</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Ajudar pessoas a enxergarem novas oportunidades profissionais através de análise inteligente e recomendações claras.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 space-y-3">
            <h3 className="text-xl font-semibold">🤖 Como funciona</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A IA interpreta suas respostas, cruza padrões e identifica carreiras emergentes que combinam com você.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 space-y-3">
            <h3 className="text-xl font-semibold">🚀 Benefícios</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Clareza sobre o futuro, direcionamento profissional e descoberta de novas áreas de atuação.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 space-y-3">
            <h3 className="text-xl font-semibold">🌱 Para quem é</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Estudantes, profissionais em transição ou qualquer pessoa que deseja entender melhor seu caminho no futuro do trabalho.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}
