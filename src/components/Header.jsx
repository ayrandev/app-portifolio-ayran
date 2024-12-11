import React from "react";
import { NavLink } from "react-router-dom";


export default function Header(){
    return(
        <div className="fixed w-full bg-black ">
            <div className=" py-4 px-6 justify-self-center">
                <nav className="flex items-center relative">
                    <ul className="flex gap-20">
                        <li className="font-mono text-xl hover:scale-110">
                            <NavLink to="/" className="text-purple-600 hover:text-purple-400"> Home </NavLink>
                        </li>
                        <li className="font-mono text-xl hover:scale-110">
                            <NavLink to="/AboutPage" className="text-purple-600 hover:text-purple-400"> About-me </NavLink>
                        </li>
                        <li className="font-mono text-xl hover:scale-110">
                            <NavLink to="/" className="text-purple-600 hover:text-purple-400"> Projects </NavLink>
                        </li>
                        <li className="font-mono text-xl hover:scale-110">
                            <NavLink to="/" className="text-purple-600 hover:text-purple-400"> Contact-me </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

 