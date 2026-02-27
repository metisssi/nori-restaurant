import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/Languagecontext";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Menu = () => {
  const { t, language } = useLanguage();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`${API}/menu`);
        const data = await res.json();
        setMenuItems(data);
      } catch {
        // Fallback to hardcoded items if API unavailable
        setMenuItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const scrollToEvent = () => {
    const eventSection = document.getElementById("event");
    if (eventSection) eventSection.scrollIntoView({ behavior: "smooth" });
  };

  // Display name & description based on active language
  const getName = (item) => language === "en" && item.name_en ? item.name_en : item.name_cs;
  const getDesc = (item) => language === "en" && item.description_en ? item.description_en : item.description_cs;

  return (
    <section
      id="menu"
      className="relative py-20 px-4 bg-gradient-to-b from-black via-red-950/30 to-black overflow-hidden transition-colors duration-1000"
    >
      {/* Fire/Red Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 -right-40 w-[35rem] h-[35rem] bg-orange-600/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute -bottom-40 left-1/4 w-[30rem] h-[30rem] bg-red-800/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Animated fire particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/40 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -100, 0], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-16">
        {/* HEADER */}
        <motion.div className="text-center space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center justify-center space-x-3">
            <Flame className="text-orange-500 animate-pulse" size={28} />
            <h5 className="uppercase tracking-widest font-semibold text-orange-400">{t.menu.title}</h5>
            <Flame className="text-orange-500 animate-pulse" size={28} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            {t.menu.heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse">{t.menu.headingAccent}</span>{" "}
            {t.menu.heading2}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">{t.menu.description}</p>
        </motion.div>

        {/* MENU CARDS */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-3xl h-80 animate-pulse border border-red-900/20" />
            ))}
          </div>
        ) : menuItems.length === 0 ? (
          <p className="text-gray-500">Žádné položky menu.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {menuItems.map((item, index) => (
              <motion.div
                key={item._id}
                className="group relative bg-gradient-to-br from-gray-900 via-red-950/30 to-black rounded-3xl overflow-hidden shadow-2xl border border-red-900/20 transition-all duration-500 hover:scale-105 hover:border-orange-500/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ boxShadow: "0 0 30px rgba(249, 115, 22, 0.4)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 via-orange-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:via-orange-600/5 group-hover:to-red-600/10 transition-all duration-500 rounded-3xl"></div>

                <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
                  <img
                    src={item.imageUrl}
                    alt={getName(item)}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-black/40 to-transparent group-hover:from-red-900/90 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 text-center space-y-2 relative z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">{getName(item)}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{getDesc(item)}</p>
                  <div className="pt-2">
                    <span className="inline-block px-4 py-1.5 text-lg font-semibold bg-gradient-to-r from-red-600/30 to-orange-600/30 text-orange-400 rounded-full border border-orange-500/30 group-hover:border-orange-500/60 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Flame className="text-orange-500" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* BUTTON */}
        <motion.button
          onClick={() => window.open("/menu.pdf", "_blank")}
          className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <Flame className="mr-2 relative z-10" size={20} />
          <span className="relative z-10">{t.menu.button}</span>
          <span className="ml-2 text-xl relative z-10">→</span>
          <span className="absolute inset-0 rounded-full bg-orange-500/30 blur-2xl animate-pulse"></span>
        </motion.button>
      </div>

      {/* SCROLL DOWN */}
      <motion.button onClick={scrollToEvent} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer z-20" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}>
        <ChevronDown size={40} className="text-orange-400 animate-bounce group-hover:text-yellow-400 transition-colors duration-300" />
      </motion.button>
    </section>
  );
};

export default Menu;