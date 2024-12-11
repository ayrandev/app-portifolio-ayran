import React from "react"
import ImagePerfil from "./ImagePerfil"
import { ReactTyped } from "react-typed"
import ButtonHome from "./ButtonHome"


 export default function Description (){
return(
    <div className="min-h-screen bg-zinc-950 flex items-center w-screen flex-row-reverse"> 
        <div className="m-[200px]">
            
        <ReactTyped
                strings={[
                    '<span class="font-mono text-purple-600 text-3xl">Ayran Vieira</span>',
                    '<span class="font-mono text-purple-600 text-3xl">Desenvolvedor Web</span>',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                /> 
            <p className="font-mono text-white text-lg leading-8 w-[400px] break-words"> Seja bem-vindo ao meu perfil! Aqui você vai conhecer um pouco sobre minha tragetória na área de desenvolvimento web!</p>
            <ButtonHome/>
        </div>
        <div className="flex h-screen items-center">
            <ImagePerfil/>
        </div>
    </div>
)
}

