import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import logo from "../../assets/logo.jpeg";
import servicesClient from "./services.data";

export default function Hero() {
  const { t } = useTranslation();

  const getServiceKey = (id) => {
    const map = {
      1: "institutional",
      2: "ecommerce",
      3: "landing",
      4: "portfolio",
      5: "bots",
      6: "systems",
    };
    return map[id];
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* LOGO */}
      <div className="absolute top-4 left-6 z-20">
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="AV Desenvolvimento"
            className="w-16 object-contain transition duration-300 group-hover:scale-105"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl md:text-lg text-ink font-semibold tracking-tight">
              {t("client.hero.brandName")}
            </span>

            <span className="text-xs text-subtle tracking-wide group-hover:text-accent transition">
              {t("client.hero.brandTag")}
            </span>
          </div>
        </Link>
      </div>

      <div className="relative grid md:grid-cols-2 gap-20 max-w-7xl items-center z-10">

        {/* TEXTO */}
        <div className="space-y-8 md:pt-2 pt-36">
          <h1 className="font-display text-6xl md:text-6xl font-bold text-ink">
            {t("client.hero.title")}
          </h1>

          <p className="text-lg text-subtle max-w-lg leading-relaxed">
            {t("client.hero.subtitle")}
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              name={t("client.cta.button")}
              onClick={() =>
                window.open(
                  `https://wa.me/5585985398517?text=${encodeURIComponent(t("client.hero.whatsappMessage"))}`,
                  "_blank"
                )
              }
            />
          </div>

          <p className="text-sm text-subtle/70">
            {t("client.hero.socialProof")}
          </p>
        </div>

        {/* SERVIÇOS */}
        <div className="bg-surface/80 backdrop-blur-2xl border border-line rounded-2xl p-8">

          {/* BOLINHAS */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>

          <div className="text-sm text-subtle mb-5 font-medium">
            {t("client.services.title")}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {servicesClient.map((service) => {
              const key = getServiceKey(service.id);

              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden text-white/70 bg-surface border border-line rounded-2xl h-[110px] flex items-end shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

                  <div className="relative z-10 p-3">
                    <h3 className="font-display text-sm text-white font-semibold">
                      {t(`client.services.items.${key}.title`)}
                    </h3>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center text-center p-3 bg-black/80 opacity-0 group-hover:opacity-100 transition">
                    <p className="text-xs text-gray-300">
                      {t(`client.services.items.${key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
