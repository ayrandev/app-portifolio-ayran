export default function Button({ Icon, name, onClick, variant = "outline" }) {
  const variants = {
    outline:
      "bg-transparent border border-[#00FFEA] hover:border-[#00FFFF] text-white",
    primary:
      "bg-[#00FFEA] border border-[#00FFEA] text-black hover:bg-[#00FFFF]",
  };

  const renderIcon = () => {
    if (!Icon) return null;

    // Se for JSX (<Icon />)
    if (typeof Icon === "object") {
      return Icon;
    }

    // Se for componente (Icon)
    if (typeof Icon === "function") {
      return <Icon />;
    }

    return null;
  };

  return (
    <div className="pt-2 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className={`
          rounded-full font-[Poppins] h-8 w-full max-w-[36vh] gap-2
          flex items-center justify-center cursor-pointer
          transition-all duration-300 hover:scale-105 px-4
          ${variants[variant]}
        `}
      >
        {renderIcon()}
        <span className="text-sm font-medium">{name}</span>
      </button>
    </div>
  );
}
