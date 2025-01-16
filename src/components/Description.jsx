import React from "react";
import { ReactTyped } from "react-typed";

import ImagePerfil from "./ImagePerfil";
import Button from "./Button";
import GifBackGround from "./GifBackGround";



export default function Description() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    return (
            <body id="Description" className="bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 flex justify-evenly font-sans w-screen relative">
                <GifBackGround/>
                <div>
                    <ImagePerfil />
                </div>
                    <div>
                        <div className="w-[350px]">
                        <p className="font-[Poppins] pb-2 text-xl text-indigo-100 bg-clip-text">
                                Olá, eu sou: </p>
                                <span className="font-[Poppins] text-5xl bg-gradient-to-r from-blue-500 via-green-300 to-indigo-200 text-transparent bg-clip-text">
                                    Ayran Vieira </span>
                                <span className="font-[Poppins] text-2xl bg-gradient-to-l from-blue-500 via-green-300 to-indigo-200 text-transparent bg-clip-text"> Desenvolvedor </span>
                                <ReactTyped
                                strings={[
                                    `<span class="font-mono text-3xl text-white ">
                                    WEB</span>`,
                                    `<span class="font-mono text-3xl text-white ">
                                    Criative</span>`,
                                ]}
                                typeSpeed={40}
                                backSpeed={40}
                                loop
                                cursorChar="<span class='text-white'>|</span>"
                                />
                            
                        </div>
                        <div className="w-80 pt-4">
                                
                        <p className="font-[Poppins] text-xl font-mono text-3xl text-indigo-100"> Entrego soluções digitais que impulsionam negócios e conectam pessoas.</p>
                            
                            <Button onClick={() => scrollToSection('CardsAbout')} name="Sobre mim" />
                        </div>
                </div>
            </body>
        
    );
}

