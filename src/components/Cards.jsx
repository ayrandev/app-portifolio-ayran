import React from "react";

const Cards = ({ title, description }) => {
  return (
    <div className="relative w-64 h-32 overflow-hidden rounded-lg shadow-lg group border-b-[1px] border-[#00FFEA]">
      <h1 className="w-full h-full object-cover transition-transform duration-300 group-hover:translate-x-full font-[Poppins] text-2xl text-center font-bold mb-2">{title}</h1>
     
      <div className="absolute inset-0 bg-black text-white flex flex-col justify-center items-center text-center p-4 translate-x-full transition-transform duration-300 group-hover:translate-x-0">

        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
