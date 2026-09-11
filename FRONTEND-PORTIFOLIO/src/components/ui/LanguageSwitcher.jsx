import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div
      className="
        flex items-center gap-2
        bg-surface/70
        backdrop-blur-lg
        border border-line
        rounded-full px-4 py-2
      "
    >
      <Globe className="w-4 h-4 text-accent" />

      <button
        onClick={() => i18n.changeLanguage("pt")}
        className="text-sm font-semibold hover:scale-110 hover:text-accent transition"
      >
        🇧🇷
      </button>

      <button
        onClick={() => i18n.changeLanguage("en")}
        className="text-sm font-semibold hover:scale-110 hover:text-accent transition"
      >
        🇺🇸
      </button>
    </div>
  );
}
