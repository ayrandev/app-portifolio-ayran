import { useTranslation } from "react-i18next";
import { Briefcase } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Experience() {
  const { t } = useTranslation();
  useScrollReveal();

  const items = t("dev.experience.items", { returnObjects: true });

  return (
    <section id="Experience" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">

        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">
            {t("dev.experience.title")}
          </h2>
        </div>

        <div className="relative border-l border-line pl-8 space-y-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="reveal relative"
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-canvas border-2 border-accent flex items-center justify-center">
                <Briefcase className="w-2.5 h-2.5 text-accent" />
              </span>

              <div className="p-5 rounded-2xl bg-surface border border-line">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-ink font-semibold text-lg">{item.role}</h3>
                  <span className="text-xs text-accent font-medium tracking-wide">
                    {item.period}
                  </span>
                </div>

                <p className="text-subtle text-sm mb-4">{item.company}</p>

                <ul className="space-y-2">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-sm text-subtle">
                      <span className="text-accent">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
