import Button from "./Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import TechBackground from "./TechBackGround";
import logo from "../assets/logo.jpeg";

export default function DescriptionClient() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* LOGO */}
      <div className="absolute top-6 left-6 flex items-center gap-3 z-20">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AV Desenvolvimento"
            className="w-14 md:w-20 object-contain hover:scale-105 transition"
          />
          <span className="text-lg md:text-xl font-semibold text-[#E7E3C9]">
            Soluções Digitais
          </span>
        </Link>
      </div>

      <div className="relative grid md:grid-cols-2 gap-16 max-w-7xl items-center z-10">

        {/* TEXTO */}
        <div className="space-y-8">

          <h1 className="text-4xl md:text-6xl font-bold text-[#E7E3C9] leading-tight">
            {t("client.hero.title")}
          </h1>

          <p className="text-lg text-[#DCD8B4]/80 max-w-lg leading-relaxed">
            {t("client.hero.subtitle")}
          </p>

          <div className="flex gap-4 pt-2">
            <Button
              name={t("client.cta.button")}
              onClick={() =>
                window.open(
                  "https://wa.me/5585985398517?text=Olá! Gostaria de solicitar um orçamento para um site.",
                  "_blank"
                )
              }
            />
          </div>

          <p className="text-sm text-[#DCD8B4]/50">
            {t("client.hero.socialProof")}
          </p>

        </div>

        {/* VISUAL */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>

          <div className="text-sm text-white/70 mb-5 font-medium">
            Soluções digitais
          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="h-24 bg-[#1C6B55]/40 rounded-xl flex items-center justify-center text-sm text-white font-semibold text-center p-3 hover:scale-105 transition">
              Presença digital
            </div>

            <div className="h-24 bg-[#1C6B55]/30 rounded-xl flex items-center justify-center text-sm text-white font-semibold text-center p-3 hover:scale-105 transition">
              Automação inteligente
            </div>

            <div className="h-24 bg-[#1C6B55]/20 rounded-xl flex items-center justify-center text-sm text-white font-semibold text-center p-3 hover:scale-105 transition">
              Experiência moderna
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}