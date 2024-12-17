import React from "react";

export default function CardsProject(props) {
    return(
        <section className="h-screen bg-zinc-950">
           <div className="flex justify-center border-[1px] h-[400px] w-[350px] border-double border-purple-600 hover:border-purple-900 rounded-xl">
                {props.name} <h2>asdf</h2>
            </div> 
        </section>   
    )
}