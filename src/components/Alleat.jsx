import { motion } from "framer-motion";

const Alleat = () => {
  const openPdf = () => {
    window.open("/menu.pdf", "_blank"); // replace with your PDF path
  };

  return (
    <section
      id="alleat"
      className="relative py-20 px-4 bg-gradient-to-b from-white/30 via-gray-900/80 to-black overflow-hidden transition-colors duration-1000"
    >
      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-black/30 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-12">

        {/* TEXT */}
        <motion.div
          className="space-y-6 text-center text-white max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="uppercase tracking-widest font-semibold text-gray-400">
            All You Can Eat
          </h5>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Neomezený gurmánský zážitek
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            Vyberte si z našeho širokého výběru sushi a asijských specialit. Užijte si autentické chutě v elegantním prostředí.
          </p>

          <button
            onClick={openPdf}
            className="inline-flex items-center justify-center px-7 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 relative"
          >
            Zobrazit menu (PDF)
            <span className="ml-2 text-xl">→</span>
            <span className="absolute inset-0 rounded-full bg-white/20 blur-2xl animate-pulse"></span>
          </button>

          {/* CREATIVE PHOTO */}
          <motion.div
            className="mt-8 relative w-full h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {/* Diagonal clip mask */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="w-full h-full clip-[polygon(0_0,100%_0,100%_85%,0_100%)] relative">
                <img
                  src="/alleat.jpg"
                  alt="Sushi platter"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating light/glow */}
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/5 blur-2xl animate-pulse delay-500"></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-3xl" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Alleat;
