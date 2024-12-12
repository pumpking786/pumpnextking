"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-5 place-self-center mb-9 lg:mb-3 lg:mr-8 mr-8">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[350px] relative">
            <Image
              src="/images/ok.jpg"
              alt="Profile"
              className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-2"
              width={400} // Match the parent container's width for large screens
              height={350} // Match the parent container's height for large screens
              objectFit="cover" // Ensures the image covers the circular area without distortion
            />
          </div>
        </div>
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              className="text-3xl sm:text-4xl lg:text-5xl"
              sequence={[
                "Pramit",
                1000,
                "Web Developer",
                1000,
                "Chess Coach",
                1000,
                "PumpKing",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Thriving to become the best, driven by a passion for continuous
            learning, and committed to making the world a more beautiful and
            better place.
          </p>
          <div className="flex justify-center sm:justify-start space-x-8 mb-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <i className="fab fa-facebook-f text-3xl"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <i className="fab fa-linkedin-in text-3xl"></i>
            </a>
          </div>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              About me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white mt-3">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
