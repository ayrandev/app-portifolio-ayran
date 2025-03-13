import Description from "./Description";
import Header from "../components/Header"
import PageAbout from "./PageAbout";
import FormContact from "./FormContact";
import PageProjects from "./PageProjects";



export default function App (){
    return(
        <>
            <Header/>
            <Description />
            <PageAbout/>
            <PageProjects/>
            <FormContact/>
        </>
    )
}

 