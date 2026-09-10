import { useTranslation } from "react-i18next";
import {
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaUserCheck,
  FaReact,
  FaJava,
  FaShieldAlt,
  FaRoute,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaTasks,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import Button from "../../components/ui/Button";
import useScrollReveal from "../../hooks/useScrollReveal";

const HARD_SKILL_ICONS = [
  FaReact,
  SiTypescript,
  FaJava,
  FaShieldAlt,
  FaRoute,
  SiTailwindcss,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaTasks,
];

export default function About() {
  const { t } = useTranslation();
  useScrollReveal();

  const softSkills = t("about.soft.skills", { returnObjects: true });
  const hardSkills = t("about.hard.skills", { returnObjects: true });

  return (
    <section id="About-me" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* TÍTULO */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">
            {t("about.title")}
          </h2>
          <p className="text-subtle mt-4 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        {/* SOFT SKILLS */}
        <div className="mb-20">
          <h3 className="text-2xl font-display text-ink mb-8 text-center reveal">
            {t("about.soft.title")}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((item, index) => (
              <div
                key={index}
                className="reveal p-5 rounded-2xl bg-surface border border-line hover:border-accent transition duration-300"
              >
                <h4 className="text-ink font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-subtle">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10 reveal">
            <Button
              name="about.soft.buttons.linkedin"
              Icon={FaLinkedin}
              onClick={() =>
                window.open("https://www.linkedin.com/in/ayran-vieira-dev/", "_blank")
              }
            />
            <Button
              name="about.soft.buttons.profile"
              variant="outline"
              Icon={FaUserCheck}
              onClick={() => window.open("/ProfileFeedback.pdf", "_blank")}
            />
          </div>
        </div>

        {/* HARD SKILLS */}
        <div>
          <h3 className="text-2xl font-display text-ink mb-8 text-center reveal">
            {t("about.hard.title")}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardSkills.map((item, index) => {
              const Icon = HARD_SKILL_ICONS[index];
              return (
                <div
                  key={index}
                  className="reveal p-5 rounded-2xl bg-surface border border-line hover:border-accent transition duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {Icon && <Icon className="w-5 h-5 text-accent shrink-0" />}
                    <h4 className="text-ink font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-subtle">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10 reveal">
            <Button
              name="about.hard.buttons.github"
              Icon={FaGithub}
              onClick={() => window.open("https://github.com/ayrandev", "_blank")}
            />
            <Button
              name="about.hard.buttons.resume"
              variant="outline"
              Icon={FaFileDownload}
              onClick={() => window.open("/curriculo.pdf", "_blank")}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
