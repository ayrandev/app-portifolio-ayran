import React from "react";

const Cards = ({
  title,
  description,
  solution,
  benefits,
  className,
  image,
  Icon,
  Buttons,
}) => {
  return (
    <div
      className={`
        group relative w-full h-[340px] overflow-hidden rounded-2xl
        border border-white/10 bg-white/5 backdrop-blur-sm
        hover:border-[#00D1A0]
        transition-all duration-300
        ${className}
      `}
    >
      {/* IMAGEM */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover 
        group-hover:scale-110 transition duration-500"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* CONTEÚDO PADRÃO */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 transition-all duration-300 group-hover:opacity-0">
        <div className="flex items-center gap-2 mb-2 text-[#00D1A0]">
          {Icon}
        </div>

        <h3 className="title-font text-xl text-white font-semibold">
          {title}
        </h3>
      </div>

      {/* CONTEÚDO HOVER */}
      <div
        className="
        absolute inset-0 z-20
        flex flex-col justify-center items-center text-center p-6
        bg-black/80 backdrop-blur-md
        opacity-0 group-hover:opacity-100
        transition duration-300
      "
      >
        <h3 className="title-font text-xl text-white mb-3">
          {title}
        </h3>

        {/* PROBLEMA */}
        <p className="text-xs text-red-400 mb-2">
          {description}
        </p>

        {/* SOLUÇÃO */}
        <p className="text-xs text-[#00D1A0] mb-3">
          {solution}
        </p>

        {/* BENEFÍCIOS */}
        {benefits && (
          <ul className="text-xs text-gray-300 space-y-1 mb-4">
            {benefits.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>
        )}

        {/* BOTÕES */}
        {Buttons && (
          <div className="flex gap-3 flex-wrap justify-center">
            {Buttons}
          </div>
        )}
      </div>

      {/* GLOW TECH */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(0,209,160,0.15),transparent_70%)]" />
    </div>
  );
};

export default Cards;