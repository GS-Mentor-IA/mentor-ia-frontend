import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { usarTema } from "../../context/ContextoTema";
import Botao from "../../components/Botao/Botao";
import AnalisePersonalizadaCard from "../../components/Cards/AnalisePersonalizadaCard";
import CarreirasEmergentesCard from "../../components/Cards/CarreirasEmergentesCard";
import RecomendacoesIACard from "../../components/Cards/RecomendacoesIACard";

type EtapaPergunta = "area" | "vocacao" | "situacao" | "resultados" | null;
type AreaCarreira = "tecnologia" | "saude" | "design" | "negocios" | "educacao" | "outra";
type Vocacao = "analitico" | "criativo" | "lideranca" | "tecnico" | "comunicacao" | "outra";
type SituacaoUsuario = "estudante" | "profissional" | "transicao" | "buscando" | "outro";

interface PerfilUsuario {
  area: AreaCarreira | null;
  vocacao: Vocacao | null;
  situacao: SituacaoUsuario | null;
}

function obterRecomendacoesCarreira(perfil: PerfilUsuario): string[] {
  if (!perfil.area && !perfil.vocacao && !perfil.situacao) {
    return ["Explorar áreas", "Responder o questionário"];
  }

  const base: string[] = [];

  if (perfil.area === "tecnologia") base.push("Engenheiro de Machine Learning", "Desenvolvedor Full‑Stack");
  if (perfil.area === "saude") base.push("Especialista em Saúde Digital", "Bioinformata");
  if (perfil.area === "design") base.push("Designer de Experiência", "Motion Designer");
  if (perfil.area === "negocios") base.push("Analista de Dados de Negócios", "Product Manager");
  if (perfil.area === "educacao") base.push("Designer Instrucional", "Especialista em EdTech");
  if (perfil.area === "outra") base.push("Carreira Híbrida", "Consultor");

  if (perfil.vocacao === "criativo") base.unshift("Profissões criativas em alta");
  if (perfil.vocacao === "analitico") base.unshift("Papéis analíticos e de dados");

  return base.length ? base.slice(0, 6) : ["Recomendação genérica A", "Recomendação genérica B"];
}

