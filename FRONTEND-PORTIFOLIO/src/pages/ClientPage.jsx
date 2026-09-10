import Hero from "../features/client-site/Hero";
import BackHomeButton from "../components/ui/BackHomeButton";
import About from "../features/client-site/About";
import TechBackground from "../components/ui/TechBackground";
import Offers from "../features/client-site/Offers";
import Projects from "../features/client-site/Projects";
import ThemeToggle from "../theme/ThemeToggle";

export default function ClientPage() {
  return (
    <div className="relative min-h-screen bg-canvas overflow-hidden">

      <TechBackground />
      <BackHomeButton />
      <ThemeToggle className="fixed z-40 top-6 right-20" />

      <div>
        <Hero />
        <Offers />
        <Projects />
        <About />
      </div>

    </div>
  );
}
