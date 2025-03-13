import React from "react";
import { ReactTyped } from "react-typed";
import ImagePerfil from "../components/ImagePerfil";
import GifBackGround from "../components/GifBackGround";

export default function Description() {
  return (
    <section
      id="Home"
      className="relative flex justify-center min-h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 px-4 py-24"
    >
      <GifBackGround />
      <div className="items-center sm:flex gap-36">
        <ImagePerfil />
          <div className="flex flex-col sm:flex items-center w-[50vh]">
            <div className="max-w-[90%] sm:max-w-[55vh] sm:mt-20">
              <p className="font-[Poppins] text-sm sm:text-base text-indigo-100">Olá, eu sou:</p>
              <h1 className="font-[Poppins] text-4xl sm:text-5xl bg-gradient-to-r from-blue-500 via-[#00FFEA] to-green-500 text-transparent bg-clip-text">
                Ayran Vieira
              </h1>
              <span className="font-[Poppins] font-bold text-lg sm:text-xl text-indigo-100">Desenvolvedor </span>
              <ReactTyped
                strings={[
                  `<span class="font-mono font-bold text-xl sm:text-2xl text-[#00FFEA]">WEB</span>`,
                  `<span class="font-mono font-bold text-xl sm:text-2xl text-[#00FFEA]">Full Stack</span>`,
                  `<span class="font-mono font-bold text-xl sm:text-2xl text-[#00FFEA]">Criativo</span>`,
                  `<span class="font-mono font-bold text-xl sm:text-2xl text-[#00FFEA]">Dinâmico</span>`,
                  `<span class="font-mono font-bold text-xl sm:text-2xl text-[#00FFEA]">Inovador</span>`
                ]}
                typeSpeed={40}
                backSpeed={40}
                loop
                cursorChar="<span class='text-white'>|</span>"
              />
            </div>
          <div className="max-w-[30vh] sm:w-80 pt-4">
            <p className="font-[Poppins] text-lg sm:text-3xl font-mono text-white">
              Transformando ideias em experiências digitais impactantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
