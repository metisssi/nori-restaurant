import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/Languagecontext";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();

  const links = [
    { name: t.nav.home, path: "/", sectionId: null },
    { name: t.nav.allEat, path: "/", sectionId: "alleat" },
    { name: t.nav.menu, path: "/", sectionId: "menu" },
    { name: t.nav.event, path: "/", sectionId: "event" },
    { name: t.nav.gallery, path: "/", sectionId: "gallery" },
    { name: t.nav.contact, path: "/", sectionId: "footer" },
  ];

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    setShowLangMenu(false);

    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

 const flagCountries = {
  cs: "CZ",
  en: "GB",
};

const languageDisplayNames = {
  cs: "CZ",
  en: "EN",
};

  const gradientBtn =
    "px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-[#F6E27A] via-[#E6C85D] to-[#B89D4F] text-black shadow-lg hover:scale-105 transition-transform";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Links left */}
          <div className="flex items-center space-x-3 p-1 rounded-full bg-black">
            {links.map(link => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.sectionId)}
                className="px-4 py-2 text-base font-medium text-gray-400 hover:text-white transition-all duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Logo center */}
          <div className="flex justify-center mx-4">
            <Link to="/">
              <img src="/nori_logo_transparent.png" alt="Nori Logo" className="h-28 w-auto" />
            </Link>
          </div>

          {/* Right buttons */}
          <div className="flex items-center space-x-4 relative">
            {/* Language button */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`${gradientBtn} flex items-center space-x-2`}
              >
                <ReactCountryFlag countryCode={flagCountries[language]} svg style={{ width: "24px", height: "16px" }} />
                <span>{languageDisplayNames[language]}</span>
                <span>▼</span>
              </button>

              {showLangMenu && (
                <div className="absolute top-full mt-2 right-0 bg-black border border-[#E6C85D]/30 rounded-2xl shadow-2xl overflow-hidden z-50 min-w-[120px]">
                  {Object.keys(flagCountries).map(lang => (
                    <button
                      key={lang}
                      onClick={() => {
                        changeLanguage(lang);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-3 flex items-center justify-center space-x-2 transition-all rounded-lg hover:bg-[#E6C85D]/20 ${language === lang ? "bg-[#E6C85D]/30 text-black font-semibold" : "text-gray-300"
                        }`}
                    >
                      <ReactCountryFlag countryCode={flagCountries[lang]} svg style={{ width: "24px", height: "16px" }} />
                      <span>{languageDisplayNames[lang]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Reservation button */}
            <a
              href="https://www.bookiopro.com/nori-restaurant/rs-widget?lang=cs&c1=79d9c3&c2=fbf5f0&c3=453a3a"
              target="_blank"
              rel="noopener noreferrer"
              className={gradientBtn}
            >
              {t.nav.reserve}
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none"
          >
            <span className={`block absolute h-0.5 w-8 bg-white transform transition-all duration-700 ease-in-out ${isOpen ? "rotate-45 top-2.5 translate-y-0.5" : "top-0 translate-y-0"}`} />
            <span className={`block absolute h-0.5 w-8 bg-white transition-all duration-700 ease-in-out ${isOpen ? "opacity-0" : "top-2.5"}`} />
            <span className={`block absolute h-0.5 w-8 bg-white transform transition-all duration-700 ease-in-out ${isOpen ? "-rotate-45 top-2.5 -translate-y-0.5" : "top-5 translate-y-0"}`} />
          </button>

          {/* Mobile Logo */}
          <Link to="/">
            <img src="/nori_logo_transparent.png" alt="Nori Logo" className="h-24 w-auto" />
          </Link>

          {/* Mobile always-show flag */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center space-x-1 p-2"
            >
              <ReactCountryFlag countryCode={flagCountries[language]} svg style={{ width: "24px", height: "16px" }} />
              <span className="text-white text-sm">{languageDisplayNames[language]}</span>
            </button>

            {showLangMenu && (
              <div className="absolute top-full mt-2 right-0 bg-black border border-[#E6C85D]/30 rounded-2xl shadow-2xl overflow-hidden z-50 min-w-[120px]">
                {Object.keys(flagCountries).map(lang => (
                  <button
                    key={lang}
                    onClick={() => {
                      changeLanguage(lang);
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-4 py-3 flex items-center justify-center space-x-2 transition-all rounded-lg hover:bg-[#E6C85D]/20 ${language === lang ? "bg-[#E6C85D]/30 text-white font-semibold" : "text-gray-300"
                      }`}
                  >
                    <ReactCountryFlag countryCode={flagCountries[lang]} svg style={{ width: "24px", height: "16px" }} />
                    <span>{languageDisplayNames[lang]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-700 ease-in-out transform origin-top ${isOpen ? "max-h-screen opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"} overflow-hidden bg-black/80 backdrop-blur-sm`}>
        <div className="flex flex-col px-6 py-6 space-y-5">
          {links.map(link => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.sectionId)}
              className="flex items-center w-full px-4 py-3 rounded-full text-xl font-medium transition-all duration-300 text-gray-300 hover:text-white text-left"
            >
              <span className="mr-3">
                {link.name === t.nav.home && "🏠"}
                {link.name === t.nav.allEat && "🍽️"}
                {link.name === t.nav.menu && "🍣"}
                {link.name === t.nav.event && "🎉"}
                {link.name === t.nav.gallery && "🖼️"}
                {link.name === t.nav.contact && "📞"}
              </span>
              {link.name}
            </button>
          ))}

          <div className="flex flex-col space-y-4 pt-4">
            {Object.keys(flagCountries).map(lang => (
              <button
                key={lang}
                onClick={() => {
                  changeLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 flex items-center justify-center space-x-2 rounded-full transition-all ${language === lang
                    ? "bg-gradient-to-r from-[#F6E27A] via-[#E6C85D] to-[#B89D4F] text-black font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                <ReactCountryFlag countryCode={flagCountries[lang]} svg style={{ width: "24px", height: "16px" }} />
                <span>{languageDisplayNames[lang]}</span>
              </button>
            ))}

            <a
              href="https://www.bookiopro.com/nori-restaurant/rs-widget?lang=cs&c1=79d9c3&c2=fbf5f0&c3=453a3a"
              target="_blank"
              rel="noopener noreferrer"
              className={gradientBtn + " w-full text-center block"}
            >
              {t.nav.reserve}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;