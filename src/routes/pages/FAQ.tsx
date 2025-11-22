import { usarTema } from "../../context/ContextoTema";

export default function FAQ() {
  const { tema } = usarTema();

  const bgLight = "linear-gradient(180deg,#eef2ff 0%,#ffffff 100%)";
  const bgDark = "linear-gradient(180deg,#0b1220 0%,#0f1724 100%)";
  const styleFundo = { background: tema === "dark" ? bgDark : bgLight };

  const faqs = [
    {
      pergunta: "O que é o Mentor.IA?",
      resposta:
        "O Mentor.IA é uma plataforma que utiliza inteligência artificial para analisar seu perfil e recomendar carreiras emergentes alinhadas às suas características pessoais e profissionais.",
    },
    {
      pergunta: "Como o sistema descobre uma carreira ideal para mim?",
      resposta:
        "Através de um questionário simples, suas respostas são interpretadas pela IA, que identifica padrões e cruza essas informações com tendências do mercado para sugerir novas oportunidades profissionais.",
    },
    {
      pergunta: "O questionário é difícil de responder?",
      resposta:
        "Não. Ele foi projetado para ser rápido e intuitivo, permitindo que qualquer pessoa consiga responder com naturalidade em poucos minutos.",
    },
    {
      pergunta: "As recomendações são realmente personalizadas?",
      resposta:
        "Sim. Cada resposta influencia diretamente os resultados, garantindo sugestões únicas e compatíveis com sua área de interesse, vocação e momento de vida.",
    },
    {
      pergunta: "Para quem o Mentor.IA é recomendado?",
      resposta:
        "Para estudantes, profissionais em transição, pessoas buscando novos horizontes e qualquer um que queira entender melhor seu futuro no mercado de trabalho.",
    },
    {
      pergunta: "A plataforma ajuda a entender tendências do futuro?",
      resposta:
        "Sim. O foco principal é justamente apresentar carreiras emergentes e profissões do futuro com base nas transformações da sociedade e da tecnologia.",
    },
  ];

  return (
    <main
      className="min-h-screen w-full py-20 px-6 text-gray-900 dark:text-gray-100"
      style={styleFundo}
    >
      <section className="container mx-auto max-w-4xl space-y-12">
        
        {/* Cabeçalho */}
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Perguntas Frequentes</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Encontre respostas rápidas sobre como o Mentor.IA pode ajudar na sua jornada profissional.
          </p>
        </header>

        {/* Lista de perguntas */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.pergunta}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.resposta}</p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
