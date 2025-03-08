import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <>
      {/* Blur Background */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40" 
        onClick={onClose} 
      />

      {/* Side Menu */}
      <div
        className="fixed top-16 right-4 w-64 bg-black bg-opacity-80 backdrop-blur-lg 
        border border-[#00E6FF] shadow-[0px_0px_15px_#00E6FF] rounded-lg 
        animate-slide-in p-4 z-50"
      >
        {/* Hue Rotating Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00E6FF] to-[#FF0080] 
          opacity-10 mix-blend-overlay animate-hue-rotate rounded-lg" />

        {/* Navigation Links */}
        <ul className="flex flex-col items-center space-y-3">
          {links.map((link, index) => (
            <li key={index} className="group" onClick={onClose}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuOverlay;
