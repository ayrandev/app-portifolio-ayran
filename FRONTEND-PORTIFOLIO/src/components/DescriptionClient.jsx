import Button from "./Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import servicesClient from "./servicesClient";

export default function DescriptionClient() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

   <div className="absolute top-6 left-6 z-20">
  <Link to="/" className="flex items-center group">

    {/* LOGO */}
    <img
      src={logo}
      alt="AV Desenvolvimento"
      className="
        w-12 md:w-14 object-contain
        transition duration-300
        group-hover:scale-105
      "
    />

    {/* TEXTO */}
    <div className="flex flex-col leading-tight">

      <span className="title-font text-base md:text-lg text-[#E5E7EB] font-semibold tracking-tight">
        Ayran Vieira
      </span>

      <span className="text-xs text-[#9CA3AF] tracking-wide group-hover:text-[#00D1A0] transition">
        Soluções Digitais
      </span>

    </div>

  </Link>
</div>
      <div className="relative grid md:grid-cols-2 gap-16 max-w-7xl items-center z-10">

        {/* TEXTO */}
        <div className="space-y-8">

          <h1 className="title-font text-5xl md:text-6xl font-bold text-[#E5E7EB]">
            {t("client.hero.title")}
          </h1>

          <p className="text-lg text-[#9CA3AF] max-w-lg leading-relaxed">
            {t("client.hero.subtitle")}
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              name={t("client.cta.button")}
              onClick={() =>
                window.open(
                  "https://wa.me/5585985398517?text=Olá! Gostaria de solicitar um orçamento para um site.",
                  "_blank"
                )
              }
            />
          </div>


          <p className="text-sm text-[#9CA3AF]/70">
            {t("client.hero.socialProof")}
          </p>

        </div>

        {/* VISUAL (MANTENDO SUA ESTÉTICA) */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

          {/* BOLINHAS */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>

          <div className="text-sm text-white/70 mb-5 font-medium">
            Soluções digitais
          </div>

          {/* SERVIÇOS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {servicesClient.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="
                group relative overflow-hidden
                text-white/70 bg-white/5 backdrop-blur-xl border border-white/10
                rounded-2xl h-[110px]
                flex items-end
                shadow-xl
                hover:border-[#00D1A0]
                hover:shadow-[0_0_30px_rgba(0,209,160,0.2)]
                transition-all duration-300
                hover:-translate-y-1
                "
              >

                {/* IMAGEM */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

                {/* TÍTULO */}
                <div className="relative z-10 p-3">
                  <h3 className="title-font text-sm text-white font-semibold">
                    {service.title}
                  </h3>
                </div>

                {/* HOVER DESCRIÇÃO */}
                <div className="absolute inset-0 flex items-center justify-center text-center p-3 bg-black/80 opacity-0 group-hover:opacity-100 transition">

                  <p className="text-xs text-gray-300">
                    {service.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}