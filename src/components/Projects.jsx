import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "BudgetNova",
    description:
      "A full-stack MERN expense tracker application with authentication, analytics dashboard, income & expense management, and category-wise insights.",

    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],

    github: "https://github.com/",
    live: "https://example.com",
  },

  {
    title: "SprintLearn",
    description:
      "An E-Learning platform built using React, Spring Boot, and MySQL with role-based authentication, course management, and responsive UI.",

    tech: ["React", "Spring Boot", "MySQL", "REST API", "Tailwind CSS"],

    github: "https://github.com/",
    live: "https://example.com",
  },

  {
    title: "Bookishmate",
    description:
      "An online book shopping system featuring product management, cart functionality, authentication, and responsive user experience.",

    tech: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],

    github: "https://github.com/",
    live: "https://example.com",
  },

  {
    title: "Medcure",
    description:
      "A web-based pharmacy management system developed using ASP.NET and SQL Server for managing medicines, suppliers, categories, and sales records with an efficient and user-friendly interface.",

    tech: ["ASP.NET", "SQL Server", "HTML", "CSS", "C#"],

    github: "https://github.com/",
    live: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-16 md:py-24 px-6">
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
            My <span className="text-red-500">Projects</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Some of the real-world applications and full-stack projects I have
            built while learning modern development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Title */}
              <h3 className="text-3xl font-semibold mb-4 text-red-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#8B0000]/20 border border-[#8B0000]/30 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
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

export default Projects;
