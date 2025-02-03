import React from "react";

const Cards = ({ title, description, className, image, Icon, Buttons }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden rounded-lg shadow-lg group border-r-8 border-[#00FFEA] ${className}`}>
      <div className="w-full flex items-center justify-start p-4 transition-transform duration-300 group-hover:translate-y-full">
        <h1 className="font-[Poppins] text-2xl text-white flex items-center gap-2">
          {Icon} {title} {image}
        </h1>
      </div>
      
      <div className="absolute inset-0 bg-black text-white flex flex-col justify-center items-center text-center p-4 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
        <p className="text-sm">{description}</p>
        {Buttons && <div className="flex justify-end gap-2 mt-4">{Buttons}</div>}
      </div>
    </div>
  );
};

export default Cards;
