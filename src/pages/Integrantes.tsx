import { FaGithub, FaLinkedin } from "react-icons/fa";
import Botao from "../components/Botao/Botao";
import { usarTema } from "../context/ContextoTema";

interface Membro {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
}

const membros: Membro[] = [
  {
    nome: "Eduardo Novaes Mollo",
    rm: "561515",
    turma: "1TDSPJ",
    foto: "/integrantes/enm.jpg",
    github: "https://github.com/EduMollo",
    linkedin: "https://www.linkedin.com/in/edumollo",
  },
  {
    nome: "João Henrique Batista Leal",
    rm: "564361",
    turma: "1TDSPJ",
    foto: "/integrantes/jhbl.jpg",
    github: "https://github.com/JoaoHBatistaLeal",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-leal-8ba769307/",
  },
  {
    nome: "Pedro Henrique Lacerda Ferraz",
    rm: "563062",
    turma: "1TDSPJ",
    foto: "/integrantes/phlf.jpg",
    github: "https://github.com/ph3103",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-285397367/",
  },
];

export default function Integrantes() {
  const { tema } = usarTema();

  const bgLight = "linear-gradient(180deg,#eef2ff 0%,#ffffff 100%)";
  const bgDark = "linear-gradient(180deg,#0b1220 0%,#0f1724 100%)";
  const styleFundo = { background: tema === "dark" ? bgDark : bgLight };

  return (
    <main
      className="min-h-screen w-full py-20 px-6 text-gray-900 dark:text-gray-100"
      style={styleFundo}
    >
      <section className="container mx-auto max-w-6xl space-y-12">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Integrantes do Projeto</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Conheça a equipe responsável pelo desenvolvimento da plataforma Mentor.IA.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {membros.map((membro) => (
            <div
              key={membro.rm}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-medium p-6 flex flex-col items-center text-center"
            >
              <img
                src={membro.foto}
                alt={membro.nome}
                className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 shadow-lg mb-4"
              />

              <h2 className="text-lg font-semibold">{membro.nome}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">RM: {membro.rm}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Turma: {membro.turma}</p>

              <div className="flex gap-3 mt-6">
                <Botao
                  variante="contorno"
                  tamanho="pequeno"
                  to={membro.github}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="h-4 w-4" /> GitHub
                </Botao>

                <Botao
                  variante="padrao"
                  tamanho="pequeno"
                  to={membro.linkedin}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin className="h-4 w-4" /> LinkedIn
                </Botao>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
