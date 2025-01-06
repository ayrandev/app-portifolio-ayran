import React from "react";
import Cards from "./Cards";
import  Button  from "./Button";

import { FaGithub } from "react-icons/fa";

export default function PageProjects () {

    return(
        <section id="MyProjects" className="justify-items-center bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 pt-16 h-screen w-screen">
            <div className="h-34 w-full text-center">
                <h1 className="font-[Poppins] font-bold text-3xl text-center bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 text-transparent bg-clip-text">Meus Projetos</h1>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-8">
                <div>
                    <Cards
                        Icon={<FaGithub className="text-black text-6xl"/>}
                        className={`h-64 w-96 bg-gray-200 border`}
                        Button={<Button className="rounded-full h-10" Icon={<FaGithub/>}/>}
                    />
                    <div className="flex flex-col justify-center gap-6">  
                        
                    </div>
                </div>

                <div>
                    <Cards
                        Icon={<FaGithub className="text-black text-6xl"/>}
                        className={`h-64 w-96 bg-gray-200 border`}
                        Button={<Button className="rounded-full h-10" Icon={<FaGithub/>}/>}
                    />
                </div>

                <div>
                    <Cards
                        Icon={<FaGithub className="text-black text-6xl"/>}
                        className={`h-64 w-96 bg-gray-200 border`}
                        Button={<Button className="rounded-full h-10" Icon={<FaGithub/>}/>}
                    />
                </div>

                <div >
                    <Cards
                        Icon={<FaGithub className="text-black text-6xl"/>}
                        className={`h-64 w-96 bg-gray-200 border`}
                        Button={<Button className="rounded-full h-10" Icon={<FaGithub/>}/>}
                    />
                </div>
            </div>
        </section>
    )
}