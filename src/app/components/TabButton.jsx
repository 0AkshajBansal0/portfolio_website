import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      className="relative text-lg font-semibold py-2 px-4 transition-all duration-200"
      whileHover={{ scale: 1.1 }}
    >
      <span className={active ? "text-white" : "text-gray-400"}>{children}</span>

      {/* Underline Animation with Gradient */}
      <motion.div
        animate={active ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.3 }}
        className="h-1 mt-1 bg-gradient-to-r from-purple-400 to-pink-600"
      />
    </motion.button>
  );
};

export default TabButton;
