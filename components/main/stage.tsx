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
      className="min-h-screen py-24 px-6 text-gray-200"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Mon Stage chez <span className="text-white font-semibold">ReeWayy</span></h2>
        <div className="h-1 w-20 bg-white/40 mx-auto my-6"></div>
        <p className="text-xl text-gray-400 leading-relaxed">
          J&apos;ai effectu&eacute; mon stage au sein de l&apos;entreprise <span className="text-white font-semibold">ReeWayy</span>, sur leur plateforme
          <a href="#experience"><span className="text-white font-semibold">Arimayi</span></a>, en tant que
          <span className="text-white font-semibold"> d&eacute;veloppeur front-end</span>, sp&eacute;cialis&eacute; en
          <span className="text-white font-semibold"> Next.js</span>.
          Cette exp&eacute;rience a &eacute;t&eacute; tr&egrave;s enrichissante tant sur le plan technique que sur le plan humain.
        </p>
        <p className="text-xl text-gray-400 leading-relaxed">
          Pendant mon stage, j&apos;ai eu l&apos;opportunit&eacute; de travailler avec le <span className="text-white font-semibold">PDG</span> de l&apos;entreprise,
          son parcours m&apos;a inspir&eacute; et m&apos;a permis de voir le monde du d&eacute;veloppement et de l&apos;<span className="text-white font-semibold">IA</span> diff&eacute;remment.
          C&apos;est aussi gr&acirc;ce &agrave; lui que plus tard j&apos;aimerais lancer ma propre entreprise dans le secteur <span className="text-white font-semibold">IT</span>.
        </p>
        <p className="text-xl text-gray-400 leading-relaxed">
          <span className="text-white font-semibold">J&apos;ai d&eacute;couvert que j&apos;avais une bonne capacit&eacute; d&apos;adaptation, j&apos;ai d&ucirc; apprendre plusieurs technologies en m&ecirc;me temps.</span>
        </p>
        <p className="text-xl text-gray-400 leading-relaxed">
          <span className="text-white font-semibold">Mon stage m&apos;a permis de d&eacute;couvrir en profondeur <span className="text-white font-semibold">Next.js</span> et <span className="text-white font-semibold">TailwindCSS</span>.</span>
        </p>
        <p className="text-xl text-gray-400 leading-relaxed">
          J&apos;ai aussi appris &agrave; &ecirc;tre quelqu&apos;un de <span className="text-white font-semibold">confiant</span> et en qui on peut avoir <span className="text-white font-semibold">confiance</span>.
        </p>
        <p className="text-xl text-gray-400 leading-relaxed">
          J&apos;ai eu la chance d&apos;effectuer mon stage avec <span className="text-white font-semibold">3 de mes camarades</span> ce qui a grandement simplifi&eacute; mon int&eacute;gration.
          L&apos;&eacute;quipe en g&eacute;n&eacute;ral &eacute;tait super, on sentait vraiment l&apos;entraide entre chaque membre et on n&apos;h&eacute;sitait pas &agrave; venir nous voir, nous, de jeunes d&eacute;veloppeurs, pour de l&apos;aide.
        </p>
        <p className="text-xl text-gray-400 leading-relaxed">
          J&apos;ai beaucoup aim&eacute; les <span className="text-white font-semibold">daily</span>, c&apos;&eacute;tait convivial et on sentait que chaque membre avait un <span className="text-white font-semibold">r&ocirc;le</span> &agrave; jouer.
        </p>
        <p className="text-xl text-gray-400 leading-relaxed">
          Ce qui m&apos;a le plus marqu&eacute; c&apos;est l&apos;importance du <span className="text-white font-semibold">r&ocirc;le</span> que l&apos;on m&apos;avait donn&eacute;, je sentais vraiment qu&apos;on comptait sur moi.
        </p>
        <p className="text-xl text-gray-400 leading-relaxed">
          <span className="text-white font-semibold">Mon stage a vraiment &eacute;t&eacute; enrichissant et je l&apos;ai ador&eacute;.</span>
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-black/20 rounded-xl backdrop-blur-md border border-white/10"
        >
          <h3 className="text-2xl font-bold text-[#13FFAA]">Comp&eacute;tence 1</h3>
          <p className="mt-2 text-white font-semibold">Développement d&apos;applications</p>
          <p className="mt-4 text-gray-400">
            J&apos;ai eu &agrave; d&eacute;velopper 11 pages utilisateurs avec <strong>Next.js, tailwindCSS, Redux</strong>,
            j&apos;ai aussi cr&eacute;&eacute; des composants que mes camarades ont pu r&eacute;utiliser.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-black/20 rounded-xl backdrop-blur-md border border-white/10"
        >
          <h3 className="text-2xl font-bold text-[#1E67C6]">Comp&eacute;tence 5</h3>
          <p className="mt-2 text-white font-semibold">Gestion de projet</p>
          <p className="mt-4 text-gray-400">
            L&apos;entreprise utilisait beaucoup la m&eacute;thode Agile, tous les matins nous avions une r&eacute;union pour voir le projet et les t&acirc;ches &agrave; faire.
            J&apos;ai aussi particip&eacute; aux <strong>r&eacute;unions de suivi</strong> et j&apos;ai aussi g&eacute;r&eacute; mon travail gr&acirc;ce &agrave;
            <strong> GitHub</strong> et <strong>OneDrive</strong>.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-black/20 rounded-xl backdrop-blur-md border border-white/10"
        >
          <h3 className="text-2xl font-bold text-[#CE84CF]">Comp&eacute;tence 6</h3>
          <p className="mt-2 text-white font-semibold">Travail en &eacute;quipe</p>
          <p className="mt-4 text-gray-400">
            On avait des daily pour voir le projet et les t&acirc;ches &agrave; faire. On disait ce que l&apos;on avait fait la veille et ce que l&apos;on allait faire dans la journ&eacute;e.
            Ces r&eacute;unions nous permettaient de suivre l&apos;avancement de la plateforme et de savoir o&ugrave; en est chaque d&eacute;veloppeur, s&apos;il a besoin d&apos;aide ou s&apos;il a des questions.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stage;
