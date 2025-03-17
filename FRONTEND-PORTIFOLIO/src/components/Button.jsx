import React from "react";


export default function Button({ Icon, name, onClick,}){
    
    return(
        <div onClick={onClick} className="pt-2 flex justify-center">
        <button 
            className="bg-transparent rounded-full border border-[#00FFEA] hover:border-[#00FFFF] 
            font-[Poppins] text-white h-8 w-full max-w-[26vh] gap-2 
            flex items-center justify-center rounded hover:scale-105 cursor-pointer transition-all duration-300 hover:text-[#A8E5E6] transition duration-75 px-4">
            {Icon} {name}
        </button>
    </div>
    )
}