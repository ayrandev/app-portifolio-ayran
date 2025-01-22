import React from "react";
import Button from "./Button";
import Cards from "./Cards";
import GifBackGround from "./GifBackGround";

import { FaDownload } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";


export default function CardsAbout() {
  const ProfileFeedbackDownload = () => {
    const fileUrl = "../public/ProfileFeedback.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "ProfileFeedback_AyranDev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const CurriculoDownload = () => {
    const fileUrl = "../public/curriculo.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Curriculo_AyranDev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="CardsAbout" className="relative h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950">
      <GifBackGround />
      <div className="flex justify-center pt-16">
        <div className="flex justify-center h-[600px] w-[600px]">
          <div>
            <div className="mb-4 border-b-[1px]  text-center">
                <h1 className=" mb-2 text-center text-4xl font-[Poppins] bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 text-transparent bg-clip-text">
                Soft-Skills
                </h1>
            </div>
            
            <div className="grid grid-cols-2 gap-8 p-8">
              <Cards title="Comunicação" description="Capacidade de explicar ideias técnicas para pessoas não técnicas" />
              <Cards title="Aprendizado contínuo" description="Busca em aprender novas tecnologia e evoluir profissionnalmente" />
              <Cards title="Trabalho em Equipe" description="Colaborou com a equipe na criação do front-end e back-end do projeto Digital Store." />
              <Cards title="Adaptalidade" description="Conforto em ambientes dinâmicos" />
              <Cards title="Proatividade" description="Sempre buscando entregar mais do que foi solicitado, idependente do sertor que está precisando." />
              <Cards title="Gestão de Tempo" description="Aplicação da técnica de Pomodoro para melhor gerir os prazos estipulados." />
            </div>
          </div>
          <div className="self-end absolute pb-14 grid grid-cols-2 gap-6">
            <Button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ayran-vieira-dev/",
                  "_blank"
                )
              }
              name="LinkedIn"
              Icon={<FaLinkedin />}
            />
            <Button
              onClick={ProfileFeedbackDownload}
              name="Big Five"
              Icon={<FaDownload />}
            />
          </div>
        </div>

        <div className="flex justify-center h-[600px] w-[600px]">
          <div>
            <div className="mb-4 border-b-[1px] text-center">
                <h1 className=" mb-2 text-center text-4xl font-[Poppins] bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 text-transparent bg-clip-text">
                Hard-Skills
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-8 p-8">
              <Cards Icon={<FaReact className="text-4xl ml-4 text-indigo-500"/>} title="React JS" description="This is the description of the card. It will slide in on hover." />
              <Cards Icon={<IoLogoJavascript className="text-4xl ml-4 text-yellow-400"/>} title="Java Script" description="This is the description of the card. It will slide in on hover." />
              <Cards Icon={<GrMysql className="text-4xl ml-4 text-indigo-800"/>} title="MySQL" description="This is the description of the card. It will slide in on hover." />
              <Cards Icon={<FaGitAlt className="text-4xl ml-4 text-orange-500"/>} title="Git" description="This is the description of the card. It will slide in on hover." />
              <Cards Icon={<FaPython className="text-4xl ml-4 text-yellow-500"/>} title="Python" description="This is the description of the card. It will slide in on hover." />
              <Cards Icon={<IoLogoCss3 className="text-4xl ml-4 text-indigo-500"/>} title="CSS 3" description="This is the description of the card. It will slide in on hover." />
            </div>
          </div>
          <div className="self-end absolute pb-16 flex gap-6">
            <Button
              onClick={() =>
                window.open("https://github.com/ayrandev", "_blank")
              }
              name="GitHub"
              Icon={<FaGithub/>}
            />
            <Button
              onClick={CurriculoDownload}
              name="Currículo"
              Icon={<FaDownload />}
              download="Curriculo_AyranDev.pdf"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
