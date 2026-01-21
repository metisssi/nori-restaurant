import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/Languagecontext";
import { FileText, Sparkles, X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const Alleat = () => {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const menuImages = [
    "/menu1.webp",
    "/menu2.webp"
  ];

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % menuImages.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="alleat"
      className="relative py-20 px-4 bg-black overflow-hidden"
    >
      {/* Red subtle shadow overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-12">

        {/* HEADER */}
        <motion.div
          className="space-y-6 text-center text-white max-w-4xl px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="uppercase tracking-widest font-semibold text-red-400 flex items-center justify-center space-x-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span>{t.alleat.title}</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </h5>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
            {t.alleat.heading}{" "}
            <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              {t.alleat.headingAccent}
            </span>{" "}
            {t.alleat.heading2}
          </h2>
        </motion.div>

        {/* DESCRIPTION IN BEAUTIFUL CARD */}
        <motion.div
          className="w-full max-w-5xl bg-gradient-to-br from-red-900/20 via-black to-red-900/20 border border-red-800/30 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl hover:border-red-500/50 transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 whitespace-pre-line text-center">
            {t.alleat.description}
          </p>
        </motion.div>

        {/* CTA BUTTON */}
        <motion.button
          onClick={openModal}
          className="mt-8 inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-105 relative border-2 border-red-500/30 group overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Animated gradient overlay */}
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          
          <FileText className="mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" size={24} />
          <span className="relative z-10">{t.alleat.button.replace(' (PDF)', '')}</span>
          <span className="ml-3 text-2xl relative z-10 group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
          
          {/* Glow effect */}
          <span className="absolute inset-0 rounded-full bg-red-500/30 blur-xl animate-pulse"></span>
        </motion.button>

        {/* DECORATIVE ELEMENTS */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl mt-12 px-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { emoji: "🍣", label: "Sushi" },
            { emoji: "🥘", label: "Wok" },
            { emoji: "🍖", label: "Grill" },
            { emoji: "🍰", label: "Dessert" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-red-950/20 border border-red-800/20 rounded-2xl p-4 sm:p-6 text-center hover:border-red-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>
              <p className="text-sm sm:text-base text-gray-400 font-semibold group-hover:text-red-400 transition-colors duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* FINAL MESSAGE */}
        <motion.div
          className="mt-8 text-center px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
            {t.alleat.subtitle}
          </p>
          <p className="text-sm sm:text-base text-gray-400 mt-2">
            {t.alleat.subtitle2}
          </p>
        </motion.div>
      </div>

      {/* SCROLL DOWN BUTTON */}
      <motion.div
        onClick={scrollToMenu}
        className="absolute bottom-8 left-0 right-0 flex justify-center group cursor-pointer z-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <ChevronDown 
            size={40} 
            className="text-red-400 animate-bounce group-hover:text-yellow-400 transition-colors duration-300" 
          />
        </div>
      </motion.div>

      {/* FULLSCREEN MODAL WITH IMAGE GALLERY */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ delay: 0.2 }}
              onClick={closeModal}
              className="absolute top-6 right-6 z-[1000] w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl border-2 border-red-500/50"
            >
              <X size={28} />
            </motion.button>

            {/* Image Counter */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-6 left-6 z-[1000] px-6 py-3 rounded-full bg-gradient-to-r from-red-900/80 to-black/80 backdrop-blur-md text-white font-bold text-lg border border-red-500/30"
            >
              {currentImage + 1} / {menuImages.length}
            </motion.div>

            {/* Navigation Buttons */}
            {menuImages.length > 1 && (
              <>
                <motion.button
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-6 z-[1000] w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl border-2 border-red-500/50"
                >
                  <ChevronLeft size={28} />
                </motion.button>

                <motion.button
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-6 z-[1000] w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl border-2 border-red-500/50"
                >
                  <ChevronRight size={28} />
                </motion.button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={menuImages[currentImage]}
                  alt={`Menu Page ${currentImage + 1}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-4 border-red-900/30"
                />
              </AnimatePresence>
            </motion.div>

            {/* Image Indicators */}
            {menuImages.length > 1 && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-[1000]"
              >
                {menuImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index);
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImage
                        ? 'w-12 h-3 bg-gradient-to-r from-red-500 to-yellow-400'
                        : 'w-3 h-3 bg-red-500/50 hover:bg-red-400/70'
                    }`}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Alleat;