import Hero from "../features/dev-portfolio/Hero";
import Nav from "../features/dev-portfolio/Nav";
import About from "../features/dev-portfolio/About";
import Experience from "../features/dev-portfolio/Experience";
import Contact from "../features/dev-portfolio/Contact";
import Projects from "../features/dev-portfolio/Projects";
import BackHomeButton from "../components/ui/BackHomeButton";
import TechBackground from "../components/ui/TechBackground";
import ThemeToggle from "../theme/ThemeToggle";

export default function DevPortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas">

      {/* BACKGROUND GLOBAL */}
      <TechBackground />

      {/* CONTEÚDO */}
      <div className="relative z-10">

        <BackHomeButton />
        <ThemeToggle className="fixed z-40 top-6 right-20" />
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />

      </div>

    </div>
  );
}
