import { motion } from "framer-motion";
import { ArrowRight, Users, Utensils, Headphones, Building2, PartyPopper, Heart, ChefHat } from "lucide-react";
import { useLanguage } from "../context/Languagecontext";

const Event = () => {
  const { t } = useLanguage();
  
  const scrollToGallery = () => {
    const section = document.getElementById("gallery");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const featureIcons = {
    spaces: <Building2 className="w-8 h-8" />,
    menu: <Utensils className="w-8 h-8" />,
    service: <Users className="w-8 h-8" />,
    program: <Headphones className="w-8 h-8" />
  };

  const eventTypeIcons = {
    corporate: <Users className="w-6 h-6" />,
    celebrations: <Heart className="w-6 h-6" />,
    culinary: <ChefHat className="w-6 h-6" />
  };

  return (
    <section
      id="event"
      className="relative py-20 px-4 bg-black overflow-hidden"
    >
      {/* Red subtle shadow overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-16">

        {/* HEADER */}
        <motion.div
          className="space-y-6 text-center max-w-4xl text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="uppercase tracking-widest font-semibold text-red-400">
            {t.event.title}
          </h5>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            {t.event.heading} <span className="bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">{t.event.headingAccent}</span>
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
            {t.event.description}
          </p>
        </motion.div>

        {/* WHY NORI SECTION */}
        <motion.div
          className="w-full max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">
            {t.event.whyNori}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.keys(t.event.features).map((key, index) => (
              <motion.div
                key={key}
                className="group bg-gradient-to-br from-red-900/20 to-black border border-red-800/30 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-red-400 group-hover:text-yellow-400 transition-colors duration-300 flex-shrink-0">
                    {featureIcons[key]}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {t.event.features[key].title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {t.event.features[key].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EVENT TYPES */}
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">
            {t.event.eventTypes.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.keys(eventTypeIcons).map((key, index) => (
              <motion.div
                key={key}
                className="group bg-gradient-to-br from-gray-900 to-red-950/30 border border-red-800/30 rounded-2xl p-6 text-center hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4 text-red-400 group-hover:text-yellow-400 transition-colors duration-300">
                  {eventTypeIcons[key]}
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {t.event.eventTypes[key]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* HOW IT WORKS */}
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">
            {t.event.howItWorks.title}
          </h3>

          <div className="space-y-6">
            {['step1', 'step2', 'step3'].map((step, index) => (
              <motion.div
                key={step}
                className="group bg-gradient-to-r from-red-900/20 via-black to-red-900/20 border border-red-800/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-500 hover:scale-102"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center text-white font-bold text-lg group-hover:from-yellow-500 group-hover:to-red-500 transition-all duration-300">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 leading-relaxed pt-2 group-hover:text-white transition-colors duration-300">
                    {t.event.howItWorks[step]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ACTION BUTTONS */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://www.bookiopro.com/nori-restaurant/rs-widget?lang=cs&c1=79d9c3&c2=fbf5f0&c3=453a3a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 relative border border-red-500/30 group"
          >
            <PartyPopper className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
            {t.event.button}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <button
            onClick={scrollToGallery}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 relative border border-yellow-500/30 group"
          >
            {t.event.gallery}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Event;