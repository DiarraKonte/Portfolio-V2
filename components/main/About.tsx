"use client";
import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';



const aboutContent = [
  {
    title: "À propos de moi",
    content:
      <>
        <p className="text-gray-400">
          J&apos;etais initialement peu attiré par le
          <span className="font-bold text-white"> développement en général</span>, j&apos;ai commencé à m&apos;y passionner en découvrant
          <span className="font-bold text-white"> l&apos;univers de l&apos;informatique</span>, des
          <span className="font-bold text-white"> nouvelles technologies</span> et de
          <span className="font-bold text-white"> l&apos;intelligence artificielle</span>.
          Aujourd&apos;hui, je suis en
          <span className="font-bold text-white"> deuxième année de BUT Informatique</span> à l&apos;
          <span className="font-bold text-white"> IUT de la Sorbonne Paris Nord</span>.
        </p>
      </>,
    stats: [
      { value: "2+", label: "Années d'études en Informatique", color: "text-yellow-400" },
      { value: "Parcours du BUT", label: "Réalisation d'applications : conception, développement, validation", color: "text-blue-400" }
    ]
  },
  {
    title: "",
    content:
      <>
        <p className="text-gray-400 mt-4">
          Mon entr&eacute;e en <span className="text-white font-semibold">BUT 1</span> a marqu&eacute; le commencement de mes &eacute;tudes sup&eacute;rieures dans un environnement qui m&rsquo;&eacute;tait totalement inconnu. Ne venant pas d&rsquo;un parcours informatique, mes premiers pas ont &eacute;t&eacute; difficiles : je ne connaissais ni les <span className="text-white font-semibold">outils</span>, ni les <span className="text-white font-semibold">langages de programmation</span>, ni les <span className="text-white font-semibold">m&eacute;thodes</span> que je d&eacute;couvrais n&rsquo;&eacute;taient ma&icirc;tris&eacute;s.
        </p>
        <p className="text-gray-400 mt-2">
          C&rsquo;est progressivement &agrave; travers les <span className="text-white font-semibold">projets scolaires (SAE)</span> ainsi que mes projets personnels que j&rsquo;ai d&eacute;couvert que <span className="text-white font-semibold">l&rsquo;informatique</span> &eacute;tait carr&eacute;ment un nouveau monde pour moi, &ccedil;a n&apos;a pas de limite, il ne fait qu&apos;&eacute;voluer et <span className="text-white font-semibold">&ccedil;a me passionne</span>.
        </p>
        <p className="text-gray-400 mt-2">Je sens que j&apos;&eacute;volue au fur et &agrave; mesure des semestres</p>
        <p className="text-gray-400 mt-2">
          Pendant ces <span className="text-white font-semibold">2 ann&eacute;es</span>, j&apos;ai appris plein de nouvelles <span className="text-white font-semibold">technologies</span> et <span className="text-white font-semibold">langages de programmation</span>, j&apos;en ai aim&eacute; certaines et d&apos;autres que j&apos;ai trouv&eacute; un peu moins int&eacute;ressantes.
        </p>
        <p className="text-gray-400 mt-2">
          Je ne sais toujours pas dans quel <span className="text-white font-semibold">domaine</span> me sp&eacute;cialiser mais une chose est s&ucirc;re, c&apos;est que je veux faire de <span className="text-white font-semibold">l&apos;informatique</span> !
        </p>
      </>,
    stats: []
  },
  {
    title: "Mon But",
    content: <><p>En tant qu&apos;étudiant, mon principal objectif est de toucher à tout, que ce soit du front-end ou du back-end. Je veux avoir une vision large de ce que l&apos;informatique, le développement web et l&apos;IA peuvent offrir.</p></>,
    stats: [
      { value: "8+", label: "Technologies ", color: "text-green-400" },
      { value: "1", label: "Frameworks", color: "text-purple-400" }
    ]
  },
  {
    title: "Mon parcours",
    content: (
      <>
        <p className="text-gray-400">
          J&apos;ai débuté mon parcours scolaire au
          <span className="font-bold text-white"> collège Claude Monet</span> à Argenteuil où j&apos;ai obtenu mon
          <span className="font-bold text-white"> brevet mention Très Bien</span>, puis j&apos;ai poursuivi au
          <span className="font-bold text-white"> lycée Julie-Victoire Daubié</span>, obtenant mon
          <span className="font-bold text-white"> baccalauréat scientifique avec mention Assez Bien</span>,
          en spécialités
          <span className="font-bold text-white"> Mathématiques, Physique-Chimie</span> et
          <span className="font-bold text-white"> Mathématiques Expertes</span>.
          Actuellement, je poursuis mes études en
          <span className="font-bold text-white"> BUT Informatique à l&apos;IUT Sorbonne Paris Nord </span>
          afin de renforcer mes compétences en développement et en informatique.
        </p>
      </>
    ),
    stats: [
      { value: "1", label: "Diplôme en cours : BUT Informatique", color: "text-red-400" },
      { value: "2", label: "Diplômes obtenus : Brevet des collèges et Bac Scientifique", color: "text-teal-400" }
    ]
  },

  {
    title: "Mes objectifs",
    content: <>
      <p className="text-gray-400">Après avoir terminé mon BUT, je voudrais me diriger vers <span className="font-bold text-white">un master ou une école d&apos;ingénieurs</span>, pour encore plus me specialiser.</p>
      <p className="text-gray-400">Je souhaite <span className="font-bold text-white">devenir un développeur fullstack</span> pour un jour pouvoir <span className="font-bold text-white">me lancer en tant que freelance ou créer ma propre entreprise</span>. Je veux <span className="font-bold text-white">découvrir le plus de technologies possibles</span> et me perfectionner dans celles que j&apos;aimerais le plus et pour ce faire j&apos;adorerais travailler sur <span className="font-bold text-white">des projets toujours plus créatifs et innovants</span>.</p>
    </>,
    stats: [
      { value: "∞", label: "Envie d&apos;apprendre", color: "text-orange-400" },
      { value: "100%", label: "Motivation", color: "text-indigo-400" }
    ]
  }
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % aboutContent.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + aboutContent.length) % aboutContent.length);
  };

  const currentContent = aboutContent[currentIndex];

  return (
    <motion.section
      id="about"
      className="relative min-h-screen py-24 px-4  text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-2">{currentContent.title}</h2>
            <div className="h-1 w-20 bg-white/50 mx-auto my-6"></div>
            <h2 className="text-xl leading-relaxed max-w-3xl mx-auto">{currentContent.content}</h2>
          </motion.div>

          <motion.div
            key={`stats-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-2 gap-6 max-w-xl mx-auto mt-12"
          >
            {currentContent.stats.map((stat, idx) => (
              <div key={idx} className="p-6 bg-black/20 rounded-lg backdrop-blur-sm text-center">
                <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
                <p className="mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="flex justify-center items-center space-x-16 mt-12">
            <button
              onClick={prevSlide}
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="Contenu précédent"
            >
              <ArrowLeft size={24} />
            </button>

            <div className="flex space-x-2">
              {aboutContent.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                  aria-label={`Aller au contenu ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="Contenu suivant"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
