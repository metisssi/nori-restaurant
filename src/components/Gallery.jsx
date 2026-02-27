import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/Languagecontext";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Gallery = () => {
  const { t } = useLanguage();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(`${API}/gallery`);
        const data = await res.json();
        setImages(data);
      } catch {
        // Fallback to static images if API unavailable
        setImages([
          { _id: "1", imageUrl: "/galerie5.webp" },
          { _id: "2", imageUrl: "/galerie6.webp" },
          { _id: "3", imageUrl: "/galerie1.webp" },
          { _id: "4", imageUrl: "/galerie2.webp" },
          { _id: "5", imageUrl: "/galerie8.webp" },
          { _id: "6", imageUrl: "/galerie9.webp" },
          { _id: "7", imageUrl: "/galerie11.webp" },
          { _id: "8", imageUrl: "/galerie12.webp" },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  return (
    <section id="gallery" className="relative py-20 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* HEADER */}
      <motion.div className="max-w-7xl mx-auto text-center mb-16 relative z-10 px-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h5 className="uppercase tracking-widest font-semibold text-red-400 mb-2">{t.gallery.title}</h5>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          {t.gallery.heading}{" "}
          <span className="bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">{t.gallery.headingAccent}</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-4">{t.gallery.description}</p>
      </motion.div>

      {/* IMAGE GRID */}
      {loading ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10 px-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-900 rounded-3xl animate-pulse border border-red-800/30" />
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10 px-2">
          {images.map((item, index) => (
            <motion.div
              key={item._id}
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border-2 border-red-800/50 hover:border-orange-500/80 mx-auto w-full max-w-sm sm:max-w-none bg-gradient-to-br from-gray-900 to-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-500"></div>
              <img
                src={item.imageUrl}
                alt={item.alt || `Gallery ${index + 1}`}
                className="w-full h-64 sm:h-72 lg:h-64 object-cover object-center transform group-hover:scale-110 brightness-105 contrast-110 group-hover:brightness-115 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-transparent to-transparent group-hover:from-red-900/70 transition-all duration-500 rounded-3xl flex items-end justify-center">
                <span className="text-white font-bold text-base sm:text-lg mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-red-900/80 px-4 py-2 rounded-full backdrop-blur-sm">
                  {t.gallery.photo} {index + 1}
                </span>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </motion.div>
          ))}
        </div>
      )}

      {/* SCROLL TO TOP */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-16 mx-auto block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 relative border border-red-500/30 z-10"
        whileHover={{ scale: 1.05 }}
      >
        {t.gallery.button}
      </motion.button>
    </section>
  );
};

export default Gallery;