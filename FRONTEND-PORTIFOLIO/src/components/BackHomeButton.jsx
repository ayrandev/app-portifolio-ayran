import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BackToHomeButton() {
  return (
    <Link
      to="/"
      aria-label="Voltar para a página inicial"
      className="
        fixed z-40
        top-6 right-6
        bg-white/10 backdrop-blur-lg
        text-white
        p-3
        rounded-full
        flex items-center justify-center
        border border-white/20
        hover:bg-white/20
        hover:scale-105
        transition-all duration-300
      "
    >
      <ArrowLeft size={18} />
    </Link>
  );
}