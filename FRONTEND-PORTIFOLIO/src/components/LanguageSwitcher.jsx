import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div
      className="
        absolute top-6 right-6 z-30
        flex items-center gap-2
        bg-gradient-to-r from-cyan-500/20 to-emerald-500/10
        backdrop-blur-lg
        border border-cyan-400
        rounded-full px-4 py-2
        shadow-[0_0_20px_rgba(0,255,234,0.5)]
      "
    >
      <Globe className="w-4 h-4 text-cyan-300" />

      <button
        onClick={() => i18n.changeLanguage("pt")}
        className="
          text-sm font-semibold
          text-white
          hover:scale-110
          hover:text-cyan-300
          transition
        "
      >
        🇧🇷
      </button>

      <button
        onClick={() => i18n.changeLanguage("en")}
        className="
          text-sm font-semibold
          text-white
          hover:scale-110
          hover:text-cyan-300
          transition
        "
      >
        🇺🇸
      </button>
    </div>
  );
}
