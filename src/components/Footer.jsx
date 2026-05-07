import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div>
            <h2 className="text-3xl font-bold">
              Aarefa<span className="text-red-500">.</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-md">
              Full Stack Developer passionate about building modern web
              applications using MERN Stack and Java technologies.
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-gray-300 font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-red-400 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-red-400 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-red-400 transition duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-red-400 transition duration-300"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-red-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-2xl">
            <a
              href="https://github.com/aarefa-kapasi/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aarefa-kapasi-2698b4303/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/918866188772?text=Hello%20Aarefa."
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-center">
            © 2026 Aarefa Kapasi. All rights reserved.
          </p>

          {/* Scroll To Top */}
          <a
            href="#home"
            className="bg-red-600 hover:bg-red-700 transition duration-300 p-4 rounded-full shadow-lg"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
