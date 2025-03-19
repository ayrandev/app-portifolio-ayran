import React from "react";
import { ReactTyped } from "react-typed";
import ImagePerfil from "../components/ImagePerfil";
import GifBackGround from "../components/GifBackGround";

export default function Description() {
  return (
    <section
      id="Home"
      className="relative fle justify-center items-center min-h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 pt-28 sm:pt-32"
    >
      <GifBackGround />
      <div className="flex flex-col-reverse sm:flex-row-reverse items-center gap-16 max-w-6xl w-full">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-lg">
          <p className="font-[Poppins] text-sm sm:text-base text-indigo-100">Olá, eu sou:</p>
          <h1 className="font-[Poppins] text-4xl sm:text-6xl bg-gradient-to-r from-blue-500 via-[#00FFEA] to-green-500 text-transparent bg-clip-text">
            Ayran Vieira
          </h1>
          <span className="font-[Poppins] text-2xl sm:text-2xl text-indigo-100">Desenvolvedor </span>
          <ReactTyped
            strings={[
              "<span class='font-mono font-bold text-2xl sm:text-2xl text-[#00FFEA]'>WEB</span>",
              "<span class='font-mono font-bold text-2xl sm:text-2xl text-[#00FFEA]'>Full Stack</span>",
              "<span class='font-mono font-bold text-2xl sm:text-2xl text-[#00FFEA]'>Criativo</span>",
              "<span class='font-mono font-bold text-2xl sm:text-2xl text-[#00FFEA]'>Dinâmico</span>",
              "<span class='font-mono font-bold text-2xl sm:text-2xl text-[#00FFEA]'>Inovador</span>",
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
            cursorChar="<span class='text-white'>|</span>"
          />
          <p className="font-[Poppins] text-xl w-[20rem] sm:text-2xl  text-white mt-4 max-w-md">
            Transformando ideias em experiências digitais impactantes.
          </p>
        </div>
        <ImagePerfil className="w-40 sm:w-60 rounded-full shadow-lg" />
      </div>
    </section>
  );
}
