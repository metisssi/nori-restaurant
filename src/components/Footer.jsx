import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../context/Languagecontext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="footer" className="relative py-16 px-4 bg-black text-white overflow-hidden border-t border-red-800/30">
      {/* Red subtle shadow overlays - matching Main */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-400">{t.footer.quickLinks}</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#alleat" className="hover:text-red-400 transition-colors">{t.nav.allEat}</a></li>
            <li><a href="#menu" className="hover:text-red-400 transition-colors">{t.nav.menu}</a></li>
            <li><a href="#event" className="hover:text-red-400 transition-colors">{t.nav.event}</a></li>
            <li><a href="#gallery" className="hover:text-red-400 transition-colors">{t.nav.gallery}</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-400">{t.footer.contact}</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-red-400" />
              <a href="tel:+420724888916" className="hover:text-red-400 transition-colors">{t.footer.phone}</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-red-400" />
              <a href="mailto:norirestaurant2024@gmail.com" className="hover:text-red-400 transition-colors">{t.footer.email}</a>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={18} className="text-red-400" />
              <span>{t.footer.address}</span>
            </li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-400">{t.footer.followUs}</h3>
          <div className="flex flex-col space-y-3 text-gray-300">
            <a 
              href="https://www.instagram.com/nori_praha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-red-400 transition-colors group"
            >
              <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.tiktok.com/@nori_praha?_r=1&_t=ZN-92z96lBiHME" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-red-400 transition-colors group"
            >
              <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span>TikTok</span>
            </a>
            <a 
              href="https://www.facebook.com/share/17uVatwHve/?mibextid=wwXIfr" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-red-400 transition-colors group"
            >
              <Facebook size={24} className="group-hover:scale-110 transition-transform" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-400">{t.footer.location || "Location"}</h3>
          <div className="w-full h-48 rounded-lg overflow-hidden border border-red-800/30">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.0838476449867!2d14.404461776624893!3d50.07291671343977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e5f4f2e1f1%3A0x7e1e8f5e7e8f5e7e!2zTsOhZHJhxb5uw60gNTgvMTEwLCAxNTAgMDAgUHJhaGEgNS1TbcOtY2hvdiwgQ3plY2hpYQ!5e0!3m2!1sen!2scz!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nori Restaurant Location"
            ></iframe>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-red-800/30 pt-6 text-center text-gray-400 text-sm relative z-10">
        &copy; {new Date().getFullYear()} Nori Restaurant. {t.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;