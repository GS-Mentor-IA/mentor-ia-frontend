import { useState } from "react";
import { ArrowRight, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import Botao from "../../components/Botao/Botao";
import Card from "../../components/Card/Card";

// alguem coloca as perguntas e fluxo depois que o banco estiver pronto
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

function PerguntaArea({ aoSelecionar }: { aoSelecionar: (a: AreaCarreira) => void }) {
  const opcoes: AreaCarreira[] = ["tecnologia", "saude", "design", "negocios", "educacao", "outra"];
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Qual área mais te interessa?</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {opcoes.map((o) => (
          <button
            key={o}
            onClick={() => aoSelecionar(o)}
            className="rounded-md border p-3 text-left hover:bg-accent transition"
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function PerguntaVocacao({
  aoSelecionar,
  areaSelecionada,
}: {
  aoSelecionar: (v: Vocacao) => void;
  areaSelecionada: AreaCarreira;
}) {
  const opcoes: Vocacao[] = ["analitico", "criativo", "lideranca", "tecnico", "comunicacao", "outra"];
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Que tipo de trabalho você prefere em {areaSelecionada}?</h2>
      <div className="flex flex-wrap gap-3">
        {opcoes.map((o) => (
          <button key={o} onClick={() => aoSelecionar(o)} className="rounded-md border px-4 py-2 hover:bg-accent transition">
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function PerguntaSituacao({ aoSelecionar }: { aoSelecionar: (s: SituacaoUsuario) => void }) {
  const opcoes: SituacaoUsuario[] = ["estudante", "profissional", "transicao", "buscando", "outro"];
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Qual sua situação atual?</h2>
      <div className="flex flex-col gap-2">
        {opcoes.map((o) => (
          <button key={o} onClick={() => aoSelecionar(o)} className="rounded-md border px-4 py-2 hover:bg-accent transition">
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Resultados({
  recomendacoes,
  perfil,
  aoReiniciar,
}: {
  recomendacoes: string[];
  perfil: PerfilUsuario;
  aoReiniciar: () => void;
}) {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Recomendações</h2>
      <p className="mb-4 text-sm text-muted-foreground">Perfil selecionado: {perfil.area ?? "—"} / {perfil.vocacao ?? "—"} / {perfil.situacao ?? "—"}</p>
      <ul className="mb-6 list-disc pl-5">
        {recomendacoes.map((r, i) => (
          <li key={i} className="mb-2">{r}</li>
        ))}
      </ul>
      <div className="flex gap-3">
        <Botao variante="contorno" onClick={aoReiniciar}>Refazer</Botao>
        <Botao tamanho="pequeno" onClick={() => alert("Salvar recomendações (mock)")}>Salvar</Botao>
      </div>
    </div>
  );
}

export default function Inicio() {
  const [etapa, setEtapa] = useState<EtapaPergunta>(null);
  const [perfil, setPerfil] = useState<PerfilUsuario>({
    area: null,
    vocacao: null,
    situacao: null,
  });

  const iniciarQuestionario = () => setEtapa("area");

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

  const reiniciarQuestionario = () => {
    setPerfil({ area: null, vocacao: null, situacao: null });
    setEtapa(null);
  };

  const recomendacoes = etapa === "resultados" ? obterRecomendacoesCarreira(perfil) : [];

  if (etapa === "area") {
    return <PerguntaArea aoSelecionar={manipularSelecaoArea} />;
  }

  if (etapa === "vocacao") {
    return <PerguntaVocacao aoSelecionar={manipularSelecaoVocacao} areaSelecionada={perfil.area ?? "tecnologia"} />;
  }

  if (etapa === "situacao") {
    return <PerguntaSituacao aoSelecionar={manipularSelecaoSituacao} />;
  }

  if (etapa === "resultados") {
    return <Resultados recomendacoes={recomendacoes} perfil={perfil} aoReiniciar={reiniciarQuestionario} />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Orientação de carreira com IA
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Descubra sua carreira do futuro
          </h1>

          <p className="text-lg text-muted-foreground sm:text-xl">
            Plataforma de IA que identifica carreiras emergentes personalizadas para seu perfil, ajudando você a navegar o mercado de trabalho do futuro.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Botao tamanho="grande" onClick={iniciarQuestionario} className="group">
              Começar análise
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Botao>
            <Botao tamanho="grande" variante="contorno" to="#recursos">
              Saiba mais
            </Botao>
          </div>
        </div>
      </section>

      <section id="recursos" className="container mx-auto px-4 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 shadow-soft transition-all hover:shadow-medium">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Análise Personalizada</h3>
            <p className="text-muted-foreground">Questionário inteligente que identifica suas vocações e preferências de carreira.</p>
          </Card>

          <Card className="p-6 shadow-soft transition-all hover:shadow-medium">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Carreiras Emergentes</h3>
            <p className="text-muted-foreground">Acesso a 24 profissões do futuro em 8 áreas diferentes, baseadas em tendências globais.</p>
          </Card>

          <Card className="p-6 shadow-soft transition-all hover:shadow-medium">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Recomendações IA</h3>
            <p className="text-muted-foreground">Algoritmo de matching que sugere as 3 melhores carreiras para seu perfil único.</p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <Card className="overflow-hidden bg-gradient-primary p-8 text-primary-foreground shadow-strong sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Pronto para descobrir seu futuro?</h2>
            <p className="mb-8 text-lg opacity-90">Responda 3 perguntas simples e receba recomendações personalizadas de carreiras emergentes.</p>
            <Botao tamanho="grande" variante="secundario" onClick={iniciarQuestionario} className="group">
              Iniciar questionário
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Botao>
          </div>
        </Card>
      </section>
    </div>
  );
}
