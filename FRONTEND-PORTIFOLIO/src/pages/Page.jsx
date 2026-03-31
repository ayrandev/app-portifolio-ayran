import Description from "../components/components_portifolio/Description";
import Header from "../components/components_portifolio/Header";
import PageAbout from "../components/components_portifolio/PageAbout";
import FormContact from "../components/components_portifolio/FormContact";
import PageProjects from "../components/components_portifolio/PageProjects";
import BackHomeButton from "../components/BackHomeButton";
import TechBackGround from "../components/components_site/TechBackGround";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#061B15]">

      {/* BACKGROUND GLOBAL */}
      <TechBackGround />

      {/* CONTEÚDO */}
      <div className="relative z-10">

        <BackHomeButton />
        <Header />
        <Description />
        <PageAbout />
        <PageProjects />
        <FormContact />

      </div>

    </div>
  );
}