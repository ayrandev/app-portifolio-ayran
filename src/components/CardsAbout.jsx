import React from "react";
import  Button  from "./Button";

import { FaDownload } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



export default function CardsAbout (){

    const ProfileFeedbackDownload = () => {
        const fileUrl = "../public/ProfileFeedback.pdf"
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "ProfileFeedback_AyranDev.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        }
    
     const CurriculoDownload = () => {
        const fileUrl = "../public/cv.pdf"
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Curriculo_AyranDev.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        }
   
    return(
        <section id="CardsAbout" className="h-screen  bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950">
            <div className="flex justify-evenly pt-32 ">
                <div className="flex justify-center border-[1px] h-[400px] w-[350px] border-double border-purple-600 hover:border-purple-900 rounded-xl">
                <div>
                        <h1 className=" pt-6 font-mono text-center text-purple-600 text-3xl">Soft-Skills</h1>
                        <span>
                           
                        </span>
                    </div>
                    
                     <div className="self-end absolute pb-4 flex gap-6">
                       <Button onClick={() => window.open("https://www.linkedin.com/in/ayran-vieira-dev/","_blank")} name="LinkedIn" Icon={<FaLinkedin/>}/>
                       <Button onClick={ProfileFeedbackDownload} name="Big Five" Icon={<FaDownload/>}/>
                    </div>
                </div>
                <div className="flex justify-center border-[1px] h-[400px] w-[350px] border-purple-600 hover:border-purple-900 rounded-xl ">
                    <div>
                        <h1 className=" pt-6 font-mono text-center text-purple-600 text-3xl">Hard-Skills</h1>
                        <span>
                            
                        </span>
                    </div>
                     <div className="self-end absolute pb-4 flex gap-6">
                       <Button onClick={() => window.open("https://github.com/ayrandev","_blank")} name="GitHub" Icon={<FaGithub/>}/>
                       <Button onClick={CurriculoDownload} name="Currículo" Icon={<FaDownload/>} download="Curriculo_AyranDev.pdf"/>
                    </div>
                </div>
            </div>
        </section>
    )
}