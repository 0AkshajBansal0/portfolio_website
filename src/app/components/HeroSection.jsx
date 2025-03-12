"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeroSection = () => {
    return (
        <section className="lg:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start mt-2">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Akshaj Bansal",
                                1000,
                                "Web Developer",
                                1000,
                                "Full Stack Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Crafting innovative solutions with technology,
                        <br className="hidden sm:block" />
                        blending creativity and functionality to make an impact.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center sm:justify-start space-x-6">
                        <Link
                            href="https://github.com/0AkshajBansal0"
                            target="_blank"
                            className="text-white text-3xl hover:text-gray-400 transition-all duration-200"
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/akshaj-bansal-44a6211b8"
                            target="_blank"
                            className="text-white text-3xl hover:text-blue-400 transition-all duration-200"
                        >
                            <FaLinkedin />
                        </Link>
                        <Link
                            href="https://leetcode.com/u/akshajbansal"
                            target="_blank"
                            className="group text-3xl transition-all duration-200"
                        >
                            <SiLeetcode className="text-white group-hover:text-yellow-400 transition-all duration-200" />
                        </Link>
                    </div>

                    {/* Download CV Button */}
                    <div className="mt-4">
                        <Link
                            href="https://drive.google.com/file/d/1UXMKwI93KZzFFaj7dfiC8VQTiToJD6O3/view?usp=sharing"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 transform transition-all duration-300 ease-in-out hover:scale-105">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="col-span-4 place-self-center mt-2 lg:mt-0">
                    <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-lg hover:scale-110 transform transition-all duration-300 ease-in-out">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-auto h-[250px] lg:h-[400px] object-cover"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
