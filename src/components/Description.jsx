import React from "react";
import { ReactTyped } from "react-typed";

import ImagePerfil from "./ImagePerfil";
import Button from "./Button";



export default function Description() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    return (
        
            <body id="Description" className=" bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 flex justify-evenly font-sans w-screen ">
                <div>
                    <ImagePerfil />
                </div>
                    <div>
                        <div className="w-80">
                        <p className="font-[Poppins] pb-2 text-xl text-indigo-100 bg-clip-text">
                                Olá, eu me chamo:
                            </p>
                            <ReactTyped
                                strings={[
                                    `<span class="font-[Poppins] text-5xl bg-gradient-to-r from-blue-500 via-green-300 to-indigo-200 text-transparent bg-clip-text">
                                    Ayran Vieira
                                    <span class="font-[Poppins] text-3xl bg-gradient-to-r from-indigo-200 via-green-300 to-blue-500 text-transparent bg-clip-text"> desenvolvedor</span>
                                    </span>`,
                                ]}
                                typeSpeed={30}
                                cursorChar="<span class='typed-cursor text-3xl text-white'>|</span>"
                                contentType="html"
                                />
                        </div>
                        <div className="w-80 pt-2">
                            <p className="font-[Poppins] text-xl text-indigo-100 pb-4">
                                 <span>Entrego soluções digitais que impulsionam negócios e conectam pessoas.</span>
                            </p>
                            <Button onClick={() => scrollToSection('CardsAbout')} name="Sobre mim" />
                        </div>
                </div>
            </body>
        
    );
}

