import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function SocialMedia () {
    const InstaRedirect = () => {
        window.open('https://instagram.com/ayran.code', '_blank');
    };
    const GitHubRedirect = () => {
        window.open('https://github.com/ayrandev', '_blank');
    };
    const LinkedinRedirect = () => {
        window.open('https://www.linkedin.com/in/ayran-vieira-dev/', '_blank');
    };
    const WhatsappRedirect = () => {
        window.open('https://wa.me/+5585985398517', '_blank');
    };

    return (
        <div className="grid grid-cols-2 gap-8 sm:flex sm:flex sm:w-[100%] items-center">
            {/* Card Instagram */}
            <div
                className="flex flex-col w-[100%] items-center justify-center p-4 bg-black bg-opacity-50 rounded-lg shadow-lg hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
                onClick={InstaRedirect}
            >
                <IoLogoInstagram size={40} className="text-indigo-100 hover:text-[#A8E5E6]" />
                <span className="mt-2 text-white font-semibold">Instagram</span>
            </div>

            {/* Card GitHub */}
            <div
                className="flex flex-col w-[100%] items-center justify-center p-4 bg-black bg-opacity-50 rounded-lg shadow-lg hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
                onClick={GitHubRedirect}
            >
                <FaGithub size={40} className="text-indigo-100 hover:text-[#A8E5E6]" />
                <span className="mt-2 text-white font-semibold">GitHub</span>
            </div>

            {/* Card LinkedIn */}
            <div
                className="flex flex-col w-[100%] items-center justify-center p-4 bg-black bg-opacity-50 rounded-lg shadow-lg hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
                onClick={LinkedinRedirect}
            >
                <FaLinkedin size={40} className="text-indigo-100 hover:text-[#A8E5E6]" />
                <span className="mt-2 text-white font-semibold">LinkedIn</span>
            </div>

            {/* Card WhatsApp */}
            <div
                className="flex flex-col w-[100%] items-center justify-center p-4 bg-black bg-opacity-50 rounded-lg shadow-lg hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
                onClick={WhatsappRedirect}
            >
                <IoLogoWhatsapp size={40} className="text-indigo-100 hover:text-[#A8E5E6]" />
                <span className="mt-2 text-white font-semibold">WhatsApp</span>
            </div>
        </div>
    );
}
