import projectsClient from "./projectsClient";
import Button from "../Button";

export default function ProjectsClient() {
  return (
    <section id="Projects" className="relative py-24 px-6 overflow-hidden">

      {/* 🔥 BACKGROUND TECH (opcional, pode remover se quiser) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,209,160,0.08),transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">

        {/* TÍTULO */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB]">
            Soluções que entregamos
          </h2>

          <p className="text-[#9CA3AF] mt-5 max-w-2xl mx-auto text-lg">
            Projetos desenvolvidos para gerar resultados reais e fortalecer sua presença digital.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {Array.isArray(projectsClient) &&
            projectsClient.map((project) => (
              <div
                key={project.id}
                className="
                  bg-white/5 backdrop-blur-xl border border-white/10
                  rounded-2xl p-6 flex flex-col shadow-xl
                  hover:border-[#00D1A0]
                  hover:shadow-[0_0_30px_rgba(0,209,160,0.2)]
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >

                {/* IMAGEM */}
                <div className="overflow-hidden rounded-xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      object-cover h-44 w-full
                      transition duration-500
                      hover:scale-105
                    "
                  />
                </div>

                {/* CONTEÚDO */}
                <div className="flex-1">

                  <h3 className="text-xl text-[#E5E7EB] font-semibold mb-3">
                    {project.title}
                  </h3>

                  {/* PROBLEMA */}
                  <p className="text-sm text-red-400 mb-2">
                    {project.description}
                  </p>

                  {/* SOLUÇÃO */}
                  {project.solution && (
                    <p className="text-sm text-[#00D1A0] mb-4">
                      {project.solution}
                    </p>
                  )}

                  {/* BENEFÍCIOS */}
                  {project.benefits?.length > 0 && (
                    <ul className="text-[#9CA3AF] text-sm space-y-2 mb-6">
                      {project.benefits.map((benefit, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-[#00D1A0]">✔</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}

                </div>

                {/* BOTÕES */}
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  {project.buttons?.map((btn, index) => (
                    <Button
                      key={index}
                      Icon={btn.Icon}
                      name={btn.name}
                      onClick={btn.onClick}
                    />
                  ))}
                </div>

              </div>
            ))}

        </div>

      </div>
    </section>
  );
}