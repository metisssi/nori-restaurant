import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "../context/Languagecontext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-t from-black via-red-950/30 to-gray-900 text-white overflow-hidden border-t border-red-900/30">
      {/* Glow blobs - RED */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* LOGO / NAME */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
            Nori Restaurant
          </h2>
          <p className="text-gray-400 max-w-sm">
            {t.footer.description}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-400">{t.footer.quickLinks}</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#alleat" className="hover:text-red-400 transition-colors">{t.nav.allEat}</a></li>
            <li><a href="#menu" className="hover:text-red-400 transition-colors">{t.nav.menu}</a></li>
            <li><a href="#event" className="hover:text-red-400 transition-colors">{t.nav.event}</a></li>
            <li><a href="#gallery" className="hover:text-red-400 transition-colors">{t.nav.gallery}</a></li>
            <li><a href="#reservation" className="hover:text-red-400 transition-colors">{t.nav.contact}</a></li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-400">{t.footer.followUs}</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-red-400 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-red-400 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-red-400 transition-colors"><Twitter size={24} /></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-red-900/30 pt-6 text-center text-gray-400 text-sm relative z-10">
        &copy; {new Date().getFullYear()} Nori Restaurant. {t.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;