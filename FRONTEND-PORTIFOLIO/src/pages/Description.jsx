import React from "react";
import { ReactTyped } from "react-typed";
import ImagePerfil from "../components/ImagePerfil";
import GifBackGround from "../components/GifBackGround";
import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="Home"
        className="relative flex justify-center items-center min-h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 pt-28 sm:pt-32"
      >
        <GifBackGround />

        <div className="flex flex-col-reverse sm:flex-row-reverse items-center sm:justify-center sm:gap-28 gap-12 w-full px-6">
          
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-lg">
            <p className="font-[Poppins] text-sm sm:text-base text-indigo-100 tracking-wide">
              {t("dev.intro.greeting")}
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

            <p className="font-[Poppins] text-lg sm:text-xl text-indigo-100 mt-4 leading-relaxed drop-shadow-xl">
              {t("dev.intro.description")}
            </p>
          </div>

          <ImagePerfil />
        </div>
      </section>
    </>
  );
}
