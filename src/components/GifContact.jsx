import React from "react";
import Animation from "../assets/Animation.png"

 const GifContact = () => {
    return(
       <div>
        <img
            src={Animation}
            alt="Minha animação"
            style={{width: "800px", opacity: 0.2, }}
        />
       </div>
    )
}

export default GifContact;