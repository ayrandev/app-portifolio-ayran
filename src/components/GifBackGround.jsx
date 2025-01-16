import React from "react";
import Codebg from "../assets/codebg.png";

const GifBackGround = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <img
        className="w-full h-full object-cover opacity-15 pointer-events-none "
        src={Codebg}
        alt="BG Code"
      />
    </div>
  );
};

export default GifBackGround;
