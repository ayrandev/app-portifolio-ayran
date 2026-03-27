import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mb-6">
            {t("client.about.title")}
          </h2>

          <p className="text-[#9CA3AF] leading-relaxed">
            {t("client.about.description1")}
          </p>

          <p className="text-[#9CA3AF] mt-4 leading-relaxed">
            {t("client.about.description2")}
          </p>

          <p className="text-[#9CA3AF]/70 mt-6 text-sm">
            {t("client.about.footer")}
          </p>

        </div>

        {/* pilares */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {[
            "technology",
            "design",
            "strategy"
          ].map((key) => (
            <div
              key={key}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:border-[#00D1A0] transition-all duration-300"
            >
              <h3 className="text-[#E5E7EB] font-semibold mb-2">
                {t(`client.about.pillars.${key}.title`)}
              </h3>

              <p className="text-[#9CA3AF] text-sm">
                {t(`client.about.pillars.${key}.description`)}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}