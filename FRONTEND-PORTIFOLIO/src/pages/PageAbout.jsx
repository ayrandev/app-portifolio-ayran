import React from "react";
import Button from "../components/Button";
import Cards from "../components/Cards";
import GifBackGround from "../components/GifBackGround";

import { 
  FaDownload, FaLinkedin, FaGithub, FaReact, FaGitAlt, FaPython, FaJava 
} from "react-icons/fa";

import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { 
  SiAxios, SiTailwindcss, SiNextdotjs, SiSpringboot, SiPostgresql, SiOracle 
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";

export default function CardsAbout() {

  const downloadFile = (fileName) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // -------------------- SOFT SKILLS --------------------
  const softSkills = [
    {
      title: "Comunicação clara",
      description: "Transmito ideias técnicas com objetividade para facilitar o alinhamento da equipe.",
    },
    {
      title: "Resolução de Problemas",
      description: "Analiso cenários, encontro causas e implemento soluções eficientes.",
    },
    {
      title: "Aprendizado contínuo",
      description: "Evolução diária estudando tecnologias e boas práticas.",
    },
    {
      title: "Colaboração",
      description: "Experiência em projetos full stack com equipes multidisciplinares.",
    },
    {
      title: "Adaptabilidade",
      description: "Flexibilidade para mudanças de escopo e novas ferramentas.",
    },
    {
      title: "Proatividade",
      description: "Antecipação de necessidades e melhoria constante.",
    },
    {
      title: "Gestão de Tempo",
      description: "Organização com métodos como Pomodoro e listas de prioridade.",
    },
  ];

  // -------------------- HARD SKILLS --------------------
  const hardSkills = [
    { Icon: <FaJava className="text-4xl text-red-500" />, title: "Java", description: "Linguagem principal para back-end." },
    { Icon: <SiSpringboot className="text-4xl text-green-500" />, title: "Spring Boot", description: "Criação de APIs robustas e escaláveis." },
    { Icon: <SiPostgresql className="text-4xl text-blue-500" />, title: "PostgreSQL", description: "Banco de dados moderno e poderoso." },
    { Icon: <GrMysql className="text-4xl text-blue-800" />, title: "MySQL", description: "Banco relacional para sistemas robustos." },
    { Icon: <SiOracle className="text-4xl text-red-600" />, title: "OCI", description: "Serviços na Oracle Cloud Infrastructure." },

    { Icon: <FaReact className="text-4xl text-indigo-500" />, title: "React.js", description: "Interfaces modernas e responsivas." },
    { Icon: <IoLogoJavascript className="text-4xl text-yellow-400" />, title: "JavaScript", description: "Base da web moderna." },
    { Icon: <IoLogoCss3 className="text-4xl text-blue-500" />, title: "CSS3", description: "Estilização avançada para web." },
    { Icon: <SiAxios className="text-4xl text-blue-400" />, title: "Axios", description: "Requisições HTTP com Promises." },
  ];

  return (
    <section
      id="About-me"
      className="relative min-h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 px-4 py-16"
    >
      <GifBackGround />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 justify-center items-start">

        {/* -------------------- SOFT SKILLS -------------------- */}
        <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-[#00FFEA] w-full lg:w-1/2 shadow-xl">
          <h1 className="text-3xl text-center text-transparent bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 font-[Poppins] bg-clip-text pb-4 border-b border-[#00FFEA]">
            Soft Skills
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {softSkills.map((skill, index) => (
              <Cards
                key={index}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={() => window.open("https://www.linkedin.com/in/ayran-vieira-dev/", "_blank")}
              name="LinkedIn"
              Icon={<FaLinkedin />}
            />
            <Button
              onClick={() => downloadFile("ProfileFeedback.pdf")}
              name="Big Five"
              Icon={<FaDownload />}
            />
          </div>
        </div>

        {/* -------------------- HARD SKILLS -------------------- */}
        <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-[#00FFEA] w-full lg:w-1/2 shadow-xl">
          <h1 className="text-3xl text-center text-transparent bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 font-[Poppins] bg-clip-text pb-4 border-b border-[#00FFEA]">
            Hard Skills
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {hardSkills.map((skill, i) => (
              <Cards
                key={i}
                Icon={skill.Icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={() => window.open("https://github.com/ayrandev", "_blank")}
              name="GitHub"
              Icon={<FaGithub />}
            />
            <Button
              onClick={() => downloadFile("curriculo.pdf")}
              name="Currículo"
              Icon={<FaDownload />}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
