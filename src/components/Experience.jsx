import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaNode, FaVuejs } from "react-icons/fa";
import { SiDjango, SiReact, SiMongodb, SiFlask, SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsDatabaseCheck } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    subtitle: "Huulke Technologies India Private Limited | June 2024 - Sep 2024",
    details:
      "Developed Node.js APIs and Vue.js frontend components, leveraging MongoDB and PostgreSQL for data management.",
    techStack: [
      <FaNode size={30} />,
      <FaVuejs size={30} />,
      <SiMongodb size={30} />,
      <BiLogoPostgresql size={30} />
    ],
  },
  {
    id: 2,
    title: "Software Developer Engineer",
    subtitle: "Code InBound LLP | June 2023 - Jan 2024 | Janakpuri, New Delhi",
    details:
      "Spearheaded Node.js, NestJS API development, optimizing MongoDB, PostgreSQL databases.",
    techStack: [
      <SiNestjs size={30} />,
      <FaNode size={30} />,
      <SiMongodb size={30} />,
      <BsDatabaseCheck size={30} />,
      <SiReact size={30} />
    ],
  },
  {
    id: 3,
    title: "Freelancer",
    subtitle: "Talenrn Company | 2021",
    details:
      "Worked as a freelancer for Talenrn, completing various software development tasks for clients.",
    techStack: [
      <SiDjango size={30} />,
      <SiReact size={30} />,
      <FaNode size={30} />,
      <SiFlask size={30} />,
      <BsDatabaseCheck size={30} />,
      <SiMongodb size={30} />
    ],
  },
];

const ExperienceShowcase = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedExperience ? "hidden" : "auto";
  }, [selectedExperience]);

  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        {/* Floating Boxes */}
        <div className="flex flex-wrap gap-6 justify-center">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="relative w-full md:w-80 h-32 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-xl cursor-pointer flex flex-col items-center justify-center text-center"
              style={{
                animation: `float ${3 + exp.id}s ease-in-out infinite`,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
              }}
              onClick={() => setSelectedExperience(exp)}
            >
              <h3 className="text-sm font-bold mb-2">{exp.title}</h3>

              {/* Tech Stack Icons */}
              <div className="flex gap-3 text-gray-700">
                {exp.techStack.map((icon, index) => (
                  <div key={index} className="hover:scale-110 transition-transform">
                    {icon}
                  </div>
                ))}
              </div>

              {/* Down Arrow */}
              <AiOutlineArrowDown
                className="absolute bottom-2 right-2 text-gray-600 hover:text-gray-800 transition"
                size={20}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              className="relative w-full max-w-lg bg-white text-gray-800 rounded-lg shadow-2xl p-6 glassmorphism"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-2">{selectedExperience.title}</h3>
              <p className="text-gray-500 italic mb-4">{selectedExperience.subtitle}</p>
              <p className="text-gray-700 mb-4">{selectedExperience.details}</p>

              <div className="flex gap-3 text-2xl text-gray-700">
                {selectedExperience.techStack.map((icon, index) => (
                  <div key={index} className="hover:scale-110 transition-transform">
                    {icon}
                  </div>
                ))}
              </div>

              <button
                className="mt-6 px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition"
                onClick={() => setSelectedExperience(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        .glassmorphism {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default ExperienceShowcase;
