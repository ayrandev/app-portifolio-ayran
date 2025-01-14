import React from "react";
import Animation from "../assets/Animation.png"

 const GifContact = () => {
    return(
       <div>
        <img
            className=""
            src={Animation}
            alt="Minha animação"
            style={{width: "400px", opacity: 0.1, z: 10}}
        />
       </div>
    )
}

export default GifContact;