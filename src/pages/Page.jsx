import Description from "../components/Description";
import Header from "../components/Header"
import PageAbout from "../components/PageAbout";
import PageContact from "../components/PageContact";
import PageProjects from "../components/PageProjects";



function App (){
    return(
        <>
            <Header/>
            <Description />
            <PageAbout/>
            <PageProjects/>
            <PageContact/>
        </>
    )
}

export default App;