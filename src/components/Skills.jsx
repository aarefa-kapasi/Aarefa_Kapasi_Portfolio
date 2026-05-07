import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
  },

  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs"],
  },

  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },

  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "VS Code", "NetBeans", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-16 md:py-24 px-6">
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
            My <span className="text-red-500">Skills</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to design, develop, and deploy modern
            full-stack applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition duration-300"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-semibold mb-6 text-red-400">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-red-600/20 border border-red-500/30 px-5 py-2 rounded-full text-gray-200 hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
