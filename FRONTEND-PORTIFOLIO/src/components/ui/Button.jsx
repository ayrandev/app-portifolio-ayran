import { useTranslation } from "react-i18next";

export default function Button({ Icon, name, onClick, variant = "primary", type = "button" }) {
  const { t } = useTranslation();

  const variants = {
    primary:
      "bg-accent text-black border border-accent hover:brightness-110 shadow-[0_0_25px_-5px_var(--color-accent)] hover:shadow-[0_0_35px_-5px_var(--color-accent)]",

    outline:
      "bg-surface/60 backdrop-blur-xl border border-line text-ink hover:border-accent",
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
        type={type}
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
