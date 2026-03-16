import DescriptionClient from "../components/DescriptionClient";
import ProjectsClient from "./ProjectsClient";
import BackHomeButton from "../components/BackHomeButton";

export default function ClientPage() {
  return (
    <>
      <BackHomeButton />
      <DescriptionClient />
      <ProjectsClient />

    </>
  );
}
