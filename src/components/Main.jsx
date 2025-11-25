import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=800&fit=crop",
      alt: "Sushi platter",
    },
    {
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&h=800&fit=crop",
      alt: "Restaurant interior",
    },
    {
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&h=800&fit=crop",
      alt: "Fresh sushi",
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
    <div className="main-section min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-red-950/20 to-gray-900 transition-colors duration-1000">
      {/* Decorative shapes - RED */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" />

      <section className="pt-20 pb-12 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          {/* TEXT SECTION - RED GRADIENT */}
          <div className="order-1 lg:order-2 bg-gradient-to-br from-red-950 via-black to-red-900 text-white rounded-3xl p-8 lg:p-12 flex flex-col justify-between shadow-2xl border border-red-800/30 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                Zažijte <span className="bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">jedinečný</span> gastronomický zážitek v Nori
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Vítejte v restauraci Nori v srdci Prahy, kde se setkávají asijské kulinářské tradice s moderními inovacemi.
              </p>
              <button
                onClick={() => scrollToSection("about")}
                className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:from-red-500 hover:to-red-600 transition-all duration-300 group"
              >
                <span>Více o nás</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Interior Image + Reservation */}
            <div className="mt-8 relative rounded-2xl overflow-hidden h-64 group shadow-lg border-2 border-red-800/40">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=300&fit=crop"
                alt="Restaurant interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent" />
              <button
                onClick={() => scrollToSection("reservation")}
                className="absolute bottom-6 left-6 inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-red-500 text-black rounded-full font-bold hover:from-yellow-300 hover:to-red-400 shadow-md transition-all duration-300"
              >
                <span>Rezervace</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* SLIDER - RED ACCENTS */}
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] shadow-2xl border-2 border-red-900/30 transform hover:scale-[1.02] transition-transform duration-300">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-black/30 to-transparent" />
              </div>
            ))}

            {/* Navigation Buttons - RED */}
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

            {/* Indicators - RED */}
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