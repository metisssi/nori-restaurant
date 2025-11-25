import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/Languagecontext";

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
  const { t } = useLanguage();
  
  return (
    <section
      id="gallery"
      className="relative py-20 px-4 bg-black overflow-hidden"
    >
      {/* Red subtle shadow overlays - matching Main */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* HEADER */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h5 className="uppercase tracking-widest font-semibold text-red-400 mb-2">
          {t.gallery.title}
        </h5>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          {t.gallery.heading} <span className="bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">{t.gallery.headingAccent}</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          {t.gallery.description}
        </p>
      </motion.div>

      {/* IMAGE GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border-2 border-red-800/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 sm:h-72 lg:h-64 object-cover object-center transform group-hover:brightness-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
              <span className="text-white font-bold text-lg mb-4">
                {t.gallery.photo} {index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SCROLL TO TOP / NEXT SECTION BUTTON */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-16 mx-auto block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 relative border border-red-500/30 z-10"
        whileHover={{ scale: 1.05 }}
      >
        {t.gallery.button}
      </motion.button>
    </section>
  );
};

export default Gallery;