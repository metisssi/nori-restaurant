import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/Languagecontext";

const Main = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/main1.webp",
      alt: "Nori Restaurant Photo 1",
    },
    {
      image: "/main2.webp",
      alt: "Nori Restaurant Photo 2",
    },
    {
      image: "/main3.webp",
      alt: "Nori Restaurant Photo 3",
    },
  ];
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-section min-h-screen relative overflow-hidden bg-black">
      {/* Red subtle shadow overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <section className="pt-20 pb-12 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          {/* TEXT SECTION */}
          <div className="order-1 lg:order-2 bg-black/90 text-white rounded-3xl p-8 lg:p-12 flex flex-col justify-between shadow-2xl border border-red-800/20 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                {t.main.heading}{" "}
                <span className="bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">
                  {t.main.headingAccent}
                </span>{" "}
                {t.main.heading2}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">{t.main.description}</p>
              <button
                onClick={() => scrollToSection("alleat")}
                className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:from-red-500 hover:to-red-600 transition-all duration-300 group"
              >
                <span>{t.main.aboutButton}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Interior Image + Reservation */}
            <div className="mt-8 relative rounded-2xl overflow-hidden h-64 group shadow-lg border-2 border-red-800/30">
              <img
                src="./reservation.webp"
                alt="Restaurant interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent" />
              <a
                href="https://www.bookiopro.com/nori-restaurant/rs-widget?lang=cs&c1=79d9c3&c2=fbf5f0&c3=453a3a"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-red-500 text-black rounded-full font-bold hover:from-yellow-300 hover:to-red-400 shadow-md transition-all duration-300"
              >
                <span>{t.main.reserveButton}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* SLIDER */}
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] shadow-2xl border-2 border-red-900/30 transform hover:scale-[1.02] transition-transform duration-300">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-black/30 to-transparent" />
              </div>
            ))}

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 left-8 flex space-x-4 z-10">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-red-900/60 flex items-center justify-center text-white hover:bg-red-800/80 transition-all duration-300 backdrop-blur-sm border border-red-700/50"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-red-900/60 flex items-center justify-center text-white hover:bg-red-800/80 transition-all duration-300 backdrop-blur-sm border border-red-700/50"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 right-8 flex space-x-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "w-16 bg-red-500" : "w-4 bg-red-300/50 hover:w-6 hover:bg-red-400/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;