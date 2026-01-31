import DescriptionClient from "../components/DescriptionClient";
import ProjectsClient from "./ProjectsClient";
import FormContact from "./FormContact";
import BackHomeButton from "../components/BackHomeButton";

export default function ClientPage() {
  return (
    <>
      <BackHomeButton />
      <DescriptionClient />
      <ProjectsClient />
      <FormContact />
    </>
  );
}
