import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("CS");

  const links = [
    { name: "Home", path: "/" },
    { name: "All u can eat", path: "/alleat" },
    { name: "Menu", path: "/menu" },
    { name: "Event", path: "/event" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "CS" ? "EN" : "CS");
    setIsOpen(false);
  };

  // Shared gradient class for buttons
  const gradientBtn =
    "px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-[#F6E27A] via-[#E6C85D] to-[#B89D4F] text-black shadow-lg hover:scale-105 transition-transform";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Links left */}
          <div className="flex items-center space-x-3 p-1 rounded-full bg-black">
            {links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {({ isActive }) => (
                  <span
                    className={`px-4 py-2 text-base font-medium transition-all duration-300 ${
                      isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Logo center */}
          <div className="flex justify-center mx-4">
            <Link to="/">
              <img src="./public/nori-logo.png" alt="Nori Logo" className="h-24 w-auto" />
            </Link>
          </div>

          {/* Right buttons */}
          <div className="flex items-center space-x-4">
            {/* Language button */}
            <button onClick={toggleLanguage} className={gradientBtn}>
              {language} ▼
            </button>

            {/* Reservation button */}
            <Link to="/reservation" className={gradientBtn}>
              Rezervovat
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Animated Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-6 flex flex-col justify-between items-center focus:outline-none"
          >
            <span
              className={`block absolute h-0.5 w-8 bg-white transform transition-all duration-700 ease-in-out ${
                isOpen ? "rotate-45 top-2.5 translate-y-0.5" : "top-0 translate-y-0"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-8 bg-white transition-all duration-700 ease-in-out ${
                isOpen ? "opacity-0" : "top-2.5"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-8 bg-white transform transition-all duration-700 ease-in-out ${
                isOpen ? "-rotate-45 top-2.5 -translate-y-0.5" : "top-5 translate-y-0"
              }`}
            />
          </button>

          {/* Logo */}
          <Link to="/">
            <img src="./public/nori-logo.png" alt="Nori Logo" className="h-16 w-auto" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-700 ease-in-out transform origin-top ${
          isOpen ? "max-h-screen opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
        } overflow-hidden bg-black/80 backdrop-blur-sm`}
      >
        <div className="flex flex-col px-6 py-6 space-y-5">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center w-full px-4 py-3 rounded-full text-xl font-medium transition-all duration-300 ${
                  isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
                }`
              }
            >
              <span className="mr-3">
                {link.name === "Home" && "🏠"}
                {link.name === "All u can eat" && "🍽️"}
                {link.name === "Menu" && "🍣"}
                {link.name === "Event" && "🎉"}
                {link.name === "Gallery" && "🖼️"}
                {link.name === "Contact" && "📞"}
              </span>
              {link.name}
            </NavLink>
          ))}

          {/* Language + Reservation buttons */}
          <div className="flex flex-col space-y-4 pt-4">
            <button onClick={toggleLanguage} className={gradientBtn + " w-full"}>
              {language} ▼
            </button>

            <Link to="/reservation" className={gradientBtn + " w-full text-center"}>
              Rezervovat
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
