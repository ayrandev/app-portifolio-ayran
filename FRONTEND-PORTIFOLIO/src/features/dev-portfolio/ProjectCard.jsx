import { useTranslation } from "react-i18next";

export default function ProjectCard({ image, Icon, title, description, stack, domain, Buttons, className }) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col rounded-lg overflow-hidden border border-line bg-surface w-full h-full ${className || ""}`}
    >
      {/* Imagem + barra de navegador */}
      <div className="relative h-40 sm:h-48 shrink-0">
        <img
          src={image}
          alt={t(title) || "Projeto"}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {domain && (
          <div className="absolute top-0 inset-x-0 flex items-center gap-1.5 px-3 h-7 bg-black/70 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-400/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
            <span className="w-2 h-2 rounded-full bg-green-400/80" />
            <span className="ml-2 text-[10px] font-mono text-white/70 truncate">{domain}</span>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-2 p-4 sm:p-5 flex-1">
        {Icon && <div className="text-xl sm:text-2xl text-accent">{Icon}</div>}

        <h3 className="text-lg sm:text-xl font-bold font-mono text-ink">
          {t(title)}
        </h3>

        {description && (
          <p className="text-sm text-subtle leading-relaxed">
            {t(description)}
          </p>
        )}

        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 rounded px-1.5 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-2 mt-auto">
          {Buttons}
        </div>
      </div>
    </div>
  );
}
