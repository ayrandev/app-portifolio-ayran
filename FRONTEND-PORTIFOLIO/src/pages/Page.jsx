import Description from "../components/Description";
import Header from "../components/Header"
import PageAbout from "../components/PageAbout";
import FormContact from "../components/FormContact";
import PageProjects from "../components/PageProjects";



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

 