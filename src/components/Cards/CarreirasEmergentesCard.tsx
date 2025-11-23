import { GoGraph } from "react-icons/go";
import Botao from "../Botao/Botao";

type Props = {
  primaryAction?: () => void;
  secondaryAction?: () => void;
  className?: string;
};

export default function CarreirasEmergentesCard({ primaryAction, secondaryAction, className = "" }: Props) {
  return (
    <div className={`rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 ${className}`}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
        <GoGraph className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">Carreiras Emergentes</h3>
      <p className="text-gray-500 dark:text-gray-300 mb-6">Acesso a 24 profissões do futuro em 8 áreas diferentes, baseadas em tendências globais.</p>
      <div className="flex flex-wrap gap-3">
        <Botao variante="padrao" tamanho="medio" onClick={primaryAction}>Explorar</Botao>
        <Botao variante="contorno" tamanho="pequeno" onClick={secondaryAction}>Ver lista</Botao>
      </div>
    </div>
  );
}
