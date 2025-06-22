"use client";
import React from "react";
import { motion } from "framer-motion";

const Stage = () => {
  return (
    <motion.section
      id="stage"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-24 px-6 text-gray-200 bg-gradient-to-b from-black via-[#0d0d0d] to-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Mon Stage chez ReeWayy</h2>
        <div className="h-1 w-20 bg-white/40 mx-auto my-6"></div>
        <p className="text-xl text-gray-400 leading-relaxed">
          J'ai effectué mon stage au sein de l'entreprise <span className="text-white font-semibold">ReeWayy</span>, sur leur plateforme <a href="#experience" ><span  className="text-white font-semibold">Arimayi</span></a>, en tant que 
          <span className="text-white font-semibold"> développeur front-end</span>, spécialisé en <span className="text-white font-semibold">Next.js</span>. 
          Cette expérience a été très enrichissante tant sur le plan technique que sur le plan humain.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-black/20 rounded-xl backdrop-blur-md border border-white/10"
        >
          <h3 className="text-2xl font-bold text-[#13FFAA]">Compétence 1</h3>
          <p className="mt-2 text-white font-semibold">Développement d'applications</p>
          <p className="mt-4 text-gray-400">
            Participation au développement de plusieurs interfaces utilisateurs avec <strong>Next.js</strong>, 
            <strong> TailwindCSS</strong> et mise en place de composants réutilisables.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-black/20 rounded-xl backdrop-blur-md border border-white/10"
        >
          <h3 className="text-2xl font-bold text-[#1E67C6]">Compétence 5</h3>
          <p className="mt-2 text-white font-semibold">Gestion de projet</p>
          <p className="mt-4 text-gray-400">
            Intégration dans une équipe agile, participation aux <strong>réunions de suivi</strong> et gestion de mon travail via 
            <strong> GitLab</strong> et <strong>Trello</strong>.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-black/20 rounded-xl backdrop-blur-md border border-white/10"
        >
          <h3 className="text-2xl font-bold text-[#CE84CF]">Compétence 6</h3>
          <p className="mt-2 text-white font-semibold">Travail en équipe</p>
          <p className="mt-4 text-gray-400">
            Collaboration quotidienne avec des développeurs backend et UX designers, échanges constructifs 
            et adaptation aux contraintes d’équipe.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stage;
