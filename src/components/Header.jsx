import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import cardsAbout from "./PageAbout"



export default function Header(){
    
    return(
        <header className="flex justify-center bg-[#000F0C]">
            <div className=" bg-[#000F0C] border-b-[1px] border-[#00FFEA]">
                <div className="pt-2 pb-[2px] px-10">
                    <nav className="">
                        <ul className="flex gap-10">
                            <li className="font-[Poppins] hover:scale-110 border-transparent">
                                <Link onClick={(e) =>{
                                    e.preventDefault();
                                    window.scrollTo({
                                        top: document.querySelector("#CardsAbout").offsetTop,
                                        behavior: "smooth",
                                    });}}
                                    className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"> Home </Link>
                            </li>
                            <li className="font-[Poppins] hover:scale-110">
                                <Link
                                onClick={(e) =>{
                                    e.preventDefault();
                                    window.scrollTo({
                                        top: document.querySelector("#CardsAbout").offsetTop,
                                        behavior: "smooth",
                                    });}} 
                                    className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"> Aboute-me </Link>
                            </li>
                            <li className="font-[Poppins] hover:scale-110">
                                <Link
                                onClick={(e) =>{
                                    e.preventDefault();
                                    window.scrollTo({
                                        top: document.querySelector("#MyProjects").offsetTop,
                                        behavior: "smooth",
                                    });}}
                                     className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"> Projects </Link>
                            </li>
                            <li className="font-[Poppins]   hover:scale-110">
                                <Link 
                                onClick={(e) =>{
                                    e.preventDefault();
                                    window.scrollTo({
                                        top: document.querySelector("#MyContact").offsetTop,
                                        behavior: "smooth",
                                    });}}
                                     className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"> Contact </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

 