import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Backend Development APIs And Certification",
    organization: "freeCodeCamp",
    image: "assets/images/certificate.png", // Ensure this image exists in the public directory
  },
];

const CertificateShowcase = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCertificate]);

  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>

        {/* Floating Images */}
        <div className="flex flex-wrap gap-6 justify-center">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="relative w-full md:w-80 h-40 flex items-center justify-center cursor-pointer"
              style={{
                animation: `float ${3 + cert.id}s ease-in-out infinite`,
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCertificate(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto max-w-xs rounded-lg shadow-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-center">{selectedCertificate.title}</h3>
            <p className="text-gray-500 italic text-center">{selectedCertificate.organization}</p>
            <button
              className="mt-6 w-full px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition"
              onClick={() => setSelectedCertificate(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

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

export default CertificateShowcase;
