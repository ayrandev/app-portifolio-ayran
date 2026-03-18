import { useTranslation } from "react-i18next";

export default function Button({ Icon, name, onClick, variant = "primary" }) {
  const { t } = useTranslation();

  const variants = {
    primary:
      "bg-[#00D1A0] text-black border border-[#00D1A0] hover:bg-[#00FFB2] shadow-[0_0_25px_rgba(0,209,160,0.35)] hover:shadow-[0_0_35px_rgba(0,209,160,0.5)]",

    outline:
      "bg-white/5 backdrop-blur-xl border border-white/15 text-[#E5E7EB] hover:bg-white/10",
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
          transition-all duration-300 ease-in-out
          hover:scale-[1.05]
          active:scale-[0.97]
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