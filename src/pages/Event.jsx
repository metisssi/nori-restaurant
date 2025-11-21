import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Event = () => {
  const scrollToGallery = () => {
    const section = document.getElementById("gallery");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const makeReservation = () => {
    window.location.href = "/reservation"; // Replace with your reservation page/link
  };

  return (
    <section
      id="event"
      className="relative py-20 px-4 bg-gradient-to-b from-white/30 via-gray-900/80 to-black overflow-hidden transition-colors duration-1000"
    >
      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-black/30 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-12">

        {/* HEADER AND DESCRIPTION */}
        <motion.div
          className="space-y-6 text-center max-w-3xl text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="uppercase tracking-widest font-semibold text-gray-400">
            Události & Akce
          </h5>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Zažijte naše speciální akce
          </h2>

          <p className="text-lg leading-relaxed text-white">
            Pořádáme tematické večery, degustace a speciální akce pro naše hosty.
            Rezervujte si místo a nechte se hýčkat autentickými chutěmi a atmosférou.
          </p>

          {/* RESERVATION BUTTON */}
          <button
            onClick={makeReservation}
            className="inline-flex items-center justify-center px-7 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 relative"
          >
            Rezervovat místo
            <ArrowRight size={20} className="ml-2" />
            <span className="absolute inset-0 rounded-full bg-white/20 blur-2xl animate-pulse"></span>
          </button>
        </motion.div>

        {/* BIG IMAGE UNDER HEADER */}
        <motion.div
          className="mt-8 relative w-full h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/alleat.jpg" // Replace with your event image
            alt="Event"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
        </motion.div>

        {/* SCROLL TO GALLERY BUTTON */}
        <motion.button
          onClick={scrollToGallery}
          className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prohlédnout galerii
          <ArrowRight size={20} className="ml-2" />
          <span className="absolute inset-0 rounded-full bg-white/20 blur-2xl animate-pulse"></span>
        </motion.button>
      </div>
    </section>
  );
};

export default Event;
