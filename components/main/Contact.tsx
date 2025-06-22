"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [hoveredEmail, setHoveredEmail] = useState(false);
  const [hoveredPhone, setHoveredPhone] = useState(false);

  return (
    <motion.section 
      id="contact" 
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16">
        {/* Informations de contact */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300"
          >
            Entrez en <span className="text-gray-500">contact</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl rounded-2xl p-6 sm:p-8 space-y-6"
          >
            {/* Téléphone */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-gray-300 flex items-center gap-2">
                <FaPhone className="text-gray-400" /> Téléphone
              </p>
              <motion.a 
                href="tel:+33751458685"
                aria-label="Appeler Diarra Konté"
                className="text-xl sm:text-2xl font-bold text-gray-200 hover:text-gray-400 transition-colors duration-300 flex items-center gap-2"
                onHoverStart={() => setHoveredPhone(true)}
                onHoverEnd={() => setHoveredPhone(false)}
                whileHover={{ x: 5 }}
              >
                +33 7 51 45 86 85
                <motion.span
                  animate={{ x: hoveredPhone ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  ↗
                </motion.span>
              </motion.a>
            </div>

            {/* Email */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-gray-300 flex items-center gap-2">
                <FaEnvelope className="text-gray-400" /> Email
              </p>
              <motion.a 
                href="mailto:diarrakontepro@gmail.com"
                aria-label="Envoyer un email à Diarra Konté"
                className="text-xl sm:text-2xl font-bold text-gray-200 hover:text-gray-400 transition-colors duration-300 flex items-center gap-2"
                onHoverStart={() => setHoveredEmail(true)}
                onHoverEnd={() => setHoveredEmail(false)}
                whileHover={{ x: 5 }}
              >
                diarrakontepro@gmail.com
                <motion.span
                  animate={{ x: hoveredEmail ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  ↗
                </motion.span>
              </motion.a>
            </div>

            {/* Localisation */}
            <div className="space-y-3 pt-4 border-t border-gray-700">
              <p className="text-base sm:text-lg text-gray-300 flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" /> Localisation
              </p>
              <p className="text-lg sm:text-xl text-gray-300">Argenteuil, Île-de-France</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Carte Google Maps */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full h-[300px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41928.231509860525!2d2.2222179409417055!3d48.94368897214213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66664dfcb055b%3A0x40b82c3688b36d0!2s95100%20Argenteuil!5e0!3m2!1sfr!2sfr!4v1745791381862!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Localisation Argenteuil"
            className="transition-transform duration-300 hover:scale-[1.01]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;