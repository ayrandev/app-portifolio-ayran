import React from "react";


export default function Button({ Icon, name, onClick,}){
    
    return(
    <div  onClick={onClick} className="pt-2">
        <button className="bg-transparent rounded-full border-[1px] border-[#00FFEA] hover:border-[#00FFFF] font-[Poppins] text-white h-8 w-[28vh] gap-2 items-center flex justify-center rounded active:scale-95 hover:translate-y-[2px] hover:text-[#A8E5E6] hover:duration-75">{Icon} {name} </button>
    </div>
    )
}