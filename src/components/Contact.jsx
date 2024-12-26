import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

const ContactSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What’s Next?
        </motion.h2>
        <motion.h3
          className="text-3xl font-semibold mb-6 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get In Touch
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I am actively seeking opportunities as a Backend Developer, Python Developer and Full
          Stack Engineer. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </motion.p>

        {/* Contact Button */}
        <motion.a
          href="mailto:varunbharadwaj444@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/50"
          title="Send me an email"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <AiOutlineMail size={24} />
          Say Hello
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
