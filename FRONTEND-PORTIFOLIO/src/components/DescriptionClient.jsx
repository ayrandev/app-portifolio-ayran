import Button from "./Button";
import GifBackGround from "./GifBackGround";
import { useTranslation } from "react-i18next";

export default function DescriptionClient() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950">
      <GifBackGround />

      <div className="relative max-w-5xl text-center space-y-10 z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-[#00FFEA] via-[#4FD1C5] to-indigo-200 bg-clip-text">
          {t("client.hero.title")}
        </h1>

        <p className="text-indigo-200/90 text-base md:text-lg max-w-3xl mx-auto">
          {t("client.hero.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {["professional", "responsive", "performance"].map((key) => (
            <div
              key={key}
              className="bg-black/40 backdrop-blur-md border border-[#00FFEA]/20 rounded-2xl p-6"
            >
              <h3 className="text-white font-semibold text-lg mb-3">
                {t(`client.benefits.${key}.title`)}
              </h3>
              <p className="text-indigo-200/80 text-sm">
                {t(`client.benefits.${key}.text`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3">
          <Button
            name={t("client.cta.button")}
            onClick={() =>
              window.open(
                "https://wa.me/5585985398517?text=Olá! Gostaria de solicitar um orçamento para um site.",
                "_blank"
              )
            }
          />

          <span className="text-xs text-indigo-200/60">
            {t("client.cta.helper")}
          </span>
        </div>
      </div>
    </section>
  );
}
