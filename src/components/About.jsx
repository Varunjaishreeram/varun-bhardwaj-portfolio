import React, { useEffect } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaQuora } from 'react-icons/fa'; // Importing icons
import { useSpring, animated } from '@react-spring/web'; // Import react-spring

const About = () => {
  // Define spring animation for 3D effect on hover
  const [props, set] = useSpring(() => ({
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)', // Darker shadow
    transform: 'rotateX(0deg) rotateY(0deg)', // Initial transform value
  }));

  // For mobile touch event handling
  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;

    const x = (touchX - window.innerWidth / 2) / 10;
    const y = (touchY - window.innerHeight / 2) / 10;

    set({ rotateX: -y, rotateY: x, transform: `rotateX(${ -y}deg) rotateY(${x}deg)` });
  };

  const handleTouchEnd = () => {
    set({ rotateX: 0, rotateY: 0, scale: 1, transform: 'rotateX(0deg) rotateY(0deg)' });
  };

  useEffect(() => {
    // Adding touch event listeners for mobile
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          About Me
        </h2>

        {/* Animated 3D Card with Dark Shadow */}
        <animated.div
          className="relative bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 rounded-xl p-8 max-w-md mx-auto mb-12 shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1500px',
            boxShadow: props.boxShadow,
            scale: props.scale.to((s) => s),
            transform: props.transform.to((t) => t),
          }}
          onMouseMove={({ clientX, clientY }) => {
            // Get mouse position to rotate the card for 3D effect (for desktop)
            const x = (clientX - window.innerWidth / 2) / 10;
            const y = (clientY - window.innerHeight / 2) / 10;
            set({ rotateX: -y, rotateY: x, transform: `rotateX(${ -y}deg) rotateY(${x}deg)` });
          }}
          onMouseLeave={() => set({ rotateX: 0, rotateY: 0, scale: 1, transform: 'rotateX(0deg) rotateY(0deg)' })}
          onMouseEnter={() => set({ scale: 1.05 })}
        >
          {/* Content */}
          <p className="text-lg mb-6 leading-relaxed">
            Hi, I'm <span className="font-bold text-purple-600">Varun Bhardwaj</span>, a versatile
            <span className="font-bold text-blue-500"> Full Stack Developer</span>, 
            <span className="font-bold text-green-500"> Python Developer</span> and <span className='font-bold'>B.Tech graduate in Computer Science Engineering </span>
            . I specialize in building scalable, modern applications while crafting seamless user experiences. 
            When I'm not coding, I love sharing my insights on <span className="font-bold text-purple-600">Quora</span>, writing on topics that resonate with me. 
            Feel free to check out my
            <a
              href="https://www.quora.com/profile/Varun-Bharadwaj-67"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-bold hover:underline ml-1"
            >
              Quora profile
            </a>.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="https://github.com/Varunjaishreeram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white bg-gray-800 hover:bg-black rounded-full shadow-xl mx-2 w-12 h-12"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/varun-bhardwaj-43b198210/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-xl mx-2 w-12 h-12"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/Varunbharadwaaj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white bg-black hover:bg-zinc-600 rounded-full shadow-xl mx-2 w-12 h-12"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.quora.com/profile/Varun-Bharadwaj-67"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white bg-red-600 hover:bg-red-700 rounded-full shadow-xl mx-2 w-12 h-12"
            >
              <FaQuora />
            </a>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default About;
