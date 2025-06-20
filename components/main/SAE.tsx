"use client";
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const saeContent = [
  {
    title: "Mes Projets Académiques (SAE)",
    description: (
      <>
        <p className="text-gray-400">
          Les <span className="font-bold text-white">Situations d'Apprentissage et d'Évaluation</span> (SAE) sont au cœur 
          du <span className="font-bold text-white">BUT Informatique</span>. Ces mises en situation professionnelle 
          permettent d'acquérir des <span className="font-bold text-white">compétences concrètes</span> à travers 
          des projets réalistes.
        </p>
      </>
    ),
    projects: [
      {
        title: "SAE 1.01",
        subtitle: "Implémentation d'un besoin client",
        details: "Conception et développement d'une application répondant à un cahier des charges précis"
      },
      {
        title: "SAE 1.02",
        subtitle: "Comparaison algorithmique",
        details: "Analyse comparative de différentes approches pour résoudre un problème donné"
      }
    ]
  },
  {
    title: "Compétences Acquises",
    description: (
      <>
        <p className="text-gray-400">
          À travers ces SAE, j'ai développé des <span className="font-bold text-white">compétences techniques</span> 
          et <span className="font-bold text-white">méthodologiques</span> essentielles pour mon parcours professionnel.
        </p>
      </>
    ),
    projects: [
      {
        title: "Développement Fullstack",
        subtitle: "Frontend & Backend",
        details: "Maîtrise des architectures complètes et des bonnes pratiques"
      },
      {
        title: "Gestion de Projet",
        subtitle: "Méthodes Agiles",
        details: "Planification, répartition des tâches et respect des délais"
      }
    ]
  }
];

const SAE = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const color = useMotionValue(COLORS[0]);
  
  useEffect(() => {
    const animation = animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    });
    return () => animation.stop();
  }, [color]);

  const background = useMotionTemplate`radial-gradient(170% 120% at 50% 100%, #000 30%, ${color})`;
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % saeContent.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + saeContent.length) % saeContent.length);
  };

  const currentContent = saeContent[currentIndex];
  
  return (
    <motion.section
      id="sae"
      style={{ background }}
      className="relative min-h-screen py-24 px-4 text-gray-200"
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
            <div className="text-xl leading-relaxed max-w-3xl mx-auto">
              {currentContent.description}
            </div>
          </motion.div>

          <motion.div
            key={`projects-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            {currentContent.projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 bg-black/20 rounded-xl backdrop-blur-sm border border-white/10 cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-[#13FFAA]">{project.title}</h3>
                <p className="text-lg mt-2">{project.subtitle}</p>
                <p className="text-gray-400 mt-4">{project.details}</p>
              </motion.div>
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
              {saeContent.map((_, idx) => (
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

export default SAE;