import TechBackground from "../components/TechBackGround";

export default function About() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      <div className="relative max-w-7xl mx-auto z-10">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-[#E7E3C9] mb-6">
            Sobre a AV Soluções Digitais
          </h2>

          <p className="text-[#DCD8B4]/80 leading-relaxed">
            A AV Soluções Digitais é uma empresa especializada no desenvolvimento
            de soluções web modernas, ajudando empresas e profissionais a
            fortalecer sua presença digital com tecnologia, design e estratégia.
          </p>

          <p className="text-[#DCD8B4]/80 mt-4 leading-relaxed">
            Criamos sites profissionais, landing pages e sistemas personalizados
            que unem desempenho, experiência do usuário e inovação para gerar
            mais visibilidade e oportunidades de negócio.
          </p>

          <p className="text-[#DCD8B4]/60 mt-6 text-sm">
            Tecnologia aplicada com foco em resultados reais.
          </p>

        </div>

        {/* pilares */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg">

            <h3 className="text-[#E7E3C9] font-semibold mb-2">
              Tecnologia
            </h3>

            <p className="text-[#DCD8B4]/70 text-sm">
              Desenvolvimento moderno com foco em desempenho e escalabilidade.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg">

            <h3 className="text-[#E7E3C9] font-semibold mb-2">
              Design
            </h3>

            <p className="text-[#DCD8B4]/70 text-sm">
              Interfaces elegantes pensadas para gerar confiança e conversão.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg">

            <h3 className="text-[#E7E3C9] font-semibold mb-2">
              Estratégia
            </h3>

            <p className="text-[#DCD8B4]/70 text-sm">
              Soluções digitais alinhadas com os objetivos do seu negócio.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}