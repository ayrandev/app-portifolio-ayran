import React from "react";
import Animation from "../assets/Animation.png";

const GifContact = () => {
  return (
    <div className="flex items-end h-[300px] ">
      <img
        className="w-64 sm:w-80 md:w-96 lg:w-[500px] opacity-40 z-10 rounded-lg shadow-lg"
        src={Animation}
        alt="Minha animação"
      />
    </div>
  );
};

export default GifContact;
