import { usarTema } from "../../context/ContextoTema";

export default function FAQ() {
  const { tema } = usarTema();

  const bgLight = "linear-gradient(180deg,#e6ecff 0%,#f4f7ff 100%)";
  const bgDark = "linear-gradient(180deg,#0b1220 0%,#0f1724 100%)";

  const styleFundo = {
    background: tema === "dark" ? bgDark : bgLight,
  };

  const faqs = [
    {
      pergunta: "O que é o Mentor.IA?",
      resposta:
        "O Mentor.IA é uma plataforma que utiliza inteligência artificial para analisar seu perfil e recomendar carreiras emergentes.",
    },
    {
      pergunta: "O questionário é difícil?",
      resposta:
        "Não! Ele foi projetado para ser rápido e simples.",
    },
    {
      pergunta: "As recomendações são personalizadas?",
      resposta:
        "Sim. Cada resposta influencia diretamente o resultado final.",
    },
  ];

  return (
    <main
      className="min-h-screen w-full py-20 px-6 text-gray-900 dark:text-gray-100"
      style={styleFundo}
    >
      <section className="container mx-auto max-w-4xl space-y-12">

        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Perguntas Frequentes</h1>

          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Encontre respostas rápidas sobre o Mentor.IA.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.pergunta}</h3>
              <p className="text-gray-700 dark:text-gray-300">{faq.resposta}</p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
