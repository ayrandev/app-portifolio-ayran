import Description from "../components/Description";
import Header from "../components/Header"
import CardsAbout from "../components/CardsAbout";



function App (){
    return(
        <>
            <Header/>
            <Description/>
            <div className="border-b-[1px]"></div>
            <CardsAbout/>
            
        </>
    )
}

export default App;