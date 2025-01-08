import React from "react";

export default function PageContact () {
    return(
        <section id="MyContact" className="bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 pt-16 h-screen">
            <div className="flex justify-end items-center border">
                <form className="" action="">
                    <div>
                        <label >Nome*</label>
                        <input type="text" name="name" placeholder="Digite seu nome" required/>
                    </div>
                    <div>
                        <label >Nome*</label>
                        <input type="text" name="name" placeholder="Digite seu nome" required/>
                    </div>
                    <div>
                        <label >Nome*</label>
                        <input type="text" name="name" placeholder="Digite seu nome" required/>
                    </div>
                    <div>
                       <label >Qual motivo do seu contato:*</label>
                        <textarea name="message" placeholder="Digite sua menssagem" required></textarea> 
                    </div>
                    
                </form>
            </div>
            
        </section>

    )
}