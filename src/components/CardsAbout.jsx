import React from "react";

export default function CardsAbout (){
    return(
        <section className="min-h-screen bg-zinc-950">
            <div className="flex justify-evenly pt-16">
                <div className="border-2 border-slate-300 h-[400px] w-[350px] shadow-2xl shadow-purple-400 rounded-xl hover:scale-110">
                    <div>
                        <h1 className=" pt-6 font-mono text-purple-600 text-3xl text-center">Soft-Skills</h1>
                    </div>
                    <div className="">
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className=" border-2 border-slate-300 h-[400px] w-[350px] shadow-2xl shadow-purple-400 rounded-xl hover:scale-110">
                    <h1 className=" pt-6 font-mono text-purple-600 text-3xl text-center">Hard-Skills</h1>
                </div>
            </div>
        </section>
    )
}