import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BackToHomeButton() {
  return (
    <Link
      to="/"
      className="
        fixed z-40
        bottom-6 left-6
        sm:top-6 sm:left-6 sm:bottom-auto
        bg-black/70 backdrop-blur-md
        text-white
        px-4 py-2
        rounded-full
        flex items-center gap-2
        border border-[#00FFEA]
        hover:scale-105 transition-all duration-300
      "
    >
      <ArrowLeft size={18} />
      <span className="hidden sm:block">Início</span>
    </Link>
  );
}
