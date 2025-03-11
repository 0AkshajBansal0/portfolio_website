"use client";
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Move Handler for Neon Glow
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      className="relative bg-[#101010] rounded-xl shadow-lg overflow-hidden border border-gray-700 transition-all duration-300 w-80 md:w-96"
      onMouseMove={handleMouseMove}
      initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
      whileHover={{
        scale: 1.05,
        rotateX: (mousePos.y - 0.5) * 10,
        rotateY: (mousePos.x - 0.5) * 10,
      }}
    >
      {/* Neon Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${
            mousePos.y * 100
          }%, rgba(255,255,255,0.2), transparent)`,
        }}
      />

      {/* Image Section */}
      <div
        className="h-52 md:h-60 rounded-t-xl transition-all duration-300"
        style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
      />

      {/* Project Details */}
      <div className="p-5 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {/* GitHub Button */}
          <Link href={gitUrl} target="_blank">
            <div className="flex items-center gap-2 px-4 py-2 border rounded-lg transition-all duration-300 hover:bg-white hover:text-black text-sm">
              <CodeBracketIcon className="h-6 w-6" />
              <span>GitHub</span>
            </div>
          </Link>

          {/* Live Preview Button */}
          <Link href={previewUrl} target="_blank">
            <div className="flex items-center gap-2 px-4 py-2 border rounded-lg transition-all duration-300 hover:bg-white hover:text-black text-sm">
              <EyeIcon className="h-6 w-6" />
              <span>Preview</span>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
