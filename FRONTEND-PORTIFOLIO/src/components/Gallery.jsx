export default function Gallery({ image, Icon, title, description, Buttons, className }) {
  return (
    <div className={`relative flex flex-col p-6 rounded-lg shadow-lg bg-zinc-800 ${className}`} style={{ width: "100%", height: "500px" }}>
      {/* A imagem será o fundo do componente */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={title || "Projeto"}
          className="object-cover w-full h-full opacity-50" // A opacidade pode ser ajustada conforme necessário
        />
      </div>

      {/* Div para título, descrição e botões com fundo semitransparente */}
      <div className="relative z-10 flex flex-col items-start gap-4 p-4 bg-black bg-opacity-50 rounded-lg max-h-full">
        {/* Ícone e Título */}
        <div className="text-2xl">{Icon}</div>
        <h3 className="text-xl font-bold font-mono text-indigo-100">{title}</h3>
        
        {/* Descrição */}
        {description && <p className="text-sm text-gray-200 mt-2">{description}</p>}

        {/* Botões na parte inferior */}
        <div className="flex gap-4 mt-auto">{Buttons}</div>
      </div>
    </div>
  );
}
