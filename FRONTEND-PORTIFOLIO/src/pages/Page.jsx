import Description from "../components/components_portifolio/Description";
import Header from "../components/components_portifolio/Header"
import PageAbout from "../components/components_portifolio/PageAbout";
import FormContact from "../components/components_portifolio/FormContact";
import PageProjects from "../components/components_portifolio/PageProjects";
import BackHomeButton from "../components/BackHomeButton";



export default function Page (){
    return(
        <>
            <BackHomeButton />
            <Header/>
            <Description />
            <PageAbout/>
            <PageProjects/>
            <FormContact/>
        </>
    )
}

 