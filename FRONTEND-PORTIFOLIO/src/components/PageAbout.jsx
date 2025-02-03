import React from "react";
import Button from "./Button";
import Cards from "./Cards";
import GifBackGround from "./GifBackGround";
import { FaDownload, FaLinkedin, FaGithub, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiAxios, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function CardsAbout() {
  const downloadFile = (fileName) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="About-me" className="relative min-h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 px-4 py-10">
      <GifBackGround />
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Soft-Skills */}
        <div className="text-center w-full max-w-lg">
          <h1 className="mb-4 text-3xl md:text-4xl font-[Poppins] text-indigo-100 border-b border-[#00FFEA] pb-2">
            Soft-Skills
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
            {[
              { title: "Comunicação", description: "Explica ideias técnicas para não técnicos." },
              { title: "Aprendizado contínuo", description: "Busca por novas tecnologias." },
              { title: "Trabalho em Equipe", description: "Colaboração em projetos full stack." },
              { title: "Adaptabilidade", description: "Confortável em ambientes dinâmicos." },
              { title: "Proatividade", description: "Entrega além do esperado." },
              { title: "Gestão de Tempo", description: "Uso da técnica Pomodoro." },
            ].map((skill, index) => (
              <Cards key={index} title={skill.title} description={skill.description} />
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6 relative z-10">
            <Button onClick={() => window.open("https://www.linkedin.com/in/ayran-vieira-dev/", "_blank")} name="LinkedIn" Icon={<FaLinkedin />} />
            <Button onClick={() => downloadFile("ProfileFeedback.pdf")} name="Big Five" Icon={<FaDownload />} />
          </div>
        </div>

        {/* Hard-Skills */}
        <div className="text-center w-full max-w-lg">
          <h1 className="mb-4 text-3xl md:text-4xl font-[Poppins] text-indigo-100 border-b border-[#00FFEA] pb-2">
            Hard-Skills
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
            {[
              { Icon: <FaReact className="text-4xl text-indigo-500" />, title: "React JS", description: "Biblioteca para interfaces dinâmicas." },
              { Icon: <IoLogoJavascript className="text-4xl text-yellow-400" />, title: "JavaScript", description: "Linguagem de programação web." },
              { Icon: <GrMysql className="text-4xl text-blue-800" />, title: "MySQL", description: "Banco de dados relacional." },
              { Icon: <FaGitAlt className="text-4xl text-orange-500" />, title: "Git", description: "Controle de versão distribuído." },
              { Icon: <FaPython className="text-4xl text-yellow-500" />, title: "Python", description: "Linguagem de código aberto." },
              { Icon: <IoLogoCss3 className="text-4xl text-blue-500" />, title: "CSS 3", description: "Estilização avançada para web." },
              { Icon: <SiAxios className="text-4xl text-blue-400" />, title: "Axios", description: "Cliente HTTP baseado em Promises." },
              { Icon: <SiTailwindcss className="text-4xl text-teal-400" />, title: "Tailwind CSS", description: "Framework de estilização utilitária." },
              { Icon: <SiNextdotjs className="text-4xl text-gray-500" />, title: "Next.js", description: "Framework para React com SSR e SSG." },
            ].map((skill, index) => (
              <Cards key={index} Icon={skill.Icon} title={skill.title} description={skill.description} />
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6 relative z-10">
            <Button onClick={() => window.open("https://github.com/ayrandev", "_blank")} name="GitHub" Icon={<FaGithub />} />
            <Button onClick={() => downloadFile("curriculo.pdf")} name="Currículo" Icon={<FaDownload />} />
          </div>
        </div>
      </div>
    </section>
  );
}
