import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "Home", key: "dev.nav.home" },
  { id: "About-me", key: "dev.nav.about" },
  { id: "Experience", key: "dev.nav.experience" },
  { id: "Projects", key: "dev.nav.projects" },
  { id: "Contact", key: "dev.nav.contact" },
];

export default function Nav() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* DESKTOP */}
      <header className="hidden md:flex fixed w-screen justify-center items-center bg-transparent z-50">
        <div className="flex justify-center items-center py-2 px-10 w-full">
          <nav>
            <ul className="flex flex-row gap-10">
              {NAV_ITEMS.map(({ id, key }) => (
                <li key={id} className="hover:scale-110">
                  <Link
                    to="#"
                    onClick={goTo(id)}
                    className="text-ink hover:text-accent relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-accent before:duration-300 hover:before:w-full"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* MOBILE */}
      <div className="md:hidden fixed top-6 left-6 z-50">
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="w-10 h-10 rounded-full border border-line bg-surface/80 backdrop-blur-md flex items-center justify-center text-ink"
        >
          {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {menuOpen && (
          <nav className="mt-3 w-52 rounded-2xl border border-line bg-surface/95 backdrop-blur-md shadow-lg overflow-hidden">
            <ul className="flex flex-col">
              {NAV_ITEMS.map(({ id, key }) => (
                <li key={id}>
                  <Link
                    to="#"
                    onClick={goTo(id)}
                    className="block px-5 py-3 text-ink hover:text-accent hover:bg-accent/5 transition"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}
