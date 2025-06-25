import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      aria-pressed={active}
      className="
        relative text-lg font-semibold py-2 px-4
        transition-all duration-200
        outline-none ring-0 focus:outline-none focus:ring-0
        bg-transparent border-none
      "
      whileHover={{ scale: 1.05 }}
    >
      <span className={active ? "text-white" : "text-gray-400"}>{children}</span>

      <motion.div
        className="h-1 mt-1 bg-gradient-to-r from-purple-400 to-pink-600"
        initial={false}
        animate={{ width: active ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default TabButton;