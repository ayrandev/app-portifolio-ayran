import Button from "./Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function DescriptionClient() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#061B15] px-6">

      {/* LOGO TOPO */}
      <div className="absolute top-6 left-6 flex items-center gap-3 z-20">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AV Desenvolvimento"
            className="w-14 md:w-20 object-contain transition-transform duration-300 hover:scale-105"
          />

          <span className="text-lg md:text-xl font-semibold text-[#E7E3C9]">
          Soluções Digitais
        </span>
        </Link>
      </div>

      {/* Gradiente base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061B15] via-[#0E3B2E] to-[#061B15]" />

      {/* Luz atmosférica */}
      <div className="absolute w-[900px] h-[900px] bg-[#1C6B55]/20 blur-[220px] rounded-full -top-[300px] -left-[300px]" />
      <div className="absolute w-[700px] h-[700px] bg-[#E7E3C9]/10 blur-[220px] rounded-full -bottom-[300px] -right-[300px]" />

      {/* Grid tecnológico */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:120px_120px]" />

      <div className="relative grid md:grid-cols-2 gap-16 max-w-7xl items-center z-10">

        {/* TEXTO */}
        <div className="space-y-8">

          {/* HEADLINE */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#E7E3C9] leading-tight tracking-tight">
            {t("client.hero.title")}
          </h1>

          {/* SUBTITLE */}
          <p className="text-lg text-[#DCD8B4]/80 max-w-lg leading-relaxed">
            {t("client.hero.subtitle")}
          </p>

          {/* CTA */}
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

          {/* SOCIAL PROOF */}
          <p className="text-sm text-[#DCD8B4]/50">
            {t("client.hero.socialProof")}
          </p>

        </div>

        {/* VISUAL */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

          {/* Browser */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>

          {/* título */}
          <div className="text-sm text-white/70 mb-5 font-medium">
            Soluções digitais
          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="h-24 bg-[#1C6B55]/40 rounded-xl flex items-center justify-center 
            text-sm text-white/90 font-semibold text-center p-3
            hover:bg-[#1C6B55]/60 transition-all duration-300 hover:scale-105">
              Presença digital
            </div>

            <div className="h-24 bg-[#1C6B55]/30 rounded-xl flex items-center justify-center 
            text-sm text-white/90 font-semibold text-center p-3
            hover:bg-[#1C6B55]/50 transition-all duration-300 hover:scale-105">
              Automação inteligente
            </div>

            <div className="h-24 bg-[#1C6B55]/20 rounded-xl flex items-center justify-center 
            text-sm text-white/90 font-semibold text-center p-3
            hover:bg-[#1C6B55]/40 transition-all duration-300 hover:scale-105">
              Experiência moderna
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}