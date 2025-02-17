import React from "react";
import NavLink from "./NavLink";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="fixed top-16 right-4 w-64 bg-black bg-opacity-80 backdrop-blur-md 
      border border-[#00E6FF] shadow-[0px_0px_15px_#00E6FF] rounded-lg 
      animate-slide-in p-4 z-50">
      
      {/* Close Button (X) */}
      <button onClick={onClose} className="absolute top-2 right-2 text-[#00E6FF] 
        hover:text-white transition-all duration-200">
        <XMarkIcon className="h-6 w-6" />
      </button>

      {/* Hue Rotating Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00E6FF] to-[#FF0080] 
        opacity-10 mix-blend-overlay animate-hue-rotate rounded-lg" />

      {/* Navigation Links */}
      <ul className="flex flex-col items-center space-y-3">
        {links.map((link, index) => (
          <li key={index} className="group">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
