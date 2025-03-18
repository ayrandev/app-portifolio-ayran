import React from "react";
import Button from "../components/Button";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import GifBackGround from "../components/GifBackGround";
import axios from "axios";

export default function FormContact() {

  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <section id="Contact" className="relative flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950">
      <GifBackGround />

      {/* Container principal */}
      <div className="flex flex-col justify-center items-center w-full pt-6 pb-12 flex-grow">
        <div className="flex justify-center w-full max-w-6xl px-4">
          {/* Container de Layout Flex */}
          <div className="relative w-full flex flex-col-reverse sm:items-center gap-8 lg:gap-8 p-2 rounded-lg shadow-lg">
            {/* Formulário de Contato */}
            <div className="w-full lg:w-2/3 flex flex-col gap-2 order-1 sm:order-none">
              <h1 className="text-3xl text-center text-transparent bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 font-[Poppins] bg-clip-text">
                Entre em Contato
              </h1>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData);

                  try {
                    const response = await axios.post(`${apiUrl}form`, data, {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    });

                    if (response.status === 200) {
                      alert("Formulário enviado com sucesso!");
                    } else {
                      alert("Erro ao enviar o formulário!");
                    }
                  } catch (error) {
                    console.error("Erro na requisição:", error);
                    alert("Erro de conexão!");
                  }
                }}
                method="POST"
                className="p-6 bg-black bg-opacity-50 rounded-lg shadow-lg space-y-6"
              >
                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Nome completo*</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    required
                    className="h-12 w-full bg-transparent border-b-[2px] border-[#00FFEA] text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition-all duration-300"
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Email*</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    className="h-12 w-full bg-transparent border-b-[2px] border-[#00FFEA] text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition-all duration-300"
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Whatsapp*</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Digite seu whatsapp"
                    required
                    className="h-12 w-full bg-transparent border-b-[2px] border-[#00FFEA] text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition-all duration-300"
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Qual motivo do seu contato?*</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem"
                    required
                    className="h-32 w-full bg-transparent border-b-[2px] border-[#00FFEA] text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition-all duration-300"
                  ></textarea>
                </div>

                <div className="w-full flex justify-end mt-6">
                  <Button type="submit" name="Enviar" />
                </div>
              </form>

              {/* Redes sociais para telas maiores */}
              <div className="hidden lg:flex justify-center mt-6 space-x-4">
                <SocialMedia />
              </div>
            </div>

            {/* Redes sociais para telas menores */}
            <div className="flex items-center justify-center sm:mt-8 order-none sm:order-1 lg:hidden">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
