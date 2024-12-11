import React from "react"
import Logo from "../assets/perfil.jpg"

export default function ImagePerfil(){
    return(
        <img className="h-[300px] w-[300px] rounded-full border-8 border-double border-purple-600 hover:border-purple-900 " src={Logo} alt="Foto Perfil" />
    )
}