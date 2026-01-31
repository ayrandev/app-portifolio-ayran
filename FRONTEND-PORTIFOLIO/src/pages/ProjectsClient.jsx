import projectsClient from "../components/projectsClient";
import Button from "../components/Button";
import GifBackGround from "../components/GifBackGround";

export default function ProjectsClient() {
  return (
    <section
      id="Projects"
      className="relative min-h-screen bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 px-4 py-20"
    >
      <GifBackGround />

      {/* Título */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 bg-clip-text">
          Soluções que entrego
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Projetos pensados para gerar resultado, profissionalismo e presença
          digital.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsClient.map((project) => (
          <div
            key={project.id}
            className="bg-black/40 backdrop-blur-md border border-[#00FFEA] rounded-xl p-6 flex flex-col justify-between"
          >
            {/* Imagem */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-5 object-cover h-44 w-full"
            />

            {/* Conteúdo */}
            <div>
              <h3 className="text-xl text-white font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <ul className="text-gray-300 text-sm space-y-1 mb-6">
                {project.benefits.map((benefit, index) => (
                  <li key={index}>✔ {benefit}</li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Button
              text="Solicitar orçamento"
              link="#contato"
              className="bg-green-600 hover:bg-green-700 w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
