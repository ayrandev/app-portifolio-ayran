import React from "react";
import { ReactTyped } from "react-typed";

import ImagePerfil from "./ImagePerfil";
import Button from "./Button";
import GifBackGround from "./GifBackGround";



export default function Description() {
    return (
            <body id="Home" className="bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 flex justify-evenly font-sans w-screen relative">
                <GifBackGround/>
                <div>
                    <ImagePerfil />
                </div>
                    <div>
                        <div className="w-[350px]">
                        <p className="font-[Poppins] ml-2 text-indigo-100 bg-clip-text">
                                Olá, eu sou: </p>
                                <span className="font-[Poppins] text-5xl bg-gradient-to-r from-blue-500 via-[#00FFEA] to-green-500 text-transparent bg-clip-text">
                                    Ayran Vieira </span>
                                <span className="font-[Poppins] font-bold text-xl text-indigo-100"> Desenvolvedor </span>
                                <ReactTyped
                                strings={[
                                    `<span class="font-mono font-bold text-2xl text-[#00FFEA]">WEB</span>`,
                                    `<span class="font-mono font-bold text-2xl text-[#00FFEA]">Full Stack</span>`,
                                    `<span class="font-mono font-bold text-2xl text-[#00FFEA]">Criativo</span>`,
                                    `<span class="font-mono font-bold text-2xl text-[#00FFEA]">Dinâmico</span>`,
                                    `<span class="font-mono font-bold text-2xl text-[#00FFEA]">Inovador</span>`,

                                ]}
                                typeSpeed={40}
                                backSpeed={40}
                                loop
                                cursorChar="<span class='text-white'>|</span>"
                                />
                            
                        </div>
                        <div className="w-80 pt-4">
                                
                        <p className="font-[Poppins] text-xl font-mono text-3xl text-white"> Transformando ideias em experiências digitais impactantes.</p>
                        </div>
                    </div>
                    
            </body>
        
    );
}

