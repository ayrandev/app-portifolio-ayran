import { useEffect } from "react";
import Button from "../Button";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function CardsAbout() {
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

  /* -------------------- SOFT SKILLS -------------------- */
  const skills = [
    {
      title: "Resolução de Problemas",
      description: "Análise e solução eficiente de cenários complexos.",
    },
    {
      title: "Pensamento Estratégico",
      description: "Foco em impacto e resultado de negócio.",
    },
    {
      title: "Comunicação Clara",
      description: "Alinhamento simples entre técnico e negócio.",
    },
    {
      title: "Organização",
      description: "Código limpo, escalável e bem estruturado.",
    },
  ];

  /* -------------------- HARD SKILLS (FOCO NO MERCADO) -------------------- */
  const techs = [
    {
      title: "Java",
      description: "Desenvolvimento back-end robusto e escalável.",
    },
    {
      title: "Spring Boot",
      description: "Criação de APIs REST seguras e performáticas.",
    },
    {
      title: "APIs REST",
      description: "Construção e integração de serviços distribuídos.",
    },
    {
      title: "React",
      description: "Interfaces modernas e reativas.",
    },
    {
      title: "JavaScript",
      description: "Base para aplicações web dinâmicas.",
    },
    {
      title: "PostgreSQL",
      description: "Modelagem e persistência de dados confiável.",
    },
  ];

  return (
    <>
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.7s ease;
          }

          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      <section className="relative py-24 px-6 overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">

          {/* TÍTULO */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB]">
              Habilidades
            </h2>

            <p className="text-[#9CA3AF] mt-4 max-w-2xl mx-auto">
              Tecnologias e habilidades focadas em resolver problemas reais.
            </p>
          </div>

          {/* SOFT SKILLS */}
          <div className="mb-20">
            <h3 className="text-2xl text-[#E5E7EB] mb-8 text-center reveal">
              Soft Skills
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="reveal p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D1A0] transition duration-300"
                >
                  <h4 className="text-[#E5E7EB] font-semibold mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#9CA3AF]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* HARD SKILLS */}
          <div>
            <h3 className="text-2xl text-[#E5E7EB] mb-8 text-center reveal">
              Hard Skills
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techs.map((item, index) => (
                <div
                  key={index}
                  className="reveal p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D1A0] transition duration-300"
                >
                  <h4 className="text-[#E5E7EB] font-semibold mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#9CA3AF]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 mt-16 reveal">
            <Button
              name="LinkedIn"
              Icon={FaLinkedin}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ayran-vieira-dev/",
                  "_blank"
                )
              }
            />

            <Button
              name="GitHub"
              variant="outline"
              Icon={FaGithub}
              onClick={() =>
                window.open("https://github.com/ayrandev", "_blank")
              }
            />
          </div>

        </div>
      </section>
    </>
  );
}