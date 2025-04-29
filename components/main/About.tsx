"use client";
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const COLORS_ABOUT = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const aboutContent = [
  {
    title: "À propos de moi",
    content:
    <>
        <p className="text-gray-400">
        J'etais initialement peu attiré par le 
        <span className="font-bold text-white"> développement en général</span>, j'ai commencé à m'y passionner en découvrant 
        <span className="font-bold text-white"> l'univers de l'informatique</span>, des 
        <span className="font-bold text-white"> nouvelles technologies</span> et de 
        <span className="font-bold text-white"> l'intelligence artificielle</span>. 
        Aujourd'hui, je suis en 
        <span className="font-bold text-white"> deuxième année de BUT Informatique</span> à l'
        <span className="font-bold text-white"> IUT de la Sorbonne Paris Nord</span>.
        </p>
    </>,
   stats: [
    { value: "2+", label: "Années d'études en Informatique", color: "text-yellow-400" },
    { value: "Parcours du BUT", label: "Réalisation d'applications : conception, développement, validation", color: "text-blue-400" }
  ]
  
  },
  {
    title: "Mes compétences",
    content: "Je maîtrise plusieurs technologies front-end modernes, notamment React, Next.js et Tailwind CSS. Mes connaissances s'étendent également au back-end avec Node.js, Express et MongoDB. Je suis constamment à l'affût des dernières tendances pour améliorer mes compétences.",
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
        J'ai débuté mon parcours scolaire au 
        <span className="font-bold text-white"> collège Claude Monet</span> à Argenteuil où j'ai obtenu mon 
        <span className="font-bold text-white"> brevet mention Très Bien</span>, puis j'ai poursuivi au 
        <span className="font-bold text-white"> lycée Julie-Victoire Daubié</span>, obtenant mon 
        <span className="font-bold text-white"> baccalauréat scientifique avec mention Assez Bien</span>, 
        en spécialités 
        <span className="font-bold text-white"> Mathématiques, Physique-Chimie</span> et 
        <span className="font-bold text-white"> Mathématiques Expertes</span>. 
        Actuellement, je poursuis mes études en 
        <span className="font-bold text-white"> BUT Informatique à l'IUT Sorbonne Paris Nord</span> 
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
    content: "Je souhaite devenir un développeur fullstack polyvalent pour un jour pouvoir me lancer en tant que freelance ou creer ma propre entreprise. Je veux decouvrir le plus de technologies possibles et me perfectionner dans celles que j'aimerais le plus et pour ce faire j'adorerais travailler sur des projets toujours plus creatifs et innovants.",
    stats: [
      { value: "∞", label: "Envie d'apprendre", color: "text-orange-400" },
      { value: "100%", label: "Motivation", color: "text-indigo-400" }
    ]
  }
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const color = useMotionValue(COLORS_ABOUT[0]);
  
  useEffect(() => {
    const animation = animate(color, COLORS_ABOUT, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    });
    return () => animation.stop();
  }, []);

  const background = useMotionTemplate`radial-gradient(170% 120% at 50% 100%, #000 30%, ${color})`;
  
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
      style={{ background }}
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