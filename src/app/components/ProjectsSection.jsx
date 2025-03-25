"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "DeepTrace",
    description: "AI-powered system that detects deepfakes and verifies content authenticity across text, images, videos, and metadata. ",
    image: "/images/projects/DeepTrace.png",
    tag: ["All", "Full-Stack", "AI-ML"],
    gitUrl: "https://github.com/0AkshajBansal0/DeepTrace",
    previewUrl: "https://deep-trace-web.vercel.app/",
  },
  {
    id: 2,
    title: "AI Trip Planner",
    description: "An AI-based planner that generates personalized travel itineraries.",
    image: "/images/projects/1.png",
    tag: ["All", "Full-Stack", "AI-ML"],
    gitUrl: "https://github.com/0AkshajBansal0/AI-Trip-Planner",
    previewUrl: "https://ai-trip-plannerakshaj.vercel.app",
  },
  {
    id: 3,
    title: "KrishiConnect",
    description: "Connecting farmers, crop prediction, ensuring fair prices, real-time weather updates, market insights.",
    image: "/images/projects/2.png",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/0AkshajBansal0/Hackathon--HotC",
    previewUrl: "https://github.com/0AkshajBansal0/Hackathon--HotC",
  },
  {
    id: 4,
    title: "Path Finding Visualizer",
    description: "A visual representation of pathfinding algorithms like Dijkstra, BFS, DFS & A*.",
    image: "/images/projects/3.png",
    tag: ["All", "DSA"],
    gitUrl: "https://github.com/0AkshajBansal0/PathFinding-Visualizer",
    previewUrl: "https://pathfinding-visualizer-akshaj.vercel.app",
  },
  {
    id: 5,
    title: "Weather Forecast Website",
    description: "A real-time weather forecasting web app that provides accurate weather conditions and predictions for any location worldwide.",
    image: "/images/projects/4.png",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/0AkshajBansal0/Weather_Cast",
    previewUrl: "https://0akshajbansal0.github.io/Weather_Cast",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description: "A Netflix clone with a sleek UI, dynamic content, and smooth hover animations for an immersive experience.",
    image: "/images/projects/5.png",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/0AkshajBansal0/Netflix_Clone",
    previewUrl: "https://0akshajbansal0.github.io/Netflix_Clone",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (  
    <section id="projects" className="pt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full-Stack"
          isSelected={tag === "Full-Stack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DSA"
          isSelected={tag === "DSA"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI-ML"
          isSelected={tag === "AI-ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;