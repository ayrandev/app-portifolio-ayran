import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
    return (
      <footer className="flex justify-center items-center bg-black py-4">
        <div className="flex justify-center items-center text-center text-indigo-100 text-sm gap-2">
          <FaRegCopyright className="text-indigo-100"/>
          <span>Ayran Vieira</span>
          <span>|</span>
          <span className="text-indigo-200 hover:text-indigo-400">ayran.developer@gmail.com</span>
        </div>
      </footer>
    )
}