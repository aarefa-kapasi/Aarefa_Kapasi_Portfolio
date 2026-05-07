import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-red-500">Me</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interested in collaborating, internships, or opportunities? Feel
            free to connect with me.
          </p>
        </motion.div>

        {/* Contact Container */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg shadow-xl"
          >
            <h3 className="text-3xl font-semibold mb-8 text-red-400">
              Let's Connect
            </h3>

            {/* Email */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-600 p-4 rounded-xl">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-400">aarefakapasi15@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-600 p-4 rounded-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-400">+91 8866188772</p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-600 p-4 rounded-xl">
                <FaGithub />
              </div>

              <div>
                <h4 className="text-lg font-semibold">GitHub</h4>

                <a
                  href="https://github.com/aarefa-kapasi/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-red-400 transition duration-300"
                >
                  github.com/aarefa-kapasi
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <div className="bg-red-600 p-4 rounded-xl">
                <FaLinkedin />
              </div>

              <div>
                <h4 className="text-lg font-semibold">LinkedIn</h4>

                <a
                  href="https://www.linkedin.com/in/aarefa-kapasi-2698b4303/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-red-400 transition duration-300"
                >
                  linkedin.com/in/aarefa-kapasi
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg shadow-xl space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block mb-2 text-gray-300">Your Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-red-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-300">Your Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-red-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-gray-300">Message</label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-red-500 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition duration-300 py-4 rounded-xl font-semibold text-lg"
            >
              Coming Soon
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
