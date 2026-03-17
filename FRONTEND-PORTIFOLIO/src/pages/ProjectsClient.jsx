import projectsClient from "../components/projectsClient";
import Button from "../components/Button";
import TechBackground from "../components/TechBackGround";

export default function ProjectsClient() {
  return (
    <section
      id="Projects"
      className="relative py-24 px-6 overflow-hidden"
    >


      <div className="relative max-w-7xl mx-auto z-10">

        {/* Título */}
        <div className="mb-16 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#E7E3C9]">
            Soluções que entregamos
          </h2>

          <p className="text-[#DCD8B4]/70 mt-5 max-w-2xl mx-auto text-lg">
            Projetos desenvolvidos para fortalecer sua presença digital
            e gerar novas oportunidades para o seu negócio.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {projectsClient.map((project) => (
            <div
              key={project.id}
              className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-2xl
              p-6
              flex flex-col
              shadow-xl
              hover:border-[#1C6B55]
              transition-all duration-300
              hover:-translate-y-1
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-6 object-cover h-44 w-full"
              />

              <div className="flex-1">

                <h3 className="text-xl text-[#E7E3C9] font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-[#DCD8B4]/70 text-sm mb-5">
                  {project.description}
                </p>

                <ul className="text-[#DCD8B4]/80 text-sm space-y-2 mb-6">
                  {project.benefits.map((benefit, index) => (
                    <li key={index}>✔ {benefit}</li>
                  ))}
                </ul>

              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                {project.buttons.map((btn, index) => (
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