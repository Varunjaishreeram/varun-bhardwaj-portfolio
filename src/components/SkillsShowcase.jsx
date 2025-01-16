import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaVuejs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";

const skills = [
  { id: 1, name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
  { id: 2, name: "Node.js", icon: <FaNode size={40} color="#339933" /> },
  { id: 3, name: "Vue.js", icon: <FaVuejs size={40} color="#4FC08D" /> },
  { id: 4, name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
  { id: 5, name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { id: 6, name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
  { id: 7, name: "Django", icon: <SiDjango size={40} color="#092E20" /> },
  { id: 8, name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { id: 9, name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
  { id: 10, name: "HTML5", icon: <SiHtml5 size={40} color="#E34F26" /> },
  { id: 11, name: "CSS3", icon: <SiCss3 size={40} color="#1572B6" /> },
  { id: 12, name: "Flask", icon: <SiFlask size={40} color="#000000" /> },
  { id: 13, name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
  { id: 14, name: "Redux", icon: <SiRedux size={40} color="#764ABC" /> },
  { id: 15, name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
];

const SkillsShowcase = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12"> Tech Skills</h2>

        <div className="flex flex-wrap gap-8 justify-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="relative w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-xl flex items-center justify-center text-center"
              style={{
                animation: `float ${3 + skill.id % 5}s ease-in-out infinite`,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <p className="absolute bottom-2 text-sm font-semibold text-gray-800">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default SkillsShowcase;
