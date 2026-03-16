import { useTranslation } from "react-i18next";

export default function Button({ Icon, name, onClick, variant = "primary" }) {
  const { t } = useTranslation();

  const variants = {
    primary:
      "bg-[#E7E3C9] text-[#0E3B2E] border border-[#E7E3C9] hover:bg-[#F2EFD7] shadow-lg shadow-black/20",

    outline:
      "bg-white/5 backdrop-blur-xl border border-white/15 text-[#E7E3C9] hover:bg-white/10",
  };

  const renderIcon = () => {
    if (!Icon) return null;

    if (typeof Icon === "object") return Icon;

    if (typeof Icon === "function") return <Icon />;

    return null;
  };

  return (
    <div className="pt-2 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className={`
          rounded-xl h-12 w-full max-w-[320px]
          flex items-center justify-center gap-2
          font-medium text-sm
          transition-all duration-300
          hover:scale-[1.03]
          active:scale-[0.98]
          px-6
          ${variants[variant]}
        `}
      >
        {renderIcon()}
        <span>{t(name)}</span>
      </button>
    </div>
  );
}