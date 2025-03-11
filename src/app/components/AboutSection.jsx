"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="list-disc pl-5 text-sm sm:text-base"
      >
        <li>Machine Learning</li>
        <li>Computer Vision</li>
        <li>Python, C++</li>
        <li>HTML, CSS, JavaScript, React, Express</li>
        <li>Firebase</li>
        <li>MySQL, MongoDB</li>
        <li>DSA</li>
      </motion.ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="list-disc pl-5 text-sm sm:text-base"
      >
        <li>Oracle - Cloud Infrastructure 2024 Certified Foundations</li>
        <li>NPTEL - Programming in Java</li>
        <li>MATLAB - MATLAB Onramp</li>
        <li>MATLAB - Image Processing Onramp</li>
        <li>Scaler - Master the Fundamentals and Advanced Concepts</li>
        <li>AWS APAC - Solutions Architecture Job Simulation</li>
        <li>Goldman Sachs - Software Engineering Job Simulation</li>
      </motion.ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="list-disc pl-5 text-sm sm:text-base"
      >
        <li>Department Topper - 1st Sem (10.00 GPA)</li>
        <li>Department Topper - 3rd Sem (10.00 GPA)</li>
      </motion.ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section className="text-white py-20 px-4 sm:px-8" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/images/about-image.jpg"
            width={500}
            height={500}
            alt="About Me"
            className="rounded-lg shadow-lg w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover"
          />
        </motion.div>

        <div className="mt-6 md:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            I am a budding Software Engineer passionate about building interactive applications and solving real-world problems. Proficient in HTML, CSS, JavaScript, React, Firebase, and Python, with experience in C++, AI/ML, Computer Vision, and DSA. I have solved 100+ DSA problems across platforms like LeetCode, GFG, and HackerRank. Skilled in Git, GitHub, and database management, with certifications in DBMS, Java, and cloud computing.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-start mt-6 space-x-4">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => setTab(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
