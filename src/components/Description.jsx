import React from "react";
import ImagePerfil from "./ImagePerfil";
import { ReactTyped } from "react-typed";
import Button from "./Button";

export default function Description() {
    return (
        <div className="min-h-screen w-screen bg-zinc-950 flex flex-col justify-center items-center overflow-x-hidden ">
            <div className="flex flex-col items-center w-full ">
                <ImagePerfil />
            </div>
            <div className="flex flex-col items-center text-center w-full max-w-[600px] ">
                <ReactTyped
                    strings={[
                        '<span class="font-mono text-purple-600 text-3xl">{Ayran Vieira}</span>',
                        '<span class="font-mono text-purple-600 text-3xl"> Desenvolvedor Web Jr. </span>',
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                <p className="font-mono text-white text-lg leading-8 my-4">
                    Seja bem-vindo ao meu perfil! Aqui você vai conhecer um pouco sobre minha trajetória na área de desenvolvimento web!
                </p>
                <Button name="About-me" />
            </div>
        </div>
    );
}

