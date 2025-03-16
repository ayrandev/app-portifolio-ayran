import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-[#00FFEA] fixed w-screen justify-center items-center flex bg-transparent z-50">
      <div className="flex justify-between sm:justify-center items-center py-2 px-4 sm:px-10 w-full">
        {/* Botão do menu hambúrguer alinhado à esquerda */}
        <button
          className="sm:hidden text-[#00FFEA]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo ou outro conteúdo pode ir aqui */}
        <div className="hidden sm:block">
          {/* Adicione seu logo ou outro conteúdo à direita aqui, se necessário */}
        </div>

        <nav>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row absolute sm:static top-12 left-0 w-full bg-[#000F0C] sm:bg-transparent gap-4 sm:gap-10 p-4 sm:p-0`}
          >
            {["Home", "About-me", "Projects", "Contact"].map((item) => (
              <li key={item} className="font-[Poppins] hover:scale-110">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    window.scrollTo({
                      top: document.querySelector(`#${item}`).offsetTop,
                      behavior: "smooth",
                    });
                  }}
                  className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
