import { useTranslation } from "react-i18next";

export default function ProjectCard({ image, Icon, title, description, Buttons, className }) {
  const { t } = useTranslation();

  return (
    <div
      className={`relative flex flex-col rounded-lg overflow-hidden ${className}
      w-full h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px]`}
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={t(title) || "Projeto"}
          className="object-cover w-full h-full opacity-50"
        />
      </div>

      {/* Conteúdo */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-2 p-4 sm:p-5 bg-black/70 rounded-b-lg">
        <div className="text-xl sm:text-2xl text-accent">{Icon}</div>

        <h3 className="text-lg sm:text-xl font-bold font-mono text-white">
          {t(title)}
        </h3>

        {description && (
          <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
            {t(description)}
          </p>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          {Buttons}
        </div>
      </div>
    </div>
  );
}
