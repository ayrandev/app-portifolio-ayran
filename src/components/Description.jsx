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
        
            <body id="Description" className="bg-[#000F0C] flex justify-evenly font-sans w-screen ">
                <div>
                    <ImagePerfil />
                </div>
                    <div>
                        <div>
                        <p className="font-[Poppins] pb-2 text-xl text-indigo-100 bg-clip-text">
                                Olá, eu me chamo:
                            </p>
                            <ReactTyped
                                strings={[
                                    '<span class="font-[Poppins] text-5xl bg-gradient-to-r from-blue-500 via-green-500 to-indigo-100 text-transparent bg-clip-text">Ayran Vieira<p class="font-[Poppins] text-2xl bg-gradient-to-r from-blue-500 via-green-500 to-indigo-100 text-transparent bg-clip-text">Desenvolvedor</p></span>',
                                ]}
                                typeSpeed={50}
                            />
                        </div>
                        <div className="w-80">
                            <p className="font-[Poppins] text-xl text-indigo-100">
                                 <span>Entrego soluções digitais que impulsionam negócios e conectam pessoas.</span>
                            </p>
                            <Button onClick={() => scrollToSection('CardsAbout')} name="About-me" />
                        </div>
                </div>
            </body>
        
    );
}

