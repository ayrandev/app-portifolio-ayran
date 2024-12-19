import React from "react";
import ImagePerfil from "./ImagePerfil";
import { ReactTyped } from "react-typed";
import Button from "./Button";



export default function Description() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    return (
        
            <body id="Description" className="bg-[#000F0C] font-sans flex justify-evenly items-center w-screen">
                <div className="flex items-cente">
                    <ImagePerfil />
                </div>
                    <div>
                        <div className="flex pt-4">
                            <ReactTyped
                                strings={[
                                    '<span class="font-mono text-purple-600 text-start text-lg">Olá, eu me chamo:</span>',
                                ]}
                                typeSpeed={50}
                                backSpeed={20}
                                loop
                            />
                        </div>
                        <div>
                            <p className="font-[Roboto] text-white text-lg my-4">
                                Seja bem-vindo ao meu perfil! 
                            </p>
                            <Button onClick={() => scrollToSection('CardsAbout')} name="About-me" />
                        </div>
                </div>
            </body>
        
    );
}

