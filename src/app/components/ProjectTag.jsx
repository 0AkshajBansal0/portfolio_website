import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const tagColors = {
    All: "bg-gradient-to-r from-purple-500 to-pink-500",
    "Full-Stack": "bg-gradient-to-r from-blue-500 to-green-500",
    "AI-ML": "bg-gradient-to-r from-yellow-400 to-green-500",
    DSA: "bg-gradient-to-r from-red-500 to-orange-500",
  };

  return (
    <button
      className={`${
        isSelected ? tagColors[name] + " text-white" : "bg-gray-800 text-gray-300"
      } rounded-full px-6 py-3 text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 shadow-md`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
