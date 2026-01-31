import { useNavigate } from "react-router-dom";
import GifBackGround from "../components/GifBackGround";

export default function HomeSelect() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 px-4">
      <GifBackGround />

      <div className="relative z-10 max-w-3xl w-full text-center bg-black/40 backdrop-blur-md border border-[#00FFEA] rounded-2xl p-8 sm:p-12 shadow-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 bg-clip-text">
          Bem-vindo 👋
        </h1>

        <p className="text-gray-300 mt-6 text-lg">
          Escolha a melhor experiência para você
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          {/* EMPRESA */}
          <button
            onClick={() => navigate("/dev")}
            className="px-8 py-5 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition text-lg font-semibold"
          >
            👨‍💼 Sou empresa / recrutador
          </button>

          {/* CLIENTE */}
          <button
            onClick={() => navigate("/cliente")}
            className="px-8 py-5 rounded-xl border border-green-500 text-green-400 hover:bg-green-500/10 transition text-lg font-semibold"
          >
            💼 Preciso de um projeto
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          Desenvolvido por Ayran Vieira
        </p>
      </div>
    </section>
  );
}
