import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackHomeButton({ className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className={`
        fixed top-6 left-6 z-50
        flex items-center gap-2
        px-4 py-2 rounded-full
        bg-black/60 backdrop-blur-md
        border border-[#00FFEA]
        text-[#00FFEA]
        hover:bg-[#00FFEA]/10
        hover:scale-105
        transition-all duration-300
        ${className}
      `}
    >
      <ArrowLeft size={18} />
      Início
    </button>
  );
}
