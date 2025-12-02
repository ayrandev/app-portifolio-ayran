export default function Gallery({ image, Icon, title, description, Buttons, className }) {
  return (
    <div
      className={`relative flex flex-col rounded-lg shadow-lg bg-zinc-800 overflow-hidden ${className}
      w-full h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px]`}
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={title || "Projeto"}
          className="object-cover w-full h-full opacity-50"
        />
      </div>

      {/* Conteúdo na parte inferior */}
      <div
        className="
          absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-2
          p-4 sm:p-5
          bg-black/70 rounded-b-lg
        "
      >
        {/* Ícone */}
        <div className="text-xl sm:text-2xl">{Icon}</div>

        {/* Título */}
        <h3 className="text-lg sm:text-xl font-bold font-mono text-indigo-100">
          {title}
        </h3>

        {/* Descrição */}
        {description && (
          <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
            {description}
          </p>
        )}

        {/* Botões */}
        <div className="flex flex-wrap gap-3 pt-2">
          {Buttons}
        </div>
      </div>
    </div>
  );
}
