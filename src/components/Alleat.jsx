import { motion } from "framer-motion";
import { useLanguage } from "../context/Languagecontext";
import { FileText, Sparkles } from "lucide-react";

const Alleat = () => {
  const { t } = useLanguage();
  
  const openPdf = () => {
    window.open("/menu.pdf", "_blank");
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
          className="space-y-6 text-center text-white max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="uppercase tracking-widest font-semibold text-red-400 flex items-center justify-center space-x-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span>{t.alleat.title}</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </h5>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            {t.alleat.heading}{" "}
            <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              {t.alleat.headingAccent}
            </span>{" "}
            {t.alleat.heading2}
          </h2>
        </motion.div>

        {/* DESCRIPTION IN BEAUTIFUL CARD */}
        <motion.div
          className="w-full max-w-5xl bg-gradient-to-br from-red-900/20 via-black to-red-900/20 border border-red-800/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-red-500/50 transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 whitespace-pre-line text-center">
            {t.alleat.description}
          </p>
        </motion.div>



        {/* CTA BUTTON */}
        <motion.button
          onClick={openPdf}
          className="mt-8 inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-105 relative border-2 border-red-500/30 group overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Animated gradient overlay */}
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          
          <FileText className="mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" size={24} />
          <span className="relative z-10">{t.alleat.button}</span>
          <span className="ml-3 text-2xl relative z-10 group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
          
          {/* Glow effect */}
          <span className="absolute inset-0 rounded-full bg-red-500/30 blur-xl animate-pulse"></span>
        </motion.button>

        {/* DECORATIVE ELEMENTS */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl mt-12"
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
              className="group bg-gradient-to-br from-gray-900 to-red-950/20 border border-red-800/20 rounded-2xl p-6 text-center hover:border-red-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>
              <p className="text-gray-400 font-semibold group-hover:text-red-400 transition-colors duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* FINAL MESSAGE */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
            {t.alleat.subtitle}
          </p>
          <p className="text-gray-400 mt-2">
            {t.alleat.subtitle2}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Alleat;