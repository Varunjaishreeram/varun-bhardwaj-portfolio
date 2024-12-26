import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight, AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiNextdotjs, SiPython, SiFlask } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Video Sharing Website",
    description:
      "Created a dynamic video sharing platform leveraging Django and React, with PostgreSQL for data management. Empowered users to seamlessly upload, watch, and engage with videos.",
    techStack: [
      { name: "Django", icon: <SiDjango size={18} /> },
      { name: "React", icon: <FaReact size={18} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={18} /> },
    ],
    photo: "assets/images/VideoSharingProject.png", // Replace with actual image URL
    github: "https://github.com/Varunjaishreeram/campustube",
    link: "https://github.com/Varunjaishreeram/campustube",
  },
  {
    id: 2,
    title: "E-Commerce Website - Food Order",
    description:
      "Developed an e-commerce food ordering website using Next.js and PostgreSQL. Features include user authentication, product listing, and secure checkout process.",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs size={18} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={18} /> },
    ],
    photo: "assets/images/Ecart.png", // Replace with actual image URL
    github: "https://github.com/Varunjaishreeram/NextjsBackend",
    link: "https://pickbazar-react-rest.vercel.app/",
  },
  {
    id: 3,
    title: "AI Chatbot for Virtual Relationships",
    description:
      "Developing an AI-powered chatbot designed for personalized conversations mimicking a virtual girlfriend or boyfriend.",
    techStack: [
      { name: "Python", icon: <SiPython size={18} /> },
      { name: "Flask", icon: <SiFlask size={18} /> },
    ],
    photo: "assets/images/AiChatBotProject.png", // Replace with actual image URL
    github: "https://github.com/Varunjaishreeram",
    link: "https://github.com/Varunjaishreeram",
  },
];

const ProjectSection = () => {
  const [currentProject, setCurrentProject] = useState(1);

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="flex justify-center items-center">
          {/* Project Card */}
          <motion.div
            className="relative w-96 h-[450px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
            key={currentProject}
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.8 }}
          >
            {/* Project Image */}
            <div className="h-48 w-full">
              <img
                src={projects[currentProject].photo}
                alt={`${projects[currentProject].title} Screenshot`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold mb-2">
                {projects[currentProject].title}
              </h3>
              <p className="text-gray-600 flex-grow">
                {projects[currentProject].description}
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {projects[currentProject].techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-gray-200 text-gray-700 px-2 py-1 rounded"
                  >
                    {tech.icon}
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href={projects[currentProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                  title="GitHub Repository"
                >
                  <AiOutlineGithub size={20} />
                </a>
                <a
                  href={projects[currentProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                  title="Live Project"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Next Button */}
            <div
              className="absolute bottom-4 right-4 flex flex-col items-center cursor-pointer"
              onClick={handleNextProject}
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shadow-md hover:bg-gray-300 transition">
                <AiOutlineArrowRight size={20} />
              </div>
              <span className="text-xs mt-1">Next</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
