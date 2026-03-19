import { useNavigate } from "react-router-dom";

export default function ChoosePath() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-6">
      <div className="max-w-3xl w-full text-center space-y-10">
        {/* Título */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Como posso te ajudar hoje?
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Escolha a opção que melhor representa o que você está buscando.
          </p>
        </div>

        {/* Botões */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => navigate("/empresa")}
            className="group border border-gray-700 rounded-xl p-8 text-left hover:border-blue-500 transition"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              🏢 Sou empresa / recrutador
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quero conhecer suas habilidades técnicas, experiências e projetos
              como desenvolvedor.
            </p>
            <span className="block mt-4 text-blue-500 text-sm font-medium group-hover:underline">
              Acessar portfólio técnico →
            </span>
          </button>

          <button
            onClick={() => navigate("/projetos")}
            className="group border border-gray-700 rounded-xl p-8 text-left hover:border-green-500 transition"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              🚀 Preciso de um site ou projeto
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quero um site profissional, moderno e que gere resultados para meu
              negócio ou projeto.
            </p>
            <span className="block mt-4 text-green-500 text-sm font-medium group-hover:underline">
              Solicitar um projeto →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
