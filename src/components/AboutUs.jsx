import { motion } from "framer-motion";

const AboutUs = () => {
  const features = [
    { title: "Atmosféra", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80" },
    { title: "Jedinečný zážitek", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80" },
    { title: "Vynikající pokrmy", image: "https://images.unsplash.com/photo-1604908177524-1aa0d6b8519a?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-gradient-to-b from-gray-900 via-red-950/30 to-black overflow-hidden transition-colors duration-1000"
    >
      {/* Glow blobs - RED */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-yellow-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* TEXT */}
        <motion.div
          className="space-y-6 text-center lg:text-left text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="uppercase tracking-widest font-semibold text-red-400">
            O nás
          </h5>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Objevte náš <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">příběh</span>
          </h2>

          <p className="max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed text-gray-300">
            Jsme <strong>první</strong> restaurací v ČR, která přináší autentický
            asijský gurmánský zážitek díky <strong>All You Can Eat Á la carte menu</strong>.
          </p>

          <button className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 relative border border-red-500/30">
            Více o našem konceptu
            <span className="ml-2 text-xl">→</span>
          </button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.03] transition-transform duration-700 border-2 border-red-900/30"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80"
            alt="Sushi Chef"
            className="w-full h-[350px] sm:h-[480px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent" />
        </motion.div>
      </div>

      {/* FEATURE CARDS */}
      <div className="mt-20 flex flex-wrap justify-center gap-10 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group w-56 sm:w-64 p-6 bg-gradient-to-br from-red-900 to-black rounded-3xl shadow-xl border border-red-800/30 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-red-700/30 shadow-lg transition-transform duration-500 group-hover:scale-110">
              <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white text-center">
              {feature.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;