import { IoLogoInstagram } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
  { name: "Instagram", icon: <IoLogoInstagram size={36} />, url: "https://instagram.com/ayran.code" },
  { name: "GitHub", icon: <FaGithub size={36} />, url: "https://github.com/ayrandev" },
  { name: "LinkedIn", icon: <FaLinkedin size={36} />, url: "https://www.linkedin.com/in/ayran-vieira-dev/" },
  { name: "WhatsApp", icon: <IoLogoWhatsapp size={36} />, url: "https://wa.me/+5585985398517" },
];

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:flex sm:w-full items-center">
      {socialLinks.map(({ name, icon, url }) => (
        <div
          key={name}
          className="flex flex-col w-full items-center justify-center p-4 bg-surface border border-line rounded-lg hover:border-accent hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => window.open(url, "_blank")}
        >
          <div className="text-ink">{icon}</div>
          <span className="mt-2 text-sm text-subtle font-medium">{name}</span>
        </div>
      ))}
    </div>
  );
}
