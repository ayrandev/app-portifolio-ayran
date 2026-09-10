import { useTranslation } from "react-i18next";
import { Cpu, Palette, Target } from "lucide-react";

const PILLARS = [
  { key: "technology", Icon: Cpu },
  { key: "design", Icon: Palette },
  { key: "strategy", Icon: Target },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
            {t("client.about.title")}
          </h2>

          <p className="text-subtle leading-relaxed">
            {t("client.about.description1")}
          </p>

          <p className="text-subtle mt-4 leading-relaxed">
            {t("client.about.description2")}
          </p>
        </div>

        {/* pilares */}
        <div className="grid sm:grid-cols-3 gap-10 mt-16 max-w-2xl mx-auto text-center">
          {PILLARS.map(({ key, Icon }) => (
            <div key={key}>
              <Icon className="w-6 h-6 text-accent mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-ink font-semibold text-sm mb-1">
                {t(`client.about.pillars.${key}.title`)}
              </h3>
              <p className="text-subtle text-xs leading-relaxed">
                {t(`client.about.pillars.${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-subtle/70 mt-16 text-sm text-center">
          {t("client.about.footer")}
        </p>
      </div>
    </section>
  );
}
