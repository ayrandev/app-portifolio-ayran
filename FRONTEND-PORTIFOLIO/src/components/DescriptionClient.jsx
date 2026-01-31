import Button from "./Button";
import GifBackGround from "./GifBackGround";

export default function DescriptionClient() {
  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center px-6
        bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950
      "
    >
      <GifBackGround />

      <div className="relative max-w-4xl text-center space-y-8 z-10">
        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Seu site profissional começa aqui
        </h1>

        {/* Subtítulo */}
        <p className="text-indigo-200 text-base md:text-lg leading-relaxed">
          Crio sites modernos, rápidos e responsivos para profissionais, empresas
          e projetos que querem se destacar no digital e transmitir
          credibilidade.
        </p>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "🚀 Presença profissional",
              text:
                "Um site que valoriza sua marca e passa confiança logo no primeiro acesso.",
            },
            {
              title: "📱 Responsivo",
              text: "Seu site perfeito em celulares, tablets e computadores.",
            },
            {
              title: "⚡ Performance",
              text:
                "Sites rápidos, leves e pensados para boa experiência do usuário.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-black/50 border border-[#00FFEA]/30 rounded-xl p-6"
            >
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-indigo-200 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button
            name="Quero um orçamento"
            onClick={() =>
              window.open(
                "https://wa.me/5585985398517?text=Olá! Gostaria de solicitar um orçamento para um site.",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </section>
  );
}
