import React, { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

const Hero = () => {
  const backgroundRef = useRef(null);
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Define script elements outside of cleanup
    const threeScript = document.createElement('script');
    const vantaScript = document.createElement('script');

    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    vantaScript.src = 'https://cdn.jsdelivr.net/gh/tengbao/vanta@latest/dist/vanta.net.min.js';

    // When the three.js script has loaded, load the vanta.js script
    threeScript.onload = () => {
      vantaScript.onload = () => {
        if (backgroundRef.current) {
          // Initialize Vanta.NET background effect
          window.VANTA.NET({
            el: backgroundRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
          });
        }
      };
      document.head.appendChild(vantaScript);
    };

    document.head.appendChild(threeScript);

    // Cleanup: Remove the script tags when the component unmounts
    return () => {
      // Only remove the scripts if they exist in the document.head
      const head = document.head;
      if (head.contains(threeScript)) {
        head.removeChild(threeScript);
      }
      if (head.contains(vantaScript)) {
        head.removeChild(vantaScript);
      }
    };
  }, []);

  return (
    <section
      ref={backgroundRef}
      className="text-white h-screen flex items-center justify-center"
    >
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Image with improved responsiveness */}
        <motion.img
          src="src/assets/images/varunbhardwaj.jpg"
          alt="Varun Bhardwaj"
          className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 shadow-xl mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Title Animation */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Hi, I'm Varun Bhardwaj
        </motion.h1>

        {/* ReactTyped with smooth entry */}
        <motion.h2
          className="text-lg text-lime-600 sm:text-2xl mt-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <ReactTyped
            strings={[' Full Stack Web Developer', 'Python Developer', 'React Enthusiast', 'Creative Designer', '']}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.h2>

        {/* Button with hover effects */}
        <motion.button
          className="mt-6 px-6 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-300 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={() => scrollToSection("#project")}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
