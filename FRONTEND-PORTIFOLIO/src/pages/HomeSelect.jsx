import { useNavigate } from "react-router-dom";
import GifBackGround from "../components/GifBackGround";
import { Briefcase, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";


export default function HomeSelect() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 px-4 overflow-hidden">
      <GifBackGround />

      {/* Seletor de idioma */}
      <LanguageSwitcher />

      {/* Glow decorativo */}
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-1/4 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-3xl w-full text-center bg-black/50 backdrop-blur-xl border border-cyan-400/40 rounded-2xl p-8 sm:p-12 shadow-[0_0_60px_-15px_rgba(0,255,234,0.4)]">

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-cyan-300 via-green-300 to-indigo-200 bg-clip-text drop-shadow">
          {t("home.welcome")}
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          {t("home.subtitle")}
        </p>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">

          {/* CLIENTE */}
          <button
            onClick={() => navigate("/cliente")}
            className="group flex items-center justify-center gap-3 px-8 py-5 rounded-xl 
              bg-gradient-to-r from-green-500/10 to-emerald-500/5 
              border border-green-400/50 text-green-300 
              hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]
              transition-all duration-300 font-semibold text-lg"
          >
            <Briefcase className="w-5 h-5 group-hover:rotate-6 transition" />
            {t("home.client")}
          </button>

          {/* EMPRESA */}
          <button
            onClick={() => navigate("/dev")}
            className="group flex items-center justify-center gap-3 px-8 py-5 rounded-xl 
              bg-gradient-to-r from-blue-500/10 to-indigo-500/5 
              border border-blue-400/50 text-blue-300 
              hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
              transition-all duration-300 font-semibold text-lg"
          >
            <Building2 className="w-5 h-5 group-hover:-rotate-6 transition" />
            {t("home.recruiter")}
          </button>
        </div>

        <p className="text-gray-500 text-xs mt-12 tracking-wide">
          {t("home.footer")} <span className="text-cyan-300">Ayran Vieira</span>
        </p>
      </div>
    </section>
  );
}
