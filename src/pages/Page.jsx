import Description from "../components/Description";
import Header from "../components/Header"
import PageAbout from "../components/PageAbout";
import PageProjects from "../components/PageProjects";



function App (){
    return(
        <>
            <Header/>
            <Description />
            <PageAbout/>
            <PageProjects/>
        </>
    )
}

export default App;