export default function Home() {
  const { tema } = usarTema();

  useEffect(() => {
    document.title = "Mentor.IA - Descubra sua carreira do futuro";
  }, []);

  const [etapa, setEtapa] = useState<EtapaPergunta>(null);
  const [perfil, setPerfil] = useState<PerfilUsuario>({ area: null, vocacao: null, situacao: null });

  const iniciarQuestionario = () => setEtapa("area");
  const reiniciarQuestionario = () => {
    setPerfil({ area: null, vocacao: null, situacao: null });
    setEtapa(null);
  };

  const manipularSelecaoArea = (area: AreaCarreira) => {
    setPerfil((anterior) => ({ ...anterior, area }));
    setEtapa("vocacao");
  };

  const manipularSelecaoVocacao = (vocacao: Vocacao) => {
    setPerfil((anterior) => ({ ...anterior, vocacao }));
    setEtapa("situacao");
  };

  const manipularSelecaoSituacao = (situacao: SituacaoUsuario) => {
    setPerfil((anterior) => ({ ...anterior, situacao }));
    setEtapa("resultados");
  };

  const scrollToRecursos = () => {
    const el = document.getElementById("recursos");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const recomendacoes = etapa === "resultados" ? obterRecomendacoesCarreira(perfil) : [];

  const bgLight = "linear-gradient(180deg,#eef2ff 0%,#ffffff 100%)";
  const bgDark = "linear-gradient(180deg,#0b1220 0%,#0f1724 100%)";
  const trocaTema = { background: tema === "dark" ? bgDark : bgLight };
  const classeTextoTema = tema === "dark" ? "text-gray-100" : "text-gray-900";

  if (etapa === "area") {
    return (
      <div className={`min-h-screen ${classeTextoTema}`} style={trocaTema}>
        <div className="flex items-start justify-center py-20">
          <div className="w-full max-w-3xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-current">Qual área mais te interessa?</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {(["tecnologia", "saude", "design", "negocios", "educacao", "outra"] as AreaCarreira[]).map((o) => (
                <button
                  key={o}
                  onClick={() => manipularSelecaoArea(o)}
                  className="rounded-md border border-gray-200 dark:border-gray-700 p-3 text-left bg-white dark:bg-gray-800 text-current hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (etapa === "vocacao") {
    return (
      <div className={`min-h-screen ${classeTextoTema}`} style={trocaTema}>
        <div className="flex items-start justify-center py-20">
          <div className="w-full max-w-3xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-current">Que tipo de trabalho você prefere em {perfil.area ?? "sua área"}?</h2>
            <div className="flex flex-wrap gap-3">
              {(["analitico", "criativo", "lideranca", "tecnico", "comunicacao", "outra"] as Vocacao[]).map((o) => (
                <button
                  key={o}
                  onClick={() => manipularSelecaoVocacao(o)}
                  className="rounded-md border border-gray-200 dark:border-gray-700 px-4 py-2 bg-white dark:bg-gray-800 text-current hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (etapa === "situacao") {
    return (
      <div className={`min-h-screen ${classeTextoTema}`} style={trocaTema}>
        <div className="flex items-start justify-center py-20">
          <div className="w-full max-w-3xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-current">Qual sua situação atual?</h2>
            <div className="flex flex-col gap-2">
              {(["estudante", "profissional", "transicao", "buscando", "outro"] as SituacaoUsuario[]).map((o) => (
                <button
                  key={o}
                  onClick={() => manipularSelecaoSituacao(o)}
                  className="rounded-md border border-gray-200 dark:border-gray-700 px-4 py-2 bg-white dark:bg-gray-800 text-current hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (etapa === "resultados") {
    return (
      <div className={`min-h-screen ${classeTextoTema}`} style={trocaTema}>
        <div className="flex items-start justify-center py-20">
          <div className="w-full max-w-3xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-current">Recomendações</h2>
            <p className="mb-4 text-sm text-current/80">
              Perfil selecionado: {perfil.area ?? "—"} / {perfil.vocacao ?? "—"} / {perfil.situacao ?? "—"}
            </p>
            <ul className="mb-6 list-disc pl-5">
              {recomendacoes.map((r, i) => (
                <li key={i} className="mb-2 text-current">{r}</li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Botao variante="contorno" onClick={reiniciarQuestionario}>Refazer</Botao>
              <Botao tamanho="pequeno" onClick={() => alert("Salvar recomendações (mock)")}>Salvar</Botao>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${classeTextoTema}`} style={trocaTema}>
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:border-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            <Sparkles className="h-4 w-4" />
            Orientação de carreira com IA
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-current">
            Descubra sua carreira do futuro
          </h1>

          <p className="text-lg text-current/80 sm:text-xl">
            Plataforma de IA que identifica carreiras emergentes personalizadas para seu perfil, ajudando você a navegar o mercado de trabalho do futuro.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Botao tamanho="grande" onClick={iniciarQuestionario} className="group">
              Começar análise
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Botao>
            <Botao tamanho="grande" variante="contorno" onClick={scrollToRecursos}>
              Saiba mais
            </Botao>
          </div>
        </div>
      </section>

      <section id="recursos" className="container mx-auto px-4 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnalisePersonalizadaCard primaryAction={iniciarQuestionario} secondaryAction={scrollToRecursos} />
          <CarreirasEmergentesCard primaryAction={scrollToRecursos} secondaryAction={() => (window.location.href = "/carreiras")} />
          <RecomendacoesIACard primaryAction={() => setEtapa("resultados")} secondaryAction={() => alert("Como funciona (mock)")} />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-teal-500 p-8 text-white shadow-2xl sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Pronto para descobrir seu futuro?</h2>
            <p className="mb-8 text-lg opacity-90">Responda 3 perguntas simples e receba recomendações personalizadas de carreiras emergentes.</p>
            <Botao tamanho="grande" variante="secundario" onClick={iniciarQuestionario} className="group">
              Iniciar questionário
              <span className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Botao>
          </div>
        </div>
      </section>
    </div>
  );
}
