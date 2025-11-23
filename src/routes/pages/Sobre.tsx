import { usarTema } from "../../context/ContextoTema";


export default function Sobre() {
  const { tema } = usarTema();

  const bgLight = "linear-gradient(180deg,#e6ecff 0%,#f4f7ff 100%)";
  const bgDark = "linear-gradient(180deg,#0b1220 0%,#0f1724 100%)";

  const styleFundo = {
    background: tema === "dark" ? bgDark : bgLight,
  };

  return (
    <main
      className="min-h-screen w-full py-20 px-6 text-gray-900 dark:text-gray-100"
      style={styleFundo}
    >
      <section className="container mx-auto max-w-4xl space-y-12">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Sobre o Projeto</h1>

          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Uma plataforma moderna que utiliza inteligência artificial para ajudar pessoas
            a descobrirem novas oportunidades profissionais no futuro.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg p-6 space-y-3">
            <h3 className="text-xl font-semibold">🎯 Propósito</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Ajudar pessoas a enxergarem novas oportunidades profissionais através de IA.
            </p>
          </div>

          <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg p-6 space-y-3">
            <h3 className="text-xl font-semibold">🤖 Como funciona</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Suas respostas são interpretadas pela IA, que cruza seu perfil com tendências do
              mercado para recomendar carreiras emergentes.
            </p>
          </div>

          <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg p-6 space-y-3">
            <h3 className="text-xl font-semibold">🚀 Benefícios</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Direcionamento profissional claro e descobertas de novas possibilidades.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}