import React from "react";
import { ReactTyped } from "react-typed";
import ImagePerfil from "../components/ImagePerfil";
import GifBackGround from "../components/GifBackGround";

export default function Description() {
  return (
    <section
      id="Home"
      className="relative flex justify-center items-center min-h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 pt-28 sm:pt-32"
    >
      <GifBackGround />

      <div className="flex flex-col-reverse sm:flex-row-reverse items-center sm:justify-center sm:gap-28 gap-12 w-full px-6">

        {/* Fade-in container */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-lg opacity-0 animate-fadeIn">
          
          <p className="font-[Poppins] text-sm sm:text-base text-indigo-100 tracking-wide">
            Olá, eu sou:
          </p>

           <ReactTyped
            strings={[
              "<span class='font-mono font-bold text-2xl sm:text-6xl text-[#00FFEA]'>Ayran Vieira</span>",
            ]}
            typeSpeed={45}
            backSpeed={45}
            loop
            cursorChar="<span class='text-white'>|</span>"
          />


          {/* >>> Nova descrição curta técnica <<< */}
          <p className="font-[Poppins] text-lg sm:text-xl text-indigo-100 mt-4 leading-relaxed drop-shadow-xl">
            Desenvolvedor Full Stack especializado em{" "}
            <span className="text-[#00FFEA] font-semibold">Java</span> e{" "}
            <span className="text-[#00FFEA] font-semibold">Oracle Cloud Infrastructure (OCI)</span>.
            Crio APIs escaláveis com Spring Boot e soluções cloud eficientes.
            Movido por transformar ideias em sistemas robustos e de alto desempenho.
          </p>
        </div>

        {/* Foto com animação delay */}
        <div className="opacity-0 animate-fadeInDelay">
          <ImagePerfil className="w-40 sm:w-60 rounded-full shadow-lg" />
        </div>
      </div>
    </section>
  );
}
