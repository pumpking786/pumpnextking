"use client";
import React from "react";

const ContactSection = () => {
  return (
    <div>
      <section
        id="contact"
        className=" from-blue-500 via-purple-500 to-pink-500 text-white py-10 px-8 "
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <form
            action="https://getform.io/f/7b177aff-de5a-491c-b179-f418a6cb6725" // Getform endpoint
            method="POST"
            encType="multipart/form-data" // Correct attribute name for enctype
            className="grid grid-cols-1 gap-6 max-w-xl mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Send Message
            </button>
          </form>
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-14 mt-8 flex-wrap">
            {/* Facebook */}
            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://www.facebook.com/maskey.amatya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl lg:text-5xl hover:text-blue-600 transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                Facebook
              </span>
            </div>

            {/* Instagram */}
            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://www.instagram.com/pramit252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl lg:text-4xl hover:text-pink-600 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                Instagram
              </span>
            </div>

            {/* YouTube */}
            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://www.youtube.com/@PramitAmatya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl lg:text-4xl hover:text-red-600 transition duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Pramit Amatya
              </span>
            </div>

            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://www.youtube.com/@ChesswithPramit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl lg:text-4xl hover:text-red-600 transition duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                ChesswithPramit
              </span>
            </div>

            {/* GitHub */}
            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://github.com/pumpking786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl lg:text-4xl hover:text-blue-200 transition duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                GitHub
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://www.linkedin.com/in/pramit-amatya-b03334283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl lg:text-4xl hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                LinkedIn
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
