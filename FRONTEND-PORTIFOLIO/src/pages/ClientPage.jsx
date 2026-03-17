import DescriptionClient from "../components/DescriptionClient";
import ProjectsClient from "./ProjectsClient";
import BackHomeButton from "../components/BackHomeButton";
import About from "./About";
import TechBackground from "../components/TechBackGround";

export default function ClientPage() {
  return (
    <div className="relative min-h-screen bg-[#061B15] overflow-hidden">

      {/* Background global */}
      <TechBackground />

      <div className="relative z-10">
        <BackHomeButton />
        <DescriptionClient />
        <ProjectsClient />
        <About />

      </div>

    </div>
  );
}
