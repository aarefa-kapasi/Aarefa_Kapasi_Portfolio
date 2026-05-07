import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-red-400 text-lg mb-3">Hello, I'm</p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
            Aarefa <span className="text-red-500">Kapasi</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
            I build modern and responsive web applications using React, Node.js,
            Java, Spring Boot, MongoDB, and MySQL. Passionate about creating
            clean UI and scalable backend systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-red-600 hover:bg-red-700 transition duration-300 px-7 py-3 rounded-xl font-semibold"
            >
              View Projects
            </a>

            <a
              href="/Aarefa_Kapasi_Resume.pdf"
              className="border border-red-500 hover:bg-red-500 transition duration-300 px-7 py-3 rounded-xl font-semibold"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-red-600 blur-3xl opacity-30 rounded-full"></div>

            {/* Profile Image */}
            <img
              src={profile}
              alt="profile"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl border-4 border-red-500 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
