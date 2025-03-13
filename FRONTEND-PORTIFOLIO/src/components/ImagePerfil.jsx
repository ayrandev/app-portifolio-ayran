import React from "react";
import Logo from "../assets/PerfilPortifolio.jpg";

export default function ImagePerfil() {
    return (
        <div className="flex items-center justify-center ">
            <img 
                className="rounded-full border-4 border-double border-[#1BA89A] hover:border-[#00FFEA] w-[70%] sm:w-[100%] max-h-[400px] z-10" 
                src={Logo} 
                alt="Foto Perfil" 
            />
        </div>
    );
}
