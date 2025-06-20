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
      Mon entrée en BUT 1 a marqué le début de mes études supérieures dans un domaine qui m'était totalement inconnu. Ne venant pas d'un parcours informatique, mes premiers pas ont été compliqués : je ne maîtrisais ni les outils ni les langages de programmation ni les méthodes.
    </p>
    <p className="text-gray-400 mt-2">
      C'est progressivement, à travers les projets scolaires (SAE) et mes initiatives personnelles, que j'ai découvert l'univers fascinant de l'informatique. Cette immersion graduelle a éveillé en moi une véritable passion pour le développement.
    </p>
    <p className="text-gray-400 mt-2">
      Mon parcours en BUT s'est révélé être un tremplin décisif : j'y ai consolidé mes compétences techniques, affiné ma gestion du temps et développé mon aptitude au travail collaboratif. Ces apprentissages ont posé les bases solides de mon évolution professionnelle.
    </p>
    <p className="text-gray-400 mt-2">
      Au fil de cette formation, j'ai appris à transformer mes erreurs en opportunités d'apprentissage, à mieux cerner mes forces et à capitaliser sur ma capacité d'adaptation rapide aux nouveaux outils technologiques.
    </p>
    <p className="text-gray-400 mt-2">
      Mes expériences de stage et mes projets ont confirmé ma détermination à poursuivre dans le développement, avec l'ambition entrepreneuriale de créer un jour ma propre entreprise dans le secteur IT.
    </p>
    <p className="text-gray-400 mt-2">
      Cette exploration continue de l'informatique et des nouvelles technologies a renforcé deux passions majeures : le développement logiciel et l'intelligence artificielle, domaines qui nourrissent désormais mes aspirations professionnelles.
    </p>
  </>,
  stats: []
},
  {
    title: "Mon But",
    content: "En tant qu&apos;étudiant, mon principal objectif est de toucher à tout, que ce soit du front-end ou du back-end. Je veux avoir une vision large de ce que l&apos;informatique, le développement web et l&apos;IA peuvent offrir.",
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
    content: "Je souhaite devenir un développeur fullstack polyvalent pour un jour pouvoir me lancer en tant que freelance ou créer ma propre entreprise. Je veux découvrir le plus de technologies possibles et me perfectionner dans celles que j'aimerais le plus et pour ce faire j'adorerais travailler sur des projets toujours plus créatifs et innovants.",
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
  }, [color]); // Ajout de 'color' comme dépendance
  
  const background = useMotionTemplate`radial-gradient(140% 125% at 50% 0%, #000 40%, ${color} 100%)`;
  
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
