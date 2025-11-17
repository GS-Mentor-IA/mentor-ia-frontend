import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Integrantes() {
  const membros = [
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 flex flex-col items-center py-20 px-4">
      <h1 className="text-4xl font-bold text-sky-700 mb-12 text-center">
        Integrantes do Projeto
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {membros.map((membro, index) => (
          <div key={index}
            className="bg-white shadow-xl rounded-xl p-6 border border-sky-200 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-200">
            
            <img
              src={membro.foto}
              alt={membro.nome}
              className="w-32 h-32 rounded-full object-cover border-4 border-sky-500 shadow-md"
            />

            <h2 className="text-xl font-semibold text-sky-800 mt-4">{membro.nome}</h2>
            <p className="text-sky-600 mt-1">RM: {membro.rm}</p>
            <p className="text-sky-600">Turma: {membro.turma}</p>

            <div className="flex gap-4 mt-4">
              <a
                href={membro.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
              >
                <FaGithub size={20} /> GitHub
              </a>

              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition"
              >
                <FaLinkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
