import React from "react";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

export default function FormContact() {
  return (
    <section id="MyContact" className="flex flex-col justify-between bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 min-h-screen">
      <div className="flex flex-col justify-center items-center w-full pt-32 pb-16">
        {/* Título centralizado */}
        <h1 className="text-center text-xl font-[Poppins] bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 text-transparent bg-clip-text">Contact-me</h1>

        <div className="flex justify-center gap-16 w-full max-w-4xl">
          {/* Componente SocialMedia */}
          <div className="flex justify-center pt-16">
            <SocialMedia />
          </div>

          {/* Formulário */}
          <div className="max-w-sm">
            <form className="border-[#00FFEA] p-8 flex flex-col items-center gap-2">
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
      <Footer />
    </section>
  );
}
