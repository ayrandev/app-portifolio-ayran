import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-surface border-t border-line py-3">
      <div className="flex justify-center items-center text-center text-subtle text-sm gap-2">
        <FaRegCopyright />
        <span>Ayran Vieira</span>
        <span>|</span>
        <a href="mailto:ayran.developer@gmail.com" className="hover:text-accent transition">
          ayran.developer@gmail.com
        </a>
      </div>
    </footer>
  );
}
