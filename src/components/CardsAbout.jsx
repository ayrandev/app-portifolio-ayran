import React from "react";
import  Button  from "./Button";
import Cards from "./Cards";

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
            <div className="flex justify-center pt-16">
                <div className="flex justify-center border-r-[1px] h-[600px] w-[550px] border-[#00FFEA]">
                <div>
                    <h1 className="font-[Poppins] text-3xl text-center bg-gradient-to-r from-blue-500 via-green-300 to-indigo-200 text-transparent bg-clip-text">Soft-Skills</h1>
                    <div>
                    <Cards
                        title="Comunicação"
                        description="This is the description of the card. It will slide in on hover."
                        />
                        <Cards
                        title="Comunicação"
                        description="This is the description of the card. It will slide in on hover."
                        />
                        <Cards
                        title="Comunicação"
                        description="This is the description of the card. It will slide in on hover."
                        />
                        <Cards
                        title="Comunicação"
                        description="This is the description of the card. It will slide in on hover."
                        />
                    </div>                      
                </div>                   
                     <div className="self-end absolute pb-4 flex gap-6">
                       <Button onClick={() => window.open("https://www.linkedin.com/in/ayran-vieira-dev/","_blank")} name="LinkedIn" Icon={<FaLinkedin/>}/>
                       <Button onClick={ProfileFeedbackDownload} name="Big Five" Icon={<FaDownload/>}/>
                    </div>
                </div>
                <div className="flex justify-center h-[600px] w-[550px] ">
                    <div>
                        <h1 className="text-center font-[Poppins] text-3xl bg-gradient-to-r from-indigo-200 via-green-300 to-blue-500 text-transparent bg-clip-text">Hard-Skills</h1>
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