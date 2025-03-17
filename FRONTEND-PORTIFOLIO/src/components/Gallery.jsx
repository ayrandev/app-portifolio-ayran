export default function Gallery({ image, Icon, title, description, Buttons, className }) {
  return (
    <div className={`relative flex flex-col rounded-lg shadow-lg bg-zinc-800 overflow-hidden ${className}`} style={{ width: "100%", height: "500px" }}>
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={title || "Projeto"}
          className="object-cover w-full h-full opacity-50"
        />
      </div>

      {/* Conteúdo na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-start gap-2 p-4 bg-black bg-opacity-70 rounded-b-lg">
        <div className="text-2xl">{Icon}</div>
        <h3 className="text-xl font-bold font-mono text-indigo-100">{title}</h3>
        {description && <p className="text-sm text-gray-200">{description}</p>}
        <div className="flex gap-4 pb-4">{Buttons}</div>
      </div>
    </div>
  );
}
