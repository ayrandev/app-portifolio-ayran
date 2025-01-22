import React from "react";

export default function Gallery({image, Icon, title, description, Buttons, className }) {
  return (
    <div className={`flex flex-col p-6 rounded-lg shadow-lg bg-zinc-800 ${className}`} style={{ width: "100%", height: "500px" }}>
        <div className="w-full md:w-1/3 h-full overflow-hidden rounded-lg">
            <img
            src={image}
            alt={title || "Projeto"}
            className="object-cover w-full h-full"
            />
        </div>

        <div className="flex items-center gap-4">
            {Icon && <div className="text-4xl">{Icon}</div>}
            {title && <h3 className="text-xl font-bold text-gray-800">{title}</h3>}
        </div>

      {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
      <div className="flex gap-4 mt-auto">{Buttons}</div>
    </div>
  );
}
