import React from "react";


export default function Button({ Icon, name, onClick}){
    
    return(
    <div  onClick={onClick} className="pt-2">
        <button  className="bg-purple-600 font-mono font-bold text-white max-h-9 w-26 gap-2 items-center flex border-none rounded active:scale-95 hover:bg-purple-900 hover:translate-y-[2px] hover:text-purple-400 hover:duration-75">{Icon} {name} </button>
    </div>
    )
}