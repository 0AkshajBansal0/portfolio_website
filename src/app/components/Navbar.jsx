"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Education", path: "#education" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav
        className="
          fixed inset-x-0 top-0 z-50 border-b border-[#00E6FF]
          bg-black/90 backdrop-blur-md
          shadow-[0_0_15px_#00E6FF] transition-all duration-300
        "
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:py-4">
          <Link href="/" className="text-2xl md:text-5xl font-semibold">
            <span
              className="
                bg-gradient-to-r from-[#00E6FF] to-[#FF0080]
                bg-clip-text text-transparent transition-transform
                duration-300 ease-in-out hover:scale-110
              "
            >
              Portfolio
            </span>
          </Link>

          <button
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="
              md:hidden flex items-center px-3 py-2 border rounded
              transition-all duration-300 transform
              border-[#00E6FF] text-[#00E6FF]
              hover:text-[#FF0080] hover:border-[#FF0080]
              hover:scale-110
            "
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className={navbarOpen ? "blur-md transition-all duration-300" : ""} />
      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          onClose={() => setNavbarOpen(false)}
          renderLink={(link) => (
            <NavLink
              href={link.path}
              title={link.title}
              onClick={() => setNavbarOpen(false)}
            />
          )}
        />
      )}
    </>
  );
};

export default Navbar;