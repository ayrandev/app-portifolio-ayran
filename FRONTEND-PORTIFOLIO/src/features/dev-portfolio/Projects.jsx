import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import Button from "../../components/ui/Button";
import projects from "./projects.data";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Projects() {
  const { t } = useTranslation();
  useScrollReveal();

  return (
    <section
      id="Projects"
      className="relative overflow-x-hidden px-4 py-20 sm:py-24 flex flex-col items-center"
    >
      {/* Título */}
      <div
        className="reveal mb-12 border-b border-line w-full max-w-lg text-center pt-4"
        style={{ "--delay": "0s" }}
      >
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink">
          {t("dev.nav.projects")}
        </h1>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="reveal"
            style={{ "--delay": `${index * 0.1}s` }}
          >
            <ProjectCard
              image={project.image}
              Icon={project.icon}
              title={project.title}
              description={project.description}
              className="h-[320px] sm:h-[360px]"
              Buttons={
                <>
                  {project.buttons.map((btn, idx) => (
                    <Button key={idx} name={btn.name} Icon={btn.icon} onClick={btn.action} />
                  ))}
                </>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
