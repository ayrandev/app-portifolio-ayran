import DescriptionClient from "../components/components_site/DescriptionClient";
import BackHomeButton from "../components/BackHomeButton";
import About from "../components/components_site/About";
import TechBackGround from "../components/components_site/TechBackGround";
import ProjectsClient from "../components/components_site/ProjectsClient.jsx";


export default function ClientPage() {
  return (
    <div className="relative min-h-screen bg-[#061B15] overflow-hidden">

   <div>
      <TechBackGround />
      <BackHomeButton />
      <DescriptionClient />
      <ProjectsClient />
      <About />
    </div>

    </div>
  );
}