
export type Tema = "light" | "dark";

export type AreaCarreira =
  | "Medicina"
  | "Computação"
  | "Engenharias"
  | "Ciências Sociais"
  | "Ciências Ambientais"
  | "Áreas Comerciais"
  | "Wellness"
  | "Psicologia";


export type Vocacao =
  | "liderança"
  | "curiosidade"
  | "criatividade"
  | "análise"
  | "comunicação"
  | "empatia";


export type SituacaoUsuario =
  | "primeiro-emprego"
  | "atualizar-area"
  | "transicionar-area";


export interface Carreira {
  id: string;
  nome: string;
  area: AreaCarreira;
  descricao: string;
  habilidades: string[];
  perspectivafutura: string;
}

export interface PerfilUsuario {
  area: AreaCarreira | null;
  vocacao: Vocacao | null;
  situacao: SituacaoUsuario | null;
}

export interface RecomendacaoCarreira {
  carreira: Carreira;
  pontuacao: number;
  justificativa: string;
}

export type EtapaPergunta = "area" | "vocacao" | "situacao" | "resultados";

export type UsuarioComRecomendacoes = PerfilUsuario & {
  recomendacoes: RecomendacaoCarreira[];
  dataHora: string;
};
export interface MembroEquipe {
  nome: string;
  cargo: string;
  rm: string;
  github?: string;
  linkedin?: string;
}
