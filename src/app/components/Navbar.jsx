"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Education", path: "#education" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2 
        bg-[#000000] border-b border-[#00E6FF] shadow-[0px_0px_15px_#00E6FF] 
        transition-all duration-300 ease-in-out">
        
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          
          {/* Logo */}
          <Link href={"/"} className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-10" />
            <span className="text-2xl md:text-5xl font-semibold 
              bg-gradient-to-r from-[#00E6FF] to-[#FF0080] bg-clip-text text-transparent 
              transition-all duration-300 ease-in-out hover:scale-110">
              Portfolio
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-[#00E6FF] text-[#00E6FF] 
                hover:text-[#FF0080] hover:border-[#FF0080] transition-all transform hover:scale-110 duration-300"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-[#FF0080] text-[#FF0080] 
                hover:text-[#00E6FF] hover:border-[#00E6FF] transition-all transform hover:rotate-180 duration-300"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="menu hidden md:block md:w-auto">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index} className="group">
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Blur Main Content When Menu is Open */}
      <div className={navbarOpen ? "blur-md transition-all duration-300" : ""}>
        {/* Your main content should go here */}
      </div>

      {/* Mobile Side Menu */}
      {navbarOpen && <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}
    </>
  );
};

export default Navbar;
