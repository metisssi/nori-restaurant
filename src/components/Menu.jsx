import { motion } from "framer-motion";

const Menu = () => {
  const menuItems = [
    {
      name: "Sushi Set Deluxe",
      description: "Mix of nigiri, maki, and sashimi, fresh daily.",
      price: "499 Kč",
      image: "/sushi-deluxe.jpg",
    },
    {
      name: "Tempura Shrimp",
      description: "Crispy tempura shrimp with dipping sauce.",
      price: "259 Kč",
      image: "/tempura.jpg",
    },
    {
      name: "Ramen Special",
      description: "Rich broth with noodles, pork, egg, and vegetables.",
      price: "349 Kč",
      image: "/ramen.jpg",
    },
    {
      name: "Veggie Roll",
      description: "Fresh vegetables rolled in seasoned rice and nori.",
      price: "199 Kč",
      image: "/veggie-roll.jpg",
    },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900/80 to-white/30 overflow-hidden transition-colors duration-1000"
    >
      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-black/30 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-16">
        {/* HEADER */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="uppercase tracking-widest font-semibold text-gray-400">
            Naše menu
          </h5>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            Ochutnejte to nejlepší
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            Prohlédněte si náš výběr sushi, ramen a dalších asijských specialit. 
            Vše připraveno čerstvě a s láskou.
          </p>
        </motion.div>

        {/* MENU CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-black rounded-3xl overflow-hidden shadow-xl border border-white/10 transition-transform duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6 text-center space-y-2">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
                <span className="block text-lg font-semibold text-white mt-2">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BUTTON TO DOWNLOAD FULL MENU */}
        <motion.button
          onClick={() => window.open("/menu.pdf", "_blank")}
          className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kompletní menu (PDF)
          <span className="ml-2 text-xl">→</span>
          <span className="absolute inset-0 rounded-full bg-white/20 blur-2xl animate-pulse"></span>
        </motion.button>
      </div>
    </section>
  );
};

export default Menu;
