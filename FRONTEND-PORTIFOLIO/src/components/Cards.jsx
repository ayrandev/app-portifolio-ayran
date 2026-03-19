import React from "react";

export default function CardClient({
  title,
  description,
  solution,
  benefits = [],
  image,
  Buttons,
}) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10 bg-white/5 backdrop-blur-xl
        hover:border-[#00D1A0]
        transition-all duration-500
        hover:-translate-y-1
        shadow-xl
      "
    >
      {/* IMAGEM */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            transition duration-700
            group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* CONTEÚDO */}
      <div className="p-6 flex flex-col gap-4">

        {/* TÍTULO */}
        <h3 className="text-xl font-semibold text-[#E5E7EB]">
          {title}
        </h3>

        {/* PROBLEMA */}
        <div>
          <p className="text-xs text-red-400 uppercase tracking-wider mb-1">
            Problema
          </p>
          <p className="text-sm text-[#9CA3AF]">
            {description}
          </p>
        </div>

        {/* SOLUÇÃO */}
        <div>
          <p className="text-xs text-[#00D1A0] uppercase tracking-wider mb-1">
            Solução
          </p>
          <p className="text-sm text-[#9CA3AF]">
            {solution}
          </p>
        </div>

        {/* BENEFÍCIOS */}
        {benefits.length > 0 && (
          <ul className="text-sm text-[#9CA3AF] space-y-1 mt-2">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-[#00D1A0]">✔</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* BOTÕES */}
        {Buttons && (
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            {Buttons}
          </div>
        )}
      </div>

      {/* GLOW EFFECT */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-500
        bg-[radial-gradient(circle_at_center,rgba(0,209,160,0.15),transparent_70%)]
      " />
    </div>
  );
}