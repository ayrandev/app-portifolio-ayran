import React, { useState } from "react";
import Button from "../components/Button";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import GifBackGround from "../components/GifBackGround";
import axios from "axios";


export default function FormContact() {

  const apiUrl = "https://back-end-portifolio-alpha.vercel.app/form";

  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Atualiza o estado quando o usuário digita nos campos
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        alert("Formulário enviado com sucesso!");
        // Limpa os campos do formulário
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Erro ao enviar o formulário!");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro de conexão!");
    }
  };

  return (
    <section id="Contact" className="relative flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950">
      <GifBackGround />

      <div className="flex flex-col justify-center items-center w-full pt-6 pb-12 flex-grow">
        <div className="flex justify-center w-full max-w-6xl px-4">
          <div className="relative w-full flex flex-col-reverse sm:items-center gap-8 lg:gap-8 p-2 rounded-lg shadow-lg">
            
            <div className="w-full lg:w-2/3 flex flex-col gap-2 order-1 sm:order-none">
              <h1 className="text-3xl text-center text-transparent bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 font-[Poppins] bg-clip-text">
                Entre em Contato
              </h1>

              <form onSubmit={handleSubmit} className="p-6 bg-black bg-opacity-50 rounded-lg shadow-lg space-y-6">
                
                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Nome completo*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 w-full bg-transparent border-b-[2px] border-[#00FFEA] text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition-all duration-300"
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 w-full bg-transparent border-b-[2px] border-[#00FFEA] text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition-all duration-300"
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Whatsapp*</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Digite seu whatsapp"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 w-full bg-transparent border-b-[2px] border-[#00FFEA] text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition-all duration-300"
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Qual motivo do seu contato?*</label>
                  <textarea
                    name="message"
                    placeholder="Digite sua mensagem"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="h-32 w-full bg-transparent border-b-[2px] border-[#00FFEA] text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#00FFEA] transition-all duration-300"
                  ></textarea>
                </div>

                <div className="w-full flex justify-end mt-6">
                  <Button type="submit" name="Enviar" />
                </div>
              </form>

              <div className="hidden lg:flex justify-center mt-6 space-x-4">
                <SocialMedia />
              </div>
            </div>

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
