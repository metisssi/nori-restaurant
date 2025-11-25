import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/Languagecontext";

const Event = () => {
  const { t } = useLanguage();
  
  const scrollToGallery = () => {
    const section = document.getElementById("gallery");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="event"
      className="relative py-20 px-4 bg-black overflow-hidden"
    >
      {/* Red subtle shadow overlays - matching Main */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-12">

        {/* HEADER AND DESCRIPTION */}
        <motion.div
          className="space-y-6 text-center max-w-3xl text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="uppercase tracking-widest font-semibold text-red-400">
            {t.event.title}
          </h5>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            {t.event.heading} <span className="bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">{t.event.headingAccent}</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            {t.event.description}
          </p>

          {/* RESERVATION BUTTON */}
          <a
            href="https://www.bookiopro.com/nori-restaurant/rs-widget?lang=cs&c1=79d9c3&c2=fbf5f0&c3=453a3a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 relative border border-red-500/30"
          >
            {t.event.button}
            <ArrowRight size={20} className="ml-2" />
          </a>
        </motion.div>

        {/* BIG IMAGE UNDER HEADER */}
        <motion.div
          className="mt-8 relative w-full h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-red-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/alleat.jpg"
            alt="Event"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent rounded-3xl" />
        </motion.div>

        {/* SCROLL TO GALLERY BUTTON */}
        <motion.button
          onClick={scrollToGallery}
          className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 relative border border-red-500/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.event.gallery}
          <ArrowRight size={20} className="ml-2" />
        </motion.button>
      </div>
    </section>
  );
};

export default Event;