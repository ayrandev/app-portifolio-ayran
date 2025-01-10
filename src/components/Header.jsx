import React from "react";
import { NavLink } from "react-router-dom";



export default function Header(){
    return(
        <header className="flex justify-center">
            <div className="fixed bg-[#000F0C]/10 backdrop-blur-md border-b-[1px] border-[#00FFEA]">
                <div className="pt-2 pb-[2px] px-10">
                    <nav className="">
                        <ul className="flex gap-10">
                            <li className="font-[Poppins] hover:scale-110 border-transparent">
                                <NavLink to="/" className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"> Home </NavLink>
                            </li>
                            <li className="font-[Poppins] hover:scale-110">
                                <NavLink to="/AboutPage" className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"> Aboute-me </NavLink>
                            </li>
                            <li className="font-[Poppins] hover:scale-110">
                                <NavLink to="/" className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"> Projects </NavLink>
                            </li>
                            <li className="font-[Poppins]   hover:scale-110">
                                <NavLink to="/" className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"> Contact </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

 