import { useTranslation } from "react-i18next";
import Button from "../../components/ui/Button";
import { MdLaptopChromebook } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import Portifolio from "../../assets/Portifolio-tecnico.jpeg";
import SonattaSite from "../../assets/sonatta_site.jpeg";
import FlightOnTime from "../../assets/FlightOnTime.jpeg";
import EmilyWebPainel from "../../assets/EmilyWebPainel.jpg";

const PROJECTS = [
  { key: "portfolio", image: Portifolio, link: "https://SEUPORTFOLIO.vercel.app" },
  { key: "sonatta", image: SonattaSite, link: "https://sonattamusic.vercel.app" },
  { key: "system", image: FlightOnTime, link: "https://tech-flight.vercel.app/" },
  { key: "emily", image: EmilyWebPainel, link: "https://emilyweb-three.vercel.app/" },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">

        {/* TÍTULO */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">
            {t("client.projects.title")}
          </h2>
          <p className="text-subtle mt-5 max-w-2xl mx-auto text-lg">
            {t("client.projects.subtitle")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.key}
              className="bg-surface backdrop-blur-xl border border-line rounded-2xl p-6 flex flex-col shadow-xl hover:border-accent transition-all duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.key}
                  className="object-cover h-44 w-full hover:scale-105 transition"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl text-ink font-semibold mb-3">
                  {t(`client.projects.items.${project.key}.title`)}
                </h3>

                <p className="text-sm text-red-400 mb-2">
                  {t(`client.projects.items.${project.key}.problem`)}
                </p>

                <p className="text-sm text-accent mb-4">
                  {t(`client.projects.items.${project.key}.solution`)}
                </p>

                <ul className="text-subtle text-sm space-y-2 mb-6">
                  {t(`client.projects.items.${project.key}.benefits`, { returnObjects: true }).map(
                    (item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent">✔</span>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button
                  Icon={MdLaptopChromebook}
                  name={t(`client.projects.items.${project.key}.buttons.visit`)}
                  onClick={() => window.open(project.link, "_blank")}
                />

                <Button
                  Icon={FaWhatsapp}
                  name={t(`client.projects.items.${project.key}.buttons.request`)}
                  onClick={() =>
                    window.open(
                      `https://wa.me/5585985398517?text=${encodeURIComponent(
                        t(`client.projects.items.${project.key}.whatsappMessage`)
                      )}`,
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
