import React from "react";
import Button from "./Button";
import GifContact from "./GifContact";
import Footer from "./Footer";


export default function PageContact () {
    return(
        <section id="MyContact" className="bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 ">
            <div className="flex items-center">
                <div>
                 <GifContact/>
                </div>
                <div>
                    <form className="border-[#00FFEA] rounded h-[450px]  flex flex-col items-center justify-center gap-4" action="">
                        <div>
                            <label className="flex text-indigo-200 font-[Poppins] ">Nome*</label>
                            <input className="h-8 w-80 bg-transparent border-b-[1px] border-[#00FFEA] text-white" type="text" name="name" placeholder="Digite seu nome" required/>
                        </div>
                        <div>
                            <label className="flex text-indigo-200 font-[Poppins]">Email*</label>
                            <input className="h-8 w-80 bg-transparent border-b-[1px] border-[#00FFEA] text-white" type="email" name="name" placeholder="Digite seu email" required/>
                        </div>
                        <div>
                            <label className="flex text-indigo-200 font-[Poppins]" >Whatsapp*</label>
                            <input className="h-8 w-80  bg-transparent border-b-[1px] border-[#00FFEA] text-white" type="phone" name="name" placeholder="Digite seu whatsapp" required/>
                        </div>
                        <div>
                        <label className="flex text-indigo-200 font-[Poppins]" >Qual motivo do seu contato:*</label>
                            <textarea className="h-24 w-80 rounded bg-transparent border-[1px] border-[#00FFEA] text-white" name="message" placeholder="Digite sua menssagem" required></textarea> 
                        </div>
                        <div className="w-full">
                        <Button name="Enviar"/> 
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </section>

    )
}