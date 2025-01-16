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

    return(
        <div className="flex flex-col">
            <div className="space-y-3">
                <div
                    className="flex items-end space-x-2 cursor-pointer text-indigo-100 hover:text-[#A8E5E6] hover:scale-110 transition-colors"
                    onClick={InstaRedirect}>
                    <IoLogoInstagram size={24} />
                    <span>ayran.code</span>
                </div>
                <div
                    className="flex items-end space-x-2  cursor-pointer text-indigo-100 hover:text-[#A8E5E6] hover:scale-110 transition-colors"
                    onClick={GitHubRedirect}>
                    <FaGithub size={24} />
                    <span>ayrandev</span>
                </div>
                <div
                    className="flex items-end space-x-2  cursor-pointer text-indigo-100 hover:text-[#A8E5E6] hover:scale-110 transition-colors"
                    onClick={LinkedinRedirect}>
                    <FaLinkedin size={24} />
                    <span>ayran-vieira-dev</span>
                </div>
                <div
                    className="flex items-end space-x-2  cursor-pointer text-indigo-100 hover:text-[#A8E5E6] hover:scale-110 transition-colors"
                    onClick={WhatsappRedirect}>
                    <IoLogoWhatsapp size={24} />
                    <span>Ayran Vieira</span>
                </div>
            </div>
            
        </div>
    )
}