import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer () {
    return(
        <footer className="flex">
            <div className="flex justify-center items-center w-full gap-20 h-14 border">
                <IoLogoInstagram className="" />
                <IoLogoWhatsapp />
                <FaLinkedin/>
                <FaGithub/>
                <MdOutlineEmail />
                <FaRegCopyright />
            </div>
        </footer>
    )
}