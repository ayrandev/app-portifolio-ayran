import React from "react";
import Logo from "../assets/PerfilPortifolio.jpg";

export default function ImagePerfil() {
    return (
        <div className="flex items-center justify-center border-2">
            <img 
                className="rounded-full border-4 border-double border-[#00FFEA] hover:border-purple-600 w-[400px] max-h-[400px]" 
                src={Logo} 
                alt="Foto Perfil" 
            />
        </div>
    );
}
