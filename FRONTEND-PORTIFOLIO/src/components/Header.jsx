import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="bg-[#000F0C] border-b-[1px] border-[#00FFEA]">
      <div className="flex justify-center py-2">
        <nav>
          <ul className="hidden sm:flex gap-10">
            {["Home", "About-me", "Projects", "Contact"].map((item) => (
              <li key={item} className="font-[Poppins] hover:scale-110">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
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