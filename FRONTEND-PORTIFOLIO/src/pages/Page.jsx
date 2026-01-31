import Description from "./Description";
import Header from "../components/Header"
import PageAbout from "./PageAbout";
import FormContact from "./FormContact";
import PageProjects from "./PageProjects";
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

 