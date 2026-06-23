import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Mail, MapPin, Linkedin, Phone } from "lucide-react";

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/DevClubIIITDM", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/developersclub-iiitdm-kancheepuram", label: "LinkedIn" },
  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/dev.club.iiitdm", label: "Instagram" },
  { icon: <Mail className="w-5 h-5" />, href: "mailto:devclub@iiitdm.ac.in'", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 border-t border-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 pixel-font">
              Vashisht Hackathon 3.O
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Join us for an epic hackathon experience where innovation meets
              technology.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">IIITDM Kancheepuram, Melakottaiyur, Chennai 600127 (Off Vandalur-Kelambakkam Road)</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#About" },
                { name: "Tracks", href: "#Tracks" },
                { name: "Register", href: "#Register" },
              ].map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors duration-200"
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:devclub@iiitdm.ac.in" target="_blank" rel="noopener noreferrer">devclub@iiitdm.ac.in</a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+918374488579" target="_blank" rel="noopener noreferrer">+91 8374488579</a>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Vashisht Hackathon 3.O. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
