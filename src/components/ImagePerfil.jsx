import React from "react";
import Logo from "../assets/PerfilPortifolio.jpg";

export default function ImagePerfil() {
    return (
        <div className="flex items-center justify-center">
            <img 
                className="rounded-full border-8 border-double border-purple-600 hover:border-purple-900 w-[300px] max-h-[300px] object-cover" 
                src={Logo} 
                alt="Foto Perfil" 
            />
        </div>
    );
}
