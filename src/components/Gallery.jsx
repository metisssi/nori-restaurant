import React from "react";
import { motion } from "framer-motion";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative py-20 px-4 bg-gradient-to-b from-black via-red-950/30 to-gray-900 overflow-hidden transition-colors duration-1000"
    >
      {/* Glow blobs - RED */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-yellow-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* HEADER */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h5 className="uppercase tracking-widest font-semibold text-red-400 mb-2">
          Galerie
        </h5>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Uchvátíme vás našimi <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">zážitky</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          Prohlédněte si fotky našich specialit, interiéru a akcí. Každý moment
          je připraven s láskou a elegancí.
        </p>
      </motion.div>

      {/* IMAGE GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border-2 border-red-900/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 sm:h-72 lg:h-64 object-cover object-center transform group-hover:brightness-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
              <span className="text-white font-bold text-lg mb-4">
                Foto {index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SCROLL TO TOP / NEXT SECTION BUTTON */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-16 mx-auto block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 relative border border-red-500/30"
        whileHover={{ scale: 1.05 }}
      >
        Zpět nahoru ↑
      </motion.button>
    </section>
  );
};

export default Gallery;