import Button from "./Button";
import GifBackGround from "./GifBackGround";
import { useTranslation } from "react-i18next";

export default function DescriptionClient() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950">
      <GifBackGround />

      <div className="relative max-w-4xl text-center space-y-8 z-10">

        {/* HEADLINE */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-[#00FFEA] via-[#4FD1C5] to-indigo-200 bg-clip-text leading-tight">
          {t("client.hero.title")}
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-lg md:text-xl text-indigo-200/80 font-light">
          {t("client.hero.subtitle")}
        </p>

        {/* MICRO PROVA SOCIAL */}
        <p className="text-sm text-indigo-200/60 tracking-wide">
          {t("client.hero.socialProof")}
        </p>

        {/* PREÇO PREMIUM */}
        <div className="inline-block px-6 py-2 rounded-full border border-[#00FFEA]/30 bg-black/40 backdrop-blur-sm">
          <span className="text-[#00FFEA] font-semibold text-lg">
            {t("client.hero.price")}
          </span>
        </div>

        {/* CTA */}
        <div className="pt-4">
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

        {/* MICRO EFEITO DE CONFIANÇA */}
        <p className="text-xs text-indigo-200/40 pt-2">
          {t("client.cta.trust")}
        </p>

      </div>
    </section>
  );
}