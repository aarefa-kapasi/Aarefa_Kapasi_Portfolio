import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Aarefa<span className="text-red-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li>
            <a href="#home" className="hover:text-red-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-red-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-red-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-red-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-red-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-4 text-xl text-gray-300">
          <a href="https://github.com/aarefa-kapasi/" target="_blank">
            <FaGithub className="hover:text-red-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/aarefa-kapasi-2698b4303/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-red-400" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-8 text-gray-300 font-medium">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

            {/* Mobile Socials */}
            <div className="flex gap-5 text-2xl pt-4">
              <a href="https://github.com/" target="_blank">
                <FaGithub />
              </a>

              <a href="https://linkedin.com/" target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
