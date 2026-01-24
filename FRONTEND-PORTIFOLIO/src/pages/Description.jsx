import React from "react";
import { ReactTyped } from "react-typed";
import ImagePerfil from "../components/ImagePerfil";
import GifBackGround from "../components/GifBackGround";

export default function Description() {
  return (
    <>
      {/* CSS local para animações */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-1 {
            animation: fadeUp 0.8s ease-out forwards;
          }

          .fade-2 {
            animation: fadeUp 0.8s ease-out 0.2s forwards;
          }

          .fade-3 {
            animation: fadeUp 0.8s ease-out 0.4s forwards;
          }

          .fade-4 {
            animation: fadeUp 0.8s ease-out 0.6s forwards;
          }
        `}
      </style>

      <section
        id="Home"
        className="relative flex justify-center items-center min-h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 pt-28 sm:pt-32"
      >
        <GifBackGround />

        <div className="flex flex-col-reverse sm:flex-row-reverse items-center sm:justify-center sm:gap-28 gap-12 w-full px-6">

          {/* Texto */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-lg">

            <p className="font-[Poppins] text-sm sm:text-base text-indigo-100 tracking-wide opacity-0 fade-1">
              Olá, eu sou:
            </p>

            <div className="opacity-0 fade-2">
              <ReactTyped
                strings={[
                  "<span class='font-mono font-bold text-2xl sm:text-6xl text-[#00FFEA]'>Ayran Vieira</span>",
                ]}
                typeSpeed={45}
                backSpeed={45}
                loop
                cursorChar="<span class='text-white'>|</span>"
              />
            </div>

            <p className="font-[Poppins] text-lg sm:text-xl text-indigo-100 mt-4 leading-relaxed drop-shadow-xl opacity-0 fade-3">
              Desenvolvedor Full Stack especializado em{" "}
              <span className="text-[#00FFEA] font-semibold">Java - Spring Boot</span> e{" "}
              <span className="text-[#00FFEA] font-semibold">
                ReactJS
              </span>
              . Crio APIs escaláveis e soluções em OCI(Oracle Clound) eficientes.
              Movido por transformar ideias em sistemas robustos e de alto desempenho.
            </p>
          </div>

          {/* Imagem */}
          <div className="opacity-0 fade-4">
            <ImagePerfil className="w-40 sm:w-60 rounded-full shadow-lg" />
          </div>
        </div>
      </section>
    </>
  );
}
