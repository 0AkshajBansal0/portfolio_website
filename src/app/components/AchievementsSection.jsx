"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Leetcode Questions",
    value: "100",
    postfix: "+",
  },
  {
    metric: "Internship Experiences",
    value: "1",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-6 sm:py-12 sm:px-12">
      <div className="border border-[#33353F] rounded-lg py-8 px-6 sm:px-12 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {achievementsList.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h2 className="text-white text-3xl sm:text-4xl font-bold flex items-center">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-3xl sm:text-4xl font-bold"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-sm sm:text-base mt-2">
                {achievement.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
