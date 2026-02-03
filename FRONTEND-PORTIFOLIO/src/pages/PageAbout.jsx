import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import Cards from "../components/Cards";
import GifBackGround from "../components/GifBackGround";

import { 
  FaDownload, FaLinkedin, FaGithub, FaReact, FaJava 
} from "react-icons/fa";

import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { 
  SiAxios, SiSpringboot, SiPostgresql, SiOracle 
} from "react-icons/si";

export default function CardsAbout() {
  const { t } = useTranslation();

  /* -------------------- FADE ON SCROLL -------------------- */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const downloadFile = (fileName) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* -------------------- I18N DATA -------------------- */
  const softSkills = t("about.soft.skills", { returnObjects: true });
  const hardSkills = t("about.hard.skills", { returnObjects: true });

  const hardSkillIcons = [
    <FaJava className="text-4xl text-red-500" />,
    <SiSpringboot className="text-4xl text-green-500" />,
    <SiPostgresql className="text-4xl text-blue-500" />,
    <GrMysql className="text-4xl text-blue-800" />,
    <SiOracle className="text-4xl text-red-600" />,
    <FaReact className="text-4xl text-indigo-500" />,
    <IoLogoJavascript className="text-4xl text-yellow-400" />,
    <IoLogoCss3 className="text-4xl text-blue-500" />,
    <SiAxios className="text-4xl text-blue-400" />,
  ];

  return (
    <>
      {/* -------------------- CSS LOCAL -------------------- */}
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
            transition-delay: var(--delay);
          }

          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      <section
        id="About-me"
        className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 px-4 sm:px-6 py-16"
      >
        <GifBackGround />

        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-8 sm:gap-12 justify-center items-stretch">

          {/* -------------------- SOFT SKILLS -------------------- */}
          <div
            className="reveal bg-black/40 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-[#00FFEA] w-full min-w-0 lg:w-1/2 shadow-xl"
            style={{ "--delay": "0s" }}
          >
            <h1 className="text-3xl text-center text-transparent bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 font-[Poppins] bg-clip-text pb-4 border-b border-[#00FFEA]">
              {t("about.soft.title")}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="reveal w-full min-w-0"
                  style={{ "--delay": `${index * 0.08}s` }}
                >
                  <Cards title={skill.title} description={skill.description} />
                </div>
              ))}
            </div>

            <div
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 reveal"
              style={{ "--delay": "0.3s" }}
            >
              <Button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ayran-vieira-dev/",
                    "_blank"
                  )
                }
                name={t("about.soft.buttons.linkedin")}
                Icon={<FaLinkedin />}
              />
              <Button
                onClick={() => downloadFile("ProfileFeedback.pdf")}
                name={t("about.soft.buttons.profile")}
                Icon={<FaDownload />}
              />
            </div>
          </div>

          {/* -------------------- HARD SKILLS -------------------- */}
          <div
            className="reveal bg-black/40 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-[#00FFEA] w-full min-w-0 lg:w-1/2 shadow-xl"
            style={{ "--delay": "0.15s" }}
          >
            <h1 className="text-3xl text-center text-transparent bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 font-[Poppins] bg-clip-text pb-4 border-b border-[#00FFEA]">
              {t("about.hard.title")}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-6">
              {hardSkills.map((skill, i) => (
                <div
                  key={i}
                  className="reveal w-full min-w-0"
                  style={{ "--delay": `${i * 0.08}s` }}
                >
                  <Cards
                    Icon={hardSkillIcons[i]}
                    title={skill.title}
                    description={skill.description}
                  />
                </div>
              ))}
            </div>

            <div
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 reveal"
              style={{ "--delay": "0.3s" }}
            >
              <Button
                onClick={() =>
                  window.open("https://github.com/ayrandev", "_blank")
                }
                name={t("about.hard.buttons.github")}
                Icon={<FaGithub />}
              />
              <Button
                onClick={() => downloadFile("curriculo.pdf")}
                name={t("about.hard.buttons.resume")}
                Icon={<FaDownload />}
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
