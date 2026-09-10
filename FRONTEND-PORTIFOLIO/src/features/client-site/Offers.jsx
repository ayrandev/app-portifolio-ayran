import { useTranslation } from "react-i18next";
import { Globe, Briefcase, LayoutDashboard } from "lucide-react";
import Button from "../../components/ui/Button";
import useScrollReveal from "../../hooks/useScrollReveal";

const OFFERS = [
  { key: "sites", Icon: Globe },
  { key: "portfolios", Icon: Briefcase },
  { key: "systems", Icon: LayoutDashboard },
];

export default function Offers() {
  const { t } = useTranslation();
  useScrollReveal();

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ink">
            {t("client.offers.title")}
          </h2>
          <p className="text-subtle mt-4 max-w-2xl mx-auto">
            {t("client.offers.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {OFFERS.map(({ key, Icon }, index) => {
            const tags = t(`client.offers.items.${key}.tags`, { returnObjects: true });
            return (
              <div
                key={key}
                className="reveal flex flex-col p-7 rounded-2xl bg-surface/60 hover:bg-surface border border-transparent hover:border-line transition-all duration-300"
                style={{ "--delay": `${index * 0.12}s` }}
              >
                <Icon className="w-7 h-7 text-accent mb-5" strokeWidth={1.5} />

                <h3 className="text-lg font-display font-semibold text-ink mb-2">
                  {t(`client.offers.items.${key}.title`)}
                </h3>

                <p className="text-sm text-subtle mb-5 flex-1">
                  {t(`client.offers.items.${key}.pitch`)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs text-accent bg-accent/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  name={t(`client.offers.items.${key}.cta`)}
                  onClick={() =>
                    window.open(
                      `https://wa.me/5585985398517?text=${encodeURIComponent(
                        t(`client.offers.items.${key}.whatsappMessage`)
                      )}`,
                      "_blank"
                    )
                  }
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
