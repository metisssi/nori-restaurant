import { motion } from "framer-motion";
import { useLanguage } from "../context/Languagecontext";

const Alleat = () => {
  const { t } = useLanguage();
  
  const openPdf = () => {
    window.open("/menu.pdf", "_blank");
  };

  return (
    <section
      id="alleat"
      className="relative py-20 px-4 bg-gradient-to-b from-gray-900 via-red-950/30 to-black overflow-hidden transition-colors duration-1000"
    >
      {/* Glow blobs - RED */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-yellow-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-12">

        {/* TEXT */}
        <motion.div
          className="space-y-6 text-center text-white max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="uppercase tracking-widest font-semibold text-red-400">
            {t.alleat.title}
          </h5>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            {t.alleat.heading} <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">{t.alleat.headingAccent}</span> {t.alleat.heading2}
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            {t.alleat.description}
          </p>

          <button
            onClick={openPdf}
            className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:from-red-500 hover:to-red-600 transition-all hover:scale-105 relative border border-red-500/30"
          >
            {t.alleat.button}
            <span className="ml-2 text-xl">→</span>
          </button>

          {/* CREATIVE PHOTO */}
          <motion.div
            className="mt-8 relative w-full h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-2 border-red-900/40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {/* Diagonal clip mask */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="w-full h-full relative bg-gradient-to-br from-red-950 to-black">
                {/* Floating light/glow */}
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-red-600/20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-yellow-500/10 blur-2xl animate-pulse delay-500"></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-black/30 to-transparent rounded-3xl" />
                
                {/* Content placeholder - replace with your image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl">🍣</div>
                    <h3 className="text-3xl font-bold text-white">{t.alleat.subtitle}</h3>
                    <p className="text-red-300">{t.alleat.subtitle2}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Alleat;