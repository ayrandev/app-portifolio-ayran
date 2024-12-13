import React from "react";
import  Button  from "./Button";

import { FaDownload } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



export default function CardsAbout (){
    
        const handleDownload = () => {
          
          const fileUrl = "../public/cv.pdf"
          const link = document.createElement("a");
          link.href = fileUrl;
          link.download = "Curriculo_AyranDev.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
   
    return(
        <section className="min-h-screen bg-zinc-950">
            <div className="flex justify-evenly pt-16">
                <div className=" flex justify-center border-2 border-slate-300 h-[400px] w-[350px] shadow-2xl shadow-purple-400 rounded-xl hover:scale-110">
                    <div>
                        <h1 className=" pt-6 font-mono text-purple-600 text-3xl">Soft-Skills</h1>
                        <span>
                            <li>
                                eu sou bom
                            </li>
                        </span>
                    </div>
                    
                     <div className="self-end absolute pb-4 flex gap-6">
                       <Button onClick={() => window.open("https://www.linkedin.com/in/ayran-vieira-dev/","_blank")} name="LinkedIn" Icon={<FaLinkedin/>}/>
                       <Button  name="Big Five" Icon={<FaDownload/>}/>
                    </div>
                </div>
                <div className=" flex justify-center border-2 border-slate-300 h-[400px] w-[350px] shadow-2xl shadow-purple-400 rounded-xl hover:scale-110">
                    <div>
                        <h1 className=" pt-6 font-mono text-purple-600 text-3xl">Hard-Skills</h1>
                    </div>
                     <div className="self-end absolute pb-4 flex gap-6">
                       <Button onClick={() => window.open("https://github.com/ayrandev","_blank")} name="GitHub" Icon={<FaGithub/>}/>
                       <Button onClick={handleDownload} name="Currículo" Icon={<FaDownload/>} download="Curriculo_AyranDev.pdf"/>
                    </div>
                </div>
            </div>
        </section>
    )
}