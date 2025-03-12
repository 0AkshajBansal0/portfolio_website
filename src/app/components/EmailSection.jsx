"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataObj = new FormData(event.target);

    formDataObj.append("access_key", "5af93fc0-97be-4810-b1a9-561acd867c8e");

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Sent Successfully",
          text: "You will be contacted shortly",
          icon: "success",
        });

        // Clear the form after successful submission
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. My inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to
          get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/0AkshajBansal0">
            <Image
              src={GithubIcon}
              alt="Github Icon"
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/akshaj-bansal-44a6211b8">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </div>

      </div>
      <div>
        <form onSubmit={onSubmit} className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Akshaj Bansal"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
