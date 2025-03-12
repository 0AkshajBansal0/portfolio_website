"use client";
import { EDUCATION } from "@/constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Education = () => {
    const [hoverStyle, setHoverStyle] = useState({});

    const handleMouseMove = (e, index) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setHoverStyle((prev) => ({
            ...prev,
            [index]: { "--x": `${x}%`, "--y": `${y}%` },
        }));
    };

    return (
        <div className="border-b border-neutral-900 py-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
            >
                Education
            </motion.h2>

            <div className="space-y-8">
                {EDUCATION.map((education, index) => (
                    <div
                        key={index}
                        className="relative p-6 transition-all duration-300 group border border-transparent rounded-lg"
                        style={hoverStyle[index]}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => setHoverStyle((prev) => ({ ...prev, [index]: {} }))}
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -80 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/4"
                        >
                            <p className="mb-2 text-sm text-gray-400">
                                {education.year}
                            </p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 80 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold text-white relative z-10">
                                {education.role} -{" "}
                                <span className="text-sm text-purple-300">
                                    {education.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-gray-300 relative z-10">
                                {education.description}
                            </p>

                            {education.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {education.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="rounded-lg bg-gray-900 px-3 py-1 text-sm font-medium text-purple-400 border border-purple-500/40 shadow-inner"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* Neon Glow Effect */}
                        <div
                            className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300 group-hover:border-purple-500"
                            style={{
                                background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.15), transparent 60%)`,
                                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.3))",
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.3))",
                            }}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
