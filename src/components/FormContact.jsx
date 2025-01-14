import React from "react";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import GifContact from "./GifContact";

export default function FormContact() {
  return (
    <section id="MyContact" className="flex flex-col justify-between bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 min-h-screen">
      <div className="flex flex-col justify-center items-center w-full pt-32 pb-16">
        <div className="flex justify-center w-full max-w-4xl">

          {/* Div Container*/}
          <div className="relative w-full flex gap-16 bg-black bg-opacity-20 backdrop-blur-md p-8 rounded-lg">

            {/* Coluna Redes Sociais*/}
            <div className="flex flex-col items-center w-1/2 gap-8">
              <h1 className="text-center pt-8 text-4xl font-[Poppins] bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 text-transparent bg-clip-text">Contact-me</h1>
              <div className="flex flex-col justify-center items-center w-full">
                <SocialMedia />
                <GifContact />
              </div>
            </div>

            {/* Linha divisória suave entre as colunas */}
            <div className="border-l-[1px] border-[#00FFEA] opacity-50 h-full"></div>

            {/* Coluna 2: Formulário */}
            <div className="w-1/2 max-w-sm">
              <form className="border-[#00FFEA] p-8 flex flex-col items-center gap-2 bg-transparent">
                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Nome*</label>
                  <input
                    className="h-10 w-full bg-transparent border-b-[1px] border-[#00FFEA] text-white px-2"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Email*</label>
                  <input
                    className="h-10 w-full bg-transparent border-b-[1px] border-[#00FFEA] text-white px-2"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Whatsapp*</label>
                  <input
                    className="h-10 w-full bg-transparent border-b-[1px] border-[#00FFEA] text-white px-2"
                    type="phone"
                    name="phone"
                    placeholder="Digite seu whatsapp"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Qual motivo do seu contato?*</label>
                  <textarea
                    className="h-24 w-full bg-transparent border-b-[1px] border-[#00FFEA] text-white px-2"
                    name="message"
                    placeholder="Digite sua mensagem"
                    required
                  ></textarea>
                </div>

                <div className="w-full flex justify-end mt-2">
                  <Button name="Enviar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
