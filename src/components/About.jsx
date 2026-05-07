import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-red-500">Me</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate full-stack developer focused on building scalable
            applications, modern UI experiences, and efficient backend systems.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-semibold mb-6 text-red-400">
                Who Am I?
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg mb-5">
                I am an MCA student and aspiring Full Stack Developer passionate
                about building real-world applications using modern
                technologies.
              </p>

              <p className="text-gray-400 leading-relaxed mb-5">
                My focus is on MERN Stack development along with Java backend
                technologies like Spring Boot and MySQL. I enjoy creating clean
                user interfaces, scalable APIs, and solving practical
                development challenges.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Currently improving my problem-solving skills, backend
                architecture understanding, and frontend design.
              </p>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaLaptopCode className="text-3xl text-red-500" />
                <h3 className="text-2xl font-semibold">Frontend Development</h3>
              </div>

              <p className="text-gray-400">
                Building responsive and interactive user interfaces using React,
                JavaScript, Tailwind CSS, and modern UI practices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaCode className="text-3xl text-red-500" />
                <h3 className="text-2xl font-semibold">Backend Development</h3>
              </div>

              <p className="text-gray-400">
                Developing REST APIs and scalable backend systems using Node.js,
                Express.js, Java, and Spring Boot.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaDatabase className="text-3xl text-red-500" />
                <h3 className="text-2xl font-semibold">Database Management</h3>
              </div>

              <p className="text-gray-400">
                Working with MongoDB and MySQL for efficient data storage,
                management, and application integration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
