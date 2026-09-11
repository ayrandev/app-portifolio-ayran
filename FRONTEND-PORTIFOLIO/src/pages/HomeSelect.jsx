import { useNavigate } from "react-router-dom";
import { Briefcase, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import GifBackground from "../components/ui/GifBackground";
import LanguageSwitcher from "../components/ui/LanguageSwitcher";
import ThemeToggle from "../theme/ThemeToggle";

export default function HomeSelect() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-canvas px-4 overflow-hidden">
      <GifBackground />

      {/* Seletor de idioma + tema */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-3">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {/* Glow decorativo */}
      <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl top-1/4 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-3xl w-full text-center bg-surface/70 backdrop-blur-xl border border-line rounded-2xl p-8 sm:p-12">

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">
          {t("home.welcome")}
        </h1>

        <p className="text-subtle mt-4 text-lg">
          {t("home.subtitle")}
        </p>

        <div className="mt-10 h-px w-full bg-line" />

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">

          {/* CLIENTE */}
          <button
            onClick={() => navigate("/cliente")}
            className="group flex items-center justify-center gap-3 px-8 py-5 rounded-xl
              bg-surface border border-line text-ink
              hover:border-accent hover:text-accent hover:scale-105
              transition-all duration-300 font-semibold text-lg"
          >
            <Briefcase className="w-5 h-5 group-hover:rotate-6 transition" />
            {t("home.client")}
          </button>

          {/* EMPRESA */}
          <button
            onClick={() => navigate("/dev")}
            className="group flex items-center justify-center gap-3 px-8 py-5 rounded-xl
              bg-accent text-black border border-accent
              hover:brightness-110 hover:scale-105
              transition-all duration-300 font-semibold text-lg"
          >
            <Building2 className="w-5 h-5 group-hover:-rotate-6 transition" />
            {t("home.recruiter")}
          </button>
        </div>

        <p className="text-subtle text-xs mt-12 tracking-wide">
          {t("home.footer")} <span className="text-accent">Ayran Vieira</span>
        </p>
      </div>
    </section>
  );
}
