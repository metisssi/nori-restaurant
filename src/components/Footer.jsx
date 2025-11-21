import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-t from-black via-gray-900/80 to-gray-800 text-white overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* LOGO / NAME */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold">Nori Restaurant</h2>
          <p className="text-gray-400 max-w-sm">
            Autentický asijský gurmánský zážitek v srdci Prahy. Přijďte ochutnat naše speciality.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Rychlé odkazy</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#alleat" className="hover:text-white transition-colors">All You Can Eat</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
            <li><a href="#event" className="hover:text-white transition-colors">Události</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Galerie</a></li>
            <li><a href="#reservation" className="hover:text-white transition-colors">Rezervace</a></li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Sledujte nás</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={24} /></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm relative z-10">
        &copy; {new Date().getFullYear()} Nori Restaurant. Všechna práva vyhrazena.
      </div>
    </footer>
  );
};

export default Footer;
