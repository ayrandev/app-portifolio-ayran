export default function About() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      <div className="relative max-w-7xl mx-auto z-10">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mb-6">
            Sobre a AV Soluções Digitais
          </h2>

          <p className="text-[#9CA3AF] leading-relaxed">
            Desenvolvemos soluções digitais modernas para empresas que desejam crescer,
            atrair clientes e se destacar no ambiente online.
          </p>

          <p className="text-[#9CA3AF] mt-4 leading-relaxed">
            Criamos sites, sistemas e experiências digitais com foco em performance,
            design e resultado real para o seu negócio.
          </p>

          <p className="text-[#9CA3AF]/70 mt-6 text-sm">
            Tecnologia aplicada com foco em crescimento.
          </p>

        </div>

        {/* pilares */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {[
            {
              title: "Tecnologia",
              desc: "Soluções modernas com alta performance e escalabilidade.",
            },
            {
              title: "Design",
              desc: "Interfaces elegantes focadas em experiência e conversão.",
            },
            {
              title: "Estratégia",
              desc: "Decisões pensadas para gerar resultados reais.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
              bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg
              hover:border-[#00D1A0]
              transition-all duration-300
              "
            >
              <h3 className="text-[#E5E7EB] font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-[#9CA3AF] text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}