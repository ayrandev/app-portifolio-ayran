import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import  Button  from "./Button";
import { FaGithub } from "react-icons/fa";



export default function CardsAbout (){
   
    return(
        <section className="min-h-screen bg-zinc-950">
            <div className="flex justify-evenly pt-16">
                <div className=" flex justify-center border-2 border-slate-300 h-[400px] w-[350px] shadow-2xl shadow-purple-400 rounded-xl hover:scale-110">
                    <div>
                        <h1 className=" pt-6 font-mono text-purple-600 text-3xl">Soft-Skills</h1>
                    </div>
                     <div className="self-end absolute pb-4 flex gap-6">
                       <Button  name="LinkedIn" Icon={<FaLinkedin/>}/>
                       <Button  name="Big Five" Icon={<FaDownload/>}/>
                    </div>
                </div>
                <div className=" flex justify-center border-2 border-slate-300 h-[400px] w-[350px] shadow-2xl shadow-purple-400 rounded-xl hover:scale-110">
                    <div>
                        <h1 className=" pt-6 font-mono text-purple-600 text-3xl">Hard-Skills</h1>
                    </div>
                     <div className="self-end absolute pb-4 flex gap-6">
                       <Button  name="GitHub" Icon={<FaGithub/>}/>
                       <Button  name="Curriculo" Icon={<FaDownload/>} />
                    </div>
                </div>
            </div>
        </section>
    )
}